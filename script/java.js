

// const titlePage = document.getElementsByTagName('title');  // Utilisé pour savoir dans quelle page nous sommes
// console.log(titlePage.item(0).innerHTML);



// //********************  Profil contenu ****************************//


// let profil_btn = document.getElementById("profil-btn");



// function myFunction() {

//     document.getElementById("profil-contenu").classList.toggle("montre");

// }

// profil_btn.onclick = function () { myFunction() };

// window.onclick = function (event) {
//     if (!event.target.matches('.profil-btn') && !event.target.matches('.profil-downarrow')) {
//         var dropdowns = document.getElementsByClassName("profil-contenu");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('montre')) {
//                 openDropdown.classList.remove('montre');
//             }
//         }
//     }
// }



// //******************** Fermature de la bar de recherche  ****************************//


// // window.onclick = function (event) {
//     // if (!event.target.matches('.sug_pro') && !event.target.matches('.searchresult')) {
//         // var sug = document.getElementsByClassName("searchresult");

//         // sug.style.display ="none";
//         // console.log(1);

// //     }


// // }






// //******************** Slider dans la page d'accueil  ****************************//


// if (titlePage.item(0).innerHTML === 'Wika') {


//     var swiper = new Swiper(".mySwiper", {
//         spaceBetween: 30,
//         centeredSlides: true,
//         autoplay: {
//             delay: 2500,
//             disableOnInteraction: false,
//         },
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",

//         },
//     });
// };



// //******************** Paginattion pour shop page ****************************//




// if (titlePage.item(0).innerHTML === "Wika / Catalogue") {

//     var pageActuelle = 1;
//     var proAffi = 10; // Nombre(max) des produits qui seront affichés
//     var produits = document.querySelectorAll('.product');// toute les produits de shop page
//     var produitsContainer = document.getElementById('produits-list'); // le conteneur qui contient les produits qui seront affichés

//     // Calculer le nombre de pages nécessaires pour afficher tous les produits

//     function numPages() {
//         return Math.ceil(produits.length / proAffi); // 4 pages
//     };

//     // Arrows control selon la page actuelle

//     function prevProduits() {
//         if (pageActuelle > 1) {
//             pageActuelle--;
//             changePage(pageActuelle);
//         }
//     }

//     function nextProduits() {
//         if (pageActuelle < numPages()) {
//             pageActuelle++;
//             changePage(pageActuelle);
//         }
//     }

//     // Changment de produits

//     function changePage(page) {
//         var next = document.getElementById("next");
//         var prev = document.getElementById("prev");
//         var produitsContainer = document.getElementById('produits-list');
//         var page_span = document.getElementById("page");

//         produitsContainer.innerHTML = ""; // vider le conteneur sinon les prev produits vont rester lorsque nous afficherons plus de produits

//         // afficher 10 produits à partir de l'index 0 

//         for (var i = (page - 1) * proAffi; i < (page * proAffi) && i < produits.length; i++) {
//             produitsContainer.append(produits[i]);
//         }
//         page_span.innerHTML = page + "/" + numPages();

//         if (page == 1) {
//             prev.style.opacity = '0.5';
//             prev.style.cursor = 'no-drop';
//         } else {
//             prev.style.opacity = '1';
//             prev.style.cursor = 'auto';

//         }

//         if (page == numPages()) {
//             next.style.opacity = '0.5';
//             next.style.cursor = 'pointer';
//         } else {
//             next.style.opacity = '1';
//             next.style.cursor = 'pointer';
//         }
//     }

//     // Affichant les 10 premiers produits
//     window.onload = function () {
//         changePage(1);
//     };
//     console.log(titlePage.item(0).innerHTML);
// };



// // Live search using ajax

// $(document).ready(function () {

//     $('.search-input').keyup(function () {
//         $('.searchresult').html('');
//         var input_user = $(this).val();

//         if (input_user.length > 0)

//             $.ajax({
//                 type: "GET",
//                 url: "search.php",
//                 data: "input=" + encodeURIComponent(input_user),
//                 success: function (reponse) { /// la data que etais returné de search.php
//                     if (reponse.length > 0) {
//                         $('.searchresult').append(reponse);

//                     // }else{
//                     //     $('.searchresult').append("Pas de suggestions");

                        
//                     }
//                 }
//             })
//     })

// }


// );


// // 

// $(document).ready(function(){
//     $(".ajouter-form").submit(function(e){

//         e.preventDefault()

//         $.ajax({
            
//             url:'ajouter.php',
//             method:'POST',
//             data:$(this).serialize(),
//             success: function(reponse){
//                 error = 'Error'
//                 if(reponse == 'header("location:index.php")'){
//                     console.log(reponse);
  
//                 }else{
//                     $('.span_carte').html(reponse);
   
//                 }
//             }
           
//         })


//     })





// })






