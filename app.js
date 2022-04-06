const renderTime = () => {

    const d = new Date();
    let year = d.getFullYear();
    let month = d.toLocaleString('en-uk', { month: 'short' });
    let day = d.getDate();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    let formatHours = hours < 10 ? '0'+hours : hours;
    let formatMinutes = minutes < 10 ? '0'+minutes : minutes;
    let formatDays = day < 10 ? '0'+day : day;
  
    document.querySelector("#present-day").innerHTML = formatDays;
    document.querySelector("#present-month").innerHTML = month;
    document.querySelector("#present-year").innerHTML = year;
    document.querySelector("#present-minute").innerHTML = formatMinutes;
    document.querySelector("#present-hour").innerHTML = formatHours;
    
    if(ampm === 'pm') {
        document.querySelector("#present-am-led").classList.remove('led-present-on');
        document.querySelector("#present-pm-led").classList.add('led-present-on');
    }
    
    if(ampm === 'am') {
        document.querySelector("#present-am-led").classList.add('led-present-on');
        document.querySelector("#present-pm-led").classList.remove('led-present-on');
    }
    
}

renderTime();

setInterval(renderTime, 1000)