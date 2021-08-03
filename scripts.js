const sectionCards = document.querySelector(".post-section");
const card = document.querySelector("div.card");

const blogSections = [
    {
        id:1,
        title: "Title 1",
        description: "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
        date: "date",
        like: "y"
    },
    {
        id:2,
        title: "Title 2",
        description: "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
        date: "date",
        like: "n"
    },
    {   
        id:3,
        title: "Title 3",
        description: "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
        date: "date",
        like: "n"
    },
    {   
        id:4,
        title: "Title 4",
        description: "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
        date: "date",
        like: "n"
    },
    {
        id:5,
        title: "Title 5",
        description: "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
        date: "date",
        like: "y"
    },
    {
        id:6,
        title: "Title 6",
        description: "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
        date: "date",
        like: "y"
    },
]

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
        .join('');
        sectionCards.innerHTML = htmlString;
}

function loadItems (){
    displayItems(blogSections);
}

loadItems();