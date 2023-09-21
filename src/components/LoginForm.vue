<template>
    <v-container>
        <v-form ref="form" @submit="login">
        <v-text-field
            v-model="email"
            label="Correo electrónico"
            outlined
            dense
            required
        ></v-text-field>
        <v-text-field
            v-model="password"
            label="Contraseña"
            outlined
            dense
            required
            type="password"
        ></v-text-field>
        <v-btn type="submit" color="primary" block>Iniciar sesión</v-btn>
        </v-form>
    </v-container>
</template>
  
<script setup>

  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  const access = ref(false);
  
  const login = (event) => {
    event.preventDefault(); // Evitar recarga de página por defecto
    console.log('Iniciando sesión con correo electrónico:', email.value);
    console.log('Contraseña:', password.value);
    access.value = !access.value;
    console.log('Access:', access.value);
    if (access.value) {
        const routeName = 'Home';
        console.log("Redirigiendo a:", routeName);
        navigateTo(routeName);
    }
  };

  const navigateTo = (routeName) => {
    router.push({ name: routeName });
  };

</script>
  
<style scoped>
  /* Agrega estilos adicionales según tus preferencias para hacerlo visualmente atractivo */
</style>
  