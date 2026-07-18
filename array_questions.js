 //
 
 let a=[5,55,4,5,4,7,6,3,1,0];
 const key=9;

 function check_Array(a,key)
 {
    for(let i=0;i<=a.length;i++)
    {
        if(a[i]>=key)
        {
            console.log(a[i]); //55
        }
    }
 }

 check_Array(a,key);

 //write js function extract unique char from a given string 
 //ex--> str="abcdabcdefggh"
 //ans="abcdefgh"

   function extractUniqueChars(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {    //checks the str charecter is present or not in result
            result= result+str[i];         //if not present store in result.
        }
    }

    return result;
}

// Example
let str = "abcdabcdefggh";
console.log(extractUniqueChars(str)); // "abcdefgh"

