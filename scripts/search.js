// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
// console.log("yes")
import{navbar} from "../components/navbar.js"

let searchdata = (e) =>{
    if(e.key === "Enter"){
        console.log("done")
    
        let value = document.getElementById("search_input").value;   
       console.log(value)
        searchblogenter(value)
        
    }
   
}

let n = document.getElementById("navbar")
n.innerHTML=navbar();
let searchblogenter= async(value)=>{
    console.log(value)
    // let valu = JSON.parse(localStorage.getItem("val"))
    // console.log(value)
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
        let data = await res.json()
        console.log(data.articles)
        appendtosearch(data.articles)
    }
    catch(err){
        console.log(err)
    }
}
document.getElementById("search_input").addEventListener("keydown",searchdata)
export {searchblogenter}
// searchblogenter()
let appendtosearch=(data)=>{
    console.log(data)
    let appndiv=document.getElementById("detailed_news")
    // appndiv.innerHTML=null
    // console.log(data)
    data.forEach((el)=>{
        console.log(el)
        let box = document.createElement("div")
        // box.className="news"
        // box.addEventListener("click",function(){
        //     datails(el)
        // })
        let image = document.createElement("img")
        image.src = el.urlToImage

        let tdiv = document.createElement("div")
        let title = document.createElement("h3")
        title.innerText=el.title

        let dis = document.createElement("p")
        dis.innerText=el.description
        tdiv.append(title,dis)
        // console.log('tdiv:', tdiv)
        
        box.append(image,tdiv)
        console.log('box:', box)
        document.getElementById("results").append(box)
    })
    
    
}
// import{news} from "../scripts/news.js"
let datails= (el) =>{
    // console.log(el)

    localStorage.setItem("elem",JSON.stringify(el))
    news(el)
    window.location.href="news.html"
}


// data.forEach((el)=>{
//     let box = document.createElement("div")
//     box.className="news"
//     box.addEventListener("click",function(){
//         datails(el)
//     })
//     let image = document.createElement("img")
//     image.src = el.urlToImage
//     let tdiv = document.createElement("div")

//     let title = document.createElement("h3")
//     title.innerText=el.title
//     let dis = document.createElement("p")
//     dis.innerText=el.description
//     tdiv.append(title,dis)
//     box.append(image,tdiv)
//     appndiv.append(box)
// })