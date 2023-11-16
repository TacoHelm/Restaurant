let about = [];

about[0] = {
    title: 'Wie ben ik',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor bibendum porta. Nam et ultricies mi. Cras quam ex, eleifend non mauris ac, consequat congue mi. Sed placerat, nunc nec congue rhoncus, libero augue aliquam felis, a viverra sem lacus sed ex. Proin nisi purus, vulputate a auctor et, gravida nec est. Curabitur ut nisi in urna iaculis cursus eu nec velit. Mauris porttitor lacus non sem finibus pellentesque.'
}

about[1] = {
    title: "Waarom Taco's Tacorestaurant",
    text: 'Vivamus hendrerit aliquam eros. Donec non dapibus libero. Suspendisse eu viverra justo. In efficitur, turpis in molestie aliquam, ante ex commodo quam, sit amet tincidunt velit nibh vel lacus. Vestibulum sit amet ullamcorper dui, a scelerisque ligula. In ultricies in turpis sit amet luctus. Nunc feugiat, dui ultrices euismod vehicula, lorem est eleifend eros, ac ullamcorper elit arcu eu lorem. Vivamus vehicula ultricies purus vel egestas. Nam sollicitudin viverra quam, in convallis felis varius eget. Nam a luctus orci. Morbi quis sollicitudin velit, et volutpat ex. Vivamus malesuada, libero ut fringilla blandit, ligula dui mollis est, eget ultricies metus tortor et neque. Etiam cursus ex sed sapien fermentum, ac dictum est pharetra.'
}

function createAbout () {
    const container = document.querySelector('#container');
    let title = [];
    let text = [];
    console.log(container);
    for (let i = 0; i < about.length; i++) {
        title[i] = container.appendChild(document.createElement('h3'));
        text[i] = container.appendChild(document.createElement('p'));
        title[i].textContent = about[i].title;
        text[i].textContent = about[i].text;
    }
    
}

export {createAbout};