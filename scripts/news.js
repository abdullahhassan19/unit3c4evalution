// Ude Import export (MANDATORY)
console.log("yes")
import{navbar,sidebar} from "../components/navbar.js"

let nav = document.getElementById("navbar")
nav.innerHTML=navbar();
// let news = (data) =>{
//     console.log(data)
    
//     // return ``
// }
// news()
// export{news}
// let da = JSON.parse(localStorage.getItem('elem'))
// console.log(da)
// // let de= da.title
// // console.log(de)
//     let box = document.createElement("div")

//     let image = document.createElement("img")
//     image.src = da.urlToImage;
//     console.log('image:', image)


//     let title = document.createElement("h3")
//     title.innerText=da.title
//     console.log(title)
//     let dis = document.createElement("p")
//     dis.innerText=da.description
//     console.log('dis:', dis)
//     box.append(image,title,dis)
//     document.getElementById("detailed_news").append(box)