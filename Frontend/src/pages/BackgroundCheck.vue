<template>
  <div class="flex h-screen relative bg-white">
    <div class="flex w-64">
      <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
        <nav class="mt-10 overflow-y-auto">
          <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
            Employers
          </p>
          <router-link
            class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
            to="/backgroundcheck"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>

            <span class="mx-4">Background Check</span>
          </router-link>
        </nav>
      </div>
    </div>
    <div class="flex-1 flex flex-col overflow-hidden">
      <AdminHeader/>
      <form class="flex flex-col w-1/2 gap-16 py-8 mx-auto my-0">
        <ul class="relative flex flex-col w-full gap-16 before:absolute before:content-[''] before:z-[-1] before:top-6 before:left-3 before:w-[1px] before:h-[calc(100%-24px)] before:mx-auto before:my-0 before:bg-fg">
        <span class="flex flex-col w-full gap-6 my-0 mx-auto">
          <Input number="1" label="Your full name" placeholder="Antonio Pataro" name="name" type="name"></Input>
          <Input number="2" label="Your e-mail" placeholder="antoniopatarodev@gmail.com" name="email" type="email"></Input>
          <Input number="3" label="Your Social Security Number" placeholder="xxx-xx-xxx" name="ssn" type="password"></Input>
          <Input number="4" label="Your Birthday" placeholder="xxx-xx-xxx" name="birthday" type="date"></Input>
        </span>

        <div class="flex justify-center gap-6">
          <div class="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
              <div class="m-4">
                  <label class="inline-block mb-2 text-gray-500">Upload Image(jpg,png,svg,jpeg)</label>
                  <div class="flex items-center justify-center w-full">
                      <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                          <div class="flex flex-col items-center justify-center pt-7">
                              <svg xmlns="http://www.w3.org/2000/svg"
                                  class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                  fill="currentColor">
                                  <path fill-rule="evenodd"
                                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                      clip-rule="evenodd" />
                              </svg>
                              <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                  Select a photo</p>
                          </div>
                          <input type="file" class="opacity-0" />
                      </label>
                  </div>
              </div>
          </div>
          <div class="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
              <div class="m-4">
                  <label class="inline-block mb-2 text-gray-500">Upload Image(jpg,png,svg,jpeg)</label>
                  <div class="flex items-center justify-center w-full">
                      <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                          <div class="flex flex-col items-center justify-center pt-7">
                              <svg xmlns="http://www.w3.org/2000/svg"
                                  class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                  fill="currentColor">
                                  <path fill-rule="evenodd"
                                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                      clip-rule="evenodd" />
                              </svg>
                              <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                  Select a photo</p>
                          </div>
                          <input type="file" class="opacity-0" />
                      </label>
                  </div>
              </div>

          </div>
        </div>
        <span class="flex w-full justify-end gap-4">
          <button disabled class="whitespace-nowrap inline-flex items-center justify-center p-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-600">
            Submit
          </button>
        </span>
      </ul>
      </form>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import AdminHeader from '../components/AdminHeader.vue';
import axios from "axios";
import {ref} from "vue";
import { useSidebar } from "../hooks/useSidebar";
import Input from "../components/Input.vue";
import Range from "../components/Range.vue";
import Textarea from "../components/Textarea.vue";
import Checkbox from "../components/Checkbox.vue";
import Radio from "../components/Radio.vue";

const { isOpen } = useSidebar();

export default {
  data() {
    return {
      scrollPosition: null,
      hardware_key: null,
      year: null,
      month: null,
      day: null,
      user_email: null,
      license: null,
      order_count: 0,
      activeClass: ref("bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"),
      inactiveClass: ref("border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100")
    }
  },
  components: {
    Sidebar,
    AdminHeader,
    Input,
    Range,
    Textarea,
    Checkbox,
    Radio
  },
  computed: {},
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    },

    async generate() {
      if (this.hardware_key === null || this.year === null || this.month === null || this.day === null)
        return;

      axios.post("https://csort.herokuapp.com/accounts/generate",
          {
            "hardware_key": this.hardware_key,
            "year": parseInt(this.year),
            "month": parseInt(this.month),
            "day": parseInt(this.day)
          }
      )
          .then((res) => {
            this.license = res.data['license']
          })
          .catch((error) => {
            this.$notify({group: "error", title: "User Enrollment Result", text: "The user login failed"}, 2000)
          })
          .finally(() => {

          })
    },

    async get_order_count() {
      axios.get("https://csort.herokuapp.com/accounts/count")
          .then((res) => {
            this.order_count = res.data['licenseCount']
          })
          .catch((error) => {
            console.log("failed to get order count.")
          })
          .finally(() => {

          })

    }
  },

  mounted() {
    this.get_order_count();
    window.addEventListener('scroll', this.updateScroll);
  },

}
</script>

<style scoped>
   .change_color {
       background-color:red
   }
</style>