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
//   mainBeforeStyle.backgroundImage = `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, <span class="math-inline">\{opacity\}\)\), url\(</span>${newImageUrl})`;
//   mainElement.style.opacity = .5;
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
    case("903 Spring"):
        addressDisplay.textContent = '903 Spring Street, Ann Arbor, MI 48103';
        link = document.querySelector('option[rmknd="Outside"]');
        link.style.display = 'inline'
        switch(room){
            case 'All':
                images.push(`${imageDirectory}/Outside/2012-12-17_16-17-40_423.jpg`);
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                images.push(`${imageDirectory}/Outside/2012-12-17_16-17-40_423.jpg`);
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("102 Green Way"):
        addressDisplay.textContent = '102 Green Way Dr, Combined Locks, WI 54113';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("104 Green Way"):
        addressDisplay.textContent = '104 Green Way Dr, Combined Locks, WI 54113';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("5335 Brookview"):
        addressDisplay.textContent = '104 Green Way Dr, Combined Locks, WI 54113';
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
        link = document.querySelector('option[rmknd="Bath3"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Garage"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Laundry"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Other"]');
        link.style.display = 'inline'
        switch(room){
            case 'All':
                images.push(`${imageDirectory}/Living/IMG_3649.heic.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3611.heic.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3614.heic.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3612.heic.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3613.heic.jpg`);
                images.push(`${imageDirectory}/Dining/IMG_3616.heic.jpg`);
                images.push(`${imageDirectory}/Dining/IMG_3617.heic.jpg`);
                images.push(`${imageDirectory}/Dining/IMG_3615.heic.jpg`);
                images.push(`${imageDirectory}/Kitchen/IMG_3638.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3606.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3607.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3608.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3609.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3605.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3618.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3619.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3650.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3635.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3634.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3628.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3629.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3632.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3633.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3637.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3631.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3641.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3640.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3645.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3644.heic.jpg`);
                images.push(`${imageDirectory}/Bed3/IMG_3646.heic.jpg`);
                images.push(`${imageDirectory}/Bed3/IMG_3647.heic.jpg`);
                images.push(`${imageDirectory}/Bath1/IMG_3642.heic.jpg`);
                images.push(`${imageDirectory}/Bath1/IMG_3643.heic.jpg`);
                images.push(`${imageDirectory}/Bath2/IMG_3620.heic.jpg`);
                images.push(`${imageDirectory}/Bath3/IMG_3625.heic.jpg`);
                images.push(`${imageDirectory}/Bath3/IMG_3626.heic.jpg`);
                images.push(`${imageDirectory}/Bath3/IMG_3627.heic.jpg`);
                images.push(`${imageDirectory}/Garage/IMG_3623.heic.jpg`);
                images.push(`${imageDirectory}/Garage/IMG_3624.heic.jpg`);
                images.push(`${imageDirectory}/Laundry/IMG_3621.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3648.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3622.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3639.heic.jpg`);
                break;
            case 'Living':
                images.push(`${imageDirectory}/Living/IMG_3649.heic.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3611.heic.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3614.heic.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3612.heic.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3613.heic.jpg`);
                break;
            case 'Dining':
                images.push(`${imageDirectory}/Dining/IMG_3616.heic.jpg`);
                images.push(`${imageDirectory}/Dining/IMG_3617.heic.jpg`);
                images.push(`${imageDirectory}/Dining/IMG_3615.heic.jpg`);
                break;
            case 'Kitchen':
                images.push(`${imageDirectory}/Kitchen/IMG_3638.heic.jpg`);
                break;
            case 'Outside':
                images.push(`${imageDirectory}/Outside/IMG_3606.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3607.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3608.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3609.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3605.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3618.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3619.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3650.heic.jpg`);
                break;
            case 'Basement':
                images.push(`${imageDirectory}/Basement/IMG_3635.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3634.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3628.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3629.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3632.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3633.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3637.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3631.heic.jpg`);
                break;
            case 'Bed1':
                images.push(`${imageDirectory}/Bed1/IMG_3641.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3640.heic.jpg`);
                break;
            case 'Bed2':
                images.push(`${imageDirectory}/Bed2/IMG_3645.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3644.heic.jpg`);
                break;
            case 'Bed3':
                images.push(`${imageDirectory}/Bed3/IMG_3646.heic.jpg`);
                images.push(`${imageDirectory}/Bed3/IMG_3647.heic.jpg`);
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                images.push(`${imageDirectory}/Bath1/IMG_3642.heic.jpg`);
                images.push(`${imageDirectory}/Bath1/IMG_3643.heic.jpg`);
                break;
            case 'Bath2':
                images.push(`${imageDirectory}/Bath2/IMG_3620.heic.jpg`);
                break;
            case 'Bath3':
                images.push(`${imageDirectory}/Bath3/IMG_3625.heic.jpg`);
                images.push(`${imageDirectory}/Bath3/IMG_3626.heic.jpg`);
                images.push(`${imageDirectory}/Bath3/IMG_3627.heic.jpg`);
                break;
            case 'Garage':
                images.push(`${imageDirectory}/Garage/IMG_3623.heic.jpg`);
                images.push(`${imageDirectory}/Garage/IMG_3624.heic.jpg`);
                break;
            case 'Laundry':
                images.push(`${imageDirectory}/Laundry/IMG_3621.heic.jpg`);
                break;
            case 'Office/Den':
                break;
            case 'Other':
                images.push(`${imageDirectory}/Other/IMG_3648.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3622.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3639.heic.jpg`);
                break;
        }
        break;
    case("5337 Brookview"):
        addressDisplay.textContent = '5335 Brookview Dr, Appleton, WI 54913';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("N1841 Reimer"):
        addressDisplay.textContent = '5337 Brookview Dr, Appleton, WI 54913';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("N1843 Reimer"):
        addressDisplay.textContent = 'N1841 Reimer Ct, Greenville, WI 54942';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("1749 Marissa"):
        addressDisplay.textContent = '1749 Marissa Ct, De Pere, WI 54115';
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
                images.push(`${imageDirectory}/Living/PXL_20210228_161326530.jpg`);
                images.push(`${imageDirectory}/Living/20210227_161435.jpg`);
                images.push(`${imageDirectory}/Living/20210227_161353.jpg`);
                images.push(`${imageDirectory}/Living/20210227_161308.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20210228_161402519.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20210228_162623904.jpg`);
                images.push(`${imageDirectory}/Living/20210227_161405.jpg`);
                images.push(`${imageDirectory}/Dining/PXL_20210228_160443085.jpg`);
                images.push(`${imageDirectory}/Dining/20210227_173133.jpg`);
                images.push(`${imageDirectory}/Dining/20210227_173130.jpg`);
                images.push(`${imageDirectory}/Dining/20210227_173149.jpg`);
                images.push(`${imageDirectory}/Dining/PXL_20210228_161303583.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20210228_161226022.jpg`);
                images.push(`${imageDirectory}/Kitchen/20210227_173707.jpg`);
                images.push(`${imageDirectory}/Kitchen/20210227_173658.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20210228_162541568.jpg`);
                images.push(`${imageDirectory}/Kitchen/20210227_173648.jpg`);
                images.push(`${imageDirectory}/Kitchen/20210227_173702.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20210228_162533029.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20220917_151914847.jpg`);
                images.push(`${imageDirectory}/Outside/20210228_115615.jpg`);
                images.push(`${imageDirectory}/Outside/20210228_115600.jpg`);
                images.push(`${imageDirectory}/Outside/image (2).jpg`);
                images.push(`${imageDirectory}/Outside/20210228_115639.jpg`);
                images.push(`${imageDirectory}/Outside/20210228_115637.jpg`);
                images.push(`${imageDirectory}/Outside/20210228_115547.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20221028_222133080.jpg`);
                images.push(`${imageDirectory}/Basement/20210228_115313.jpg`);
                images.push(`${imageDirectory}/Basement/20210228_115307.jpg`);
                images.push(`${imageDirectory}/Basement/20210228_115322.jpg`);
                images.push(`${imageDirectory}/Bed1/20210227_160850.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20210228_161826279.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20210228_161943255.jpg`);
                images.push(`${imageDirectory}/Bed1/20210227_160822.jpg`);
                images.push(`${imageDirectory}/Bed1/20210228_115200.jpg`);
                images.push(`${imageDirectory}/Bed1/20210228_115216.jpg`);
                images.push(`${imageDirectory}/Bed1/20210227_160813.jpg`);
                images.push(`${imageDirectory}/Bed1/20210228_115208.jpg`);
                images.push(`${imageDirectory}/Bed1/20210227_160810.jpg`);
                images.push(`${imageDirectory}/Bed1/20210227_160838.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20210228_161919874.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20210228_162104120.jpg`);
                images.push(`${imageDirectory}/Bed2/20210227_161146.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20210228_162225138.jpg`);
                images.push(`${imageDirectory}/Bed2/20210228_115231.jpg`);
                images.push(`${imageDirectory}/Bed2/20210228_115236.jpg`);
                images.push(`${imageDirectory}/Bed2/20210227_161138.jpg`);
                images.push(`${imageDirectory}/Bed3/PXL_20210228_162112179.jpg`);
                images.push(`${imageDirectory}/Bed3/20210227_161124.jpg`);
                images.push(`${imageDirectory}/Bed3/20210227_161115.jpg`);
                images.push(`${imageDirectory}/Bed3/PXL_20210228_162207566.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20210228_161115033.jpg`);
                images.push(`${imageDirectory}/Bath1/20210227_173257.jpg`);
                images.push(`${imageDirectory}/Bath1/20210227_173323.jpg`);
                images.push(`${imageDirectory}/Bath1/20210227_173311.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20210228_161009374.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20210228_161030457.jpg`);
                images.push(`${imageDirectory}/Bath2/20210227_160800.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20210228_161747443.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20210228_161718609.jpg`);
                images.push(`${imageDirectory}/Bath2/20210227_160724.jpg`);
                images.push(`${imageDirectory}/Garage/20210228_115421.jpg`);
                images.push(`${imageDirectory}/Garage/20210228_115432.jpg`);
                images.push(`${imageDirectory}/Laundry/PXL_20210228_160708673.jpg`);
                images.push(`${imageDirectory}/Other/20210227_161008.jpg`);
                images.push(`${imageDirectory}/Other/20210228_115405.jpg`);
                images.push(`${imageDirectory}/Other/20210228_115408.jpg`);
                images.push(`${imageDirectory}/Other/20210228_115828.jpg`);
                break;
            case 'Living':
                images.push(`${imageDirectory}/Living/PXL_20210228_161326530.jpg`);
                images.push(`${imageDirectory}/Living/20210227_161435.jpg`);
                images.push(`${imageDirectory}/Living/20210227_161353.jpg`);
                images.push(`${imageDirectory}/Living/20210227_161308.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20210228_161402519.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20210228_162623904.jpg`);
                images.push(`${imageDirectory}/Living/20210227_161405.jpg`);
                break;
            case 'Dining':
                images.push(`${imageDirectory}/Dining/PXL_20210228_160443085.jpg`);
                images.push(`${imageDirectory}/Dining/20210227_173133.jpg`);
                images.push(`${imageDirectory}/Dining/20210227_173130.jpg`);
                images.push(`${imageDirectory}/Dining/20210227_173149.jpg`);
                images.push(`${imageDirectory}/Dining/PXL_20210228_161303583.jpg`);
                break;
            case 'Kitchen':
                images.push(`${imageDirectory}/Kitchen/PXL_20210228_161226022.jpg`);
                images.push(`${imageDirectory}/Kitchen/20210227_173707.jpg`);
                images.push(`${imageDirectory}/Kitchen/20210227_173658.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20210228_162541568.jpg`);
                images.push(`${imageDirectory}/Kitchen/20210227_173648.jpg`);
                images.push(`${imageDirectory}/Kitchen/20210227_173702.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20210228_162533029.jpg`);
                break;
            case 'Outside':
                images.push(`${imageDirectory}/Outside/PXL_20220917_151914847.jpg`);
                images.push(`${imageDirectory}/Outside/20210228_115615.jpg`);
                images.push(`${imageDirectory}/Outside/20210228_115600.jpg`);
                images.push(`${imageDirectory}/Outside/image (2).jpg`);
                images.push(`${imageDirectory}/Outside/20210228_115639.jpg`);
                images.push(`${imageDirectory}/Outside/20210228_115637.jpg`);
                images.push(`${imageDirectory}/Outside/20210228_115547.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20221028_222133080.jpg`);
                break;
            case 'Basement':
                images.push(`${imageDirectory}/Basement/20210228_115313.jpg`);
                images.push(`${imageDirectory}/Basement/20210228_115307.jpg`);
                images.push(`${imageDirectory}/Basement/20210228_115322.jpg`);
                break;
            case 'Bed1':
                images.push(`${imageDirectory}/Bed1/20210227_160850.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20210228_161826279.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20210228_161943255.jpg`);
                images.push(`${imageDirectory}/Bed1/20210227_160822.jpg`);
                images.push(`${imageDirectory}/Bed1/20210228_115200.jpg`);
                images.push(`${imageDirectory}/Bed1/20210228_115216.jpg`);
                images.push(`${imageDirectory}/Bed1/20210227_160813.jpg`);
                images.push(`${imageDirectory}/Bed1/20210228_115208.jpg`);
                images.push(`${imageDirectory}/Bed1/20210227_160810.jpg`);
                images.push(`${imageDirectory}/Bed1/20210227_160838.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20210228_161919874.jpg`);
                break;
            case 'Bed2':
                images.push(`${imageDirectory}/Bed2/PXL_20210228_162104120.jpg`);
                images.push(`${imageDirectory}/Bed2/20210227_161146.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20210228_162225138.jpg`);
                images.push(`${imageDirectory}/Bed2/20210228_115231.jpg`);
                images.push(`${imageDirectory}/Bed2/20210228_115236.jpg`);
                images.push(`${imageDirectory}/Bed2/20210227_161138.jpg`);
                break;
            case 'Bed3':
                images.push(`${imageDirectory}/Bed3/PXL_20210228_162112179.jpg`);
                images.push(`${imageDirectory}/Bed3/20210227_161124.jpg`);
                images.push(`${imageDirectory}/Bed3/20210227_161115.jpg`);
                images.push(`${imageDirectory}/Bed3/PXL_20210228_162207566.jpg`);
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                images.push(`${imageDirectory}/Bath1/PXL_20210228_161115033.jpg`);
                images.push(`${imageDirectory}/Bath1/20210227_173257.jpg`);
                images.push(`${imageDirectory}/Bath1/20210227_173323.jpg`);
                images.push(`${imageDirectory}/Bath1/20210227_173311.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20210228_161009374.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20210228_161030457.jpg`);
                break;
            case 'Bath2':
                images.push(`${imageDirectory}/Bath2/20210227_160800.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20210228_161747443.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20210228_161718609.jpg`);
                images.push(`${imageDirectory}/Bath2/20210227_160724.jpg`);
                break;
            case 'Bath3':
                break;
            case 'Garage':
                images.push(`${imageDirectory}/Garage/20210228_115421.jpg`);
                images.push(`${imageDirectory}/Garage/20210228_115432.jpg`);
                break;
            case 'Laundry':
                images.push(`${imageDirectory}/Laundry/PXL_20210228_160708673.jpg`);
                break;
            case 'Office/Den':
                break;
            case 'Other':
                images.push(`${imageDirectory}/Other/20210227_161008.jpg`);
                images.push(`${imageDirectory}/Other/20210228_115405.jpg`);
                images.push(`${imageDirectory}/Other/20210228_115408.jpg`);
                images.push(`${imageDirectory}/Other/20210228_115828.jpg`);
                break;
        }
        break;
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
    case("2707A 4th"):
        addressDisplay.textContent = '2707 W. 4th St, Apt. A, Appleton, WI 54914';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("2707B 4th"):
        addressDisplay.textContent = '2707 W. 4th St, Apt. B, Appleton, WI 54914';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("2707C 4th"):
        addressDisplay.textContent = '2707 W. 4th St, Apt. C, Appleton, WI 54914';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("2707D 4th"):
        addressDisplay.textContent = '2707 W. 4th St, Apt. D, Appleton, WI 54914';
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
                images.push(`${imageDirectory}/Living/image_50383105.JPG`);
                images.push(`${imageDirectory}/Living/PXL_20220214_201739246.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20220214_201637536.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3341.heic.jpg`);
                images.push(`${imageDirectory}/Living/image_50429185.JPG`);
                images.push(`${imageDirectory}/Kitchen/PXL_20220214_202831888.jpg`);
                images.push(`${imageDirectory}/Kitchen/image_50430209.JPG`);
                images.push(`${imageDirectory}/Kitchen/PXL_20220214_201356516.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20220214_202838859.jpg`);
                images.push(`${imageDirectory}/Kitchen/image_67176961.JPG`);
                images.push(`${imageDirectory}/Outside/PXL_20220214_203603367.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3338.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3339.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3340.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3337.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3334.heic.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20220214_203208403.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3333.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3331.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20220214_202117106.jpg`);
                images.push(`${imageDirectory}/Bed1/image_50379777.JPG`);
                images.push(`${imageDirectory}/Bed1/image_50391553.JPG`);
                images.push(`${imageDirectory}/Bed1/image_50373377.JPG`);
                images.push(`${imageDirectory}/Bed2/PXL_20220214_202146806.jpg`);
                images.push(`${imageDirectory}/Bed2/image_50408705.JPG`);
                images.push(`${imageDirectory}/Bed2/image_50401793.JPG`);
                images.push(`${imageDirectory}/Bed3/PXL_20220214_202302073.jpg`);
                images.push(`${imageDirectory}/Bed3/image_50391809.JPG`);
                images.push(`${imageDirectory}/Bath1/image_67165953.JPG`);
                images.push(`${imageDirectory}/Bath1/PXL_20220214_201930449.jpg`);
                images.push(`${imageDirectory}/Bath1/image_67155713.JPG`);
                images.push(`${imageDirectory}/Bath2/PXL_20220214_201208107.jpg`);
                images.push(`${imageDirectory}/Bath2/image_67166721.JPG`);
                images.push(`${imageDirectory}/Bath2/image_67179777.JPG`);
                images.push(`${imageDirectory}/Garage/IMG_3335.heic.jpg`);
                images.push(`${imageDirectory}/Garage/IMG_3336.heic.jpg`);
                images.push(`${imageDirectory}/Laundry/IMG_3332.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3323.heic.jpg`);
                images.push(`${imageDirectory}/Other/image_67144961.JPG`);
                break;
            case 'Living':
                images.push(`${imageDirectory}/Living/image_50383105.JPG`);
                images.push(`${imageDirectory}/Living/PXL_20220214_201739246.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20220214_201637536.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3341.heic.jpg`);
                images.push(`${imageDirectory}/Living/image_50429185.JPG`);
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                images.push(`${imageDirectory}/Kitchen/PXL_20220214_202831888.jpg`);
                images.push(`${imageDirectory}/Kitchen/image_50430209.JPG`);
                images.push(`${imageDirectory}/Kitchen/PXL_20220214_201356516.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20220214_202838859.jpg`);
                images.push(`${imageDirectory}/Kitchen/image_67176961.JPG`);
                break;
            case 'Outside':
                images.push(`${imageDirectory}/Outside/PXL_20220214_203603367.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3338.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3339.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3340.heic.jpg`);
                images.push(`${imageDirectory}/Outside/IMG_3337.heic.jpg`);
                break;
            case 'Basement':
                images.push(`${imageDirectory}/Basement/IMG_3334.heic.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20220214_203208403.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3333.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3331.heic.jpg`);
                break;
            case 'Bed1':
                images.push(`${imageDirectory}/Bed1/PXL_20220214_202117106.jpg`);
                images.push(`${imageDirectory}/Bed1/image_50379777.JPG`);
                images.push(`${imageDirectory}/Bed1/image_50391553.JPG`);
                images.push(`${imageDirectory}/Bed1/image_50373377.JPG`);
                break;
            case 'Bed2':
                images.push(`${imageDirectory}/Bed2/PXL_20220214_202146806.jpg`);
                images.push(`${imageDirectory}/Bed2/image_50408705.JPG`);
                images.push(`${imageDirectory}/Bed2/image_50401793.JPG`);
                break;
            case 'Bed3':
                images.push(`${imageDirectory}/Bed3/PXL_20220214_202302073.jpg`);
                images.push(`${imageDirectory}/Bed3/image_50391809.JPG`);
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                images.push(`${imageDirectory}/Bath1/image_67165953.JPG`);
                images.push(`${imageDirectory}/Bath1/PXL_20220214_201930449.jpg`);
                images.push(`${imageDirectory}/Bath1/image_67155713.JPG`);
                break;
            case 'Bath2':
                images.push(`${imageDirectory}/Bath2/PXL_20220214_201208107.jpg`);
                images.push(`${imageDirectory}/Bath2/image_67166721.JPG`);
                images.push(`${imageDirectory}/Bath2/image_67179777.JPG`);
                break;
            case 'Bath3':
                break;
            case 'Garage':
                images.push(`${imageDirectory}/Garage/IMG_3335.heic.jpg`);
                images.push(`${imageDirectory}/Garage/IMG_3336.heic.jpg`);
                break;
            case 'Laundry':
                images.push(`${imageDirectory}/Laundry/IMG_3332.heic.jpg`);
                break;
            case 'Office/Den':
                break;
            case 'Other':
                images.push(`${imageDirectory}/Other/IMG_3323.heic.jpg`);
                images.push(`${imageDirectory}/Other/image_67144961.JPG`);
                break;
        }
        break;
    case("2711A 4th"):
        addressDisplay.textContent = '2711 W. 4th St, Apt. A, Appleton, WI 54914';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("2711B 4th"):
        addressDisplay.textContent = '2711 W. 4th St, Apt. B, Appleton, WI 54914';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("2711C 4th"):
        addressDisplay.textContent = '2711 W. 4th St, Apt. C, Appleton, WI 54914';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("2711D 4th"):
        addressDisplay.textContent = '2711 W. 4th St, Apt. D, Appleton, WI 54914';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("2715A 4th"):
        addressDisplay.textContent = '2715 W. 4th St, Apt. A, Appleton, WI 54914';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("2715B 4th"):
        addressDisplay.textContent = '2715 W. 4th St, Apt. B, Appleton, WI 54914';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("2715C 4th"):
        addressDisplay.textContent = '2715 W. 4th St, Apt. C, Appleton, WI 54914';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
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
                images.push(`${imageDirectory}/Outside/2715 W Fourth St, Appleton (Brian Batley) Back.tiff.jpg`);
                images.push(`${imageDirectory}/Basement/image(10).jpg`);
                images.push(`${imageDirectory}/Basement/image(11).jpg`);
                images.push(`${imageDirectory}/Bed1/image(6).jpg`);
                images.push(`${imageDirectory}/Bed2/image(9).jpg`);
                images.push(`${imageDirectory}/Bed2/image(8).jpg`);
                images.push(`${imageDirectory}/Bed3/image(7).jpg`);
                images.push(`${imageDirectory}/Bath1/2715D W Fourth St, Appleton (Brian Batley) 0.5 Bath.tiff.jpg`);
                images.push(`${imageDirectory}/Bath1/image(4).jpg`);
                images.push(`${imageDirectory}/Bath1/image(3).jpg`);
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
                images.push(`${imageDirectory}/Outside/2715 W Fourth St, Appleton (Brian Batley) Back.tiff.jpg`);
                break;
            case 'Basement':
                images.push(`${imageDirectory}/Basement/image(10).jpg`);
                images.push(`${imageDirectory}/Basement/image(11).jpg`);
                break;
            case 'Bed1':
                images.push(`${imageDirectory}/Bed1/image(6).jpg`);
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
                images.push(`${imageDirectory}/Bath1/2715D W Fourth St, Appleton (Brian Batley) 0.5 Bath.tiff.jpg`);
                images.push(`${imageDirectory}/Bath1/image(4).jpg`);
                images.push(`${imageDirectory}/Bath1/image(3).jpg`);
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
        addressDisplay.textContent = '500 E. Alice St, Appleton, WI 54911';
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
                images.push(`${imageDirectory}/Living/PXL_20211123_153413505.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153333463.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153122837.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3185.heic.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_152604210.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3149.heic.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153329505.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153446948.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153347831.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3147.heic.jpg`);
                images.push(`${imageDirectory}/Dining/IMG_3145.heic.jpg`);
                images.push(`${imageDirectory}/Dining/IMG_3146.heic.jpg`);
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
                images.push(`${imageDirectory}/Basement/IMG_3195.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3194.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3203.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3202.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3188.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3189.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3204.heic.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20211123_161633327.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3192.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3193.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3198.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3200.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3201.heic.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20211123_162251368.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3196.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3197.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3191.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3190.heic.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20211123_161529751.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3187.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155322977.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155506136.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155358832.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3158.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3160.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3155.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155343241.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3157.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3156.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155453512.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3170.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3171.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3167.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3176.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152200266.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152141718.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152434979.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152442961.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3173.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3172.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_153028250.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152506376.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152216854.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3174.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3175.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3169.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3168.heic.jpg`);
                images.push(`${imageDirectory}/Bed3/IMG_3182.heic.jpg`);
                images.push(`${imageDirectory}/Bed3/IMG_3183.heic.jpg`);
                images.push(`${imageDirectory}/Bed3/IMG_3184.heic.jpg`);
                images.push(`${imageDirectory}/Bed3/IMG_3181.heic.jpg`);
                images.push(`${imageDirectory}/Bath1/IMG_3159.heic.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20211123_155530218.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20211123_154701660.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152830440.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152727736.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152908906.jpg`);
                images.push(`${imageDirectory}/Bath2/IMG_3177.heic.jpg`);
                images.push(`${imageDirectory}/Bath2/IMG_3180.heic.jpg`);
                images.push(`${imageDirectory}/Bath2/IMG_3179.heic.jpg`);
                images.push(`${imageDirectory}/Bath2/IMG_3178.heic.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152848524.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152704247.jpg`);
                images.push(`${imageDirectory}/Laundry/IMG_3199.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3166.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3161.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3164.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3165.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3163.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3162.heic.jpg`);
                break;
            case 'Living':
                images.push(`${imageDirectory}/Living/PXL_20211123_153413505.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153333463.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153122837.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3185.heic.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_152604210.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3149.heic.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153329505.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153446948.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20211123_153347831.jpg`);
                images.push(`${imageDirectory}/Living/IMG_3147.heic.jpg`);
                break;
            case 'Dining':
                images.push(`${imageDirectory}/Dining/IMG_3145.heic.jpg`);
                images.push(`${imageDirectory}/Dining/IMG_3146.heic.jpg`);
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
                images.push(`${imageDirectory}/Basement/IMG_3195.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3194.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3203.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3202.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3188.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3189.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3204.heic.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20211123_161633327.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3192.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3193.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3198.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3200.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3201.heic.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20211123_162251368.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3196.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3197.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3191.heic.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3190.heic.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20211123_161529751.jpg`);
                images.push(`${imageDirectory}/Basement/IMG_3187.heic.jpg`);
                break;
            case 'Bed1':
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155322977.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155506136.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155358832.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3158.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3160.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3155.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155343241.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3157.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_3156.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20211123_155453512.jpg`);
                break;
            case 'Bed2':
                images.push(`${imageDirectory}/Bed2/IMG_3170.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3171.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3167.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3176.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152200266.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152141718.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152434979.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152442961.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3173.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3172.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_153028250.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152506376.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20211123_152216854.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3174.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3175.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3169.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_3168.heic.jpg`);
                break;
            case 'Bed3':
                images.push(`${imageDirectory}/Bed3/IMG_3182.heic.jpg`);
                images.push(`${imageDirectory}/Bed3/IMG_3183.heic.jpg`);
                images.push(`${imageDirectory}/Bed3/IMG_3184.heic.jpg`);
                images.push(`${imageDirectory}/Bed3/IMG_3181.heic.jpg`);
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                images.push(`${imageDirectory}/Bath1/IMG_3159.heic.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20211123_155530218.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20211123_154701660.jpg`);
                break;
            case 'Bath2':
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152830440.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152727736.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152908906.jpg`);
                images.push(`${imageDirectory}/Bath2/IMG_3177.heic.jpg`);
                images.push(`${imageDirectory}/Bath2/IMG_3180.heic.jpg`);
                images.push(`${imageDirectory}/Bath2/IMG_3179.heic.jpg`);
                images.push(`${imageDirectory}/Bath2/IMG_3178.heic.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152848524.jpg`);
                images.push(`${imageDirectory}/Bath2/PXL_20211123_152704247.jpg`);
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                images.push(`${imageDirectory}/Laundry/IMG_3199.heic.jpg`);
                break;
            case 'Office/Den':
                break;
            case 'Other':
                images.push(`${imageDirectory}/Other/IMG_3166.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3161.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3164.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3165.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3163.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_3162.heic.jpg`);
                break;
        }
        break;
    case("1708 E Main"):
        addressDisplay.textContent = '1708 E. Main St, Little Chute, WI 54140';
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
                images.push(`${imageDirectory}/Living/IMG_0506.JPG`);
                images.push(`${imageDirectory}/Living/IMG_0509.JPG`);
                images.push(`${imageDirectory}/Living/IMG_7667.heic.jpg`);
                images.push(`${imageDirectory}/Dining/IMG_7675.heic.jpg`);
                images.push(`${imageDirectory}/Dining/IMG_0504.JPG`);
                images.push(`${imageDirectory}/Dining/IMG_0505.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_7663.heic.jpg`);
                images.push(`${imageDirectory}/Kitchen/IMG_0498.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0499.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0501.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_7664.heic.jpg`);
                images.push(`${imageDirectory}/Kitchen/IMG_7665.heic.jpg`);
                images.push(`${imageDirectory}/Kitchen/IMG_0500.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0502.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0503.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0497.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0513.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0512.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0510.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0511.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0515.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0517.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0519.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0518.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0521.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0489.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0488.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0485.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0491.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0490.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0484.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0492.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0486.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0487.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_7669.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_7668.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_0467.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0466.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0465.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0468.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0469.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_7670.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_7671.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_7672.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_0477.JPG`);
                images.push(`${imageDirectory}/Bed2/IMG_0479.JPG`);
                images.push(`${imageDirectory}/Bed2/IMG_0478.JPG`);
                images.push(`${imageDirectory}/Bed2/IMG_0483.JPG`);
                images.push(`${imageDirectory}/Bed2/IMG_0482.JPG`);
                images.push(`${imageDirectory}/Bed2/IMG_0480.JPG`);
                images.push(`${imageDirectory}/Bed2/IMG_0481.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_7673.heic.jpg`);
                images.push(`${imageDirectory}/Bath1/IMG_0475.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0474.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0476.JPG`);
                images.push(`${imageDirectory}/Bath2/IMG_0473.JPG`);
                images.push(`${imageDirectory}/Bath2/IMG_0472.JPG`);
                images.push(`${imageDirectory}/Bath2/IMG_0470.JPG`);
                images.push(`${imageDirectory}/Bath2/IMG_0471.JPG`);
                images.push(`${imageDirectory}/Garage/IMG_0514.JPG`);
                images.push(`${imageDirectory}/Garage/IMG_0520.JPG`);
                images.push(`${imageDirectory}/Laundry/IMG_0496.JPG`);
                images.push(`${imageDirectory}/Laundry/IMG_0494.JPG`);
                images.push(`${imageDirectory}/Laundry/IMG_7660.heic.jpg`);
                images.push(`${imageDirectory}/Laundry/IMG_7661.heic.jpg`);
                images.push(`${imageDirectory}/Laundry/IMG_0495.JPG`);
                images.push(`${imageDirectory}/Other/IMG_7662.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_7674.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_0507.JPG`);
                images.push(`${imageDirectory}/Other/IMG_0493.JPG`);
                images.push(`${imageDirectory}/Other/IMG_0508.JPG`);
                images.push(`${imageDirectory}/Other/IMG_7659.heic.jpg`);
                break;
            case 'Living':
                images.push(`${imageDirectory}/Living/IMG_0506.JPG`);
                images.push(`${imageDirectory}/Living/IMG_0509.JPG`);
                images.push(`${imageDirectory}/Living/IMG_7667.heic.jpg`);
                break;
            case 'Dining':
                images.push(`${imageDirectory}/Dining/IMG_7675.heic.jpg`);
                images.push(`${imageDirectory}/Dining/IMG_0504.JPG`);
                images.push(`${imageDirectory}/Dining/IMG_0505.JPG`);
                break;
            case 'Kitchen':
                images.push(`${imageDirectory}/Kitchen/IMG_7663.heic.jpg`);
                images.push(`${imageDirectory}/Kitchen/IMG_0498.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0499.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0501.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_7664.heic.jpg`);
                images.push(`${imageDirectory}/Kitchen/IMG_7665.heic.jpg`);
                images.push(`${imageDirectory}/Kitchen/IMG_0500.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0502.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0503.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0497.JPG`);
                break;
            case 'Outside':
                images.push(`${imageDirectory}/Outside/IMG_0513.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0512.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0510.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0511.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0515.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0517.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0519.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0518.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0521.JPG`);
                break;
            case 'Basement':
                images.push(`${imageDirectory}/Basement/IMG_0489.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0488.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0485.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0491.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0490.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0484.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0492.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0486.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0487.JPG`);
                break;
            case 'Bed1':
                images.push(`${imageDirectory}/Bed1/IMG_7669.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_7668.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_0467.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0466.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0465.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0468.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0469.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_7670.heic.jpg`);
                images.push(`${imageDirectory}/Bed1/IMG_7671.heic.jpg`);
                break;
            case 'Bed2':
                images.push(`${imageDirectory}/Bed2/IMG_7672.heic.jpg`);
                images.push(`${imageDirectory}/Bed2/IMG_0477.JPG`);
                images.push(`${imageDirectory}/Bed2/IMG_0479.JPG`);
                images.push(`${imageDirectory}/Bed2/IMG_0478.JPG`);
                images.push(`${imageDirectory}/Bed2/IMG_0483.JPG`);
                images.push(`${imageDirectory}/Bed2/IMG_0482.JPG`);
                images.push(`${imageDirectory}/Bed2/IMG_0480.JPG`);
                images.push(`${imageDirectory}/Bed2/IMG_0481.JPG`);
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                images.push(`${imageDirectory}/Bath1/IMG_7673.heic.jpg`);
                images.push(`${imageDirectory}/Bath1/IMG_0475.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0474.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0476.JPG`);
                break;
            case 'Bath2':
                images.push(`${imageDirectory}/Bath2/IMG_0473.JPG`);
                images.push(`${imageDirectory}/Bath2/IMG_0472.JPG`);
                images.push(`${imageDirectory}/Bath2/IMG_0470.JPG`);
                images.push(`${imageDirectory}/Bath2/IMG_0471.JPG`);
                break;
            case 'Bath3':
                break;
            case 'Garage':
                images.push(`${imageDirectory}/Garage/IMG_0514.JPG`);
                images.push(`${imageDirectory}/Garage/IMG_0520.JPG`);
                break;
            case 'Laundry':
                images.push(`${imageDirectory}/Laundry/IMG_0496.JPG`);
                images.push(`${imageDirectory}/Laundry/IMG_0494.JPG`);
                images.push(`${imageDirectory}/Laundry/IMG_7660.heic.jpg`);
                images.push(`${imageDirectory}/Laundry/IMG_7661.heic.jpg`);
                images.push(`${imageDirectory}/Laundry/IMG_0495.JPG`);
                break;
            case 'Office/Den':
                break;
            case 'Other':
                images.push(`${imageDirectory}/Other/IMG_7662.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_7674.heic.jpg`);
                images.push(`${imageDirectory}/Other/IMG_0507.JPG`);
                images.push(`${imageDirectory}/Other/IMG_0493.JPG`);
                images.push(`${imageDirectory}/Other/IMG_0508.JPG`);
                images.push(`${imageDirectory}/Other/IMG_7659.heic.jpg`);
                break;
        }
        break;
    case("1710 E Main"):
        addressDisplay.textContent = '1710 E. Main St, Little Chute, WI 54140';
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
                images.push(`${imageDirectory}/Living/image_67128321.JPG`);
                images.push(`${imageDirectory}/Living/PXL_20230728_205854997.jpg`);
                images.push(`${imageDirectory}/Dining/PXL_20230728_212104036.jpg`);
                images.push(`${imageDirectory}/Dining/PXL_20230728_212057938.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230728_212221602.jpg`);
                images.push(`${imageDirectory}/Kitchen/image_50379009.JPG`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230728_212121999.jpg`);
                images.push(`${imageDirectory}/Kitchen/image_67199489.JPG`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230728_205921311.jpg`);
                images.push(`${imageDirectory}/Kitchen/image_67126273.JPG`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230728_212141191.jpg`);
                images.push(`${imageDirectory}/Outside/image_50726401.JPG`);
                images.push(`${imageDirectory}/Outside/image_50459905.JPG`);
                images.push(`${imageDirectory}/Outside/image_67193089.JPG`);
                images.push(`${imageDirectory}/Outside/PXL_20230728_210604181.jpg`);
                images.push(`${imageDirectory}/Outside/image_67234561.JPG`);
                images.push(`${imageDirectory}/Outside/PXL_20230728_210730246.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230728_210639724.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230728_210541118.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230728_210653158.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230728_210739236.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20230728_205720158.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20230728_205744784.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20230728_205803116.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230728_205428979.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230728_205403526.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230728_205445419.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230728_205415449.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230728_205344459.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20230728_205519726.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20230728_205539345.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20230728_205458453.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20230728_205601606.jpg`);
                images.push(`${imageDirectory}/Bath2/image_67128065.JPG`);
                images.push(`${imageDirectory}/Garage/PXL_20230728_212729252.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20230728_212803060.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20230728_212811777.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20230728_212827813.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20230728_212749806.jpg`);
                images.push(`${imageDirectory}/Garage/image_50377729.JPG`);
                images.push(`${imageDirectory}/Laundry/image_67114497.JPG`);
                images.push(`${imageDirectory}/Laundry/PXL_20230728_205643417.jpg`);
                images.push(`${imageDirectory}/Laundry/PXL_20230728_205632415.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20230728_205700393.jpg`);
                images.push(`${imageDirectory}/Other/image_67183361.JPG`);
                images.push(`${imageDirectory}/Other/PXL_20230728_212317518.jpg`);
                break;
            case 'Living':
                images.push(`${imageDirectory}/Living/image_67128321.JPG`);
                images.push(`${imageDirectory}/Living/PXL_20230728_205854997.jpg`);
                break;
            case 'Dining':
                images.push(`${imageDirectory}/Dining/PXL_20230728_212104036.jpg`);
                images.push(`${imageDirectory}/Dining/PXL_20230728_212057938.jpg`);
                break;
            case 'Kitchen':
                images.push(`${imageDirectory}/Kitchen/PXL_20230728_212221602.jpg`);
                images.push(`${imageDirectory}/Kitchen/image_50379009.JPG`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230728_212121999.jpg`);
                images.push(`${imageDirectory}/Kitchen/image_67199489.JPG`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230728_205921311.jpg`);
                images.push(`${imageDirectory}/Kitchen/image_67126273.JPG`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230728_212141191.jpg`);
                break;
            case 'Outside':
                images.push(`${imageDirectory}/Outside/image_50726401.JPG`);
                images.push(`${imageDirectory}/Outside/image_50459905.JPG`);
                images.push(`${imageDirectory}/Outside/image_67193089.JPG`);
                images.push(`${imageDirectory}/Outside/PXL_20230728_210604181.jpg`);
                images.push(`${imageDirectory}/Outside/image_67234561.JPG`);
                images.push(`${imageDirectory}/Outside/PXL_20230728_210730246.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230728_210639724.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230728_210541118.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230728_210653158.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230728_210739236.jpg`);
                break;
            case 'Basement':
                images.push(`${imageDirectory}/Basement/PXL_20230728_205720158.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20230728_205744784.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20230728_205803116.jpg`);
                break;
            case 'Bed1':
                images.push(`${imageDirectory}/Bed1/PXL_20230728_205428979.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230728_205403526.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230728_205445419.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230728_205415449.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230728_205344459.jpg`);
                break;
            case 'Bed2':
                images.push(`${imageDirectory}/Bed2/PXL_20230728_205519726.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20230728_205539345.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20230728_205458453.jpg`);
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                images.push(`${imageDirectory}/Bath1/PXL_20230728_205601606.jpg`);
                break;
            case 'Bath2':
                images.push(`${imageDirectory}/Bath2/image_67128065.JPG`);
                break;
            case 'Bath3':
                break;
            case 'Garage':
                images.push(`${imageDirectory}/Garage/PXL_20230728_212729252.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20230728_212803060.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20230728_212811777.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20230728_212827813.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20230728_212749806.jpg`);
                images.push(`${imageDirectory}/Garage/image_50377729.JPG`);
                break;
            case 'Laundry':
                images.push(`${imageDirectory}/Laundry/image_67114497.JPG`);
                images.push(`${imageDirectory}/Laundry/PXL_20230728_205643417.jpg`);
                images.push(`${imageDirectory}/Laundry/PXL_20230728_205632415.jpg`);
                break;
            case 'Office/Den':
                break;
            case 'Other':
                images.push(`${imageDirectory}/Other/PXL_20230728_205700393.jpg`);
                images.push(`${imageDirectory}/Other/image_67183361.JPG`);
                images.push(`${imageDirectory}/Other/PXL_20230728_212317518.jpg`);
                break;
        }
        break;
    case("1716 E Main"):
        addressDisplay.textContent = '1716 E. Main St, Little Chute, WI 54140';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("1718 E Main"):
        addressDisplay.textContent = '1718 E. Main St, Little Chute, WI 54140';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("1783 Burgoyne"):
        addressDisplay.textContent = '1783 Burgoyne Ct, De Pere, WI 54115';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("1785 Burgoyne"):
        addressDisplay.textContent = '1785 Burgoyne Ct, De Pere, WI 54115';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("2021 Autumn"):
        addressDisplay.textContent = '2021 Autumn Ln, Kaukauna, WI 54130';
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
        link = document.querySelector('option[rmknd="Bath1"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Garage"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Laundry"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Other"]');
        link.style.display = 'inline'
        switch(room){
            case 'All':
                images.push(`${imageDirectory}/Living/IMG_0298.JPG`);
                images.push(`${imageDirectory}/Living/IMG_0299.JPG`);
                images.push(`${imageDirectory}/Living/IMG_0296.JPG`);
                images.push(`${imageDirectory}/Living/IMG_0294.JPG`);
                images.push(`${imageDirectory}/Living/IMG_0295.JPG`);
                images.push(`${imageDirectory}/Dining/IMG_0321.JPG`);
                images.push(`${imageDirectory}/Dining/IMG_0324.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0301.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0307.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0306.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0305.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0320.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0308.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0323.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0322.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0326.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0325.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0267.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0266.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0265.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0268.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0269.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0275.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0274.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0276.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0277.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0310.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0311.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0280.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0281.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0279.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0278.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0260.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0258.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0259.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0257.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0256.JPG`);
                images.push(`${imageDirectory}/Bed2/IMG_0254.JPG`);
                images.push(`${imageDirectory}/Bed2/IMG_0255.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0288.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0283.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0282.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0285.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0284.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0286.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0287.JPG`);
                images.push(`${imageDirectory}/Garage/IMG_0262.JPG`);
                images.push(`${imageDirectory}/Garage/IMG_0263.JPG`);
                images.push(`${imageDirectory}/Laundry/IMG_0289.JPG`);
                images.push(`${imageDirectory}/Laundry/IMG_0291.JPG`);
                images.push(`${imageDirectory}/Laundry/IMG_0290.JPG`);
                images.push(`${imageDirectory}/Laundry/IMG_0292.JPG`);
                images.push(`${imageDirectory}/Laundry/IMG_0293.JPG`);
                images.push(`${imageDirectory}/Other/IMG_0300.JPG`);
                images.push(`${imageDirectory}/Other/IMG_0302.JPG`);
                images.push(`${imageDirectory}/Other/IMG_0303.JPG`);
                images.push(`${imageDirectory}/Other/IMG_0304.JPG`);
                images.push(`${imageDirectory}/Other/IMG_0297.JPG`);
                break;
            case 'Living':
                images.push(`${imageDirectory}/Living/IMG_0298.JPG`);
                images.push(`${imageDirectory}/Living/IMG_0299.JPG`);
                images.push(`${imageDirectory}/Living/IMG_0296.JPG`);
                images.push(`${imageDirectory}/Living/IMG_0294.JPG`);
                images.push(`${imageDirectory}/Living/IMG_0295.JPG`);
                break;
            case 'Dining':
                images.push(`${imageDirectory}/Dining/IMG_0321.JPG`);
                images.push(`${imageDirectory}/Dining/IMG_0324.JPG`);
                break;
            case 'Kitchen':
                images.push(`${imageDirectory}/Kitchen/IMG_0301.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0307.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0306.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0305.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0320.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0308.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0323.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0322.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0326.JPG`);
                images.push(`${imageDirectory}/Kitchen/IMG_0325.JPG`);
                break;
            case 'Outside':
                images.push(`${imageDirectory}/Outside/IMG_0267.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0266.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0265.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0268.JPG`);
                images.push(`${imageDirectory}/Outside/IMG_0269.JPG`);
                break;
            case 'Basement':
                images.push(`${imageDirectory}/Basement/IMG_0275.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0274.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0276.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0277.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0310.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0311.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0280.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0281.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0279.JPG`);
                images.push(`${imageDirectory}/Basement/IMG_0278.JPG`);
                break;
            case 'Bed1':
                images.push(`${imageDirectory}/Bed1/IMG_0260.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0258.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0259.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0257.JPG`);
                images.push(`${imageDirectory}/Bed1/IMG_0256.JPG`);
                break;
            case 'Bed2':
                images.push(`${imageDirectory}/Bed2/IMG_0254.JPG`);
                images.push(`${imageDirectory}/Bed2/IMG_0255.JPG`);
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                images.push(`${imageDirectory}/Bath1/IMG_0288.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0283.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0282.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0285.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0284.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0286.JPG`);
                images.push(`${imageDirectory}/Bath1/IMG_0287.JPG`);
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                images.push(`${imageDirectory}/Garage/IMG_0262.JPG`);
                images.push(`${imageDirectory}/Garage/IMG_0263.JPG`);
                break;
            case 'Laundry':
                images.push(`${imageDirectory}/Laundry/IMG_0289.JPG`);
                images.push(`${imageDirectory}/Laundry/IMG_0291.JPG`);
                images.push(`${imageDirectory}/Laundry/IMG_0290.JPG`);
                images.push(`${imageDirectory}/Laundry/IMG_0292.JPG`);
                images.push(`${imageDirectory}/Laundry/IMG_0293.JPG`);
                break;
            case 'Office/Den':
                break;
            case 'Other':
                images.push(`${imageDirectory}/Other/IMG_0300.JPG`);
                images.push(`${imageDirectory}/Other/IMG_0302.JPG`);
                images.push(`${imageDirectory}/Other/IMG_0303.JPG`);
                images.push(`${imageDirectory}/Other/IMG_0304.JPG`);
                images.push(`${imageDirectory}/Other/IMG_0297.JPG`);
                break;
        }
        break;
    case("2023 Autumn"):
        addressDisplay.textContent = '2023 Autumn Ln, Kaukauna, WI 54130';
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
        link = document.querySelector('option[rmknd="Bath1"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Garage"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Laundry"]');
        link.style.display = 'inline'
        link = document.querySelector('option[rmknd="Other"]');
        link.style.display = 'inline'
        switch(room){
            case 'All':
                images.push(`${imageDirectory}/Living/PXL_20230430_174810200.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20230430_174848002.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20230430_174743571.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20230430_174833706.jpg`);
                images.push(`${imageDirectory}/Dining/PXL_20230430_194323176.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230430_194230452.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230430_194255988.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230430_172612219.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230430_194146611.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230430_194118963.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230430_194207915.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230430_194053308.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230329_184428017.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230329_175926063.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230329_184256153.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230329_175915156.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230329_184159676.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230329_184315501.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230329_184333850.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230329_184056644.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20230216_181342332.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20230430_175038817.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20230430_174954524.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20230430_175017023.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20230329_174313504.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230430_172114454.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230430_172156664.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230430_172135204.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230430_194406894.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20230430_172246999.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20230430_172221582.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20230430_194417664.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20230430_171850302.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20230430_171928000.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20230430_171808882.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20230430_171957073.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20230430_201721914.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20230430_201809666.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20230430_201752141.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20230430_201727010.jpg`);
                images.push(`${imageDirectory}/Laundry/PXL_20230430_171729289.jpg`);
                images.push(`${imageDirectory}/Laundry/PXL_20230430_171713360.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20230430_171641830.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20230430_172446623.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20230430_172013405.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20230430_172346326.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20230430_172749377.jpg`);
                break;
            case 'Living':
                images.push(`${imageDirectory}/Living/PXL_20230430_174810200.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20230430_174848002.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20230430_174743571.jpg`);
                images.push(`${imageDirectory}/Living/PXL_20230430_174833706.jpg`);
                break;
            case 'Dining':
                images.push(`${imageDirectory}/Dining/PXL_20230430_194323176.jpg`);
                break;
            case 'Kitchen':
                images.push(`${imageDirectory}/Kitchen/PXL_20230430_194230452.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230430_194255988.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230430_172612219.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230430_194146611.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230430_194118963.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230430_194207915.jpg`);
                images.push(`${imageDirectory}/Kitchen/PXL_20230430_194053308.jpg`);
                break;
            case 'Outside':
                images.push(`${imageDirectory}/Outside/PXL_20230329_184428017.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230329_175926063.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230329_184256153.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230329_175915156.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230329_184159676.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230329_184315501.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230329_184333850.jpg`);
                images.push(`${imageDirectory}/Outside/PXL_20230329_184056644.jpg`);
                break;
            case 'Basement':
                images.push(`${imageDirectory}/Basement/PXL_20230216_181342332.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20230430_175038817.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20230430_174954524.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20230430_175017023.jpg`);
                images.push(`${imageDirectory}/Basement/PXL_20230329_174313504.jpg`);
                break;
            case 'Bed1':
                images.push(`${imageDirectory}/Bed1/PXL_20230430_172114454.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230430_172156664.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230430_172135204.jpg`);
                images.push(`${imageDirectory}/Bed1/PXL_20230430_194406894.jpg`);
                break;
            case 'Bed2':
                images.push(`${imageDirectory}/Bed2/PXL_20230430_172246999.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20230430_172221582.jpg`);
                images.push(`${imageDirectory}/Bed2/PXL_20230430_194417664.jpg`);
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                images.push(`${imageDirectory}/Bath1/PXL_20230430_171850302.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20230430_171928000.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20230430_171808882.jpg`);
                images.push(`${imageDirectory}/Bath1/PXL_20230430_171957073.jpg`);
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                images.push(`${imageDirectory}/Garage/PXL_20230430_201721914.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20230430_201809666.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20230430_201752141.jpg`);
                images.push(`${imageDirectory}/Garage/PXL_20230430_201727010.jpg`);
                break;
            case 'Laundry':
                images.push(`${imageDirectory}/Laundry/PXL_20230430_171729289.jpg`);
                images.push(`${imageDirectory}/Laundry/PXL_20230430_171713360.jpg`);
                break;
            case 'Office/Den':
                break;
            case 'Other':
                images.push(`${imageDirectory}/Other/PXL_20230430_171641830.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20230430_172446623.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20230430_172013405.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20230430_172346326.jpg`);
                images.push(`${imageDirectory}/Other/PXL_20230430_172749377.jpg`);
                break;
        }
        break;
    case("2701 Haas"):
        addressDisplay.textContent = '2701 Haas Rd, Kaukauna, WI 54130';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
    case("2703 Haas"):
        addressDisplay.textContent = '2703 Haas Rd, Kaukauna, WI 54130';
        switch(room){
            case 'All':
                break;
            case 'Living':
                break;
            case 'Dining':
                break;
            case 'Kitchen':
                break;
            case 'Outside':
                break;
            case 'Basement':
                break;
            case 'Bed1':
                break;
            case 'Bed2':
                break;
            case 'Bed3':
                break;
            case 'Bed4':
                break;
            case 'Bath1':
                break;
            case 'Bath2':
                break;
            case 'Bath3':
                break;
            case 'Garage':
                break;
            case 'Laundry':
                break;
            case 'Office/Den':
                break;
            case 'Other':
                break;
        }
        break;
}
// **DONT REMOVE LINE** END4231

function adjustSlideWidth(slide, imgWidth, imgHeight) {
if (window.matchMedia("(max-width: 768px)").matches) {
    if (imgWidth / imgHeight < .6) { // .5625 ratio 9:16
        slide.style.width = '28.5%'; // Example width for horizontal images
    } else if(imgWidth / imgHeight < .8) { // .75 ratio 3:4
        slide.style.width = '38%'; // Example width for horizontal images
    } else if(imgWidth / imgHeight < 1.5) { // 1.333 ratio 4:3
        slide.style.width = '67.5%'; // Example width for vertical images
    } else { // 1.7817 ratio 16:9
        slide.style.width = '90%'; // Example width for horizontal images
    }
}
else{
    if (imgWidth / imgHeight < .6) { // .5625 ratio 9:16
        slide.style.width = '21.1%'; // Example width for horizontal images
    } else if(imgWidth / imgHeight < .8) { // .75 ratio 3:4
        slide.style.width = '28%'; // Example width for horizontal images
    } else if(imgWidth / imgHeight < 1.5) { // 1.333 ratio 4:3
        slide.style.width = '50%'; // Example width for vertical images
    } else { // 1.7817 ratio 16:9
        slide.style.width = '66.7%'; // Example width for horizontal images
    }
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


if (window.matchMedia("(max-width: 768px)").matches) {
var swiper3 = new Swiper(".mySwiperKitchen", { // This is the container under the images
  loop: true,
  spaceBetween: 5,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiperKitchen2", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 5,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
} else {
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
}

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
