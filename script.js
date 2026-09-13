// Database 50 Tanaman Obat Tradisional Asli Indonesia (Tanpa Gambar Foto, Desain Background Kartu Estetik)
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

// 2. Render Katalog Lengkap (50 Tanaman)
function renderKatalogLengkap(list = dataTanaman) {
  const container = document.getElementById('grid-katalog-lengkap');
  if(!container) return;
  container.innerHTML = '';
  list.forEach(t => {
    container.appendChild(buatKartuTanaman(t));
  });
}

// Helper: Komponen Kartu dengan Desain Background Estetik Herbal (Tanpa Foto)
function buatKartuTanaman(t) {
  const card = document.createElement('div');
  
  // Tentukan ikon background berdasarkan jenis tanaman
  let ikonJenis = "🌿";
  if (t.jenis === "Rimpang") ikonJenis = "🫚";
  if (t.jenis === "Buah") ikonJenis = "🍋";

  card.style.cssText = `
    background: linear-gradient(135deg, #ffffff 0%, #f4fbf7 100%);
    border: 1px solid #d8ede1;
    border-top: 4px solid #2f855a;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(47, 133, 90, 0.04);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease;
  `;
  
  card.onmouseover = () => {
    card.style.transform = "translateY(-4px)";
    card.style.boxShadow = "0 10px 20px rgba(47, 133, 90, 0.12)";
    card.style.borderColor = "#2f855a";
  };
  card.onmouseout = () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 4px 6px rgba(47, 133, 90, 0.04)";
    card.style.borderColor = "#d8ede1";
  };

  card.onclick = () => bukaDetail(t.id);
  
  card.innerHTML = `
    <!-- Watermark Nomor ID & Ikon Estetik di Sudut Belakang -->
    <div style="position: absolute; right: -10px; bottom: -15px; font-size: 5rem; opacity: 0.06; font-weight: bold; color: #2f855a; z-index: 0; user-select: none;">
      #${t.id}
    </div>
    
    <div style="position: relative; z-index: 1;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
        <h3 style="margin: 0; font-size: 1.15rem; color: #1a202c; font-weight: 700;">${t.id}. ${t.nama}</h3>
        <span style="font-size: 0.75rem; background: #e6f4ea; color: #137333; padding: 3px 10px; border-radius: 20px; font-weight: 600; display: flex; align-items: center; gap: 4px;">
          ${ikonJenis} ${t.jenis}
        </span>
      </div>
      <p style="margin: 0 0 12px 0; font-style: italic; font-size: 0.85rem; color: #4a5568;">${t.latin}</p>
      <p style="margin: 0; font-size: 0.9rem; color: #2d3748; line-height: 1.5;"><b>Khasiat:</b> ${t.khasiat.length > 70 ? t.khasiat.substring(0, 70) + '...' : t.khasiat}</p>
    </div>

    <div style="position: relative; z-index: 1; margin-top: 16px; padding-top: 10px; border-top: 1px dashed #cbd5e0; display: flex; justify-content: space-between; align-items: center;">
      <span style="font-size: 0.75rem; color: #718096; background: #edf2f7; padding: 2px 6px; border-radius: 4px;">Indikasi: ${t.keluhan}</span>
      <span style="font-size: 0.85rem; color: #2f855a; font-weight: 600;">Lihat Detail &rarr;</span>
    </div>
  `;
  return card;
}

// 3. Fungsi Navigasi Halaman
function bukaHalaman(namaHalaman) {
  document.querySelectorAll('.halaman').forEach(h => h.classList.add('hidden'));
  
  if (namaHalaman === 'beranda') {
    document.getElementById('halaman-beranda').classList.remove('hidden');
  } else if (namaHalaman === 'katalog' || namaHalaman === 'kategori') {
    document.getElementById('halaman-katalog').classList.remove('hidden');
    renderKatalogLengkap();
  } else if (namaHalaman === 'artikel') {
    document.getElementById('halaman-artikel').classList.remove('hidden');
  } else if (namaHalaman === 'tentang') {
    document.getElementById('halaman-tentang').classList.remove('hidden');
  }
}

// 4. Fitur Filter & Pencarian
function filterKategori(jenis) {
  bukaHalaman('katalog');
  const hasil = dataTanaman.filter(t => t.jenis.toLowerCase().includes(jenis.toLowerCase()));
  renderKatalogLengkap(hasil);
}

function filterKeluhan(keluhan) {
  bukaHalaman('katalog');
  const hasil = dataTanaman.filter(t => t.keluhan.toLowerCase().includes(keluhan.toLowerCase()));
  renderKatalogLengkap(hasil);
}

function cariTanamanHero() {
  const q = document.getElementById('inputCariHero').value.toLowerCase();
  bukaHalaman('katalog');
  document.getElementById('inputCariKatalog').value = q;
  cariTanamanKatalog();
}

function cariTanamanKatalog() {
  const q = document.getElementById('inputCariKatalog').value.toLowerCase();
  const hasil = dataTanaman.filter(t => 
    t.nama.toLowerCase().includes(q) || 
    t.latin.toLowerCase().includes(q) ||
    t.khasiat.toLowerCase().includes(q)
  );
  renderKatalogLengkap(hasil);
}

// 5. Modal Detail Tanaman Terstruktur
function bukaDetail(id) {
  const t = dataTanaman.find(item => item.id === id);
  if (!t) return;
  
  const isi = document.getElementById('isiDetailTanaman');
  isi.innerHTML = `
    <h2 style="margin-top:0; color: #1a202c; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">${t.nama}</h2>
    <p style="font-style: italic; color: #4a5568; margin-top: -4px; margin-bottom: 16px;">${t.latin} • <span style="color:#2f855a; font-weight: 600;">${t.jenis}</span></p>
    
    <div style="background: #f0fdf4; border-left: 4px solid #2f855a; padding: 12px; border-radius: 0 8px 8px 0; margin-bottom: 12px;">
      <strong style="color: #22543d;">🧪 Kandungan Kimia/Alami:</strong>
      <p style="margin: 4px 0 0 0; color: #2d3748;">${t.kandungan}</p>
    </div>

    <div style="background: #f0fdf4; border-left: 4px solid #319795; padding: 12px; border-radius: 0 8px 8px 0; margin-bottom: 12px;">
      <strong style="color: #234e52;">✨ Khasiat Utama:</strong>
      <p style="margin: 4px 0 0 0; color: #2d3748;">${t.khasiat}</p>
    </div>

    <div style="background: #f7fafc; border-left: 4px solid #4a5568; padding: 12px; border-radius: 0 8px 8px 0; margin-bottom: 12px;">
      <strong style="color: #2d3748;">☕ Cara Pengolahan / Resep Tradisional:</strong>
      <p style="margin: 4px 0 0 0; color: #2d3748;">${t.pengolahan}</p>
    </div>

    <div style="background: #fff5f5; border-left: 4px solid #e53e3e; padding: 12px; border-radius: 0 8px 8px 0;">
      <strong style="color: #c53030;">⚠️ Peringatan & Efek Samping:</strong>
      <p style="margin: 4px 0 0 0; color: #742a2a;">${t.peringatan}</p>
    </div>
  `;
  document.getElementById('modalDetail').classList.remove('hidden');
}

function tutupModal() {
  document.getElementById('modalDetail'].classList.add('hidden');
}

// Inisialisasi awal saat script dimuat
renderUnggulan();
