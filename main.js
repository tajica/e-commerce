var options = [
    'Novo', 'Šminka', 'Parfemi', 'Nega tela', 'Nega lica', 'Muškarci', 'Deca'  
]
var text = "";
var i;
if (document.getElementById("navigation").innerHTML) { 

    for (i = 0; i < options.length; i++) {
        text +='<li class="nav-item"> <a class="nav-li" href="#">' + options[i] + '</a> </li>'
    }
    document.getElementById("navigation").innerHTML = text;
}

var jsonItems = {
    "items":[
       {
          "id":0,
          "brand":"Neko Bas Dugacko Ime Brenda ",
          "name":"Dolce & Gabbana",
          "price":13059.1,
          "volume":null,
          "image":"items/item3.svg"
       },
       {
          "id":1,
          "brand":"Dolce & Gabbana",
          "name":"Dolce & Gabbana",
          "price":2574.27,
          "volume":null,
          "image":"items/item2.svg"
       },
       {
          "id":2,
          "brand":"Neko Bas Dugacko Ime Brenda ",
          "name":"Versace",
          "price":10316,
          "volume":null,
          "image":"items/item1.svg"
       },
       {
          "id":3,
          "brand":"Versace",
          "name":"Dolce & Gabbana",
          "price":15531.55,
          "volume":null,
          "image":"items/item2.svg"
       },
       {
          "id":4,
          "brand":"Versace",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro pro u tri reda jedan mozda predugacak",
          "price":8275.58,
          "volume":null,
          "image":"items/item3.svg"
       },
       {
          "id":5,
          "brand":"neko bas dugacko ime brenda ",
          "name":"Versace",
          "price":3090.27,
          "volume":null,
          "image":"items/item2.svg"
       },
       {
          "id":6,
          "brand":"Dolce & Gabbana",
          "name":"Dolce & Gabbana",
          "price":12667.38,
          "volume":null,
          "image":"items/item1.svg"
       },
       {
          "id":7,
          "brand":"Dolce & Gabbana",
          "name":"Dolce & Gabbana",
          "price":10695.48,
          "volume":null,
          "image":"items/item2.svg"
       },
       {
          "id":8,
          "brand":"Versace",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":3952.63,
          "volume":null,
          "image":"items/item1.svg"
       },
       {
          "id":9,
          "brand":"Dolce & Gabbana",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":5805.07,
          "volume":null,
          "image":"items/item2.svg"
       },
       {
          "id":10,
          "brand":"Neko Bas Dugacko Ime Brenda ",
          "name":"Dolce & Gabbana",
          "price":13807.3,
          "volume":null,
          "image":"items/item1.svg"
       },
       {
          "id":11,
          "brand":"neko bas dugacko ime brenda ",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":13465.5,
          "volume":null,
          "image":"items/item1.svg"
       },
       {
          "id":12,
          "brand":"Versace",
          "name":"Versace",
          "price":5623.41,
          "volume":null,
          "image":"items/item3.svg"
       },
       {
          "id":13,
          "brand":"Dolce & Gabbana",
          "name":"Dolce & Gabbana",
          "price":8883.06,
          "volume":null,
          "image":"items/item1.svg"
       },
       {
          "id":14,
          "brand":"Dolce & Gabbana",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":7308.58,
          "volume":null,
          "image":"items/item3.svg"
       },
       {
          "id":15,
          "brand":"neko bas dugacko ime brenda ",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":11179.18,
          "volume":null,
          "image":"items/item3.svg"
       },
       {
          "id":16,
          "brand":"Dolce & Gabbana",
          "name":"Dolce & Gabbana",
          "price":2558.83,
          "volume":null,
          "image":"items/item2.svg"
       },
       {
          "id":17,
          "brand":"Dolce & Gabbana",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":1691.7,
          "volume":null,
          "image":"items/item1.svg"
       },
       {
          "id":18,
          "brand":"Versace",
          "name":"Versace",
          "price":12055.53,
          "volume":null,
          "image":"items/item1.svg"
       },
       {
          "id":19,
          "brand":"Dolce & Gabbana",
          "name":"Versace",
          "price":1853.41,
          "volume":null,
          "image":"items/item3.svg"
       },
       {
          "id":20,
          "brand":"Dolce & Gabbana",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":3351.08,
          "volume":null,
          "image":"items/item2.svg"
       },
       {
          "id":21,
          "brand":"Dolce & Gabbana",
          "name":"Dolce & Gabbana",
          "price":637.97,
          "volume":null,
          "image":"items/item1.svg"
       },
       {
          "id":22,
          "brand":"Neko Bas Dugacko Ime Brenda ",
          "name":"Dolce & Gabbana",
          "price":14897.65,
          "volume":null,
          "image":"items/item3.svg"
       },
       {
          "id":23,
          "brand":"Dolce & Gabbana",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":1136.56,
          "volume":null,
          "image":"items/item2.svg"
       },
       {
          "id":24,
          "brand":"Neko Bas Dugacko Ime Brenda ",
          "name":"Versace",
          "price":15625.79,
          "volume":null,
          "image":"items/item1.svg"
       },
       {
          "id":25,
          "brand":"Versace",
          "name":"Versace",
          "price":12073.74,
          "volume":null,
          "image":"items/item3.svg"
       },
       {
          "id":26,
          "brand":"Neko Bas Dugacko Ime Brenda ",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":7058.11,
          "volume":null,
          "image":"items/item2.svg"
       },
       {
          "id":27,
          "brand":"neko bas dugacko ime brenda ",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":2580.47,
          "volume":null,
          "image":"items/item2.svg"
       },
       {
          "id":28,
          "brand":"Neko Bas Dugacko Ime Brenda ",
          "name":"Dolce & Gabbana",
          "price":12891.6,
          "volume":null,
          "image":"items/item1.svg"
       },
       {
          "id":29,
          "brand":"Dolce & Gabbana",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":6620.64,
          "volume":null,
          "image":"items/item1.svg"
       },
       {
          "id":30,
          "brand":"Versace",
          "name":"Versace",
          "price":9896.87,
          "volume":null,
          "image":"items/item2.svg"
       },
       {
          "id":31,
          "brand":"Versace",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":10565.07,
          "volume":null,
          "image":"items/item1.svg"
       },
       {
          "id":32,
          "brand":"Versace",
          "name":"Versace",
          "price":8605.27,
          "volume":null,
          "image":"items/item1.svg"
       },
       {
          "id":33,
          "brand":"neko bas dugacko ime brenda ",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":8834.98,
          "volume":null,
          "image":"items/item2.svg"
       },
       {
          "id":34,
          "brand":"Dolce & Gabbana",
          "name":"Dolce & Gabbana",
          "price":15727.75,
          "volume":null,
          "image":"items/item3.svg"
       },
       {
          "id":35,
          "brand":"neko bas dugacko ime brenda ",
          "name":"Versace",
          "price":10371.36,
          "volume":null,
          "image":"items/item2.svg"
       }
    ]
 }
 var itemTxt = JSON.stringify(jsonItems.items)
var itemList = JSON.parse(itemTxt);
console.log(itemList);

var page = 1;
var itmsPerPage = 18;

function pagination(way) { 
    page += way;
}

// function createItems() {
    var it = '';

    itemList.forEach(item => {
        if (item.id >= (page - 1) * itmsPerPage && item.id < page * itmsPerPage) { 
            it += '<div class="grid-item"><img class="item-image" src=' + item.image 
                +'>   <div class="item-body"><div  class="item-brand"><image style="float: right;" src="items/fav.svg"></image><h5 class="item-brand">'
                + item.brand
                + ' </div> <div class="item-name">' + item.name + '</div>  <div class="item-price">'
                + item.price + ' RSD</div> </div> </div>';
              
        }
    });
    document.getElementById("items-grid").innerHTML = it;
   
// }