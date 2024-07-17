const stockUrl = "http://localhost:3000/stock";
function renderOneStock(stock) {
  const card = document.createElement("li");
  card.className = "card";
  card.innerHTML = `
  <h5>${stock.title}</h5>
      <img src = "${stock.image}">
      <div class ="content">
      <p> <span>Description</span>: ${stock.description}</p>
      <p><span>Price</span>:  ${stock.price}</p>
      <p><span> category</span>:  ${stock.category}</p>
      <button id="purchaseBtn">Purchase</button>
      </div>
      `;
  document.querySelector("#stockList").appendChild(card);
}

function getAllStock() {
  fetch("http://localhost:3000/stock")
    .then((res) => res.json())
    .then((stockData) => stockData.forEach((stock) => renderOneStock(stock)));
}


function initialize() {
  getAllStock();
  // stockData.foreach((stock) => renderOneStock(stock));
}
initialize();
