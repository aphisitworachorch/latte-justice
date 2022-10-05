<template>
  <div class="relative flex flex-col items-center justify-center min-h-screen sm:items-center sm:pt-0 font-sans">
    <div class="items-center">
      <img class="image-full w-96 h-96 rounded-3xl m-5" :src="imageFile"/>
      <script async src="https://www.instagram.com/embed.js"></script>
    </div>
    <br/>
    <div class="text-2xl items-center text-center m-5">
      <h1 class="font-bold">ธนพล แก้วมูล , 2541-2565</h1>
      <br/>
      <h1>เต้ ยังไม่ได้รับความยุติธรรม </h1>
      <br/>
      <h1>เป็นเวลา {{ formattedResult }}</h1>
      <br/>
      <h1>หน้านี้จะปรากฏจนกว่า เต้ จะได้รับความยุติธรรม</h1>
      <h1>และผู้กระทำความผิดออกมายอมรับในสิ่งที่ตนกระทำไว้</h1>
      <h1>พร้อมกับได้รับการลงโทษตามกระบวนการยุติธรรมของประเทศไทย</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {DateTime} from "ts-luxon";
import {createSEOMeta} from "~/constants/seo";

export default Vue.extend({
  name: 'InRemembranceOfLatte',
  data: () => {
    return {
      imageFile: require('assets/image/InRemembranceOfLatte.png'),
      fromDate: DateTime.fromISO('2022-09-30T22:00:00.000Z'),
      result: {},
      formattedResult: "",
    }
  },
  mounted() {
    const result = DateTime.local().diff(this.fromDate,['days','months','years']).toObject();
    this.formattedResult = `${Number(result.years) < 1 ? '' : result.years?.toFixed(0)} ${Number(result.years) < 1 ? '' : 'ปี'} ${Number(result.months) < 1 ? '' : result.months?.toFixed(0)} ${Number(result.months) < 1 ? '' : 'เดือน'} ${Number(result.days) < 1 ? '' : result.days?.toFixed(0)} ${Number(result.days) < 1 ? '' : 'วัน'}`;
  },
  head: {
    title: '🌼 ระลึกถึง ธนพล แก้วมูล , 2541-2565',
    meta: [
      ...createSEOMeta({
        author: "Arsanandha Aphisitworachorch",
        title: "🌼 ระลึกถึง ธนพล แก้วมูล , 2541-2565",
        description: `หน้านี้จะถูกลบออกเมื่อ เต้ ได้รับความยุติธรรม และผู้กระทำความผิดออกมายอมรับในสิ่งที่ตนกระทำไว้ พร้อมกับได้รับการลงโทษตามกระบวนการยุติธรรมของประเทศไทย`,
        image: require('assets/image/OGTae.png'),
        url: "https://latte-justice.arsanandha.xyz",
        cardType: "summary_large_image",
        twitterCreator: "@arsanandha",
        type: "website"
      })
    ]
  }
})
</script>

<style scoped>
</style>
