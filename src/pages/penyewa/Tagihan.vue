<template>
  <div class="tagihan-page">
    <h2>Daftar Tagihan</h2>

    <div class="filter-group">
      <select v-model="filterTahun">
        <option value="">Semua Tahun</option>
        <option v-for="tahun in daftarTahun" :key="tahun" :value="tahun">{{ tahun }}</option>
      </select>

      <select v-model="filterBulan">
        <option value="">Semua Bulan</option>
        <option v-for="(nama, index) in bulanIndonesia" :key="index" :value="index + 1">{{ nama }}</option>
      </select>
    </div>

    <table>
      <thead>
        <tr>
          <th>Bulan</th>
          <th>Jumlah</th>
          <th>Status</th>
          <th>Jatuh Tempo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tagihan in filteredTagihan" :key="tagihan.id">
          <td>{{ bulanIndonesia[tagihan.bulan - 1] }} {{ tagihan.tahun }}</td>
          <td>Rp {{ formatRupiah(tagihan.jumlah) }}</td>
          <td>
            <span :class="tagihan.status === 'Lunas' ? 'status-lunas' : 'status-belum'">
              {{ tagihan.status }}
            </span>
          </td>
          <td>{{ tagihan.jatuhTempo }}</td>
        </tr>

        <tr v-if="filteredTagihan.length === 0">
          <td colspan="4" class="no-data">Tidak ada data tagihan</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterTahun: '',
      filterBulan: '',
      daftarTahun: [2023, 2024, 2025],
      bulanIndonesia: [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
      ],
      tagihanList: [
        { id: 1, bulan: 3, tahun: 2024, jumlah: 500000, status: 'Lunas', jatuhTempo: '2024-03-10' },
        { id: 2, bulan: 4, tahun: 2024, jumlah: 750000, status: 'Belum Lunas', jatuhTempo: '2024-04-10' },
        { id: 3, bulan: 5, tahun: 2024, jumlah: 750000, status: 'Belum Lunas', jatuhTempo: '2024-05-10' },
        { id: 4, bulan: 6, tahun: 2024, jumlah: 800000, status: 'Lunas', jatuhTempo: '2024-06-10' },
        // data bisa ditambah sesuai kebutuhan
      ],
    };
  },
  computed: {
    filteredTagihan() {
      return this.tagihanList.filter(t => {
        const cocokTahun = this.filterTahun ? t.tahun === Number(this.filterTahun) : true;
        const cocokBulan = this.filterBulan ? t.bulan === Number(this.filterBulan) : true;
        return cocokTahun && cocokBulan;
      });
    },
  },
  methods: {
    formatRupiah(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  },
};
</script>

<style scoped>
.tagihan-page {
  max-width: 700px;
  margin: 40px auto;
  padding: 20px 25px;
  background: white;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgb(32 178 170 / 0.12);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1e293b;
}

h2 {
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: #1e40af;
}

/* Filter */
.filter-group {
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 28px;
}

select {
  padding: 8px 14px;
  border-radius: 8px;
  border: 1.5px solid #cbd5e1;
  font-size: 14px;
  cursor: pointer;
  background: white;
  color: #1e293b;
  min-width: 140px;
  transition: border-color 0.25s ease;
}

select:hover {
  border-color: #1e40af;
}

select:focus {
  outline: none;
  border-color: #1e40af;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
  text-align: left;
  box-shadow: 0 0 12px rgb(32 178 170 / 0.08);
  border-radius: 10px;
  overflow: hidden;
}

thead {
  background-color: #1e40af;
  color: white;
}

th, td {
  padding: 14px 16px;
  border-bottom: 1px solid #e2e8f0;
}

tbody tr:hover {
  background-color: #f0f9ff;
  cursor: pointer;
}

.status-lunas {
  color: #22c55e;
  font-weight: 600;
}

.status-belum {
  color: #ef4444;
  font-weight: 600;
}

.no-data {
  text-align: center;
  color: #94a3b8;
  padding: 24px;
}
</style>