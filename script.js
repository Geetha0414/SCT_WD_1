window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#3366ff';
    } else {
        navbar.style.backgroundColor = '#ff6f61';
    }
});