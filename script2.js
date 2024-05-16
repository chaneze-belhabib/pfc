document.getElementById('friend1').addEventListener('click', function() {
    window.location.href = 'page3.html';
  });

  const notificationIcon = document.getElementById('notification-icon');

notificationIcon.addEventListener('click', () => {
  window.location.href = 'page9.html';
});

  const menuButton = document.querySelector('.menu-button');
  const userMenu = document.querySelector('#user-menu');
  
  menuButton.addEventListener('click', () => {
    userMenu.classList.toggle('hidden');
  });
  const settingsLink = document.querySelector('#settings-link');

settingsLink.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = 'page4.html';
});
const cardAvatarIcon = document.querySelector('.card-avatar-icon');

cardAvatarIcon.addEventListener('click', () => {
  window.location.href = 'page5.html';
});
const sidebarOutilsLink = document.getElementById('sidebar-outils-link');

sidebarOutilsLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  window.location.href = 'page8.html'; // Navigate to page8
});