// 13-forms — your work goes in this file.
//
// The lesson is example.js:   npm run open 13
// See your own page with:     npm run open 13 exercise
// Check your work with:       npm test 13
//
// exercise.html is written for you and must not be edited.

// The data lives here. The page is just a picture of this array.
const items = [];

/**
 * Reads what is currently typed into the two boxes.
 * readForm() -> { name: "Pen", price: 15 }
 */
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);
  return { name, price };
}

/**
 * Empties both boxes.
 */
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

/**
 * Draws the list from an array of items, replacing whatever was there before.
 */
export function renderList(items) {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const priceText = document.createElement("p");
    priceText.classList.add("price");
    priceText.textContent = `${item.price} EGP`;

    card.append(title, priceText);
    list.append(card);
  });
}

/**
 * Listens for the form's submit, checks the input, then adds and redraws.
 */
export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  form.addEventListener("submit", (event) => {
    // 1. Stop the page reloading
    event.preventDefault();

    // 2. Read the form
    const { name, price } = readForm();

    // 3. No name? Show an error and stop
    if (!name) {
      error.textContent = "Give the product a name.";
      return;
    }

    // 4. No price, or not more than 0? Show an error and stop
    if (!(price > 0)) {
      error.textContent = "Give the product a price.";
      return;
    }

    // 5. All good: clear error, save, redraw, empty the form
    error.textContent = "";
    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}