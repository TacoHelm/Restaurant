let contact = [];

contact[0] = {
    title: 'Adres',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor bibendum porta. Nam et ultricies mi. Cras quam ex, eleifend non mauris ac, consequat congue mi. Sed placerat, nunc nec congue rhoncus, libero augue aliquam felis, a viverra sem lacus sed ex. Proin nisi purus, vulputate a auctor et, gravida nec est. Curabitur ut nisi in urna iaculis cursus eu nec velit. Mauris porttitor lacus non sem finibus pellentesque.'
}

contact[1] = {
    title: "Openingstijden",
    text: 'Vivamus hendrerit aliquam eros. Donec non dapibus libero. Suspendisse eu viverra justo. In efficitur, turpis in molestie aliquam, ante ex commodo quam, sit amet tincidunt velit nibh vel lacus. Vestibulum sit amet ullamcorper dui, a scelerisque ligula. In ultricies in turpis sit amet luctus. Nunc feugiat, dui ultrices euismod vehicula, lorem est eleifend eros, ac ullamcorper elit arcu eu lorem. Vivamus vehicula ultricies purus vel egestas. Nam sollicitudin viverra quam, in convallis felis varius eget. Nam a luctus orci. Morbi quis sollicitudin velit, et volutpat ex. Vivamus malesuada, libero ut fringilla blandit, ligula dui mollis est, eget ultricies metus tortor et neque. Etiam cursus ex sed sapien fermentum, ac dictum est pharetra.'
}

function createContact () {
    const container = document.querySelector('#container');
    container.innerHTML = '';
    let title = [];
    let text = [];
    for (let i = 0; i < contact.length; i++) {
        title[i] = container.appendChild(document.createElement('h3'));
        text[i] = container.appendChild(document.createElement('p'));
        title[i].textContent = contact[i].title;
        text[i].textContent = contact[i].text;
    }
    
}

export {createContact};