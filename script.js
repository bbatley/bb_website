const imageContainer = document.getElementById('image-container');
const images = [];
const urlParams = new URLSearchParams(window.location.search);
const imageDirectory = urlParams.get('imageDirectory');
const addressDisplay = document.getElementById('address');

switch(imageDirectory) {
    case '1708_E_Main_St_Little_Chute_WI':
        addressDisplay.textContent = '1708 E Main St, Little Chute, WI';
        images.push(`${imageDirectory}/IMG_0465.JPG`);
        images.push(`${imageDirectory}/IMG_0466.JPG`);
        images.push(`${imageDirectory}/IMG_0467.JPG`);
        images.push(`${imageDirectory}/IMG_0468.JPG`);
        images.push(`${imageDirectory}/IMG_0469.JPG`);
        images.push(`${imageDirectory}/IMG_0470.JPG`);
        images.push(`${imageDirectory}/IMG_0471.JPG`);
        images.push(`${imageDirectory}/IMG_0472.JPG`);
        images.push(`${imageDirectory}/IMG_0473.JPG`);
        images.push(`${imageDirectory}/IMG_0474.JPG`);
        images.push(`${imageDirectory}/IMG_0475.JPG`);
        images.push(`${imageDirectory}/IMG_0476.JPG`);
        images.push(`${imageDirectory}/IMG_0477.JPG`);
        images.push(`${imageDirectory}/IMG_0478.JPG`);
        images.push(`${imageDirectory}/IMG_0479.JPG`);
        images.push(`${imageDirectory}/IMG_0480.JPG`);
        images.push(`${imageDirectory}/IMG_0481.JPG`);
        images.push(`${imageDirectory}/IMG_0482.JPG`);
        images.push(`${imageDirectory}/IMG_0483.JPG`);
        images.push(`${imageDirectory}/IMG_0484.JPG`);
        images.push(`${imageDirectory}/IMG_0485.JPG`);
        images.push(`${imageDirectory}/IMG_0486.JPG`);
        images.push(`${imageDirectory}/IMG_0487.JPG`);
        images.push(`${imageDirectory}/IMG_0488.JPG`);
        images.push(`${imageDirectory}/IMG_0489.JPG`);
        images.push(`${imageDirectory}/IMG_0490.JPG`);
        images.push(`${imageDirectory}/IMG_0491.JPG`);
        images.push(`${imageDirectory}/IMG_0492.JPG`);
        images.push(`${imageDirectory}/IMG_0493.JPG`);
        images.push(`${imageDirectory}/IMG_0494.JPG`);
        images.push(`${imageDirectory}/IMG_0495.JPG`);
        images.push(`${imageDirectory}/IMG_0496.JPG`);
        images.push(`${imageDirectory}/IMG_0497.JPG`);
        images.push(`${imageDirectory}/IMG_0498.JPG`);
        images.push(`${imageDirectory}/IMG_0499.JPG`);
        images.push(`${imageDirectory}/IMG_0500.JPG`);
        images.push(`${imageDirectory}/IMG_0501.JPG`);
        images.push(`${imageDirectory}/IMG_0502.JPG`);
        images.push(`${imageDirectory}/IMG_0503.JPG`);
        images.push(`${imageDirectory}/IMG_0504.JPG`);
        images.push(`${imageDirectory}/IMG_0505.JPG`);
        images.push(`${imageDirectory}/IMG_0506.JPG`);
        images.push(`${imageDirectory}/IMG_0507.JPG`);
        images.push(`${imageDirectory}/IMG_0508.JPG`);
        images.push(`${imageDirectory}/IMG_0509.JPG`);
        images.push(`${imageDirectory}/IMG_0510.JPG`);
        images.push(`${imageDirectory}/IMG_0511.JPG`);
        images.push(`${imageDirectory}/IMG_0512.JPG`);
        images.push(`${imageDirectory}/IMG_0513.JPG`);
        images.push(`${imageDirectory}/IMG_0514.JPG`);
        images.push(`${imageDirectory}/IMG_0515.JPG`);
        images.push(`${imageDirectory}/IMG_0516.JPG`);
        images.push(`${imageDirectory}/IMG_0517.JPG`);
        images.push(`${imageDirectory}/IMG_0518.JPG`);
        images.push(`${imageDirectory}/IMG_0519.JPG`);
        images.push(`${imageDirectory}/IMG_0520.JPG`);
        images.push(`${imageDirectory}/IMG_0512.JPG`);
}


images.forEach(imagePath => {
    const image = document.createElement('img');
    image.src = imagePath;
    imageContainer.appendChild(image);
});
