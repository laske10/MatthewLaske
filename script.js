var lbImages=[],lbIndex=0;
function openLightbox(src,caption,group){
  lbImages=[];
  if(group){var items=document.querySelectorAll('[data-lb-group="'+group+'"]');
    items.forEach(function(el){lbImages.push({src:el.getAttribute('data-lb-src'),caption:el.getAttribute('data-lb-caption')||''})});
    for(var i=0;i<lbImages.length;i++){if(lbImages[i].src===src){lbIndex=i;break}}
  }else{lbImages=[{src:src,caption:caption||''}];lbIndex=0}
  showLbImg();var o=document.getElementById('lightbox');o.classList.add('active');document.body.style.overflow='hidden';
  o.querySelectorAll('.lightbox-nav').forEach(function(a){a.style.display=lbImages.length>1?'flex':'none'})
}
function showLbImg(){var o=document.getElementById('lightbox'),img=o.querySelector('img'),cap=o.querySelector('.lightbox-caption');
  img.src=lbImages[lbIndex].src;cap.textContent=lbImages[lbIndex].caption;img.style.animation='none';img.offsetHeight;img.style.animation=''}
function lbNav(d){lbIndex=(lbIndex+d+lbImages.length)%lbImages.length;showLbImg()}
function closeLightbox(){document.getElementById('lightbox').classList.remove('active');document.body.style.overflow=''}
document.addEventListener('keydown',function(e){var o=document.getElementById('lightbox');if(!o||!o.classList.contains('active'))return;
  if(e.key==='Escape')closeLightbox();if(e.key==='ArrowRight')lbNav(1);if(e.key==='ArrowLeft')lbNav(-1)});
function enlargeImage(s,c){openLightbox(s,c,null)}
function closeModal(){closeLightbox()}
document.addEventListener('DOMContentLoaded',function(){
  var els=document.querySelectorAll('.fade-in');
  if('IntersectionObserver' in window){var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:0.1});
    els.forEach(function(el){obs.observe(el)})}else{els.forEach(function(el){el.classList.add('visible')})}
});
function toggleAbstract(id){var el=document.getElementById(id);if(el)el.style.display=el.style.display==='none'?'block':'none'}
