<template>
  <div style="text-align: center; margin-top: 100px;">
    <h2>Apakah Anda yakin ingin logout?</h2>
    <button @click="konfirmasiLogout" style="margin: 10px; padding: 10px 20px;">Ya, Logout</button>
    <button @click="batalLogout" style="margin: 10px; padding: 10px 20px;">Batal</button>
  </div>
</template>

<script>
export default {
  name: 'LogoutPemilik',
  methods: {
    konfirmasiLogout() {
      // Kosongkan state/session di sini jika diperlukan
      this.$router.push('/login')
    },
    batalLogout() {
      this.$router.back()
    }
  }
}
</script>
