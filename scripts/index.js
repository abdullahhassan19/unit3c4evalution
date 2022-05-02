// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import{navbar,sidebar} from "../components/navbar.js"

let nav = document.getElementById("navbar")
nav.innerHTML=navbar();

let sib = document.getElementById("sidebar")
sib.innerHTML=sidebar();

// document.getElementById("")

let search = async() =>{
    try{
        let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in")
        let data = await res.json();
        // console.log(data)
        append(data.articles)

    }
    catch(err){
        console.log(err)

    }
}
search()


import{searchblogenter} from "./scripts/search.js"
let searchdata = (e) =>{
    if(e.key === "Enter"){
        // console.log("done")
    
        let value = document.getElementById("search_input").value;   
        searchblogenter(value)
        // console.log(value)
        // localStorage.setItem("val",JSON.stringify(value))
        // searchblogenter(value)
        window.location.href="search.html"
    }
    // console.log("yes")
    // let value = document.getElementById("search_input").value;
    //     console.log(value)
}


let searchblog= async(value)=>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
        let data = await res.json()
        console.log(data)
        // appendtosearch(data.articles)
    }
    catch(err){
        console.log(err)
    } 
}

document.getElementById("search_input").addEventListener("keydown",searchdata)
// function csearch(){
//     console.log(this.id)
// }
// for(let el of sidebar ){
//     el.addEventListener("click",csearch)
// }

let append=(data)=>{
    let appndiv=document.getElementById("results")
    // appndiv.innerHTML=null
    // console.log(data)
    data.forEach((el)=>{
        let box = document.createElement("div")
        box.className="news"
        let image = document.createElement("img")
        image.src = el.urlToImage
        let tdiv = document.createElement("div")

        let title = document.createElement("h3")
        // console.log('title:', title)
        title.innerText=el.title
        let dis = document.createElement("p")
        dis.innerText=el.description
        tdiv.append(title,dis)
        box.append(image,tdiv)
        appndiv.append(box)
    })
}