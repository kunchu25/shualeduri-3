const personsarray = [
    {age:25, name:'nika'},
      
    {age:30, name:'salome'},
    
    {age:22, name:'tatia'}
]


const sum = personsarray.reduce((elements, sum) => {elements += sum.age 
return elements;}, 0
);


console.log(sum);




const myForm = document.querySelector('#myForm');

  myForm.addEventListener('submit', (e) => {
 
  e.preventDefault()
   
  let fname = document.querySelector('#fName')
  
  let lname = document.querySelector('#lName')
   
    let gender = document.querySelector('#gender')
  let subscribe = document.querySelector('#subscribe')
 
    console.log(fname.value);
   console.log(lname.value);
    console.log(gender.value);
   console.log(subscribe.value);

  

 })


 
const animalsArray = ["cat", "dog", "giraffe", "crocodile", "elephant"];

const findLongestWord = (arr) => arr.reduce((element,current) => 
  { if(current.length > element.length){
    return current;
  }else{
    return element;
  }
}, )

console.log(findLongestWord(animalsArray))
