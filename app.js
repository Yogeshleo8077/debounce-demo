// ------- 1. Our data (pretend it's from an API) -------
const products = [
  "Apple iPhone",
  "Samsung Galaxy",
  "Google Pixel",
  "OnePlus Nord",
  "Xiaomi Redmi",
  "Realme Narzo",
  "MacBook Air",
  "MacBook Pro",
  "Dell Inspiron",
  "HP Pavilion",
  "Lenovo ThinkPad",
  "Asus ROG Laptop",
];

// ------- 2. Debounce function -------
function debounce(fn, delay) {
  let timerId; // store timeout id

  return function (...args) {
    const context = this;

    // clear previous timer if user types again
    clearTimeout(timerId);

    // start a new timer
    timerId = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

// ------- 3. Actual search function (this is what we want to debounce) -------
function searchProducts(query) {
  console.log("🔍 searchProducts called with query:", query);

  const resultsDiv = document.getElementById("results");

  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    resultsDiv.innerHTML = "<em>Type something to search...</em>";
    return;
  }

  const filtered = products.filter((item) =>
    item.toLowerCase().includes(trimmed)
  );

  if (filtered.length === 0) {
    resultsDiv.innerHTML = "<em>No products found.</em>";
    return;
  }

  resultsDiv.innerHTML = filtered
    .map((item) => `<div class="product">${item}</div>`)
    .join("");
}

// ------- 4. Wrap searchProducts with debounce -------
const debouncedSearch = debounce(searchProducts, 1000); // 500ms delay

// ------- 5. Attach to input event -------
const input = document.getElementById("searchInput");

input.addEventListener("input", (e) => {
  const value = e.target.value;
  debouncedSearch(value); // use debounced function
});

// Set initial message
document.getElementById("results").innerHTML =
  "<em>Type something to search...</em>";
