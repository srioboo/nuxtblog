<script setup lang="ts">
import type { NuxtError } from '#app'

const props = withDefaults(
  defineProps<{ error?: NuxtError }>(),
  { error: () => ({}) as NuxtError }
)

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <h2>{{ props.error?.statusCode }}</h2>
    <button @click="handleError">
      Clear error
    </button>
  </div>
</template>
