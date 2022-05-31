const newYear = "1 Jan 2023";
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function countDown(){
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;
  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const days = Math.floor((totalSeconds) /(3600*24));

  day.innerHTML = FormatTime(days);
  hour.innerHTML =  FormatTime(hours);
  min.innerHTML =   FormatTime(minutes);
  sec.innerHTML = FormatTime(seconds);

  function FormatTime(time){
    return time < 10 ? `0${time}` : time;
  }
}


countDown();
setInterval(countDown, 1000);
