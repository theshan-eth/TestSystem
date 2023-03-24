<!-- src/views/Login.vue -->
<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="loginUser">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
    <p>
      <router-link to="/register">Register</router-link>
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  name: "UserLogin",
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const router = useRouter();

    const loginUser = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        error.value = "";
        router.push("/dashboard");
      } catch (err) {
        error.value = err.message;
      }
    };

    return { email, password, loginUser, error };
  }
};
</script>
