const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__1280.jpg',
    description: 'Tulips',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2017/08/06/14/02/container-2597230__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2017/08/06/14/02/container-2597230__1280.jpg',
    description: 'Colorful containers',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__1280.jpg',
    description: 'Mountain landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/21/15/09/field-1846012__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/21/15/09/field-1846012__1280.jpg',
    description: 'Wild flowers',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079__1280.jpg',
    description: 'Mountain valley',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/08/15/14/22/lake-1595026__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/08/15/14/22/lake-1595026__1280.jpg',
    description: 'Sailboat on a lake',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2017/06/20/19/22/fuchsias-2424369__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2017/06/20/19/22/fuchsias-2424369__1280.jpg',
    description: 'Flowers in the mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2017/06/19/20/16/landscape-2420643__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2017/06/19/20/16/landscape-2420643__1280.jpg',
    description: 'Green hills',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/29/03/53/beach-1867285__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/29/03/53/beach-1867285__1280.jpg',
    description: 'Lighthouse by the sea',
  },
];

const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('[data-action="close-lightbox"]');
const lightboxOverlay = document.querySelector('.lightbox__overlay');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        >
      </a>
    </li>
  `,
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', onGalleryClick);
closeButton.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', closeLightbox);

function onGalleryClick(event) {
  event.preventDefault();

  const image = event.target;

  if (!image.classList.contains('gallery__image')) {
    return;
  }

  openLightbox(image.dataset.source, image.alt);
}

function openLightbox(src, alt) {
  lightbox.classList.add('is-open');
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  window.addEventListener('keydown', onEscKeyPress);
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightboxImage.src = '';
  lightboxImage.alt = '';
  window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeLightbox();
  }
}
