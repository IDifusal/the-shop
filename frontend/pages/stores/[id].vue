<template>
    <div class="container m-auto">
        <div class="flex">
            <div class="w-1/2">
                <h2>Store {{ id }}</h2>
                {{ storeInfo?.name }}<br>
                {{ storeInfo?.category }}
            </div>
            <div class="w-1/2 flex flex-col items-center">
                <button class="btn btn-outline btn-success w-40" @click="modifyStore">Modify Store</button>
                <button class="btn btn-outline btn-error w-40 mt-4" @click="openModal">Delete Store</button>
            </div>
        </div>
        <h3 class="text-2xl mt-5">Products</h3>
        <div class="overflow-x-auto mt-5">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover" v-for="(item, index) in storeProducts">
                        <th>{{ index }}</th>
                        <td>{{ generateSkuCode() }} - {{ item.name }} - {{ generateSixDigitNumber() }}</td>
                        <td>{{ item.category }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex mt-5">
            <div class="w-1/2">
            </div>
            <div class="w-1/2">
                <FormProduct @updateList="updateList"></FormProduct>
            </div>
        </div>
    </div>
    <SharedModal v-if="modal" @deleteStore="deleteStore" @closeModal="closeModal"></SharedModal>
</template>

<script setup>
import axios from 'axios'

const route = useRoute()
const router = useRouter();

const id = route.params.id
const storeInfo = ref()
const storeProducts = ref([])
const modal = ref(false)


onMounted(async () => {
    const response = await axios.get(`http://localhost:8080/stores/${id}`)
    storeInfo.value = response.data.data
    // getStoreProducts()
})

const deleteStore = async () => {
    await axios.delete(`http://localhost:8080/stores/${id}`)
    router.push({ path: "/" });
}

const openModal = () => {
    modal.value = true
}

const modifyStore = () => {
    navigateTo(`/stores/modify/${id}`)
}

const closeModal = () => {
    modal.value = false
}

const generateSixDigitNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
}

const generateSkuCode = () => {
    const letters = String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
        String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const numbers = Math.floor(100 + Math.random() * 900);
    return letters + numbers;
}

const getStoreProducts = async () => {
    const response = await axios.get(`http://localhost:8080/products/`)
    storeProducts.value = response.filter(item => item.store_id === id.value)
}
const updateList = (product) => { storeProducts.value.push(JSON.parse(JSON.stringify(product))) }
</script>