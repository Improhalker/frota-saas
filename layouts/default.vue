<!-- app.vue ou layouts/default.vue -->
<template>
  <div class="flex bg-gray-200 dark:bg-gray-600">
    <aside class="max-w-64 p-4 h-screen border-r">
      <SidebarMenu />
    </aside>
    <main class="flex-1 p-6">
      <NuxtPage />
    </main>
  </div>
</template>
