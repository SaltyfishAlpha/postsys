
<script setup>
import { ref } from 'vue';
const props = defineProps({
  open_send: Boolean,
})

const form = ref({
  name: '',
  phone: '',
  idcard: '',
});

const rules = {
  name: [
    {
      required: true,
      message: '寄件人姓名',
    },
  ],
  phone: [
    {
      required: true,
      message: '寄件人电话号码',
    },
  ],
  idcard: [
    {
      required: true,
      message: '寄件人身份证号',
    },
  ],
};
const placement = ref('bottom')
const align = ref('flex-end')
const just = ref('space-evenly')
</script>

<template>

  <a-drawer
      title="请输入寄件人信息"
      height=60%
      :placement="placement"
      :open="open_send"
      :body-style="{ paddingBottom: '80px' }"
      :footer-style="{ textAlign: 'right' }"
      :closable="false"
      @close="$emit('someEvent')"
  >
    <a-form :model="form" :rules="rules" layout="vertical">
      <a-row :gutter="16">
        <a-form-item label="姓名" name="name">
          <a-input v-model:value="form.name" placeholder="寄件人姓名" style="width: 350px"/>
        </a-form-item>
      </a-row>
      <a-row :gutter="16">
        <a-form-item label="电话号码" name="phone">
          <a-input v-model:value="form.phone" placeholder="寄件人电话号码" style="width: 350px"/>
        </a-form-item>
      </a-row>
      <a-row :gutter="16">
        <a-form-item label="身份证号" name="idcard">
          <a-input v-model:value="form.idcard" placeholder="寄件人身份证号" style="width: 350px"/>
        </a-form-item>
      </a-row>
    </a-form>
    <a-flex :justify="just" :align="align">
        <a-button @click="$emit('someEvent')">取消</a-button>
        <a-button type="primary" @click="$emit('someEvent'); $emit('changeSend', form)">确认</a-button>
    </a-flex>
  </a-drawer>
</template>

<style scoped>

</style>