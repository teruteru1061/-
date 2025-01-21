document.addEventListener('DOMContentLoaded', () => {
  const deleteButton = document.getElementById('delete-button');
  const homeScreen = document.getElementById('home-screen');
  const confirmationScreen = document.getElementById('confirmation-screen');
  const deletedScreen = document.getElementById('deleted-screen');
  const confirmDeleteButton = document.getElementById('confirm-delete');
  const cancelDeleteButton = document.getElementById('cancel-delete');

  // Register the service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(() => {
      console.log('Service Worker registered successfully.');
    }).catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
  }

  deleteButton.addEventListener('click', () => {
    homeScreen.classList.add('hidden');
    confirmationScreen.classList.remove('hidden');
  });

  confirmDeleteButton.addEventListener('click', () => {
    confirmationScreen.classList.add('hidden');
    deletedScreen.classList.remove('hidden');
  });

  cancelDeleteButton.addEventListener('click', () => {
    confirmationScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
  });
});
