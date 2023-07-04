let btn = document.getElementById("search_btn");
let searchBar = document.getElementById("input_text");
let cityName = document.getElementById("city_name");
let cloud = document.getElementById("cloud");
let temprature = document.getElementById("temp");
let aadrata = document.getElementById("aadrata");
let hawa = document.getElementById("hawa");
const apiKey = "c89e35595bfce0f3664b0c41ffd72bc6";

btn.addEventListener("click", async function (event) {
  let CityName = searchBar.value;
  document.getElementById("error").innerHTML = "";
  if (CityName == "") {
    document.getElementById("error").innerHTML = "Type the city name.";
    cityName.focus();
    return false;
  }
  // console.log("https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=`${apiKey}`&units=metric#");

  let apiurl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    CityName +
    "&appid=" +
    apiKey +
    "&units=metric#";
  let response = await fetch(apiurl);
  let result = await response.json();
  console.log(apiurl);
  if (result.message === "city not found") {
    document.getElementById("error").innerHTML = "city not found";
    cityName.innerHTML = "------";
    aadrata.innerHTML = "--";
    cloud.innerHTML = "-------";
    hawa.innerHTML = "--";
    temprature.innerHTML = "--.--";
    searchBar.value = "";
  } else {
    cityName.innerHTML = CityName;
    aadrata.innerHTML = result.main.humidity;
    cloud.innerHTML = result.weather[0].description;
    hawa.innerHTML = result.wind.speed;
    temprature.innerHTML = result.main.temp;
    searchBar.value = "";
  }
});
