<template>
  <div class="container-fluid">
    <div class="row m-0 p-0 d-flex justify-content-center">
      <div class="col-6 mb-5">
        <AddNewArticle 
          :accountProfile="accountProfile" 
          :partnerList="partners" 
          @submit="handlePostSubmit" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import AddNewArticle from '@/components/CreateNewArticle.vue'
import baseApi from '@/service/api'
import { Advertorial, DefaultAdvertorial, Account, DefaultAccount } from '@/types/baseType'
const partners = ref<Account[]>([])
const selectedPartnerIds = ref([])
const advertorial = ref<Advertorial>({...DefaultAdvertorial});


function formatDateToYMD(date) {
  if (!(date instanceof Date)) return ''
  return date.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

const accountProfile = ref<Account>({ ...DefaultAccount})

function saveAdvertorial() {
  advertorial.value.account.accountId = accountProfile.value.accountId
  advertorial.value.account.accountName = accountProfile.value.accountName
  advertorial.value.partners = selectedPartnerIds.value
}

async function handlePostSubmit(data) {
  saveAdvertorial()
  advertorial.value.title = data.title
  advertorial.value.content = data.content
  advertorial.value.partners = data.partnerList
  advertorial.value.startDate = formatDateToYMD(data.startDate)
  advertorial.value.endDate = formatDateToYMD(data.endDate)
  advertorial.value.account.accountId = accountProfile.value.accountId
  advertorial.value.account.accountName = accountProfile.value.accountName
  const save = (await baseApi.post('/create_advertorial', {
    advertorial: advertorial.value
  }))
}

onMounted(async () => {
  const accountProfile_result = (await baseApi.post('/profile', {
    accountId: "commuteforme"
  })).data
  const fisrtCategory = 'pop_ten'
  const brand_list_result = (await baseApi.post('/brand_list', {
    category: fisrtCategory
  })).data
  partners.value = brand_list_result.data
  accountProfile.value = accountProfile_result.data
})
</script>

<style scoped>

</style>
<style>
.el-select-dropdown__item {
  min-height: 80px;
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>