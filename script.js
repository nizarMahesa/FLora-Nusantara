// Data 50 Tanaman
const dataTanaman = [
  { id: 1, nama: "Kunyit", latin: "Curcuma longa", khasiat: "Antiinflamasi, meredakan gangguan pencernaan", pengolahan: "Rebus 2 ruas kunyit parut dengan 1 gelas air." },
  { id: 2, nama: "Jahe Merah", latin: "Zingiber officinale var. rubrum", khasiat: "Menghangatkan tubuh, batuk/flu", pengolahan: "Seduh jahe geprek dengan air panas." },
  { id: 3, nama: "Temulawak", latin: "Curcuma zanthorrhiza", khasiat: "Menambah nafsu makan, menjaga fungsi hati", pengolahan: "Rebus irisan temulawak kering." },
  { id: 4, nama: "Kencur", latin: "Kaempferia galanga", khasiat: "Meredakan batuk dan melegakan tenggorokan", pengolahan: "Kunyah langsung atau peras airnya." },
  { id: 5, nama: "Sambiloto", latin: "Andrographis paniculata", khasiat: "Menurunkan demam & tekanan darah", pengolahan: "Rebus daun sambiloto segar." },
  { id: 6, nama: "Daun Sirih", latin: "Piper betle", khasiat: "Antiseptik alami", pengolahan: "Rebus daun untuk air kumur/cuci luka." },
  { id: 7, nama: "Kumis Kucing", latin: "Orthosiphon aristatus", khasiat: "Peluruh batu ginjal & infeksi saluran kemih", pengolahan: "Seduh daun kering dengan air panas." },
  { id: 8, nama: "Lidah Buaya", latin: "Aloe vera", khasiat: "Penyembuh luka bakar & perawatan kulit", pengolahan: "Oleskan gel beningnya pada kulit." },
  { id: 9, nama: "Daun Salam", latin: "Syzygium polyanthum", khasiat: "Menurunkan kolesterol & asam urat", pengolahan: "Rebus 10 lembar daun salam." },
  { id: 10, nama: "Mahkota Dewa", latin: "Phaleria macrocarpa", khasiat: "Mengobati diabetes & hipertensi", pengolahan: "Rebus irisan buah kering (jangan makan bijinya)." },
  { id: 11, nama: "Meniran", latin: "Phyllanthus niruri", khasiat: "Meningkatkan sistem imun", pengolahan: "Rebus seluruh bagian tanaman." },
  { id: 12, nama: "Daun Kelor", latin: "Moringa oleifera", khasiat: "Kaya antioksidan & nutrisi", pengolahan: "Diolah jadi sayur bening." },
  { id: 13, nama: "Pegagan", latin: "Centella asiatica", khasiat: "Meningkatkan daya ingat & daya tahan tubuh", pengolahan: "Rebus daun pegagan segar." },
  { id: 14, nama: "Mengkudu", latin: "Morinda citrifolia", khasiat: "Menurunkan tekanan darah tinggi", pengolahan: "Peras buah matang dan minum airnya." },
  { id: 15, nama: "Jambu Biji (Daun)", latin: "Psidium guajava", khasiat: "Meredakan diare", pengolahan: "Rebus daun muda jambu biji." },
  { id: 16, nama: "Bawang Dayak", latin: "Eleutherine bulbosa", khasiat: "Mencegah kanker & kista", pengolahan: "Rebus irisan umbi segar." },
  { id: 17, nama: "Sirsak (Daun)", latin: "Annona muricata", khasiat: "Anti-kanker & meredakan nyeri", pengolahan: "Rebus 10 lembar daun sirsak tua." },
  { id: 18, nama: "Bunga Sepatu (Daun)", latin: "Hibiscus rosa-sinensis", khasiat: "Menurunkan panas demam", pengolahan: "Tumbuk daun lalu balurkan di dahi." },
  { id: 19, nama: "Kejibeling", latin: "Strobilanthes crispus", khasiat: "Peluruh batu ginjal", pengolahan: "Rebus daun kejibeling." },
  { id: 20, nama: "Kapurus/Pandan", latin: "Pandanus amaryllifolius", khasiat: "Penenang alami & menurunkan darah tinggi", pengolahan: "Rebus daun pandan segar." },
  { id: 21, nama: "Akar Manis", latin: "Glycyrrhiza glabra", khasiat: "Meredakan batuk berdahak", pengolahan: "Rebus batang/akar manis." },
  { id: 22, nama: "Sereh", latin: "Cymbopogon citratus", khasiat: "Meredakan nyeri sendi & masuk angin", pengolahan: "Geprek batang sereh lalu rebus." },
  { id: 23, nama: "Alang-alang (Akar)", latin: "Imperata cylindrica", khasiat: "Meredakan panas dalam & peluruh kencing", pengolahan: "Rebus akar alang-alang bersih." },
  { id: 24, nama: "Brotowali", latin: "Tinospora crispa", khasiat: "Mengobati gatal-gatal & diabetes", pengolahan: "Rebus batang brotowali." },
  { id: 25, nama: "Kencur Hitam", latin: "Kaempferia parviflora", khasiat: "Stamina & vitalitas", pengolahan: "Diseduh air hangat." },
  { id: 26, nama: "Bunga Telang", latin: "Clitoria ternatea", khasiat: "Kaya antioksidan & meredakan stres", pengolahan: "Seduh bunga telang kering." },
  { id: 27, nama: "Daun Jati Belanda", latin: "Guazuma ulmifolia", khasiat: "Pelangsing alami", pengolahan: "Rebus daun kering." },
  { id: 28, nama: "Daun Sendok", latin: "Plantago major", khasiat: "Peluruh air seni & radang paru", pengolahan: "Rebus daun segar." },
  { id: 29, nama: "Lengkuas", latin: "Alpinia galanga", khasiat: "Mengobati kurap & panu", pengolahan: "Gosokkan lengkuas ke kulit atau rebus." },
  { id: 30, nama: "Kunci Dempet", latin: "Boesenbergia rotunda", khasiat: "Meredakan keputihan", pengolahan: "Rebus rimpang kunci." },
  { id: 31, nama: "Jeruk Nipis", latin: "Citrus aurantiifolia", khasiat: "Obat batuk alami (campur kecap/madu)", pengolahan: "Peras airnya dan campur madu." },
  { id: 32, nama: "Belimbing Wuluh", latin: "Averrhoa bilimbi", khasiat: "Obat sariawan & darah tinggi", pengolahan: "Rebus bunga/buahnya." },
  { id: 33, nama: "Daun Landep", latin: "Barleria lupulina", khasiat: "Meredakan rematik", pengolahan: "Tumbuk daun lalu balurkan." },
  { id: 34, nama: "Temu Kunci", latin: "Boesenbergia pandurata", khasiat: "Pelancar ASI", pengolahan: "Diolah jadi masakan/jamu." },
  { id: 35, nama: "Daun Ungu", latin: "Graptophyllum pictum", khasiat: "Mengobati wasir/ambeien", pengolahan: "Rebus daun ungu segar." },
  { id: 36, nama: "Tapak Dara", latin: "Catharanthus roseus", khasiat: "Mengobati hipertensi ringan", pengolahan: "Rebus beberapa lembar daun." },
  { id: 37, nama: "Landep", latin: "Barleria prionitis", khasiat: "Obat sakit gigi", pengolahan: "Kumur air rebusan daun." },
  { id: 38, nama: "Sawi Langit", latin: "Vernonia cinerea", khasiat: "Menurunkan panas demam", pengolahan: "Rebus herba segar." },
  { id: 39, nama: "Ranti/Leunca", latin: "Solanum nigrum", khasiat: "Antiinflamasi alami", pengolahan: "Dikonsumsi sebagai lalapan/dimasak." },
  { id: 40, nama: "Ciplukan", latin: "Physalis angulata", khasiat: "Mengobati diabetes & paru-paru", pengolahan: "Rebus seluruh bagian tanaman." },
  { id: 41, nama: "Daun Dewa", latin: "Gynura procumbens", khasiat: "Melancarkan peredaran darah", pengolahan: "Makan sebagai lalap/rebus." },
  { id: 42, nama: "Bawang Putih", latin: "Allium sativum", khasiat: "Antibiotik alami & kolesterol", pengolahan: "Makan mentah atau geprek." },
  { id: 43, nama: "Bunga Cengkeh", latin: "Syzygium aromaticum", khasiat: "Meredakan sakit gigi", pengolahan: "Teteskan minyak cengkeh di gigi berlubang." },
  { id: 44, nama: "Kayu Manis", latin: "Cinnamomum verum", khasiat: "Menurunkan gula darah", pengolahan: "Seduh bubuk kayu manis." },
  { id: 45, nama: "Kemangi", latin: "Ocimum basilicum", khasiat: "Eliminasi bau badan", pengolahan: "Konsumsi sebagai lalapan." },
  { id: 46, nama: "Asam Jawa", latin: "Tamarindus indica", khasiat: "Meredakan batuk & demam", pengolahan: "Seduh daging buah asam." },
  { id: 47, nama: "Daun Suji", latin: "Dracaena angustifolia", khasiat: "Pewarna alami & penawar racun", pengolahan: "Peras daun suji." },
  { id: 48, nama: "Kencur Putih", latin: "Kaempferia rotunda", khasiat: "Meredakan pembengkakan", pengolahan: "Tumbuk rimpang dan tempelkan." },
  { id: 49, nama: "Lada Hitam", latin: "Piper nigrum", khasiat: "Meredakan kembung & masuk angin", pengolahan: "Seduh bubuk lada." },
  { id: 50, nama: "Bunga Rosella", latin: "Hibiscus sabdariffa", khasiat: "Kaya Vitamin C & antioksidan", pengolahan: "Seduh kelopak bunga kering." }
];

// 1. Tampilkan Data ke Grid
function tampilkanData(list) {
  const container = document.getElementById('container-tanaman');
  container.innerHTML = '';
  
  list.forEach(t => {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => bukaDetail(t.id);
    card.innerHTML = `
      <h3>${t.nama}</h3>
      <p><i>${t.latin}</i></p>
      <p><b>Khasiat:</b> ${t.khasiat}</p>
    `;
    container.appendChild(card);
  });
}

// 2. Fungsi Pindah Halaman (Beranda / Panduan)
function bukaHalaman(halaman) {
  document.getElementById('halaman-beranda').classList.add('hidden');
  document.getElementById('halaman-panduan').classList.add('hidden');
  
  if (halaman === 'beranda') {
    document.getElementById('halaman-beranda').classList.remove('hidden');
  } else if (halaman === 'panduan') {
    document.getElementById('halaman-panduan').classList.remove('hidden');
  }
}

// 3. Fungsi Pencarian
function cariTanaman() {
  const q = document.getElementById('inputCari').value.toLowerCase();
  const hasil = dataTanaman.filter(t => 
    t.nama.toLowerCase().includes(q) || t.latin.toLowerCase().includes(q)
  );
  tampilkanData(hasil);
}

// 4. Modal Detail
function bukaDetail(id) {
  const t = dataTanaman.find(item => item.id === id);
  if (!t) return;
  
  const isi = document.getElementById('isiDetail');
  isi.innerHTML = `
    <h2>${t.nama}</h2>
    <p><i>${t.latin}</i></p>
    <br>
    <p><b>Khasiat:</b><br>${t.khasiat}</p>
    <br>
    <p><b>Cara Pengolahan:</b><br>${t.pengolahan}</p>
  `;
  document.getElementById('modalDetail').classList.remove('hidden');
}

function tutupModal() {
  document.getElementById('modalDetail').classList.add('hidden');
}

// Jalankan pertama kali
tampilkanData(dataTanaman);
