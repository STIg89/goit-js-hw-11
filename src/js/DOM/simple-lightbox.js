import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a');

export function refreshSimpleLightbox() {
  lightbox.refresh('show.simplelightbox');
}
