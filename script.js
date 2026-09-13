<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flora Nusantara - Khasiat Herbal</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
            background-color: #f0f4f8;
            color: #2d3748;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        header {
            background-color: #064e3b;
            color: white;
            padding: 15px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .logo {
            font-size: 1.25rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
        }
        nav {
            display: flex;
            gap: 20px;
        }
        nav a {
            color: #e2e8f0;
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            transition: color 0.2s;
            cursor: pointer;
        }
        nav a:hover {
            color: #6ee7b7;
        }
        main {
            flex: 1;
            max-width: 1200px;
            width: 100%;
            margin: 0 auto;
            padding: 30px 20px;
        }
        .halaman.hidden {
            display: none !important;
        }
        .hero-section {
            background: linear-gradient(135deg, #065f46 0%, #047857 100%);
            color: white;
            padding: 40px;
            border-radius: 12px;
            margin-bottom: 30px;
            text-align: center;
        }
        .hero-section h1 {
            font-size: 2.2rem;
            margin-bottom: 10px;
        }
        .hero-section p {
            font-size: 1.05rem;
            color: #d1fae5;
            margin-bottom: 20px;
        }
        .search-box {
            display: flex;
            justify-content: center;
            gap: 10px;
            max-width: 500px;
            margin: 0 auto;
        }
        .search-box input {
            flex: 1;
            padding: 10px 15px;
            border-radius: 6px;
            border: none;
            font-size: 0.95rem;
            outline: none;
        }
        .search-box button {
            background-color: #34d399;
            color: #064e3b;
            border: none;
            padding: 10px 20px;
            font-weight: bold;
            border-radius: 6px;
            cursor: pointer;
            transition: background 0.2s;
        }
        .search-box button:hover {
            background-color: #10b981;
            color: white;
        }
        .grid-katalog {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
        }
        /* Modal Styling */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .modal-overlay.hidden {
            display: none !important;
        }
        .modal-content {
            background: white;
            padding: 25px;
            border-radius: 10px;
            max-width: 550px;
            width: 90%;
            max-height: 85vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        .close-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            background: #edf2f7;
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            font-weight: bold;
            cursor: pointer;
            color: #4a5568;
        }
        footer {
            background-color: #022c22;
            color: #a7f3d0;
            text-align: center;
            padding: 20px;
            font-size: 0.85rem;
            margin-top: auto;
        }
        footer p {
            margin-bottom: 5px;
        }
    </style>
</head>
<body>

    <header>
        <div class="logo" onclick="bukaHalaman('beranda')">
            🌿 Flora Nusantara
        </div>
        <nav>
            <a onclick="bukaHalaman('beranda')">Beranda</a>
            <a onclick="bukaHalaman('katalog')">Katalog Flora</a>
            <a onclick="bukaHalaman('kategori')">Manfaat & Kategori</a>
            <a onclick="bukaHalaman('artikel')">Artikel / Edukasi</a>
            <a onclick="bukaHalaman('tentang')">Tentang Kami</a>
        </nav>
    </header>

    <main>
        <!-- Halaman Beranda -->
        <section id="halaman-beranda" class="halaman">
            <div class="hero-section">
                <h1>Ensiklopedia Tanaman Obat Tradisional</h1>
                <p>Jelajahi kekayaan flora Nusantara dan ketahui khasiat herbal alami untuk kesehatan Anda.</p>
                <div class="search-box">
                    <input type="text" id="inputCariHero" placeholder="Cari nama tanaman atau khasiat...">
                    <button onclick="cariTanamanHero()">Cari</button>
                </div>
            </div>

            <h2 style="margin-bottom: 15px; color: #1f2937;">Tanaman Obat Unggulan</h2>
            <div id="grid-unggulan" class="grid-katalog"></div>
        </section>

        <!-- Halaman Katalog Flora -->
        <section id="halaman-katalog" class="halaman hidden">
            <div id="judul-halaman-katalog" style="margin-bottom: 20px;"></div>
            <div style="margin-bottom: 20px;">
                <input type="text" id="inputCariKatalog" placeholder="Filter hasil pencarian di katalog..." onkeyup="cariTanamanKatalog()" style="width: 100%; padding: 10px 15px; border-radius: 6px; border: 1px solid #cbd5e0; outline: none;">
            </div>
            <div id="grid-katalog-lengkap" class="grid-katalog"></div>
        </section>

        <!-- Halaman Manfaat & Kategori -->
        <section id="halaman-kategori" class="halaman hidden">
            <div id="isi-halaman-kategori" style="background: white; padding: 30px; border-radius: 8px; border: 1px solid #e2e8f0; line-height: 1.6;"></div>
        </section>

        <!-- Halaman Artikel -->
        <section id="halaman-artikel" class="halaman hidden">
            <h2 style="color: #2d3748; margin-bottom: 10px;">Artikel & Edukasi Kesehatan Herbal</h2>
            <p style="color: #718096; margin-bottom: 20px;">Tips praktis pengolahan tanaman obat di rumah secara aman.</p>
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 15px;">
                <h3 style="color: #2b6cb0; margin-bottom: 8px;">Cara Aman Mengolah Rimpang Menjadi Minuman Herbal</h3>
                <p style="color: #4a5568; font-size: 0.95rem; line-height: 1.5;">Penggunaan rimpang seperti jahe dan kunyit sebaiknya tidak direbus terlalu lama di atas suhu didih tinggi secara terus-menerus agar kandungan minyak atsiri dan zat kurkuminnya tidak rusak...</p>
            </div>
        </section>

        <!-- Halaman Tentang Kami -->
        <section id="halaman-tentang" class="halaman hidden">
            <div style="background: white; padding: 30px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <h2 style="color: #2d3748; margin-bottom: 10px;">Tentang Flora Nusantara</h2>
                <p style="color: #4a5568; line-height: 1.6; margin-bottom: 10px;">Flora Nusantara adalah platform ensiklopedia digital interaktif yang mendedikasikan datanya untuk mendokumentasikan keanekaragaman tanaman obat tradisional asli Indonesia.</p>
                <p style="color: #4a5568; line-height: 1.6;">Misi kami adalah melestarikan pengetahuan lokal tetua leluhur dan menyajikannya secara modern dan mudah dipahami oleh masyarakat luas.</p>
            </div>
        </section>
    </main>

    <!-- Modal Detail Tanaman -->
    <div id="modalDetail" class="modal-overlay hidden">
        <div class="modal-content">
            <button class="close-btn" onclick="tutupModal()">×</button>
            <div id="isiDetailTanaman"></div>
        </div>
    </div>

    <footer>
        <p>⚠️ <b>Penafian Hukum (Disclaimer):</b> Informasi yang disajikan di situs ini bertujuan semata-mata untuk edukasi dan tidak dimaksudkan sebagai pengganti diagnosis, perawatan, atau saran medis dari dokter profesional.</p>
        <p>© 2026 Flora Nusantara. All Rights Reserved.</p>
    </footer>

    <script>
        const dataTanaman = [
          { id: 1, nama: "Kunyit", latin: "Curcuma longa", jenis: "Rimpang", keluhan: "Pencernaan", kandungan: "Kurkumin, minyak atsiri, desmetoksikurkumin", khasiat: "Meredakan asam lambung, antiinflamasi, menjaga pencernaan.", pengolahan: "Parut 2 ruas kunyit, rebus dengan 1 gelas air hingga mendidih, saring dan minum.", peringatan: "Hindari konsumsi berlebih pada pasien batu empedu." },
          { id: 2, nama: "Jahe Merah", latin: "Zingiber officinale var. rubrum", jenis: "Rimpang", keluhan: "Imun", kandungan: "Gingerol, shogaol, zingeron", khasiat: "Menghangatkan tubuh, meredakan batuk & pegal linu.", pengolahan: "Geprek 1 ruas jahe merah, seduh dengan air panas dan madu.", peringatan: "Hati-hati bagi penderita pendarahan atau masalah lambung kronis." },
          { id: 3, nama: "Daun Sirih", latin: "Piper betle", jenis: "Daun", keluhan: "Kulit", kandungan: "Eugenol, antiseptik alami, alkaloid", khasiat: "Antiseptik alami, pembersih luka, menjaga kesehatan mulut.", pengolahan: "Rebus 5 lembar daun sirih dengan 2 gelas air untuk air kumur atau bilas luka.", peringatan: "Penggunaan luar/kumur saja, jangan ditelan berlebihan." },
          { id: 4, nama: "Temulawak", latin: "Curcuma zanthorrhiza", jenis: "Rimpang", keluhan: "Pencernaan", kandungan: "Kurkuminoid, xanthorrhizol", khasiat: "Menambah nafsu makan, menjaga kesehatan fungsi hati.", pengolahan: "Iris tipis temulawak kering, rebus dengan air secukupnya.", peringatan: "Tidak dianjurkan untuk penderita penyumbatan saluran empedu." },
          { id: 5, nama: "Kumis Kucing", latin: "Orthosiphon aristatus", jenis: "Daun", keluhan: "Pencernaan", kandungan: "Sinensetin, glikosida ortosifonin", khasiat: "Peluruh batu ginjal dan mengatasi infeksi saluran kemih.", pengolahan: "Seduh daun kumis kucing kering dengan air panas seperti teh.", peringatan: "Tidak untuk penggunaan jangka panjang tanpa pengawasan dokter." },
          { id: 6, nama: "Sambiloto", latin: "Andrographis paniculata", jenis: "Daun", keluhan: "Imun", kandungan: "Androgratolida, flavonoid", khasiat: "Menurunkan demam & tekanan darah tinggi.", pengolahan: "Rebus 10-15 lembar daun sambiloto dengan 3 gelas air.", peringatan: "Tidak disarankan untuk wanita hamil dan menyusui." },
          { id: 7, nama: "Lidah Buaya", latin: "Aloe vera", jenis: "Daun", keluhan: "Kulit", kandungan: "Aloin, enzim bradikinase, vitamin C", khasiat: "Penyembuh luka bakar, merawat kesehatan kulit & rambut.", pengolahan: "Kupas kulit luar, oleskan gel bening langsung pada kulit.", peringatan: "Getah kuning di bawah kulit bisa memicu iritasi jika tidak dicuci." },
          { id: 8, nama: "Daun Salam", latin: "Syzygium polyanthum", jenis: "Daun", keluhan: "Pencernaan", kandungan: "Flavonoid, tanin, minyak atsiri", khasiat: "Menurunkan kolesterol tinggi & asam urat.", pengolahan: "Rebus 10 lembar daun salam dengan 3 gelas air hingga tersisa 1 gelas.", peringatan: "Monitor kadar gula darah jika mengonsumsi obat diabetes bersamaan." },
          { id: 9, nama: "Jambu Biji (Daun)", latin: "Psidium guajava", jenis: "Daun", keluhan: "Pencernaan", kandungan: "Tanin, flavonoid, quercetin", khasiat: "Meredakan diare & meningkatkan trombosit.", pengolahan: "Rebus 5-7 lembar daun muda jambu biji, minum air rebusannya.", peringatan: "Dapat menyebabkan sembelit jika diminum berlebihan." },
          { id: 10, nama: "Bunga Telang", latin: "Clitoria ternatea", jenis: "Buah", keluhan: "Imun", kandungan: "Antosianin, antioksidan tinggi", khasiat: "Meredakan stres & memelihara kesehatan mata.", pengolahan: "Seduh 5 kuntum bunga telang kering dengan air panas.", peringatan: "Konsumsi secukupnya, hindari saat kehamilan." },
          { id: 11, nama: "Kencur", latin: "Kaempferia galanga", jenis: "Rimpang", keluhan: "Pencernaan", kandungan: "Etil p-metoksisinamat, pati, minyak atsiri", khasiat: "Meredakan batuk berdahak, perut kembung, dan melegakan tenggorokan.", pengolahan: "Parut 2 ruas kencur, peras airnya dan campurkan dengan sedikit garam/madu.", peringatan: "Konsumsi berlebihan dapat menyebabkan rasa mual." },
          { id: 12, nama: "Mahkota Dewa", latin: "Phaleria macrocarpa", jenis: "Buah", keluhan: "Imun", kandungan: "Alkaloid, saponin, flavonoid, polifenol", khasiat: "Membantu menurunkan tekanan darah tinggi dan mengontrol kadar gula darah.", pengolahan: "Iris tipis buah tanpa biji, keringkan, lalu seduh 2-3 irisan dengan air panas.", peringatan: "Biji mahkota dewa sangat beracun! Jangan sampai ikut tertelan atau diseduh." },
          { id: 13, nama: "Akar Alang-alang", latin: "Imperata cylindrica", jenis: "Rimpang", keluhan: "Pencernaan", kandungan: "Mannitol, glucose, asam malat, coixol", khasiat: "Meluruhkan air seni (diuretik), meredakan panas dalam, dan pendarahan ringan.", pengolahan: "Rebus 30 gram akar alang-alang bersih dengan 3 gelas air hingga tersisa 1 gelas.", peringatan: "Hindari penggunaan pada penderita gangguan fungsi ginjal berat." },
          { id: 14, nama: "Daun Kelor", latin: "Moringa oleifera", jenis: "Daun", keluhan: "Imun", kandungan: "Potasium, kalsium, vitamin C, kuersetin", khasiat: "Menjaga daya tahan tubuh, menurunkan kolesterol, dan mengatasi anemia.", pengolahan: "Petik daun muda, olah menjadi sayur bening atau keringkan untuk seduhan teh.", peringatan: "Jangan dimasak terlalu lama agar kandungan vitamin tidak rusak." },
          { id: 15, nama: "Mengkudu", latin: "Morinda citrifolia", jenis: "Buah", keluhan: "Imun", kandungan: "Xeronine, scolopetin, proxeronine", khasiat: "Menurunkan tekanan darah tinggi dan melancarkan sirkulasi darah.", pengolahan: "Peras 1 buah mengkudu matang, saring airnya, dan campurkan madu untuk mengurangi aroma.", peringatan: "Tinggi potasium, tidak dianjurkan untuk penderita penyakit ginjal kronis." },
          { id: 16, nama: "Daun Jati Cina (Senna)", latin: "Senna alexandrina", jenis: "Daun", keluhan: "Pencernaan", kandungan: "Sennosida A dan B, flavonoid", khasiat: "Pencahar alami untuk melancarkan buang air besar (mengatasi sembelit).", pengolahan: "Seduh 1 sendok teh daun kering dengan 1 gelas air panas, minum sebelum tidur.", peringatan: "Jangan dikonsumsi lebih dari 7 hari berturut-turut karena memicu ketergantungan usus." },
          { id: 17, nama: "Kunyit Putih", latin: "Curcuma zedoaria", jenis: "Rimpang", keluhan: "Imun", kandungan: "Curanolide, kurkumin, flavonoid", khasiat: "Membantu menangkal radikal bebas dan meredakan peradangan rahim.", pengolahan: "Rebus 1 ruas kunyit putih segar dengan 2 gelas air hingga tersisa separuhnya.", peringatan: "Dilarang keras dikonsumsi oleh wanita yang sedang hamil." },
          { id: 18, nama: "Daun Meniran", latin: "Phyllanthus niruri", jenis: "Daun", keluhan: "Imun", kandungan: "Phyllanthin, hypophyllanthin, tanin", khasiat: "Mengoptimalkan kekebalan tubuh (immunomodulator) dan menjaga fungsi hati.", pengolahan: "Rebus 1 genggam daun meniran segar dengan 2 gelas air sampai mendidih.", peringatan: "Dapat berinteraksi dengan obat pembersih darah atau imunosupresan." },
          { id: 19, nama: "Pule Pandak", latin: "Rauvolfia serpentina", jenis: "Rimpang", keluhan: "Kulit", kandungan: "Reserpin, ajmalina, serpina", khasiat: "Membantu meredakan hipertensi dan menenangkan sistem saraf.", pengolahan: "Rebus potongan akar kering sesuai takaran medis/herbalis terstandar.", peringatan: "Dosis harus sangat tepat; penggunaan berlebih memicu depresi atau hipotensi." },
          { id: 20, nama: "Daun Alpukat", latin: "Persea americana", jenis: "Daun", keluhan: "Pencernaan", kandungan: "Flavonoid, quercetin, polifenol", khasiat: "Membantu meluruhkan batu ginjal dan menurunkan tekanan darah.", pengolahan: "Rebus 7 lembar daun alpukat segar dengan 3 gelas air hingga tersisa 1 gelas.", peringatan: "Efek diuretik kuat, pastikan konsumsi air putih yang cukup." },
          { id: 21, nama: "Daun Sirsak", latin: "Annona muricata", jenis: "Daun", keluhan: "Imun", kandungan: "Acetogenins, annonacin, linoleic acid", khasiat: "Meredakan nyeri sendi akibat asam urat dan meredakan peradangan.", pengolahan: "Rebus 10 lembar daun sirsak tua dengan 3 gelas air hingga tersisa 1 gelas.", peringatan: "Penggunaan jangka panjang berlebihan dapat mengganggu flora usus." },
          { id: 22, nama: "Brotowali", latin: "Tinospora crispa", jenis: "Rimpang", keluhan: "Kulit", kandungan: "Pikroretin, berberin, alkaloid", khasiat: "Meredakan gatal-gatal pada kulit dan mengontrol kadar gula darah.", pengolahan: "Rebus batang brotowali secukupnya untuk diminum atau digunakan membasuh kulit.", peringatan: "Rasa sangat pahit; hindari dosis berlebih agar tidak membebani hati." },
          { id: 23, nama: "Lempuyang", latin: "Zingiber zerumbet", jenis: "Rimpang", keluhan: "Pencernaan", kandungan: "Zerumbone, caryophyllene, limonene", khasiat: "Penambah nafsu makan alami dan meredakan infeksi cacing pita/cacingan.", pengolahan: "Parut lempuyang wangi, peras airnya, campur dengan sedikit air hangat.", peringatan: "Tidak disarankan untuk penderita gangguan asam lambung tinggi." },
          { id: 24, nama: "Kencur Hitam", latin: "Kaempferia parviflora", jenis: "Rimpang", keluhan: "Imun", kandungan: "Methoxyflavone, minyak atsiri", khasiat: "Meningkatkan kesegaran tubuh, melancarkan aliran darah, dan mengurangi lelah.", pengolahan: "Seduh ekstrak atau irisan kencur hitam kering dengan air panas.", peringatan: "Hindari konsumsi malam hari jika mengalami masalah insomnia." },
          { id: 25, nama: "Pegagan (Centella)", latin: "Centella asiatica", jenis: "Daun", keluhan: "Kulit", kandungan: "Asiaticoside, madecassoside, triterpenoid", khasiat: "Mempercepat penyembuhan luka kulit dan memelihara daya ingat.", pengolahan: "Seduh daun pegagan kering atau makan sebagai lalapan segar yang dicuci bersih.", peringatan: "Jeda penggunaan setelah 6 minggu berturut-turut." },
          { id: 26, nama: "Kunyit Hitam", latin: "Curcuma caesia", jenis: "Rimpang", keluhan: "Imun", kandungan: "Camphor, ar-turmerone, camphorate", khasiat: "Meringankan gejala sesak napas dan gangguan saluran pernapasan.", pengolahan: "Seduh 1/2 sendok teh bubuk kunyit hitam murni dengan air panas.", peringatan: "Gunakan sesuai takaran rekomendasi herbalis." },
          { id: 27, nama: "Daun Katuk", latin: "Sauropus androgynus", jenis: "Daun", keluhan: "Imun", kandungan: "Sesuitena, papaverina, vitamin A & C", khasiat: "Melancarkan dan meningkatkan produksi ASI pada ibu menyusui.", pengolahan: "Rebus daun katuk menjadi sayur bening bersama jagung muda.", peringatan: "Hindari mengonsumsi daun katuk mentah secara berlebihan." },
          { id: 28, nama: "Bawang Dayak", latin: "Eleutherine palmifolia", jenis: "Rimpang", keluhan: "Imun", kandungan: "Eleutherine, isoeleutherine, naphtoquinone", khasiat: "Membantu mengatasi masalah kewanitaan dan meredakan peradangan usus.", pengolahan: "Iris tipis 3-5 siung bawang dayak, seduh dengan 1 gelas air mendidih.", peringatan: "Dapat memicu reaksi hipersensitif pada individu tertentu." },
          { id: 29, nama: "Daun Landep", latin: "Barleria prionitis", jenis: "Daun", keluhan: "Kulit", kandungan: "Glikosida, kalium, tanin, flavonoid", khasiat: "Meredakan pegal linu, sakit pinggang, dan meredakan sakit gigi.", pengolahan: "Tumbuk daun landep segar dengan sedikit air, lumurkan pada area linu.", peringatan: "Hanya untuk pemakaian luar, jangan ditelan." },
          { id: 30, nama: "Jeruk Nipis", latin: "Citrus aurantiifolia", jenis: "Buah", keluhan: "Pencernaan", kandungan: "Asam sitrat, vitamin C, flavonoid, limonene", khasiat: "Meredakan tenggorokan gatal, batuk, dan menyegarkan pencernaan.", pengolahan: "Peras 1 buah jeruk nipis ke dalam air hangat, tambahkan 1 sendok kecap/madu.", peringatan: "Gunakan secara hati-hati bagi penderita maag akut." },
          { id: 31, nama: "Daun Beluntas", latin: "Pluchea indica", jenis: "Daun", keluhan: "Kulit", kandungan: "Alkaloid, flavonoid, tanin, minyak atsiri", khasiat: "Menghilangkan bau badan kurang sedap dan menjaga kesehatan pencernaan.", pengolahan: "Rebus 10 lembar daun beluntas dengan 2 gelas air hingga tersisa 1 gelas.", peringatan: "Relatif aman dikonsumsi harian dalam porsi wajar." },
          { id: 32, nama: "Buah Makasar", latin: "Brucea javanica", jenis: "Buah", keluhan: "Pencernaan", kandungan: "Bruceajavanin, yadanziolide, alkaloid", khasiat: "Membantu meredakan diare kronis dan infeksi disentri.", pengolahan: "Giling 1-2 biji buah makasar kering, masukkan ke dalam kapsul kosong.", peringatan: "Rasa sangat pahit dan berpotensi toxic jika dosis melebihi aturan." },
          { id: 33, nama: "Daun Saga", latin: "Abrus precatorius", jenis: "Daun", keluhan: "Pencernaan", kandungan: "Glikosida abrin, abrusgenin, luteolin", khasiat: "Obat alami untuk meredakan sariawan, panas dalam, dan batuk kering.", pengolahan: "Petik daun saga segar, cuci bersih, jemur sebentar lalu seduh seperti teh.", peringatan: "Biji buah saga sangat beracun! Hanya daunnya yang boleh digunakan." },
          { id: 34, nama: "Akar Manis", latin: "Glycyrrhiza glabra", jenis: "Rimpang", keluhan: "Pencernaan", kandungan: "Glycyrrhizin, glabridin, flavonoid", khasiat: "Meredakan iritasi lambung, mukosa usus, dan melegakan dahak.", pengolahan: "Rebus potongan kecil akar manis dengan 2 gelas air selama 10 menit.", peringatan: "Dapat memicu kenaikan tekanan darah jika diminum berlebih." },
          { id: 35, nama: "Temu Kunci", latin: "Boesenbergia rotunda", jenis: "Rimpang", keluhan: "Pencernaan", kandungan: "Panduratin A, pinostrobin, kardamonin", khasiat: "Mengatasi keputihan, menyegarkan badan, dan melancarkan pencernaan.", pengolahan: "Tambahkan irisan temu kunci ke dalam racikan sup atau masakan bening.", peringatan: "Aman dikonsumsi sebagai bumbu maupun racikan herbal." },
          { id: 36, nama: "Daun Srikaya", latin: "Annona squamosa", jenis: "Daun", keluhan: "Kulit", kandungan: "Alkaloid, borneo, kamfer, tanin", khasiat: "Membantu mematangkan bisul dan meredakan borok pada kulit.", pengolahan: "Tumbuk halus beberapa lembar daun srikaya tua, balurkan pada area bisul.", peringatan: "Jauhkan dari kontak langsung dengan mata." },
          { id: 37, nama: "Cengkeh", latin: "Syzygium aromaticum", jenis: "Buah", keluhan: "Kulit", kandungan: "Eugenol, eugenyl acetate, caryophyllene", khasiat: "Meredakan nyeri sakit gigi berlubang dan antiseptik mulut.", pengolahan: "Teteskan 1 tetes minyak cengkeh pada kapas kecil, tempelkan pada gigi berlubang.", peringatan: "Jangan menelan minyak cengkeh murni dalam jumlah banyak." },
          { id: 38, nama: "Daun Kembang Sepatu", latin: "Hibiscus rosa-sinensis", jenis: "Daun", keluhan: "Kulit", kandungan: "Taraxeryl acetate, hibiscetin, mucilago", khasiat: "Penurun demam pada anak-anak dan merawat kesuburan rambut.", pengolahan: "Tumbuk daun segar hingga mengeluarkan lendir bening, kompreskan pada dahi.", peringatan: "Hanya untuk pemakaian luar tubuh." },
          { id: 39, nama: "Daun Ungu", latin: "Graptophyllum pictum", jenis: "Daun", keluhan: "Pencernaan", kandungan: "Alkaloid, tanin, flavonoid, steroid", khasiat: "Sangat efektif meredakan gejala ambeien / wasir dan melancarkan BAB.", pengolahan: "Rebus 7 lembar daun ungu segar dengan 3 gelas air hingga tersisa 1 gelas.", peringatan: "Minum secara teratur sampai pembengkakan wasir menyusut." },
          { id: 40, nama: "Daun Kemuning", latin: "Murraya paniculata", jenis: "Daun", keluhan: "Kulit", kandungan: "Cadinene, bisabolene, geraniol", khasiat: "Meringankan nyeri haid dan membantu menjaga berat badan ideal.", pengolahan: "Seduh 1 genggam daun kemuning kering dengan air mendidih.", peringatan: "Hindari penggunaan pada wanita yang sedang hamil." },
          { id: 41, nama: "Temu Mangga", latin: "Curcuma mangga", jenis: "Rimpang", keluhan: "Pencernaan", kandungan: "Curcuminoid, tanin, minyak atsiri", khasiat: "Mengatasi masalah asam lambung dan membantu pemulihan rahim.", pengolahan: "Parut temu mangga segar, peras airnya, minum dengan campuran air hangat.", peringatan: "Konsumsi secukupnya untuk menghindari mual." },
          { id: 42, nama: "Daun Suji", latin: "Dracaena angustifolia", jenis: "Daun", keluhan: "Pencernaan", kandungan: "Klorofil, alkaloid, saponin", khasiat: "Meredakan nyeri haid, disentri, dan sebagai antioksidan alami.", pengolahan: "Tumbuk daun suji bersih, tambahkan sedikit air, peras dan minum airnya.", peringatan: "Gunakan daun yang segar agar air perasan tidak cepat basi." },
          { id: 43, nama: "Pasak Bumi", latin: "Eurycoma longifolia", jenis: "Rimpang", keluhan: "Imun", kandungan: "Eurycomanone, quassinoid, eurylene", khasiat: "Meningkatkan stamina, vitalitas pria, dan mengurangi rasa lelah.", pengolahan: "Rebus irisan kayu pasak bumi dengan 2 gelas air sampai mendidih.", peringatan: "Dapat memicu efek gelisah jika dikonsumsi berlebihan atau sebelum tidur." },
          { id: 44, nama: "Daun Sambung Nyawa", latin: "Gynura procumbens", jenis: "Daun", keluhan: "Imun", kandungan: "Flavonoid, sterol, minyak atsiri, tanin", khasiat: "Menjaga keseimbangan tekanan darah dan meredakan peradangan.", pengolahan: "Makan 3-4 lembar daun segar cuci bersih sebagai lalapan harian.", peringatan: "Lakukan pemeriksaan tekanan darah secara berkala." },
          { id: 45, nama: "Daun Tempuyung", latin: "Sonchus arvensis", jenis: "Daun", keluhan: "Pencernaan", kandungan: "Kalium, silika, flavonoid, taraksasterol", khasiat: "Meluruhkan batu ginjal dan batu kandung kemih.", pengolahan: "Rebus 5 lembar daun tempuyung kering dengan 3 gelas air hingga tersisa 1 gelas.", peringatan: "Imbangi dengan minum air putih minimal 2 liter sehari." },
          { id: 46, nama: "Buah Ciplukan", latin: "Physalis angulata", jenis: "Buah", keluhan: "Imun", kandungan: "Physalin, saponin, flavonoid, alkoloid", khasiat: "Menurunkan kadar gula darah dan mengobati penyakit asma.", pengolahan: "Konsumsi 5-10 butir buah ciplukan yang sudah matang sempurna (kuning).", peringatan: "Jangan mengonsumsi buah yang masih mentah (hijau) karena beracun." },
          { id: 47, nama: "Daun Sosor Bebek", latin: "Kalanchoe pinnata", jenis: "Daun", keluhan: "Kulit", kandungan: "Asam malat, damar, zat lendir, bryophyllin", khasiat: "Meredakan demam, sakit kepala, dan menghentikan pendarahan luka.", pengolahan: "Lumatkan daun sosor bebek segar, tempelkan pada dahi atau area luka.", peringatan: "Aman untuk penggunaan luar tubuh." },
          { id: 48, nama: "Kulit Kayu Pule", latin: "Alstonia scholaris", jenis: "Rimpang", keluhan: "Imun", kandungan: "Echitamine, ditamine, echitenine", khasiat: "Meringankan gejala malaria, demam tinggi, dan kurap.", pengolahan: "Rebus 1 potong kecil kulit kayu pule dengan 3 gelas air hingga tersisa 1 gelas.", peringatan: "Rasa sangat pahit; jangan mengonsumsi berlebihan." },
          { id: 49, nama: "Daun Binahong", latin: "Anredera cordifolia", jenis: "Daun", keluhan: "Kulit", kandungan: "Flavonoid, oleanolic acid, asam askorbat", khasiat: "Mempercepat penyembuhan luka jahitan/operasi dan radang maag.", pengolahan: "Rebus 7-9 lembar daun binahong segar dengan 2 gelas air sampai mendidih.", peringatan: "Dapat meningkatkan denyut jantung bagi sebagian orang yang sensitif." },
          { id: 50, nama: "Buah Parijoto", latin: "Medinilla magnifica", jenis: "Buah", keluhan: "Imun", kandungan: "Kalsium, antioksidan, flavonoid, saponin", khasiat: "Menjaga stamina ibu hamil dan membantu meningkatkan kesuburan.", pengolahan: "Cuci bersih buah parijoto segar, lalu dikonsumsi langsung.", peringatan: "Konsumsi secukupnya dalam batas wajar." }
        ];

        // 1. Render Katalog Unggulan di Beranda (Top 6)
        function renderUnggulan() {
          const container = document.getElementById('grid-unggulan');
          if(!container) return;
          container.innerHTML = '';
          dataTanaman.slice(0, 6).forEach(t => {
            container.appendChild(buatKartuTanaman(t));
          });
        }

        // 2. Render Katalog Lengkap (Halaman Katalog Umum)
        function renderKatalogLengkap(list = dataTanaman) {
          const container = document.getElementById('grid-katalog-lengkap');
          if(!container) return;
          
          container.style.display = 'grid';
          container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
          container.style.gap = '20px';

          const headerKatalog = document.getElementById('judul-halaman-katalog');
          if(headerKatalog) {
            headerKatalog.innerHTML = `<h2>Katalog Seluruh Tanaman Obat (${list.length} Item)</h2><p style="color:#718096; font-size:0.9rem;">Daftar lengkap ensiklopedia flora obat tradisional asli Indonesia.</p>`;
          }

          container.innerHTML = '';
          list.forEach(t => {
            container.appendChild(buatKartuTanaman(t));
          });
        }

        // 2b. Render Khusus Hasil Filter dari Halaman Kategori
        function renderHalamanKategoriFilter(tipeFilter, nilaiFilter, list) {
          const container = document.getElementById('grid-katalog-lengkap');
          const headerKatalog = document.getElementById('judul-halaman-katalog');
          if(!container) return;

          container.style.display = 'grid';
          container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
          container.style.gap = '20px';

          if(headerKatalog) {
            headerKatalog.innerHTML = `
              <div style="background: #ebf8ff; border-left: 4px solid #3182ce; padding: 12px 16px; border-radius: 4px; margin-bottom: 15px;">
                <h2 style="margin: 0; color: #2b6cb0; font-size: 1.2rem;">Hasil Filter ${tipeFilter}: "${nilaiFilter}"</h2>
                <p style="margin: 4px 0 0 0; color: #4a5568; font-size: 0.9rem;">Menampilkan ${list.length} tanaman obat spesifik untuk kategori ini.</p>
              </div>
            `;
          }

          container.innerHTML = '';
          if(list.length === 0) {
            container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #a0aec0; padding: 40px;">Tidak ditemukan tanaman untuk kategori ini.</p>`;
            return;
          }
          
          list.forEach(t => {
            container.appendChild(buatKartuTanaman(t));
          });
        }

        // Helper: Komponen Kartu Tanaman
        function buatKartuTanaman(t) {
          const card = document.createElement('div');
          card.className = 'card-flora';

          let ikonJenis = "🌿";
          if (t.jenis === "Rimpang") ikonJenis = "🫚";
          if (t.jenis === "Buah") ikonJenis = "🍋";

          card.style.cssText = `
            background: linear-gradient(135deg, #ffffff 0%, #f7fafc 100%);
            border: 1px solid #e2e8f0;
            border-top: 4px solid #3182ce;
            border-radius: 10px;
            padding: 18px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
            cursor: pointer;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
          `;
          
          card.onmouseover = () => {
            card.style.transform = "translateY(-3px)";
            card.style.boxShadow = "0 8px 16px rgba(0,0,0,0.08)";
            card.style.borderColor = "#3182ce";
          };
          card.onmouseout = () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 2px 4px rgba(0,0,0,0.02)";
            card.style.borderColor = "#e2e8f0";
          };

          card.onclick = () => bukaDetail(t.id);
          
          card.innerHTML = `
            <div style="position: absolute; right: -8px; bottom: -12px; font-size: 4.5rem; opacity: 0.05; font-weight: bold; color: #2d3748; z-index: 0; user-select: none;">
              #${t.id}
            </div>

            <div style="position: relative; z-index: 1;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 6px;">
                <h3 style="margin: 0; font-size: 1.05rem; color: #2d3748; line-height: 1.3; flex: 1;">${t.id}. ${t.nama}</h3>
                <span style="font-size: 0.75rem; background: #edf2f7; color: #4a5568; padding: 3px 8px; border-radius: 12px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;">
                  ${ikonJenis} ${t.jenis}
                </span>
              </div>
              <p style="margin: 0 0 10px 0; font-style: italic; font-size: 0.85rem; color: #718096;">${t.latin}</p>
              <p style="margin: 0 0 8px 0; font-size: 0.9rem; color: #4a5568; line-height: 1.4;"><b>Khasiat:</b> ${t.khasiat.length > 70 ? t.khasiat.substring(0, 70) + '...' : t.khasiat}</p>
            </div>

            <div style="position: relative; z-index: 1; margin-top: 12px; padding-top: 8px; border-top: 1px dashed #edf2f7; display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem;">
              <span style="color: #718096; background: #f7fafc; padding: 2px 6px; border-radius: 4px;">Kategori: <b>${t.keluhan}</b></span>
              <span style="color: #3182ce; font-weight: 600;">Lihat Detail &rarr;</span>
            </div>
          `;
          return card;
        }

        // 3. Fungsi Navigasi Halaman Utama
        function bukaHalaman(namaHalaman) {
          document.querySelectorAll('.halaman').forEach(h => h.classList.add('hidden'));
          
          if (namaHalaman === 'beranda') {
            const el = document.getElementById('halaman-beranda');
            if (el) el.classList.remove('hidden');
            renderUnggulan();
          } else if (namaHalaman === 'katalog') {
            const el = document.getElementById('halaman-katalog');
            if (el) el.classList.remove('hidden');
            renderKatalogLengkap(dataTanaman);
          } else if (namaHalaman === 'kategori') {
            const el = document.getElementById('halaman-kategori');
            if (el) el.classList.remove('hidden');
            renderHalamanKategoriUtama();
          } else if (namaHalaman === 'artikel') {
            const el = document.getElementById('halaman-artikel');
            if (el) el.classList.remove('hidden');
          } else if (namaHalaman === 'tentang') {
            const el = document.getElementById('halaman-tentang');
            if (el) el.classList.remove('hidden');
          }
        }

        // Render Halaman Menu Utama Kategori & Manfaat (Diperbarui dengan teks yang diminta)
        function renderHalamanKategoriUtama() {
          const container = document.getElementById('isi-halaman-kategori');
          if (!container) return;

          container.innerHTML = `
            <div style="margin-bottom: 25px;">
              <h2 style="color: #064e3b; margin-bottom: 12px; font-size: 1.5rem;">Manfaat & Kategori Tumbuhan Herbal</h2>
              <p style="color: #4a5568; margin-bottom: 20px;">Tumbuhan herbal memiliki berbagai kategori pemanfaatan dan khasiat kesehatan yang luas untuk pengobatan tradisional maupun pemeliharaan tubuh.</p>
              
              <h3 style="color: #2d3748; margin-top: 20px; margin-bottom: 8px; font-size: 1.2rem;">Kategori Tumbuhan Herbal</h3>
              <p style="color: #4a5568; margin-bottom: 10px;">Berdasarkan jenis dan kegunaannya secara umum di Indonesia, tumbuhan herbal dikelompokkan ke dalam beberapa kategori:</p>
              <ul style="margin-left: 20px; color: #4a5568; margin-bottom: 20px;">
                <li style="margin-bottom: 6px;"><b>Rimpang / Akar-akaran:</b> Meliputi jahe, kunyit, kencur, lengkuas, dan temulawak yang kaya akan minyak atsiri dan kurkumin.</li>
                <li style="margin-bottom: 6px;"><b>Daun-daunan obat:</b> Meliputi daun sirih, daun kelor, kemangi, dan kumis kucing yang sering diolah dengan cara diseduh atau direbus.</li>
                <li style="margin-bottom: 6px;"><b>Batang / Kayu herbal:</b> Meliputi kayu secang dan serai yang dimanfaatkan bagian kayunya atau batangnya.</li>
                <li style="margin-bottom: 6px;"><b>Bunga dan Biji:</b> Meliputi bunga rosella dan jintan hitam (habbatussauda).</li>
              </ul>

              <h3 style="color: #2d3748; margin-top: 20px; margin-bottom: 8px; font-size: 1.2rem;">Manfaat Utama Tumbuhan Herbal</h3>
              <p style="color: #4a5568; margin-bottom: 10px;">Tumbuhan herbal dimanfaatkan untuk berbagai fungsi kesehatan, antara lain:</p>
              <ul style="margin-left: 20px; color: #4a5568; margin-bottom: 20px;">
                <li style="margin-bottom: 6px;"><b>Meredakan gangguan pencernaan:</b> Seperti pada jahe, kunyit, dan temulawak untuk mengatasi perut kembung atau mual.</li>
                <li style="margin-bottom: 6px;"><b>Meningkatkan daya tahan tubuh:</b> Seperti kandungan antioksidan pada Alodokter (melalui tanaman apotek hidup seperti kelor dan meniran).</li>
                <li style="margin-bottom: 6px;"><b>Menurunkan peradangan dan nyeri:</b> Seperti kurkumin pada kunyit atau galangin pada lengkuas.</li>
                <li style="margin-bottom: 6px;"><b>Membantu pengobatan penyakit metabolik:</b> Seperti sambiloto atau kumis kucing untuk membantu mengontrol kadar gula darah atau asam urat. Halodoc</li>
                <li style="margin-bottom: 6px;"><b>Membuat resep ramuan tradisional tertentu</b> (misalnya untuk masuk angin atau meredakan batuk).</li>
              </ul>
            </div>

            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;">

            <div style="margin-bottom: 20px;">
              <h3 style="color: #2d3748; margin-bottom: 6px;">Pilih Berdasarkan Jenis Tanaman</h3>
              <p style="color: #718096; font-size: 0.95rem;">Klik salah satu kategori di bawah untuk menyaring daftar tanaman obat dalam katalog:</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; margin-top: 15px;">
                <div onclick="filterKategori('Rimpang')" style="background: #fff; border: 1px solid #e2e8f0; border-left: 4px solid #3182ce; border-radius: 8px; padding: 16px; cursor: pointer; transition: 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                  <h4 style="margin:0; font-size: 1.1rem; color: #2b6cb0;">🫚 Rimpang</h4>
                  <p style="margin: 5px 0 0 0; font-size: 0.85rem; color: #4a5568;">Jahe, Kunyit, Temulawak, dll.</p>
                </div>
                <div onclick="filterKategori('Daun')" style="background: #fff; border: 1px solid #e2e8f0; border-left: 4px solid #38a169; border-radius: 8px; padding: 16px; cursor: pointer; transition: 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                  <h4 style="margin:0; font-size: 1.1rem; color: #276749;">🌿 Daun</h4>
                  <p style="margin: 5px 0 0 0; font-size: 0.85rem; color: #4a5568;">Sirih, Salam, Kelor, Meniran, dll.</p>
                </div>
                <div onclick="filterKategori('Buah')" style="background: #fff; border: 1px solid #e2e8f0; border-left: 4px solid #dd6b20; border-radius: 8px; padding: 16px; cursor: pointer; transition: 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                  <h4 style="margin:0; font-size: 1.1rem; color: #c05621;">🍋 Buah</h4>
                  <p style="margin: 5px 0 0 0; font-size: 0.85rem; color: #4a5568;">Mengkudu, Mahkota Dewa, Jeruk Nipis, dll.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 style="color: #2d3748; margin-bottom: 6px;">Pilih Berdasarkan Indikasi / Manfaat</h3>
              <p style="color: #718096; font-size: 0.95rem;">Temukan tanaman herbal berdasarkan kelompok khasiat dan keluhan kesehatan:</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px; margin-top: 15px;">
                <div onclick="filterKeluhan('Pencernaan')" style="background: #fff; border: 1px solid #cbd5e0; border-left: 4px solid #3182ce; border-radius: 8px; padding: 16px; cursor: pointer;">
                  <h4 style="margin: 0; color: #2d3748; font-size: 1rem;">🍲 Sistem Pencernaan</h4>
                  <p style="margin: 4px 0 0 0; font-size: 0.8rem; color: #718096;">Asam lambung, maag, diare, & ginjal.</p>
                </div>
                <div onclick="filterKeluhan('Imun')" style="background: #fff; border: 1px solid #cbd5e0; border-left: 4px solid #38a169; border-radius: 8px; padding: 16px; cursor: pointer;">
                  <h4 style="margin: 0; color: #2d3748; font-size: 1rem;">🛡️ Imunitas & Vitalitas</h4>
                  <p style="margin: 4px 0 0 0; font-size: 0.8rem; color: #718096;">Daya tahan tubuh, stamina, & hipertensi.</p>
                </div>
                <div onclick="filterKeluhan('Kulit')" style="background: #fff; border: 1px solid #cbd5e0; border-left: 4px solid #dd6b20; border-radius: 8px; padding: 16px; cursor: pointer;">
                  <h4 style="margin: 0; color: #2d3748; font-size: 1rem;">✨ Kulit & Pemakaian Luar</h4>
                  <p style="margin: 4px 0 0 0; font-size: 0.8rem; color: #718096;">Penyembuh luka, gatal, & antiseptik.</p>
                </div>
              </div>
            </div>
          `;
        }

        // 4. Logika Filter Berdasarkan Kategori & Manfaat
        function filterKategori(jenis) {
          document.querySelectorAll('.halaman').forEach(h => h.classList.add('hidden'));
          const elKatalog = document.getElementById('halaman-katalog');
          if (elKatalog) elKatalog.classList.remove('hidden');

          const hasil = dataTanaman.filter(t => t.jenis.toLowerCase() === jenis.toLowerCase());
          renderHalamanKategoriFilter("Jenis Tanaman", jenis, hasil);
        }

        function filterKeluhan(keluhan) {
          document.querySelectorAll('.halaman').forEach(h => h.classList.add('hidden'));
          const elKatalog = document.getElementById('halaman-katalog');
          if (elKatalog) elKatalog.classList.remove('hidden');

          const hasil = dataTanaman.filter(t => t.keluhan.toLowerCase() === keluhan.toLowerCase());
          renderHalamanKategoriFilter("Manfaat & Kategori", keluhan, hasil);
        }

        function cariTanamanHero() {
          const inputEl = document.getElementById('inputCariHero');
          if (!inputEl) return;
          const q = inputEl.value.toLowerCase();
          bukaHalaman('katalog');
          const inputKatalog = document.getElementById('inputCariKatalog');
          if (inputKatalog) inputKatalog.value = q;
          cariTanamanKatalog();
        }

        function cariTanamanKatalog() {
          const inputEl = document.getElementById('inputCariKatalog');
          if (!inputEl) return;
          const q = inputEl.value.toLowerCase();
          const hasil = dataTanaman.filter(t => 
            t.nama.toLowerCase().includes(q) || 
            t.latin.toLowerCase().includes(q) ||
            t.khasiat.toLowerCase().includes(q) ||
            t.jenis.toLowerCase().includes(q) ||
            t.keluhan.toLowerCase().includes(q)
          );
          renderHalamanKategoriFilter("Pencarian Kata Kunci", q, hasil);
        }

        // 5. Modal Detail Tanaman
        function bukaDetail(id) {
          const t = dataTanaman.find(item => item.id === id);
          if (!t) return;
          
          const isi = document.getElementById('isiDetailTanaman');
          if (!isi) return;
          
          isi.innerHTML = `
            <h2 style="margin-top:0; color: #2d3748;">${t.nama}</h2>
            <p style="font-style: italic; color: #718096; margin-top: -5px;">${t.latin} • <span style="color:#3182ce;">${t.jenis}</span></p>
            
            <div style="background: #f7fafc; padding: 12px; border-radius: 6px; margin-bottom: 10px;">
              <strong>🧪 Kandungan Kimia/Alami:</strong>
              <p style="margin: 4px 0 0 0; color: #4a5568;">${t.kandungan}</p>
            </div>

            <div style="background: #f7fafc; padding: 12px; border-radius: 6px; margin-bottom: 10px;">
              <strong>✨ Khasiat Utama & Kategori Manfaat:</strong>
              <p style="margin: 4px 0 0 0; color: #4a5568;">${t.khasiat} (Fokus Kategori: <b>${t.keluhan}</b>)</p>
            </div>

            <div style="background: #f7fafc; padding: 12px; border-radius: 6px; margin-bottom: 10px;">
              <strong>☕ Cara Pengolahan / Resep Tradisional:</strong>
              <p style="margin: 4px 0 0 0; color: #4a5568;">${t.pengolahan}</p>
            </div>

            <div style="background: #fff5f5; border-left: 4px solid #e53e3e; padding: 12px; border-radius: 0 6px 6px 0;">
              <strong style="color: #c53030;">⚠️ Peringatan & Efek Samping:</strong>
              <p style="margin: 4px 0 0 0; color: #742a2a;">${t.peringatan}</p>
            </div>
          `;
          const modal = document.getElementById('modalDetail');
          if (modal) modal.classList.remove('hidden');
        }

        function tutupModal() {
          const modal = document.getElementById('modalDetail');
          if (modal) modal.classList.add('hidden');
        }

        // Inisialisasi awal saat dimuat
        renderUnggulan();
    </script>
</body>
</html>
