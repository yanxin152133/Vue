<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <RouterLink to="/TemplateSyntax">模板语法</RouterLink>
    </template>
    Vue 模板语法 页面展示
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <RouterLink to="/ConditionalRendering">条件渲染</RouterLink>
    </template>
    Vue 条件渲染 页面展示
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <RouterLink to="/ListRendering">列表渲染</RouterLink>
    </template>
    Vue 列表渲染 页面展示
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <RouterLink to="/ListRendering">jenkins测试</RouterLink>
    </template>
    jenkins测试
  </WelcomeItem>

</template>
