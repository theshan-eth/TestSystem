<!-- src/views/Dashboard.vue -->
<template>
  <div>
    <h1>Dashboard</h1>
    <p v-if="displayName">Welcome: {{ displayName }}</p>
    <p v-else>Loading...</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  name: "DashboardView",
  setup() {
    const displayName = ref("");
    const router = useRouter();

    onMounted(() => {
      if (auth.currentUser) {
        displayName.value = auth.currentUser.displayName;
      } else {
        router.push("/login");
      }
    });

    const logout = async () => {
      await signOut(auth);
      router.push("/");
    };

    return { displayName, logout };
  }
};
</script>
