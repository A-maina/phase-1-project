function renderOneStock(stock) {
  const card = document.createElement("li");
  card.className = "card";
  card.innerHTML = `
  <h5>${stock.title}</h5>
      <img src="${stock.image}" alt="${stock.title}">
      <div class="content">
      <p><span>Description</span>: ${stock.description}</p>
      <p><span>Price</span>: ${stock.price}</p>
      <p><span>Category</span>: ${stock.category}</p>
      <button class="purchaseBtn">Purchase</button>
      </div>
  `;
  document.querySelector("#stockList").appendChild(card);

  const btn = card.querySelector(".purchaseBtn"); 
  btn.addEventListener("click", handlePurchase);
  btn.addEventListener("dblclick",()=>{
    btn.style.textDecoration = "none";
    btn.style.color = "white";
  })
  
}

function handlePurchase(event) {
  const btn = event.target; 
  btn.style.textDecoration = "line-through";
  btn.style.color = "red";
}

function getAllStock() {
  fetch("http://localhost:3000/stock")
    .then((res) => res.json())
    .then((stockData) => stockData.forEach((stock) => renderOneStock(stock)));
}

function initialize() {
  getAllStock();
}
initialize();
