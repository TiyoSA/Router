import { createRouter, createWebHistory } from 'vue-router'

// Tampilan
import LayoutPenyewa from '../Tampilan/TampilanPenyewa.vue'

// Login
import Login from '../pages/login/Login.vue'

// Penyewa Pages
import PenyewaDashboard from '../pages/penyewa/Dashboard.vue'
import Tagihan from '../pages/penyewa/Tagihan.vue'
import Pembayaran from '../pages/penyewa/Pembayaran.vue'
import Riwayat from '../pages/penyewa/Riwayat.vue'
import ProfilPenyewa from '../pages/penyewa/Profil.vue'
import LogoutPenyewa from '../pages/penyewa/logout.vue'

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
{ path: '/:pathMatch(.*)*', redirect: '/login' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
