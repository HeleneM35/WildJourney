function pasDeVoyage() {
    const message = "Je n'ai pas encore voyagé à cette période... Désolé!!"
    alert(message);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("paddingnav").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("paddingnav").style.marginLeft = "0";
}


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// $(document).ready(function() {
//   $("[list='ccList']")
// });

// function changePage() {
//     window.location = $("a").attr("href")
// };

function catch_link() {
    var target = document.getElementById("search").value;
    var T_link = ["L'amazonie en pirogue", "articleAmazonie.html", "Destination Amérique du Sud Amazonie", "destinationAmazonie.html", "Bali en VTC", "articleBali.html", "Destination Asie Bali", "destinationBali.html", "Le Japon en train magnétique", "articleJapon.html", "Destination Asie Japon", "destinationJapon.html", "La Croatie en catamaran", "articleCroatie.html", "Destination Europe Croatie", "destinationCroatie.html", "Inspirations Culture", "inspiCulture.html", "Inspirations Gastronomie", "inspiGastronomie.html", "Inspirations Nature", "inspiNature.html", "Inspirations Navigation", "inspiNavigation.html", "Inspirations Rencontres", "inspiRencontres.html", "Inspirations Sport", "inspiSport.html", "Avril", "avril.html", "Mai", "mai.html", "Juin", "juin.html", "Juillet", "juillet.html", "Août", "aout.html", "Septembre", "septembre.html", "Octobre", "octobre.html"];
    for (var i = 0; i < Object.keys(T_link).length; i = i + 2) {
        if (target == T_link[i]) {
            window.location = T_link[i + 1];
        }
    }
}