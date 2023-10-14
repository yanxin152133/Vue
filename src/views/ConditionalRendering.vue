<template>
    <main>
        <h1>条件渲染</h1>

        <h2 v-if="flag">v-if 语法</h2>
        <h2 v-else>v-else 语法</h2>

        <h2 v-if="type === 'A'">A</h2>
        <h2 v-else-if="type === 'B'">B</h2>
        <h2 v-else-if="type === 'C'">C</h2>
        <h2 v-else> not A B C</h2>

        <h2 v-show="flag">v-show 语法</h2>
        
    </main>
</template>
<script>
export default {
    data() {
        return {
            flag: false,
            type: "C"
        }
    }
}
</script>