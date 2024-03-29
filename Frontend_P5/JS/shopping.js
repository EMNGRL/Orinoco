// RÉCUPÉRATION DES DONNÉES PRODUITS AJOUTÉS DU LOCAL STORAGE 
let cartItems = localStorage.getItem('productsInCart');
let cart = JSON.parse(cartItems);

// AFFICHAGE DES PRODUITS AJOUTÉS AU PANIER
for (let i=0; i < cart.length; i++){

    // CRÉATION DE LA DIV PRINCIPAL DU PRODUIT AJOUTÉ
    let div = document.createElement("div");
    div.id = cart[i].name;
    div.classList.add("divProductAdded");
    productAdded.appendChild(div);

    // CRÉATION DE L'AFFICHAGE DES ÉLÉMENTS IMG DU PRODUIT
    let pImg= document.createElement("img");
    pImg.classList.add("pImg");
    div.appendChild(pImg);
    pImg.src = cart[i].imageUrl;

    // CRÉATION DE L'AFFICHAGE DES ÉLÉMENTS TEXTE DU PRODUIT
    // NOM DU PRODUIT
    let pName = document.createElement("p");
    document.getElementById("productAdded");
    document.getElementById("shopProduct");
    pName.classList.add ("pName");
    shopProduct.appendChild(productAdded);
    div.appendChild(pName);
    pName.innerHTML = cart[i].name;

    // LENTILLE SELECTIONNÉE
    let pLenses = document.createElement("p");
    document.getElementById("productAdded");
    document.getElementById("shopProduct");
    pLenses.classList.add("pLenses");
    shopProduct.appendChild(productAdded);
    div.appendChild(pLenses);
    pLenses.innerHTML = "Lentille sélectionnée : " + " " + cart[i].lenses;

    // PRIX DU PRODUIT
    let pPrice = document.createElement("p");
    document.getElementById("productAdded");
    document.getElementById("shopProduct");
    pPrice.classList.add ("pPrice");
    shopProduct.appendChild(productAdded);
    div.appendChild(pPrice);
    pPrice.innerHTML = "Prix unitaire :" + " " + cart[i].price + "€";

    // CRÉATION DE L'AFFICHAGE DU CHOIX DES QTÉS DU PRODUIT
    let select = document.createElement("select");
    select.id = cart[i]._id;
    document.getElementById("quantity");
    let qty = document.createElement("h3");
    qty.id = "hQty";
    qty.textContent = "Quantité";
    div.appendChild(qty);
    div.appendChild(select);

    // CRÉATION DE L'AFFICHAGE DU PRIX TOTAL DES PRODUITS
    let totalPrice = document.createElement("p");
    totalPrice.classList.add ("totalPriceProduct");
    div.appendChild(totalPrice);

    for (let j = 0; j < 11; j++){
        let lenses = document.createElement("option");
        lenses.setAttribute("value", j);
        select.appendChild(lenses);
        lenses.textContent = j;
    }
   
    let selected = document.getElementById(cart[i]._id);
    selected.addEventListener('change', function quantity(){
        
    numberQty = this.value;
    let finalPrice = localStorage.getItem('finalPrice');
    total = JSON.parse(finalPrice);

    let price = numberQty * cart[i].price;
    if (finalPrice === null){
        total=[];
    }
    total.push(price);
    console.log(price);
    totalPrice.textContent = "Total du produit :" + " "+ price  + "€";
    localStorage.setItem("finalPrice", JSON.stringify(total));
        
    let tot=0;
    for (let i=0; i < total.length; i++) {
        price = []
        tot = tot + total[i];
        parsed = parseInt(tot);
        price.push(parsed)
        console.log(tot);
        localStorage.setItem("prices", JSON.stringify(price))   
    }       
    })
   
    // CRÉATION BOUTON SUPPRIMER PRODUIT PANIER
    let deleteProduct = document.createElement("button");
    deleteProduct.id = cart[i]._id;
    div.appendChild(deleteProduct);
    deleteProduct.textContent = "X";

    // AU CLICK SUPPRIMER LE PRODUIT LOCALSTORAGE + SUPPRIMER LA DIV DU PRODUIT
    deleteProduct.addEventListener('click', function deleteProd(){
        if (cart[i]._id || total[i].price){
            delete cart[i] 
            localStorage.setItem("productsInCart", JSON.stringify(cart));
            delete total[i]
            localStorage.setItem("finalPrice", JSON.stringify(total));
            alert("Votre article a bien été supprimé")
            console.log(i);
            div.style.display="none";
            
        }
    })
}

// AFFICHAGE PRIX TOTAL DE LA COMMANDE + BOUTON RECALCULER LA COMMANDE
let priceP = document.createElement("p")
let priceDiv = document.getElementById("divFinalOrderPrice")
priceDiv.appendChild(priceP)
let btn = document.createElement("button")
btn.textContent = "Recalculer le montant de la commande"
divFinalOrderPrice.appendChild(btn)

// AU CLICK CALCUL DU MONTANT DE LA COMMANDE
btn.addEventListener('click', function refresh(){
    tot = JSON.parse( localStorage.getItem("prices"))
    priceP.innerHTML = "Montant de la commande : " + tot + "€"
        
})   
priceP.textContent = "Montant de la commande : "

// FORMULAIRE
// VALIDATION FORMULAIRE DE COMMANDE 
let form = document.querySelector('#orderForm');

// VALIDATION FIRST NAME
form.firstName.addEventListener('change', function() {
    validFirstName(this)
});

const validFirstName = function(inputFirstName){
    // création de la Reg Exp pour la validation du nom
    let firstNameRegExp = new RegExp ('^[a-zA-Z- ]+$');

    // RÉCUPÉRATION DE LA BALISE SMALL
    let small = inputFirstName.nextElementSibling;

    if(firstNameRegExp.test(inputFirstName.value)){
        small.innerHTML = "Nom valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }else{
        small.innerHTML = "Nom non valide";
        small.classList.add('text-danger');
        small.classList.remove('text-success');
        return false;
    }
};

// VALIDATION LAST NAME
form.lastName.addEventListener('change', function() {
    validLastName(this)
});

const validLastName = function(inputLastName){
    // création de la Reg Exp pour la validation du prénom
    let lastNameRegExp = new RegExp ('^[a-zA-Z- ]+$');

     // RÉCUPÉRATION DE LA BALISE SMALL
    let small = inputLastName.nextElementSibling;

    if(lastNameRegExp.test(inputLastName.value)){
        small.innerHTML = "Prénom valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }else{
        small.innerHTML = "Prénom non valide";
        small.classList.add('text-danger');
        small.classList.remove('text-success');
        return false;
    }
};

// VALIDATION ADRESSE
form.adress.addEventListener('change', function() {
    validAdress(this)
});

const validAdress = function(inputAdress){
    // création de la Reg Exp pour la validation de l'adresse
    let adressRegExp = new RegExp ('^[A-Za-zÀ-ÖØ-öø-ÿ0-9- ]+$');

    // RÉCUPÉRATION DE LA BALISE SMALL
    let small = inputAdress.nextElementSibling;

    if(adressRegExp.test(inputAdress.value)){
        small.innerHTML = "Adresse valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }else{
        small.innerHTML = "Adresse non valide";
        small.classList.add('text-danger');
        small.classList.remove('text-success');
        return false;
    }
};

// VALIDATION CITY
form.city.addEventListener('change', function() {
    validCity(this)
});

const validCity = function(inputCity){
    // création de la Reg Exp pour la validation de l'email
    let cityRegExp = new RegExp ('^[A-Za-zÀ-ÖØ-öø-ÿ0-9- ]+$');

     // RÉCUPÉRATION DE LA BALISE SMALL
    let small = inputCity.nextElementSibling;

    if(cityRegExp.test(inputCity.value)){
        small.innerHTML = "Ville mail valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }else{
        small.innerHTML = "Ville non valide";
        small.classList.add('text-danger');
        small.classList.remove('text-success');
        return false;
    }
};

// VALIDATION EMAIL
form.email.addEventListener('change', function() {
    validEmail(this)
});

const validEmail = function(inputEmail){
    // création de la Reg Exp pour la validation de l'email
    let emailRegExp = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

     // RÉCUPÉRATION DE LA BALISE SMALL
    let small = inputEmail.nextElementSibling;

    if(emailRegExp.test(inputEmail.value)){
        small.innerHTML = "Adresse mail valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }else{
        small.innerHTML = "Adresse mail non valide";
        small.classList.add('text-danger');
        small.classList.remove('text-success');
        return false;
    }
};

// VALIDATION CODE POSTAL
form.codePostal.addEventListener('change', function() {
    validCodePostal(this)
});

const validCodePostal = function(inputCodePostal){
    // création de la Reg Exp pour la validation du code postal
    let codePostalRegExp = new RegExp ('^[0-9]+$');

     // RÉCUPÉRATION DE LA BALISE SMALL
    let small = inputCodePostal.nextElementSibling;

    if(codePostalRegExp.test(inputCodePostal.value)){
        small.innerHTML = "Code postal valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }else{
        small.innerHTML = "Code postal non valide";
        small.classList.add('text-danger');
        small.classList.remove('text-success');
        return false;
    }
};

// ÉCOUTE DE LA SOUMISSION DU FORMULAIRE
form.addEventListener('click', async function(e) {
    e.preventDefault();
    if(validFirstName(form.lastName) && validLastName(form.lastName) && validAdress(form.adress) && validEmail(form.email) && validCodePostal(form.codePostal)){ 
    console.log("ok")
    } 

    // objet contact
    let contact = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        address: form.adress.value,
        city: form.city.value,
        email: form.email.value,
    }
    console.log(contact);

    localStorage.setItem("contact", JSON.stringify(contact))

    // tableau des produits
    let products = [];
    for (let i = 0; i < cart.length; i++) {
        products.push(cart[i]._id);
        localStorage.setItem("id", JSON.stringify(products));
    }
    console.log(products);

    let send = JSON.stringify({"contact": contact,
                           "products": products});

    console.log(send);
    let response = await fetch("http://localhost:3000/api/cameras/order", {
      method: "POST",
      headers: {
        "content-type": "application/json"
              },
      body:  send,
    });

    // redirection vers page de confirmation
    if (response.ok) {
    
    window.location.href = "orderthanks.html";
    console.log(response);
    } else {
          console.log ("err");
    }
});