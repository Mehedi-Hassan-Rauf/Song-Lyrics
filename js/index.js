let inp = document.getElementById("inp");
let vtn = document.getElementById("vtn");

vtn.addEventListener("click", function (event) {
  event.preventDefault();
  let song = inp.value;
  let url = `https://api.lyrics.ovh/suggest/${song}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => lines(data.data));
});

function lines(songs) {
  let result = document.getElementById("result");
  for (let i = 0; i < songs.length; i++) {
    let div = document.createElement("div");
    div.className = "single-result row align-items-center my-3 p-3";
    const title = songs[i].title;
    const artist = songs[i].artist.name;
    div.innerHTML = `
            <div class="col-md-9">
              <h3 class="lyrics-name">${title}</h3>
              <p class="author lead">Album by <span>${artist}</span></p>
            </div>
            <div class="col-md-3 text-md-right text-center">
              <button class="btn btn-success">Get Lyrics</button>
            </div>
  `;
    result.appendChild(div);
  }
}

// fetch(url)
// .then((response) => response.json())
// .then((data) => weth(data))
// .catch((error) => console.log(error));
