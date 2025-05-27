<template>
  <div class="profil-page">
    <h2>Profil Penyewa</h2>

    <div class="profil-card">
      <div class="profil-item">
        <label>Nama</label>
        <p>{{ penyewa.nama }}</p>
      </div>
      <div class="profil-item">
        <label>Email / No. HP</label>
        <p>{{ penyewa.kontak }}</p>
      </div>
      <div class="profil-item">
        <label>Nomor Kamar</label>
        <p>{{ penyewa.kamar }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profil',
  data() {
    return {
      penyewa: {
        nama: 'Aurel Kirana',
        kontak: 'aurel@email.com / 081234567890',
        kamar: 'B-203',
      }
    }
  }
}
</script>

<style scoped>
.profil-page {
  max-width: 600px;
  margin: 40px auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(32, 178, 170, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #1e40af;
}

.profil-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.profil-item {
  background-color: #f1f5f9;
  padding: 16px 20px;
  border-radius: 10px;
  border-left: 4px solid #1e40af;
}

label {
  font-weight: bold;
  color: #475569;
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
}

p {
  margin: 0;
  font-size: 15px;
  color: #1e293b;
}
</style>
