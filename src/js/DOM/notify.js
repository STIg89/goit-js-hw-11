import { Notify } from 'notiflix/build/notiflix-notify-aio';
export { picturesNotFound, picturesOver, picturesTotalFound, oops };

function picturesNotFound() {
  Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.',
    {
      position: 'center-center',
      fontSize: '35px',
      width: '600px',
    }
  );
}

function picturesOver() {
  Notify.info("We're sorry, but you've reached the end of search results.");
}

function picturesTotalFound(totalHits) {
  Notify.success(`Hooray! We found ${totalHits} images.`);
}

function oops() {
  Notify.failure(`Oops... Try again`, {
    position: 'center-center',
    fontSize: '35px',
    width: '600px',
  });
}
