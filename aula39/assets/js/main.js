const paragraphs = document.querySelector('.paragraphs');
const p_s = paragraphs.querySelectorAll('p');

const bodyStyle = getComputedStyle(document.body);
const backgroundColorBody = bodyStyle.backgroundColor;
console.log(backgroundColorBody);


for (let p of p_s) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
    console.log(p);
}