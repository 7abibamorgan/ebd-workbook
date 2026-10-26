// 12-dom-write — your work goes in this file.
//
// The lesson is example.js:   npm run open 12
// See your own page with:     npm run open 12 exercise
// Check your work with:       npm test 12
//
// exercise.html is written for you and must not be edited.

// Small helper: finds the card whose h3 says that name (or undefined).
function findCard(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  return cards.find((card) => card.querySelector("h3").textContent === name);
}

/**
 * Adds one product card to the end of the list.
 * addProduct("Pen", 15) adds:
 *   <li class="card"><h3>Pen</h3><p class="price">15 EGP</p></li>
 */
export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = name;

  const priceText = document.createElement("p");
  priceText.classList.add("price");
  priceText.textContent = `${price} EGP`;

  card.append(title, priceText);
  document.querySelector("#list").append(card);
}

/**
 * Removes the card with that name, if there is one.
 */
export function removeProduct(name) {
  const card = findCard(name);
  if (card) {
    card.remove();
  }
}

/**
 * Marks the card with that name as sold out.
 */
export function markSoldOut(name) {
  const card = findCard(name);
  if (card) {
    card.classList.add("sold-out");
  }
}

/**
 * Removes every card from the list, leaving it empty.
 */
export function clearProducts() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.remove());
}

/**
 * Clicking #add adds a Notebook for 45, clicking #reset empties the list.
 */
export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}
