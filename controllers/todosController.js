// Mengimpor beberapa fungsi dan data dari file todosModel.js
const {
  todos,
  addTodo,
  updateTodoById,
  deleteTodoById,
} = require("../models/todosModel"); 

// GET /todos
// Mengirim seluruh daftar todo sebagai respons JSON ke klien.
exports.getTodos = (req, res) => {
  res.json(todos);
};

// POST /todos
//  Mengambil nilai task dari body request (input dari user).
exports.createTodo = (req, res) => {
  const { task } = req.body;

  // Validasi: jika task tidak diisi, balas error 400 (bad request).
  if (!task) {
    return res.status(400).json({ message: "Task is required" });
  }

  // Memanggil addTodo() untuk membuat todo baru, lalu mengembalikan hasilnya dengan status 201 (created).
  const newTodo = addTodo(task);
  res.status(201).json(newTodo);
};

// PUT /todos/:id
//  Mengambil ID dari req.params.id dan data baru dari req.body, lalu update todo tersebut.
exports.updateTodo = (req, res) => {
  const updated = updateTodoById(req.params.id, req.body);

  //  Jika ID tidak ditemukan, balas 404 (tidak ditemukan).
  if (!updated) {
    return res.status(404).json({ message: "Not Found" });
  }

  // Jika berhasil, balas status 200 dan kirim todo yang telah diperbarui.
  res.status(200).json(updated);
};

// DELETE /todos/:id
// Menghapus todo berdasarkan req.params.id.
exports.deleteTodo = (req, res) => {
  deleteTodoById(req.params.id);

  // Balas dengan pesan sukses dalam format JSON.
  res.json({ message: "Todo deleted successfully" });
};
