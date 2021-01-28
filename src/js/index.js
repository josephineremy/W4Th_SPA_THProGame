import "../sass/styles.css";
import "../sass/styles.scss";
import "bootswatch/dist/lux/bootstrap.min.css"

console.log("hello world!");

import { routes } from "./routes";

let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  window.scrollTo(0, 0);
  return true;
};

const searchBar = document.getElementById("searchBar");
const goSearch = document.getElementById("searchButton")

    searchBar.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          window.location.hash = window.location.hash.substring(1).split("/")[0] + "/" + searchBar.value
      }
  });

  goSearch.addEventListener('click', function(e) {
        window.location.hash = window.location.hash.substring(1).split("/")[0] + "/" + searchBar.value
});

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());