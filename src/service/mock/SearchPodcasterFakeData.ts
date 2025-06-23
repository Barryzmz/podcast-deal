import type {Account} from '@/types/baseType'
import FroggyChiu from '@/assets/image/podcaster/呱吉.jpg'
import commuteforme from '@/assets/image/podcaster/台灣通勤第一品牌.jpg'
import bailingguo from '@/assets/image/podcaster/百靈果.jpg'
import Gooaye from '@/assets/image/podcaster/股癌.jpg'
import TsaiAGa543 from '@/assets/image/podcaster/蔡阿嘎543.jpg'
import jessetang1113 from '@/assets/image/podcaster/唐洋雞酒屋.jpg'
import ladyflavor_brain from '@/assets/image/podcaster/好味小姐.jpg'
import tagTalkshow from '@/assets/image/podcaster/瘋女人聊天室.jpg'
import betty_wu from '@/assets/image/podcaster/吳淡如人生實用商學院.jpg'
import podcast_hbgk from '@/assets/image/podcaster/澀情守門員.jpg'
import templatead1 from '@/assets/image/範例外部廣告1.png'
import templatead2 from '@/assets/image/範例外部廣告2.png'

export const top_ten_Podcaster: Account[] = [
  {
    accountId: 'commuteforme',
    accountName: '台灣通勤第一品牌',
    name: '台灣通勤第一品牌',
    avatar: commuteforme,
    type: 'Podcaster',
    introduction: ''
  },
  {
    accountId: 'FroggyChiu',
    accountName: '呱吉',
    name: '呱吉&采翎',
    avatar: FroggyChiu,
    type: 'Podcaster',
    introduction: ''
  },
  {
    accountId: 'bailingguo',
    accountName: '百靈果 News',
    name: 'Bailingguo News',
    avatar: bailingguo,
    type: 'Podcaster',
    introduction: ''
  },
  {
    accountId: 'Gooaye',
    accountName: '股癌',
    name: '謝孟恭',
    avatar: Gooaye,
    type: 'Podcaster',
    introduction: ''
  },
  {
    accountId: 'TsaiAGa543',
    accountName: '蔡阿嘎543',
    name: '蔡阿嘎',
    avatar: TsaiAGa543,
    type: 'Podcaster',
    introduction: ''
  },
  {
    accountId: 'jessetang1113',
    accountName: '唐洋雞酒屋',
    name: '唐綺揚',
    avatar: jessetang1113,
    type: 'Podcaster',
    introduction: ''
  },
  {
    accountId: 'ladyflavor_brain',
    accountName: '好味小姐開束縛我還你原形',
    name: '好味小姐',
    avatar: ladyflavor_brain,
    type: 'Podcaster',
    introduction: ''
  },
  {
    accountId: 'tag.talkshow',
    accountName: '瘋女人聊天室',
    name: 'Apple 泰辣 G蛋布丁',
    avatar: tagTalkshow,
    type: 'Podcaster',
    introduction: ''
  },
  {
    accountId: 'betty_wu',
    accountName: '吳淡如人生實用商學院',
    name: '吳淡如',
    avatar: betty_wu,
    type: 'Podcaster',
    introduction: ''
  },
  {
    accountId: 'podcast_hbgk',
    accountName: '澀情守門員',
    name: '史搞/小迪/阿強',
    avatar: podcast_hbgk,
    type: 'Podcaster',
    introduction: ''
  }
]

export const category_podcaster = [
  { name: '🔥排行榜前十名', label: 'pop_ten', id: "0" },
  { name: '🔥訂閱前十名',  label: 'sub_ten',  id: "1" },
  {
    name: '藝術與娛樂',
    label: 'arts_and_entertainment',
    id: "2",
    children: [
      { name: '藝術與娛樂', label: 'arts_and_entertainment', id: "2-1" },
      { name: '影視作品', label: 'vision', id: "2-2" },
      { name: '書籍文學', label: 'books', id: "2-3" },
      { name: '喜劇', label: 'comedy', id: "2-4" },
      { name: '名人', label: 'population', id: "2-5" },
      { name: '流行文化', label: 'pop_culture', id: "2-6" },
      { name: '故事', label: 'story', id: "2-7" },
    ],
  },
  {
    name: '商業與科技',
    label: 'business_and_tech',
    id: "3",
    children: [
      { name: '商業與科技', label: 'business_and_tech', id: "3-1" },
      { name: '商業', label: 'business', id: "3-2" },
      { name: '職業', label: 'pro', id: "3-3" },
      { name: '經濟學', label: 'economics', id: "3-4" },
      { name: '金融', label: 'finance', id: "3-5" },
      { name: '行銷', label: 'marketing', id: "3-6" },
      { name: '科技', label: 'technology', id: "3-7" },
    ],
  },
  {
    name: '教育',
    label: 'educate',
    id: "4",
    children: [
      { name: '教育', label: 'educate', id: "4-1" },
      { name: '政府', label: 'government', id: "4-2" },
      { name: '歷史', label: 'history', id: "4-3" },
      { name: '語言', label: 'language', id: "4-4" },
      { name: '哲學', label: 'philosophy', id: "4-5" },
      { name: '科學', label: 'science', id: "4-6" },
    ],
  },
  {
    name: '遊戲',
    label: 'Games',
    id: "5",
    children: [
      { name: '遊戲', label: 'Games', id: "5-1" },
      { name: '電玩', label: 'video_Games', id: "5-2" },
    ],
  },
  {
    name: '生活與健康',
    label: 'life_and_healthy',
    id: "6",
    children: [
      { name: '美容', label: 'cosmetic', id: "6-1" },
      { name: '時尚', label: 'fasion', id: "6-2" },
      { name: '健身與營養', label: 'fitness_and_nutrition', id: "6-3" },
      { name: '餐飲', label: 'food', id: "6-4" },
      { name: '健康', label: 'healthy', id: "6-5" },
      { name: '嗜好', label: 'hobby', id: "6-6" },
      { name: '生活風格', label: 'lifestyle', id: "6-7" },
      { name: '冥想Podcast', label: 'meditation', id: "6-8" },
      { name: '育兒', label: 'childcare', id: "6-9" },
      { name: '關係', label: 'relation', id: "6-10" },
      { name: '自我關懷', label: 'self-care', id: "6-11" },
      { name: '性', label: 'sex', id: "6-12" },
    ],
  }
]