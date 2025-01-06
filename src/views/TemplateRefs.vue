<script setup>
import {ref, useTemplateRef, onMounted, reactive} from 'vue'

import Child from './ListRendering.vue'

const childRef = useTemplateRef('child')

// 第一个参数必须与模板中的 ref 值匹配
const input = useTemplateRef('my-input')
const list = ref([
  'How to do lists in Vue',
  'Jane Doe',
  '2016-04-10'
])

const itemRefs = useTemplateRef('items')

onMounted(() => {
      input.value.focus()
      console.log(itemRefs.value)
    }
)
</script>

<template>
  <main>
    <div>
      <!--访问模板引用-->
      <input ref="my-input"/>
    </div>

    <div>
      <!--v-for 中的模板引用-->
      <ul>
        <li v-for="item in list" ref="items">
          {{ item }}
        </li>
      </ul>
    </div>

    <div>
      <!--组件上的ref-->
      <Child ref="child" />
    </div>

  </main>
</template>