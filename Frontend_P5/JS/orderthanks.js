// RECUPERATION DU PRIX TOTAL SUR LA PAGE SHOPPING
let finalPrice = localStorage.getItem('finalPrice');
total = JSON.parse(finalPrice);

// AFFICHAGE DU PRIX TOTAL DE LA COMMANDE
let price = document.getElementById("orderPrice")
let tot=0;

for (let i=0; i < total.length; i++) {
    tot = tot + total[i];
    parsed = parseInt(tot);
    
    console.log(parsed);
    let totPrice = localStorage.getItem('totalPrice');
    bigPrice = JSON.parse(totPrice);
    bigPrice= []
    bigPrice.push(parsed)
    let wholeP = localStorage.getItem("totalPrice")
    big = JSON.parse(wholeP);
    console.log(big);
    price.innerHTML = "Montant de votre commande : " + parsed + "€"
}

// RECAPITULATIF DE LA COMMANDE
let cartItems = localStorage.getItem('productsInCart');
let cart = JSON.parse(cartItems);

// CREATION H2 RECAP COMMANDE
let orderH = document.createElement("H2");
recapOrder.appendChild(orderH);
orderH.innerHTML = "Récapitulatif de votre commande : ";

for (let i=0; i < cart.length; i++){

    // DIV DE CHAQUE PRODUIT ACHETE
    let div = document.createElement("div");
    div.id = "divProductOrder";
    div.setAttribute = ("id", cart[i]._id);
    productOrder.appendChild(div);

    // NOM DU PRODUIT
    let pName = document.createElement("p");
    document.getElementById("productOrder");
    document.getElementById("recapOrder");
    pName.classList.add ("pName");
    recapOrder.appendChild(productOrder);
    div.appendChild(pName);
    pName.innerHTML = "Appareil choisi : " + cart[i].name;

    // LENTILLE SELECTIONNEE
    let pLenses = document.createElement("p");
    document.getElementById("productOrder");
    document.getElementById("recapOrder");
    pLenses.classList.add("pLenses");
    recapOrder.appendChild(productOrder);
    div.appendChild(pLenses);
    pLenses.innerHTML = "Lentille sélectionnée : " + " " + cart[i].lenses;
}

// NUMERO DE COMMANDE

let divOrderId = document.createElement("div");
let orderId = document.createElement("p");
divOrderId.appendChild(orderId);
document.getElementById("order");
order.appendChild(divOrderId);

let id = localStorage.getItem('id');
let ids = JSON.parse(id);

orderId.textContent = ids;