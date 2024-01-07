
<script setup>
import { ref } from 'vue';
const props = defineProps({
  open_rec: Boolean,
})

const form = ref({
  name: '',
  phone: '',
  address: '',
});

const rules = {
  name: [
    {
      required: true,
      message: '收件人姓名',
    },
  ],
  phone: [
    {
      required: true,
      message: '收件人电话号码',
    },
  ],
  address: [
    {
      required: true,
      message: '收件人身份证号',
    },
  ],
};
const placement = ref('bottom')
</script>

<template>

  <a-drawer
      title="请输入收件人信息"
      height=60%
      :placement="placement"
      :open="open_rec"
      :body-style="{ paddingBottom: '80px' }"
      :footer-style="{ textAlign: 'right' }"
      :closable="false"
      @close="$emit('someEvent')"
  >
    <a-form :model="form" :rules="rules" layout="vertical">
      <a-row :gutter="16">
        <a-form-item label="姓名" name="name">
          <a-input v-model:value="form.name" placeholder="收件人姓名" style="width: 350px"/>
        </a-form-item>
      </a-row>
      <a-row :gutter="16">
        <a-form-item label="电话号码" name="phone">
          <a-input v-model:value="form.phone" placeholder="收件人电话号码" style="width: 350px"/>
        </a-form-item>
      </a-row>
      <a-row :gutter="16">
        <a-form-item label="地址" name="address">
          <a-textarea
              v-model:value="form.address"
              placeholder="收件人地址"
              :auto-size="{ minRows: 2, maxRows: 5 }"
              style="width: 350px"
          />
        </a-form-item>
      </a-row>
    </a-form>
    <a-flex justify="space-evenly" align="flex-end">
      <a-button @click="$emit('someEvent')">取消</a-button>
      <a-button type="primary" @click="$emit('someEvent'); $emit('changeRec', form)">确认</a-button>
    </a-flex>
  </a-drawer>
</template>

<style scoped>

</style>