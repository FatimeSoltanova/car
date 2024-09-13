const content = document.getElementById("slide_content")
const leftBtn = document.getElementById("left-btn")
const rightBtn = document.getElementById("right-btn")
const title = document.getElementById("title")
const date = document.getElementById("date")
const img = document.getElementById("img")


const items = [
  {
      photolink: "https://images.unsplash.com/photo-1517271710308-aa99f1519490?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
      title:"2016 Mustang GT, San Francisco, United States",
      date:"Published on May 17, 2017"

  },

  {
      photolink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbT6fFUeE-jtL21IuLASX9fD9OsZ2aPB8dHQ&s",
      title:"2016 Mustang GT, San Francisco, United States",
      date:"Published on May 17, 2017"

  },

  {
      photolink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQleV2AWOsVmJbBqfcTDY37wj3arZGS-0XH-g&s",
      title:"2016 Mustang GT, San Francisco, United States",
      date:"Published on May 17, 2017"

  },

  {
      photolink: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/01/896/500/camaro-side.jpg?ve=1&tl=1",
      title:"2016 Mustang GT, San Francisco, United States",
      date:"Published on May 17, 2017"

  }
]


let index = 0

let item = items[index]

img.src=item.photolink

title.textContent = item.title

date.textContent = item.date

leftBtn.addEventListener("click" ,function(){
  if (index <= 0){
    index=items.length-1 
  }
  else{
    index--
  }

  img.src=item.photolink
  
  title.textContent = item.title
  
  date.textContent = item.date
})
rightBtn.addEventListener("click" ,function(){
    if (index=== items.length-1){
      index=0
     
    }
    else{
      index++
    }
  
    img.src = item.photolink
    
    title.textContent = item.title
    
    date.textContent = item.date
  })
// document.addEventListener("DOMContentLoaded", function() {  
//   const content = document.getElementById("slide_content")  
//   const leftBtn = document.getElementById("left_btn")  
//   const rightBtn = document.getElementById("right_btn")  
//   const title = document.getElementById("title")  
//   const date = document.getElementById("date")  
//   const img = document.getElementById("img")  

//   const items = [  
//     {  
//       photolink: "https://images.unsplash.com/photo-1517271710308-aa99f1519490?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",  
//       title: " Mustang GT",  
//       date: "Published on May 17, 2017"  
//     },  
//     {  
//       photolink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbT6fFUeE-jtL21IuLASX9fD9OsZ2aPB8dHQ&s",  
//       title: " San Francisco",  
//       date: "Published on May 17, 2018"  
//     },  
//     {  
//       photolink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQleV2AWOsVmJbBqfcTDY37wj3arZGS-0XH-g&s",  
//       title: " United States",  
//       date: "Published on May 17, 2019"  
//     },  
//     {  
//       photolink: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/01/896/500/camaro-side.jpg?ve=1&tl=1",  
//       title: "Ferrari GT",  
//       date: "Published on May 17, 2020"  
//     }  
//   ]  

//   let index = 0    
//   updateDisplay();  

//   leftBtn.addEventListener("click", function() {  
//     index = (index <= 0) ? items.length - 1 : index - 1;  
//     updateDisplay(); 
//     console.log("item[index]"); 
//   });  

//   rightBtn.addEventListener("click", function() {  
//     index = (index === items.length - 1) ? 0 : index + 1;  
//     updateDisplay();  
//   });  

//   function updateDisplay() {  
//     let item = items[index];  
//     img.src = item.photolink;  
//     title.textContent = item.title;  
//     date.textContent = item.date;  
//   }  
// });  

