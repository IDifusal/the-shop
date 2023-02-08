<template>
    <div class="w-10/12 md:w-8/12 m-auto">
        Editing store  {{ storeInfo?.name }}
        <form @submit.prevent="sendForm" class="flex flex-col">
            <label for="name">
                Name
                <input v-model="store.name" type="text" placeholder="name" class="input input-bordered w-full max-w-xs ml-3" />
                <span class="error-message" v-if="errorName">
                    {{ errorName }}
                </span>
            </label>
            <label for="category" class="mt-3">
                Category
                <input v-model="store.category" type="text" placeholder="Category" class=" ml-3 input input-bordered w-full max-w-xs" />
                <span class="error-message" v-if="errorCategory">
                    {{ errorCategory }}
                </span>
            </label>
            <button type="submit" class="btn btn-secondary w-20 mt-5">Update</button>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios'


const router = useRouter();
const route = useRoute()

const id = route.params.id

const errorName = ref(undefined)
const errorCategory = ref(undefined)
const storeInfo =ref()
const store = reactive({
    name: '',
    category: ''
})

onMounted(async () => {
    const response = await axios.get(`http://localhost:8080/stores/${id}`)
    storeInfo.value = response.data.data
    store.name = response.data.data.name
    store.category = response.data.data.category
})
const validateFields = () => {
    if (store.name == "") {
        errorName.value = 'Name is required'
    } else {
        errorName.value = undefined
    }
    if (store.category == "") {
        errorCategory.value = 'Category is required'
    } else {
        errorCategory.value = undefined
    }
    if (
        store.name !== '' && store.category !== ''
    ) {
        return true
    } else {
        return false
    }

}
const sendForm = async() =>{
    if(validateFields()){
        await axios.put(`http://localhost:8080/stores/${id}`,store)
        router.push({ path: "/" });
    }else{
        return
    }
}
</script>

<style scoped>

</style>