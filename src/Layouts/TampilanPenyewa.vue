<template>
    <div>
        <SidebarPenyewa />
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
import SidebarPenyewa from '../components/SidebarPenyewa.vue'
export default { components: { SidebarPenyewa } }
</script>