const elements = [
    {tag: 'p', text: 'Any text.'},
    {tag: 'div', text: 'Any text. 2'},
    {tag: 'section', text: 'Any text. 3'},
    {tag: 'footer', text: 'Any text. 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    let { tag, text } = elements[i];
    let createdTag = document.createElement(tag);
    let createdText = document.createTextNode(text);
    createdTag.appendChild(createdText);
    div.appendChild(createdTag);
}

container.appendChild(div);