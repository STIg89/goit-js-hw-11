export default class GalleryApi {
  constructor() {
    this.BASE_URL = 'https://pixabay.com/api/';
    this.API_KEY = '31898618-142b2265f1091d584874f7d24';
    this.searchQuery = '';
    this.imageType = 'photo';
    this.orientation = 'horizontal';
    this.safeSearch = true;
    this.page = 1;
    this.perPage = 40;
  }

  fetchPictures() {
    const url = `${this.BASE_URL}?key=${this.API_KEY}&q=${this.searchQuery}&image_type=${this.imageType}&orientation=${this.orientation}&safesearch=${this.safeSearch}&page=${this.page}&per_page${this.perPage}`;

    fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      response.json().then(data => {
        this.incrementPage;
        return data;
      });
    });
  }

  incrementPage() {
    this.page += 1;
  }

  get getQuery() {
    return this.searchQuery;
  }

  set setQuery(newQuery) {
    this.searchQuery = newQuery;
  }
}
