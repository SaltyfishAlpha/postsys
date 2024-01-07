<script setup>
import {RightOutlined} from "@ant-design/icons-vue";
import http from "@/utils/request";
import {ref} from "vue";
import {useRouter} from "vue-router";
import Background from "@/components/background.vue";

const router = useRouter();
const my_toSend = async function () {
  await http.get('/ping').then(
      async (res) => {
        console.log(res.data)
        await router.push('/send')
      }
  ).catch(
      (err)=>{
        console.log(err)
      }
  )
}

const my_toFind = async function () {
  let res = await http.get('/ping')
  console.log(res)
  console.log('find')
}

const spinning = ref(false)

//添加请求拦截器
http.interceptors.request.use(config => {
  // show loading
  spinning.value = true
  return config;
}, err => {
  // hide loading
  spinning.value = false
  return Promise.resolve(err);
});

//响应拦截器
http.interceptors.response.use(
    response => {
      // hide loading
      spinning.value = false
      return response;
    },
    error => {
      // err message
      return Promise.reject(error);
    }
);
</script>

<template>
  <background/>
  <div style="margin: 30px; padding-top: 50px ">

    <a-card :bordered="false">

      <!-- 寄快递 -->
      <div style="display: flex;align-items: center;">
        <div class="icon" style="background: rgb(89, 160, 255);">
          <p class="font_normal" style="color:white; text-align: center; position:relative; top: 4px">寄</p>
        </div>
        <div style="margin: 0px 10px 0px 20px;">
          <p class="font_normal">寄快递</p>
        </div>
        <RightOutlined
            style="position:absolute; right:0; margin: 0px 30px 0px 0px"
            @click="my_toSend"
        />
      </div>

      <a-divider/>

      <!-- 查快递 -->
      <div style="display: flex;align-items: center;" class="disable">
        <div class="icon" style="background: rgb(129, 179, 55);">
          <p class="font_normal" style="color:white; text-align: center; position:relative; top: 4px">收</p>
        </div>
        <div style="margin: 0px 10px 0px 20px;">
          <p class="font_normal">查快递</p>
        </div>
        <RightOutlined
            style="position:absolute; right:0; margin: 0px 30px 0px 0px"
            @click="my_toFind"
        />
      </div>

    </a-card>
  </div>

  <a-flex justify="center" align="center">
    <a-spin :spinning="spinning"> </a-spin>
  </a-flex>
</template>

<style>
.icon {
  width: 30px;
  height: 30px;
  border-radius: 5px 5px 5px 5px;
}
.disable{
  pointer-events: none;
  color: rgb(154, 154, 154);
}
</style>