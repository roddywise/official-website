// 响应式导航栏
document.getElementById('burger').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});

// 图片滑动
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

document.getElementById('next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

document.getElementById('prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

showSlide(currentIndex);

// 表单验证
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        event.preventDefault();
        alert('Please fill in all fields.');
    }
});
