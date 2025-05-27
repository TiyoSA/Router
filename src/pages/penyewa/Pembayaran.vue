<template>
  <div class="pembayaran-page">
    <h2>Form Pembayaran</h2>

    <form @submit.prevent="kirimPembayaran">
      <div class="form-group">
        <label for="hari">Hari</label>
        <input type="text" id="hari" v-model="form.hari" required />
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="tanggal">Tanggal</label>
          <input type="number" id="tanggal" v-model="form.tanggal" min="1" max="31" required />
        </div>

        <div class="form-group">
          <label for="bulan">Bulan</label>
          <select v-model="form.bulan" id="bulan" required>
            <option disabled value="">-- Pilih Bulan --</option>
            <option v-for="(nama, index) in bulanIndonesia" :key="index" :value="nama">{{ nama }}</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="jumlah">Jumlah Tagihan (Rp)</label>
        <input type="number" id="jumlah" v-model="form.jumlah" required />
      </div>

      <div class="form-group readonly">
        <label>Nomor Rekening Pemilik Kos</label>
        <input type="text" :value="rekeningPemilik" readonly />
      </div>

      <div class="info-box">
        <strong>Kirim bukti transfer ke nomor:</strong>
        <p>{{ nomorPemilik }}</p>
      </div>

      <button type="submit" class="btn-kirim">Kirim Pembayaran</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        hari: '',
        tanggal: '',
        bulan: '',
        jumlah: '',
      },
      rekeningPemilik: '1234567890 - BCA a.n. Ibu Kos',
      nomorPemilik: '0812-3456-7890',
      bulanIndonesia: [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ]
    };
  },
  methods: {
    kirimPembayaran() {
      // Simulasi kirim
      alert('Pembayaran berhasil dikirim!');
    }
  }
}
</script>

<style scoped>
.pembayaran-page {
  max-width: 600px;
  margin: 40px auto;
  padding: 25px 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(32, 178, 170, 0.12);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1e293b;
}

h2 {
  color: #1e40af;
  text-align: center;
  margin-bottom: 30px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 6px;
  color: #1e293b;
}

input,
select {
  padding: 10px 12px;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.2s;
}

input:focus,
select:focus {
  outline: none;
  border-color: #1e40af;
}

.form-row {
  display: flex;
  gap: 16px;
}

.form-row .form-group {
  flex: 1;
}

.readonly input {
  background-color: #f1f5f9;
  color: #334155;
}

.info-box {
  background-color: #f0f9ff;
  padding: 12px 16px;
  border-left: 4px solid #1e40af;
  border-radius: 6px;
  font-size: 14px;
  color: #1e293b;
}

.btn-kirim {
  padding: 12px;
  background-color: #1e40af;
  color: white;
  font-weight: 600;
  font-size: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-kirim:hover {
  background-color: #1d4ed8;
}
</style>
