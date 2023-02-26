const datePick = new Date();
const numberOfWeek = datePick.getDay();



function dayGenerator(num) {
    let dayOfWeek;
    switch (numberOfWeek) {
        case 0:
            dayOfWeek = `Dimanche`;
            return dayOfWeek;
        case 1:
            dayOfWeek = `Lundi`;
            return dayOfWeek;
        case 2:
            dayOfWeek = `Mardi`;
            return dayOfWeek;
        case 3:
            dayOfWeek = `Mercredi`;
            return dayOfWeek;
        case 4:
            dayOfWeek = `Jundi`;
            return dayOfWeek;
        case 5:
            dayOfWeek = `Vendredi`;
            return dayOfWeek;
        case 6:
            dayOfWeek = `Samedi`;
            return dayOfWeek;
        default:
            dayOfWeek = `Wrong Input`;
    }
}



console.log(numberOfWeek, dayGenerator());
