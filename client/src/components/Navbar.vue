<template>
  <div>
    <!-- Navbar -->
    <div class="relative bg-cover bg-center bg-white">
      <!-- Navbar content -->
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <router-link to="/" aria-label="Company" title="Company" class="inline-flex items-center">
  <img src="https://www.caritasuni.edu.ng/assets/images/logo-header-1-116x128.png" alt="Caritas University Logo" class="h-11 w-11">
</router-link>

          <ul class="flex items-center hidden space-x-8 lg:flex">
            
             <li>
              <router-link
                to="/"
                aria-label="GUIDE"
                title="GUIDE"
                class="font-medium tracking-wide text-purple-800 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </router-link>
            </li>
                          <router-link
                to="/brochure"
                aria-label="Brochure"
                title="Brochure"
                class="font-medium tracking-wide text-purple-800 transition-colors duration-200 hover:text-teal-accent-400"
              >
Brochure
              </router-link>
            <li>
              <router-link
                to="/guide"
                aria-label="GUIDE"
                title="GUIDE"
                class="font-medium tracking-wide text-purple-800 transition-colors duration-200 hover:text-teal-accent-400"
              >
                GUIDE
              </router-link>
            </li>
           
            <li>
              <router-link
                to="/blogs"
                aria-label="Blogs"
                title="Blogs"
                class="font-medium tracking-wide text-purple-800 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Blogs
              </router-link>
            </li>
            <router-link
  v-if="!isLoggedIn"
  to="/signup"
  class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
  aria-label="Sign up"
  title="Sign up"
>
  Sign up
</router-link>

<router-link
  v-if="isLoggedIn"
  to="/logout"
  class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none"
  aria-label="Logout"
  title="Logout"
>
  Logout
</router-link>

          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              @click="isMenuOpen = true"
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
              </svg>
            </button>
            <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <router-link to="/" aria-label="Company" title="Company" class="inline-flex items-center">
                      <<img src="https://www.caritasuni.edu.ng/assets/images/logo-header-1-116x128.png" alt="Caritas University Logo" class="h-11 w-11">
                      <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
                    </router-link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      @click="isMenuOpen = false"
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <router-link
                        to="/"
                        aria-label="GUIDE"
                        title="GUIDE"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </router-link>
                    </li>
                                        <li>
                      <router-link
                        to="/brochure"
                        aria-label="GUIDE"
                        title="GUIDE"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Brochure
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/GUIDE"
                        aria-label="GUIDE"
                        title="GUIDE"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        GUIDE
                      </router-link>
                    </li>
                  
                    <li>
                      <router-link
                        to="/blogs"
                        aria-label="Blogs"
                        title="Blogs"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blogs
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/signup"
                        class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Sign up
                      </router-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    isLoggedIn() {
      // Check if the token exists in local storage
      return localStorage.getItem('token') !== null;
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
