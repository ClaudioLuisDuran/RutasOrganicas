<?php
// Configuración del servidor de correo saliente
$smtp_host = 'c1952405.ferozo.com';
$smtp_port = 465;
$smtp_user = 'info@rutasorganicas.com';
$smtp_pass = 'Ronny/2024';

// Función para enviar correo electrónico
function send_email($to, $from, $subject, $body) {
    global $smtp_host, $smtp_port, $smtp_user, $smtp_pass;

    // Validación de datos de entrada
    $to = filter_var($to, FILTER_VALIDATE_EMAIL);
    $from = filter_var($from, FILTER_VALIDATE_EMAIL);
    $subject = trim($subject);
    $body = trim($body);

    if (!$to || !$from || $subject === '' || $body === '') {
        throw new Exception('Algunos datos de entrada son inválidos.');
    }

    // Configuración del correo electrónico
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    try {
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = $smtp_host;
        $mail->Port = $smtp_port;
        $mail->SMTPAuth = true;
        $mail->Username = $smtp_user;
        $mail->Password = $smtp_pass;

        $mail->setFrom($from, 'Remitente');
        $mail->addAddress($to, 'Destinatario');
        $mail->Subject = $subject;
        $mail->Body = $body;

        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log('Error enviando correo electrónico: ' . $e->getMessage());
        throw $e;
    }
}

// líneas de depuración
echo "Datos recibidos: ";
print_r($data);
echo "\n";

if (is_array($data) && !empty($data)) {
    $nombre = $data['nombre'];
    $email = $data['email'];
    $telefono = $data['telefono'];
    $empresa = $data['empresa'];
    $provincia = $data['provincia'];
    $pais = $data['pais'];
    $mensaje = $data['mensaje'];

    // Configuración del correo electrónico
    $to = 'info@rutasorganicas.com';
    $from = $email;
    $subject = 'Nuevo mensaje desde el sitio web';
    $body = "Nombre: $nombre\n";
    $body .= "Correo electrónico: $email\n";
    $body .= "Teléfono: $telefono\n";
    $body .= "Empresa: $empresa\n";
    $body .= "Provincia: $provincia\n";
    $body .= "País: $pais\n";
    $body .= "Mensaje: $mensaje";

    try {
        if (send_email($to, $from, $subject, $body)) {
            // Responder con un JSON válido
            http_response_code(200);
            header('Content-Type: application/json');
            echo json_encode(['message' => 'Formulario enviado correctamente']);
        } else {
            // Responder con un error
            http_response_code(500);
            header('Content-Type: application/json');
            echo json_encode(['message' => 'Error al enviar el correo electrónico']);
        }
    } catch (Exception $e) {
        // Responder con un error si hay problemas al enviar el correo
        http_response_code(500);
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Error: ' . $e->getMessage()]);
    }
} else {
    // Responder con un error si los datos del formulario no son válidos
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode(['message' => 'Error al procesar los datos del formulario']);
}
?>