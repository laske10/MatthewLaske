/* Matthew M. Laske — Site Scripts */
function enlargeImage(imgSrc, imgDescription) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  if (modal && modalImg) {
    modal.style.display = "flex";
    modalImg.src = imgSrc;
    if (captionText) captionText.innerHTML = imgDescription;
    document.body.style.overflow = "hidden";
  }
}
function closeModal() {
  var modal = document.getElementById("myModal");
  if (modal) { modal.style.display = "none"; document.body.style.overflow = ""; }
}
document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeModal(); });
function toggleAbstract(id) {
  var el = document.getElementById(id);
  if (el) el.style.display = el.style.display === "none" ? "block" : "none";
}
document.addEventListener("DOMContentLoaded", function() {
  var els = document.querySelectorAll(".fade-in");
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(function(el) { obs.observe(el); });
  } else {
    els.forEach(function(el) { el.classList.add("visible"); });
  }
});
