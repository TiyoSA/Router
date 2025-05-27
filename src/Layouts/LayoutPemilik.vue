<template>
    <div>
        <SidebarPemilik />
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
import SidebarPemilik from '../components/SidebarPemilik.vue'
export default { components: { SidebarPemilik } }
</script>
