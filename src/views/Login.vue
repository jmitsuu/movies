<template>
  <section class="flex-1 h-screen bg-gradient-to-bl from-black  bg-bg-FromWhiteMode">
       <div class="text-center text-gray-200 p-2">
      <p class="animate-pulse text-[1.8rem] font-bold">Em Desenvolvimento</p>
      <p>
        Para acessar basta criar um usuario fictício. Os dados serão armazenados
        de forma dinamica no localstorage do navegador
      </p>
    </div>
    <main
      class="flex justify-center items-center"
    >
      <form @submit.prevent="Login" class=" justify-center  border-[0.1rem] mt-8 p-16 bg-opacity-30 w-96 bg-yellow-900 rounded-md">
        <h1 class="text-white text-center font-serif text-[3.0rem] mb-8">
          Login
        </h1>
        <div class="flex flex-col">
          <span class="relative">
            <input
              type="email"
              placeholder="Seu e-mail"
              @click="iconShow"
              class="m-2 pl-7 p-8 py-3 text-left w-full  text-[0.9rem] outline-none rounded-md"
              v-model="userName"
            />
            <i :class="iconEmail"></i>
          </span>

          <span class="relative">
            <input
              type="password"
              placeholder="Sua senha"
              @click="iconShow"
              class="m-2 pl-7 p-8 py-3 text-left w-full  text-[0.9rem] outline-none rounded-md"
              v-model="passWord"
     
            />
            <i :class="incoPass"></i>
          </span>
        </div>

        <button
          type="submit"
          class="px-10 ml-2 py-2 w-full mt-10 bg-blue-200 uppercase hover:bg-blue-300 text-gray-900 text-center rounded-md text-[1.3rem]"
        >
          Login
    
        </button>

        <router-link to="/Register">
          <p
            class="text-center text-gray-300 text-sm hover:text-gray-50 cursor-pointer border-gray-100 mt-4"
          >
            Criar Conta
          </p>
        </router-link>
 
      </form>
    </main>
    <div
      class="p-2 bg-green-500 fixed m-auto left-28 top-10 rounded-md text-sm text-center font-bold"
      v-if="store.isAuthenticated"
    >
      {{ store.msgLogin }}
    
    </div>
             <p class="text-red-400 text-[0.8rem] text-center">{{ store.msgError }}</p>
 
  </section>
</template>

<script setup>
import Menu from "../components/Menu.vue";
import { ref, onMounted } from "vue";
import { useAuth } from "../store/auth.js";
import { usePopular } from "../store/mostPopular";
const store = useAuth();
const storePop = usePopular()
const userName = ref();
const passWord = ref();
const iconEmail = ref("top-0");
const incoPass = ref("top-0");
function iconShow(e) {
  incoPass.value = "pi pi-key absolute left-3 top-5 transition-all";
  iconEmail.value = "pi pi-user absolute left-3 top-5 transition-all";
}
function Login() {
  store.singIn(userName.value, passWord.value);
}
onMounted(()=>{

})
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.teste2 {
  display: none;
}
</style>
