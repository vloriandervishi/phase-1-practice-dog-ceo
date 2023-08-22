console.log("%c HI", "color: firebrick");
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", async () => {
  selectDropElement = document.querySelector("#breed-dropdown");
  displayBreed = document.querySelector("#dog-breeds");
  async function dogFetcher() {
    const response = await fetch(breedUrl);
    const data = await response.json();
    getBreed(data.message);
  }

  function getBreed(breed) {
    selectDropElement.addEventListener("change", (e) => {
      e.preventDefault();
      console.log(selectDropElement.value);
      Object.keys(breed).forEach((pet) => {
        if (selectDropElement.value === pet.charAt()) {
          showcaseBreed(pet);
        }
      });
    });
  }
  function showcaseBreed(pet) {
    ulElement = document.createElement("ul");
    liElement = document.createElement("li");
    liElement.textContent = pet;
    ulElement.append(liElement);
    displayBreed.prepend(liElement);
  }

  dogFetcher();
});
