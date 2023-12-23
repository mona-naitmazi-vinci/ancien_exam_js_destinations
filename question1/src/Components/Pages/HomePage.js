// eslint-disable-next-line import/no-cycle, no-unused-vars
import routes from '../Router/routes';
import { getDestinationById } from "../../utils/places";

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <div class="text-center">
    <h1 class="display-1">Places to visit !</h1>
      <ul>
        <li>${ getDestinationById(1).name }</li>
        <li>${ getDestinationById(2).name }</li>
        <li>${ getDestinationById(3).name }</li>
        <li>${ getDestinationById(4).name }</li>
        <li>${ getDestinationById(5).name }</li>
      </ul>
  </div>`;
};

export default HomePage;
