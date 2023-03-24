<!-- src/views/Register.vue -->
<template>
  <div>
    <h1>Registration</h1>
    <form @submit.prevent="registerUser">
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="firstName" required />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="lastName" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <p v-if="error">{{ error }}</p>
    <p v-if="success">{{ success }}</p>
    <p>
      <router-link to="/">Back to Welcome</router-link>
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  name: "RegisterUser",
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const success = ref("");
    const firstName = ref("");
    const lastName = ref("");
    
    const router = useRouter(); // Call useRouter()

    const registerUser = async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: `${firstName.value} ${lastName.value}`
        });
        success.value = "Registration successful!";
        error.value = "";
        router.push("/dashboard");
      } catch (err) {
        error.value = err.message;
        success.value = "";
      }
    };

    return { firstName, lastName, email, password, registerUser, error, success };
  }
};
</script>
