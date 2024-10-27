<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import type { Country } from '@/types'
const props = defineProps<{
  country: Country
}>()
const { country } = toRefs(props)
</script>
<template>
  <div class="container mx-auto p-6 md:p-10">
    <div class="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 md:p-8 mb-6">
      <!-- Left Column: Flag -->
      <div class="w-full md:w-1/2 flex justify-center items-center border border-gray-300 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105">
        <img :src="country.flag" :alt="country.name" class="w-80 h-auto object-cover" />
      </div>
      <!-- Right Column: Country Information -->
      <div class="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-blue-50 rounded-lg shadow-lg mt-4 md:mt-0">
        <h1 class="text-3xl font-bold text-blue-800 mb-4 hover:text-blue-600 transition-colors">
          {{ country.name }}
        </h1>
        <p class="text-lg text-gray-700 mb-2">
          <strong class="text-blue-600">ISO Code:</strong> <span class="font-semibold">{{ country.id }}</span>
        </p>
        <p class="mt-1 text-lg text-gray-600">
          {{ country.name }} is located on the continent of {{ country.continent }}. Its capital city is {{ country.capital }}, and the official language is {{ country.language }}.
        </p>
      </div>
    </div>
  </div>
</template>
