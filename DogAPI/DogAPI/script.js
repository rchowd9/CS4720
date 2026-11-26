let slideShowTimer = null;
let images = [];
let currentIndex = 0;

const searchButton = document.getElementById('search-button');
const breedInput = document.getElementById('breed-input');
const container = document.getElementById('carousel-container');
const breedDisplayed = document.getElementById('breed-displayed');
const errorMessage = document.getElementById('error-message');

const breedSearchForm = document.getElementById('breedSearch-form');

breedSearchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameOfBreed = breedInput.value.trim().toLowerCase();

    if (!nameOfBreed)
    {
        breedInput.classList.add('invalid');
        return;
    }

    else
    {
        breedInput.classList.remove('invalid');

    }

    resetApp();

    fetchDogImages(nameOfBreed);
});

function fetchDogImages(breedName) 
{
    const xhr = new XMLHttpRequest();
    const apiurl = `https://dog.ceo/api/breed/${breedName}/images`;

    xhr.onreadystatechange = function() 
    {
        if (xhr.readyState === 4)
        {
            if (xhr.status === 200)
            {
                const response = JSON.parse(xhr.responseText);
                images = response.message;
            }

            if (images.length > 0)
            {
                startingSlideshow(breedName);
            }
            else
            {
                handlingErrors();
            }
        }
    };

    xhr.open('GET', apiurl, true);
    xhr.send();
}


function startingSlideshow(breedName)
{
    breedDisplayed.textContent = breedName.toUpperCase();

    const imageElement = document.createElement('img');

    imageElement.src = images[0];
    container.appendChild(imageElement);

    currentIndex = 0;

    slideShowTimer = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];

    }, 3000);

}

function handlingErrors(error)
{
    errorMessage.textContent = "Breed not found!";

    setTimeout (() => {
        errorMessage.textContent = "";
    }, 4000);
}


function resetApp()
{
    if (slideShowTimer)
    {
        clearInterval(slideShowTimer);
    }

    container.innerHTML = "";
    breedDisplayed.textContent = "";
    images = [];
    currentIndex = 0;
}