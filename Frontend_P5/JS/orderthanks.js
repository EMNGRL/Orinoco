// RÉCUPÉRATION DU PRIX TOTAL SUR LA PAGE SHOPPING
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

// RÉCAPITULATIF DE LA COMMANDE
let cartItems = localStorage.getItem('productsInCart');
let cart = JSON.parse(cartItems);

// CRÉATION H2 RÉCAP COMMANDE
let orderH = document.createElement("H2");
recapOrder.appendChild(orderH);
orderH.innerHTML = "Récapitulatif de votre commande : ";

for (let i=0; i < cart.length; i++){

    // DIV DE CHAQUE PRODUIT ACHETÉ
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

    // LENTILLE SELECTIONNÉE
    let pLenses = document.createElement("p");
    document.getElementById("productOrder");
    document.getElementById("recapOrder");
    pLenses.classList.add("pLenses");
    recapOrder.appendChild(productOrder);
    div.appendChild(pLenses);
    pLenses.innerHTML = "Lentille sélectionnée : " + " " + cart[i].lenses;
}

// NUMÉRO DE COMMANDE

let orderP = document.createElement("p");
orderNumber.appendChild(orderP);
document.getElementById("mainOrder");

let min = 1;
let max = 100000000;
let random = Math.floor(Math.random() * (max - min)) + min;
orderP.textContent = " Numéro de commande : " + random ;

// CLEAR LOCAL STORAGE RETOUR ACCUEIL

let btn = document.getElementById("return");
btn.addEventListener('click', function clearLocalStorage(){
    window.localStorage.clear();
    window.location.href = "/home.html";
})