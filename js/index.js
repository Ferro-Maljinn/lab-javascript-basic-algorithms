//Iteration 1: Names and Input
//1.1
let hacker1= "Conan Doyle";
//1.2
console.log(`The drivers name is ${hacker1}`);
//1.3
let hacker2= "Ferro Maljinn"
//1.4
console.log(`The navigators name is ${hacker2}`);

//_____________________________________________________________
//Iteration 2: Conditionals
// 2.1 
if (hacker1.length > hacker2.length) {
  console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker2.length > hacker1.length) {
  console.log(`The navigator "${hacker1}" has the longest name, it has ${hacker1.length} characters`);
}

//_____________________________________________________________
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

/*______________________________________________________________ 
3.3 Alternative 1 (not reaaaaly?)
for (let i = 0 ; i < hacker1.length; i++) {
    if (hacker1[i] > hacker2[i]){
      console.log("The driver's name goes first.")
  }
  else if (hacker1[i] < hacker2[i]){
      console.log("Yo, the navigator goes first definitely.")
  }
  else {
      console.log("What?! You both have the same name?")
  }
}//_____________________________________________________________ */

// 3.3 Alternative 2
let str = ""
for (let i = 0 ; i < hacker1.length; i++) {
    if (hacker1[i] > hacker2[i]){
      str = "The driver has the longest name, it has XX characters."
  }
  else if (hacker1[i] < hacker2[i]){
    str = "Yo, the navigator goes first definitely."
  }
  else {
    str = "What?! You both have the same name?"
  }
}
console.log(str)


/*_____________________________________________________________
Bonus 1: */
let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo elementum arcu, non rhoncus quam efficitur id. Aenean ut lorem eget eros eleifend lacinia et et lorem. Ut ultricies nisi nec ex eleifend, ut lobortis quam vestibulum. Donec porta vulputate tellus eget dignissim. Nullam at tristique tortor. Proin eu dolor ac velit efficitur gravida eget ultricies magna. Aliquam dictum sem luctus nulla sagittis consectetur. Phasellus fermentum elit in ligula viverra, nec pharetra elit faucibus. Maecenas sollicitudin diam id urna placerat bibendum. Etiam nec leo orci. Pellentesque elementum, lorem eu faucibus luctus, nisi magna pharetra ipsum, eget vulputate mauris nibh et erat. Vivamus quis vulputate nisl. Pellentesque congue varius quam id iaculis. Aenean tincidunt, enim tincidunt volutpat varius, ligula turpis pharetra dui, placerat venenatis lorem ante eget velit.Nam quam dolor, tincidunt eget viverra ut, maximus posuere massa. Nam et sem elit. Nulla finibus ac tortor facilisis congue. Donec congue lacinia elementum. Donec et tortor eleifend, porta eros vitae, pellentesque ligula. Morbi elementum, libero a feugiat malesuada, felis nunc ornare eros, venenatis vestibulum urna lacus et risus. In venenatis condimentum est, eget ullamcorper metus luctus non. Ut eget nibh non nunc lacinia iaculis in et eros. Integer vitae egestas nulla. Nullam ut rutrum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla turpis leo, cursus sagittis orci et, lobortis molestie enim. Duis dignissim commodo hendrerit. Cras faucibus dapibus efficitur. Sed iaculis sollicitudin dui, id viverra nibh ultricies id. Pellentesque sit amet cursus sem, accumsan fermentum lorem. Integer id tincidunt augue, ac varius justo."
console.log(paragraph.split("").length);

let counter = 0;
let word = paragraph.split(" ");
for (let i = 0; i < word.length; i++) {
      counter += 1;
      console.log(word.length);
      break;
    }
