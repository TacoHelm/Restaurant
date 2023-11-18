let menu = [];

menu[0] = {
    name: "Italiaanse Taco",
    ingredients: "Met tomaat, mozarella en pesto",
    price: "4,95"
}

menu[1] = {
    name: "Hollandse Taco",
    ingredients: "Met gehakt, aardappels en sperziebonen",
    price: "4,95"
}

menu [2] = {
    name: "Chinese Taco",
    ingredients: "Met kip in zoet-zure saus en gemengde groentes",
    price: "5,95"
}


function createMenu () {
    const container = document.querySelector('#container');
    container.innerHTML = '';
    const title = container.appendChild(document.createElement('h3'));
    title.textContent = "Menu";
    const tableContainer = container.appendChild(document.createElement('div'));
    tableContainer.classList.add('tableContainer');
    const table = tableContainer.appendChild(document.createElement('table'));
    let name = [];
    let ingredients = [];
    let price = [];
    let row1 = [];
    let row2 = [];
    for (let i = 0; i < menu.length; i++) {
        row1[i] = table.appendChild(document.createElement('tr'));
        row2[i] = table.appendChild(document.createElement('tr'));
        name[i] = row1[i].appendChild(document.createElement('td'));
        ingredients[i] = row2[i].appendChild(document.createElement('td'));
        price[i] = row1[i].appendChild(document.createElement('td'));
        row2[i].classList.add('secondRow');
        name[i].textContent = menu[i].name;
        name[i].classList.add('name');
        ingredients[i].textContent = menu[i].ingredients;
        ingredients[i].classList.add('ingredients');
        price[i].textContent = menu[i].price;
        price[i].classList.add('price');
    }
    
}

export {createMenu};