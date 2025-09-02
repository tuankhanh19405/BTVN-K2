document.addEventListener('DOMContentLoaded', () => {
  const currentMode = localStorage.getItem('mode') || 'light';
  document.body.className = currentMode + '-mode';
});

function toggleMode() {
  const isLightMode = document.body.classList.contains('light-mode');
  
  document.body.className = isLightMode ? 'dark-mode' : 'light-mode';
  
  localStorage.setItem('mode', isLightMode ? 'dark' : 'light');
}