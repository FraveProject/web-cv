const modal = document.getElementById("pdfModal");
const viewer = document.getElementById("pdfViewer");
const downloadBtn = document.getElementById("downloadBtn");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".open-modal").forEach(link => {

  link.addEventListener("click", (e) => {
    e.preventDefault();

    const pdfPath = link.dataset.pdf;

    viewer.src = pdfPath;
    downloadBtn.href = pdfPath;

    modal.classList.add("active");
  });

});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  viewer.src = ""; // Limpia el iframe
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    viewer.src = "";
  }
});