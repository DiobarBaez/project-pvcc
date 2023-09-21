<template>
  <v-app>
    <!-- Barra de navegación -->
    <v-app-bar app fixed color="primary">
      <!-- Botón para mostrar/ocultar el panel de herramientas -->
      <v-btn icon @click="toggleDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-app-bar-title>
        <v-icon icon="mdi-circle-slice-4" class="mr-2"></v-icon>
        Base Preset
      </v-app-bar-title>

      <!-- Botón para salir -->
      <v-btn icon @click="logout">
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Panel de herramientas (drawer) -->
    <v-navigation-drawer v-model="drawer" app fiexd color="primary">
      <!-- Lista de enlaces de router -->
      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main>
      <!-- Ruta actual renderizada por el router -->
      <v-container flex >
        <router-view />
      </v-container>
    </v-main>

  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const drawer = ref(false); // Variable para controlar la visibilidad del panel de herramientas

const logout = () => {
  router.push({ name: 'Login' });
};

const toggleDrawer = () => {
  drawer.value = !drawer.value; // Cambiar el estado de visibilidad del panel de herramientas
};

// Lista de elementos de menú con enlaces de router
const menuItems = [
  { text: 'User Manager', to: '/users', icon: 'mdi-home' },
  { text: 'Tool Manager', to: '/tools', icon: 'mdi-account' },
  { text: 'Preview', to: '/preview', icon: 'mdi-settings' },
  // Agrega más elementos de menú según tus necesidades
];
</script>

<style scoped>
/* Agrega estilos adicionales según tus preferencias para hacerlo visualmente atractivo */
</style>
