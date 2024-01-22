<template>
  <div>
    <h1>表单输入绑定</h1>
    <div>
      <span>文本</span>
      <p>Message is: {{ message }}</p>
      <input v-model="message" placeholder="edit me"/>
      <br>
    </div>
    <div>
      <span>多行文本</span>
      <span>Multiline message is:</span>
      <p style="white-space: pre-line;">{{ message1 }}</p>
      <textarea v-model="message1" placeholder="add multiple lines"></textarea>
      <br>
    </div>
    <div>
      <span>复选框</span>
      <input type="checkbox" id="checkbox" v-model="checked"/>
      <label for="checkbox">{{ checked }}</label>
      <br>
    </div>
    <div>
      <span>复选框</span>
      <div>Checked names: {{ checkedNames }}</div>

      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames"/>
      <label for="jack">Jack</label>

      <input type="checkbox" id="john" value="John" v-model="checkedNames"/>
      <label for="john">John</label>

      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames"/>
      <label for="mike">Mike</label>
    </div>
    <div>
      <span>单选按钮</span>
      <div>Picked: {{ picked }}</div>

      <input type="radio" id="one" value="One" v-model="picked"/>
      <label for="one">One</label>

      <input type="radio" id="two" value="Two" v-model="picked"/>
      <label for="two">Two</label>
    </div>
    <div>
      <span>选择器</span>
      <span> Selected: {{ selected }}</span>

      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>

    <div>
      <span>选择器-多选</span>
      <div>Selected: {{ selected1 }}</div>

      <select v-model="selected1" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const message=ref()
const message1=ref()
const checked = ref(true)
const checkedNames = ref([])
const picked = ref('One')
const selected = ref('')
const selected1 = ref('')

</script>

