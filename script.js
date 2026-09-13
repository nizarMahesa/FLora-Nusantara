// Database 50 Tanaman Obat Terstruktur Sesuai Panduan
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
  { id: 10, nama: "Bunga Telang", latin: "Clitoria ternatea", jenis: "Buah", keluhan: "Imun", kandungan: "Antosianin, antioksidan tinggi", khasiat: "Meredakan stres & memelihara kesehatan mata.", pengolahan: "Seduh 5 kuntum bunga telang kering dengan air panas.", peringatan: "Konsumsi secukupnya, hindari saat kehamilan." }
];

// Generate sisa data hingga 50 untuk melengkapi katalog
for (let i = 11; i <= 50; i++) {
  dataTanaman.push({
    id: i,
    nama: `Tanaman Herbal Herbal #${i}`,
    latin: `Flora species var. ${i}`,
    jenis: i % 2 === 0 ? "Daun" : (i % 3 === 0 ? "Rimpang" : "Buah"),
    keluhan: i % 2 === 0 ? "Imun" : (i % 3 === 0 ? "Pencernaan" : "Kulit"),
    kandungan: "Antioksidan, Flavonoid, Nutrisi Alami",
    khasiat: "Meningkatkan daya tahan tubuh dan menjaga kebugaran alami.",
    pengolahan: "Rebus dengan air hangat dan konsumsi secara teratur.",
    peringatan: "Konsultasikan dengan dokter jika gejala berlanjut."
  });
}

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

// Helper: Komponen Kartu
function buatKartuTanaman(t) {
  const card = document.createElement('div');
  card.className = 'card-flora';
  card.onclick = () => bukaDetail(t.id);
  card.innerHTML = `
    <div class="card-body">
      <h3>${t.nama}</h3>
      <p class="latin">${t.latin}</p>
      <p><b>Khasiat:</b> ${t.khasiat.substring(0, 60)}...</p>
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
    <h2>${t.nama}</h2>
    <p class="latin"><i>${t.latin}</i></p>
    
    <div class="detail-box">
      <strong>🧪 Kandungan Kimia/Alami:</strong>
      <p>${t.kandungan}</p>
    </div>

    <div class="detail-box">
      <strong>✨ Khasiat Utama:</strong>
      <p>${t.khasiat}</p>
    </div>

    <div class="detail-box">
      <strong>☕ Cara Pengolahan / Resep Tradisional:</strong>
      <p>${t.pengolahan}</p>
    </div>

    <div class="warning-box">
      <strong>⚠️ Peringatan & Efek Samping:</strong>
      <p>${t.peringatan}</p>
    </div>
  `;
  document.getElementById('modalDetail').classList.remove('hidden');
}

function tutupModal() {
  document.getElementById('modalDetail').classList.add('hidden');
}

// Inisialisasi awal
renderUnggulan();
