
// Burger menu
const burger = document.querySelector('.js-burger');
const mobileMenu = document.querySelector('.js-mobile-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})

const menuLinks = mobileMenu.querySelectorAll('a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

// Modal
document.addEventListener('DOMContentLoaded', function () {
    const MODAL_TIMEOUT = 5000;
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const progressBar = document.getElementById('progress-bar');
    const comingSoonLinks = document.querySelectorAll('[data-soon]');
    let autoCloseTimeout;

    function showModal(title) {
        modalTitle.textContent = title;
        modal.classList.add('show');
        document.body.classList.add('no-scroll');
        progressBar.classList.add('animate');

        clearTimeout(autoCloseTimeout);
        autoCloseTimeout = setTimeout(hideModal, MODAL_TIMEOUT);
    }

    function hideModal() {
        modal.classList.remove('show');
        document.body.classList.remove('no-scroll');
        progressBar.classList.remove('animate');
    }

    comingSoonLinks.forEach(link => {
        link.addEventListener('click', function (e) {
        e.preventDefault();
        const title = link.dataset.title || 'This';
        showModal(title);
        });
    });

    closeBtn.addEventListener('click', function () {
        clearTimeout(autoCloseTimeout);
        hideModal();
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
        clearTimeout(autoCloseTimeout);
        hideModal();
        }
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            clearTimeout(autoCloseTimeout);
            hideModal();
        }
    });
});

