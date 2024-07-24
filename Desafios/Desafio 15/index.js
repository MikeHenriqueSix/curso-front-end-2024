// const button = document.querySelectAll("button")

// for (var i = 0; 1 < button.length; i++){
//     button[i].addEventListener("click", function(){
//         alert("sua compra foi adicionada ao carrinho!")
//     })
// }


console.log(document.querySelector("div.product-1 p.price").textContent)

document.querySelector('div.product-1').addEventListener('click', function(){
    alert(`Compra realizada ${document.querySelector("div.product-1 p.price").textContent}`)
})

document.querySelector('div.product-2').addEventListener('click', function(){
    alert(`Compra realizada ${document.querySelector("div.product-2 p.price").textContent}`)
})

document.querySelector('div.product-3').addEventListener('click', function(){
    alert(`Compra realizada ${document.querySelector("div.product-3 p.price").textContent}`)
})