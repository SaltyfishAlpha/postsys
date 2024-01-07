<script setup>
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()

async function goBack() {
  await router.push('/')
}
</script>

<template>
  <a-result
      v-if="route.params.status === '200'"
      status="success"
      title="成功提交快递申请！"
      sub-title="请前往收发大厅进行后续手续。"
  >
    <template #extra>
      <a-button key="console" type="primary" @click="goBack">回到首页</a-button>
    </template>
  </a-result>
  <a-result
      v-else
      status="error"
      title="提交快递申请失败！"
      sub-title="请前检查网络后重新尝试。"
  >
    <template #extra>
      <a-button key="console" type="primary" @click="goBack">回到首页</a-button>
    </template>
  </a-result>
</template>

<style scoped>

</style>