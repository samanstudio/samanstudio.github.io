// const container = document.querySelector('.hero-img');
// const video = document.querySelector('video#hero-video');

const videoContainers = document.getElementsByClassName('bg-video-container');
const videos = document.getElementsByClassName('bg-video');

window.addEventListener('scroll', () => {
    for (let vc = 0; vc < videoContainers.length; vc++) {
        const rect = videoContainers[vc].getBoundingClientRect();
        const offset = -rect.top;
        videos[vc].style.transform = `translateY(${offset}px)`;
    }
    // const rect = container.getBoundingClientRect();
    // const offset = -rect.top;
    // video.style.transform = `translateY(${offset}px)`;
});