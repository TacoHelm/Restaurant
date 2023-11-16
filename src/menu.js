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
    const table = container.appendChild(document.createElement('table'));
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
        name[i].textContent = menu[i].name;
        ingredients[i].textContent = menu[i].ingredients;
        price[i].textContent = menu[i].price;
    }
    
}

export {createMenu};