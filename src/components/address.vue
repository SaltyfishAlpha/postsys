<script setup>
import { ref } from "vue";
import { RightOutlined } from '@ant-design/icons-vue';
import Receiveform from "@/components/receiveform.vue";
import Sendform from "@/components/sendform.vue";

const open_send = ref(false);
const open_rec = ref(false);
const showDrawer_send = () => {
  open_send.value = true;
};
const showDrawer_rec = () => {
  open_rec.value = true;
};

const props=defineProps({
  sender_name: String,
  sender_phone: String,
  sender_id: String,
  receiver_name: String,
  receiver_phone: String,
  receiver_addr: String,
})
const fill_send = (data) => {
  emit(changeSend, data);
}
</script>

<template>
  <div style="margin: 30px">
    <a-card :bordered="false" style="width: 100%">

      <div style="display: flex;align-items: center;">
        <div class="icon" style="background: rgb(89, 160, 255);">
          <p class="font_normal" style="color:white; text-align: center; position:relative; top: 4px">寄</p>
        </div>
        <div v-if="sender_name==='' || sender_phone==='' || sender_id===''" >
          <p class="font_normal" style="margin: 0px 0px 0px 20px">请输入寄件人信息</p>
        </div>
        <div v-else style="margin: 0px 10px 0px 20px;">
          <p class="font_normal">{{sender_name || '姓名'}} {{sender_phone || '电话号码'}}</p>
          <p class="font_thin" style="width: 200px; overflow-wrap: break-word;">{{ sender_id || '身份证号' }}</p>
        </div>
        <RightOutlined
            style="position:absolute; right:0; margin: 0px 30px 0px 0px"
            @click="showDrawer_send"
        />
      </div>

      <!--hr style="margin: 20px 10px 20px 0px"-->
      <a-divider />

      <div style="display: flex;align-items: center;">
        <div class="icon" style="background: rgb(129, 179, 55);">
          <p class="font_normal" style="color:white; text-align: center; position:relative; top: 4px">收</p>
        </div>
        <div v-if="receiver_name==='' || receiver_phone==='' || receiver_addr===''" >
          <p class="font_normal" style="margin: 0px 0px 0px 20px">请输入收件人信息</p>
        </div>
        <div v-else style="margin: 0px 10px 0px 20px;">
          <p class="font_normal">{{receiver_name || '姓名'}} {{receiver_phone || '电话号码'}}</p>
          <p class="font_thin" style="width: 200px; overflow-wrap: break-word;">{{ receiver_addr || '地址' }}</p>
        </div>
        <RightOutlined
            style="position:absolute; right:0; margin: 0px 30px 0px 0px"
            @click="showDrawer_rec"
        />
      </div>

    </a-card>

    <receiveform
        :open_rec="open_rec"
        @some-event="()=>open_rec=false"
        @change-rec="(data) => { $emit('changeRec', data) }"
    />
    <sendform
        :open_send="open_send"
        @some-event="()=>open_send=false"
        @change-send="(data) => { $emit('changeSend', data); }"
    />
  </div>
</template>

<style>
.icon {
  width: 30px;
  height: 30px;
  border-radius: 5px 5px 5px 5px;
}
</style>