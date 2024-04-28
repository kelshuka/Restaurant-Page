
import './style.css';

function contact() {
    const parentDiv = document.getElementById('content');
    parentDiv.innerHTML = '';

    const me = document.createElement('div');
    me.innerHTML = '';

    const me1 = document.createElement('div');
    me1.innerHTML = '';

    const p1 = document.createElement('p');
    p1.textContent = "Address:";
    //p1.classList.add('title');

    const p2 = document.createElement('p');
    p2.textContent = "#1 Roadblock Avenue, Old hackon stree, Melbourne.";

    const p3 = document.createElement('p');
    p3.textContent = "Book Reservation: 004 567 987 789";

    me1.append(p1, p2, p3);

    me1.classList.add('terplo2');

    me.append(me1);

    parentDiv.append(me);

}

export{contact};