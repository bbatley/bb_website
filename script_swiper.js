import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const images = [];
const urlParams = new URLSearchParams(window.location.search);
const imageDirectory = urlParams.get('imageDirectory');
const room = urlParams.get('room');
const addressDisplay = document.getElementById('address');

// **DONT REMOVE LINE** START4231

var link = document.querySelector('a[rmknd="Basement"]');
link = document.querySelector('a[rmknd="Living"]');
link.style.display = 'none';
link = document.querySelector('a[rmknd="Dining"]');
link.style.display = 'none';
link = document.querySelector('a[rmknd="Kitchen"]');
link.style.display = 'none';
link = document.querySelector('a[rmknd="Outside"]');
link.style.display = 'none';
link = document.querySelector('a[rmknd="Basement"]');
link.style.display = 'none';
link = document.querySelector('a[rmknd="Bed1"]');
link.style.display = 'none';
link = document.querySelector('a[rmknd="Bed2"]');
link.style.display = 'none';
link = document.querySelector('a[rmknd="Bed3"]');
link.style.display = 'none';
link = document.querySelector('a[rmknd="Bed4"]');
link.style.display = 'none';
link = document.querySelector('a[rmknd="Bath1"]');
link.style.display = 'none';
link = document.querySelector('a[rmknd="Bath2"]');
link.style.display = 'none';
link = document.querySelector('a[rmknd="Bath3"]');
link.style.display = 'none';
link = document.querySelector('a[rmknd="Garage"]');
link.style.display = 'none';
link = document.querySelector('a[rmknd="Laundry"]');
link.style.display = 'none';
link = document.querySelector('a[rmknd="Office/Den"]');
link.style.display = 'none';
link = document.querySelector('a[rmknd="Other"]');
link.style.display = 'none';
switch(imageDirectory) {
    case("1751 Marissa"):
        addressDisplay.textContent = '1751 Marissa Ct, De Pere, WI 54115';
        link = document.querySelector('a[rmknd="Living"]');
        link.style.display = 'inline'
        link = document.querySelector('a[rmknd="Dining"]');
        link.style.display = 'inline'
        link = document.querySelector('a[rmknd="Kitchen"]');
        link.style.display = 'inline'
        link = document.querySelector('a[rmknd="Outside"]');
        link.style.display = 'inline'
        link = document.querySelector('a[rmknd="Basement"]');
        link.style.display = 'inline'
        link = document.querySelector('a[rmknd="Bed1"]');
        link.style.display = 'inline'
        link = document.querySelector('a[rmknd="Bed2"]');
        link.style.display = 'inline'
        link = document.querySelector('a[rmknd="Bed3"]');
        link.style.display = 'inline'
        link = document.querySelector('a[rmknd="Bath1"]');
        link.style.display = 'inline'
        link = document.querySelector('a[rmknd="Bath2"]');
        link.style.display = 'inline'
        link = document.querySelector('a[rmknd="Garage"]');
        link.style.display = 'inline'
        link = document.querySelector('a[rmknd="Laundry"]');
        link.style.display = 'inline'
        link = document.querySelector('a[rmknd="Other"]');
        link.style.display = 'inline'
        switch(room){
            case 'All':
                images.push(`${imageDirectory}/Living/PXL_20221029_190448879.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20221029_190347621.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20230704_002423525.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20221029_190228381.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20221029_190403436.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20221029_190308304.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20221029_190325153.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20221029_190256154.jpg`);
                images.push(`${imageDirectory}/Dining/PXL_20221029_181558969.jpg`);
                images.push(`${imageDirectory}/Dining/PXL_20221029_181614919.jpg`);
                images.push(`${imageDirectory}/Dining/PXL_20221029_181719484.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230704_002442637.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20221029_181649081.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230704_002323358.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20221029_181636201.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20221029_181259543.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230704_002331887.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20221029_181341183.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20221029_181506086.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20221029_181320805.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20221029_181533943.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20221028_222212470.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20221028_222234773.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20221028_222040447.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20221028_222133080.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20221028_222057997.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20221028_214916096.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20221028_214936543.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20221028_214857607.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20221028_215530397.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20221028_215504988.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20221028_215450472.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20221028_215323473.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20221028_215312818.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20221028_215612551.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20221028_215756874.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20221028_215936440.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20221028_215928253.jpg`);
                images.push(`${imageDirectory}/Bed3/PXL_20221028_220012973.jpg`);
                images.push(`${imageDirectory}/Bed3/PXL_20221028_215949941.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20221028_215741511.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20221028_220215770.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20221028_215715645.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20221028_215636080.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20221029_180829257.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20221029_180900074.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20221029_181027398.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20221029_180958775.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20221028_215126716.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20221028_215136083.jpg`);
                images.push(`${imageDirectory}/Laundry/PXL_20221029_181101842.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221014_213604444.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221014_213757961.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221029_181142439.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221029_181237964.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221028_220135481.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221014_213502206.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221014_213630626.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221014_213417829.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221028_220254724.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221014_213627086.jpg`);
                break;
            case 'Living':
                images.push(`${imageDirectory}/Living/PXL_20221029_190448879.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20221029_190347621.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20230704_002423525.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20221029_190228381.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20221029_190403436.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20221029_190308304.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20221029_190325153.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20221029_190256154.jpg`);
                break;
            case 'Dining':
                images.push(`${imageDirectory}/Dining/PXL_20221029_181558969.jpg`);
                images.push(`${imageDirectory}/Dining/PXL_20221029_181614919.jpg`);
                images.push(`${imageDirectory}/Dining/PXL_20221029_181719484.jpg`);
                break;
            case 'Kitchen':
                images.push(`${imageDirectory}/Kitchen/PXL_20230704_002442637.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20221029_181649081.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230704_002323358.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20221029_181636201.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20221029_181259543.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230704_002331887.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20221029_181341183.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20221029_181506086.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20221029_181320805.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20221029_181533943.jpg`);
                break;
            case 'Outside':
                images.push(`${imageDirectory}/Outside/PXL_20221028_222212470.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20221028_222234773.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20221028_222040447.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20221028_222133080.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20221028_222057997.jpg`);
                break;
            case 'Basement':
                images.push(`${imageDirectory}/Basement/PXL_20221028_214916096.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20221028_214936543.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20221028_214857607.jpg`);
                break;
            case 'Bed1':
                images.push(`${imageDirectory}/Bed1/PXL_20221028_215530397.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20221028_215504988.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20221028_215450472.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20221028_215323473.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20221028_215312818.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20221028_215612551.jpg`);
                break;
            case 'Bed2':
                images.push(`${imageDirectory}/Bed2/PXL_20221028_215756874.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20221028_215936440.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20221028_215928253.jpg`);
                break;
            case 'Bed3':
                images.push(`${imageDirectory}/Bed3/PXL_20221028_220012973.jpg`);
                images.push(`${imageDirectory}/Bed3/PXL_20221028_215949941.jpg`);
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                images.push(`${imageDirectory}/Bath1/PXL_20221028_215741511.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20221028_220215770.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20221028_215715645.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20221028_215636080.jpg`);
                break;
            case 'Bath2':
                images.push(`${imageDirectory}/Bath2/PXL_20221029_180829257.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20221029_180900074.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20221029_181027398.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20221029_180958775.jpg`);
                break;
            case 'Bath3':
                break;
            case 'Garage':
                images.push(`${imageDirectory}/Garage/PXL_20221028_215126716.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20221028_215136083.jpg`);
                break;
            case 'Laundry':
                images.push(`${imageDirectory}/Laundry/PXL_20221029_181101842.jpg`);
                break;
            case 'Office/Den':
                break;
            case 'Other':
                images.push(`${imageDirectory}/Other/PXL_20221014_213604444.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221014_213757961.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221029_181142439.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221029_181237964.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221028_220135481.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221014_213502206.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221014_213630626.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221014_213417829.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221028_220254724.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20221014_213627086.jpg`);
                break;
        }
        break;
}
// **DONT REMOVE LINE** END4231

function adjustSlideWidth(slide, imgWidth, imgHeight) {
    if (imgWidth < imgHeight) {
        slide.style.width = '20%'; // Example width for vertical images
    } else {
        slide.style.width = '35%'; // Example width for horizontal images
    }
}

const KitchenswiperWrapper = document.querySelector('.mySwiperKitchen2 .swiper-wrapper');
const KitchenthumbSwiperWrapper = document.querySelector('.mySwiperKitchen .swiper-wrapper'); // Target thumbnail

images.forEach(imgSrc => {
    // Create slides for the main slider
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    const image = document.createElement('img');
    image.src = imgSrc;
    slide.appendChild(image);
    KitchenswiperWrapper.appendChild(slide); 

    // Create slides for the thumbnail slider
    const thumbSlide = document.createElement('div');
    thumbSlide.classList.add('swiper-slide');
    const thumbImage = document.createElement('img');
    thumbImage.src = imgSrc;
    thumbSlide.appendChild(thumbImage);
    KitchenthumbSwiperWrapper.appendChild(thumbSlide); 
});

var swiper3 = new Swiper(".mySwiperKitchen", { // This is the container under the images
  loop: true,
  spaceBetween: 10,
  slidesPerView: 10,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiperKitchen2", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
//   loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper3,
  },
});

const slides = swiper2.slides;
slides.forEach(slide => {
    const img = slide.querySelector('img');
    if (img.complete) {
        adjustSlideWidth(slide, img.naturalWidth, img.naturalHeight);
    } else {
        // Image not loaded yet
        img.addEventListener('load', () => {
            adjustSlideWidth(slide, img.naturalWidth, img.naturalHeight); 
        });
    }
});

const roomButtons = document.querySelectorAll('.room_button');
roomButtons.forEach(button => {
    const url = new URL(button.href);  // Create a URL object
    const searchParams = url.searchParams;
 
    searchParams.set('imageDirectory', imageDirectory); 
 
    button.href = url.toString(); // Update the 'href' 
 });
