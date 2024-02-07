/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// function slide() {
//     // เลือก element ที่มี class "slider"
//     var slider = document.querySelector('.slider');
//     // เลื่อนรูปภาพที่อยู่ใน "slider" ไปทางขวา
//     slider.scrollLeft += slider.offsetWidth;
//     // ถ้าเลื่อนไปถึงสุดท้าย ให้เลื่อนกลับไปที่ตำแหน่งแรก
//     if (slider.scrollLeft >= (slider.scrollWidth - slider.offsetWidth)) {
//       slider.scrollLeft = 0;
//     }
//     setInterval(slide, 3000);
//   }

  // เรียกใช้ฟังก์ชัน slide() ทุก 3 วินาที (3000 มิลลิวินาที)
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let index = 0;

function slide() {
    index = (index + 1) % images.length;
    const offset = -index * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

setInterval(slide, 3500); // เปลี่ยนรูปทุก 3 วินาที


const slider1 = document.querySelector('.slider1');
const images1 = document.querySelectorAll('.slider1 img');

let index1 = 0;

function slide1() {
    index1 = (index1 + 1) % images1.length;
    const offset = -index1 * 100;
    slider1.style.transform = `translateX(${offset}%)`;
}

setInterval(slide1, 3500); // เปลี่ยนรูปทุก 3 วินาที