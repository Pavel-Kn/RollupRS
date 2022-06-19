import "../index.css";
import JS_IMAGE from '../assets/jsLogo.png';

console.log("Hello World!");

const title = document.createElement('h1');
title.textContent = 'I love JavaScript';

const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.src = JS_IMAGE;
document.body.append(title, jsImageHTML);