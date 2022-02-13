//memanggil element dengan id
const todo = document.getElementById("todo")
const button = document.getElementById("button-todo")
const hapus = document.getElementById("hapus-todo")
	
// variabel todo
let todos

// Validasi todo list pada localStorage
if (localStorage.getItem("todo", todos) == null) {
	// kosongkan array todo jika null di localStorage
	todos = []
}else{
	// masukkan list dari localStorage ke variabel todo jika tidak null
	todos = localStorage.getItem("todo", todos).split(",") 
	// catatan : split digunakan untuk mengubah dan memisahkan string menjadi array
}

//Fungsi Render todo list
function renderTodo(){
	// memanggil list pada array todo dengan perulangan
	todos.forEach(function(item){

		// membuat element baru tag li
		const list = document.createElement("li")

		// menyisipkan teks dari perulangan
		list.textContent = item

		// menyimpan element baru pada list todo
		document.getElementById("list-todo").append(list)
	})	
}

// memanggil fungsi Render todo list
renderTodo()

// button tambah list todo ke array dan localStorage
button.addEventListener("click", function() {
	// validasi input
	if (todo.value == "") {
		// informasi
		alert("Masukkan todo")
	}else{
		// tambah list ke array
		todos.push(String(todo.value))

		// simpan ke localStorage dengan nama todo
		localStorage.setItem("todo", todos)

		// refresh list todo
		document.getElementById("list-todo").innerHTML = `<ul id="list-todo"></ul>`

		// memanggil fungsi Render todo list
		renderTodo()	

		// refresh value
		document.getElementById("todo").value = "";
	}
		
})

// button kosongkan list todo dari array dan localStorage
hapus.addEventListener("click", function() {
	// kosongkan array
	todos = []

	// hapus localStorage todo dengan nama todo
	localStorage.removeItem('todo')

	// refresh list todo
	document.getElementById("list-todo").innerHTML = `<ul id="list-todo"></ul>`
})
		