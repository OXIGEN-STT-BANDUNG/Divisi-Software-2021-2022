//memanggil element dengan id

// Input register
const username = document.getElementById("username")
const password = document.getElementById("password")
// Button
const login = document.getElementById("login")
const register = document.getElementById("register")
const home = document.getElementById("home")

let user 

// Validasi user pada localStorage
if (localStorage.getItem("user") == null) {
	// kosongkan array user jika null di localStorage
	user = []
}else{
	// masukkan dari localStorage ke variabel user jika tidak null
	user = localStorage.getItem("user").split(",") 
	// catatan : split digunakan untuk mengubah dan memisahkan string menjadi array
}

function refresh(){
	// refresh value
	document.getElementById("username").value = ""
	document.getElementById("password").value = ""
}

if (home == null) {
	if (login == null) {
		// Register Aksi
		register.onclick = function() {
			user = []

			if (username.value == "" || password.value == "") {
				// informasi
				alert("Masukkan username dan password")
			}else{
				// Push username dan password
				user.push(String(username.value)+","+String(password.value))

				// simpan ke localStorage dengan nama user
				localStorage.setItem("user", user)

				refresh()
			}
		}
	}else{
		// Login Aksi
		login.onclick = function() {
			if (username.value == "" || password.value == "") {
				// informasi
				alert("Masukkan username dan password")
			}else{
				if(user[0] == username.value){
					if(user[1] == password.value){
						alert("Login berhasil")
						refresh()
						location.assign('home.html')
					}else{
						alert("Password salah")
					}
				}else{
					alert("Username tidak terdaftar")
				}
			}
		}
	}
}else{
	home.textContent = `Selamat Datang, ${user[0]}`
}

