const TMDB_API_KEY = "3a88686a5740ae02c9bb094950cbed22";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/";
const IMG_SIZE = "w500";

// APPEND BOXES WITH POPULAR MOVIES
function generatePopularMovieBoxes(movies) {
    let fourthContainer = document.querySelector(".fourth-box-container");

    movies.forEach((movie) => {
        let fourthBox = document.createElement("div");
        fourthBox.classList.add("fourth-box");

        fourthBox.addEventListener("click", function () {
            window.location.href = `about.html?movieId=${movie.id}`;
        });

        let fourthBoxImg = document.createElement("img");
        fourthBoxImg.src = `${IMG_BASE_URL}${IMG_SIZE}${movie.poster_path}`;

        let fourthBoxTextDiv = document.createElement("div");
        fourthBoxTextDiv.classList.add("fourth-box-text-div");

        let fourthBoxRatingDiv = document.createElement("div");
        fourthBoxRatingDiv.classList.add("fourth-box-rating-container");

        let fourthBoxStarIcon = document.createElement("i");
        fourthBoxStarIcon.classList.add("fa-solid", "fa-star");
        fourthBoxStarIcon.style.color = "#FFD43B";

        let fourthBoxRating = document.createElement("p");
        fourthBoxRating.textContent = movie.vote_average;
        fourthBoxRating.classList.add("fourth-box-rating");

        let fourthBoxTitle = document.createElement("h2");
        fourthBoxTitle.textContent = movie.original_title;

        fourthBoxRatingDiv.append(fourthBoxStarIcon);
        fourthBoxRatingDiv.append(fourthBoxRating);
        fourthBoxTextDiv.append(fourthBoxRatingDiv);
        fourthBoxTextDiv.append(fourthBoxTitle);
        fourthBox.append(fourthBoxImg);
        fourthBox.append(fourthBoxTextDiv);

        fourthContainer.append(fourthBox);
    });
}

// APPEND BOXES WITH TOP RATED MOVIES
function generateTopRatedMoviesTMDB(movies) {
    let tpMain = document.querySelector(".tp-main");

    movies.forEach((movie, index) => {
        let tpBox = document.createElement("div");
        tpBox.classList.add("tp-box");

        tpBox.addEventListener("click", function () {
            window.location.href = `about.html?movieId=${movie.id}`;
        });

        let tpBoxImg = document.createElement("img");
        tpBoxImg.src = `${IMG_BASE_URL}${IMG_SIZE}${movie.poster_path}`;
        tpBoxImg.alt = movie.original_title;

        let tpBoxTextDiv = document.createElement("div");
        tpBoxTextDiv.classList.add("tp-box-text-div");

        let tpBoxRatingDiv = document.createElement("div");
        tpBoxRatingDiv.classList.add("tp-box-rating-container");

        let tpBoxStarIcon = document.createElement("i");
        tpBoxStarIcon.classList.add("fa-solid", "fa-star");

        let tpBoxRating = document.createElement("p");
        tpBoxRating.textContent = movie.vote_average;
        tpBoxRating.classList.add("tp-box-rating");

        let tpBoxTitle = document.createElement("h2");
        tpBoxTitle.textContent = movie.original_title;

        tpBoxRatingDiv.append(tpBoxStarIcon, tpBoxRating);
        tpBoxTextDiv.append(tpBoxRatingDiv, tpBoxTitle);
        tpBox.append(tpBoxImg, tpBoxTextDiv);

        tpMain.append(tpBox);
    });
}

// FETCH MOVIE DETAILS FOR ABOUT PAGE
function displayMovieDetails(movie) {
    let movieDetailsContainer = document.querySelector(".about-main");

    let moviePosterDiv = movieDetailsContainer.querySelector(".about-pic-div");
    let moviePoster = moviePosterDiv.querySelector("img");
    moviePoster.src = `${IMG_BASE_URL}${IMG_SIZE}${movie.poster_path}`;

    let descriptionDiv = movieDetailsContainer.querySelector(".descr-div");

    let movieTitle = descriptionDiv.querySelector(".about-movie-title");
    movieTitle.textContent = movie.original_title;
    let movieRating = descriptionDiv.querySelector(".about-movie-rating");
    movieRating.innerHTML = `Rating: ${movie.vote_average}/10 <span><i class="fa-solid fa-star"></i></span>`;
    let movieRuntime = descriptionDiv.querySelector(".about-movie-runtime");
    movieRuntime.textContent = `Runtime: ${movie.runtime} min`;
    let movieRdate = descriptionDiv.querySelector(".about-movie-rdate");
    movieRdate.textContent = `Release Date: ${movie.release_date}`;
    let movieGenre = descriptionDiv.querySelector(".about-movie-genre");
    movieGenre.textContent = `Genres: ${movie.genres
        .map((genre) => genre.name)
        .join(", ")}`;
    let movieoverview = descriptionDiv.querySelector(".overview");
    movieoverview.innerHTML = `Overview: <br/>${movie.overview}`;
}
function fetchMovieById(movieId) {
    let TMDB_URL = `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`;
    fetch(TMDB_URL, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((movie) => {
            displayMovieDetails(movie);
        });
}

// Fetch movies by search
function displaySearchResults(movies) {
    let searchMain = document.querySelector(".search-main");

    movies.forEach((movie, index) => {
        let searchBox = document.createElement("div");
        searchBox.classList.add("search-box");

        searchBox.addEventListener("click", function () {
            window.location.href = `about.html?movieId=${movie.id}`;
        });

        let searchBoxImg = document.createElement("img");
        searchBoxImg.src = `${IMG_BASE_URL}${IMG_SIZE}${movie.poster_path}`;
        searchBoxImg.alt = movie.original_title;

        let searchBoxTextDiv = document.createElement("div");
        searchBoxTextDiv.classList.add("search-box-text-div");

        let searchBoxRatingDiv = document.createElement("div");
        searchBoxRatingDiv.classList.add("search-box-rating-container");

        let searchBoxStarIcon = document.createElement("i");
        searchBoxStarIcon.classList.add("fa-solid", "fa-star");

        let searchBoxRating = document.createElement("p");
        searchBoxRating.textContent = movie.vote_average;
        searchBoxRating.classList.add("search-box-rating");

        let searchBoxTitle = document.createElement("h2");
        searchBoxTitle.textContent = movie.original_title;

        searchBoxRatingDiv.append(searchBoxStarIcon, searchBoxRating);
        searchBoxTextDiv.append(searchBoxRatingDiv, searchBoxTitle);
        searchBox.append(searchBoxImg, searchBoxTextDiv);

        searchMain.append(searchBox);
    });
}
let currentSearchPage = 1;
function fetchMovieByQuery(query, page = 1) {
    let TMDB_URL = `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
        query
    )}&language=en-US&page=${page}`;
    fetch(TMDB_URL, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((movie) => {
            if (movie.results.length > 0) {
                displaySearchResults(movie.results);
            } else {
                console.log("no search found");
            }
        });
}
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("query");
if (query) {
    fetchMovieByQuery(query, currentSearchPage);
}
// LOAD MORE BUTTON FUNCTIONALITY
let loadMoreButtonSearch = document.getElementById("searchLoadMoreButton");
if (loadMoreButtonSearch) {
    loadMoreButtonSearch.addEventListener("click", function () {
        currentSearchPage++; 
        fetchMovieByQuery(query, currentSearchPage); 
    });
}


// GET POPULAR MOVIES DATA
function fetchPopularMoviesTMDB() {
    let TMDB_URL = `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;
    fetch(TMDB_URL, {
        method: "GET",
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (responseJson) {
            let movies = responseJson.results;
            generatePopularMovieBoxes(movies.slice(0, 10));
        });
}

// GET TOP RATED MOVIES DATA
let currentPage = 1;
function fetchTopRatedMoviesTMDB(page) {
    let TMDB_URL = `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`;
    fetch(TMDB_URL, {
        method: "GET",
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (responseJson) {
            let movies = responseJson.results;
            generateTopRatedMoviesTMDB(movies);
        });
}

// LOAD MORE BUTTON FUNCTIONALITY
let loadMoreButton = document.getElementById("loadMoreButton");
if (loadMoreButton) {
    loadMoreButton.addEventListener("click", function () {
        currentPage++;
        fetchTopRatedMoviesTMDB(currentPage);
    });
}

// SHOW/HIDE PASSWORD FUNCTIONALITY
let passwordInput = document.querySelector(".password-input");
let showPasswordButton = document.querySelector(".show-password-btn");
if (passwordInput && showPasswordButton) {
    showPasswordButton.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            showPasswordButton.textContent = "hide password";
        } else {
            passwordInput.type = "password";
            showPasswordButton.textContent = "show password";
        }
    });
}

// FORM VALIDATION
let signInForm = document.getElementById("signin-form");
if (signInForm) {
    signInForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let errors = {};

        let signInEmail = document.querySelector(".email-input");
        if (signInEmail.value === "") {
            errors.email = "Email field can not be empty";
        }
        let signInPass = document.querySelector(".password-input");
        if (signInPass.value === "") {
            errors.pass = "Password field can not be empty";
        }

        signInForm.querySelectorAll(".error-text").forEach((el) => {
            el.textContent = " ";
        });

        for (let item in errors) {
            let pErrorElement = document.getElementById("error-" + item);
            if (pErrorElement) {
                pErrorElement.textContent = errors[item];
            }
        }
        if (Object.keys(errors).length === 0) {
            signInForm.submit();
        }
    });
}

// WHEN PAGE LOADS
document.addEventListener("DOMContentLoaded", function () {
    // burger functionality
    let burgerDiv = document.querySelector(".burger-div");
    if (burgerDiv) {
        burgerDiv.addEventListener("click", function () {
            document.querySelector(".off-screen-menu").classList.toggle("open");
        });
    }

    // fetch movies if containers exist to avoid errors
    if (document.querySelector(".fourth-box-container")) {
        fetchPopularMoviesTMDB();
    }
    if (document.querySelector(".tp-main")) {
        fetchTopRatedMoviesTMDB(currentPage);
    }

    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get("movieId");

    if (movieId) {
        fetchMovieById(movieId);
    }
});

// Implement search functionality
document.addEventListener("DOMContentLoaded", () => {
    function handleSearch(inputSelector, ButtonSelector) {
        const input = document.querySelector(inputSelector);
        const button = document.querySelector(ButtonSelector);

        if (input && button) {
            button.addEventListener("click", () => {
                const query = input.value.trim();
                if (query) {
                    window.location.href = `search.html?query=${encodeURIComponent(
                        query
                    )}`;
                }
            });
            input.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    event.preventDefault();
                    button.click();
                }
            });
        }
    }
    handleSearch(".search-input", ".search-button");
    handleSearch(".os-search-input", ".os-search-button");


    // Cookies notification
    const cookieBanner = document.getElementById("cookie-notification");
    const acceptButton = document.getElementById("accept-cookie");
    if (!Cookies.get("cookiesAccepted")) {
        cookieBanner.style.display = "block";
    }
    acceptButton.addEventListener("click", function () {
        Cookies.set("cookiesAccepted", "true", { expires: 30, path: "/" });
        cookieBanner.style.display = "none";
    });
});
