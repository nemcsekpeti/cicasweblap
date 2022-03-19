window.addEventListener("load", init);
var kepek = 
[
    {
        cim: "01-es kép",
        eleresiut:"./kepek/01.jpg",
        leírás:"Ez az első cicás kép",
    }
    ,
    {
        cim: "02-es kép",
        eleresiut:"./kepek/02.jpg",
        leírás:"Ez a második cicás kép",
    }
    ,
    {
        cim: "03-as kép",
        eleresiut:"./kepek/03.jpg",
        leírás:"Ez a harmadik cicás kép",
    }
    ,
    {
        cim: "04-es kép",
        eleresiut:"./kepek/04.jpg",
        leírás:"Ez a negyedik cicás kép",
    }
    ,
    {
        cim: "05-ös kép",
        eleresiut:"./kepek/05.jpg",
        leírás:"Ez az ötödik cicás kép",
    }
    ,
    {
        cim: "06-os kép",
        eleresiut:"./kepek/06.jpg",
        leírás:"Ez a hatodik cicás kép",
    }
]

var aktualiskepIndex = 0;

function ID(elem)
{
    return document.getElementById(elem);
}

function CLASS(elem)
{
    return document.getElementsByClassName(elem);
}

function $(elem)
{
    return document.querySelectorAll(elem);
}

function init()
{
    kiirKepek();
    ID("galeria").style.backgroundColor="wheat";
    for (let index = 0; index < kepek.length; index++) 
    {
    /*
        CLASS("kepek")[index].style.border='12px solid';
        CLASS("kepek")[index].style.padding='10px';    
        $("#galeria div img")[index].style.backgroundColor ="grey";
    */
    $("#galeria div")[index].className='divekformazasa';
    $("#galeria div img")[index].addEventListener('click', kattintas);
    }
    $("#bal")[0].addEventListener('click', bal)
    $("#jobb")[0].addEventListener('click', jobb)
}

function kattintas(event)
{
    console.log(event.target.id);
    aktualiskepIndex = event.target.id;
    console.log(kepek[aktualiskepIndex])
    kepMegjelenit();
}

function kepMegjelenit()
{
    var txt="<img src='"+kepek[aktualiskepIndex].eleresiut + "' alt=''>";
    ID('nagykep').innerHTML = txt;
}

function bal()
{
    aktualiskepIndex--;
    if(aktualiskepIndex<0)
    {
        aktualiskepIndex=kepek.length-1;
    }
    kepMegjelenit();
}

function jobb()
{
    aktualiskepIndex++;
    if(aktualiskepIndex>kepek.length-1)
    {
        aktualiskepIndex=0;
    }
    kepMegjelenit();
}

function kiirKepek()
{
    var txt = " ";
    for (let i = 0; i < kepek.length; i++) {
        txt = txt + "<div>" + "<h3>"+ kepek[i].cim +"</h3>" + "<img id='" + i + "'src='"+ kepek[i].eleresiut+ "' class='kepek' alt='cicás képek'/>"+
        "<p>"+kepek[i].leírás+"</p> </div>"
    }
    ID("galeria").innerHTML = txt;
}
