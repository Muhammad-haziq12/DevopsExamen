import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import grootImage from './img/groot.jpg';
import stormtrooperImage from './img/stormtrooper.jpg';

renderhomepage();

function renderhomepage(){
const homePage = `
<div class="container text-center">
        <div class="row">
          <div class="col">
            <h3>Welcome to myMovies !</h3>

            <p>Here you can find a selection of our favorite movies ; )</p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-lg-6">
            <img class="img-thumbnail" src="${grootImage}" alt="Groot" />
          </div>

          <div class="col-12 col-lg-6">
            <img class="img-thumbnail" src="${stormtrooperImage}" alt="Stormtrooper" />
          </div>

          <button type="button" id="mybtn2" class="btn btn-primary btn-sm">About</button>

        </div>
</div>`;

const main = document.querySelector('main');
main.innerHTML = homePage;

const button = document.querySelector("#mybtn2");
button.addEventListener("click", renderabout);
};

function renderabout(){
    const About = `
    <div class="container text-center">
            <div class="row">
              <div class="col">
                <h3>MY NAME IS HAZIQ !</h3>

              </div>
            </div>
    
              <button type="button" id="mybtn3" class="btn btn-primary btn-sm">GO BACK TO HOME PAGE </button>
            </div>
    </div>`;

    const main = document.querySelector('main');
    main.innerHTML = About; 

    const button2 = document.querySelector("#mybtn3");
    button2.addEventListener("click", renderhomepage);
       

}
