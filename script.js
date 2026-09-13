document.addEventListener('DOMContentLoaded', function() {
    const formKontribusi = document.getElementById('formKontribusi');

    if (formKontribusi) {
        formKontribusi.addEventListener('submit', function(e) {
            e.preventDefault();

            const nama = document.getElementById('namaLengkap').value;
            const tanaman = document.getElementById('namaTanaman').value;

            alert('Terima kasih Bpk/Ibu ' + nama + '!\nData usulan tanaman "' + tanaman + '" telah tersimpan di sistem FloraNusantara.');

            formKontribusi.reset();
        });
    }
});