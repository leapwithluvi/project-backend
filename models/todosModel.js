const fs = require("fs"); // Mengimpor modul fs (File System) dari Node.js untuk membaca dan menulis file.
const path = require("path"); // Mengimpor modul path dari Node.js untuk mengelola path file secara cross-platform.
const { v4: uuidv4 } = require("uuid"); // Mengimpor fungsi v4 dari paket uuid untuk menghasilkan ID unik versi 4.

// Menentukan lokasi file JSON yang akan digunakan sebagai database lokal.
const filePath = path.join(__dirname, "../data/todosData.json"); 

// Baca file json
function readTodosFromFile() {

  // Jika file belum ada (fs.existsSync), maka fungsi akan mengembalikan array kosong.
  if (!fs.existsSync(filePath)) return [];

  //  Membaca isi file secara sinkron dan menyimpannya ke variabel data.
  const data = fs.readFileSync(filePath, "utf-8");

  // Mencoba mengubah (parse) string JSON menjadi array JavaScript.
  try {
    return JSON.parse(data);

  // Jika terjadi kesalahan saat parsing, akan menangkap error dan mengembalikan array kosong.
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    return [];
  }
}

// Tulis file json
// Mengubah array todos menjadi JSON string (dengan indentasi 2 spasi) dan menyimpannya ke file JSON.
function writeTodosToFile(todos) {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf-8");
}

// dapatkan todos dari file
// Menyimpan hasil pembacaan awal file ke variabel todos.
const todos = readTodosFromFile();

// CREATE
// Membuat objek To-Do baru dengan ID unik, isi task dari parameter, dan status completed default false.
function addTodo(task) {
  const newTodo = {
    id: uuidv4(),
    task: task,
    completed: false,
  };

  // Menambahkan ke array todos, menyimpan ke file, dan mengembalikan objek baru tersebut.
  todos.push(newTodo);
  writeTodosToFile(todos);
  return newTodo;
}

// UPDATE
// Mencari todo berdasarkan ID. Jika tidak ditemukan, kembalikan null.
function updateTodoById(id, data) {
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) return null;

  // Jika data.task atau data.completed diberikan, update nilainya.
  if (data.task !== undefined) todo.task = data.task;
  if (data.completed !== undefined) todo.completed = data.completed;

  // Simpan ke file dan kembalikan todo yang sudah diubah.
  writeTodosToFile(todos);
  return todo;
}

// DELETE
// Baca ulang file agar selalu pakai data terbaru (menghindari bug).
function deleteTodoById(id) {
  const todos = readTodosFromFile(); // baca ulang dari file

  // Jika ditemukan, hapus dari array dan simpan kembali file JSON.
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    writeTodosToFile(todos);
  }
}

// Mengekspor fungsi dan data todos agar bisa digunakan di file lain (require()).
module.exports = { addTodo, updateTodoById, deleteTodoById, todos };

