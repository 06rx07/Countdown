// 在页面中显示当前日期及时间，按秒更新
// 格式为 YYYY 年 MM 月 DD 日 星期 D HH:mm:ss
// 注意位数的补齐，比如：
// -- 假设时间为2008年10月10日星期一的12点12分12秒，显示2008年10月10日星期一 12:12:12
// -- 假设时间为2008年1月1日星期一的3点2分2秒，显示2008年01月01日星期一 03:02:02
// 编码过程中，我们希望你注意对函数的封装，尽量让一个函数就做一个事情，而不要把所有的功能、代码揉在一起：

// 封装一个函数，来根据某个日期返回这一天是星期几
// 封装一个函数，把月、日、小时等出现个位数的情况前面补充0，补充为两位，比如1变为01
// 封装一个函数，把最后的日期时间，按照要求的格式进行包装
// 2008-10-10 Monday 07:10:30 PM

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
        case 7:
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
    const month = checkTime(date.getMonth());
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
// showClock();
