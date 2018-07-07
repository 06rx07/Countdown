function getDayofWk(date) {
    switch (date.getDay()) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 0:
            return 'Sunday';
    }
}
function getAMPMHours(number) {
    const ampm = number >= 12 ? 'PM' : 'AM';
    const hours = number > 12 ? number - 12 : number;
    return {
        ampm: ampm,
        hours: checkTime(hours)
    };
}
function checkTime(number) {
    return (number < 10) ? '0' + number : number;
}
function formatDate(date) {
    const year = date.getFullYear();
    const month = checkTime(date.getMonth() + 1);
    const day = checkTime(date.getDate());
    const dayOfWk = getDayofWk(date);
    const hourWithAMPM = getAMPMHours(date.getHours());
    const minute = checkTime(date.getMinutes());
    const second = checkTime(date.getSeconds());

    const formattedDate = year + '-' + month + '-' + day + ' ' + dayOfWk + ' ';
    const formattedTime = hourWithAMPM.hours + ':' + minute + ':' + second + ' '+hourWithAMPM.ampm;
    return formattedDate + formattedTime;
}
function showClock() {
    setInterval(() => {
        clockText.innerHTML = formatDate(new Date());
    }, 1000);
}

const clockText = document.querySelector('#show-clock');
showClock();
