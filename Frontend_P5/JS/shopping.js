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
    select.id = cart[i]._id;
    document.getElementById("quantity");
    let qty = document.createElement("h3");
    qty.id = "hQty";
    qty.textContent = "Quantité";
    div.appendChild(qty);
    div.appendChild(select);

    // CREATION DE L'AFFICHAGE DU PRIX TOTAL DES PRODUITS
    let totalPrice = document.createElement("p");
    totalPrice.id = "totalPriceProduct";
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

            totalPrice.textContent = "Total du produit :" + " " + price + "€";

        localStorage.setItem("finalPrice", JSON.stringify(total));   
    })

    // CREATION BOUTON SUPPRIMER PRODUIT PANIER
    let deleteProduct = document.createElement("button");
    deleteProduct.id = cart[i]._id;
    div.appendChild(deleteProduct);
    deleteProduct.textContent = "X";

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

// VALIDATION FORMULAIRE DE COMMANDE 
let form = document.querySelector('#orderForm');

// VALIDATION FIRST NAME
form.firstName.addEventListener('change', function() {
    validFirstName(this)
});

const validFirstName = function(inputFirstName){
    // création de la Reg Exp pour la validation du nom
    let firstNameRegExp = new RegExp ('^[a-zA-Z- ]+$');

    // RECUPERATION DE LA BALISE SMALL
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

    // RECUPERATION DE LA BALISE SMALL
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

    // RECUPERATION DE LA BALISE SMALL
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

// VALIDATION EMAIL
form.email.addEventListener('change', function() {
    validEmail(this)
});

const validEmail = function(inputEmail){
    // création de la Reg Exp pour la validation de l'email
    let emailRegExp = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

    // RECUPERATION DE LA BALISE SMALL
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

    // RECUPERATION DE LA BALISE SMALL
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

// ECOUTE DE LA SOUMISSION DU FORMULAIRE
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(validFirstName(form.lastName) && validLastName(form.lastName) && validAdress(form.adress) && validEmail(form.email) && validCodePostal(form.codePostal)){
        
        form.submit();
    } 
});

// ENVOI A LA PAGE DE CONFIRMATION AU CLICK DU BOUTON COMMANDER
// si il y a au moins 1 article dans le panier + formulaire ok