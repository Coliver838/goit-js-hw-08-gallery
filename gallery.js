import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview: "./images/image1.png",
    original: "./images/image1.png",
    description: "Image 1",
  },
  {
    preview: "./images/image2.png",
    original: "./images/image2.png",
    description: "Image 2",
  },
  {
    preview: "./images/image3.png",
    original: "./images/image3.png",
    description: "Image 3",
  },
  {
    preview: "./images/image4.png",
    original: "./images/image4.png",
    description: "Image 4",
  },
  {
    preview: "./images/image5.png",
    original: "./images/image5.png",
    description: "Image 5",
  },
  {
    preview: "./images/image6.png",
    original: "./images/image6.png",
    description: "Image 6",
  },
  {
    preview: "./images/image7.png",
    original: "./images/image7.png",
    description: "Image 7",
  },
  {
    preview: "./images/image8.png",
    original: "./images/image8.png",
    description: "Image 8",
  },
  {
    preview: "./images/image9.png",
    original: "./images/image9.png",
    description: "Image 9",
  },
];

const gallery = document.querySelector(".gallery");

const markup = images
  .map(
    ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`,
  )
  .join("");

gallery.innerHTML = markup;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
