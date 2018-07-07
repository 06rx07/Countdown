function createOptions(start, end) {
    const resultNode = [];
    for (let i = start; i <= end; i++) {
        let node = document.createElement('option');
        node.value = i;
        let text = document.createTextNode(i);
        node.appendChild(text);
        resultNode.push(node);
    }
    return resultNode;
}
function removeOptions(node, start) {
    const length = node.childNodes.length;
    if (length - 1 >= start) {
        for (let i = start; i < length; i++) {
            node.removeChild(node.lastChild);
        }
    }
}
function appendOptions(node, start, end) {
    const options = createOptions(start, end);
    for (let option of options) {
        node.appendChild(option);
    }
}
function setDaySelect() {
    const year = new Number(yearSelect.value);
    const month = new Number(monthSelect.value);
    removeOptions(daySelect, 28);
    if (year % 4 == 0 && month == 2) {
        appendOptions(daySelect, 29, 29);
    } else if ([1, 3, 5, 7, 8, 10, 12].findIndex(value => value == month) > -1) {
        appendOptions(daySelect, 29, 31);
    } else if ([4, 6, 9, 11].findIndex(value => value == month) > -1) {
        appendOptions(daySelect, 29, 30);
    }
}
function initCountdown() {
    appendOptions(yearSelect, 2000, 2032);
    appendOptions(monthSelect, 1, 12);
    appendOptions(daySelect, 1, 28);
    setDaySelect();
    appendOptions(hourSelect, 0, 23);
    appendOptions(minuteSelect, 0, 59);
    appendOptions(secondSelect, 0, 59);
    updateResult();
}
function getCountdown() {
    const setDate = new Date(yearSelect.value, monthSelect.value - 1, daySelect.value, hourSelect.value, minuteSelect.value, secondSelect.value);
    const currentDate = new Date();
    formatCountdown(setDate, currentDate);
}
function formatCountdown(setDate, currentDate) {
    let difference = (currentDate - setDate) / 1000;
    const fromTo = (difference > 0) ? 'Passed' : 'Left';
    difference = Math.abs(difference);
    const day = Math.floor(difference / (24 * 3600));

    difference = difference - day * 24 * 3600;
    const hour = Math.floor(difference / 3600);

    difference = difference - hour * 3600;
    const minute = Math.floor(difference / 60);

    difference = difference - minute * 60;
    const second = Math.floor(difference);

    const countdownText = day + 'Days ' + hour + 'Hr ' + minute + 'Min ' + second + 'S ' + fromTo;
    showResult('To ' + formatDate(setDate) + ' ' + countdownText);
}
function showResult(text) {
    result.innerHTML = text;
}
function updateResult() {
    setInterval(() => {
        getCountdown();
    }, 1000);
}

const yearSelect = document.querySelector('#year-select');
const monthSelect = document.querySelector('#month-select');
const daySelect = document.querySelector('#day-select');
const hourSelect = document.querySelector('#hour-select');
const minuteSelect = document.querySelector('#minute-select');
const secondSelect = document.querySelector('#second-select');
const result = document.querySelector('#result-wrapper');

initCountdown();