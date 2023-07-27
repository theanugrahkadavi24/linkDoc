// Fungsi untuk membuka sidebar
function openSidebar() {
  document.querySelector(".sidebar").classList.add("sidebar-open");
}

// Fungsi untuk menutup sidebar
function closeSidebar() {
  document.querySelector(".sidebar").classList.remove("sidebar-open");
}

// Mengatur event listener untuk tombol hamburger menu
document
  .getElementById("hamburger-menu")
  .addEventListener("click", openSidebar);

// Mengatur event listener untuk tombol menutup sidebar
document
  .getElementById("close-sidebar-button")
  .addEventListener("click", closeSidebar);
