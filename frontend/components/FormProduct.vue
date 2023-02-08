<template>
    <form @submit.prevent="sendForm" class="flex flex-col">
        <label for="">
            Store 
            <select v-model="product.store" class="select select-bordered w-full max-w-xs">
                <option v-for="(item,index) in listStores" :selected="index ==0 ? true: false">{{ item.name }}</option>
            </select>
            <span class="error-message" v-if="errorStore">
                {{ errorStore }}
            </span>
        </label>
        <label for="name" class="mt-3">
            Name
            <input v-model="product.name" type="text" placeholder="name"
                class="input input-bordered w-full max-w-xs ml-3" />
            <span class="error-message" v-if="errorName">
                {{ errorName }}
            </span>
        </label>
        <label for="category" class="mt-3">
            Category
            <input v-model="product.category" type="text" placeholder="Category"
                class=" ml-3 input input-bordered w-full max-w-xs" />
            <span class="error-message" v-if="errorCategory">
                {{ errorCategory }}
            </span>
        </label>
        <button type="submit" class="btn btn-secondary w-20 mt-5">Save</button>
    </form>
</template>

<script setup>
import axios from 'axios'
import { onMounted } from 'vue';
const errorName = ref(undefined)
const errorCategory = ref(undefined)
const errorStore = ref(undefined)
const { listStores } = useStores()


const emit = defineEmits(['updateList'])

const product = reactive({
    name: '',
    category: '',
    store :''
})

const validateFields = () => {
    if (product.store == "") {
        errorStore.value = 'Store is required'
    } else {
        errorStore.value = undefined
    }
    if (product.name == "") {
        errorName.value = 'Name Required'
    } else {
        errorName.value = undefined
    }
    if (product.category == "") {
        errorCategory.value = 'Category is required'
    } else {
        errorCategory.value = undefined
    }
    if (
        product.name !== '' && product.category !== ''
    ) {
        return true
    } else {
        return false
    }

}
const sendForm = async () => {
    if (validateFields()) {
    emit("updateList",product);
           
    } else {
        return
    }
}

onMounted(() => {

})
</script>

<style scoped>

</style>