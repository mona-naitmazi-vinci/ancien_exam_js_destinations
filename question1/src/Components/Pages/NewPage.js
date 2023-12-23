// eslint-disable-next-line import/no-cycle, no-unused-vars
import routes from '../Router/routes';
import { getDestinationById, getNumberOfDestinations } from "../../utils/places";
import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

let destinationAAfficher = getDestinationById(3);
const lastId = getNumberOfDestinations;

function photosPage(){
  clearPage();

  const main = document.querySelector('main');
  
  main.innerHTML = `
  <div class="text-center">
    <h1 class="display-1">${ destinationAAfficher.name }</h1>
    <img src="${ destinationAAfficher.image }" alt="photo" class="image-fluid w-25" >   
    <br><br><br>
    <button type="button" id="previous">Previous</button>
    <br><br>
    <button type="button" id="next">Next</button>
  </div>`;

  const boutonPrevious = document.getElementById("previous");
  boutonPrevious.addEventListener("click", () => {
    if(destinationAAfficher.id > 1){
      destinationAAfficher = getDestinationById(destinationAAfficher.id - 1);
      photosPage();
    }
  });

  const boutonNext = document.getElementById("next");
  boutonNext.addEventListener("click", () => {
    if(destinationAAfficher.id < lastId){
      destinationAAfficher = getDestinationById(destinationAAfficher.id + 1);
      photosPage();
    }
  })
};

export default photosPage;
