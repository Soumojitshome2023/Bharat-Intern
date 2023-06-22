function hamtoggle() {
    // console.log("Okay");

    let cntrl = document.getElementById("mobileopen")
    let iniham = document.getElementById("iniham");
    let finham = document.getElementById("finham");

    if (cntrl.style.display != "block") {
        cntrl.style.display = "block";
        iniham.style.display = "none";
        finham.style.display = "block";
    }
    else {
        cntrl.style.display = "";
        iniham.style.display = "";
        finham.style.display = "";

    }
}


// new add 

function hamclose() {
    let cntrl = document.getElementById("mobileopen")
    let iniham = document.getElementById("iniham");
    let finham = document.getElementById("finham");


    cntrl.style.display = "";
    iniham.style.display = "";
    finham.style.display = "";
}