//Iteration 1: Names and Input
//1.1
let hacker1= "Conan Doyle";
//1.2
console.log(`The drivers name is ${hacker1}`);
//1.3
let hacker2= "Ferro Maljinn"
//1.4
console.log(`The navigators name is ${hacker2}`);


//Iteration 2: Conditionals
// 2.1 
if (hacker1.length > hacker2.length) {
  console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker2.length > hacker1.length) {
  console.log(`The navigator "${hacker1}" has the longest name, it has ${hacker1.length} characters`);
}


//Iteration 3: Loops
// 3.1
let hacker2CharSpaced = hacker1.split("").join(" ").toUpperCase();
console.log(hacker2CharSpaced);

// 3.2
let reversed = "";
for (let i = hacker2.length -1; i >=0; i--){
  console.log(hacker2[i])
  reversed += hacker2[i]
}

// 3.3
for (let i = 0 ; 0 < hacker1.length; i++) {
    if (hacker1[i].length > hacker2[i].length){
      console.log("The driver's name goes first.")
  }
  else if (hacker1[i].length < hacker2[i].length){
      console.log("Yo, the navigator goes first definitely.")
  }
  else if (hacker1[i].length = hacker2[i].length){
      console.log("What?! You both have the same name?")
  }