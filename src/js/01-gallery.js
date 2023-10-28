// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const imageCardsMarkup = createImageCardsMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imageCardsMarkup);

function createImageCardsMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href=${original}>
          <img class="gallery__image" src=${preview} alt=${description} />
        </a>`
    )
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
