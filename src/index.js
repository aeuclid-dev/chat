import _ from 'lodash';
import './style.css';
import Google from './google.logo.png';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Google;

    element.appendChild(myIcon);
  
    return element;
}
  
console.log(Data);
console.log(Notes);

document.body.appendChild(component());
