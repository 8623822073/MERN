//fetching data by upi
fetch(`https://fakestoreapi.com/products`).then((data)=>{
    //console.log(data)
    return data.json();
}).then((completedata)=>{
    let data1="";
    completedata.map((values)=>{
        data1+=`<div class="card">
            <h1 id="title">${values.title}</h2>
            <img src=${values.image} alt="img" class="image">
            <p class="description">${values.description}</p>
            <p class="category">${values.category}</p>
            <p class="price">${values.price}</p>
        </div>`;
    });
    document.getElementById("cards").innerHTML=data1;
})


