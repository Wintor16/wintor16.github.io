document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const dropdownToggles = document.querySelectorAll('.dropdown > a');

    // Hamburger menüsü için tıklama olayı
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Dropdown menüleri açma ve kapama işlevselliği
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault(); // varsayılan tıklama olayını engelle
            const parent = this.parentNode;
            parent.classList.toggle('open');

            // Diğer dropdownları kapat
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle && otherToggle.parentNode.classList.contains('open')) {
                    otherToggle.parentNode.classList.remove('open');
                }
            });
        });
    });

    // Dropdown menü dışında tıklanınca kapatma işlevselliği
    window.addEventListener('click', function(e) {
        dropdownToggles.forEach(toggle => {
            if (!toggle.parentNode.contains(e.target)) {
                toggle.parentNode.classList.remove('open');
            }
        });

        // Header üzerinde olunmadığında dropdownları kapat
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
            dropdownToggles.forEach(toggle => {
                toggle.parentNode.classList.remove('open');
            });
        }
    });

    // Sayfa yüklendiğinde animasyonlar
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach(element => {
        element.classList.add('animate');
    });

    // Kaydırma (scroll) olayı dinleyerek animasyon ekleme
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});

