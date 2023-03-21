<template>
  <div class="h-5 "></div>
  <!-- container -->
  <div class="mx-20">
    <div class="text-center my-5">
      <h1 class="text-2xl font-bold">{{ name }}</h1>

      <!-- Personal Infomation -->
      <div class="mt-2 flex justify-center gap-x-6">
        <Info icon="bi bi-telephone">{{ info.phone }}</Info>
        <Info icon="bi bi-envelope-at">{{ info.mail }}</Info>
        <Info icon="bi bi-geo-alt">{{ info.location }}</Info>
      </div>
      <div class="flex justify-center gap-x-6">
        <Info icon="bi bi-github">{{ info.github }}</Info>
      </div>
    </div>

    <!-- Work Experience -->
    <SectionHead icon="bi bi-person-workspace">工作经历</SectionHead>
    <div v-for="exp, index in experience" class="text-content mt-2">
      <BothsideText :class="index !== 0 ? 'mt-2' : ''">
        <template #left>
          <div class="font-medium text-r-title">
            {{ exp.corpName }}
          </div>
          <div class="w-2"></div>
          <div>-</div>
          <div class="w-2"></div>
          <div class=" text-r-title">
            {{ exp.title }}
          </div>
        </template>
        <template #right>
          <div class="font-medium text-r-title">
            {{ exp.time }}
          </div>
        </template>
      </BothsideText>
      <Content class="text-content" :content="exp.content" />
    </div>

    <!-- Skills -->
    <SectionHead icon="bi bi-tools">专业技能</SectionHead>
    <div class="text-content">
      <Content class="text-content gap-y-0.5" :content="skills.content" />
    </div>

    <!-- Education -->
    <SectionHead icon="bi bi-mortarboard-fill">教育经历</SectionHead>
    <div v-for="edu in education" class="text-content">
      <BothsideText class="text-sm">
        <template #left>
            <div class="font-medium">
              {{ edu.name }}
            </div>
          </template>
          <template #right>
            <div class="font-medium">
              {{ edu.time }}
            </div>
          </template>
      </BothsideText>
      <BothsideText>
        <template #left>
          <div class="text-r-title italic">
            {{ edu.title }}
          </div>
        </template>
      </BothsideText>
    </div>
    
    <!-- Others -->
    <SectionHead icon="bi bi-chat-dots-fill">其他</SectionHead>
    <div class="text-content">
      <ul class="list-inside list-disc">
        <li v-for="o in others">
          <span class="font-semibold">{{ o.title }}</span>：{{ o.desc }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Info from './components/Info.vue'
import SectionHead from './components/SectionHead.vue'
import BothsideText from './components/BothsideText.vue'
import Content from './components/Content.vue'
import { name, info, experience, education, others, skills } from './content_fake'


</script>