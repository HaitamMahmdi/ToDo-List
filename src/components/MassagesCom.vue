<script setup>
const props = defineProps({ MassageType: { type: String } });
</script>
<template>
  <div
    v-if="props.MassageType === 'success'"
    style="animation-timing-function: cubic-bezier(0.8, 0, 0.2, 1)"
    class="relative bg-[var(--color-success)] animate-[show_3.2s_ease-in-out_forwards] my-3 py-2 px-4 flex items-center max-w-[17rem] rounded-lg"
  >
    <font-awesome-icon
      class="bg-white p-2 text-[var(--color-success)] rounded-full"
      icon="check"
    />
    <p class="ms-4 text-lg text-white">Task have been added</p>
  </div>
  <div
    v-else-if="props.MassageType === 'error'"
    class="bg-[var(--color-error)] my-3 py-2 px-4 flex items-center max-w-[17rem] rounded-lg"
  >
    <font-awesome-icon
      class="bg-white p-2 text-[var(--color-error)] rounded-full"
      icon="xmark"
    />
    <p class="ms-4 text-lg text-white">Something Went Wrong</p>
  </div>
</template>
