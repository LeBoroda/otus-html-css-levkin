document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("contactDialog");
  const cancelBtn = document.getElementById("cancelBtn");
  const openBtn = document.querySelector(".header__message-icon");
  const messageIcon = document.getElementById('messageIcon');
  const iconImage = document.getElementById('iconImage');

  openBtn.addEventListener("click", () => {
    dialog.showModal();
    document.body.style.overflow = "hidden";
  });

  if (dialog.classList.contains("open")) {
    dialog.showModal();
    document.body.style.overflow = "hidden";
  }

  cancelBtn.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("close", () => {
    document.body.style.overflow = "";
  });

  messageIcon.addEventListener('mouseenter', () => {
    iconImage.src = 'img/icons/hover.png';
  });

  messageIcon.addEventListener('mouseleave', () => {
    iconImage.src = 'img/icons/default.png';
  });


  messageIcon.addEventListener('mousedown', () => {
    iconImage.src = 'img/icons/active.png';
  });

  messageIcon.addEventListener('mouseup', () => {
    iconImage.src = 'img/icons/default.png';
  });
});