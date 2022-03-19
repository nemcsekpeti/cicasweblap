window.addEventListener("load", init);
kepek = [
    {
        cim: "01-es kép",
        eleresiut:"./kepek/01.jpg",
        leírás:"Ez a első cicás kép",
    },
    {
        cim: "02-es kép",
        eleresiut:"./kepek/02.jpg",
        leírás:"Ez a második cicás kép",
    },
    {
        cim: "03-es kép",
        eleresiut:"./kepek/03.jpg",
        leírás:"Ez a harmadik cicás kép",
    },
    {
        cim: "04-es kép",
        eleresiut:"./kepek/04.jpg",
        leírás:"Ez a negyedik cicás kép",
    },
    {
        cim: "05-es kép",
        eleresiut:"./kepek/05.jpg",
        leírás:"Ez a ötödik cicás kép",
    },
    {
        cim: "06-es kép",
        eleresiut:"./kepek/06.jpg",
        leírás:"Ez a hatodik cicás kép",
    },
]
function ID(elem){
    return document.getElementById(elem);
}
function init(){
    kiirKepek()
}
function kiirKepek(){
    var txt = " ";
    for (let i = 0; i < kepek.length; i++) {
        txt = txt + "<div>" + "<h3>"+ kepek[i].cim +"</h3>" + "<img src='"+ kepek[i].eleresiut+ "' class='kepek' alt='cicás képek'/>"+
        "<p>"+kepek[i].leírás+"</p> </div>"
    }
    ID("galeria").innerHTML = txt;
}