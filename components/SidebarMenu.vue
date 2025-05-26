<script setup lang="ts">
import { ref } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

const collapsed = ref(false)
const colorMode = useColorMode()

const toggleColorMode = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

const items = ref<NavigationMenuItem[]>([
    {
        label: 'Vans',
        icon: 'i-lucide-car',
        type: 'link',
        to: '/vans',
    },
    {
        label: 'Funcionários',
        icon: 'i-lucide-person-standing',
        type: 'link',
        to: '/funcionarios',
        disabled: true,
    },
    {
        label: 'Manutenções',
        icon: 'i-lucide-circle-help',
        type: 'link',
        to: '/manutencoes',
        disabled: true,
    },
])
</script>


<template>
    <div class="flex flex-col gap-4">

        <div :class="collapsed ? 'flex-col items-center' : ''" class="flex justify-between flex-wrap gap-2">
            <LucideMoon v-if="colorMode.preference !== 'dark'" class="cursor-pointer" @click="toggleColorMode" />
            <LucideSun v-else class="cursor-pointer" @click="toggleColorMode" />

            <LucideChevronLeft class="place-self-end" v-if="!collapsed" @click="collapsed = true" />
            <LucideChevronRight v-if="collapsed" @click="collapsed = false" />
        </div>

        <UNavigationMenu orientation="vertical" :items="items"
            :collapsed="collapsed">
            <template #item="{ item }">
                <div
                    class="flex items-center gap-3 px-4 py-2 text-lg font-bold text-highlighted hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                    <UIcon :name="item.icon as string" class="text-2xl" />
                    <span v-if="!collapsed">{{ item.label }}</span>
                </div>
            </template>
        </UNavigationMenu>

    </div>
</template>
