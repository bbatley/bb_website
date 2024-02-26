const imageContainer = document.getElementById('image-container');
const images = [];

for (let i = 0; i <= 50; i++) {
    let num = 465 + i;
    const imageNumber = num.toString(); 
    const imagePath = `/photos/1708_E_Main_St_Little_Chute_WI/IMG_0${imageNumber}.JPG`;
    images.push(imagePath);
}

images.forEach(imagePath => {
    const image = document.createElement('img');
    image.src = imagePath;
    imageContainer.appendChild(image);
});
