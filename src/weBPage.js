
import './style.css';
import bcgd from './webPa.jpg';

function page1(){
    const parentDiv = document.getElementById('content');
    parentDiv.innerHTML = '';

    

    const ind1 = document.createElement('div');
    ind1.classList.add('backg');
    ind1.classList.add('terplo');

    const ind = document.createElement('div');


    let weImag = new Image();
    weImag.src = bcgd;
    ind.textContent = "Jecmmue! A place of complete merriment!";
    ind.style.textAlign ='center';



    ind.textContent = "Jecmmue! A place where the mouth rejoices and the stomach is in awe!";
    ind.style.textAlign ='center';

    ind.classList.add('terplo1');

    ind1.append(ind);


    const para = document.createElement('p');

   
    const ind3 = document.createElement('div');


    ind3.style.backgroundImage = "./webPa.jpg";
    ind3.textContent = "Come join us and experience even more than you imagine!";
    ind3.style.textAlign ='center';



    parentDiv.append(ind1, para,ind3 );

}


export {page1 } ;