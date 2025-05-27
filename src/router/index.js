import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import LayoutPenyewa from '../Tampilan/TampilanPenyewa.vue'
import LayoutPemilik from '../Tampilan/TampilanPemilik.vue'

// Login
import Login from '../pages/login/Login.vue'

// Penyewa Pages
import PenyewaDashboard from '../pages/penyewa/Dashboard.vue'
import Tagihan from '../pages/penyewa/Tagihan.vue'
import Pembayaran from '../pages/penyewa/Pembayaran.vue'
import Riwayat from '../pages/penyewa/Riwayat.vue'
import ProfilPenyewa from '../pages/penyewa/Profil.vue'
import LogoutPenyewa from '../pages/penyewa/logout.vue'

// Pemilik Pages
import PemilikDashboard from '../pages/pemilik/Dashboard.vue'
import DaftarPenyewa from '../pages/pemilik/DaftarPenyewa.vue'
import VerifikasiPembayaran from '../pages/pemilik/VerifikasiPembayaran.vue'
import DataTagihan from '../pages/pemilik/DataTagihan.vue'
import ProfilPemilik from '../pages/pemilik/Profil.vue'
import LogoutPemilik from '../pages/pemilik/Logout.vue'

const routes = [
{ path: '/login', name: 'Login', component: Login },
{
    path: '/penyewa',
    component: LayoutPenyewa,
    children: [
        { path: '', name: 'PenyewaDashboard', component: PenyewaDashboard },
        { path: 'tagihan', name: 'Tagihan', component: Tagihan },
        { path: 'pembayaran', name: 'Pembayaran', component: Pembayaran },
        { path: 'riwayat', name: 'Riwayat', component: Riwayat },
        { path: 'profil', name: 'ProfilPenyewa', component: ProfilPenyewa },
        { path: 'logout', name: 'LogoutPenyewa', component: LogoutPenyewa }
    ]
},
{
    path: '/pemilik',
    component: LayoutPemilik,
    children: [
        { path: '', name: 'PemilikDashboard', component: PemilikDashboard },
        { path: 'daftar-penyewa', name: 'DaftarPenyewa', component: DaftarPenyewa },
        { path: 'verifikasi-pembayaran', name: 'VerifikasiPembayaran', component: VerifikasiPembayaran },
        { path: 'data-tagihan', name: 'DataTagihan', component: DataTagihan },
        { path: 'profil', name: 'ProfilPemilik', component: ProfilPemilik },
        { path: 'logout', name: 'LogoutPemilik', component: LogoutPemilik }
    ]
},
{ path: '/:pathMatch(.*)*', redirect: '/login' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
