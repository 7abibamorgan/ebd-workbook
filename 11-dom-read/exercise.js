// 11-dom-read — your work goes in this file.
//
// The lesson is example.js:   npm run open 11
// See your own page with:     npm run open 11 exercise
// Check your work with:       npm test 11
//
// exercise.html is written for you and must not be edited.

/**
 * The text of the page's main heading.
 * pageHeading() -> "My Campus Store"
 *
 * @returns {string}
 */
export function pageHeading() {
  return document.querySelector("h1").textContent;
}

/**
 * How many product cards are on the page.
 * productCount() -> 5
 *
 * @returns {number}
 */
export function productCount() {
  return document.querySelectorAll(".card").length;
}

/**
 * The name in every card, in the order they appear.
 * productNames() -> ["Notebook", "Backpack", "Pen", "Desk lamp", "Calculator"]
 *
 * @returns {string[]}
 */
export function productNames() {
  const cards = document.querySelectorAll(".card");
  return Array.from(cards).map((card) => card.querySelector("h3").textContent);
}

/**
 * The price text shown on the card with that name.
 * priceOf("Pen") -> "15 EGP"
 * priceOf("Nothing") -> null, because there is no such card
 *
 * @param {string} name
 * @returns {string|null}
 */
export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  const card = cards.find((c) => c.querySelector("h3").textContent === name);
  if (!card) {
    return null;
  }
  return card.querySelector(".price").textContent;
}

/**
 * soldOutNames() -> ["Backpack", "Calculator"]
 */
export function soldOutNames() {
  const cards = document.querySelectorAll(".card.sold-out");
  return Array.from(cards).map((card) => card.querySelector("h3").textContent);
}