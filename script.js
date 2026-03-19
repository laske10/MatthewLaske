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

function toggleAbstract(abstractId) {
  var abstract = document.getElementById(abstractId);
  if (abstract) abstract.style.display = abstract.style.display === "none" ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", function() {
  var fadeEls = document.querySelectorAll(".fade-in");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(function(el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function(el) { el.classList.add("visible"); });
  }
});
