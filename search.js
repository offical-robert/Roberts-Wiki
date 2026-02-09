const search = document.getElementById("search");
const items = document.querySelectorAll("#content li");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  items.forEach(item => {
    const text = item.dataset.text;
    item.style.display = text.includes(value) ? "" : "none";
  });
});
