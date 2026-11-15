import './style.css'

const API_URL = "https://api.thedogapi.com/v1";
const API_KEY = import.meta.env.VITE_DOG_API_KEY;

// 1. Get all dog breeds from the API
async function getBreeds() {
    const container = document.querySelector("#breeds-container");

    container.textContent = "Loading dog breeds...";

    try {
        const response = await fetch(`${API_URL}/breeds`, {
            headers: {
                "x-api-key": API_KEY
            }
        });

        if (!response.ok) {
            throw new Error("Could not fetch dog breeds");
        }

        const breeds = await response.json();

        displayBreeds(breeds);

    } catch (error) {
        console.error(error);
        container.textContent = "Unable to load dog breeds.";
    }
}

// 2. Display all breeds on the page
function displayBreeds(breeds) {
    const container = document.querySelector("#breeds-container");

    container.replaceChildren();

    breeds.forEach(function(breed) {

        const card = document.createElement("article");
        card.classList.add("breed-card");

        const image = document.createElement("img");
        image.src = breed.image ? breed.image.url : "";
        image.alt = breed.name;

        const name = document.createElement("h3");
        name.textContent = breed.name;

        const temperament = document.createElement("p");
        temperament.textContent = breed.temperament || "Temperament unavailable";

        const button = document.createElement("button");
        button.textContent = "View Details";

        // Open the details page when the button is clicked
        button.addEventListener("click", function() {
            getBreedDetails(breed.id);
        });

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(temperament);
        card.appendChild(button);

        container.appendChild(card);
    });
}

// 3. Get details about one selected breed
async function getBreedDetails(breedId) {
    const breedList = document.querySelector("#breed-list");
    const detailsPage = document.querySelector("#breed-details");
    const container = document.querySelector("#details-container");

    breedList.hidden = true;
    detailsPage.hidden = false;

    container.textContent = "Loading breed details...";

    try {
        const response = await fetch(`${API_URL}/breeds/${breedId}`, {
            headers: {
                "x-api-key": API_KEY
            }
        });

        if (!response.ok) {
            throw new Error("Could not fetch breed details");
        }

        const breed = await response.json();

        displayBreedDetails(breed);

    } catch (error) {
        console.error(error);
        container.textContent = "Unable to load breed details.";
    }
}

// 4. Display information about the selected breed
function displayBreedDetails(breed) {
    const container = document.querySelector("#details-container");

    container.replaceChildren();

    const name = document.createElement("h2");
    name.textContent = breed.name;

    const image = document.createElement("img");
    image.src = breed.image ? breed.image.url : "";
    image.alt = breed.name;
    image.classList.add("details-image");

    const description = document.createElement("p");
    description.textContent = breed.description || "Description unavailable.";

    container.appendChild(name);
    container.appendChild(image);
    container.appendChild(description);

    // Display additional breed information

    const temperament = document.createElement("p");
    temperament.textContent = "Temperament: " + (breed.temperament || "Not available");

    const origin = document.createElement("p");
    origin.textContent = "Origin: " + (breed.origin || "Not available");

    const lifeSpan = document.createElement("p");
    lifeSpan.textContent = "Life expectancy: " + (breed.life_span || "Not available");

    const breedGroup = document.createElement("p");
    breedGroup.textContent = "Breed group: " + (breed.breed_group || "Not available");

    container.appendChild(temperament);
    container.appendChild(origin);
    container.appendChild(lifeSpan);
    container.appendChild(breedGroup);
}

// 5. Return to the breed list
const backButton = document.querySelector("#back-button");

backButton.addEventListener("click", function() {
    document.querySelector("#breed-details").hidden = true;
    document.querySelector("#breed-list").hidden = false;
});

// 6. Start the application
getBreeds();
