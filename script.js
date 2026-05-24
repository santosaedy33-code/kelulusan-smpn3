const API_URL =
"https://script.google.com/macros/s/AKfycbwreELuql8aeH0-9mBT5CRn-7vJde-osg9MiTFchuD544BDXwYtL_01Wi0VMgDAbzEo/exec";

async function cekKelulusan(){

const nis =
document.getElementById("nis").value;

const hasil =
document.getElementById("hasil");

hasil.innerHTML =
"<p>Memproses...</p>";

const response =
await fetch(`${API_URL}?nis=${nis}`);

const data =
await response.json();

if(!data.found){

hasil.innerHTML =
"<h3>Data tidak ditemukan</h3>";

return;
}

hasil.innerHTML = `

<img
src="${data.foto}"
class="foto">

<h2>${data.nama}</h2>

<p><b>NIS:</b> ${data.nis}</p>

<p><b>Kelas:</b> ${data.kelas}</p>

<p class="status">
${data.status}
</p>

<p>${data.keterangan}</p>

`;

}
