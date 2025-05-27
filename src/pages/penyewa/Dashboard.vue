<template>
  <div class="dashboard">
    <div class="welcome-section">
      <div class="icon">👋</div>
      <h2>Selamat datang, <span class="highlight">{{ namaPenyewa }}</span></h2>
    </div>

    <div class="info-cards">
      <div class="card status-card" :class="statusClass">
        <div class="card-icon">📅</div>
        <div>
          <div class="card-title">Status Tagihan Bulan Ini</div>
          <div class="card-value">{{ statusTagihan }}</div>
        </div>
      </div>

      <div class="card total-card">
        <div class="card-icon">💰</div>
        <div>
          <div class="card-title">Jumlah Tagihan Aktif</div>
          <div class="card-value">Rp {{ formatRupiah(totalTagihan) }}</div>
        </div>
      </div>
    </div>

    <button class="btn-pembayaran" @click="keHalamanPembayaran">
      Bayar Sekarang
      <span class="btn-arrow">→</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      namaPenyewa: 'Aurel',
      statusTagihan: 'Belum dibayar',
      totalTagihan: 1500000,
    };
  },
  computed: {
    statusClass() {
      return this.statusTagihan === 'Sudah dibayar' ? 'lunas' : 'belum-bayar';
    },
  },
  methods: {
    formatRupiah(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    keHalamanPembayaran() {
      this.$router.push('/penyewa/pembayaran');
    },
  },
};
</script>

<style scoped>
.dashboard {
  max-width: 520px;
  margin: 50px auto;
  padding: 30px 25px;
  background: linear-gradient(135deg, #e0f7f5 0%, #ffffff 100%);
  border-radius: 18px;
  box-shadow: 0 10px 20px rgba(32, 178, 170, 0.15);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  color: #1e293b;
}

/* Welcome Section */
.welcome-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 36px;
}

.welcome-section .icon {
  font-size: 42px;
}

.welcome-section h2 {
  font-weight: 700;
  font-size: 28px;
  margin: 0;
}

.highlight {
  color: #1e40af;
}

/* Info Cards Container */
.info-cards {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

/* Card style */
.card {
  background: white;
  flex: 1 1 220px;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px 20px;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgb(32 178 170 / 0.12);
  transition: box-shadow 0.3s ease;
  cursor: default;
}

.card:hover {
  box-shadow: 0 8px 20px rgb(32 178 170 / 0.25);
}

.card-icon {
  font-size: 38px;
  color: #1e40af;
  min-width: 48px;
  text-align: center;
}

/* Card Titles and Values */
.card-title {
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 6px;
  text-align: left;
}

.card-value {
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
  text-align: left;
}

/* Status card colors */
.status-card.belum-bayar {
  border-left: 6px solid #ef4444; /* merah */
}

.status-card.lunas {
  border-left: 6px solid #22c55e; /* hijau */
}

/* Button Bayar Sekarang */
.btn-pembayaran {
  background-color: #1e40af;
  color: white;
  border: none;
  padding: 16px 34px;
  font-size: 17px;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-pembayaran:hover {
  background-color: #1d4ed8;
  transform: scale(1.05);
}

.btn-arrow {
  font-size: 22px;
  line-height: 1;
}
</style>
