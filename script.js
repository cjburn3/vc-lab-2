document.getElementById("myBtn").addEventListener("click", upperCase);

function upperCase() {
    let x = document.getElementById("myBtn").innerHTML;
    document.getElementById("myBtn").innerHTML =x.toUpperCase() ;
}


