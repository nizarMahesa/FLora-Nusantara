<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Katalog Tanaman Obat Tradisional Indonesia</title>
  <style>
    * { box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    body { margin: 0; background-color: #f7fafc; color: #2d3748; }
    header { background: #2f855a; color: white; padding: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
    header h1 { margin: 0; font-size: 1.5rem; }
    nav button { background: none; border: none; color: white; font-size: 1rem; cursor: pointer; padding: 6px 12px; border-radius: 4px; transition: background 0.2s; }
    nav button:hover { background: rgba(255, 255, 255, 0.2); }
    .container { max-width: 1200px; margin: 20px auto; padding: 0 15px; }
    .halaman { display: block; }
    .hidden { display: none !important; }
    .hero { background: #38a169; color: white; padding: 40px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px; }
    .hero input { padding: 10px 15px; width: 100%; max-width: 400px; border: none; border-radius: 4px; margin-top: 15px; font-size: 1rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
    
    /* Modal Styling */
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 1000; padding: 15px; }
    .modal-content { background: white; width: 100%; max-width: 600px; border-radius: 8px; padding: 20px; max-height: 90vh; overflow-y: auto; position: relative; }
    .btn-tutup { background: #e53e3e; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; float: right; font-weight: bold; }
  </style>
</head>
<body>

  <header>
    <h1>🌿 FloraMedika Nusantara</h1>
    <nav>
      <button onclick="bukaHalaman('beranda')">Beranda</button>
      <button onclick="bukaHalaman('katalog')">Katalog Lengkap</button>
    </nav>
  </header>

  <div class="container">
    
    <!-- HALAMAN BERANDA -->
    <div id="halaman-beranda" class="halaman">
      <div class="hero">
        <h2>Database Tanaman Obat Tradisional Asli Indonesia</h2>
        <p>Temukan khasiat, kandungan, serta cara pengolahan herbal secara alami dan aman.</p>
        <input type="text" id="inputCariHero" placeholder="Cari tanaman obat..." onkeyup="if(event.key === 'Enter') cariTanamanHero()">
      </div>

      <h3 style="margin-bottom: 15px; border-left: 4px solid #38a169; padding-left: 10px;">Tanaman Unggulan Pilihan</h3>
      <div id="grid-unggulan" class="grid"></div>
    </div>

    <!-- HALAMAN KATALOG -->
    <div id="halaman-katalog" class="halaman hidden">
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        <h2 style="margin: 0;">Katalog Lengkap Tanaman Obat</h2>
        <input type="text" id="inputCariKatalog" placeholder="Cari nama, latin, atau khasiat..." onkeyup="cariTanamanKatalog()" style="padding: 8px 12px; width: 250px; border: 1px solid #cbd5e0; border-radius: 4px;">
      </div>
      <div id="grid-katalog-lengkap" class="grid"></div>
    </div>

  </div>

  <!-- MODAL DETAIL -->
  <div id="modalDetail" class="modal-overlay hidden">
    <div class="modal-content">
      <button class="btn-tutup" onclick="tutupModal()">X</button>
      <div id="isiDetailTanaman"></div>
    </div>
  </div>

  <script>
    const dataTanaman = [
      { id: 1, nama: "Kunyit", latin: "Curcuma longa", jenis: "Rimpang", keluhan: "Pencernaan", kandungan: "Kurkumin, minyak atsiri, desmetoksikurkumin", khasiat: "Meredakan asam lambung, antiinflamasi, menjaga pencernaan.", pengolahan: "Parut 2 ruas kunyit, rebus dengan 1 gelas air hingga mendidih, saring dan minum.", peringatan: "Hindari konsumsi berlebih pada pasien batu empedu.", gambar: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80" },
      { id: 2, nama: "Jahe Merah", latin: "Zingiber officinale var. rubrum", jenis: "Rimpang", keluhan: "Imun", kandungan: "Gingerol, shogaol, zingeron", khasiat: "Menghangatkan tubuh, meredakan batuk & pegal linu.", pengolahan: "Geprek 1 ruas jahe merah, seduh dengan air panas dan madu.", peringatan: "Hati-hati bagi penderita pendarahan atau masalah lambung kronis.", gambar: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=500&q=80" },
      { id: 3, nama: "Daun Sirih", latin: "Piper betle", jenis: "Daun", keluhan: "Kulit", kandungan: "Eugenol, antiseptik alami, alkaloid", khasiat: "Antiseptik alami, pembersih luka, menjaga kesehatan mulut.", pengolahan: "Rebus 5 lembar daun sirih dengan 2 gelas air untuk air kumur atau bilas luka.", peringatan: "Penggunaan luar/kumur saja, jangan ditelan berlebihan.", gambar: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=500&q=80" },
      { id: 4, nama: "Temulawak", latin: "Curcuma zanthorrhiza", jenis: "Rimpang", keluhan: "Pencernaan", kandungan: "Kurkuminoid, xanthorrhizol", khasiat: "Menambah nafsu makan, menjaga kesehatan fungsi hati.", pengolahan: "Iris tipis temulawak kering, rebus dengan air secukupnya.", peringatan: "Tidak dianjurkan untuk penderita penyumbatan saluran empedu.", gambar: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80" },
      { id: 5, nama: "Kumis Kucing", latin: "Orthosiphon aristatus", jenis: "Daun", keluhan: "Pencernaan", kandungan: "Sinensetin, glikosida ortosifonin", khasiat: "Peluruh batu ginjal dan mengatasi infeksi saluran kemih.", pengolahan: "Seduh daun kumis kucing kering dengan air panas seperti teh.", peringatan: "Tidak untuk penggunaan jangka panjang tanpa pengawasan dokter.", gambar: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=500&q=80" },
      { id: 6, nama: "Sambiloto", latin: "Andrographis paniculata", jenis: "Daun", keluhan: "Imun", kandungan: "Androgratolida, flavonoid", khasiat: "Menurunkan demam & tekanan darah tinggi.", pengolahan: "Rebus 10-15 lembar daun sambiloto dengan 3 gelas air.", peringatan: "Tidak disarankan untuk wanita hamil dan menyusui.", gambar: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=500&q=80" },
      { id: 7, nama: "Lidah Buaya", latin: "Aloe vera", jenis: "Daun", keluhan: "Kulit", kandungan: "Aloin, enzim bradikinase, vitamin C", khasiat: "Penyembuh luka bakar, merawat kesehatan kulit & rambut.", pengolahan: "Kupas kulit luar, oleskan gel bening langsung pada kulit.", peringatan: "Getah kuning di bawah kulit bisa memicu iritasi jika tidak dicuci.", gambar: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&w=500&q=80" },
      { id: 8, nama: "Daun Salam", latin: "Syzygium polyanthum", jenis: "Daun", keluhan: "Pencernaan", kandungan: "Flavonoid, tanin, minyak atsiri", khasiat: "Menurunkan kolesterol tinggi & asam urat.", pengolahan: "Rebus 10 lembar daun salam dengan 3 gelas air hingga tersisa 1 gelas.", peringatan: "Monitor kadar gula darah jika mengonsumsi obat diabetes bersamaan.", gambar: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=500&q=80" },
      { id: 9, nama: "Jambu Biji (Daun)", latin: "Psidium guajava", jenis: "Daun", keluhan: "Pencernaan", kandungan: "Tanin, flavonoid, quercetin", khasiat: "Meredakan diare & meningkatkan trombosit.", pengolahan: "Rebus 5-7 lembar daun muda jambu biji, minum air rebusannya.", peringatan: "Dapat menyebabkan sembelit jika diminum berlebihan.", gambar: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=500&q=80" },
      { id: 10, nama: "Bunga Telang", latin: "Clitoria ternatea", jenis: "Buah", keluhan: "Imun", kandungan: "Antosianin, antioksidan tinggi", khasiat: "Meredakan stres & memelihara kesehatan mata.", pengolahan: "Seduh 5 kuntum bunga telang kering dengan air panas.", peringatan: "Konsumsi secukupnya, hindari saat kehamilan.", gambar: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=500&q=80" }
    ];

    function renderUnggulan() {
      const container = document.getElementById('grid-unggulan');
      if(!container) return;
      container.innerHTML = '';
      dataTanaman.slice(0, 6).forEach(t => {
        container.appendChild(buatKartuTanaman(t));
      });
    }

    function renderKatalogLengkap(list = dataTanaman) {
      const container = document.getElementById('grid-katalog-lengkap');
      if(!container) return;
      container.innerHTML = '';
      list.forEach(t => {
        container.appendChild(buatKartuTanaman(t));
      });
    }

    function buatKartuTanaman(t) {
      const card = document.createElement('div');
      card.className = 'card-flora';
      card.style.cssText = "background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.02); cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; display: flex; flex-direction: column; justify-content: space-between;";
      
      card.onmouseover = () => {
        card.style.transform = "translateY(-3px)";
        card.style.boxShadow = "0 6px 12px rgba(0,0,0,0.08)";
      };
      card.onmouseout = () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 2px 4px rgba(0,0,0,0.02)";
      };

      card.onclick = () => bukaDetail(t.id);
      
      card.innerHTML = `
        <div>
          <div style="width: 100%; height: 160px; background: #edf2f7; overflow: hidden;">
            <img src="${t.gambar || 'https://via.placeholder.com/500x300?text=Tanaman+Obat'}" alt="${t.nama}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="padding: 18px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <h3 style="margin: 0; font-size: 1.1rem; color: #2d3748;">${t.id}. ${t.nama}</h3>
              <span style="font-size: 0.75rem; background: #edf2f7; color: #4a5568; padding: 2px 8px; border-radius: 12px; font-weight: 500;">${t.jenis}</span>
            </div>
            <p style="margin: 0 0 10px 0; font-style: italic; font-size: 0.85rem; color: #718096;">${t.latin}</p>
            <p style="margin: 0; font-size: 0.9rem; color: #4a5568; line-height: 1.4;"><b>Khasiat:</b> ${t.khasiat.length > 75 ? t.khasiat.substring(0, 75) + '...' : t.khasiat}</p>
          </div>
        </div>
        <div style="margin: 0 18px 18px 18px; padding-top: 8px; border-top: 1px dashed #edf2f7; font-size: 0.8rem; color: #3182ce; font-weight: 600;">
          Lihat Detail &rarr;
        </div>
      `;
      return card;
    }

    function bukaHalaman(namaHalaman) {
      document.querySelectorAll('.halaman').forEach(h => h.classList.add('hidden'));
      
      if (namaHalaman === 'beranda') {
        document.getElementById('halaman-beranda').classList.remove('hidden');
      } else if (namaHalaman === 'katalog') {
        document.getElementById('halaman-katalog').classList.remove('hidden');
        renderKatalogLengkap();
      }
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

    function bukaDetail(id) {
      const t = dataTanaman.find(item => item.id === id);
      if (!t) return;
      
      const isi = document.getElementById('isiDetailTanaman');
      isi.innerHTML = `
        <div style="width: 100%; height: 200px; border-radius: 8px; overflow: hidden; margin-bottom: 15px;">
          <img src="${t.gambar || 'https://via.placeholder.com/500x300?text=Tanaman+Obat'}" alt="${t.nama}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <h2 style="margin-top:0; color: #2d3748;">${t.nama}</h2>
        <p style="font-style: italic; color: #718096; margin-top: -5px;">${t.latin} • <span style="color:#3182ce;">${t.jenis}</span></p>
        
        <div style="background: #f7fafc; padding: 12px; border-radius: 6px; margin-bottom: 10px;">
          <strong>🧪 Kandungan Kimia/Alami:</strong>
          <p style="margin: 4px 0 0 0; color: #4a5568;">${t.kandungan}</p>
        </div>

        <div style="background: #f7fafc; padding: 12px; border-radius: 6px; margin-bottom: 10px;">
          <strong>✨ Khasiat Utama:</strong>
          <p style="margin: 4px 0 0 0; color: #4a5568;">${t.khasiat}</p>
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
      document.getElementById('modalDetail').classList.remove('hidden');
    }

    function tutupModal() {
      document.getElementById('modalDetail').classList.add('hidden');
    }

    renderUnggulan();
  </script>
</body>
</html>
