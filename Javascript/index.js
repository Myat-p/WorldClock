function updateTime() {
  //los angeles

  let lAElement = document.querySelector("#la");
  let LAdateElement = lAElement.querySelector(".date");
  let LATimeElement = lAElement.querySelector(".time");
  let LATime = moment.tz("America/Los_Angeles");
  LAdateElement.innerHTML = LATime.format("MMMM Do YYYY");
  LATimeElement.innerHTML = LATime.format("h:mm:ss [<small>]A[</small>]");

  //Sydney
  let SydneyElement = document.querySelector("#sydney");
  let SydneyDateElement = SydneyElement.querySelector(".date");
  let SydneyTimeElement = SydneyElement.querySelector(".time");
  let SydneyTime = moment.tz("Australia/Sydney");
  SydneyDateElement.innerHTML = SydneyTime.format("MMMM Do YYYY");
  SydneyTimeElement.innerHTML = SydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
