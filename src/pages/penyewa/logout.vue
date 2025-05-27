<template>
  <div class="logout-page">
    <div class="logout-card">
      <h2>Yakin ingin keluar?</h2>
      <p>Anda akan keluar dari akun penyewa.</p>

      <div class="logout-actions">
        <button class="btn ya-btn" @click="konfirmasiLogout">Ya, Logout</button>
        <button class="btn batal-btn" @click="batalLogout">Batal</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoutPenyewa',
  methods: {
    konfirmasiLogout() {
      // Hapus session / token login jika ada
      this.$router.push('/login')
    },
    batalLogout() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.logout-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f8fafc;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.logout-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(32, 178, 170, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

h2 {
  margin-bottom: 10px;
  color: #1e40af;
  font-size: 22px;
}

p {
  color: #64748b;
  font-size: 14px;
  margin-bottom: 25px;
}

.logout-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.btn {
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  border: none;
  transition: 0.2s ease;
}

.ya-btn {
  background: #1e40af;
  color: white;
}

.ya-btn:hover {
  background: #1d4ed8;
}

.batal-btn {
  background: #e2e8f0;
  color: #1e293b;
}

.batal-btn:hover {
  background: #cbd5e1;
}
</style>
