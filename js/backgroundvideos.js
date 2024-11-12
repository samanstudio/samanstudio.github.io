const container = document.querySelector('.hero-img');
const video = document.querySelector('video#hero-video');

window.addEventListener('scroll', () => {
    const rect = container.getBoundingClientRect();
    const offset = -rect.top;
    video.style.transform = `translateY(${offset}px)`;
});