<script setup>
import {RightOutlined} from "@ant-design/icons-vue";
import {ref} from "vue";

const myEnum = {
  0: '日用品',
  1: '食品',
  2: '文件',
  3: '衣物',
  4: '数码产品',
  5: '药品',
  6: '生鲜',
  7: '易碎品',
  8: '其他',
}

const props = defineProps({
  object_type: Number,
  object_weights: 1.0,
})

const open = ref(false)

function showDrawer_info() {
  open.value = true;
}

function showDrawer_close() {
  open.value = false;
}

const form = ref({
  object_type: 0,
  object_weights: 0.0,
})
const rules = {
  object_type: [
    {
      required: true,
      message: '物品类型',
    },
  ],
  object_weights: [
    {
      required: true,
      message: '物品重量',
    },
  ],
};
const placement = ref('bottom')
</script>

<template>

  <div style="margin: 30px">
    <a-card :bordered="false" style="width: 100%">

      <div style="display: flex;align-items: center; margin: 10px">
        <a-flex align="center" style="position: absolute; left: 30px">
          <p class="font_grey">物品信息</p>
        </a-flex>
        <a-flex justify="flex-end" align="center" style="position: absolute; right: 30px">
          <p class="font_normal" style="margin: 10px">
            {{ myEnum[object_type] || '日用品' }}/{{ object_weights || 1 }}kg
          </p>
          <RightOutlined
              @click="showDrawer_info"
          />
        </a-flex>
      </div>

    </a-card>
  </div>

  <a-drawer
      title="物品信息"
      height=60%
      :placement="placement"
      :open="open"
      :body-style="{ paddingBottom: '80px' }"
      :footer-style="{ textAlign: 'right' }"
      :closable="false"
      @close="showDrawer_close"
  >
    <a-form :model="form" :rules="rules" layout="vertical">
      <a-row :gutter="18">
        <a-form-item label="物品类型" name="object_type">

          <a-radio-group v-model:value="form.object_type" span>
            <div style="display: flex">
              <a-row :gutter="18">
                <a-col :span="24">
                  <a-radio value=0>{{ myEnum[0] }}</a-radio>
                </a-col>
                <a-col :span="24">
                  <a-radio value=1>{{ myEnum[1] }}</a-radio>
                </a-col>
                <a-col :span="24">
                  <a-radio value=2>{{ myEnum[2] }}</a-radio>
                </a-col>
              </a-row>
              <a-row :gutter="18">
                <a-col :span="24">
                  <a-radio value=3>{{ myEnum[3] }}</a-radio>
                </a-col>
                <a-col :span="24">
                  <a-radio value=4>{{ myEnum[4] }}</a-radio>
                </a-col>
                <a-col :span="24">
                  <a-radio value=5>{{ myEnum[5] }}</a-radio>
                </a-col>
              </a-row>
              <a-row :gutter="18">
                <a-col :span="24">
                  <a-radio value=6>{{ myEnum[6] }}</a-radio>
                </a-col>
                <a-col :span="24">
                  <a-radio value=7>{{ myEnum[7] }}</a-radio>
                </a-col>
                <a-col :span="24">
                  <a-radio value=8>{{ myEnum[8] }}</a-radio>
                </a-col>
              </a-row>
            </div>
          </a-radio-group>
        </a-form-item>
      </a-row>
      <a-row :gutter="16">
        <a-form-item label="物品重量" name="object_weights">
          <a-input-number v-model:value="form.object_weights" placeholder="请输入物品重量" style="width: 350px"
                          :min="1"/>
        </a-form-item>
      </a-row>
    </a-form>
    <a-flex justify="space-evenly" align="flex-end">
      <a-button @click="showDrawer_close">取消</a-button>
      <a-button type="primary" @click="showDrawer_close(); $emit('changeInfo', form)">确认</a-button>
    </a-flex>
  </a-drawer>

</template>

<style scoped>

</style>