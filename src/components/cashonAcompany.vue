<script setup>
import {ref, watch} from "vue";

const checked = ref(false)
const value = ref('')
const props=defineProps({
  cash_on: Boolean,
  company: "",
})

const emit = defineEmits(['checked', 'value'])
watch(checked, (newValue, oldValue) => {
  emit('checked', newValue)
})
watch(value, (newValue, oldValue) => {
  emit('value', newValue)
})
</script>

<template>

  <div style="margin: 30px">
    <a-card :bordered="false" style="width: 100%">
      <div style="display: flex;align-items: center; margin: 10px">
        <a-flex align="center" style="position: absolute; left: 30px">
          <p class="font_grey">快递公司</p>
        </a-flex>
        <a-flex justify="flex-end" align="center" style="position: absolute; right: 30px">
          <a-input v-model:value="value" :bordered="false" placeholder="AAA批发冰棍雪糕大学生" style="width: 150px; text-align: right;" :default-value="company" />
        </a-flex>
      </div>

      <a-divider />

      <div style="display: flex;align-items: center; margin: 10px">
        <a-flex align="center" style="position: absolute; left: 30px">
          <p class="font_grey">是否到付</p>
        </a-flex>
        <a-flex justify="flex-end" align="center" style="position: absolute; right: 30px">
          <a-checkbox v-model:checked="checked"/>
        </a-flex>
      </div>
    </a-card>
  </div>
</template>

<style scoped>

</style>