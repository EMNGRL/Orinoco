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

// affichage d'un article en fonction de l'id choisi


function displayArticle(){
   const templateElt = document.getElementById("templateArticle")
   const cloneElt = document.importNode(templateElt.content, true)
   
   let searchParams = new URLSearchParams(window.location.search);

   if (searchParams.has('id')){
        let camId = searchParams.get('id');
   } else {
       window.location.pathname = 'home.html';
   }

   cloneElt.getElementById("imgPageProduct").src = article.imageUrl
   cloneElt.getElementById("name").textContent = article.name
   cloneElt.getElementById("lenses").textContent = "Lentilles" + article.lenses 
   cloneElt.getElementById("description").textContent = "Description" + article.description
   cloneElt.getElementById("price").textContent = article.price/100 + "€"
   cloneElt.getElementById("add").href = ``

   document.getElementById("pageProduct").appendChild(cloneElt)
}

