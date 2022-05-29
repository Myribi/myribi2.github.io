const dubai = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011947323!2d54.94729583309777!3d25.07638146897086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDuba%C3%AF%20-%20%C3%89mirats%20arabes%20unis!5e0!3m2!1sfr!2sil!4v1653408181838!5m2!1sfr!2sil"
const sf = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555120401!2d-122.50764008500157!3d37.75781499644896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20Californie%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sil!4v1653409443930!5m2!1sfr!2sil"
const london = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197392.80451839193!2d-0.21551228455767188!3d51.54948267102395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Royaume-Uni!5e0!3m2!1sfr!2sil!4v1653409713303!5m2!1sfr!2sil"
const marrakech = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108703.12115601447!2d-8.077893303252903!3d31.634602332684246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech%2C%20Maroc!5e0!3m2!1sfr!2sil!4v1653851124011!5m2!1sfr!2sil"
const barcelone = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95780.65560411534!2d2.070149185611454!3d41.39264671479264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelone%2C%20Espagne!5e0!3m2!1sfr!2sil!4v1653851316483!5m2!1sfr!2sil"
const newYork = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059378981!2d-74.25986566718812!3d40.69714941887957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20%C3%89tat%20de%20New%20York%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sil!4v1653851467791!5m2!1sfr!2sil"

const losAngeles = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2740599889!2d-118.69192067664531!3d34.02016130607502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20Californie%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sil!4v1653851533103!5m2!1sfr!2sil"

const lisboa = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99580.03468288484!2d-9.230243249206744!3d38.743605703680686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbonne%2C%20Portugal!5e0!3m2!1sfr!2sil!4v1653851717710!5m2!1sfr!2sil"

const cities = [dubai, sf, london, marrakech, barcelone, newYork, losAngeles, lisboa];

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const map = document.getElementById('map');
let currentlySelected = 0;

prevButton.addEventListener('click', function () {
    currentlySelected--;
    map.src = cities[currentlySelected]
    nextButton.disabled = false;
    if (currentlySelected === 0) {
        prevButton.disabled = true;
    }
});

nextButton.addEventListener('click', function () {
    currentlySelected++;
    map.src = cities[currentlySelected]
    prevButton.disabled = false;
    if (currentlySelected === cities.length - 1) {
        nextButton.disabled = true;
    }
});