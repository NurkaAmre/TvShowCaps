/**
 * @jest-environment jsdom
 */

import { countShows } from '../modules/counterItem.js';

test('properly counts total item on the page', () => {
  document.body.innerHTML = `
    <div class="card" id="21"></div>
    <div class="card" id="22"></div>
    <div class="card" id="23"></div>
    <div class="card" id="24"></div>
    <div class="card" id="25"></div>
    <div class="card" id="26"></div>
    <div class="card" id="142270"></div>
    <div class="card" id="151048"></div>
    <div class="card" id="151645"></div>
    <div class="card" id="153120"></div>
`;

  const cards = document.querySelectorAll('.card');
  const movieCounter = countShows([...cards]);

  expect(movieCounter).toEqual(10);
});
