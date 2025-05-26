<script setup>
import { useRoute, useRouter } from 'vue-router'

const { vans, addVan, updateVan } = useVans()
const router = useRouter()
const route = useRoute()

const editando = computed(() => !!route.query.id)
const van = ref({
    id: null,
    modelo: '',
    placa: '',
    ano: '',
    capacidade: '',
    km: '',
    status: 'Ativa',
    proximaManutencao: '',
    observacoes: ''
})

if (editando.value) {
    const existente = vans.value.find(v => v.id == route.query.id)
    if (existente) van.value = { ...existente }
}

const salvar = () => {
    if (editando.value) {
        updateVan(van.value)
    } else {
        addVan(van.value)
    }
    router.push('/vans')
}
</script>

<template>
    <div class="dark:bg-gray-700 p-2 rounded-2xl max-w-xl">
        <h1 class="flex gap-2 items-center text-2xl font-bold mb-4">
            {{ editando ? 'Editando' : 'Criando' }}
            <LucidePen v-if="editando"/>
            <LucidePlus v-else />
        </h1>

        <form @submit.prevent="salvar" class="space-y-4 p-2">
            <input v-model="van.modelo" placeholder="Modelo" class="w-full border p-2 rounded" />
            <input v-model="van.placa" placeholder="Placa" class="w-full border p-2 rounded" />
            <input v-model="van.ano" type="number" placeholder="Ano" class="w-full border p-2 rounded" />
            <input v-model="van.capacidade" type="number" placeholder="Capacidade" class="w-full border p-2 rounded" />
            <input v-model="van.km" type="number" placeholder="KM atual" class="w-full border p-2 rounded" />
            <select v-model="van.status" class="w-full bg-gray-300 dark:bg-gray-800 border p-2 rounded">
                <option>Ativa</option>
                <option>Em manutenção</option>
                <option>Inativa</option>
            </select>
            <input v-model="van.proximaManutencao" type="date" class="w-full border p-2 rounded" />
            <textarea v-model="van.observacoes" placeholder="Observações" class="w-full border p-2 rounded" />

            <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">
                {{ editando ? 'Salvar Alterações' : 'Cadastrar Van' }}
            </button>
        </form>
    </div>
</template>
