var options = [
    'Novo', 'Šminka', 'Parfemi', 'Nega tela', 'Nega lica', 'Muškarci', 'Deca'  
]
var text = "";
var i;
if (document.getElementById("navigation").innerHTML) { 

    for (i = 0; i < options.length; i++) {
        text +='<li class="nav-item nav-li">' + options[i] + '</li>'
    }
    document.getElementById("navigation").innerHTML = text;
}