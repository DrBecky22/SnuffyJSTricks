
function colorChange() {
    // alert("you made it to ColorChange!")
    document.getElementById('pageTitle').style.color='RebeccaPurple';
    return false;
}

function colorBack() {
    document.getElementById('pageTitle').style.color='white';
}

function fallClock() {
    document.getElementById('snuffyPicStart').style.transform = "rotate(90deg)";
}

function fallWidder() {
    document.getElementById('snuffyPicStart').style.transform = "rotate(-90deg)";
}

function spinClock() {
    document.getElementById('snuffyPicStart').classList.add('rotate-clock');
}

function spinWidder() {
    document.getElementById('snuffyPicStart').classList.add('rotate-widd');
}


function snuffyStyleScared() {
    alert('confused button!');
    document.getElementById('snuffyPicStart').src = 'elephantScared.png';
}

function snuffyStyleBlue() {
    alert('you took the blue pill');
    document.getElementById('snuffyPicStart').src = 'elephantBlue.png';
}

function snuffyStylePaisley() {
    alert("It's your birthday!");
    document.getElementById('snuffyPicStart').src = 'elephantPaisley.png';
}

function dateBtn() {
    alert("you are at the date button");
    // document.getElementById('dateTime').innerHTML = "<p> hello </p>";
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dateData = new Date();
    currentDay = dateData.getDay();
    document.getElementById('day').textContent = days[currentDay];
    currentMonth = dateData.getMonth();
    currentDate = dateData.getDate();
    currentYear = dateData.getFullYear();
    document.getElementById('month-date-year').textContent = `$(months[currentMonth] $(currentDate)`;
    // const date = getDate()
    // document.getElementById('dateTime').innerHTML.date;
    // return false;
}

