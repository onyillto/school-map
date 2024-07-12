<template>
  <div class="flex justify-center h-screen bg-gray-100 mt-12">
    <div
      id="map-container"
      class="relative w-full max-w-4/5 h-3/4 bg-white border-2 border-gray-300 overflow-hidden"
      :style="{ transform: `scale(${scale})` }"
    >
      <div class="map-background"></div>
      <div
        v-for="(location, index) in locations"
        :key="index"
        class="location-icon cursor-pointer"
        @click="showInfo(location)"
        :style="{ top: `${location.top}%`, left: `${location.left}%` }"
      >
        <span class="text-3xl">📍</span>
        <div class="location-name">{{ location.name }}</div>
      </div>
    </div>
    <div v-if="selectedLocation" class="mt-4 text-center">
      <h2 class="text-2xl mb-2">{{ selectedLocation.info }}</h2>
      <img
        class="mx-auto mb-4"
        :src="selectedLocation.image"
        :alt="selectedLocation.info"
        style="max-width: 100%; height: auto; max-height: 300px"
      />
      <div class="text-center mb-4">
        <span class="text-sm text-gray-500">Direction</span>
        <p class="mt-2 text-lg">{{ selectedLocation.direction }}</p>
      </div>
      <button
        @click="selectedLocation = null"
        class="flex items-center justify-center text-white border bg-blue-500 py-2 px-4 rounded-md transition duration-300 ease-in-out mt-4"
      >
        Back to Map
      </button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      scale: 1,
      selectedLocation: null,
      locations: [
        {
          name: "Faculty of Environmental Science",
          info: "Faculty of Environmental Science building",
          image: "/env_science.jpeg",
          direction: "Go straight from the main gate and turn left.",
          top: 10,
          left: 10,
        },
        {
          name: "Administration Building",
          info: "Administration building",
          image: "/administration.jpeg",
          direction: "Located next to the main gate on your right.",
          top: 15,
          left: 30,
        },
        {
          name: "School Auditorium",
          info: "School auditorium building",
          image: "/auditorium.jpeg",
          direction: "Behind the library, near the sports complex.",
          top: 30,
          left: 55,
        },
        {
          name: "School Library",
          info: "School library building",
          image: "/library.jpeg",
          direction: "Adjacent to the administration building.",
          top: 45,
          left: 70,
        },
        {
          name: "JV Building",
          info: "JV building (Boys hostel)",
          image: "/jv_building.jpeg",
          direction: "Near the cafeteria, opposite the sports field.",
          top: 60,
          left: 60,
        },
        {
          name: "TA Building",
          info: "TA building (Boys hostel)",
          image: "/ta_building.jpeg",
          direction: "Next to the JV building.",
          top: 30,
          left: 15,
        },
        {
          name: "New Hostel Block",
          info: "New hostel block (Boys hostel)",
          image: "/new_hostel.jpeg",
          direction: "Behind the TA building.",
          top: 50,
          left: 35,
        },
        {
          name: "Mayfresh Bank Building",
          info: "Mayfresh Bank Building",
          image: "/mayfresh.jpeg",
          direction: "Next to the auditorium.",
          top: 70,
          left: 55,
        },
        {
          name: "Faculty of Engineering",
          info: "Faculty of engineering building",
          image: "/engineering.jpeg",
          direction: "Opposite the library.",
          top: 35,
          left: 75,
        },
        {
          name: "Faculty of Natural Science",
          info: "Faculty of natural science building",
          image: "/natural_science.jpeg",
          direction: "Next to the Faculty of Engineering.",
          top: 55,
          left: 95,
        },
        {
          name: "Exams and Records, ICT, Biochemistry Lab",
          info: "Exams and records, ICT, Biochemistry lab building (Podium)",
          image: "/exams_records.jpeg",
          direction: "Near the Faculty of Natural Science.",
          top: 75,
          left: 30,
        },
        {
          name: "Charity Square",
          info: "Charity square building (Near natural science building)",
          image: "/charity_square.jpeg",
          direction: "Located at the center of the campus.",
          top: 40,
          left: 45,
        },
        {
          name: "Tiyonse Building",
          info: "Tiyonse building (Girls canteen)",
          image: "/tiyonse.jpeg",
          direction: "Opposite the boys' canteen.",
          top: 65,
          left: 30,
        },
        {
          name: "Boys Canteen",
          info: "Boys canteen building",
          image: "/boys_canteen.jpeg",
          direction: "Next to the sports complex.",
          top: 35,
          left: 65,
        },
        {
          name: "School Clinic",
          info: "School Clinic building",
          image: "/school_clinic.jpeg",
          direction: "Next to the boys' canteen.",
          top: 45,
          left: 75,
        },
        {
          name: "Management Faculty Building One",
          info: "Management Faculty Building One",
          image: "/management_building.jpeg",
          direction: "Near the auditorium.",
          top: 25,
          left: 85,
        },
      ],
    };
  },
  methods: {
    showInfo(location) {
      this.selectedLocation = location;
    },
  },
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

<style scoped>
#map-container {
  position: relative;
  height: 100%;
}

.map-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://media.istockphoto.com/id/962735732/vector/seamless-streets-city-view.jpeg?s=612x612&w=0&k=20&c=3Wam-3CFqpqVqGHcTD4ayuZ6BxzGtv6EK6KgeGlAvCg=");
  background-size: cover;
  background-position: center;
}

.location-icon {
  position: absolute;
  transform: translate(0%, 0%);
  z-index: 1; /* Ensure icons are above the map background */
}

.location-icon span {
  font-size: 1.5rem;
  z-index: 2; /* Ensure icon content is above the icon */
}

.location-name {
  position: absolute;
  bottom: -30px; /* Adjust to properly position the name relative to the icon */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap; /* Prevent name from wrapping */
  pointer-events: none; /* Ensure the name doesn't block click events */
  z-index: 10; /* Ensure names appear above other elements */
}

@media (max-width: 768px) {
  .location-name {
    font-size: 12px; /* Adjust font size for smaller screens */
    bottom: -20px; /* Adjust bottom position for smaller screens */
  }
}
</style>




