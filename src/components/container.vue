<script setup>
import Address from "@/components/address.vue";
import {ref} from "vue";
import Itemtype from "@/components/itemtype.vue";
import Insurance from "@/components/insurance.vue";
import CashonAcompany from "@/components/cashonAcompany.vue";
import Background from "@/components/background.vue";
import http from "@/utils/request.js";
import router from "@/router/index.js";
import {CheckOutlined} from "@ant-design/icons-vue";
import {notification} from "ant-design-vue";
import qs from "qs";

const info = ref({
  company: "",
  sender_name: "",
  sender_phone: "",
  sender_id: "",
  receiver_name: "",
  receiver_phone: "",
  receiver_addr: "",
  object_type: 0, // 这个放勾选的list，返回一个index：0,1,2...给我
  object_weights: 1.0,
  parcel_insurance: false,
  object_value: 0.0,
  cash_on: false //是否到付
})

const fill_send = (data) => {
  // console.log(data)
  info.value.sender_name = data.name
  info.value.sender_id = data.idcard
  info.value.sender_phone = data.phone
}

const fill_rec = (data) => {
  // console.log(data)
  info.value.receiver_name = data.name
  info.value.receiver_phone = data.phone
  info.value.receiver_addr = data.address
}
const fill_info = (data) => {
  // console.log(data)
  info.value.object_weights = data.object_weights
  info.value.object_type = data.object_type
}

function datacheck() {
  if (info.value.company === '') return "请指定快递公司";
  if (info.value.sender_name === '') return "请填写寄件人姓名";
  if (info.value.sender_phone === '') return "请填写寄件人电话号码";
  if (info.value.sender_phone.length !== 11) return "请确认寄件人电话号码";
  if (info.value.sender_id === '') return "请填写身份证号";
  if (info.value.sender_id.length !== 18) return "请确认身份证号";
  if (info.value.receiver_name === '') return "请填写收件人姓名";
  if (info.value.receiver_phone === '') return "请填写收件人电话号码";
  if (info.value.receiver_phone.length !== 11) return "请填写收件人电话号码";
  if (info.value.receiver_addr === '') return "请填写收件人地址";
  if (info.value.object_type === null) return "请填写快递类型";
  if (info.value.object_weights === null) return "请填写快递重量";
  if (info.value.parcel_insurance === null) return "请确认是否保值";
  if (info.value.object_value === null) return "请填写包裹价值";
  if (info.value.cash_on === null) return "请确认是否到付";
  return "success"
}

const load = ref(false)
const checkInfo = ref('')
const uploadData = async function () {
  checkInfo.value = datacheck()
  if (checkInfo.value !== "success") {
    console.log(1)
    console.log(checkInfo)
    console.log(1)
    notification['error']({
      message: checkInfo.value,
    })
    return;
  }

  // vue object to form-data
  const formData = new FormData()
  for (let key in info.value) {
    formData.append(key, info.value[key])
  }

  console.log(info.value)
  console.log(qs.stringify(info.value))
  let res = await http.post('/info', qs.stringify(info.value))
  if (res.status === 200){
    console.log('uploaded')
    await router.push(`/res/${res.status}`)
  }
}

//添加请求拦截器
http.interceptors.request.use(config => {
  // show loading
  load.value = true
  return config;
}, err => {
  // hide loading
  load.value = false
  return Promise.resolve(err);
});

//响应拦截器
http.interceptors.response.use(
    response => {
      // hide loading
      load.value = false
      return response;
    },
    error => {
      // err message
      return Promise.reject(error);
    }
);
</script>

<template>
  <background />

  <div style="position: absolute; left:0px; top:0px; width:100%; height:100%; background:transparent; overflow: auto">
    <Address :sender_name="info.sender_name"
             :sender_phone="info.sender_phone"
             :sender_id="info.sender_id"
             :receiver_addr="info.receiver_addr"
             :receiver_name="info.receiver_name"
             :receiver_phone="info.receiver_phone"
             @change-send="fill_send"
             @change-rec="fill_rec"
    />
    <Itemtype
        :object_type="info.object_type"
        :object_weights="info.object_weights"
        @change-info="fill_info"
    />
    <insurance
        :object_value="info.object_value"
        :parcel_insurance="info.parcel_insurance"
        @checked="(data)=>{info.parcel_insurance=data; console.log(info.parcel_insurance)}"
        @value="(data)=>{info.object_value=data==null?0:data; console.log(info.object_value)}"
    />
    <cashon-acompany
        :cash_on="info.cash_on"
        :company="info.company"
        @checked="data => {info.cash_on=data; console.log(info.cash_on)}"
        @value="data =>{info.company=data; console.log(info.company)}"
    />

  </div>

  <div style="position: absolute; bottom: 10px; width: 100%">
    <a-flex justify="center" align="flex-end">
      <a-button
          shape="circle" size="large" type="primary"
          style="width: 80px; height: 80px; font-size: 30px"
          :loading="load"
          @click="uploadData"
      >
        <CheckOutlined v-if="!load"/>
      </a-button>
    </a-flex>
  </div>
</template>

<style scoped>

</style>