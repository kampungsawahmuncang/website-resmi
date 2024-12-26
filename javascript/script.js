document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null, // Menggunakan viewport sebagai root
    rootMargin: "0px", // Tidak ada margin tambahan
    threshold: 1, // Elemen dianggap terlihat jika 50% berada di viewport
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      } else {
        entry.target.classList.remove('fade-in'); // Opsional: hilangkan animasi saat keluar dari tengah
      }
    });
  }, observerOptions);

  const hiddenImages = document.querySelectorAll('.hidden');
  hiddenImages.forEach((image) => observer.observe(image));
});

document.addEventListener("DOMContentLoaded", function () {
  const tahunSekarang = new Date().getFullYear();
  document.getElementById('nilaiTahun').innerHTML = tahunSekarang;
});

function bukaNavbar() {
  const navBar = document.getElementById('navbar');
  navBar.style.top = '0px';
  navBar.style.left = '0px';
}
function tutupNavbar() {
  const navBar = document.getElementById('navbar');
  navBar.style.top = '0';
  navBar.style.left = '100%';
}
function menujuId(elementId) {
  tutupNavbar();
  setTimeout(() => {
    window.location.href = `#${elementId}`;
}, 1000);
}