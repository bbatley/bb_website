import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const images = [];
const urlParams = new URLSearchParams(window.location.search);
const imageDirectory = urlParams.get('imageDirectory');
const room = urlParams.get('room');
const addressDisplay = document.getElementById('address');

let mainElement = document.querySelector('main');
let mainBeforeStyle = mainElement.style;  // Access inline styles

function changeBackgroundImage(newImageUrl) {
  mainBeforeStyle.backgroundImage = `url(${newImageUrl})`;
  mainElement.style.backgroundRepeat = 'no-repeat'; 
  mainElement.style.backgroundSize = 'cover'; 
}

// **DONT REMOVE LINE** START4231

var link = document.querySelector('option[rmknd="Basement"]');
link = document.querySelector('option[rmknd="Living"]');
link.style.display = 'none';
link = document.querySelector('option[rmknd="Dining"]');
link.style.display = 'none';
link = document.querySelector('option[rmknd="Kitchen"]');
link.style.display = 'none';
link = document.querySelector('option[rmknd="Outside"]');
link.style.display = 'none';
link = document.querySelector('option[rmknd="Basement"]');
link.style.display = 'none';
link = document.querySelector('option[rmknd="Bed1"]');
link.style.display = 'none';
link = document.querySelector('option[rmknd="Bed2"]');
link.style.display = 'none';
link = document.querySelector('option[rmknd="Bed3"]');
link.style.display = 'none';
link = document.querySelector('option[rmknd="Bed4"]');
link.style.display = 'none';
link = document.querySelector('option[rmknd="Bath1"]');
link.style.display = 'none';
link = document.querySelector('option[rmknd="Bath2"]');
link.style.display = 'none';
link = document.querySelector('option[rmknd="Bath3"]');
link.style.display = 'none';
link = document.querySelector('option[rmknd="Garage"]');
link.style.display = 'none';
link = document.querySelector('option[rmknd="Laundry"]');
link.style.display = 'none';
link = document.querySelector('option[rmknd="Office/Den"]');
link.style.display = 'none';
link = document.querySelector('option[rmknd="Other"]');
link.style.display = 'none';
switch(imageDirectory) {
    case("1751 Marissa"):
        addressDisplay.textContent = '1751 Marissa Ct, De Pere, WI 54115';
        link = document.querySelector('option[rmknd="Living"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Dining"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Kitchen"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Outside"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Basement"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Bed1"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Bed2"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Bed3"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Bath1"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Bath2"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Garage"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Laundry"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Other"]');
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
    case("2715D 4th"):
        addressDisplay.textContent = '2715 W. 4th St, Apt. D, Appleton, WI 54914';
        link = document.querySelector('option[rmknd="Living"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Kitchen"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Outside"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Basement"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Bed1"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Bed2"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Bed3"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Bath1"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Laundry"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Other"]');
        link.style.display = 'inline'
        switch(room){
            case 'All':
                images.push(`${imageDirectory}/Living/image(1).jpg`);
                images.push(`${imageDirectory}/Living/image(2).jpg`);
                images.push(`${imageDirectory}/Kitchen/image.jpg`);
                images.push(`${imageDirectory}/Outside/2715 W Fourth St, Appleton (Brian Batley) Front.tiff`);
                images.push(`${imageDirectory}/Outside/2715 W Fourth St, Appleton (Brian Batley) Back.tiff`);
                images.push(`${imageDirectory}/Basement/image(10).jpg`);
                images.push(`${imageDirectory}/Basement/image(11).jpg`);
                images.push(`${imageDirectory}/Bed1/image(6).jpg`);
                images.push(`${imageDirectory}/Bed1/image(5).jpg`);
                images.push(`${imageDirectory}/Bed2/image(9).jpg`);
                images.push(`${imageDirectory}/Bed2/image(8).jpg`);
                images.push(`${imageDirectory}/Bed3/image(7).jpg`);
                images.push(`${imageDirectory}/Bath1/image(4).jpg`);
                images.push(`${imageDirectory}/Bath1/image(3).jpg`);
                images.push(`${imageDirectory}/Bath1/2715D W Fourth St, Appleton (Brian Batley) 0.5 Bath.tiff`);
                images.push(`${imageDirectory}/Laundry/image(12).jpg`);
                images.push(`${imageDirectory}/Other/image(13).jpg`);
                break;
            case 'Living':
                images.push(`${imageDirectory}/Living/image(1).jpg`);
                images.push(`${imageDirectory}/Living/image(2).jpg`);
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                images.push(`${imageDirectory}/Kitchen/image.jpg`);
                break;
            case 'Outside':
                images.push(`${imageDirectory}/Outside/2715 W Fourth St, Appleton (Brian Batley) Front.tiff`);
                images.push(`${imageDirectory}/Outside/2715 W Fourth St, Appleton (Brian Batley) Back.tiff`);
                break;
            case 'Basement':
                images.push(`${imageDirectory}/Basement/image(10).jpg`);
                images.push(`${imageDirectory}/Basement/image(11).jpg`);
                break;
            case 'Bed1':
                images.push(`${imageDirectory}/Bed1/image(6).jpg`);
                images.push(`${imageDirectory}/Bed1/image(5).jpg`);
                break;
            case 'Bed2':
                images.push(`${imageDirectory}/Bed2/image(9).jpg`);
                images.push(`${imageDirectory}/Bed2/image(8).jpg`);
                break;
            case 'Bed3':
                images.push(`${imageDirectory}/Bed3/image(7).jpg`);
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                images.push(`${imageDirectory}/Bath1/image(4).jpg`);
                images.push(`${imageDirectory}/Bath1/image(3).jpg`);
                images.push(`${imageDirectory}/Bath1/2715D W Fourth St, Appleton (Brian Batley) 0.5 Bath.tiff`);
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                images.push(`${imageDirectory}/Laundry/image(12).jpg`);
                break;
            case 'Office/Den':
                break;
            case 'Other':
                images.push(`${imageDirectory}/Other/image(13).jpg`);
                break;
        }
        break;
    case("500 E Alice"):
        addressDisplay.textContent = '';
        link = document.querySelector('option[rmknd="Living"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Dining"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Kitchen"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Outside"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Basement"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Bed1"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Bed2"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Bed3"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Bath1"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Bath2"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Laundry"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Other"]');
        link.style.display = 'inline'
        switch(room){
            case 'All':
                images.push(`${imageDirectory}/Living/IMG_3149.heic`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153413505.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153333463.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153122837.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_152604210.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153329505.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153446948.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153347831.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3147.heic`);
                images.push(`${imageDirectory}/Living/IMG_3185.heic`);
                images.push(`${imageDirectory}/Dining/IMG_3145.heic`);
                images.push(`${imageDirectory}/Dining/IMG_3146.heic`);
                images.push(`${imageDirectory}/Kitchen/PXL_20211123_154453447.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150803578.jpg`);
                images.push(`${imageDirectory}/Outside/Backyard-PXL_20211123_150844501.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150426767.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150442790.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150827737.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150454571.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150356465.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150844501.jpg`);
                images.push(`${imageDirectory}/Outside/Front 2-PXL_20211123_150727223.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150727223.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150713391.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150855332.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150404323.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3190.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3201.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3187.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3200.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3191.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3196.heic`);
                images.push(`${imageDirectory}/Basement/PXL_20211123_161633327.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3197.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3198.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3194.heic`);
                images.push(`${imageDirectory}/Basement/PXL_20211123_162251368.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3195.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3204.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3203.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3192.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3188.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3189.heic`);
                images.push(`${imageDirectory}/Basement/PXL_20211123_161529751.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3193.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3202.heic`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155322977.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155506136.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155358832.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3155.heic`);
                images.push(`${imageDirectory}/Bed1/IMG_3158.heic`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155343241.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3157.heic`);
                images.push(`${imageDirectory}/Bed1/IMG_3156.heic`);
                images.push(`${imageDirectory}/Bed1/IMG_3160.heic`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155453512.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3169.heic`);
                images.push(`${imageDirectory}/Bed2/IMG_3173.heic`);
                images.push(`${imageDirectory}/Bed2/IMG_3172.heic`);
                images.push(`${imageDirectory}/Bed2/IMG_3168.heic`);
                images.push(`${imageDirectory}/Bed2/IMG_3175.heic`);
                images.push(`${imageDirectory}/Bed2/IMG_3174.heic`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152200266.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152141718.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152434979.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152442961.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3176.heic`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_153028250.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152506376.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152216854.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3167.heic`);
                images.push(`${imageDirectory}/Bed2/IMG_3171.heic`);
                images.push(`${imageDirectory}/Bed2/IMG_3170.heic`);
                images.push(`${imageDirectory}/Bed3/IMG_3181.heic`);
                images.push(`${imageDirectory}/Bed3/IMG_3182.heic`);
                images.push(`${imageDirectory}/Bed3/IMG_3183.heic`);
                images.push(`${imageDirectory}/Bed3/IMG_3184.heic`);
                images.push(`${imageDirectory}/Bath1/IMG_3159.heic`);
                images.push(`${imageDirectory}/Bath1/PXL_20211123_155530218.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20211123_154701660.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152830440.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152727736.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152908906.jpg`);
                images.push(`${imageDirectory}/Bath2/IMG_3179.heic`);
                images.push(`${imageDirectory}/Bath2/IMG_3180.heic`);
                images.push(`${imageDirectory}/Bath2/IMG_3178.heic`);
                images.push(`${imageDirectory}/Bath2/IMG_3177.heic`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152848524.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152704247.jpg`);
                images.push(`${imageDirectory}/Laundry/IMG_3199.heic`);
                images.push(`${imageDirectory}/Other/IMG_3165.heic`);
                images.push(`${imageDirectory}/Other/IMG_3164.heic`);
                images.push(`${imageDirectory}/Other/IMG_3163.heic`);
                images.push(`${imageDirectory}/Other/IMG_3162.heic`);
                images.push(`${imageDirectory}/Other/IMG_3161.heic`);
                images.push(`${imageDirectory}/Other/IMG_3166.heic`);
                break;
            case 'Living':
                images.push(`${imageDirectory}/Living/IMG_3149.heic`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153413505.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153333463.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153122837.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_152604210.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153329505.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153446948.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153347831.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3147.heic`);
                images.push(`${imageDirectory}/Living/IMG_3185.heic`);
                break;
            case 'Dining':
                images.push(`${imageDirectory}/Dining/IMG_3145.heic`);
                images.push(`${imageDirectory}/Dining/IMG_3146.heic`);
                break;
            case 'Kitchen':
                images.push(`${imageDirectory}/Kitchen/PXL_20211123_154453447.jpg`);
                break;
            case 'Outside':
                images.push(`${imageDirectory}/Outside/PXL_20211123_150803578.jpg`);
                images.push(`${imageDirectory}/Outside/Backyard-PXL_20211123_150844501.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150426767.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150442790.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150827737.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150454571.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150356465.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150844501.jpg`);
                images.push(`${imageDirectory}/Outside/Front 2-PXL_20211123_150727223.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150727223.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150713391.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150855332.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20211123_150404323.jpg`);
                break;
            case 'Basement':
                images.push(`${imageDirectory}/Basement/IMG_3190.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3201.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3187.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3200.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3191.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3196.heic`);
                images.push(`${imageDirectory}/Basement/PXL_20211123_161633327.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3197.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3198.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3194.heic`);
                images.push(`${imageDirectory}/Basement/PXL_20211123_162251368.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3195.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3204.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3203.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3192.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3188.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3189.heic`);
                images.push(`${imageDirectory}/Basement/PXL_20211123_161529751.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3193.heic`);
                images.push(`${imageDirectory}/Basement/IMG_3202.heic`);
                break;
            case 'Bed1':
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155322977.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155506136.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155358832.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3155.heic`);
                images.push(`${imageDirectory}/Bed1/IMG_3158.heic`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155343241.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3157.heic`);
                images.push(`${imageDirectory}/Bed1/IMG_3156.heic`);
                images.push(`${imageDirectory}/Bed1/IMG_3160.heic`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155453512.jpg`);
                break;
            case 'Bed2':
                images.push(`${imageDirectory}/Bed2/IMG_3169.heic`);
                images.push(`${imageDirectory}/Bed2/IMG_3173.heic`);
                images.push(`${imageDirectory}/Bed2/IMG_3172.heic`);
                images.push(`${imageDirectory}/Bed2/IMG_3168.heic`);
                images.push(`${imageDirectory}/Bed2/IMG_3175.heic`);
                images.push(`${imageDirectory}/Bed2/IMG_3174.heic`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152200266.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152141718.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152434979.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152442961.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3176.heic`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_153028250.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152506376.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152216854.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3167.heic`);
                images.push(`${imageDirectory}/Bed2/IMG_3171.heic`);
                images.push(`${imageDirectory}/Bed2/IMG_3170.heic`);
                break;
            case 'Bed3':
                images.push(`${imageDirectory}/Bed3/IMG_3181.heic`);
                images.push(`${imageDirectory}/Bed3/IMG_3182.heic`);
                images.push(`${imageDirectory}/Bed3/IMG_3183.heic`);
                images.push(`${imageDirectory}/Bed3/IMG_3184.heic`);
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                images.push(`${imageDirectory}/Bath1/IMG_3159.heic`);
                images.push(`${imageDirectory}/Bath1/PXL_20211123_155530218.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20211123_154701660.jpg`);
                break;
            case 'Bath2':
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152830440.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152727736.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152908906.jpg`);
                images.push(`${imageDirectory}/Bath2/IMG_3179.heic`);
                images.push(`${imageDirectory}/Bath2/IMG_3180.heic`);
                images.push(`${imageDirectory}/Bath2/IMG_3178.heic`);
                images.push(`${imageDirectory}/Bath2/IMG_3177.heic`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152848524.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152704247.jpg`);
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                images.push(`${imageDirectory}/Laundry/IMG_3199.heic`);
                break;
            case 'Office/Den':
                break;
            case 'Other':
                images.push(`${imageDirectory}/Other/IMG_3165.heic`);
                images.push(`${imageDirectory}/Other/IMG_3164.heic`);
                images.push(`${imageDirectory}/Other/IMG_3163.heic`);
                images.push(`${imageDirectory}/Other/IMG_3162.heic`);
                images.push(`${imageDirectory}/Other/IMG_3161.heic`);
                images.push(`${imageDirectory}/Other/IMG_3166.heic`);
                break;
        }
        break;
}
// **DONT REMOVE LINE** END4231

function adjustSlideWidth(slide, imgWidth, imgHeight) {
    if (imgWidth / imgHeight < .6) { // .5625 ratio 9:16
        slide.style.width = '12.6%'; // Example width for horizontal images
    } else if(imgWidth / imgHeight < .8) { // .75 ratio 3:4
        slide.style.width = '28%'; // Example width for horizontal images
    } else if(imgWidth / imgHeight < 1.5) { // 1.333 ratio 4:3
        slide.style.width = '50%'; // Example width for vertical images
    } else { // 1.7817 ratio 16:9
        slide.style.width = '40%'; // Example width for horizontal images
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

// const roomButtons = document.querySelectorAll('.room_button');
// roomButtons.forEach(button => {
//     const url = new URL(button.href);  // Create a URL object
//     const searchParams = url.searchParams;
 
//     searchParams.set('imageDirectory', imageDirectory); 
 
//     button.href = url.toString(); // Update the 'href' 
//  });

 const dropdown = document.getElementById('room_dropdown');

 const roomSelect = document.getElementById('room_dropdown');

 function saveSelectedOption() {
    const selectedValue = roomSelect.value;
    localStorage.setItem('selectedRoom', selectedValue);
  }

function loadSelectedOption() {
    const storedValue = localStorage.getItem('selectedRoom');
    if (storedValue) {
      roomSelect.value = storedValue;
    }
}

dropdown.addEventListener('change', function() {
    let selectedOption = this.options[this.selectedIndex];
    let originalHref = selectedOption.getAttribute('href');

    // Replace the PLACEHOLDER with the value from 'imageDirectory'
    let modifiedHref = originalHref.replace('PLACEHOLDER', imageDirectory); 

    saveSelectedOption();
    // Redirect to the modified URL
    window.location.href = modifiedHref;
});

window.addEventListener('load', loadSelectedOption);
