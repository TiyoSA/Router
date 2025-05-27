<template>
  <div class="login-page">
    <div class="login-card">
      <div class="header">
        <div class="icon">🏠</div>
        <h1>Sistem Pembayaran Kos</h1>
        <p>Pilih jenis login untuk melanjutkan</p>
      </div>

      <div class="button-group">
        <button class="login-btn primary-btn" @click="masukSebagaiPenyewa">
          <span class="btn-icon">👤</span>
          Login sebagai Penyewa
        </button>

        <button class="login-btn disabled-btn" disabled title="Fitur ini belum tersedia">
          <span class="btn-icon">🏪</span>
          Login sebagai Pemilik
          <span class="coming-soon">Segera</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    masukSebagaiPenyewa() {
      this.$router.push('/penyewa');
    }
    // Fungsi untuk pemilik tidak digunakan sementara
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: #f0fdfc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.login-card {
  background: white;
  padding: 30px 25px;
  border-radius: 8px;
  border: 1px solid #bae6fd;
  width: 100%;
  max-width: 360px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(32, 178, 170, 0.2);
}

.header {
  margin-bottom: 25px;
}

.icon {
  font-size: 36px;
  margin-bottom: 12px;
}

h1 {
  color: #0f766e;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 6px;
}

p {
  color: #155e75;
  font-size: 13px;
  margin: 0;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.login-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border: 1px solid #20b2aa;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
  color: #155e75;
}

.login-btn:hover {
  background: #e0f7f5;
}

.btn-icon {
  font-size: 16px;
}

.primary-btn {
  background: #20b2aa;
  color: white;
  border-color: #20b2aa;
}

.primary-btn:hover {
  background: #179d96;
  border-color: #179d96;
}

.disabled-btn {
  background: #f0fdfa;
  color: #94a3b8;
  border-color: #cbd5e1;
  cursor: not-allowed;
  pointer-events: none;
  position: relative;
}

.coming-soon {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #1e40af;
  color: white;
  font-size: 9px;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 480px) {
  .login-card {
    padding: 25px 20px;
  }

  h1 {
    font-size: 18px;
  }

  .login-btn {
    padding: 12px 18px;
    font-size: 13px;
  }
}
</style>
