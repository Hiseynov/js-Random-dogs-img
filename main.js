const button = document.querySelector(".btn");
const image = document.querySelector(".img");
//  function fetchHandler() {
//   try {
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then((e) => e.json())
//     .then((data) => {
//     //   let img = image;
//     console.log(data);
//     image.src = data.message;
//     //   container.appendChild(img);
//     })
//   } catch (error) {
//     console.log(error);
//   }
// }
async function fetchHandler() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        
        const data = await response.json();
        image.src = data.message;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
button.addEventListener("click", () => {
    let isLoaded = image.complete;

    if (isLoaded) {
        fetchHandler();
    }
});