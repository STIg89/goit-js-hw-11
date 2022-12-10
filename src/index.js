import { refreshSimpleLightbox } from './js/DOM/simple-lightbox';
import GalleryApi from './js/API/fetch';
import { refs } from './js/DOM/refs';
import { renderGallery, cleanGallery } from './js/DOM/render';
import { smoothScroll } from './js/DOM/smooth-scroll';
import {
  picturesNotFound,
  picturesOver,
  picturesTotalFound,
  oops,
} from './js/DOM/notify';
const { form, loadMore } = refs;
const galleryApi = new GalleryApi();

form.addEventListener('submit', onSearch);
loadMore.addEventListener('click', onLoadMore);

async function onSearch(e) {
  e.preventDefault();
  cleanGallery();
  galleryApi.searchQuery = e.currentTarget.searchQuery.value.trim();
  galleryApi.resetPage();
  loadMore.classList.add('visually-hidden');
  try {
    const data = await galleryApi.fetchPictures();

    if (data.hits.length === 0 || galleryApi.searchQuery === '') {
      picturesNotFound();
      return;
    }

    picturesTotalFound(data.totalHits);
    renderGallery(data.hits);
    refreshSimpleLightbox();
    galleryApi.incrementPage();

    if (data.totalHits > galleryApi.per_page) {
      loadMore.classList.remove('visually-hidden');
    }
  } catch {
    oops();
  }
}

async function onLoadMore() {
  loadMore.classList.add('visually-hidden');
  try {
    const data = await galleryApi.fetchPictures();
    renderGallery(data.hits);
    refreshSimpleLightbox();
    galleryApi.incrementPage();
    smoothScroll();

    const pagesTotal = Math.ceil(data.totalHits / galleryApi.per_page);

    if (pagesTotal === galleryApi.page - 1) {
      picturesOver();
      return;
    }
    loadMore.classList.remove('visually-hidden');
  } catch {
    oops();
  }
}
