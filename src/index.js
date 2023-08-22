console.log("%c HI", "color: firebrick");
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
document.addEventListener("DOMContentLoaded", async () => {
  selectDropElement = document.querySelector("#breed-dropdown");
  displayBreed = document.querySelector("#dog-breeds");
  displayBreed.setAttribute("style", "list-style-type:none");

  imgcontainer = document.querySelector("#dog-image-container");
  async function dogFetcher() {
    const response = await fetch(breedUrl);
    const data = await response.json();
    const imgresponse = await fetch(imgUrl);
    const imgData = await imgresponse.json();
    console.log(imgData.message);
    getBreed(data.message, imgData.message);
  }

  function getBreed(breed, imgData) {
    Object.values(imgData).forEach((render, index) => {
      const imgEl = document.createElement("img");
      const divEl = document.createElement("div");
      imgEl.src = render;
      divEl.append(imgEl);
      imgcontainer.append(divEl);
    });
    selectDropElement.addEventListener("change", (e) => {
      e.preventDefault();
      Object.keys(breed).filter((pet, index) => {
        if (selectDropElement.value === pet.charAt()) {
          liElement = document.createElement("li");
          liElement.textContent = pet;
          liElement.setAttribute("value", index);
          if (liElement.getAttribute("value") !== index) {
          }
          displayBreed.appendChild(liElement);
        }
      });
    });
  }
  dogFetcher();
});
