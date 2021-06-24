const params = new URLSearchParams(window.location.search);
let idCamera = params.get("id");

function getCamera(cameras, idCamera) {

    let myCamera = cameras.find(cameras => cameras["_id"] == idCamera);
} 

// CREATION & AFFICHAGE DES DONNEES DU PRODUIT

function createCamera(myCamera){
    let product = document.getElementById("infoProduct")
    
        // NOM DE LA CAMERA
        let name = document.createElement("p")
        name.id = "namePageProduct";
        product.appendChild(name)
        name.textContent = myCamera.name

        // IMAGE DE LA CAMERA
        let imgProduct = document.createElement("img")
        imgProduct.id = "imgPageProduct";
        product.appendChild(imgProduct)
        imgProduct.src = myCamera.imageUrl

        // DESCRIPTION DE LA CAMERA
        let description = document.createElement("p")
        description.id = "descriptionPageProduct";
        product.appendChild(description)
        description.textContent = myCamera.description

        // CHOIX DES LENTILLES
        let select = document.getElementById("selectLenses");
        let options = myCamera.lenses;

        for(let i = 0; i < options.length; i++) {
            let opt = options[i];
            let lenses = document.createElement("option");
            lenses.textContent = opt;
            lenses.value = opt;
            select.appendChild(lenses);
        }

        // PRIX DE LA CAMERA
        let price = document.createElement("p")
        price.id = "pricePageProduct";
        product.appendChild(price)
        price.textContent = myCamera.price/100 + "€"





// AJOUT AU PANIER

let carts = document.querySelectorAll('.addProduct');
let prod = myCamera;


for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(prod);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.shopping span').textContent = productNumbers;
    }
}

function cartNumbers(prod){

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.shopping span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.shopping span').textContent = 1;
    }

    setItems(prod);
}

function setItems(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        
        if(cartItems[prod.name] == undefined){
            cartItems = {
                ...cartItems,
                [prod.name]: prod
            }
        }
        cartItems[prod.name].inCart += 1;
    } else{
        prod.inCart = 1;
        cartItems = {
            [prod.name]:prod
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers();
}
let cameras;





// RECUPERATION DE L'URL AVEC ID

const getOneCamera = async function () {
    try {
    let response = await fetch(`http://localhost:3000/api/cameras/${idCamera}` , {
        mode: 'cors'
    })
        if (response.ok) {
            let cameras = await response.json();
                   
                  createCamera(cameras);         
        } else {
        console.error("Error", response.status)
    }
    } catch (e) {
        console.log(e);
    }
};

// APPEL DE LA FONCTION API

getOneCamera()