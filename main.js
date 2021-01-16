
function onInit() { 
    getFilterValues();
    createItems(itemList);
    createCategories();
    pagination(page);
}

function createCategories() { 
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
}
var jsonItems = {
    "items":[
       {
          "id":0,
          "brand":"Neko Bas Dugacko Ime Brenda ",
          "name":"Dolce & Gabbana",
          "price":13059.1,
          "volume":70,
          "image":"items/item3.svg"
       },
       {
          "id":1,
          "brand":"Dolce & Gabbana",
          "name":"Dolce & Gabbana",
          "price":2574.27,
          "volume":100,
          "image":"items/item2.svg"
       },
       {
          "id":2,
          "brand":"Neko Bas Dugacko Ime Brenda ",
          "name":"Versace",
          "price":10316,
          "volume":150,
          "image":"items/item1.svg"
       },
       {
          "id":3,
          "brand":"Versace",
          "name":"Dolce & Gabbana",
          "price":15531.55,
          "volume":20,
          "image":"items/item2.svg"
       },
       {
          "id":4,
          "brand":"Versace",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro pro u tri reda jedan mozda predugacak",
          "price":8275.58,
          "volume":10,
          "image":"items/item3.svg"
       },
       {
          "id":5,
          "brand":"neko bas dugacko ime brenda ",
          "name":"Versace",
          "price":3090.27,
          "volume":50,
          "image":"items/item2.svg"
       },
       {
          "id":6,
          "brand":"Dolce & Gabbana",
          "name":"Dolce & Gabbana",
          "price":12667.38,
          "volume":60,
          "image":"items/item1.svg"
       },
       {
          "id":7,
          "brand":"Gucci",
          "name":"Dolce & Gabbana",
          "price":10695.48,
          "volume":60,
          "image":"items/item2.svg"
       },
       {
          "id":8,
          "brand":"Versace",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":3952.63,
          "volume":100,
          "image":"items/item1.svg"
       },
       {
          "id":9,
          "brand":"Dolce & Gabbana",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":5805.07,
          "volume":50,
          "image":"items/item2.svg"
       },
       {
          "id":10,
          "brand":"Neko Bas Dugacko Ime Brenda ",
          "name":"Dolce & Gabbana",
          "price":13807.3,
          "volume":50,
          "image":"items/item1.svg"
       },
       {
          "id":11,
          "brand":"neko bas dugacko ime brenda ",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":13465.5,
          "volume":50,
          "image":"items/item1.svg"
       },
       {
          "id":12,
          "brand":"Versace",
          "name":"Versace",
          "price":5623.41,
          "volume":150,
          "image":"items/item3.svg"
       },
       {
          "id":13,
          "brand":"Dolce & Gabbana",
          "name":"Dolce & Gabbana",
          "price":8883.06,
          "volume":100,
          "image":"items/item1.svg"
       },
       {
          "id":14,
          "brand":"Gucci",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":7308.58,
          "volume":80,
          "image":"items/item3.svg"
       },
       {
          "id":15,
          "brand":"neko bas dugacko ime brenda ",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":11179.18,
          "volume":70,
          "image":"items/item3.svg"
       },
       {
          "id":16,
          "brand":"Dolce & Gabbana",
          "name":"Dolce & Gabbana",
          "price":2558.83,
          "volume":100,
          "image":"items/item2.svg"
       },
       {
          "id":17,
          "brand":"Dolce & Gabbana",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":1691.7,
          "volume":50,
          "image":"items/item1.svg"
       },
       {
          "id":18,
          "brand":"Versace",
          "name":"Versace",
          "price":12055.53,
          "volume":200,
          "image":"items/item1.svg"
       },
       {
          "id":19,
          "brand":"Dolce & Gabbana",
          "name":"Versace",
          "price":1853.41,
          "volume":100,
          "image":"items/item3.svg"
       },
       {
          "id":20,
          "brand":"Dolce & Gabbana",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":3351.08,
          "volume":50,
          "image":"items/item2.svg"
       },
       {
          "id":21,
          "brand":"Dolce & Gabbana",
          "name":"Dolce & Gabbana",
          "price":637.97,
          "volume":100,
          "image":"items/item1.svg"
       },
       {
          "id":22,
          "brand":"Neko Bas Dugacko Ime Brenda ",
          "name":"Dolce & Gabbana",
          "price":14897.65,
          "volume":200,
          "image":"items/item3.svg"
       },
       {
          "id":23,
          "brand":"Dolce & Gabbana",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":1136.56,
          "volume":150,
          "image":"items/item2.svg"
       },
       {
          "id":24,
          "brand":"Neko Bas Dugacko Ime Brenda ",
          "name":"Versace",
          "price":15625.79,
          "volume":200,
          "image":"items/item1.svg"
       },
       {
          "id":25,
          "brand":"Versace",
          "name":"Versace",
          "price":12073.74,
          "volume":150,
          "image":"items/item3.svg"
       },
       {
          "id":26,
          "brand":"Neko Bas Dugacko Ime Brenda ",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":7058.11,
          "volume":100,
          "image":"items/item2.svg"
       },
       {
          "id":27,
          "brand":"neko bas dugacko ime brenda ",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":2580.47,
          "volume":90,
          "image":"items/item2.svg"
       },
       {
          "id":28,
          "brand":"Neko Bas Dugacko Ime Brenda ",
          "name":"Dolce & Gabbana",
          "price":12891.6,
          "volume":80,
          "image":"items/item1.svg"
       },
       {
          "id":29,
          "brand":"Dolce & Gabbana",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":6620.64,
          "volume":70,
          "image":"items/item1.svg"
       },
       {
          "id":30,
          "brand":"Versace",
          "name":"Versace",
          "price":9896.87,
          "volume":60,
          "image":"items/item2.svg"
       },
       {
          "id":31,
          "brand":"Versace",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":10565.07,
          "volume":50,
          "image":"items/item1.svg"
       },
       {
          "id":32,
          "brand":"Versace",
          "name":"Versace",
          "price":8605.27,
          "volume":40,
          "image":"items/item1.svg"
       },
       {
          "id":33,
          "brand":"neko bas dugacko ime brenda ",
          "name":"Proizvod koji ima bas dugacko ime  i  naziv proizvodjaca Pro",
          "price":8834.98,
          "volume":30,
          "image":"items/item2.svg"
       },
       {
          "id":34,
          "brand":"Dolce & Gabbana",
          "name":"Dolce & Gabbana",
          "price":15727.75,
          "volume":20,
          "image":"items/item3.svg"
       },
       {
          "id":35,
          "brand":"neko bas dugacko ime brenda ",
          "name":"Versace",
          "price":10371.36,
          "volume":10,
          "image":"items/item2.svg"
        },
        {
            "id":36,
            "brand":"Neko Bas Dugacko Ime Brenda ",
            "name":"Gucci",
            "price":13049.2,
            "volume":60,
            "image":"items/item3.svg"
         }
    ]
 }
var itemTxt = JSON.stringify(jsonItems.items)
var itemList = JSON.parse(itemTxt);

var page = 1;
var itmsPerPage = 18;
var totalPages = 0;

function pagination() { 
    var pageNmr = '';
    for (var i = 0; i < totalPages; i++){
        pageNmr += '<a href="#">' + (i + 1) + '</a>';
    }
    document.getElementById("pagination").innerHTML = pageNmr;
}

function pageChng(val) { 
    if (val == 1 && page != totalPages) {
        page += val;
        // dodaj disable na elemnt
    } else if (val == - 1 && page != 1) { 
        page -= val;
    }
}

function createItems(newList) {
    var it = '';
    if (newList.length > 0 && newList.length % itmsPerPage == 0) {
        totalPages = newList.length / itmsPerPage;
    } else if (newList.length > 0 && newList.length % itmsPerPage != 0) { 
        totalPages = Math.floor(newList.length / itmsPerPage) + 1;

    }
                
    var itemCounter = (page - 1) * itmsPerPage;
    newList.forEach(item => {
       
            if (itemCounter < page * itmsPerPage) {
            it += '<div class="grid-item"><img class="item-image" src=' + item.image 
                +'>   <div class="item-body"><div  class="item-brand"><image style="float: right;" src="items/fav.svg"></image><h5 class="item-brand">'
                + item.brand
                + ' </div> <div class="item-name">' + item.name + '</div>  <div class="item-price">'
                + item.price + ' RSD</div> </div> </div>';
            }
            itemCounter++;
       
    });
    document.getElementById("items-grid").innerHTML = it;
    }    

    function getFilterValues() {

        var priceMin = 20000;
        var priceMax = 0;
       
        var brands = [];
        var volumes = [];
        var maxVol = 0;
       
        itemList.forEach(item => {
            brands.push(item.brand);
            // volumes.push(item.volume);
            if (item.price > priceMax) {
                priceMax = item.price
            } else if (item.price < priceMin) {
                priceMin = item.price;
            }

            if (item.volume > maxVol) { 
                maxVol = item.volume;
            }
        });
        var rangeValue = priceMax;
       
        document.getElementById("filter-price").innerHTML = ' <input type="range" min="'
                + priceMin + '" max=" ' + priceMax + '" value=" ' + rangeValue + '" class="slider" id="myRange">';

        brands = brands.filter((v, i, a) => a.indexOf(v) === i);

   //proveri sto array.sort() ne radi??
        
        var brandsF = '';

        brands.forEach(brand => {
            brandsF += ' <li><label class="checkbox-inline">' + brand + '<input type="checkbox" id="' + brand
                + '" onclick="isChecked(this.id)"> <span class="checkmark"></span></label></li>'
            
        });

        document.getElementById("filter-brand").innerHTML = brandsF;

        var volRange = [];
        
        for ( var r = 0, id =0;  r < maxVol + 50; r += 50, id++) { 
            volRange.push({ id: id, minVolume: r, maxVolume: r+50})
            }
        
        var volumesF = '';
        volRange.forEach(volume => {
            volumesF += ' <li><label class="checkbox-inline"><input  type="checkbox" id=" onclick="isChecked(this.id)"' 
               + volRange.id + ' >' + volume.minVolume + ' - ' + volume.maxVolume
                + 'ml <span class="checkmark"></span></label></li>'
            
        });

        document.getElementById("filter-volume").innerHTML = volumesF;

}
var chkList = [];

function isChecked(id) {
    var checkBox = document.getElementById(id);
    var text = document.getElementById("text");
    if (checkBox.checked == true){
        chkList.push(id);
        console.log(chkList);
    } else {
        var index = chkList.indexOf(id);
            if (index !== -1) {
            chkList.splice(index, 1);
        }
        console.log(chkList);
    }
    editChips();
}

function editChips() { 
    var chipEl = '';
    chkList.forEach(chip => {
        chipEl += '<div class="chip"> ' + chip +
            '<span class="closebtn" onclick="removeChip('+ chip +')">&times;</span></div>';
        
    });
    document.getElementById("selected-filters").innerHTML = chipEl;

}

function removeChip(id) {
    var index = chkList.indexOf(id);
    if (index !== -1) {
        chkList.splice(index, 1);
    }
}
    
function removeFilters() { 
    chkList = [];
    editChips();

}
    
