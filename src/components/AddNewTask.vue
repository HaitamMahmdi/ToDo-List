<script setup>
import { ref } from "vue";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";
import { getDoc, getFirestore, doc } from "firebase/firestore";
const auth = getAuth(app);
const user = auth.currentUser;
const isChecked = ref(false);
const db = getFirestore(app);

async function addNewTask() {
  const docRef = doc(db, `Users`, `User-${user.uid}`);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // المستند موجود: طباعة البيانات
      console.log(docSnap.data().Tasks);
    } else {
      // إذا لم يكن المستند موجودًا
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }
}
addNewTask();
</script>
<template>
  <form @submit.prevent class="flex flex-col">
    <label
      for="taskTitle"
      class="font-bold mb-1 text-xl text-[var(--color-text)]"
      >Task Title</label
    >
    <input class="rounded-lg w-[25rem] p-3" id="taskTitle" type="text" />
    <label
      for="decription"
      class="font-bold text-xl mt-4 mb-1 text-[var(--color-text)]"
      >Task decription</label
    >
    <textarea class="rounded-lg p-3" name="" id="decription"></textarea>
    <div class="mt-4">
      <label for="TimeLimit" class="font-bold mr-3 text-[var(--color-text)]"
        >Add Time Limit ?</label
      >
      <input
        v-model="isChecked"
        class="rounded-lg p-3"
        type="checkbox"
        name="addTimeLimit"
        id="TimeLimit"
      />
    </div>
    <input
      class="p-2 mt-2"
      v-if="isChecked"
      type="datetime-local"
      id="meeting-time"
      name="meeting-time"
      value="2024-06-07T00:00"
      min="2024-06-07T00:00"
      max="2025-06-14T00:00"
    />
  </form>
</template>
