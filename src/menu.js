
import './style.css';
//import sv1 from './star-plus-outline.svg';
//import sv2 from './source-fork.svg';

function menu(){
    //const parentDiv = document.createElement('div');
    const parentDiv = document.getElementById('content');
    parentDiv.innerHTML = '';

    const grpDiv = document.createElement('div');
    grpDiv.innerHTML = '';

    const me1 = document.createElement('div');
    me1.innerHTML = '';

    const p1 = document.createElement('p');
    p1.textContent = "Cod Fish and Potatoe";
    p1.classList.add('title');

    const p2 = document.createElement('p');
    p2.textContent = "Traditionally made cod fish and potatoe, served with your favourite red wine!";

    const de1 = document.createElement('div');
    de1.innerHTML = '';
    const deb = document.createElement('button');
    deb.innerHTML = 'order';
    de1.appendChild(deb);
    //de1.append(sv1);
    //de1.append(sv2);

    de1.classList.add('mainSvg');

    me1.append(p1, p2,de1 );
    me1.classList.add('Cards');



    const me2 = document.createElement('div');
    me2.innerHTML = '';

    const p12 = document.createElement('p');
    p12.textContent = "Rice and Chicken PepperSoup";
    p12.classList.add('title');

    const p22 = document.createElement('p');
    p22.textContent = "Traditionally made Rice and chicken pepper soup, served with your favourite white wine!";

    const de2 = document.createElement('div');
    de2.innerHTML = '';
    const deb2 = document.createElement('button');
    deb2.innerHTML = 'order';
    de2.appendChild(deb2);
    //de2.append(sv1);
    //de2.append(sv2);

    de2.classList.add('mainSvg');

    me2.append(p12, p22,de2 );
    me2.classList.add('Cards');


    const me3 = document.createElement('div');
    me3.innerHTML = '';

    const p13 = document.createElement('p');
    p13.textContent = "Desserts";
    p13.classList.add('title');

    const p23 = document.createElement('p');
    p23.textContent = "Yummy yummy variety of desserts!";

    const de3 = document.createElement('div');
    de3.innerHTML = '';
    const deb3 = document.createElement('button');
    deb3.innerHTML = 'order';
    de3.appendChild(deb3);
    //de3.append(sv1);
    //de3.append(sv2);

    de3.classList.add('mainSvg');

    me3.append(p13, p23,de3 );
    me3.classList.add('Cards');


    const me4 = document.createElement('div');
    me4.innerHTML = '';

    const p14 = document.createElement('p');
    p14.textContent = "Yogurts";
    p14.classList.add('title');

    const p24 = document.createElement('p');
    p24.textContent = "Order your yummy yummy Yogurts!";

    const de4 = document.createElement('div');
    de4.innerHTML = '';
    const deb4 = document.createElement('button');
    deb4.innerHTML = 'order';
    de4.appendChild(deb4);
    //de3.append(sv1);
    //de3.append(sv2);

    de4.classList.add('mainSvg');

    me4.append(p14, p24,de4 );
    me4.classList.add('Cards');

    grpDiv.append(me1,me2,me3, me4);
    grpDiv.classList.add('projects');

    parentDiv.append(grpDiv);
    //parentDiv.classList.add('mainContent');

}

export {menu } ;