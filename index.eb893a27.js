const e={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loadMore:document.querySelector(".load-more")},{form:t,gallery:r,loadMore:s}=e,a=new class{fetchPictures(){const e=`${this.BASE_URL}?key=${this.API_KEY}&q=${this.searchQuery}&image_type=${this.imageType}&orientation=${this.orientation}&safesearch=${this.safeSearch}&page=${this.page}&per_page${this.perPage}`;fetch(e).then((e=>{if(!e.ok)throw new Error(e.status);e.json().then((e=>(this.incrementPage,e)))}))}incrementPage(){this.page+=1}get getQuery(){return this.searchQuery}set setQuery(e){this.searchQuery=e}constructor(){this.BASE_URL="https://pixabay.com/api/",this.API_KEY="31898618-142b2265f1091d584874f7d24",this.searchQuery="",this.imageType="photo",this.orientation="horizontal",this.safeSearch=!0,this.page=1,this.perPage=40}};t.addEventListener("submit",(function(e){e.preventDefault(),a.query=e.currentTarget.searchQuery.value.trim(),a.fetchPictures()}));
//# sourceMappingURL=index.eb893a27.js.map
