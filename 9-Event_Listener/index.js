document.querySelector("button").addEventListener("click", function(){
    alert("voce clicou no botao")
})

const mouseHendler = () =>{
    document.querySelector("h1").classList.toggle("header")
}


document.querySelector("h1").addEventListener("mouseenter", mouseHendler)
document.querySelector("h1").addEventListener("mouseout", mouseHendler)


document.querySelector("input").addEventListener("keydown", function(event){
    console.log(event.target.value)
})