// active page header link color change script

// Get all the <a> elements inside the navigation


const laptopnavLinks = document.querySelectorAll("#control a");

function pagecall(id, ind) {

    const xyz = document.getElementById(id);

    xyz.addEventListener("mouseenter", function () {
        laptopnavLinks[ind].style.color = "yellow";
        

        // console.log("hii");
    });
    xyz.addEventListener("mouseleave", function () {
        laptopnavLinks[ind].style.color = "";
        

        // console.log("hii");
    });


}

pagecall("home", 0);
pagecall("about", 1);
pagecall("edu", 2);
pagecall("skill", 3);
pagecall("project", 4);
pagecall("contact", 5);