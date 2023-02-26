const dateConst = new Date();

function formatDate(dateConst) {

    const day = leftZero(dateConst.getDate());
    const month = leftZero(dateConst.getMonth() + 1);                       // -> starts on 0, january is 0, so...
    const year = dateConst.getFullYear();
    const hours = leftZero(dateConst.getHours());
    const minutes = leftZero(dateConst.getMinutes());
    const seconds = leftZero(dateConst.getSeconds());
    const ms = dateConst.getMilliseconds();
    const dayOfTheWeek = dayWeek(dateConst.getDay());

    return `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}:${ms}  - Jour de la semaine: ${dayOfTheWeek}`;
}

function leftZero (num) {
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
}

const datePy = formatDate(dateConst);
console.log(datePy);

/*

// const dateConst = new Date(0); // -> 1970, january, day 1, 0 hours, 0 minutes, 0 seconds, 0 miliseconds (Timestamp Unix)
// const dateConst = new Date(year, month -1, day, hour, minute, second, millisecond);

const pyGMT = 60 * 60 * 24 * 1000;               // -> setting a correction 'cause of the time zone difference is in ms
const dateConst = new Date('2022-02-26 00:00:00');        // -> february, 26, 2022
const samedateConst = new Date(2022, 1, 26);

console.log('Day: ', dateConst.getDate());
console.log('Month: ', dateConst.getMonth());                       // -> starts on 0, january is 0, so...
console.log('Year: ', dateConst.getFullYear());
console.log('Hour: ', dateConst.getHours());
console.log('Minutes: ', dateConst.getMinutes());
console.log('Seconds: ', dateConst.getSeconds());
console.log('Milliseconds: ', dateConst.getMilliseconds());
console.log('DOTW: ', dateConst.getDay());




console.log(dateConst.toString(), samedateConst.toString());

*/