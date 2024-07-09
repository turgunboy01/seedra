// // src/redux/test.js
// import { createSlice } from "@reduxjs/toolkit";

// // Local storage uchun yordamchi funksiyalar
// const storeInLocalStorage = (data) => {
//   localStorage.setItem("todos", JSON.stringify(data.todos));
//   localStorage.setItem("counts", JSON.stringify(data.counts));
// };

// const todosSlice = createSlice({
//   name: "todos",
//   initialState: {
//     todos: JSON.parse(localStorage.getItem("todos")) || [],
//     counts: JSON.parse(localStorage.getItem("counts")) || [], // Sanash arrayi
//     editingIndex: null,
//     editingTodo: "",
//   },
//   reducers: {
//     addTodo: (state, action) => {
//       state.todos.push(action.payload.todo);
//       state.counts.push(1); // Yangi todo uchun boshlang'ich sanash
//       storeInLocalStorage(state);
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((_, index) => index !== action.payload);
//       state.counts = state.counts.filter(
//         (_, index) => index !== action.payload
//       );
//       storeInLocalStorage(state);
//     },
//     startEditing: (state, action) => {
//       state.editingIndex = action.payload;
//       state.editingTodo = state.todos[action.payload];
//     },
//     cancelEditing: (state) => {
//       state.editingIndex = null;
//       state.editingTodo = "";
//     },
//     updateTodo: (state) => {
//       if (state.editingTodo.trim()) {
//         state.todos[state.editingIndex] = state.editingTodo.trim();
//         storeInLocalStorage(state);
//         state.editingIndex = null;
//         state.editingTodo = "";
//       }
//     },
//     setEditingTodo: (state, action) => {
//       state.editingTodo = action.payload;
//     },
//     incrementCount: (state, action) => {
//       state.counts[action.payload]++;
//       storeInLocalStorage(state);
//     },
//     decrementCount: (state, action) => {
//       if (state.counts[action.payload] > 0) {
//         state.counts[action.payload]--;
//         if (state.counts[action.payload] === 0) {
//           // Agar sanash 0 ga teng bo'lsa, todo ni olib tashlaymiz
//           state.todos.splice(action.payload, 1);
//           state.counts.splice(action.payload, 1);
//         }
//         storeInLocalStorage(state);
//       }
//     },
//   },
// });

// // Ekport qilinadigan actions va selektorlarga e'tibor bering
// export const {
//   addTodo,
//   removeTodo,
//   startEditing,
//   cancelEditing,
//   updateTodo,
//   setEditingTodo,
//   incrementCount,
//   decrementCount,
// } = todosSlice.actions;

// export const selectTodos = (state) => state.todos.todos;
// export const selectCounts = (state) => state.todos.counts;
// export const selectEditingIndex = (state) => state.todos.editingIndex;
// export const selectEditingTodo = (state) => state.todos.editingTodo;

// export default todosSlice.reducer;


