// ===== Fade-in effect for page content =====
document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".page-content");
  if (content) {
    content.style.opacity = 0;
    content.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      content.style.opacity = 1;
    }, 100);
  }
});

// ===== Keyboard navigation =====
// ArrowRight = go to next page
// ArrowLeft = go to previous page
document.addEventListener("keydown", (e) => {
  const currentUrl = window.location.pathname;
  const parts = currentUrl.split("/"); // ["online-love-story", "chapter_1", "page_1.html"]
  const folder = parts[parts.length - 2]; // "chapter_1"
  let page = parts[parts.length - 1]; // "page_1.html"

  if (!page.startsWith("page_")) return;

  const pageNum = parseInt(page.replace("page_", "").replace(".html", ""));
  let nextPage = null;
  let prevPage = null;

  if (pageNum < 10) nextPage = `page_${pageNum + 1}.html`;
  if (pageNum > 1) prevPage = `page_${pageNum - 1}.html`;

  if (e.key === "ArrowRight" && nextPage) {
    window.location.href = `./${nextPage}`;
  } else if (e.key === "ArrowLeft" && prevPage) {
    window.location.href = `./${prevPage}`;
  }
});
