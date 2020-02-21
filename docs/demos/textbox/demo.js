import { Checkboxland } from '../../../src/index.js';

const cbl = new Checkboxland({ dimensions: '68x7' });

const textboxEl = document.querySelector('#textbox');

cbl.print(textboxEl.value);

textboxEl.addEventListener('input', (event) => {
  cbl.clearData();
  cbl.print(event.target.value);
});

// For easy debugging
window.cbl = cbl;
