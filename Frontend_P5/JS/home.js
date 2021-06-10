//fonctions de base

main()

async function main(){
    const articles = await getArticles()
    for (article of articles){
        displayArticle(article)
    }
        
}

// fetch de l'api > cameras

function getArticles(){
    return fetch("http://localhost:3000/api/cameras")
        .then(function(httpBodyResponse){
           return httpBodyResponse.json()
        })
        .then(function(articles){
           return articles
        })
        .catch(function(error){
            alert(error)
        })
}

//clone + insert du contenu pour chaque produit

function displayArticle(){
   const templateElt = document.getElementById("templateArticle")
   const cloneElt = document.importNode(templateElt.content, true)

   cloneElt.getElementById("imgProduct").src = article.imageUrl
   cloneElt.getElementById("nameProduct").textContent = article.name
   cloneElt.getElementById("priceProduct").textContent = article.price/100 + "€"
   cloneElt.getElementById("detailsProduct").href = `Frontend_P5/product.html?id=${article._id}`

   document.getElementById("main").appendChild(cloneElt)
}
