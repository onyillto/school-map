<template>
  <div>
    <section class="bg-blueGray-950 mt-10">
      <div class="container px-4 mx-auto">
        <div class="text-center"></div>
        <div class="flex flex-wrap -m-4">
          <div class="w-full md:w-1/2 lg:w-1/3 p-4">
            <div class="relative mb-8 overflow-hidden rounded-5xl">
              <img
                class="w-full transform hover:scale-125 transition duration-1000"
                src="/public/boy.jpeg"
                alt=""
              />
              <div class="absolute bottom-0 left-0 w-full bg-gradient-card p-8">
                <span
                  class="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter"
                  >Biologist</span
                >
                <a class="group inline-block max-w-sm" href="/public/biologist.pdf" target="_blank">
                  <h3
                    class="mb-4 text-3xl text-white tracking-3xl hover:underline"
                  >
                    Get more about your department
                  </h3>
                </a>
                <a class="group inline-flex items-center" href="/public/biologist.pdf" target="_blank">
                  <span class="mr-3.5 text-white font-medium">Learn more</span>
                  <svg
                    class="transform group-hover:rotate-90 transition duration-300"
                    width="13"
                    height="12"
                    viewbox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 0.75L1 11.25"
                      stroke="white"
                      stroke-width="1.43182"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11.5 10.3781V0.75H1.87187"
                      stroke="white"
                      stroke-width="1.43182"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 p-4">
            <div class="relative mb-8 overflow-hidden rounded-5xl">
              <img
                class="w-full transform hover:scale-125 transition duration-1000"
                src="/public/girl.jpeg"
                alt=""
              />
              <div class="absolute bottom-0 left-0 w-full bg-gradient-card p-8">
                <span
                  class="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter"
                  >Computer Science</span
                >
                <a class="group inline-block max-w-sm" href="/public/biologist.pdf" target="_blank">
                  <h3
                    class="mb-4 text-3xl text-white tracking-3xl hover:underline"
                  >
                    Get more about your department
                  </h3>
                </a>
                <a class="group inline-flex items-center" href="/public/biologist.pdf" target="_blank">
                  <span class="mr-3.5 text-white font-medium">Learn more</span>
                  <svg
                    class="transform group-hover:rotate-90 transition duration-300"
                    width="13"
                    height="12"
                    viewbox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 0.75L1 11.25"
                      stroke="white"
                      stroke-width="1.43182"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11.5 10.3781V0.75H1.87187"
                      stroke="white"
                      stroke-width="1.43182"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 p-4">
            <div class="relative mb-8 overflow-hidden rounded-5xl">
              <img
                class="w-full transform hover:scale-125 transition duration-1000"
                src="/public/hero.jpeg"
                alt=""
              />
              <div class="absolute bottom-0 left-0 w-full bg-gradient-card p-8">
                <span
                  class="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter"
                  >Accounting</span
                >
                <a class="group inline-block max-w-sm" href="/public/biologist.pdf" target="_blank">
                  <h3
                    class="mb-4 text-3xl text-white tracking-3xl hover:underline"
                  >
                    Get more about your department
                  </h3>
                </a>
                <a class="group inline-flex items-center" href="/public/biologist.pdf" target="_blank">
                  <span class="mr-3.5 text-white font-medium">Learn more</span>
                  <svg
                    class="transform group-hover:rotate-90 transition duration-300"
                    width="13"
                    height="12"
                    viewbox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 0.75L1 11.25"
                      stroke="white"
                      stroke-width="1.43182"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11.5 10.3781V0.75H1.87187"
                      stroke="white"
                      stroke-width="1.43182"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    onMounted(() => {
      const isLogged = localStorage.getItem('isLogged');
      if (!isLogged || isLogged !== 'true') {
        router.push('/login'); // Redirect to login page if not logged in
      }
    });
  }
};
</script>
