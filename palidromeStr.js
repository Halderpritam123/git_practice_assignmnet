let str="racecar";
for(let i=str.length-1;i>=0;i--){
    new_str+=str[i];
}
if(new_str===str){
console.log();
}else{
console.log("not a palindrome string");
}