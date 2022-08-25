<template>
  <div>
    <div class="min-h-screen bg-green-600 flex justify-center items-center">
      <div class="absolute w-60 h-60 rounded-xl bg-green-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div class=" absolute w-48 h-48 rounded-xl bg-green-300 -bottom-6 -right-10 transform rotate-12 hidden md:bloc"></div>
      <div class="md:py-12 py-4 md:px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
            Create An Account
          </h1>
          <p class=" w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
            Create an account to enjoy all the services without any ads for free!
          </p>
        </div>
        <form @submit.prevent="signup">
          <div class="space-y-4">
            <input type="text" name="email" v-model="email" placeholder="Email Addres" class=" block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
            <input type="text" name="username" v-model="username" placeholder="Username" class=" block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
<!--            <input type="date" name="date" v-model="date" placeholder="Date of birth" class=" block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>-->
            <input type="password" name="password" v-model="password" placeholder="Password" class=" block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
          </div>
          <div class="text-center mt-6">
            <input type="submit" class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-400" value="Create Account">
            <p class="mt-4 text-sm">
              Already Have An Account?
              <span class="underline cursor-pointer">
                <router-link to="/auth/signin">
                  Sign In
                </router-link>
              </span>
            </p>
          </div>
        </form>
      </div>
      <div
        class="
          w-40
          h-40
          absolute
          bg-purple-300
          rounded-full
          top-0
          right-12
          hidden
          md:block
        "
      ></div>
      <div
        class="
          w-20
          h-40
          absolute
          bg-purple-300
          rounded-full
          bottom-20
          left-10
          transform
          rotate-45
          hidden
          md:block
        "
      ></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      email: null,
      username: null,
      date: null,
      password: null,
      registered: false,
      image: null
    }
  },
  computed: {
      isCameraStarted () {
        return this.$store.getters['camera/isCameraStarted']
      }
  },
  methods: {
    async signup() {
      if (this.email === null) {
        this.$notify({group: "error", title: "SignUp", text: "Please fill out the email field"}, 2000)
        return
      }

      if (this.username === null) {
        this.$notify({group: "error", title: "SignUp", text: "Please fill out the username field"}, 2000)
        return
      }

      if (this.password === null) {
        this.$notify({group: "error", title: "SignUp", text: "Please fill out the password field"}, 2000)

        return
      }

      this.take_photo()

      const response = await axios.post(
          "http://127.0.0.1:8000/signup",
          {"user_email": this.email, "user_name": this.username, "user_pass": this.password, "signup_date": this.date}
      );

      this.registered = response.data["created"]
      if (this.registered === true) {
        const response = await axios.post(
            "http://127.0.0.1:8000/face/enroll/feature",
            {
              "image": this.image,
              "user_email": this.email
            }
        )

        this.$store.commit('face/set', this.email)
        this.close_camera()
        await this.$router.push("/dashboard")
      }
    },

    close_camera() {
      this.$store.dispatch('camera/stopCamera')
    },

    show_photo () {
      const video = document.getElementById('live-video')
      const canvas = document.getElementById('live-camera')
      const canvasCtx = canvas.getContext('2d')
      canvasCtx.drawImage(video, 0, 0, 320, 240)
      this.image = canvas.toDataURL('image/jpeg')
      canvasCtx.strokeStyle = "red"
      canvasCtx.rect(100, 60, 120, 120)
      canvasCtx.stroke()
      setTimeout(() => this.show_photo(), 33)
    },

    take_photo () {
      const video = document.getElementById('live-video')
      const canvas = document.getElementById('live-canvas')
      const canvasCtx = canvas.getContext('2d')
      canvasCtx.drawImage(video, 0, 0, 320, 240)
      this.image = canvas.toDataURL('image/jpeg')
    },

    async show_camera() {
        await this.$store.dispatch('camera/startCamera')
            .then((stream) => {
              const videoDiv = document.getElementById('live-video')
              videoDiv.srcObject = stream
            })
        this.show_photo()
      },
  },
  mounted() {
    // this.show_camera()
  }
}
</script>