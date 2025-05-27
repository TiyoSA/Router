<template>
  <div class="riwayat-page">
    <h2>Riwayat Pembayaran</h2>

    <table class="riwayat-table">
      <thead>
        <tr>
          <th>Tanggal Bayar</th>
          <th>Jumlah (Rp)</th>
          <th>Bulan yang Dibayar</th>
          <th>Status Verifikasi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in riwayat" :key="index">
          <td>{{ item.tanggal }}</td>
          <td>{{ formatRupiah(item.jumlah) }}</td>
          <td>{{ item.bulan }}</td>
          <td>
            <span :class="['badge', item.status === 'Diterima' ? 'badge-diterima' : 'badge-menunggu']">
              {{ item.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      riwayat: [
        { tanggal: '10 Mei 2025', jumlah: 700000, bulan: 'Mei', status: 'Diterima' },
        { tanggal: '09 April 2025', jumlah: 700000, bulan: 'April', status: 'Diterima' },
        { tanggal: '12 Juni 2025', jumlah: 700000, bulan: 'Juni', status: 'Menunggu' },
      ]
    }
  },
  methods: {
    formatRupiah(angka) {
      return angka.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    }
  }
}
</script>

<style scoped>
.riwayat-page {
  max-width: 900px;
  margin: 40px auto;
  background: white;
  padding: 25px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(32, 178, 170, 0.12);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  color: #1e40af;
  margin-bottom: 24px;
  text-align: center;
}

.riwayat-table {
  width: 100%;
  border-collapse: collapse;
}

.riwayat-table th,
.riwayat-table td {
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  text-align: left;
  font-size: 14px;
}

.riwayat-table th {
  background-color: #eff6ff;
  color: #1e40af;
}

.badge {
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 12px;
}

.badge-diterima {
  background-color: #d1fae5;
  color: #065f46;
}

.badge-menunggu {
  background-color: #fef3c7;
  color: #92400e;
}
</style>
