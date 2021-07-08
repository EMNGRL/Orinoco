let cartItems = localStorage.getItem('productsInCart');
let cart = JSON.parse(cartItems);

// AFFICHAGE DES PRODUITS AJOUTES AU PANIER
for (let i=0; i < cart.length; i++){

    let div = document.createElement("div");
    div.id = "divProductAdded";
    div.setAttribute = ("id", cart[i]._id);
    productAdded.appendChild(div);


    // CREATION DE L'AFFICHAGE DES ELEMENTS IMG DU PRODUIT
    let pImg= document.createElement("img");
    pImg.id = "pImg";
    div.appendChild(pImg);
    pImg.src = cart[i].imageUrl;

    // CREATION DE L'AFFICHAGE DES ELEMENTS TEXTE DU PRODUIT
    // NOM DU PRODUIT
    let pName = document.createElement("p");
    document.getElementById("productAdded");
    document.getElementById("shopProduct");
    pName.id = "pName";
    shopProduct.appendChild(productAdded);
    div.appendChild(pName);
    pName.innerHTML = cart[i].name;

    // LENTILLE SELECTIONNEE
    let pLenses = document.createElement("p");
    document.getElementById("productAdded");
    document.getElementById("shopProduct");
    pLenses.id = "pLenses";
    shopProduct.appendChild(productAdded);
    div.appendChild(pLenses);
    pLenses.innerHTML = "Lentille sélectionnée : " + " " + cart[i].lenses;

    // PRIX DU PRODUIT
    let pPrice = document.createElement("p");
    document.getElementById("productAdded");
    document.getElementById("shopProduct");
    pPrice.id = "pPrice";
    shopProduct.appendChild(productAdded);
    div.appendChild(pPrice);
    pPrice.innerHTML = "Prix unitaire :" + " " + cart[i].price + "€";

    // CREATION DE L'AFFICHAGE DU CHOIX DES QTE DU PRODUIT
    let select = document.createElement("select");
    select.id = cart[i].name;
    document.getElementById("quantity");
    let qty = document.createElement("h3");
    qty.id = "hQty";
    qty.textContent = "Quantité";
    div.appendChild(qty);
    div.appendChild(select);

    // CREATION DE L'AFFICHAGE DU PRIX TOTAL D'UN PRODUIT
    let totalPrice = document.createElement("p");
    totalPrice.id = "totalPriceProduct";
    div.appendChild(totalPrice);

    // CREATION BOUCLE POUR CHOIX DU NOMBRE DE QUANTITE DE 1 à 10
    for (let j = 0; j < 11; j++){
        let lenses = document.createElement("option");
        lenses.setAttribute("value", j);
        select.appendChild(lenses);
        lenses.textContent = j;
    }

    // CALCUL DU PRIX TOTAL D'UN PRODUIT
    let selected = document.getElementById(cart[i].name);
    selected.addEventListener('change', function quantity(){
       numberQty = this.value;
       let finalPrice = localStorage.getItem('finalPrice');
       total = JSON.parse(finalPrice);

       function addPrice (){
            let price = numberQty * cart[i].price;
            if (finalPrice === null){
                total=[];
            }
            total.push(price);
            console.log(price);
        
            totalPrice.textContent = "Total du produit :" + " " + price + "€";

            let tot=0;
            for (let i=0; i < total.length; i++) {
                tot = tot + total[i];
                parsed = parseInt(tot);
                console.log(parsed);
            }
       }
        addPrice();
        localStorage.setItem("finalPrice", JSON.stringify(total));
    })

    // CREATION BOUTON SUPPRIMER PRODUIT PANIER
    let deleteProduct = document.createElement("button");
    deleteProduct.id = cart[i]._id;
    div.appendChild(deleteProduct);
    deleteProduct.textContent = "Supprimer le produit";

    // AU CLICK SUPPRIMER LE PRODUIT LOCALSTORAGE + SUPPRIMER LA DIV DU PRODUIT
    deleteProduct.addEventListener('click', function deleteProd(){
        if (cart[i]._id){
            delete cart[i] 
            localStorage.setItem("productsInCart", JSON.stringify(cart));
            console.log(i);
            div.style.display="none";
        }else{
            alert("alert")
        } 
    })
}

// AFFICHAGE DU PRIX TOTAL DE LA COMMANDE
let totalOrderPrice = document.createElement("p");
totalOrderPrice.id = "totalOrderPrice";
divFinalOrderPrice.appendChild(totalOrderPrice);
totalOrderPrice.textContent = "PRIX TOTAL DE LA COMMANDE : " +  "€";



//VALIDATION FORMULAIRE COMMANDE
// document.getElementById("orderForm").addEventListener("submit", function(e){
//     let error;
//     let inputs = document.getElementById("orderForm").getElementsByTagName("input");

//     for (let i = 0; i < inputs.length; i++){
//         if (!inputs[i].value){
//             erreur = "Veuillez renseigner tous les champs";
//         }
//     }

//      if(erreur){
//         e.preventDefault();
//         document.getElementById("erreur").innerHTML = erreur;
//         return false;    
//     }else{
//         alert('formulaire envoyé');
//     }

// })

let test = cart[0].imageUrl;
