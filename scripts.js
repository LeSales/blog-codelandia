const sectionCards = document.querySelector(".post-section");
const searchBar = document.querySelector(".search-bar");

const timeStamp = "1628031892";
const apiKey = "d31a9877865e478122ff39e9ff8c8b55";
const md5 = "7f8b7b6ec6d542b48cb01c84dab5d756";

/*
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value;

  const filteredItems = blogSections.filter((item) => {
    return (
      item.title.includes(searchString) ||
      item.description.includes(searchString)
    );
  });
  displayItems(filteredItems);
  if(filteredItems.length === 0){
      return sectionCards.innerHTML = `
      <li class="card">
      <div class="top-card">
          <h2 class="title">Nenhum item encontrado</h2>
      </li>
      `
  }
});

*/

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
            document.querySelector(".post-section").innerHTML = createListItem(
              element.id,
              element.name,
              element.description,
              element.thumbnail.path,
              element.thumbnail.extension
            );
          });
          setLoad(false);
        }
        setLoad(false);
      });
  }
});

//---------------

const blogSections = [
  {
    id: 1,
    title: "Title 1",
    description:
      "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
    date: "date",
    like: "y",
  },
  {
    id: 2,
    title: "Title 2",
    description:
      "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
    date: "date",
    like: "n",
  },
  {
    id: 3,
    title: "Title 3",
    description:
      "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
    date: "date",
    like: "n",
  },
  {
    id: 4,
    title: "Title 4",
    description:
      "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
    date: "date",
    like: "n",
  },
  {
    id: 5,
    title: "Title 5",
    description:
      "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
    date: "date",
    like: "y",
  },
  {
    id: 6,
    title: "Title 6",
    description:
      "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
    date: "date",
    like: "y",
  },
];
/*
const displayItems = (items) => {
  const htmlString = items
    .map((items) => {
      return `
            <li class="card">
            <div class="top-card">
                <div class="date">date</div>
                    <i class="far fa-heart"></i>
                </div>
                <h2 class="title">${items.title}</h2>
                <p class="description">${items.description}</p>
            </li>
            `;
    })
    .join("");
  sectionCards.innerHTML = htmlString;
};*/
/*
function loadItems() {
  displayItems(blogSections);
}

loadItems();
*/
//displayItems(blogSections);
function resetList(){
    document.querySelector(".post-section").innerHTML = "";
}

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

//buscando heróis

function loadList(){
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

/*
const displayItems = (items) => {
    const htmlString = items
      .map((items) => {
        return `
              <li class="card">
              <div class="top-card">
                  <div class="date">date</div>
                      <i class="far fa-heart"></i>
                  </div>
                  <h2 class="title">${items.data}</h2>
                  <p class="description">${items.description}</p>
              </li>
              `;
      })
      .join("");
    sectionCards.innerHTML = htmlString;
  };
*/

 function setLoad(load){
  if(load === true){
    document.querySelector(".loader").classList.remove("disapear");
    console.log(load);
  } else {
    document.querySelector(".loader").classList.add("disapear");
    console.log(load);
  }

}

loadList();