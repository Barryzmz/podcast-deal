import MockAdapter from 'axios-mock-adapter'
import baseApi from '@/service/api'
import { 
  advertorialList,
  commute_profile,
  nordvpn_profile,
  commute_advertorialList, 
  commute_advertorial_comment,
  nordvpn_advertorialList,
  outer_advertisements
} from './ProfileAndDealPageFakeData'
import{
  top_ten_Podcaster,
  category_podcaster,
}from './SearchPodcasterFakeData'
import{
  top_ten_brand,
  category_brand,
}from './SearchBrandFakeData'


// 建立 mock 實例
const mock = new MockAdapter(baseApi, { delayResponse: 150 })
//// 假資料區 ///

//  ProfileAndDealPage mock api
// mock.onGet('/advertorialList').reply(200, {
//   success: true,
//   data: commute_advertorialList,
//   message: ''
// })
mock.onPost('/profile').reply(config => {
  const requestData = JSON.parse(config.data)
  const { accountId } = requestData
  console.log('profile-mock-keyword', accountId)

  let profile = null;
  if(accountId == "commuteforme"){
    profile = commute_profile
  }
  else{
    profile = nordvpn_profile
  }
  // 假設你有資料是陣列格式
  return [200, {
    success: true,
    data: profile,
    message: ''
  }]
})

mock.onPost('/advertorialList').reply(config => {
  const requestData = JSON.parse(config.data)
  const { accountId } = requestData
  console.log('mock-keyword',accountId)

  let advertorialList = [];
  if(accountId == "commuteforme"){
    advertorialList = commute_advertorialList
  }
  else{
    advertorialList = nordvpn_advertorialList
  }
  // 假設你有資料是陣列格式
  return [200, {
    success: true,
    data: advertorialList,
    message: ''
  }]
})

mock.onGet(/\/advertorial\/\d+/).reply(config => {
  const id = config.url!.split('/').pop()
  const item = advertorialList.find(a => a.id === id)
  console.log('item', item)
  return item
    ? [200, { success: true, data: item, message: ''}]
    : [404, { success: false, data: null, message: 'Not Found' }]
})

mock.onGet(/\/advertorial_comment\/\d+/).reply(200,{
    success: true,
    data: commute_advertorial_comment,
    message: ''
})

mock.onGet('/outer_advertisement').reply(200,{
    success: true,
    data: outer_advertisements,
    message: ''
})

//  SearchPodcaster mock api

mock.onGet('/podcaster_category').reply(200,{
  success: true,
  data: category_podcaster,
  message: ''
})

mock.onPost('/podcaster_list').reply(config => {
  const requestData = JSON.parse(config.data)
  const { category } = requestData
  console.log('mock-keyword', category)
  // 假設你有資料是陣列格式
  return [200, {
    success: true,
    data: top_ten_Podcaster,
    message: ''
  }]
})

//  SearchBrand mock api
mock.onGet('/brand_category').reply(200,{
  success: true,
  data: category_brand,
  message: ''
})

mock.onPost('/brand_list').reply(config => {
  const requestData = JSON.parse(config.data)
  const { category } = requestData
  console.log('mock-keyword', category)
  // 假設你有資料是陣列格式
  return [200, {
    success: true,
    data: top_ten_brand,
    message: ''
  }]
})

mock.onPost('/create_advertorial_comment').reply(config => {
  const requestData = JSON.parse(config.data)
  const { advertorialId, content, author } = requestData
  console.log('create_advertorial_comment', advertorialId, content, author)
  // 假設你有資料是陣列格式
  return [200, {
    success: true,
    data: "",
    message: ''
  }]
})

mock.onPost('/create_advertorial').reply(config => {
  const requestData = JSON.parse(config.data)
  const { advertorial } = requestData
  console.log('create_advertorial', advertorial)
  // 假設你有資料是陣列格式
  return [200, {
    success: true,
    data: "",
    message: ''
  }]
})
export default mock

