<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Log In
      </h2>
      <p class="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
        Don't have an account?
        <router-link
          to="/signup"
          class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
        >
          Register an account
        </router-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <!-- Notification -->
        <div v-if="notification.message" :class="['p-4 rounded-md', notification.type === 'success' ? 'bg-green-100' : 'bg-red-100']">
          <p :class="['text-sm', notification.type === 'success' ? 'text-green-700' : 'text-red-700']">{{ notification.message }}</p>
        </div>

        <form @submit.prevent="loginUser">
          <div class="mt-6">
            <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
              Email address
            </label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="email" name="email" placeholder="user@example.com" type="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
            </div>
          </div>

          <div class="mt-6">
            <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
              Password
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input id="password" name="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
            </div>
          </div>

          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Sign In
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// Utility functions to handle local storage
const setToken = (token) => localStorage.setItem('token', token);
const setUserId = (userId) => localStorage.setItem('userId', userId);
const setUserData = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('isLogged', 'true'); // Set isLogged to true in localStorage
};

const router = useRouter();

const notification = ref({ message: '', type: '' });

const loginUser = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  try {
    const response = await axios.post('http://localhost:9000/api/v1/user/login', {
      email: formData.get('email'),
      password: formData.get('password'),
    });

    if (response.status === 200) {
      const { token, user } = response.data.data;

      // Store the token, user ID, user data, and isLogged in local storage
      setToken(token);
      setUserId(user._id);
      setUserData(user);

      // Set success notification
      notification.value = { message: 'Login successful!', type: 'success' };

      // Redirect based on user role
      if (user.role === 'admin') {
        router.push('/dashboard');
      } else {
        router.push('/');
        setTimeout(() => {
          window.location.reload();
        }, 300); // Adjust the delay as needed
      }
    } else {
      notification.value = { message: 'Unexpected response status.', type: 'error' };
    }
  } catch (error) {
    notification.value = { message: 'Login failed. Please try again.', type: 'error' };
    console.error('Login failed:', error);
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>

