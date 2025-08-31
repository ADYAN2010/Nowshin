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

// ===== Chapter pages configuration =====
// Add all pages of each chapter here
const chapterPages = {
  "chapter_1": [
    "page_1.html","page_2.html","page_3.html","page_4.html","page_5.html",
    "page_6.html","page_7.html","page_8.html","page_9.html","page_10.html"
  ],
  "chapter_2": [
    "page_1.html","page_2.html","page_3.html","page_4.html","page_5.html",
    "page_6.html","page_7.html","page_8.html","page_9.html","page_10.html"
  ],
  // Add more chapters if needed
};

// ===== Keyboard navigation =====
// ArrowRight = next page, ArrowLeft = previous page
document.addEventListener("keydown", (e) => {
  const currentUrl = window.location.pathname;
  const parts = currentUrl.split("/"); // ["folder", "chapter_1", "page_1.html"]
  const folder = parts[parts.length - 2]; // "chapter_1"
  const page = parts[parts.length - 1]; // "page_1.html"

  if (!page.startsWith("page_")) return;
  const pages = chapterPages[folder];
  if (!pages) return; // no pages defined for this chapter

  const pageIndex = pages.indexOf(page);
  if (pageIndex === -1) return;

  if (e.key === "ArrowRight" && pageIndex < pages.length - 1) {
    window.location.href = `./${pages[pageIndex + 1]}`;
  } else if (e.key === "ArrowLeft" && pageIndex > 0) {
    window.location.href = `./${pages[pageIndex - 1]}`;
  }
});
