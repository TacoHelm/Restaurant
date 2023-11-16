function createHeader()  {
    const content = document.querySelector('#content');
    const header = content.appendChild(document.createElement('div'));
    const title = header.appendChild(document.createElement('h1'));
    const about = header.appendChild(document.createElement('div'));
    const menu = header.appendChild(document.createElement('div'));
    const contact = header.appendChild(document.createElement('div'));
    const container = content.appendChild(document.createElement('div'));
    

    title.textContent = "Taco's Tacorestaurant";
    about.textContent = "Over";
    menu.textContent = "Menu";
    contact.textContent = "Contact"; 
    container.setAttribute('id', 'container');

    about.addEventListener('click', (e) => console.log('about'));
    menu.addEventListener('click', (e) => console.log('menu'));
    contact.addEventListener('click', (e) => console.log('contact'));

}

export {createHeader};

