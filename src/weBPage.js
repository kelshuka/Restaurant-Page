
function page1 (){
    const ele1 = document.createElement('div');

    const ind1 = document.createElement('div');
    ind1.classList.add('ind1');

    //ind1.style.backgroundImage = "url('webPa.jpg')";
    ind1.style.backgroundImage = "./webPa.jpg";
    ind1.textContent = "Jecmmue! A place of complete merriment!";
    ind1.style.textAlign ='center';

    ele1.appendChild(ind1);


    const ind2 = document.createElement('div');
    ind2.classList.add('ind2');

    ind2.textContent = "Jecmmue! A place where the mouth rejoices and the stomach is in awe!";
    ind2.style.textAlign ='center';

    ele1.appendChild(ind2);

    return ele1;
}

function page2 (){
    const ele2 = document.createElement('div');

    const ind1 = document.createElement('div');
    ind1.classList.add('ind1');

    ind1.style.backgroundImage = "./webPa.jpg";
    ind1.textContent = "Come join us and experience even more than you imagine!";
    ind1.style.textAlign ='center';

    ele2.appendChild(ind1);

    return ele2;

}

export {page1 , page2} ;