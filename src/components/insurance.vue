<script setup>
import {ref, watch} from "vue";

const checked = ref(false)
const value = ref(0.0)
const props=defineProps({
  parcel_insurance: Boolean,
  object_value: 0.0,
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
          <p class="font_grey">是否保价</p>
        </a-flex>
        <a-flex justify="flex-end" align="center" style="position: absolute; right: 30px">
          <a-checkbox v-model:checked="checked"/>
        </a-flex>
      </div>

      <a-divider />

      <div style="display: flex;align-items: center; margin: 10px">
        <a-flex align="center" style="position: absolute; left: 30px">
          <p class="font_grey">物品价值</p>
        </a-flex>
        <a-flex justify="flex-end" align="center" style="position: absolute; right: 30px">
          <a-input-number
              v-model:value="value"
              :bordered="false"
              placeholder="请输入物品重量"
              :min="0.0"
              :disabled="!checked"
              default-value="0.0"
              prefix="￥"
              suffix="RMB"
          />
        </a-flex>
      </div>

    </a-card>
  </div>

</template>

<style scoped>

</style>