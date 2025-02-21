<script setup>
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { app, db } from "../firebase";
import { getAuth } from "firebase/auth";
const props = defineProps({
  taskName: {
    required: true,
    type: String,
    default: `New Task`,
  },
  time: {
    type: String,
  },
  description: {
    type: String,
  },
});
const auth = getAuth(app);
const docRef = doc(db, "Users", `User-${auth.currentUser.uid}`);
async function RemoveTask() {
  const docSnap = await getDoc(docRef);
  const taskArr = docSnap.data().Tasks;
  taskArr.forEach((el, index) => {
    if (props.taskName === el.taskTitle) {
      taskArr.splice(index, 1);
      updateDoc(docRef, {
        Tasks: taskArr,
      });
      return console.log(`Task is removed `);
    }
  });
}
</script>
<template>
  <div
    :id="props.taskName"
    class="flex text-[var(--color-text)] justify-between items-center max-w-[45rem] mx-auto my-4 p-4 bg-[var(--color-secondary-background)]"
  >
    <h2>{{ props.taskName }}</h2>
    <p>{{ props.time }}</p>
    <div>
      <button
        @click.self="RemoveTask"
        class="p-2 text-white w-[2.5rem] h-[2.5rem] mr-2 bg-[var(--color-error)]"
      >
        <font-awesome-icon icon="xmark" />
      </button>
      <button
        @click.self="RemoveTask"
        class="p-2 text-white w-[2.5rem] h-[2.5rem] bg-[var(--color-success)]"
      >
        <font-awesome-icon icon="check" />
      </button>
    </div>
  </div>
</template>
