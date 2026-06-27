let name="ahMed";
let gameName= new String("   football  ");
console.log(name);              //ahMed
console.log(gameName.charAt(0));    //f
console.log(gameName.includes("f"));    //true
console.log(gameName.indexOf("o"));  //1
console.log(gameName.concat(" is a flexible game")); //football is felexible game
console.log(name.charAt(1));            //h
console.log(name.includes("M"));        //true
console.log(name.indexOf("d"));         //4

console.log(gameName.length);           //8
console.log(gameName.trim());   // the trim fn or method or member function will remove the whide spaces present at start and ent of the string.
console.log(name.lastIndexOf("Med")); // lastindexof returns the last index of substring from the original string
console.log(gameName.replace("ball","out"));  // it will replace the given string from original string replace("present string","replaceable string")
console.log(gameName.replaceAll("o","u"));    //replaceAll(pattern, replacement) //fuutball

let updated = gameName.replaceAll("o","u");
console.log(updated.trim());

let gupdated=gameName.replace("ball","out");
console.log(gupdated.trim());


console.log("===========");
console.log(gameName.toLocaleLowerCase());
console.log(gameName.toLocaleUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());


const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words);
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("   ");
console.log(chars);
console.log(chars[8]);
// // Expected output: "k"

const strCopy = str.split("");
console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]

let st = "JavaScript";

console.log(st.startsWith("Java")); // true
console.log(st.startsWith("Script")); // false

console.log(st.endsWith("me"));
console.log(st.endsWith('tjkdn'));


console.log(st.slice(0,10));     //slice(startno,endno); //javascript
console.log(st.slice(4));        //script
console.log(st.slice(1));        //avascript
console.log(st.slice(-2));       //pt (in reserve order)

console.log(st.substring(0,4)); //java
console.log(st.substring(5));   //cript

