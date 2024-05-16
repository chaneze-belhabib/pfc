const sidebarOutilsLink = document.getElementById('sidebar-outils-link');

sidebarOutilsLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  window.location.href = 'page8.html'; // Navigate to page8
});
const notificationIcon = document.getElementById('notification-icon');

notificationIcon.addEventListener('click', () => {
  window.location.href = 'page9.html';
});