CheckMate-app 📝
CheckMate-app es una aplicación web de gestión de tareas (To-Do) desarrollada con React, Redux Toolkit y un backend Node.js/Express. Permite a los usuarios registrarse, iniciar sesión, crear, actualizar y visualizar tareas personales de manera sencilla y moderna.

🚀 Características
Registro y login de usuarios con autenticación JWT.
Creación, edición y visualización de tareas personales.
Actualización del estado de cada tarea: pendiente, en progreso o completada.
Interfaz moderna y responsiva.
Protección de rutas: solo usuarios autenticados pueden ver sus tareas.
Persistencia de sesión con localStorage.
Estilos personalizados con SCSS Modules.
🖥️ Tecnologías utilizadas
Frontend: React, Redux Toolkit, React Router, SCSS Modules
Backend: Node.js, Express, MongoDB (API: checkmate-back.onrender.com)
Autenticación: JWT

⚙️ Instalación y ejecución
Clona el repositorio:

git clone https://github.com/tuusuario/CheckMate-app.git
cd CheckMate-app

Instala las dependencias:

npm install

Configura el backend:

El proyecto está configurado para usar el backend desplegado en Render.
Si quieres usar tu propio backend, cambia la variable API_URL en los archivos de servicios (authService.js, taskService.js).

Inicia la aplicación:
npm run dev
o
npm start

Abre en tu navegador: 
http://localhost:5173

(o el puerto que indique la terminal)

📂 Estructura principal

src/
  components/
    Header/
    Login/
    Register/
    Task/
  features/
    auth/
      authSlice.js
      authService.js
    task/
      taskSlice.js
      taskService.js
  App.jsx
✨ Prueba la app en línea

[¡Haz clic aquí para ver CheckMate-app en Vercel!](check-mate-front.vercel.app)



📝 Notas
Puedes personalizar los colores y estilos en los archivos .module.scss.
Si tienes problemas con la autenticación, limpia el localStorage del navegador.
El backend debe estar corriendo y accesible para que la app funcione correctamente.


¡Gracias por usar CheckMate-app! ✅