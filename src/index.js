//console.log("testing it");

import './style.css';
import { page1 } from "./weBPage";
import { menu } from './menu';
import { contact } from './contact';


page1();
//menu();

const header = document.querySelector('header');
header.classList.add('buttns');

//const Menu = document.querySelector('.menu');

document.getElementById('home').addEventListener('click', (e)=> {
    page1();
});


document.getElementById('menu').addEventListener('click', (e)=> {
    menu();
});

document.getElementById('contact').addEventListener('click', (e)=> {
    contact();
});
