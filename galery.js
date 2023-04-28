// Gallery

const images = document.querySelectorAll('.column img');
let modal = document.querySelector('.modal');
let modalImage = document.querySelector('.modal img');

modalImage.addEventListener('click', () => modal.classList.toggle('hide'));
images.forEach(img => img.addEventListener('click', increaseImage));

function increaseImage(e) {
    let currentImageSrc = e.target.getAttribute('src');
    modalImage.setAttribute('src', currentImageSrc);
    modal.classList.remove('hide');
}