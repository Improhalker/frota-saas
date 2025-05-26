<script setup>
const { vans, deleteVan } = useVans()
</script>

<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">📋 Lista de Vans</h1>

        <NuxtLink to="/vans/create"
            class="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block hover:bg-blue-600 transition-colors">
            ➕ Nova Van
        </NuxtLink>

        <div class="overflow-x-auto">
            <table class="w-full border bg-white dark:bg-gray-800 shadow rounded">
                <thead class="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        <th class="p-2 text-left text-gray-700 dark:text-gray-200">Modelo</th>
                        <th class="p-2 text-left text-gray-700 dark:text-gray-200">Placa</th>
                        <th class="p-2 text-left text-gray-700 dark:text-gray-200">Status</th>
                        <th class="p-2 text-left text-gray-700 dark:text-gray-200">Próxima Manutenção</th>
                        <th class="p-2 text-left text-gray-700 dark:text-gray-200">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="van in vans" :key="van.id"
                        class="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        <td class="p-2 text-gray-900 dark:text-gray-100">{{ van.modelo }}</td>
                        <td class="p-2 text-gray-900 dark:text-gray-100">{{ van.placa }}</td>
                        <td class="p-2 text-gray-900 dark:text-gray-100">{{ van.status }}</td>
                        <td class="p-2 text-gray-900 dark:text-gray-100">{{ van.proximaManutencao }}</td>
                        <td class="p-2">
                            <NuxtLink :to="`/vans/create?id=${van.id}`"
                                class="text-blue-500 dark:text-blue-400 hover:underline">
                                Editar
                            </NuxtLink>
                            <button @click="deleteVan(van.id)"
                                class="ml-2 text-red-500 dark:text-red-400 hover:underline">
                                Excluir
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
