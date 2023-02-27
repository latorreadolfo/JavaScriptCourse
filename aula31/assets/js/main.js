const dateConst = new Date();

function formatDate(dateConst) {

    const day = leftZero(dateConst.getDate());
    const month = getMonthText(dateConst.getMonth());                       // -> starts on 0, january is 0, so...
    const year = dateConst.getFullYear();
    const hours = leftZero(dateConst.getHours());
    const minutes = leftZero(dateConst.getMinutes());
    const dayOfTheWeek = dayWeek(dateConst.getDay());

    return `${month} ${day}, ${year} ${hours}:${minutes} - Jour de la semaine: ${dayOfTheWeek}`;
}

function leftZero(num) {
    return num >= 10 ? num : `0${num}`;
}

function dayWeek(num) {
    if (num === 0) return `Dimanche`;
    if (num === 1) return `Lundi`;
    if (num === 2) return `Mardi`;
    if (num === 3) return `Mercredi`;
    if (num === 4) return `Jeudi`;
    if (num === 5) return `Vendredi`;
    if (num === 6) return `Samedi`;
    else return `Wrong Input`;
}
/*
function dayWeek(num) {                                                                                 // -> short option to use in this function
    const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    return daysOfWeek[num];
}
*/

function getMonthText(num) {
    switch (num) {
        case 0:
            return `Janvier`;
        case 1:
            return `Février`;
        case 2:
            return `Mars`;
        case 3:
            return `Avril`;
        case 4:
            return `Mai`;
        case 5:
            return `Juin`;
        case 6:
            return `Juillet`;
        case 7:
            return `Août`;
        case 8:
            return `Septembre`;
        case 9:
            return `Octobre`;
        case 10:
            return `Novembre`;
        case 11:
            return `Décembre`;
        default:
            return `Wrong Input`;
    }
}

const dateInFrench = formatDate(dateConst);

document.querySelector('#dateDisplay');
const showDate = document.querySelector('#dateDisplay');
showDate.innerHTML = dateInFrench;


// const h1 = document.querySelector('#dateDisplay');                                                   // -> SHORT SOLUTION
// const dateData = new Date()
// h1.innerHTML = dateData.toLocaleDateString('fr-fr', { dateStyle: 'full', timeStyle: 'short' });