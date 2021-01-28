import {platformsLogos} from "./components"

const PageList = (argument = "") => {

  const preparePage = () => {
    let cleanedArgument;
    cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "?search=" + argument;
      }
      else {
        finalURL="https://api.rawg.io/api/games?page_size=27&dates=2021-01-27,2025-10-10&ordering=released&" ;
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((article) => {
            let icons = "";
            let filters = [];
            article.parent_platforms.forEach((platform) => {
              icons += platformsLogos[platform.platform.slug]
              filters.push(platform);
            });
            articles += `
                  <div class="card border-0 bg-primary col-md-3 col-sm-10 col-xs-12 m-4">
                    <img src="${article.background_image}">
                    <a class="text-white font-bold mt-3" style="font-size:20px; font-weight: bold;" href = "#pagedetail/${article.id}">${article.name}</a>
                    <p class="text-white">${article.released}</p>
                    <div>${icons}</div>
                    
                  </div>
                `;
          });
          document.querySelector(".page-list .articles").innerHTML = articles;
        });
    };

    fetchList(" https://api.rawg.io/api/games", cleanedArgument);
  };

  const prepareFilter = () => {
    const selectedElement = document.getElementById("selectPlatform");
    selectedElement.addEventListener('change', (event) => {
      const value = event.currentTarget.value;
      console.log(value);
      if (value == "all") {
        window.location.hash = window.location.hash.substring(1).split("/");
      } else {
        window.location.hash = window.location.hash.substring(1).split("/")[0] + "/" + `platforms=` + value;
      }
    })

  };

  const render = () => {
    pageContent.innerHTML = `
    <section id="intro" class="mt-5 pt-5">
            <h1 class="text-white py-3 mx-5" style="margin-top:130px;">Welcome,</h1>
            <p class="text-white mx-5 pb-5">The Hyper Programe is the world's premier event for computer and video games and related products. At The Hyper Progame, the video game industry's top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovation in the interactive entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure.</p>
        </section>
        <section id="chosePlatform">
            <select id="selectPlatform">
                <option value="default">Platform: any</option>
                <option value="all">All platforms</option>
                <option value="15">PlayStation 2</option>
                <option value="16">PlayStation 3</option>
                <option value="18">PlayStation 4</option>
                <option value="17">PSP</option>
                <option value="1">XboX One</option>
                <option value="14">XboX 360</option>
                <option value="6">Linux</option>
                <option value="3">iOS</option>
                <option value="21">Android</option>
                <option value="5">MacOS</option>
                <option value="11">Wii</option>
                <option value="10">Wii-U</option>
                <option value="7">Nintendo Switch</option>
                <option value="8">Nintendo 3DS</option>
                <option value="9">Nintendo DS</option>
                <option value="4">Windows</option>
            </select>
        </section>
      <section class="page-list">
        <div class="articles row justify-content-center">...loading</div>
      </section>
    `;

    preparePage();
    prepareFilter();

  };

  render();


};




export { PageList };