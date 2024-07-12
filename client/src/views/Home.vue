<template>
  <div>
    <Header/>
    <Set/>
    <Satisfactions/>
    <Testimonials/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import Header from '../components/Header.vue';
import Satisfactions from '../components/Satisfactions.vue';
import Set from '../components/Set.vue';
import Testimonials from '../components/Testimonials.vue';

const router = useRouter();

// Check if user is logged in on component mount
onMounted(() => {
  const isLogged = localStorage.getItem('isLogged');
  if (!isLogged || isLogged !== 'true') {
    router.push('/login'); // Redirect to login page if not logged in
  }
});
</script>

  