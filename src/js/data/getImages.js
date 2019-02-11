const numItemsToGenerate = 0;
const numImagesAvailable = 10;
const imageWidth = 1920; //your desired image width in pixels
const imageHeight = 400;
const collectionID = 1193466; //the collection ID from the original url

export const renderGalleryItem = randomNumber => {
  fetch(
    `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`
  ).then(response => {
    const headerContainer = document.querySelector(".headerImage");
    const image = document.createElement("img");
    image.src = response.url;
    image.class = "gallery-image";
    image.alt = "gallery image";

    headerContainer.appendChild(image);
  });
};
for (let i = 0; i < numItemsToGenerate; i++) {
  let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
  renderGalleryItem(randomImageIndex);
}
