let paragraph=document.getElementById("access");
console.log(paragraph);
paragraph.style.backgroundColor="blue";
paragraph.style.color="white";


 let para=document.getElementById("inone");
 console.log(para);;
 para.style.cssText="background-color:blue;color:white";

 function onButtonClick(){
  console.log("buttonclick");
}

function onAddClass(){
    let paragrap=document.getElementById("inone");
    paragrap.classList.add("blue");
}

let paragra=document.getElementById("inone");
    console.log(paragra.innerText);

    let paragr=document.getElementById("inone");
    console.log(paragr.textContent);

    let parag=document.getElementById("inone");
    console.log(parag.innerHTML);




