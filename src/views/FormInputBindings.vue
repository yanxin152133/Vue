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

    <div>
      <div> 值绑定-复选框Selected: {{ selected4 }}</div>
      <input
          type="checkbox"
          v-model="selected4"
          true-value="yes"
          false-value="no"/>

      <input
          type="checkbox"
          v-model="selected4"
          :true-value="{ number: 123 }"
          :false-value="{ number: 456 }"/>
    </div>

    <div>
      <div> 值绑定-单选按钮Selected: {{ selected3 }}</div>
      <input type="radio" id="first" v-model="selected3" :value="{ number: 123 }"/>
      <label for="first">first</label>
      <input type="radio" id="second" v-model="selected3" :value="{ number: 456 }"/>
      <label for="second">second</label>
    </div>

    <div>
      <div> 值绑定-选择器选项Selected: {{ selected2 }}</div>
      <select v-model="selected2">
        <!-- 内联对象字面量 -->
        <option :value="{ number: 123 }">123</option>
        <option :value="{ number: 456 }">456</option>
        <option :value="{ number: 789 }">789</option>
      </select>
    </div>

    <div>
      <div>修饰符.lazy:{{ msg }}</div>
      <input v-model.lazy="msg"/>
    </div>

    <div>
      <div>修饰符.number:{{ age }}</div>
      <input v-model.number="age"/>
    </div>

    <div>
      <div>修饰符.trim:{{ msg1 }}</div>
      <input v-model.trim="msg1"/>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const message = ref()
const message1 = ref()
const checked = ref(true)
const checkedNames = ref([])
const picked = ref('One')
const selected = ref('')
const selected1 = ref('')
const selected2 = ref('')
const selected3 = ref('first')
const selected4 = ref('')
const msg = ref('')
const msg1 = ref('')
const age = ref('')
</script>

