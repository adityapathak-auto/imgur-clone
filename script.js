
//   var myHeaders = new Headers();
// myHeaders.append("Authorization", "Client-ID 5506713fc1e52e3");

// var formdata = new FormData();

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
// //   body: formdata,
//   redirect: 'follow'
// };

// fetch("https://api.imgur.com/3/gallery/hot/", requestOptions)
//   .then(response => (response.json()))
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

let time;
var parent = document.getElementById("search-result");
var parent1 = document.getElementById("display");


async function load(){
    
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Client-ID 5506713fc1e52e3");


var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
//   body: formdata,
  redirect: 'follow'
};

let res =  await fetch("https://api.imgur.com/3/gallery/hot/", requestOptions);

let data = await res.json();
let datam = data.data
console.log(datam);
var parent1 = document.getElementById("displaym");
datam.map((e)=>{
     let div = document.createElement("div");
    var img = document.createElement("img");
    var iframe = document.createElement("iframe");
    iframe.height = 0;
    iframe.width = 0;

let h3 = document.createElement("h3");
h3.textContent = e.title;
if(e.images !==undefined){
if(e.images[0].type==="video/mp4"){
    iframe.src = e.images[0].link;
    iframe.width = e.images[0].width;
    iframe.height = e.images[0].height;
    
    
} else if(e.images[0].type === "image/jpeg" || e.images[0].type === "image/png"){
    img.src = e.images[0].link;
    img.style.width = e.images[0].width;
    img.style.height = e.images[0].height;
}
}
 else{
    img.src = e.link;
   
}

let images = e.images;
// images.map((f)=>{
    
//     img.src = f.link;
// })

div.append(h3,img,iframe);
parent1.appendChild(div);

})


  
}

window.onload = load();



async function search(){

    var myHeaders = new Headers();
myHeaders.append("Authorization", "Client-ID 5506713fc1e52e3");

var formdata = new FormData();
let input = document.getElementById("search").value;

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
//   body: formdata,
  redirect: 'follow'
};

 let res = await fetch(`https://api.imgur.com/3/gallery/search/?q=${input}`, requestOptions)
  let data = await res.json();
  return data.data
  console.log(data.data)

    


}
async function display(){
    let parent = document.getElementById("search-result");

    parent.innerHTML = "";
    let data =await search();
     console.log(data);
    data.map((e)=>{
        
            let div = document.createElement("div");
            let p = document.createElement("p");
            let p2 = document.createElement("p2");
            var img = document.createElement("img");
            // e.images.forEach((f)=>{
            //     img.setAttribute("src" , f.link);
            // });

            p.textContent = e.title;
            p2.textContent = e.layout

            div.append(p,p2);
            parent.append(div);
            
    
    })



}
function debounce(func,delay){

    clearTimeout(time);

    time = setTimeout(function(){
        func();
    },delay);


    

}
