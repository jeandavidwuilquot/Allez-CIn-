
                                                                         /* MODALS */                         
                                               /*Gestion des POP UP*/

let elemNom = document.querySelector("#elemNom");
let elemPrenom = document.querySelector("#elemPrenom");
let elemMail = document.querySelector("#elemMail");
let elemSujet = document.querySelector("#elemSujet");
let elemMessage = document.querySelector("#elemMessage");



document.querySelector(".elemContact").addEventListener("click", () => {

    let name = document.querySelector("#nom").value;
    let prenom = document.querySelector("#prenom").value;
    let email = document.querySelector("#email").value;
    let sujet = document.querySelector("#sujet").value;
    let message = document.querySelector("#votreMessage").value;



    elemNom.value = name
    elemPrenom.value = prenom
    elemMail.value = email
    elemSujet.value = sujet
    elemMessage.value = message

$(elemContact).modal("toggle")
})

document.querySelector("#termine").addEventListener("click", () => {
    $(contactModal).modal("toggle")
})

document.querySelector("#compte1").addEventListener("click", () => {
    $(exampleModal).modal("toggle")
})


                                                   /*AGE CONSENT MODAL*/

let modal18 = document.querySelector(".areYou18")
let bodyAge = document.getElementsByTagName("body");

let checkAge =  () => {
    let date = new Date();
    let day = document.querySelector("#dob-day").value;
    let month = document.querySelector("#dob-month").value;
    let year = document.querySelector("#dob-year").value;
    let age = date.getFullYear() - year;
    if (month>date.getMonth()+1) {
        age = age -1;
    } else if (month == date.getMonth() +1  && day> date.getDate() ) {""
        age = age - 1
      
    }
    if (age>=18) {
        modal18.style.display="none";
        bodyAge[0].style.overflow="initial";
        
    } else {
        window.location = "https://www.imdb.com/"
    }
}

// 18 modal when refresh
if (performance.navigation.type == 1) {
    window.location = "index.html"
  } 

                                                                          /* BODY */ 

                                                          /*JUMBOTRON CAROUSEL */

///when page loads 

let JumboSlides = document.getElementsByClassName("mySlides");
let myToggle = document.getElementsByClassName("myToggle");
let myToggleArray = Array.from(myToggle)
let currentToggle = myToggle[0]


document.addEventListener("click", (event) => {

    currentToggle.classList.remove("jumboFirst")

    if (event.target.classList.contains("myToggle") && event.target != currentToggle) {
        
         for (i= 0 ; i < JumboSlides.length ; i++) {


            if (JumboSlides[i].classList.contains("jumboSlideOut") ) {
                JumboSlides[i].classList.remove("jumboSlideOut")
              

                
            }
            if (JumboSlides[i].classList.contains("jumboSlide") || currentToggle.classList.contains("jumboFirst1") ) {
                JumboSlides[i].classList.remove("jumboSlide");
                JumboSlides[i].classList.add("jumboSlideOut");
                currentToggle.classList.remove("jumboFirst1")
            }
            event.target.classList.add("jumboFirst")
            
        }
 
            JumboSlides[myToggleArray.indexOf(event.target)].classList.add("jumboSlide");
            currentToggle = event.target;
            currentToggle.classList.add("jumboFirst");
            JumboSlides[myToggleArray.indexOf(event.target)].style.display = "block";

    }  
    
    
    
})

let automaticToggle = 1;

setTimeout(() => {
    myToggle[0].classList.remove("jumboFirst1")
}, 3000)

/*Automatic sliding */

 setInterval( () => {
    let currentSlide = JumboSlides[automaticToggle];
    currentSlide.classList.remove("jumboSlideOut")
    currentSlide.classList.add("jumboFirst")
    currentSlide.classList.add("jumboSlide")
    if (automaticToggle != 0) {
        JumboSlides[automaticToggle-1].classList.add("jumboSlideOut")
        JumboSlides[automaticToggle-1].classList.remove("jumboFirst")
        JumboSlides[automaticToggle-1].classList.remove("jumboFirst")
    } else {
        JumboSlides[3].classList.add("jumboSlideOut")
       

    }
    
    automaticToggle ++;

    if (automaticToggle == 4) {
        automaticToggle = 0;
    }
}, 3000)




                                                                         /* API */

                                                    
                                                    
                                                    // Movie shop //

let imgShop= document.getElementsByClassName("imgContainerShop");
let imgShopArray = Array.from(imgShop);
let movieShopList = document.getElementsByClassName("movieShopList")
let shopTitles = movieShopList[0].querySelectorAll("h5");
let shopYear = movieShopList[0].querySelectorAll("p");
let shopVideo = document.getElementsByClassName("embed-responsive-16by9");
let trailerContent = document.getElementsByClassName("trailerContent");
let trailerTitle = trailerContent[0].querySelector("h3");
let trailerDetails = trailerContent[0].querySelectorAll("p");

    // Fetch for images //


fetch("https://api.themoviedb.org/3/discover/movie?api_key=02536721f8f81208bfc310ad86d06e91&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=2&with_original_language=en")
.then(resp => resp.json())
.then(data => {
        for (i=0; i<8; i++){
            let imageShop = imgShopArray[i].childNodes[1];
            imageShop.src= `http://image.tmdb.org/t/p/w154${data.results[i].poster_path}`
            imageShop.classList.add("imgShop");
            imageShop.id = data.results[i].id;
            shopTitles[i].innerHTML = data.results[i].title;
            shopYear[i].innerHTML = data.results[i].release_date.slice(0,4);
    }
// carousel shop movie 

let shopPrev = document.getElementById("shopPrev")
let shopNext = document.getElementById("shopNext")

shopNext.addEventListener("click", () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=02536721f8f81208bfc310ad86d06e91&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=2&with_original_language=en")
    .then(resp => resp.json())
    .then(data => {
        let count = 8
        for (let i=0; i<8; i++){
            let imageShop = imgShopArray[i].childNodes[1];
            imageShop.src= `http://image.tmdb.org/t/p/w154${data.results[count].poster_path}`
            imageShop.classList.add("imgShop");
            imageShop.id = data.results[count].id;
            shopTitles[i].innerHTML = data.results[count].title;
            shopYear[i].innerHTML = data.results[count].release_date.slice(0,4);
            count++;
         }
    })
})


shopPrev.addEventListener("click", () => {

    fetch("https://api.themoviedb.org/3/discover/movie?api_key=02536721f8f81208bfc310ad86d06e91&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=2&with_original_language=en")
    .then(resp => resp.json())
    .then(data => {
            for (i=0; i<8; i++){
                let imageShop = imgShopArray[i].childNodes[1];
                imageShop.src= `http://image.tmdb.org/t/p/w154${data.results[i].poster_path}`
                imageShop.classList.add("imgShop");
                imageShop.id = data.results[i].id;
                shopTitles[i].innerHTML = data.results[i].title;
                shopYear[i].innerHTML = data.results[i].release_date.slice(0,4);
        }
    })
})

    //fetch for first trailer //

    fetch(`https://api.themoviedb.org/3/movie/${imgShopArray[0].childNodes[1].id}?api_key=02536721f8f81208bfc310ad86d06e91&append_to_response=videos`)
    .then(resp => resp.json())
    .then(data2 => {

        shopVideo[0].innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${data2.videos.results[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
        trailerTitle.innerHTML = data.results[0].title;
        /*synopsis*/ 
        trailerDetails[0].innerHTML += data2.overview;
        /*date de sortie*/  
        trailerDetails[1].innerHTML = data2.release_date;
        /*genre*/ 
        let genres = "";
        data2.genres.forEach(elem => {
            genres += `${elem.name} | `
        })
        trailerDetails[2].innerHTML = genres;
        /*prix*/ 
        trailerDetails[3].innerHTML = `${Math.floor(Math.random()*7)+10}$`;
})

    // fetch for other trailers on click

    bodyAge[0].addEventListener("click", (event) => {
        if (event.target.classList.contains("imgShop")) {
               fetch(`https://api.themoviedb.org/3/movie/${event.target.id}?api_key=02536721f8f81208bfc310ad86d06e91&append_to_response=videos`)
                 .then(resp => resp.json())
                 .then(data2 => {
                    shopVideo[0].innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${data2.videos.results[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
                    
                    trailerTitle.innerHTML = data2.title;
                   
                    trailerDetails[0].innerHTML = data2.overview;
                    trailerDetails[1].innerHTML = data2.release_date;
                    let genres="";
                    data2.genres.forEach(elem => {
                        genres += `${elem.name} | `
                    })
                    trailerDetails[2].innerHTML = genres;
                  
                    trailerDetails[3].innerHTML = `${Math.floor(Math.random()*7)+10}$`;
                 })
     
        }
    })
})

                                      /// FILMS ROW ///  


let rowfilm = document.getElementsByClassName("cardsFilms");
let rowFilmTitle = rowfilm[0].querySelectorAll("h5");
let rowFilmImg = rowfilm[0].querySelectorAll("img");
let rowFilmYearGenre = rowfilm[0].querySelectorAll("small");
let rowFilmYear = []
let rowFilmGenre = []
for (i=0 ; i<10 ; i++) {
    if (i%2 == 0) {
        rowFilmYear.push(rowFilmYearGenre[i])
    } else {
        rowFilmGenre.push(rowFilmYearGenre[i])
    }
}



fetch(`https://api.themoviedb.org/3/discover/movie?api_key=fbcb3aa88a7275368c20ac709fa44025&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2015-2019`)
.then(resp => resp.json())
.then(data => {
    for (let i = 0 ; i<5 ; i++) {
        rowFilmImg[i].src= `http://image.tmdb.org/t/p/w92${data.results[i].poster_path}`
        rowFilmTitle[i].innerHTML = data.results[i].title;
        rowFilmYear[i].innerHTML = data.results[i].release_date.slice(0,4);
        
    // fetch genre with ID of previous API
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=fbcb3aa88a7275368c20ac709fa44025&language=en-US")
        .then(resp => resp.json())
        .then(data2 => {
            data2.genres.forEach(elem => {
                if (elem.id == data.results[i].genre_ids[0]) {
                    rowFilmGenre[i].innerHTML = elem.name;
                }
            })
        }) 
    }
})

                            // modals Films (pas besoin mais je laisse au cas où)

 $("#firstBtn").click(function(){
     $("#firstMovieModal").modal('toggle');
 });


                                                 /*FEATURED FILMS */

/* info DOM variables */
let cardsFeatFilms = document.getElementsByClassName("cardsFeatFilms");
let featMovieImg = []
let featMovieTitle = []
let featMovieYear = []

// to inject API into all 3 rows //
for (let i = 0 ; i<cardsFeatFilms.length ; i++) {
let cardsFeatFilmImg = Array.from(cardsFeatFilms[i].querySelectorAll("img"))
let cardsFeatFilmH5= Array.from(cardsFeatFilms[i].querySelectorAll("h5"))
let cardsFeatFilmSmall = Array.from(cardsFeatFilms[i].querySelectorAll("small"))
featMovieImg = featMovieImg.concat(cardsFeatFilmImg);
featMovieTitle = featMovieTitle.concat(cardsFeatFilmH5);
featMovieYear = featMovieYear.concat(cardsFeatFilmSmall);
}

for (let i=1; i<cardsFeatFilms.length; i++) {
    cardsFeatFilms[i].style.display = "none";
}


/* menu DOM variables */

let menuFeatMovies = document.getElementsByClassName("menuFeatMovies");
let filmMenuGenres = menuFeatMovies[0].querySelectorAll(".nav-link")


                                          /* all genres */
let allFeatured = (apilink = "") => { 
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=fbcb3aa88a7275368c20ac709fa44025&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2${apilink}`)
    .then(resp => resp.json())
    .then(data => {
        for (let i=0; i<18; i++) {
            featMovieImg[i].src = `http://image.tmdb.org/t/p/w92${data.results[i].poster_path}`;
            featMovieTitle[i].innerHTML = data.results[i].title;
            featMovieYear[i].innerHTML = data.results[i].release_date.slice(0,4);
        }
        menuFeatMovies[0].addEventListener("click", (event) => {
            filmMenuGenres[0].classList.remove("bg-danger", "text-white")
            if (event.target.classList.contains("nav-link")) { 
                event.target.style.backgroundColor = "#dc3545";
                event.target.style.color = "white"
                for (let i=0; i<6; i++) {
                    if (filmMenuGenres[i] != event.target) {
                        filmMenuGenres[i].style.backgroundColor = "white";
                        filmMenuGenres[i].style.color = "black";
                    }
                }
            }
        })  
    })
}

allFeatured();

                                     /*To switch genres */

menuFeatMovies[0].addEventListener("click", (event) => {
    if (event.target.classList.contains("nav-link")) {
        let genres = event.target.innerHTML;
        switch(genres) {
            case "Action":
                allFeatured(`&with_genres=28`);
                break;
            case "Comédies":
                allFeatured(`&with_genres=35`);
                break;
            case "Historiques":
                allFeatured(`&with_genres=36`);
                    break;
            case "Horreurs":
                allFeatured(`&with_genres=27`);
                    break;
            case "Romantiques":
                allFeatured(`&with_genres=10749`);
                    break;
            default:
                allFeatured();
        }
    }     
})  

                                              /*MORE/LESS MOVIES*/

let moreMovieBtn = document.getElementsByClassName("movieInfo")[0]
let moreLessMovie = "more"
moreMovieBtn.addEventListener("click", () => {

    if (moreLessMovie == "more") {
        for (let i=1; i<cardsFeatFilms.length; i++) {
            cardsFeatFilms[i].style.display = "block";
        }
        moreMovieBtn.getElementsByTagName("button")[0].innerHTML = "moins de films";
        moreLessMovie = "less"
    } else {
        for (let i=1; i<cardsFeatFilms.length; i++) {
            cardsFeatFilms[i].style.display = "none";
        }
        moreMovieBtn.getElementsByTagName("button")[0].innerHTML = "plus de films";
        moreLessMovie = "more"
    }
    
})
                                            /*Featured Series */


/*  info DOM variables */
let cardsFeatSeries = document.getElementsByClassName("cardsSeries")
let featSeriesImg= []  
let featSeriesTitle = []
let featSeriesYear = []

/* Genre DOM variables */
let menuFeatSeries = document.getElementsByClassName("menuFeatSeries")[0];
let seriesMenuGenres = menuFeatSeries.querySelectorAll(".nav-link")


// to inject API into all 3 rows //
for (let i = 0 ; i<cardsFeatSeries.length ; i++) {
let cardsFeatSeriesImg = Array.from(cardsFeatSeries[i].querySelectorAll("img"))
let cardsFeatSeriesH5= Array.from(cardsFeatSeries[i].querySelectorAll("h5"))
let cardsFeatSeriesSmall = Array.from(cardsFeatSeries[i].querySelectorAll("small"))
featSeriesImg = featSeriesImg.concat(cardsFeatSeriesImg);
featSeriesTitle = featSeriesTitle.concat(cardsFeatSeriesH5);
featSeriesYear = featSeriesYear.concat(cardsFeatSeriesSmall);
}

for (let i=1; i<cardsFeatSeries.length; i++) {
    cardsFeatSeries[i].style.display = "none";
}


                                          /* all genres */

let allFeatSeries = (apilink="") => {
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=fbcb3aa88a7275368c20ac709fa44025&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York${apilink}&include_null_first_air_dates=false`)                                          
    .then(resp => resp.json())
    .then(data => {
        for (i=0; i<18; i++) {
            featSeriesImg[i].src = `http://image.tmdb.org/t/p/w92${data.results[i].poster_path}`;
            featSeriesTitle[i].innerHTML = data.results[i].name;
            featSeriesYear[i].innerHTML = data.results[i].first_air_date.slice(0,4);
        }
        menuFeatSeries.addEventListener("click", (event) => {
            seriesMenuGenres[0].classList.remove("bg-danger", "text-white")
            if (event.target.classList.contains("nav-link")) { 
                event.target.style.backgroundColor = "#dc3545";
                event.target.style.color = "white"
                for (let i=0 ; i<6; i++) {
                    if (seriesMenuGenres[i] != event.target) {
                        seriesMenuGenres[i].style.backgroundColor = "white";
                        seriesMenuGenres[i].style.color = "black";
                    }
                }
            }
        })  
    })
}

allFeatSeries();

                                      /*To switch genres */

menuFeatSeries.addEventListener("click", (event) => {
    if (event.target.classList.contains("nav-link")) {
        let genres = event.target.innerHTML;
        switch(genres) {
            case "Action":
                allFeatSeries(`&with_genres=28`);
                break;
            case "Comédies":
                allFeatSeries(`&with_genres=35`);
                break;
            case "Historiques":
                allFeatSeries(`&with_genres=36`);
                    break;
            case "Horreurs":
                allFeatSeries(`&with_genres=27`);
                    break;
            case "Romantiques":
                allFeatSeries(`&with_genres=10749`);
                    break;
            default:
                allFeatSeries();
        }
    }     
})

/*MORE/LESS SERIES*/

let moreSeriesBtn = document.getElementsByClassName("seriesInfo")[0]
let moreLessSeries = "more"
moreSeriesBtn.addEventListener("click", () => {

    if (moreLessSeries == "more") {
        for (let i=1; i<cardsFeatSeries.length; i++) {
            cardsFeatSeries[i].style.display = "block";
        }
        moreSeriesBtn.getElementsByTagName("button")[0].innerHTML = "moins de series";
        moreLessSeries = "less"
    } else {
        for (let i=1; i<cardsFeatSeries.length; i++) {
            cardsFeatSeries[i].style.display = "none";
        }
        moreSeriesBtn.getElementsByTagName("button")[0].innerHTML = "plus de series";
        moreLessSeries = "more"
    }
    
})
                                              

/*                                             CREATION DU BOUTON*/
let btn2=document.createElement('A');
btn2.setAttribute("id","fleche")
btn2.setAttribute("href","#up")
document.body.appendChild(btn2);
let elem=document.createElement("div")
btn2.appendChild(elem)
elem.innerHTML = "<i class='fas fa-2x fa-arrow-up'></i>"
elem.setAttribute("id","buttonUp")
let buttonUp=document.getElementById("buttonUp")


/*                                       DISPARITION DU BOUTON */
document.addEventListener("DOMContentLoaded", () => {
    window.onscroll = (event) => {
        if (window.pageYOffset >= 800) {
            buttonUp.style.display = "inline";
        } else {
            buttonUp.style.display = "none";
        };
    };
}) 