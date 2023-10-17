// Menu Toggle Functionality
const menu = document.querySelector('#menu-bars');
const header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

// Cursor Positioning and Activation on Link Hover
const cursor1 = document.querySelector('.cursor-1');
const cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = cursor2.style.top = e.pageY + 'px';
    cursor1.style.left = cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(link => {
    link.onmouseenter = () => cursor1.classList.add('active', cursor2.classList.add('active'));
    link.onmouseleave = () => cursor1.classList.remove('active', cursor2.classList.remove('active'));
});

// Typing Effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Front-end Developer", "Web Designer", "Web Developer", "Software Engineer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", () => textArray.length && setTimeout(type, newTextDelay + 250));

// Back-to-Top Button Functionality
const showOnPx = 150;
const backToTopButton = document.querySelector(".back-to-top");

document.addEventListener("scroll", () => backToTopButton.classList.toggle("hidden", scrollY <= showOnPx));






