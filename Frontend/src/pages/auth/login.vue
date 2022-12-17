<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div class="min-h-screen bg-green-600 flex justify-center items-center">
      <div class="absolute w-60 h-60 rounded-xl bg-green-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div class="absolute w-48 h-48 rounded-xl bg-green-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
      <div class="md:py-12 py-4 md:px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Signin</h1>
          <p class=" w-80 text-center text-sm mb-1 font-semibold text-gray-700 tracking-wide cursor-pointer">
            Signin to your dashboard to access all the services
          </p>
        </div>
        <div class="space-y-4">
          <input type="text" v-model="form.username" placeholder="Username" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
          <input type="password" v-model="form.password" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
        </div>
        <div class="text-center mt-6">
          <button @click="login" class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-400">Signin</button>
          <p class="mt-4 text-sm">
            Don't Have An Account?
            <span class="underline cursor-pointer">
                <router-link to="/auth/signup">
                    Sign Up
                </router-link>
            </span>
          </p>
        </div>
      </div>
      <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
      <div class="w-20h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      picked: "Mode2",
      image: null,
      form: {
        username: null,
        password: null
      }
    }
  },
  computed: {
    isCameraStarted () {
      return this.$store.getters['camera/isCameraStarted']
    }
  },
  methods: {
    async show_camera() {
      await this.$store.dispatch('camera/startCamera')
          .then((stream) => {
            const videoDiv = document.getElementById('live-video')
            videoDiv.srcObject = stream
          })
    },

    close_camera() {
      this.$store.dispatch('camera/stopCamera')
    },

    async take_photo() {
      const video = document.getElementById('live-video')
      const canvas = document.getElementById('live-canvas')
      const canvasCtx = canvas.getContext('2d')
      canvasCtx.drawImage(video, 0, 0, 320, 240)
      this.image = canvas.toDataURL('image/jpeg')
      // await this.$store.dispatch('user/uploadBase64', {
      //   user: this.user.name,
      //   content
      // })
    },

    async login() {
      const headers = {
        "X-RapidAPI-Key": "d795214830msh9a862b18ec8afd2p152901jsn6bc4b3d61b43",
        "X-RapidAPI-Host": "csort.p.rapidapi.com"
      };

      axios.post("https://csort.p.rapidapi.com/accounts/login",
          this.form,
          {headers}
      ).then((res) => {
            this.$notify({group: "success", title: "User Enrollment Result", text: "The user login success"}, 2000)
            this.$store.commit("face/set", res.data["user_email"])
            this.$router.push("/dashboard")
          })
          .catch((error) => {
            this.$notify({group: "error", title: "User Enrollment Result", text: "The user login failed"}, 2000)
          })
          .finally(() => {

          })
    },
  },
  mounted() {
    // this.show_camera()
  },
}
</script>