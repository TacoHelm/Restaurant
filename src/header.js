function createHeader()  {
    const content = document.querySelector('#content');
    const header = content.appendChild(document.createElement('div'));
    const title = header.appendChild(document.createElement('h1'));
    const buttons = header.appendChild(document.createElement('div')); 
    const about = buttons.appendChild(document.createElement('div'));
    const menu = buttons.appendChild(document.createElement('div'));
    const contact = buttons.appendChild(document.createElement('div'));
    const container = content.appendChild(document.createElement('div'));
    

    title.textContent = "Taco's Tacorestaurant";
    about.textContent = "Over";
    menu.textContent = "Menu";
    contact.textContent = "Contact"; 
    buttons.classList.add('button-container')
    about.classList.add('button');
    menu.classList.add('button');
    contact.classList.add('button');
    container.setAttribute('id', 'container');

}

export {createHeader};

