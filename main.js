document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("contactDialog");
  const cancelBtn = document.getElementById("cancelBtn");

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
});