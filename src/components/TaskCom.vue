<script setup>
const props = defineProps({
  taskName: {
    required: true,
    type: String,
    default: `New Task`,
  },
  time: {
    type: String,
  },
  description: {
    type: String,
  },
});
</script>
<template>
  <div
    class="flex text-[var(--color-text)] justify-between items-center max-w-[45rem] m-auto p-4 bg-[var(--color-secondary-background)]"
  >
    <h2>{{ props.taskName }}</h2>
    <p>{{ props.time }}</p>
    <div>
      <button
        class="p-2 text-white w-[2.5rem] h-[2.5rem] mr-2 bg-[var(--color-error)]"
      >
        <font-awesome-icon icon="xmark" />
      </button>
      <button
        class="p-2 text-white w-[2.5rem] h-[2.5rem] bg-[var(--color-success)]"
      >
        <font-awesome-icon icon="check" />
      </button>
    </div>
  </div>
</template>
