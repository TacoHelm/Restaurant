import {createHeader} from "./header";
import { createAbout } from "./about";
import { createContact } from "./contact";
import { createMenu } from "./menu";
import "./style.css";

createHeader();
createAbout();


const button = document.querySelectorAll('.button');
button[0].addEventListener('click', () => createAbout());
button[1].addEventListener('click', () => createMenu());
button[2].addEventListener('click', (e) => createContact());


