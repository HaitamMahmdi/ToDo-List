<script setup>
import { ref } from "vue";
import { app, db } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onSnapshot, doc } from "firebase/firestore";
import AddNewTask from "./components/AddNewTask.vue";
import TaskCom from "./components/TaskCom.vue";
import LogIn from "./components/LogIn.vue";
const auth = getAuth(app);
const isDark = ref(false);
const showAddNewTask = ref(false);
const currentUser = ref(null);
const tasks = ref(null);
const pageTheme = () => {
  const courantTheme = document.querySelector(`html`);
  if (courantTheme.getAttribute(`data-theme`) === `light`) {
    courantTheme.setAttribute(`data-theme`, `dark`);
  } else {
    courantTheme.setAttribute(`data-theme`, `light`);
  }
  isDark.value = !isDark.value;
};
const showMoreSettings = ref(false);
onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser.value = user.uid;
    console.log("User is logged in:", user);
    const docRef = doc(db, `Users`, `User-${currentUser.value}`);
    console.log(currentUser.value);
    onSnapshot(docRef, (docSnap) => {
      tasks.value = docSnap.data();
    });
  } else {
    currentUser.value = null;
    console.log("User is not logged in");
  }
});
</script>

<template>
  <LogIn v-if="!currentUser"></LogIn>
  <div v-else>
    <header>
      <div class="container">
        <h1
          class="text-[clamp(1.5rem,10vh,3rem)] font-bold text-[var(--color-text)] bg-[var(--color-secondary-background)] text-center"
        >
          ToDo List
        </h1>
      </div>
    </header>
    <main>
      <div class="container h-[100vh] relative">
        <div class="absolute top-[30%] flex flex-col h-[10.8rem] justify-end">
          <button
            aria-label="add a Task"
            v-show="showMoreSettings"
            @click="showAddNewTask = true"
            class="bg-[#ddd] p-3 mb-3 rounded-full"
          >
            <font-awesome-icon :icon="['fas', 'plus']" />
          </button>
          <button
            v-show="showMoreSettings"
            @click="pageTheme"
            class="bg-[#ddd] p-3 rounded-full mb-3"
          >
            <font-awesome-icon v-if="!isDark" :icon="['fa', 'sun']" />
            <font-awesome-icon v-else :icon="['fa', 'moon']" />
          </button>
          <button
            @click="showMoreSettings = !showMoreSettings"
            class="bg-[#ddd] p-3 rounded-full"
          >
            <font-awesome-icon class="text-[1.5rem]" icon="gear" />
          </button>
        </div>
        <div v-if="tasks" class="mt-[15rem]">
          <TaskCom
            v-for="task in tasks.Tasks"
            :taskName="task.taskTitle"
            :time="task.time"
          ></TaskCom>
        </div>
      </div>
      <div
        v-if="showAddNewTask"
        @click.self="showAddNewTask = !showAddNewTask"
        class="bg-[#00000075] p-4 absolute w-full h-full top-0 left-0 flex items-center justify-center"
      >
        <AddNewTask></AddNewTask>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<style scoped></style>
