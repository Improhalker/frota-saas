export const useVans = () => {
  const vans = useState('vans', () => [
    {
      id: 1,
      modelo: 'Sprinter',
      placa: 'ABC-1234',
      ano: 2021,
      capacidade: 16,
      km: 120000,
      status: 'Ativa',
      proximaManutencao: '2025-06-01',
      observacoes: 'Van em boas condições'
    },
    {
      id: 2,
      modelo: 'Master',
      placa: 'XYZ-5678',
      ano: 2020,
      capacidade: 14,
      km: 140500,
      status: 'Em manutenção',
      proximaManutencao: '2025-05-20',
      observacoes: ''
    }
  ])

  const addVan = (novaVan: any) => {
    novaVan.id = Date.now()
    vans.value.push(novaVan)
  }

  const deleteVan = (id: number) => {
    vans.value = vans.value.filter(v => v.id !== id)
  }

  const updateVan = (vanEditada: any) => {
    const index = vans.value.findIndex(v => v.id === vanEditada.id)
    if (index !== -1) vans.value[index] = vanEditada
  }

  return { vans, addVan, deleteVan, updateVan }
}
