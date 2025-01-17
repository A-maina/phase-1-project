document.addEventListener("DOMContentLoaded", () => {
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
      <button class="remBtn">Remove</button>
      </div>
  `;

    const btn = card.querySelector(".purchaseBtn");
    btn.addEventListener("click", handlePurchase);
    btn.addEventListener("dblclick", () => {
      btn.style.color = "white";
      btn.textContent = "purchase";
    })
    card.querySelector(".remBtn").addEventListener("click", () => {
      card.remove();
      deleteStock(stock.id);
    });

    document.querySelector("#stockList").appendChild(card);
  }

  function handlePurchase(event) {
    const btn = event.target;
    btn.style.color = "red";
    btn.textContent = "purchased";
    btn.style.color = "red";
  }

  function getAllStock() {
    fetch("https://project-1-backend-sigma.vercel.app/stock")
      .then((res) => res.json())
      .then((stockData) => stockData.forEach((stock) => renderOneStock(stock)));
  }
  function deleteStock(id) {
    fetch(`https://project-1-backend-sigma.vercel.app/stock${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
    const darkMode = document.getElementById("dark")
  const body = document.body
  darkMode.addEventListener("click", () => {
  
    body.style.backgroundColor = "black"
  })
  darkMode.addEventListener("dblclick", () => {
      body .style.backgroundColor = "bisque"
  })

  function initialize() {
    getAllStock();
  }
  initialize();
});
