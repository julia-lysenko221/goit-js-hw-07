const listElem = document.querySelectorAll(".item");

console.log(`Number of categories: ${listElem.length}`);

listElem.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul > li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});
