const sectionCards = document.querySelector(".post-section");
const searchBar = document.querySelector(".search-bar");

const timeStamp = "1628031892";
const apiKey = "d31a9877865e478122ff39e9ff8c8b55";
const md5 = "7f8b7b6ec6d542b48cb01c84dab5d756";

//Evento para buscar apertando Enter --- 1)Buscando string vazia reseta a lista para as 10 primeiras buscas
searchBar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const searchString = e.target.value;
    console.log(searchString);

    if (searchString === "") {
      resetList();
      setLoad(true);
      fetch(
        `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=10&orderBy=-modified`
      )
        .then((response) => {
          return response.json();
        })
        .then((jsonParsed) => {
          console.log(jsonParsed);
          const lista = jsonParsed.data.results.forEach((element) => {
            document
              .querySelector(".post-section")
              .insertAdjacentHTML(
                "beforeend",
                createListItem(
                  element.id,
                  element.name,
                  element.description,
                  element.thumbnail.path,
                  element.thumbnail.extension
                )
              );
          });
          setLoad(false);
        });
    }
    setLoad(true);
    resetList();
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&name=${searchString}&orderBy=name&limit=10`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        console.log(jsonParsed);
        if (jsonParsed.data.results.length === 0) {
          document.querySelector(".post-section").innerHTML = createListItem(
            "",
            "Não encontrado",
            "",
            "./images/Missing",
            "png"
          );
        } else {
          jsonParsed.data.results.forEach((element) => {
            document
              .querySelector(".post-section")
              .insertAdjacentHTML(
                "beforeend",
                createListItem(
                  element.id,
                  element.name,
                  element.description,
                  element.thumbnail.path,
                  element.thumbnail.extension
                )
              );
          });
          setLoad(false);
        }
        setLoad(false);
      });
  }
});

//Função para resetar a lista de heróis
function resetList() {
  document.querySelector(".post-section").innerHTML = "";
}

//buscando heróis
function loadList() {
  resetList();
  setLoad(true);
  fetch(
    `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=10&orderBy=-modified`
  )
    .then((response) => {
      return response.json();
    })
    .then((jsonParsed) => {
      console.log(jsonParsed);
      const lista = jsonParsed.data.results.forEach((element) => {
        document
          .querySelector(".post-section")
          .insertAdjacentHTML(
            "beforeend",
            createListItem(
              element.id,
              element.name,
              element.description,
              element.thumbnail.path,
              element.thumbnail.extension
            )
          );
      });
      setLoad(false);
    });
}

//Função para criar um card
function createListItem(id, name, description, path, extension) {
  return `
        <li class="card">
        <img class="hero-img" src="${path}.${extension}"></img>
            <div class="content">
            <div class="top-card">
                <div class="date">ID:${id}</div>
                    
                </div>
                <h2 class="title">${name}</h2>
                <p class="description">${description}</p>
            </div>
        </li>
        `;
}
//Função para ligar e desligar o load
function setLoad(load) {
  if (load === true) {
    document.querySelector(".loader").classList.remove("disapear");
  } else {
    document.querySelector(".loader").classList.add("disapear");
  }
}

loadList();
