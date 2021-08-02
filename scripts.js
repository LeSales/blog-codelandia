const sectionCards = document.querySelector("section.post-section");
const card = document.querySelector("div.card");

const blogSections = [
    {
        id:1,
        title: "Title 1",
        description: "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
        date: "date",
        like: false
    },
    {
        id:2,
        title: "Title 2",
        description: "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
        date: "date",
        like: false
    },
    {   
        id:3,
        title: "Title 3",
        description: "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
        date: "date",
        like: false
    },
    {   
        id:4,
        title: "Title 4",
        description: "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
        date: "date",
        like: false
    },
    {
        id:5,
        title: "Title 5",
        description: "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
        date: "date",
        like: false
    },
    {
        id:6,
        title: "Title 6",
        description: "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
        date: "date",
        like: false
    },
]

blogSections.map(item => {
    const cardClone = card.cloneNode(true);
    cardClone.setAttribute("id", item.id);
    cardClone.querySelector(".title").innerHTML = item.title;
    cardClone.querySelector(".description").innerHTML = item.description;
    sectionCards.appendChild(cardClone);
})