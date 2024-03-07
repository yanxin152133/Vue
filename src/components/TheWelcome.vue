<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon/>
    </template>
    <template #heading>
      <RouterLink to="/TemplateSyntax">模板语法</RouterLink>
    </template>
    Vue 模板语法 页面展示
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon/>
    </template>
    <template #heading>
      <RouterLink to="/ConditionalRendering">条件渲染</RouterLink>
    </template>
    Vue 条件渲染 页面展示
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon/>
    </template>
    <template #heading>
      <RouterLink to="/ListRendering">列表渲染</RouterLink>
    </template>
    Vue 列表渲染 页面展示
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon/>
    </template>
    <template #heading>
      <RouterLink to="/FormInputBindings">表单输入绑定</RouterLink>
    </template>
    Vue 表单输入绑定
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon/>
    </template>
    <template #heading>
      <RouterLink to="/FormInputBindings">测试</RouterLink>
    </template>
    测试
  </WelcomeItem>

</template>
