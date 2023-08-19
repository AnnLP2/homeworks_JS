class Photos {
  API_PATH = "/photos";
  albumId = null;

  constructor(albumId) {
    this.albumId = albumId;
    this.photos = [];
  }

  async loadPhotos() {
    try {
      await this.init();
      this.renderPhotos();
    } catch (err) {
      console.error(err);
    }
  }

  async init() {
    const urlParams = new URLSearchParams(window.location.search);
    this.albumId = urlParams.get("id");

    const response = await fetch(`${ApiConfig.apiDomain}${this.API_PATH}?albumId=${this.albumId}`);
    this.photos = await response.json();
  }

  renderPhotos() {
    const photoList = document.querySelector("#photoList");
    photoList.innerHTML = "";

    this.photos.forEach(photo => {

      const img = document.createElement("img");
      img.src = photo.url;
      img.alt = photo.title;

      photoList.append(img);
    });
  }
}

const myPhotos = new Photos();
myPhotos.loadPhotos();

