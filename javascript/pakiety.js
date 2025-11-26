function Show(){
    document.getElementById("nav").classList.add("open");
    document.getElementById("header-tekst").classList.add("open2");
    document.getElementById("close").style.display="flex";
}
function Hide(){
    document.getElementById("nav").classList.remove("open");
    document.getElementById("header-tekst").classList.remove("open2");
    document.getElementById("close").style.display="none";
}