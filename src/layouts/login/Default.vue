<template>
  <v-app>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <default-view />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import DefaultView from './View.vue';
</script>
