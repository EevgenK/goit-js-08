// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const refs = {
  gallery: document.querySelector('.gallery'),
};

const makeGallery = () =>
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"  />
            </a></li>`
    )
    .join('');
const markup = makeGallery();
refs.gallery.style.listStyle = 'none';
refs.gallery.innerHTML = markup;

var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
