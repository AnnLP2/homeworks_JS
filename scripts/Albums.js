class Albums {
  API_PATH = "/albums";

  constructor() {
    this.albums = [];
  }

  async loadAlbums() {
    try {
      await this.init();
      this.renderAlbumsList();
    } catch (err) {
      console.error(err);
    }
  }

  async init() {
    const response = await fetch(`${ApiConfig.apiDomain}${this.API_PATH}`);
    this.albums = await response.json();
  }

  photoViewListeners() {
    const buttons = document.querySelectorAll('.view-photos-btn');

    buttons.forEach(button => {
      button.addEventListener('click', e => {
        const albumId = e.target.dataset.albumId;
        this.viewAlbumPhotos(albumId);
      });
    });
  }
  renderAlbumsList() {
    const albumList = document.querySelector("#albumList");
    albumList.innerHTML = "";

    this.albums.forEach(album => {
      const li = document.createElement("li");

      const title = document.createElement("span");
      title.textContent = album.title;

      const button = document.createElement('button');
      button.classList.add('view-photos-btn');
      button.dataset.albumId = album.id;
      button.textContent = 'View photos';

      li.append(title);
      li.append(button);

      albumList.append(li);
    });
    this.photoViewListeners();
  }

  viewAlbumPhotos(albumId) {
    window.location.href = `photos.html?id=${albumId}`;
  }
}

const myAlbums = new Albums();
myAlbums.loadAlbums();


