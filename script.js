const pages = [
  "var1.html",
  "var2.html",
  "var3.html",
  "var4.html",
];

const randomPage = pages[Math.floor(Math.random() * pages.length)];
fetch(randomPage)
  .then(res => res.text())
  .then(html => {
    document.getElementById("content").innerHTML = html;
});

console.log("Random background: " + randomPage);
console.log("All backgrounds are taken from Uiverse.io and CodePen.io, and are not my original work. I do not claim any ownership over them.");