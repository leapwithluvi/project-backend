const express = require("express"); // Import express framework
const app = express(); // Membuat instance aplikasi Express
const port = 3000; // Port yang akan digunakan untuk server
const path = require("path"); // Import path module untuk mengelola path file

app.use(express.json()); // Middleware untuk parsing JSON request body
app.use(express.static(path.join(__dirname, "public"))); // Middleware untuk melayani file statis dari folder 'public'

const todoRoutes = require("./routes/todosRoute"); // Import routes untuk todo
app.use("/todos", todoRoutes); // Menggunakan routes untuk todo pada path '/todos'

// listen
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
