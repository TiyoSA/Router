<template>
  <div>
    <!-- Tombol hamburger muncul kalau sidebar collapsed -->
    <button
      v-if="isCollapsed"
      class="hamburger-btn"
      @click="toggleSidebar"
      aria-label="Buka Sidebar"
    >
      &#9776;
    </button>

    <!-- Sidebar dengan animasi -->
    <nav
      class="sidebar"
      :class="{ 'sidebar-hidden': isCollapsed, 'sidebar-visible': !isCollapsed }"
      @transitionend="onTransitionEnd"
    >
      <button class="close-btn" @click="toggleSidebar" aria-label="Tutup Sidebar">×</button>
      <ul>
        <li><router-link to="/penyewa" exact-active-class="active">🏠 Dashboard</router-link></li>
        <li><router-link to="/penyewa/tagihan" exact-active-class="active">🧾 Tagihan</router-link></li>
        <li><router-link to="/penyewa/pembayaran" exact-active-class="active">💳 Pembayaran</router-link></li>
        <li><router-link to="/penyewa/riwayat" exact-active-class="active">📜 Riwayat</router-link></li>
        <li><router-link to="/penyewa/profil" exact-active-class="active">👤 Profil</router-link></li>
        <li><router-link to="/penyewa/logout" exact-active-class="active">🚪 Logout</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
      showSidebar: true, // supaya sidebar tetap di DOM saat animasi keluar
    };
  },
  methods: {
    toggleSidebar() {
      if (this.isCollapsed) {
        // buka sidebar
        this.showSidebar = true;
        this.isCollapsed = false;
      } else {
        // tutup sidebar, tapi tunggu animasi selesai sebelum hide DOM
        this.isCollapsed = true;
      }
    },
    onTransitionEnd() {
      // kalau sudah selesai animasi hide, sembunyikan sidebar di DOM
      if (this.isCollapsed) {
        this.showSidebar = false;
      }
    }
  }
}
</script>

<style scoped>
/* Tombol hamburger */
.hamburger-btn {
  position: fixed;
  top: 20px;
  left: 0;
  width: 40px;
  height: 40px;
  border: none;
  background: #20b2aa;
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  box-shadow: 2px 2px 8px rgba(32, 178, 170, 0.4);
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.hamburger-btn:hover {
  background: #179d96;
}

/* Sidebar dasar */
.sidebar {
  width: 220px;
  height: 100vh;
  background-color: white;
  border-right: 4px solid #20b2aa;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 2px 0 8px rgba(32, 178, 170, 0.1);
  overflow-y: auto;
  z-index: 1000;
  transition: transform 0.3s ease;
  /* awal posisi muncul */
  transform: translateX(0);
}

/* Saat sidebar disembunyikan (slide keluar ke kiri) */
.sidebar.sidebar-hidden {
  transform: translateX(-100%);
}

/* Saat sidebar muncul (slide masuk dari kiri) */
.sidebar.sidebar-visible {
  transform: translateX(0);
}

/* Tombol close */
.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #20b2aa;
  border: none;
  color: white;
  font-size: 20px;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  line-height: 1;
  transition: background-color 0.2s;
}

.close-btn:hover {
  background: #179d96;
}

/* List menu */
.sidebar ul {
  list-style: none;
  padding: 0;
  margin-top: 40px;
}

.sidebar li {
  margin-bottom: 16px;
}

.sidebar a {
  display: block;
  text-decoration: none;
  color: #155e75;
  padding: 10px 14px;
  border-radius: 6px;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
}

.sidebar a:hover {
  background-color: #e0f7f5;
  color: #0f766e;
}

.sidebar a.active {
  background-color: #20b2aa;
  color: white;
}
</style>
