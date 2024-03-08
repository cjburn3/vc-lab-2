// document.getElementById("myBtn").addEventListener("click", upperCase);

// function upperCase() {
//     let x = document.getElementById("myBtn").innerHTML;
//     document.getElementById("myBtn").innerHTML =x.toUpperCase() ;
// }
// document.getElementById("myBtn2").addEventListener("click", lowerCase);
// function lowerCase()


// let button1 = document.querySelector('#myBtn')
// button1.addEventListener("click",() => {
// let myh1 = document.querySelector('h1')
// let currentWords = myh1.textContent;
//  console.log(currentWords);
//   if (currentWords.style.textTransform == "march 5 lab") {
//     currentWords.style.textTransform = "lowercase";
//   } else {
//     currentWords.style.textTransform = "uppercase";
//   }
// })


let isUpper = false;
let myh1 = document.getElementById('my-h1');
let button1 = document.getElementById('myBtn')
button1.addEventListener("click", toggleUpperLower);
function toggleUpperLower() {
  console.log("test");
  
  if (isUpper === false) {
    console.log("isUpper false")
    let myText = myh1.textContent.toUpperCase();
    myh1.textContent = myText;
    isUpper = true;
  } else {
    console.log("isUpper true");
    let myText = myh1.textContent.toLowerCase();
    myh1.textContent = myText;
    isUpper = false;
  }
}


let skills = ["Diving", "Surfing", "Camping"]

document.getElementById("myBtn2")
.addEventListener("click", ButtonEvent)
function ButtonEvent() {
let myUl = document.querySelector("ul")
for (let i = 0; i < skills.length; i++){
  let li = document.createElement("li");
  li.textContent = skills[i];
  myUl.appendChild(li);
}
}


// button1.addEventListener('click', () => {
//   let myh1 = document.querySelector('h1')
//   let currentWords = myh1.textContent;
//   console.log(currentWords);
// }
// )
