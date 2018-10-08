let words =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W","X", "Y", "Z"];
let divs = [
    {
        letter : "words",
        backgroundimage: "images/keyboard-key.png",

    }
];
// text = "";
// let i;
// for(i = 0; i < words.length; i++){
//     // text += words[i]; 
// document.querySelector(".keyletter").innerHTML += `
//         <div class="word">
//         <p>A</p>
//         </div>`;

// }
let p='';
function letter(c){
p = c;
document.querySelector(".usertext").innerHTML += p;
// document.querySelector(".usertext").style.display = "flex";

console.log(p);

}
function myfunc(){
    document.querySelector(".usertext").innerHTML = "";
    alert("Your Message Has been sent!")
}
// write your JS code here