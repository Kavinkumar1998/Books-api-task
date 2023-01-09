
async function books(){
    try{
        let url="https://www.anapioficeandfire.com/api/books";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        for(let i=0; i<data.length; i++){
document.querySelector(".container").innerHTML +=`
<div class="box">
<section class="name"><h2>${data[i].name}</h2><section>
<img src="https://img.freepik.com/premium-vector/heap-books-sketch-library-stack-education-symbol_80590-12797.jpg?w=2000" alt="${data[i].name}" class="image" />
<section class="publisher">Publisher : ${data[i].publisher}<section>
<section class="no.of.pages">Pages : ${data[i].numberOfPages}<section>
<section class="authors">Authors : ${data[i].authors}<section>
<section class="released">Released : ${data[i].released}<section>
</div>
`
        }
        
        
    }
    catch(error){
        console.log(error);
}
}
books();