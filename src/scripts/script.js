// This is where you'll place your javascript code

// open your Developer Tools (CTRL + Shift + j) to see this message :)
console.log("Hello World!");

// a fetch request is used to access data from an API (application programming interface)

// for example, to get the top 10 most liked videos, you can use the following code:
const url = "http://www.girlsintech.co.uk/api/top10?category=likes";

fetch(url).then(response => response.json()).then(data => {
    const top10MostLikedVideos = data.result;

    // now that you have the top 10 most liked videos, you can do something with it, for example, list it on the page
    const list = document.querySelector("#top10MostLikedVideos");

    // 0 corresponds to the first item in the list of videos
    const firstVideo = top10MostLikedVideos[0];

    console.log(firstVideo); // look at the details for the first video in the developer tools

    const secondVideo = top10MostLikedVideos[1];

    list.innerHTML = getListItem(firstVideo);
    list.innerHTML += getListItem(secondVideo);

})

function getListItem(video) {
    const title = video._id;

    return `<li>${title}. Views: ${Intl.NumberFormat("en-GB").format(video.views)}</li>`
}

const button = document.querySelector(".button");
const text = document.querySelector(".text");

button.addEventListener("click", () => {
    text.classList.toggle("hidden");
});