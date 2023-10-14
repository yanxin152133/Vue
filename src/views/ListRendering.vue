<template>
    <main>
        <h2>列表渲染</h2>
        <div>
            <li v-for="(item, index) in items">
                {{ parentMessage }} - {{ index }} - {{ item.message }}
            </li>
        </div>

        <div>
            <ul>
                <li v-for="(value, key, index) in myObject">
                    {{ index }}. {{ key }}: {{ value }}
                </li>
            </ul>
        </div>

    </main>
</template>

<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'

const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const myObject = reactive({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
})
</script>

