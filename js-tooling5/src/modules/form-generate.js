import genPwd from "./generators";

const pwdOutput = document.querySelector('.output-pwd');
const qtyChar = document.querySelector('.qty-char');
const chkUpper = document.querySelector('.chk-upper');
const chkLower = document.querySelector('.chk-lower');
const chkNumber = document.querySelector('.chk-number');
const chkSymbol = document.querySelector('.chk-symbol');
const genPassword = document.querySelector('.generatepwd')

export default () => {
    genPassword.addEventListener('click', () => {
        pwdOutput.innerHTML = gen();
    });
};

function gen() {
  const password = genPwd(
    qtyChar.value,
    chkUpper.checked,
    chkLower.checked,
    chkNumber.checked,
    chkSymbol.checked
    );
    
    return password || `Sorry, Nothing was selected.`;
}