const pages = [
  "var1.html",
  "var2.html",
  "var3.html",
];

const randomPage = pages[Math.floor(Math.random() * pages.length)];
fetch(randomPage)
  .then(res => res.text())
  .then(html => {
    document.getElementById("content").innerHTML = html;
});