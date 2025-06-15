<template>
    <div class="dcard-new-post mx-auto mt-4 p-5 bg-white rounded">
        <div class="d-flex align-items-center mb-3">
            <el-avatar :src="accountProfile.imageUrl || circleUrl" size="large" class="mx-2" shape="circle"
                fit="cover" />
            <div class="text-start">
                <strong class="d-block text-muted">{{ accountProfile.name }}</strong>
                <small class="d-block text-muted">{{ currentDate }}</small>
            </div>
        </div>
        <div class="d-block align-items-center ">
            <el-form label-position="top" >
                <el-form-item class="d-flex align-items-center ">
                    <el-select v-model="selectedPartnerIds" multiple filterable placeholder="選擇合作夥伴" style="width: 100%">
                        <el-option v-for="partner in partnerList" filterable :key="partner.accountId"
                            :label="partner.name" :value="partner.accountId">
                            <div class="d-flex align-items-center ">
                                <img :src="partner.image" style="height: 40px" class="me-2" />
                                <span>{{ partner.name }}</span>
                            </div>
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
        <!-- 標題輸入 -->
        <input v-model="title" type="text" class="form-control form-control-lg mb-2" placeholder="標題" maxlength="80" />
        <div class="text-start">
            <p>({{ title.length }}/80)</p>
        </div>
        <!-- 日期選擇 -->
        <div class="text-start mb-3">
            <strong class="d-block">日期選擇</strong>
            <div class="d-flex gap-2">
                <el-date-picker v-model="startDate" type="date" placeholder="開始日期" :disabled-date="disableStartDate" />
                <el-date-picker v-model="endDate" type="date" placeholder="結束日期" :disabled-date="disableEndDate" />
            </div>
        </div>
        <!-- Quill 編輯區 -->
        <div ref="editor" class="editor border" spellcheck="false"></div>
        <div class="d-flex align-items-center mb-3 ">
            <i class="bi bi-image me-3" style="font-size: 25px; cursor: pointer;" @click="imageHandler"></i>
        </div>

        <div class="d-flex justify-content-end">
            <button class="btn btn-outline-secondary me-2" @click="cancel">取消</button>
            <button class="btn btn-primary" :disabled="!canProceed" @click="saveArticle">
                下一步
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { ElAvatar } from 'element-plus'

const title = ref('')
const content = ref('')
const currentDate = ref(null)
const startDate = ref(null)
const editor = ref(null)
const endDate = ref(null)
const selectedPartnerIds = ref([])
const selectedPartners = computed(() =>
    partners.value.filter(p => selectedPartnerIds.value.includes(p.accountId))
)
const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
const MAX_WIDTH = 1200
const MAX_HEIGHT = 1200
const IMG_QUALITY = 0.8
let quill
let intervalId
const checkCurrentDateTimeFrequency = 15000

const emit = defineEmits(['submit'])
const props = defineProps({
    accountProfile: {
        type: Object,
        required: true
    },
    partnerList: {
        type: Array,
        required: true
    }
})

/// 日期處理
// 持續更新目前時間
function updateTime() {
    currentDate.value = new Date().toLocaleString('zh-Hant', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}

// 處理結束時間不可超出起始時間
const disableEndDate = (date) => {
    if (!startDate.value) return false
    return date.getTime() < new Date(startDate.value).getTime()
}

const disableStartDate = (date) => {
    if (!endDate.value) return false
    return date.getTime() > new Date(endDate.value).getTime()
}

/// quill功能處理
// 圖片處理
function imageHandler() {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.click()
    input.onchange = () => {
        const file = input.files[0]
        if (!file) return
        const reader = new FileReader()
        reader.onload = e => {
            const img = new Image()
            img.onload = () => {
                let { width, height } = img
                const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height, 1)
                width *= ratio
                height *= ratio
                const canvas = document.createElement('canvas')
                canvas.width = width
                canvas.height = height
                canvas.getContext('2d').drawImage(img, 0, 0, width, height)
                const dataUrl = canvas.toDataURL('image/jpeg', IMG_QUALITY)
                const range = quill.getSelection(true)
                quill.insertEmbed(range.index, 'image', dataUrl)
                quill.setSelection(range.index + 1)
            }
            img.src = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

// 判斷是否有輸入內容
const canProceed = computed(() => {
    const rawHTML = content.value || ''
    const cleaned = rawHTML
        .replace(/<p><br><\/p>/g, '') // 移除空段落
        .replace(/<[^>]*>/g, '')     // 移除所有 HTML 標籤
        .replace(/&nbsp;/g, '')      // 移除 &nbsp;
        .trim()

    return title.value.trim() !== '' && (cleaned !== '' || /<img\s[^>]*src=/.test(rawHTML))
})

// 自動處理網址偵測
function setupAutoLink(quillInstance) {
  quillInstance.on('text-change', (delta, oldDelta, source) => {
    content.value = quillInstance.root.innerHTML
    if (source !== 'user') return

    const text = quillInstance.getText()
    const urlRegex = /(https?:\/\/[^\s]+)/g
    let match

    while ((match = urlRegex.exec(text)) !== null) {
      const url = match[0]
      const index = match.index
      const [leaf] = quillInstance.getLeaf(index)
      const formats = quillInstance.getFormat(index, url.length)

      if (formats.link === url) continue

      quillInstance.deleteText(index, url.length, 'silent')
      quillInstance.insertText(index, url, { link: url }, 'silent')
    }
  })
}

function cancel() {
    title.value = ''
    quill.setText('')
}

function saveArticle() {
    emit('submit', {
        title: title.value,
        content: content.value,
        startDate: startDate.value,
        endDate: endDate.value,
        partnerList: selectedPartnerIds.value
    })
}

onMounted(() => {
    updateTime() // 初始立即設定時間
    intervalId = setInterval(updateTime, checkCurrentDateTimeFrequency)

    quill = new Quill(editor.value, {
        theme: 'snow',
        modules: { toolbar: false },
        placeholder: '輸入內文...',
    })
    setupAutoLink(quill) 
})
onUnmounted(() => {
    clearInterval(intervalId)
})
</script>

<style scoped>
.editor {
    min-height: 200px;
    font-size: 16px;
    line-height: 1.5;
}
</style>
