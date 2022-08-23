<template>
  <Header/>
    <div class="flex justify-center pt-6">
      <div class="grid grid-cols-2 gap-4">
        <div class="grid-cols-4 flex-col">
          <div>
            <img src="../assets/images/fr/empty.png" class="w-128 h-96" alt="preview"/>
          </div>

          <div>
            <input type="button" class="d-none" name="file" >
            <img src="../assets/images/fr/fl_sample1.jpg" class="w-64 h-48" alt="preview"/>
          </div>

          <div>
            <input type="button" class="d-none" name="file" />
            <img src="../assets/images/fr/fl_sample2.png" class="w-64 h-48" alt="preview"/>
          </div>

          <div>
            <input type="file" class="invisible" name="file"/>
            <img src="../assets/images/fr/upload.png" class="w-64 h-48" alt="preview"/>
          </div>
        </div>
        <div>
          <textarea id="myData" cols="40" rows="12"></textarea>
        </div>
        <button @click="test" type="button" class="whitespace-nowrap inline-flex items-center justify-center p-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" aria-expanded="false" :disabled="button_status">Passive Liveness Test</button>
      </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import faceRecognitionLib from "facerecognition-sdk.js";

export default {
  name: "fr",
  components: {
    Header
  },
  methods: {
    test() {
      console.log(faceRecognitionLib.add(1, 2));
    }
  }
}
</script>

<style scoped>

</style>