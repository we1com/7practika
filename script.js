const reserves = [
    { name: "Ақсу-Жабағылы", short: "Ең көне қорық (1926).", full: "Ақсу-Жабағылы — Қазақстандағы ең алғашқы ашылған мемлекеттік табиғи қорық. 1926 жылы құрылған. Ол ЮНЕСКО-ның дүниежүзілік биосфералық резерваттар желісіне енгізілді.", img: "https://qazaqadebieti.kz/wp-content/uploads/2017/01/c4ca4238a0b923820dcc509a6f75849b.jpg" },
    { name: "Қорғалжын", short: "Қоқиқаздар мекені.", full: "Ақмола облысындағы ЮНЕСКО мұрасы. Көлдер мен құстар әлемі.", img: "https://ticketon.kz/files/media/korgalzhynskij-zapovednik00120.jpg" },
    { name: "Шарын", short: "Табиғи каньон.", full: "12 млн жылдық тарихы бар ерекше шатқал. Алматы облысы.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Panorama%28sharyn%29.jpg/1200px-Panorama%28sharyn%29.jpg" },
    { name: "Көлсай көлдері", short: "Тянь-Шань маржаны.", full: "Мөлдір тау көлдері мен шыршалы ормандар кешені.", img: "https://qazaqstan3d.kz/storage/thumbnails/place/ar/zc/v7su0ywogo8o8cook4c48.jpg?p=place%2F635619_1503865552.jpg&s=pd" },
    { name: "Бурабай", short: "Арқаның жауһары.", full: "Көлдер, қарағайлы ормандар мен аңызға толы жартастар.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/42/74/42/250.jpg?w=800&h=-1&s=1" },
    { name: "Алтын-Емел", short: "Әнші бархан.", full: "Жетісудағы шөлейтті парк. Әнші бархан құбылысымен танымал.", img: "https://www.airpano.ru/files/kazakhstan-altyn-emel/images/image1.jpg" },
    { name: "Баянауыл", short: "Жасыбай көлі.", full: "Павлодар облысы. Ерекше пішінді тастар мен тау көлдері.", img: "https://bayangnpp.kz/wp-content/uploads/2025/08/tild6461-3133-4331-b837-313035323732__img_20180624_104231_.jpg" },
    { name: "Катон-Қарағай", short: "Алтайдың биігі.", full: "Шығыс Қазақстан. Мұзтау мен Рахман қайнарлары осында.", img: "https://e-history.kz/images/w500/media/upload/72/2013/08/12/747cec75d8bad36a6a8536d90642e4c5.jpg" },
    { name: "Барсакелмес", short: "Арал құпиясы.", full: "Арал теңізі табанындағы құландар мекендейтін қорық.", img: "https://www.biletik.aero/upload/iblock/5d8/5d8258c10539fe1ae21f1f1098341280.jpg" },
    { name: "Наурызым", short: "Дала орманы.", full: "Қостанай облысы. Реликті қарағайлы ормандар мен көлдер.", img: "https://e-history.kz/images/w500/media/upload/72/2013/08/14/d77544e0e4fb7e153abfbf469ee7874d.jpg" },
    { name: "Марқакөл", short: "Алтай көлі.", full: "Шығыс Қазақстандағы ең мөлдір тау көлі.", img: "https://egemen.kz/media/2024/09/13/marqakol.jpg" },
    { name: "Үстірт", short: "Ақ каньондар.", full: "Маңғыстаудың шөлді қорығы. Арқарлар мекені.", img: "https://avatars.mds.yandex.net/get-altay/13220782/2a0000019108c86f4951fe8e3e09c49de0f8/orig" },
    { name: "Алакөл", short: "Құстар аралы.", full: "Реликті шағала мен су құстарын қорғау аймағы.", img: "https://eskeldi-eli.kz/wp-content/uploads/2023/08/9-678x381.jpg" },
    { name: "Қаратау", short: "Сирек флора.", full: "Түркістан облысы. Эндемик өсімдіктерге бай тау жотасы.", img: "https://qazaqgeography.kz/assets/media/kategoriya-gosudarstvennyy-prirodnyy-karatauskiy-zapovednik/24.jpg" },
    { name: "Батыс Алтай", short: "Нағыз тайга.", full: "Шығыс Қазақстандағы сібірлік типтегі ормандар.", img: "https://visiteast.kz/assets/files/naczionalnyij-park/zapadno-altajskij-zapovednik.jpg" },
    { name: "Семей орманы", short: "Таспалы қарағай.", full: "Ертіс бойындағы бірегей қарағайлы орман алқабы.", img: "https://orda.kz/uploads/posts/2025-10/sizes/1440x810/g2.webp" },
    { name: "Іле-Алатау", short: "Алматы таулары.", full: "Алматы маңындағы биік таулы табиғат пен шыршалар.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/02/c8/22/getlstd-property-photo.jpg?w=1200&h=-1&s=1" },
    { name: "Қарқаралы", short: "Шайтанкөл.", full: "Қарағанды өңірінің таулы-орманды інжу-маржаны.", img: "https://astana.citypass.kz/wp-content/uploads/6eb8e23f52a312aa1552ac87a0d9d397.jpg" },
    { name: "Жоңғар Алатауы", short: "Жабайы алмалар.", full: "Сиверс алмасының генетикалық отаны.", img: "https://sarkan-gazeta.kz/wp-content/uploads/2018/07/20072.jpg" },
    { name: "Көкшетау", short: "Зеренді табиғаты.", full: "Солтүстік Қазақстанның көрікті демалыс аймағы.", img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Burabai.jpg" },
    { name: "Бұйратау", short: "Арқарлар даласы.", full: "Ақмола облысындағы далалық экожүйе.", img: "https://www.trtavaz.com.tr/uploads/photos/2021/05/05/88582439c50040f9ad8bd58036cace47.jpg?w=640" },
    { name: "Тарбағатай", short: "Шығыс флорасы.", full: "Тарбағатай жотасындағы сирек өсімдіктерді қорғайды.", img: "https://www.matritca.kz/uploads/posts/2018-03/1520803221_tarbaatay.jpg" },
    { name: "Ұлытау", short: "Киелі мекен.", full: "Қазақстанның тарихи және географиялық орталығы.", img: "https://qazaqgeography.kz/assets/media/nashi-proekty-ulytau/erbolat-shadrakhov-karagandinskaya-obl-ulytauskiy-r-n-monument-edinstva-narodov-kazakhstana-ulytau-ekspeditsiya-sary-arka-2018.jpg" },
    { name: "Ақжайық", short: "Жайық сағасы.", full: "Каспий жағалауындағы сулы-батпақты аймақ.", img: "https://egemen.kz/wp-content/uploads/2015/08/%D1%84%D0%BE%D1%82%D0%BE-%D0%A0%D0%B0%D1%84%D1%85%D0%B0%D1%82%D0%B0-%D0%A5%D0%B0%D0%BB%D0%B5%D0%BB%D0%BE%D0%B2%D0%B0-1-126.jpg" },
    { name: "Іле-Балқаш", short: "Жолбарыс жобасы.", full: "Балқаш маңындағы жолбарыстарды қайтару резерваты.", img: "https://www.undp.org/sites/g/files/zskgke326/files/2022-08/2_5204076074287241067.jpg" },
    { name: "Алтын Дала", short: "Киіктер мекені.", full: "Торғай даласындағы киіктерді қорғау резерваты.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/20210627113338_IMG_1787.jpg/1200px-20210627113338_IMG_1787.jpg" },
    { name: "Ырғыз-Торғай", short: "Батпақты өлке.", full: "Ақтөбе өңіріндегі құстарды қорғау аймағы.", img: "https://egemen.kz/media/2020/08/26/21-08-2020-0_10_hpim8306-min.jpg" },
    { name: "Сайрам-Өгем", short: "Оңтүстік таулары.", full: "Түркістан облысындағы Батыс Тянь-Шань табиғаты.", img: "https://qazaqgeography.kz/assets/media/sayram-ugamskiy-natsionalnyy-park/sayram-su-nizhnee-ozero-3-2.jpg" },
    { name: "Ертіс орманы", short: "Павлодар орманы.", full: "Павлодар өңіріндегі сирек таспалы орман.", img: "https://inbusiness.kz/uploads/37/images/kFuFWQTR.jpg" },
    { name: "Алматы қорығы", short: "Тау жүрегі.", full: "Іле Алатауындағы таулы экожүйені сақтау аймағы.", img: "https://tengemonitor.kazgazeta.kz/media/2021/11/11/almaty-korygy-dosdgan-balabekuly.jpg" }
];

const grid = document.getElementById('reserveGrid');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('reserveModal');

function render(data) {
    // Fragment қолдану арқылы қатуды болдырмаймыз
    const fragment = document.createDocumentFragment();
    grid.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openModal(item.name);
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x180?text=Сурет+табылмады'">
            <div class="card-content">
                <div class="card-title">${item.name}</div>
                <div class="card-short">${item.short}</div>
            </div>`;
        fragment.appendChild(card);
    });
    grid.appendChild(fragment);
}

searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = reserves.filter(r => r.name.toLowerCase().includes(val));
    render(filtered);
});

function openModal(name) {
    const item = reserves.find(r => r.name === name);
    document.getElementById('modalContent').innerHTML = `
        <h2>${item.name}</h2>
        <img src="${item.img}" alt="${item.name}">
        <p>${item.full}</p>
    `;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

document.getElementById('closeModal').onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

window.onclick = (e) => {
    if(e.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Бастапқы жүктеу
render(reserves);