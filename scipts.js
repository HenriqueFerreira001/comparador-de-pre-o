const searchform = document.querySelector('.search-form')
const productlist = document.querySelector('.product-list')
const pricechart = document.querySelector ('.price-chart')

let mychart
searchform.addEventListener('submit', async function (event) {
    event.preventDefault()
    const inputvalue = event.target[0].value
    const products = await data.json().result.slice(0, 10)
    const data = await fetch (`https://api.mercadolibre.com/sites/MLB/search?q=${inputvalue}` ,)
   
    

    displayItems(products)
    pricechart(products)
})

function displayItems(products) {
    productlist.innerHTML = products.map(produto => `
    <div class="product-card">
    <img src="${product.thumbnail.replace(/\w\.jpg/gi, 'w.jpg')}" alt="${product.title}">
<h3>${product.title}</h3>
<p class="product-price">${product.price.tolocalestring('pt-br', { style: "currency", currency: "BRL" })}</p>
<p class="product-store"> loja: ${product.seller.nickname}</p>

    </div>
        
       ` ) .join('')
}
function updatepricechart(products){

}

