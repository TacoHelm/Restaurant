import {createHeader} from "./header";
import { createAbout } from "./about";
import { createContact } from "./contact";
import { createMenu } from "./menu";
import "./style.css";

createHeader();
createAbout();

const button = document.querySelectorAll('.button');
button[0].addEventListener('click', () => {
    createAbout();
    activateButton(0);
    });

button[1].addEventListener('click', () => {
    createMenu();
    activateButton(1);
    });
    
button[2].addEventListener('click', (e) => {
    createContact();
    activateButton(2);
    });


function activateButton(num) {
    for (let i = 0; i < 3; i++) {
        button[i].classList.remove('active');
        if (i == num) button[i].classList.add('active');
    }
}


activateButton(0);





