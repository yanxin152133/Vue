<template>
    <main>
        <h1>模板语法</h1>
        <div>
            <h2>文本插值</h2>
            <span>Message:{{ msg }}</span>
        </div>

        <div>
            <h2>原始HTML</h2>
            <p>纯文本：：{{ rawHtml }}</p>
            <p>属性：<span v-html="rawHtml"></span></p>
        </div>

        <div>
            <h2>属性绑定</h2>
            <div v-bind:id="dynamicId" v-bind:class="dynamicClass">AppID</div>
            <div v-bind="objectOfAttrs">AppID</div>
            <div :id="dynamicId" :class="dynamicClass">AppID</div>
            <button :disabled="isButtonDisabled">Button</button>
        </div>


    </main>
</template>
<script>
export default {
    data() {
        return {
            msg: "文本插值效果展示",
            rawHtml: "<a href='https://wwww.baidu.com'>百度</a>",
            dynamicId: "appid",
            dynamicClass: "appclass",
            isButtonDisabled: true,
            objectOfAttrs: {
                dynamicId: "appid",
                dynamicClass: "appclass",
            }
        }
    }
}
</script>