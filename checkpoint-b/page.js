// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

// 1. Draws an array of items into #list, replacing whatever was there.
export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("product");
    li.textContent = `${item.name} (${item.category})`;
    ul.append(li);
  });
}

// 2. Only the bags.
export function matching() {
  return items.filter((item) => item.category === "bags");
}

// 3. Sets the page up: draw everything, then show only bags on click.
export function start() {
  renderItems(items);

  document.querySelector("#select").addEventListener("click", () => {
    renderItems(matching());
  });
}