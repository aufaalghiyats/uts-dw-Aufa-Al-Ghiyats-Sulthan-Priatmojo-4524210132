const namaInput = document.getElementById('nama');
const jabatanInput = document.getElementById('jabatan');
const bioInput = document.getElementById('bio');
const fotoInput = document.getElementById('foto');
const previewNama = document.getElementById('previewNama');
const previewJabatan = document.getElementById('previewJabatan');
const previewBio = document.getElementById('previewBio');
const previewFoto = document.getElementById('previewFoto');

function updateCard() {
  previewNama.textContent = namaInput.value || '[Nama]';
  previewJabatan.textContent = jabatanInput.value || '[Jabatan]';
  previewBio.textContent = bioInput.value || '[Bio]';
}
[namaInput, jabatanInput, bioInput].forEach(input => {
  input.addEventListener('input', updateCard);
});
updateCard();

fotoInput.addEventListener('change', function() {
  const fileFoto = fotoInput.files[0];
  if (fileFoto) {
    const reader = new FileReader();
    reader.onload = function(e) {
      previewFoto.src = e.target.result;
      previewFoto.style.display = 'block';
    }
    reader.readAsDataURL(fileFoto);
  } else {
    previewFoto.src = '';
    previewFoto.style.display = 'none';
  }
});