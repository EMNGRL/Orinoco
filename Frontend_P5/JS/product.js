const params = new URLSearchParams(window.location.search);
let idCamera = params.get("id");

function getCamera(cameras, idCamera) {

    let myCamera = cameras.find(cameras => cameras["_id"] == idCamera);
   } 

function createCamera(myCamera){
    let product = document.getElementById("product")
        
        let name = document.createElement("p")
        name.id = "namePageProduct";
        product.appendChild(name)
        name.textContent = myCamera.name

        let imgProduct = document.createElement("img")
        imgProduct.id = "imgPageProduct";
        product.appendChild(imgProduct)
        imgProduct.src = myCamera.imageUrl

        let description = document.createElement("p")
        description.id = "descriptionPageProduct";
        product.appendChild(description)
        description.textContent = myCamera.description

        let lenses = document.createElement("p")
        lenses.id = "lensesProduct";
        product.appendChild(lenses)
        lenses.textContent = myCamera.lenses

        let price = document.createElement("p")
        price.id = "pricePageProduct";
        product.appendChild(price)
        price.textContent = myCamera.price/100 + "€"

        let btn = document.createElement("BUTTON");
        btn.id = "addProduct";
        btn.innerHTML = "Ajouter au panier";
        product.appendChild(btn);
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