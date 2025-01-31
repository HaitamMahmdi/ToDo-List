<script setup>
import { reactive, ref } from "vue";
import { app ,db} from "../firebase";
import { getAuth } from "firebase/auth";
import {
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
const auth = getAuth(app);
const user = auth.currentUser;
const isChecked = ref(false);
const task = reactive({
  taskTitle: ``,
  taskDescription: ``,
  time: ``,
});

async function addNewTask() {
  const docRef = doc(db, `Users`, `User-${user.uid}`);
  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(docRef, {
        Tasks: arrayUnion(task),
      });
      console.log("Task added successfully!");
    } else {
      console.log("Document does not exist. Consider creating it.");
    }
  } catch (error) {
    console.error("Error fetching or updating document:", error);
  }
}
</script>
<template>
  <form @submit.prevent class="flex flex-col">
    <label
      for="taskTitle"
      class="font-bold mb-1 text-xl text-[var(--color-text)]"
      >Task Title</label
    >
    <input
      v-model="task.taskTitle"
      class="rounded-lg w-[25rem] p-3"
      id="taskTitle"
      type="text"
    />
    <label
      for="description"
      class="font-bold text-xl mt-4 mb-1 text-[var(--color-text)]"
      >Task decription</label
    >
    <textarea
      v-model="task.taskDescription"
      class="rounded-lg p-3"
      name=""
      id="description"
    ></textarea>
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
      v-model="task.time"
      type="datetime-local"
      id="meeting-time"
      name="meeting-time"
      value="2024-06-07T00:00"
      min="2024-06-07T00:00"
      max="2025-06-14T00:00"
    />
    <input
      @click="addNewTask"
      type="submit"
      value="Add New Task"
      class="bg-[var(--color-accent)] text-white font-bold text-2xl w-[80%] p-4 mx-auto mt-3 rounded-lg"
    />
  </form>
</template>
