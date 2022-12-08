import GalleryApi from './js/API/fetch';
import { refs } from './js/DOM/refs';
const { form, gallery, loadMore } = refs;
const galleryApi = new GalleryApi();

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  galleryApi.query = e.currentTarget.searchQuery.value.trim();
  galleryApi.fetchPictures();
}
