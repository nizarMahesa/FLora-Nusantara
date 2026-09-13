// Database Data Tanaman Obat Indonesia
const dataTanaman = [
    {
        id: 1,
        nama: "Kunyit",
        latin: "Curcuma longa",
        famili: "Zingiberaceae",
        gambar: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80",
        ringkasan: "Kaya kurkumin untuk antiinflamasi dan menjaga daya tahan tubuh.",
        khasiat: "Meredakan peradangan, mengatasi gangguan pencernaan, menurunkan risiko penyakit jantung, dan meningkatkan imunitas.",
        kandungan: "Kurkuminoid, minyak atsiri, vitamin C, zat besi, dan fosfor.",
        pengolahan: "Kupas 2 ruas kunyit, parut, lalu peras airnya. Campurkan dengan 100ml air hangat dan 1 sendok makan madu murni. Minum 1x sehari."
    },
    {
        id: 2,
        nama: "Jahe Merah",
        latin: "Zingiber officinale var. rubrum",
        famili: "Zingiberaceae",
        gambar: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=500&q=80",
        ringkasan: "Sensasi hangat tinggi gingerol untuk meredakan flu dan pegal linu.",
        khasiat: "Menghangatkan tubuh, meredakan batuk/flu, mengatasi pegal linu, dan memperlancar sirkulasi darah.",
        kandungan: "Gingerol, shogaol, zingeron, dan minyak atsiri alami.",
        pengolahan: "Geprek 2 rimpang jahe merah, rebus dalam 300ml air selama 10 menit bersama sedikit kayu manis. Saring dan minum selagi hangat."
    },
    {
        id: 3,
        nama: "Temulawak",
        latin: "Curcuma zanthorrhiza",
        famili: "Zingiberaceae",
        gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80",
        ringkasan: "Tanaman khas Nusantara penambah nafsu makan dan pelindung hati.",
        khasiat: "Menjaga fungsi hati (hepatoprotektor), merangsang nafsu makan, dan mengatasi sembelit.",
        kandungan: "Kurkumin, xanthorrhizol, serta pati.",
        pengolahan: "Iris tipis temulawak yang sudah dibersihkan, rebus bersama asam jawa dan gula aren hingga mendidih. Minum 2x seminggu."
    },
    {
        id: 4,
        nama: "Pegagan (Antanan)",
        latin: "Centella asiatica",
        famili: "Apiaceae",
        gambar: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=500&q=80",
        ringkasan: "Herbal daya ingat untuk vitalitas otak dan daya tahan tubuh.",
        khasiat: "Meningkatkan daya ingat/konsentrasi, meredakan kecemasan, dan mempercepat penyembuhan luka.",
        kandungan: "Asiaticoside, thankuniside, isothankuniside, dan madasiatic acid.",
        pengolahan: "Rebus 15 gram daun pegagan segar dalam 2 gelas air hingga tersisa 1 gelas. Saring dan minum air rebusannya."
    },
    {
        id: 5,
        nama: "Daun Sirih",
        latin: "Piper betle",
        famili: "Piperaceae",
        gambar: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80",
        ringkasan: "Antiseptik alami terpercaya penangkal bakteri dan infeksi.",
        khasiat: "Antiseptik alami, menjaga kesehatan mulut/gigi, menghentikan mimisan, dan meredakan gatal pada kulit.",
        kandungan: "Eugenol, kavikol, tanin, dan minyak atsiri.",
        pengolahan: "Rebus 5-7 lembar daun sirih bersih. Air rebusan hangat digunakan untuk kumur-kumur atau membasuh area gatal."
    },
    {
        id: 6,
        nama: "Sambiloto",
        latin: "Andrographis paniculata",
        famili: "Acanthaceae",
        gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80",
        ringkasan: "Raja pahit penurun kadar gula darah dan pelindung imunitas.",
        khasiat: "Menurunkan gula darah, meredakan demam tinggi, penangkal infeksi bakteri, dan menetralkan racun.",
        kandungan: "Andrographolide, alkana, dan keton.",
        pengolahan: "Rebus 10-15 lembar daun sambiloto kering dengan 3 gelas air hingga tersisa 1 gelas. Minum secara teratur."
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('katalogGrid');
    const modal = document.getElementById('plantModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close-btn');

    // Render Kartu Katalog Ringkas
    dataTanaman.forEach(item => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.gambar}" alt="${item.nama}">
            <div class="card-body">
                <span class="tag">${item.famili}</span>
                <h3>${item.nama}</h3>
                <span class="latin">${item.latin}</span>
                <p style="font-size: 0.8rem; color: #666;">${item.ringkasan}</p>
                <div class="btn-detail">Klik untuk Detail & Panduan</div>
            </div>
        `;
        
        // Event saat kartu diklik
        card.addEventListener('click', function() {
            bukaModalDetail(item);
        });

        grid.appendChild(card);
    });

    // Fungsi Buka Modal Detail
    function bukaModalDetail(plant) {
        modalBody.innerHTML = `
            <div class="modal-header">
                <img src="${plant.gambar}" alt="${plant.nama}">
                <h2>${plant.nama}</h2>
                <p><i>${plant.latin}</i> (${plant.famili})</p>
            </div>
            <div class="modal-section">
                <h4>Manfaat & Khasiat Utama</h4>
                <p>${plant.khasiat}</p>
            </div>
            <div class="modal-section">
                <h4>Kandungan Kimia Alami</h4>
                <p>${plant.kandungan}</p>
            </div>
            <div class="modal-section" style="border-bottom: none;">
                <h4>Panduan Pengolahan & Konsumsi</h4>
                <p>${plant.pengolahan}</p>
            </div>
        `;
        modal.style.display = 'block';
    }

    // Tutup Modal Pop-up
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Form Handling
    const form = document.getElementById('formKontribusi');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Data usulan tanaman berhasil dikirimkan.');
            form.reset();
        });
    }
});

