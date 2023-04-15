const products = [
  {
    id: 1,
    imageSrc: "./menu/menu assets/dish 1.svg",
    title: "Molestiae sed augue eu sapien hendrerit fringilla",
    about: "Taque earum rerum hic tenetur a sapiente",
  },
];

const productsGrid = document.querySelector(".foods");

for (const product of products) {
  renderProduct(product);
}

function renderProduct(product) {
  const productCard = document.createElement("div");
  productsGrid.append(productCard);
  productCard.outerHTML = `
    <div class = "product-card">
      <img src = "${product.imageSrc}"> alt = "">
      <div class = "title"> ${product.title} </div>
      <div class = "about"> ${product.about} </div>
    </div>`;
}
