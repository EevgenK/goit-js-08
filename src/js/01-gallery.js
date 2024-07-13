// Add imports above this line
import { galleryItems } from './gallery-items';
import { simplelightbox } from './gallery-items';
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
            <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
            </a></li>`
    )
    .join('');
const markup = makeGallery();
refs.gallery.innerHTML = markup;
const onImgClick = evt => {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  evt.preventDefault();
  const instance = basicLightbox.create(`
  <div class="modal">
    <img
    class="modal__image"
    src="${evt.target.dataset.source}"
    />
  </div>`);

  const pictureShow = instance.element().querySelector('.modal');
  pictureShow.addEventListener('click', instance.close);
  window.addEventListener('keydown', pictureClose);
  function pictureClose(evt) {
    if (evt.code !== 'Escape') {
      return;
    }
    instance.close();
    window.removeEventListener('keydown', pictureClose);
  }
  instance.show();
};
refs.gallery.addEventListener('click', onImgClick);
