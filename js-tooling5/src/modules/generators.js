const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const genUpper = () => String.fromCharCode(rand(65, 91));
const genLower = () => String.fromCharCode(rand(97, 123));
const genNumber = () => String.fromCharCode(rand(48, 58));
const symbols = '.,~[]{}!@#$%-_+';
const genSymbols = () => symbols[rand(0, symbols.length)];

export default function genPwd(qty, upper, lower, num, sym) {
    const pwdArray = [];
    qty = Number(qty);

    if(qty > 30) return `30 characters maximum, pal!`;
    if(qty < 4) return `4 characters minimum, pal!`;
    
    for(let i = 0; i < qty; i++) {
        upper && pwdArray.push(genUpper());
        lower && pwdArray.push(genLower());
        num && pwdArray.push(genNumber());
        sym && pwdArray.push(genSymbols());
    }
    
    return pwdArray.join('').slice(0, qty);
}

