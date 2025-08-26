/* ====== Scroll reveal (IntersectionObserver) ====== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ====== Countdown do datuma ====== */
/* Postavi datum/ vrijeme događaja u lokalnoj zoni */
const eventDate = new Date('2027-07-27T18:00:00'); // 27.7.2027 u 18:00

function pad(n){ return n.toString().padStart(2,'0'); }

function tick(){
  const now = new Date();
  let diff = Math.max(0, eventDate - now);

  const sec = Math.floor(diff / 1000) % 60;
  const min = Math.floor(diff / (1000*60)) % 60;
  const hrs = Math.floor(diff / (1000*60*60)) % 24;
  const days = Math.floor(diff / (1000*60*60*24));

  document.getElementById('cd-days').textContent = days;
  document.getElementById('cd-hours').textContent = pad(hrs);
  document.getElementById('cd-minutes').textContent = pad(min);
  document.getElementById('cd-seconds').textContent = pad(sec);
}
tick();
setInterval(tick, 1000);

/* ====== Blagi parallax za slike pri skrolu ====== */
const pics = document.querySelectorAll('.photo-frame img');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  pics.forEach(img=>{
    img.style.transform = `translateY(${Math.sin((y+img.offsetTop)*0.001)*4}px)`;
  });
}, {passive:true});
