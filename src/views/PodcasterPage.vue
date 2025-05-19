<template>
  <div class="container-fluid">
      <div class="row m-0 p-0">
        <!-- 左側個人資料區塊 -->
        <div class="col-3">
          <div class="card p-2 sticky-top" style="top: 5rem;">
            <div class="d-flex align-items-center">
              <img :src="user.imageUrl" alt="個人照片" class="rounded-circle me-3" style="width:80px; height:80px; object-fit:cover;">
              <div class="text-start">
                <p class="mb-0 small text-muted">Podcaster</p>
                <h5 class="mb-1">{{ user.podcasterName }}</h5>
                <p class="mb-0 text-muted">{{ user.name }}</p>
              </div>
            </div>
            <div>
              <p class="mt-3 text-start">{{ user.introduction }}</p>
            </div>
          </div>
        </div>
        
        <div class="col-6">
          <AdvertorialList :posts="posts" />
        </div>

        <!-- 右側廣告區塊 -->
        <div class="col-3">
      </div>
    </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import avatar2 from '@/assets/image/podcaster/台灣通勤第一品牌.jpg'
import AdvertorialList from '@/components/AdvertorialList.vue'

// 個人資訊
const user = ref({
  imageUrl: avatar2,
  podcasterName: '台灣通勤第一品牌',
  name: '台灣通勤第一品牌',
  introduction: '各類合作請丟commuteforme@gmail.com，目前臉書收件匣被各式聊天仔灌爆中。短期目標更動為錄音清晰音量宜人既往追究。本節目各大平台均有上架，感謝支持。'
})

// 文章列表
const posts = ref([
  {
    id: 1,
    username: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【Saily】贊助播出',
    content: '前往 下載 Saily APP，並在結帳時使用優惠代碼 【commute】立即享有專屬 eSIM 方案 85 折優惠！ #SailyeSIM',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: '可用'
  },
  {
    id: 2,
    username: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【NordVPN】贊助播出',
    content: '現在只要搜尋或到NordVPN官網輸入台通的專屬優惠碼【commute】現在購買獨家優惠方案 享贈送4個月另有30天試用期，可以隨時取消',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: '可用'
  },
  {
    id: 3,
    username: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【臺北市文化局】贊助播出',
    content: '▐ 第 29 屆臺北文化獎 ​ • ​ 現正開放徵選 ▐The 29th Taipei Culture Award Announces Call for Entries第29屆臺北文化獎徵選開跑啦！即日起至6月17日(二)17:30受理申請自 1997 年創辦至今，「臺北文化獎」已表揚超過 80 位傑出文化人與團體！感謝這些年每一位文化人的投入，也感謝市民對文化持續的參與與關注。臺北文化獎之受獎者，每年至多以2名為原則，每名受獎者可獲頒獎座1座、獎金新臺幣100萬元獎勵重點：落實文化深入生活、傳統開出現代、本土面向國際，對臺北市文化特質之形塑有特殊貢獻者。',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: '可用'
  },
  {
    id: 4,
    username: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【雷霆特攻隊*】贊助播出',
    content: '本集節目由【雷霆特攻隊*】贊助播出漫威最新電影《雷霆特攻隊*》全台戲院熱映中！這部被外媒譽為「MCU全新轉折點」的電影集結了一群魅力十足的反英雄充滿衝撞火花與獨特魅力，顛覆你對漫威宇宙所有的想像片尾彩蛋超驚喜！將撼動漫威宇宙未來！不想被暴雷？立即衝戲院，見證漫威新篇章！#漫威回來了 #動作爽度爆表 #幽默與情感兼具 #今年不容錯過的一部電影',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: '可用'
  },
  {
    id: 5,
    username: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【經脆脆 雞皮餅乾】贊助播出',
    content: '台灣雞皮餅乾領導品牌「經脆脆」，不只將鹹酥雞攤的必點菜單炸雞皮、甜不辣變成涮嘴零食，2025更推出新品「素米血脆片」！🌟原料嚴選新鮮糯米製成的素米血糕🌟完美還原鹹酥雞攤的白胡椒香氣🌟全素可食！6/3前，經脆脆全系列商品滿$399，輸入優惠碼【commute2025】可折抵$30專屬連結：#經脆脆 #雞皮餅乾 #素米血脆片',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: '可用'
  },
  {
    id: 6,
    username: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '【Saily eSIM】贊助播出',
    content: '本集節目由【Saily eSIM】贊助播出現在前往  下載 Saily APP並在結帳時使用優惠代碼 [newfolder]立即享有專屬 eSIM 方案 85 折優惠!',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: '可用'
  },
  {
    id: 7,
    username: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【YODEE 優迪】與【Brush Baby】贊助播出！',
    content: '來自英國的嬰幼兒口腔保健專家【Brush Baby】，專為小朋友設計一系列潔牙用品，從剛長牙的寶寶到大童都能找到合適的選擇。其中最受歡迎的【WildOnes】兒童聲波電動牙刷系列也是我們最喜歡的！搭載軟毛震動技術、智能計時與換區提醒功能，能幫助培養正確刷牙習慣；還有超可愛的動物造型，讓孩子每天刷牙都變得超期待！也有針對不同年齡的電動牙刷可選擇，柔軟雙刷毛幫助清潔力加倍，連齒縫也不放過！全機更是IPX7防水等級，小孩邊洗澡邊刷牙也OK，根本懶人救星。不只牙刷，Brush Baby還有手指棉巾、固齒器牙刷，以及最高含氟量達1350ppmF的木醣醇兒童牙膏，系列超齊全，全面守護從嬰兒到兒童的口腔健康！即日起至5/26，點擊下方連結，即可享有台通聽眾專屬限時優惠，滿額再加贈【木醣醇牙膏12ml】！台通專屬優惠連結👉 ',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: '可用'
  },
  {
    id: 8,
    username: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【Saily】贊助播出',
    content: '前往https://saily.com/commute 下載 Saily APP，並在結帳時使用優惠代碼 【commute】立即享有專屬 eSIM 方案 85 折優惠！',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: '可用'
  },
  {
    id: 9,
    username: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【光茵樂活】贊助播出',
    content: '媽媽說保養品太多？那你該換個方式寵她了💡今年就送媽媽「喝得下的保養」，光茵樂活鮮銀耳禮盒是媽媽真的會打開喝完、還會問你在哪買的貼心禮💝',
    dateTime: '永久',
    available: '不可用'
  },
  {
    id: 10,
    username: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【NordVPN】贊助播出',
    content: '現在只要搜尋https://nordvpn.com/commute或到NordVPN官網輸入台通的專屬優惠碼【commute】現在購買獨家優惠方案 享贈送4個月另有30天試用期，可以隨時取消',
    dateTime: '2025/04/10 ~ 2025/04/21',
    available: '可用'
  },
])

// 廣告資料
const ads = ref([
  { imageUrl: 'https://via.placeholder.com/250x150', caption: '廣告一' },
  { imageUrl: 'https://via.placeholder.com/250x150', caption: '廣告二' }
])
</script>

<style scoped>

.list-group-item {
  margin-bottom: 0.5rem;
}
</style>
