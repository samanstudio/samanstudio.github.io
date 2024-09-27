
const nav = document.querySelector(".navbar");

document.addEventListener('DOMContentLoaded', function() {

    function addShadow() {
        console.log('shadow');
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg');
        } else {
            nav.classList.remove('shadow-bg');
        }
    }
    window.addEventListener('scroll', addShadow);
})

// $('#commissions-link').click(function(){ 

//     console.log('commissions-scroll');
//     window.location.href="../index.html";
// window.scrollTo(450, document.body.scrollHeight);    
// return false;

// });

// $('#commissions-link').on('click', function (event) {
//     if (location.href.indexOf("/index.html") > -1) {
//         $('html, body').animate({
//             scrollTop: $("#commissions").offset(344).top
//         }, 1000);
//     console.log('if');
//     } else {
//         window.location = "index.html";
//         console.log('else');
//     }
// });