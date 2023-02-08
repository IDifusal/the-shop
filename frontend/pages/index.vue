<template>
    <div>
        <h2 class="text-2xl">
            List Stores
        </h2>
        <div class="list__stores justify-items-center gap-y-5 gap-x-12 md:grid-cols-3 grid mt-5">
            <div v-for="{ name, category, id } in listStores" :key="id" class="card w-96 bg-primary shadow-xl"
                @click="detailStore(id)">
                <div class="card-body capitalize">
                    <h2 class="card-title">{{ name  }}</h2>
                    <p>{{ category }}</p>
                    <p>{{ id }}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary">See Products</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { loadStores, listStores } = useStores()

const detailStore = (id) => {
    navigateTo(`/stores/${id}`)
}

onMounted(() => {
    loadStores()
})

</script>
