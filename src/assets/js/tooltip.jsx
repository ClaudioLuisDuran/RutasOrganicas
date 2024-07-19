// Tooltip.js
const showTooltip = () => {
    const tooltip = document.getElementById('tooltipOK');
    tooltip.classList.add('show');
  };
  
  const hideTooltip = () => {
    const tooltip = document.getElementById('tooltipOK');
    tooltip.classList.remove('show');
  };
  
  export { showTooltip, hideTooltip };