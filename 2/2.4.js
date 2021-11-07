function getTodayFull() {
    let date = new Date();
    const option_day = {weekday: 'long'};
    let today = date.toLocaleDateString(undefined, option_day);
    const option_month = {month: 'long'};
    let month = date.toLocaleDateString(undefined, option_month);
    return ("Today is " + today + " the " + date.getDate() + " of " + month + ", "
        + date.getFullYear());
}

// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// console.log(event.toLocaleDateString('de-DE', options));
console.log(getTodayFull());