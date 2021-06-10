main()

async function main(){
    const articles = await getArticles()
    for (article of articles){
        displayArticle(article)
    }     
}

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

function displayArticle(){
   const templateElt = document.getElementById("templateArticle")
   const cloneElt = document.importNode(templateElt.content, true)

   cloneElt.getElementById("imgProduct").src = article.imageUrl
   cloneElt.getElementById("name").textContent = article.name
   cloneElt.getElementById("lenses").textContent = article.lenses
   cloneElt.getElementById("description").textContent = article.description
   cloneElt.getElementById("price").textContent = article.price/100 + "€"
   cloneElt.getElementById("add").href = ``

   document.getElementById("main").appendChild(cloneElt)
}