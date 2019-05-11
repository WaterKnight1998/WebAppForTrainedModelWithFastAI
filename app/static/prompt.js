window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  console.log('Vamos a mostrar el prompt;
  e.preventDefault();
  prompt();
});