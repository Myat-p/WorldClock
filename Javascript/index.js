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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small> ${cityTime.format("A")}</small>
            </div >
      </div>
    `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesElement = document.querySelector("#city");
citiesElement.addEventListener("change", updateCity);
