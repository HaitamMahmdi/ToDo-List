<script setup>
import { app } from "../firebase";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
const db = getFirestore(app);
const auth = getAuth(app);
const email = ref(null);
const password = ref(null);
const signInUser = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value).then(
    (response) => {
      const userId = `User-${response.user.uid}`;
      const userRef = doc(db, "Users", userId);
      setDoc(userRef, {
        Tasks: [],
      });
    }
  );
};
</script>
<template>
  <div
    class="bg-[#00000075] p-4 absolute w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <form @submit.prevent class="flex flex-col">
      <label for="email" class="font-bold mb-2 text-xl text-[var(--color-text)]"
        >Email</label
      >
      <input
        v-model="email"
        class="rounded-lg w-[25rem] p-3"
        type="email"
        name=""
        id="email"
      />
      <label
        for="password"
        class="font-bold mb-2 text-xl text-[var(--color-text)]"
        >Password</label
      >
      <input
        v-model="password"
        class="rounded-lg w-[25rem] p-3"
        type="password"
        name=""
        id="password"
      />
      <input
        @click="signInUser"
        class="bg-[var(--color-accent)] text-white font-bold w-[80%] mx-auto mt-5 p-4 text-2xl rounded-lg"
        type="submit"
        value="Sign / LogIn"
      />
    </form>
  </div>
</template>
