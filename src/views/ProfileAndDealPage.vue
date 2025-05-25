<template>
  <div class="container-fluid">
    <div class="row m-0 p-0">
      <!-- 左側個人資料區塊 -->
      <div class="col-3 mt-3">
        <div class="card p-2 sticky-top" style="top: 5rem;">
          <div class="d-flex align-items-center">
            <img :src="user.imageUrl" alt="個人照片" class="rounded-circle me-3" style="width:80px; height:80px; object-fit:cover;">
            <div class="text-start">
              <p class="mb-0 small text-muted">Podcaster</p>
              <p class="mb-0 text-muted">{{ user.name }}</p>
            </div>
          </div>
          <div>
            <p class="mt-3 text-start">{{ user.introduction }}</p>
          </div>
        </div>
      </div>
        
      <!-- 中間葉配資訊 -->
      <div class="col-6">
        <router-view v-slot="{ Component, route }">
          <!-- 只有 AdvertorialList 需要被 keep-alive 缓存 -->
          <keep-alive include="AdvertorialList">
            <component
              :is="Component"
              :advertorial="posts"
            />
          </keep-alive>
        </router-view>
      </div>

      <!-- 右側廣告區塊 -->
      <div class="col-3 mt-3">
        <el-image
          :src=templatead1
          fit="cover"
          style="width: 100%; height: auto; border-radius: 8px;"
        />
        <el-image
          :src=templatead2
          fit="cover"
          style="width: 100%; height: auto; border-radius: 8px;"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import avatar2 from '@/assets/image/podcaster/台灣通勤第一品牌.jpg'
import templatead1 from '@/assets/image/範例外部廣告1.png'
import templatead2 from '@/assets/image/範例外部廣告2.png'
import type { Advertorial } from '@/types/advertorial'

// 個人資訊
const props = defineProps({
  userid: {
    type: String,
    required: true
  }
})

const user = ref({
  imageUrl: avatar2,
  podcasterName: '台灣通勤第一品牌',
  name: '台灣通勤第一品牌',
  introduction: '各類合作請丟commuteforme@gmail.com，目前臉書收件匣被各式聊天仔灌爆中。短期目標更動為錄音清晰音量宜人既往追究。本節目各大平台均有上架，感謝支持。'
})

const posts = ref<Advertorial[]>([
  {
    id: '000001',
    podcasterName: '台灣通勤第一品牌',
    name: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【Saily】贊助播出',
    content: '前往 下載 Saily APP，並在結帳時使用優惠代碼 【commute】立即享有專屬 eSIM 方案 85 折優惠！ #SailyeSIM',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: true
  },
  {
    id: '000002',
    podcasterName: '台灣通勤第一品牌',
    name: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【NordVPN】贊助播出',
    content: '現在只要搜尋或到NordVPN官網輸入台通的專屬優惠碼【commute】現在購買獨家優惠方案 享贈送4個月另有30天試用期，可以隨時取消',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available:  true
  },
  {
    id: '000003',
    podcasterName: '台灣通勤第一品牌',
    name: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【臺北市文化局】贊助播出',
    content: '▐ 第 29 屆臺北文化獎 ​ • ​ 現正開放徵選 ▐The 29th Taipei Culture Award Announces Call for Entries第29屆臺北文化獎徵選開跑啦！即日起至6月17日(二)17:30受理申請自 1997 年創辦至今，「臺北文化獎」已表揚超過 80 位傑出文化人與團體！感謝這些年每一位文化人的投入，也感謝市民對文化持續的參與與關注。臺北文化獎之受獎者，每年至多以2名為原則，每名受獎者可獲頒獎座1座、獎金新臺幣100萬元獎勵重點：落實文化深入生活、傳統開出現代、本土面向國際，對臺北市文化特質之形塑有特殊貢獻者。',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: true
  },
  {
    id: '000004',
    podcasterName: '台灣通勤第一品牌',
    name: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【雷霆特攻隊*】贊助播出',
    content: '本集節目由【雷霆特攻隊*】贊助播出漫威最新電影《雷霆特攻隊*》全台戲院熱映中！這部被外媒譽為「MCU全新轉折點」的電影集結了一群魅力十足的反英雄充滿衝撞火花與獨特魅力，顛覆你對漫威宇宙所有的想像片尾彩蛋超驚喜！將撼動漫威宇宙未來！不想被暴雷？立即衝戲院，見證漫威新篇章！#漫威回來了 #動作爽度爆表 #幽默與情感兼具 #今年不容錯過的一部電影',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: true
  },
  {
    id: '000005',
    podcasterName: '台灣通勤第一品牌',
    name: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【經脆脆 雞皮餅乾】贊助播出',
    content: '台灣雞皮餅乾領導品牌「經脆脆」，不只將鹹酥雞攤的必點菜單炸雞皮、甜不辣變成涮嘴零食，2025更推出新品「素米血脆片」！🌟原料嚴選新鮮糯米製成的素米血糕🌟完美還原鹹酥雞攤的白胡椒香氣🌟全素可食！6/3前，經脆脆全系列商品滿$399，輸入優惠碼【commute2025】可折抵$30專屬連結：#經脆脆 #雞皮餅乾 #素米血脆片',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: true
  },
  {
    id: '000006',
    podcasterName: '台灣通勤第一品牌',
    name: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '【Saily eSIM】贊助播出',
    content: '本集節目由【Saily eSIM】贊助播出現在前往  下載 Saily APP並在結帳時使用優惠代碼 [newfolder]立即享有專屬 eSIM 方案 85 折優惠!',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: true
  },
  {
    id: '000007',
    podcasterName: '台灣通勤第一品牌',
    name: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【YODEE 優迪】與【Brush Baby】贊助播出！',
    content: '來自英國的嬰幼兒口腔保健專家【Brush Baby】，專為小朋友設計一系列潔牙用品，從剛長牙的寶寶到大童都能找到合適的選擇。其中最受歡迎的【WildOnes】兒童聲波電動牙刷系列也是我們最喜歡的！搭載軟毛震動技術、智能計時與換區提醒功能，能幫助培養正確刷牙習慣；還有超可愛的動物造型，讓孩子每天刷牙都變得超期待！也有針對不同年齡的電動牙刷可選擇，柔軟雙刷毛幫助清潔力加倍，連齒縫也不放過！全機更是IPX7防水等級，小孩邊洗澡邊刷牙也OK，根本懶人救星。不只牙刷，Brush Baby還有手指棉巾、固齒器牙刷，以及最高含氟量達1350ppmF的木醣醇兒童牙膏，系列超齊全，全面守護從嬰兒到兒童的口腔健康！即日起至5/26，點擊下方連結，即可享有台通聽眾專屬限時優惠，滿額再加贈【木醣醇牙膏12ml】！台通專屬優惠連結👉 ',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: true
  },
  {
    id: '00008',
    podcasterName: '台灣通勤第一品牌',
    name: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【Saily】贊助播出',
    content: '前往https://saily.com/commute 下載 Saily APP，並在結帳時使用優惠代碼 【commute】立即享有專屬 eSIM 方案 85 折優惠！',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: true
  },
  {
    id: '000009',
    podcasterName: '台灣通勤第一品牌',
    name: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【光茵樂活】贊助播出',
    content: '媽媽說保養品太多？那你該換個方式寵她了💡今年就送媽媽「喝得下的保養」，光茵樂活鮮銀耳禮盒是媽媽真的會打開喝完、還會問你在哪買的貼心禮💝',
    dateTime: '永久',
    available: true
  },
  {
    id: '000010',
    podcasterName: '台灣通勤第一品牌',
    name: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【NordVPN】贊助播出',
    content: '現在只要搜尋https://nordvpn.com/commute或到NordVPN官網輸入台通的專屬優惠碼【commute】現在購買獨家優惠方案 享贈送4個月另有30天試用期，可以隨時取消',
    dateTime: '2025/04/10 ~ 2025/04/21',
    available: true
  },
  {
    id: '000011',
    podcasterName: '台灣通勤第一品牌',
    name: '台灣通勤第一品牌',
    avatar: avatar2,
    title: '本集節目由【芳茲滴雞精】贊助播出',
    content: '什麼!? 滴雞精也能shot!!!快來聽我們的新吃法，一起跟媽媽歡慶母親節👉https://fun-s.cc/commuteforme?sl-ref=commuteforme 帶媽媽、老婆吃”Fine Dining”不是問題 在家就能變帥廚，2025犒賞心中最愛的人放大絕加入這兩味最對味👨‍🍳#芳茲滴雞精 #芳茲滴魚精🟡常溫好喝無腥味🟡蛋白質、總支鏈胺基酸、膠原蛋白🟡牛磺酸、鈣質、深海魚軟骨素一家大小照顧穩妥妥多元營養打好一整年健康基礎🙌母親節送禮越來越靠近買芳茲保媽媽一生健康還有機會拿鑽石項鍊💎讓媽媽老婆越來越漂亮的機會不可錯過好康就是要大聲說📢4/9～5/11💎全館單筆消費滿 6,800元即有機會抽中京華鑽石項鍊共一名💎全館單筆消費滿10,888元送芳茲滴雞精、芳茲滴魚精環保包各一包(不累贈)詳細資訊可參考芳茲官網',
    dateTime: '2025/04/10 ~ 2025/04/21',
    available: true
  },
])

const comments = ref([
  { author: '李議程', content: '這又沒多少錢，用一下啦', date: '2025-05-18 10:00' },
  { author: '皇民葉', content: '跟小何去日本的時候有用，推推推', date: '2025-05-18 12:30' },
])


// 文章列表

// 廣告資料
const ads = ref([
  { imageUrl: 'https://via.placeholder.com/250x150', caption: '廣告一' },
  { imageUrl: 'https://via.placeholder.com/250x150', caption: '廣告二' }
])


function handleCommentSubmit(newCommentText) {
  if (!newCommentText.trim()) return
  comments.value.push({
    author: '訪客',
    content: newCommentText,
    date: new Date().toLocaleString(),
  })
}

// function goDetail(id) {
//   router.push({ name: 'Advertorial', params: { id } })
// }

</script>

<style scoped>

.list-group-item {
  margin-bottom: 0.5rem;
}
</style>
