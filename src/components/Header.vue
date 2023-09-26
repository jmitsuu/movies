<template>
  <main class="flex h-screen">
    <section class="pb-5 flex-1">
      <h1
        class="text-3xl uppercase justify-center p-3 bg-slate-300 flex items-center border-2 border-blue-200 rounded-sm text-zinc-900"
      >
        {{ Name }}
      </h1>
    </section>
  </main>
</template>
<script setup>
const props = defineProps({
  Name: String,
  inpuText: String,
});
</script>
