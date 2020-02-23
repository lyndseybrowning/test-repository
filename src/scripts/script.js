// This is where you'll place your javascript code

// open your Developer Tools (CTRL + Shift + j) to see this message :)
console.log("Hello World!");

// a fetch request is used to access data from an API (application programming interface)

// for example, to get the top 10 most liked videos, you can use the following code:
const url = "http://www.girlsintech.co.uk/api/top10?category=likes";

fetch(url).then(response => response.json()).then(data => {
    createCarousel(data.result);
});

function createCarousel(data) {
    const videos = data.map((v, index) => ({
        ...v,
        index,
    }));
    const carousel = document.querySelector(".carousel");
    const btnNext = document.querySelector(".next");
    const btnPrevious = document.querySelector(".previous");
    const makeCarousel = current => {
        carousel.innerHTML = current.map(video => {
            return `<li class='video'>${video._id}</li>`;
        }).join("");
    };

    let currentVideos = [videos[0], videos[1]];

    makeCarousel(currentVideos);

    btnNext.addEventListener("click", () => {
        const lastIndex = currentVideos[currentVideos.length - 1].index;
        currentVideos = videos.filter(v => v.index === lastIndex || v.index === lastIndex + 1);

        makeCarousel(currentVideos);
    });

    btnPrevious.addEventListener("click", () => {
        const firstIndex = currentVideos[0].index;
        currentVideos = videos.filter(v => v.index === firstIndex || v.index === firstIndex - 1);

        makeCarousel(currentVideos);
    });
}