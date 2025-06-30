const express = require("express"); // Mengimpor framework express
const router = express.Router(); // Membuat router baru dari express
const todosController = require("../controllers/todosController"); // Mengimpor controller untuk mengelola logika bisnis terkait todos

router.get("/", todosController.getTodos); // Mendapatkan daftar todos
router.post("/", todosController.createTodo); // Membuat todo baru
router.put("/:id", todosController.updateTodo); // Memperbarui todo berdasarkan ID
router.delete("/:id", todosController.deleteTodo); // Menghapus todo berdasarkan ID

module.exports = router; // Mengekspor router untuk digunakan di file lain
