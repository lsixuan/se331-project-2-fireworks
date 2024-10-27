<script setup lang="ts">
import { defineProps, computed } from 'vue'
import type { Country } from '@/types'

// Define the props to receive the country object
const props = defineProps<{
  country: Country
}>()

// Calculate total medals directly in the component
const totalMedals = computed(() => {
  const medals = { gold: 0, silver: 0, bronze: 0 }

  // Calculate the total medals for the country
  props.country.sports.forEach((sport) => {
    medals.gold += sport.medals.gold
    medals.silver += sport.medals.silver
    medals.bronze += sport.medals.bronze
  })

  return medals
})

const total = computed(() => {
  const medals = totalMedals.value
  return medals.gold + medals.silver + medals.bronze
})
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <RouterLink
      class="block transition-all duration-100 ease-in-out hover:bg-gray-300 active:bg-gray-400"
      :to="{ name: 'detail-view', params: { id: country.id } }"
    >
      <div class="py-2 md:py-3 mx-2 md:mx-4">
        <div class="flex flex-col items-center p-4 md:p-5 bg-teal-500 border border-gray-300 rounded-md shadow-xs hover:shadow-sm transition-shadow duration-75 h-auto w-48"> <!-- 设置固定高度和宽度 -->
          
          <!-- Country Info and Flag -->
          <div class="flex flex-col items-center space-y-4 mb-4">
            <!-- Order -->
            <span class="font-bold text-blue-900 text-xl md:text-3xl">
              {{ country.order }}
            </span>
            
            <!-- Flag and Name -->
            <img
              :src="country.flag"
              :alt="country.name"
              class="w-10 h-8 md:w-8 md:h-6 rounded-sm border border-gray-300"
            />
            <div class="flex flex-col items-center">
              <!-- Full Country Name -->
              <span class="font-semibold text-gray-800 text-lg md:text-xl tracking-wider">
                {{ country.name }}
              </span>
              <!-- Total (Newly added) -->
              <span class="font-bold text-black text-2xl md:text-3xl mt-2">
                Total
              </span>
              <!-- Country ID (Only for smaller screens) -->
              <span class="text-gray-500 text-sm md:hidden tracking-widest">
                {{ country.id }}
              </span>
            </div>
          </div>

          <!-- Medal Counts (Vertical Layout) -->
          <div class="flex flex-col items-center space-y-6 md:space-y-10">
            <!-- Total Medals -->
            <div class="flex flex-col items-center">
              <span class="font-bold text-black text-xl md:text-2xl">
                {{ total }}
              </span>
            </div>

            <!-- Gold Medal -->
            <div class="flex flex-col items-center">
              <img src="../assets/gold-medal.svg" alt="gold medal" class="w-10 md:w-14" />
              <span class="font-bold text-gold text-xl md:text-2xl mt-2">
                {{ totalMedals.gold }}
              </span>
            </div>

            <!-- Silver Medal -->
            <div class="flex flex-col items-center">
              <img src="../assets/silver-medal.svg" alt="silver medal" class="w-10 md:w-14" />
              <span class="font-bold text-gray-600 text-xl md:text-2xl mt-2">
                {{ totalMedals.silver }}
              </span>
            </div>

            <!-- Bronze Medal -->
            <div class="flex flex-col items-center">
              <img src="../assets/bronze-medal.svg" alt="bronze medal" class="w-10 md:w-14" />
              <span class="font-bold text-brown-600 text-xl md:text-2xl mt-2">
                {{ totalMedals.bronze }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
