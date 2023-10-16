const readline = require("readline");
const leerDatos = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const taskList = [];

// Menu
function menu() {
  return `
    Selecciona la opción que deseas realizar:
    1. Crear tarea
    2. Borrar tarea
    3. Completar tarea
    4. Listar tarea(s)
    5. Salir
    `;
}

//1. AÑADIR TAREA
const addTask = (task) => {
  taskList.push(task);
  console.log(`| La tarea: '${task}', ha sido añadida con exito. |`);
  console.log("");
};

//2. ELIMINAR TAREA
const deleteTask = (index) => {
  console.log("");
  if (index >= 0 && index < taskList.length) {
    const deletedTask = taskList.splice(index, 1);
    console.log(`| Tarea eliminada. ${deletedTask}: |`);
  } else {
    console.log(`< La tarea no existe. >`);
  }
};

//3. COMPLETAR TAREA
function completeTask(index) {
  console.log("");
  if (index >= 0 && index < taskList.length) {
    taskList[index] = taskList[index] + " | Tarea Completada ✓ | ";
    console.log(" | Tarea Completada | ");
  } else {
    console.log(`< Acción invalida. >`);
    return false;
  }
}
//4. LISTAR TAREAS
function showTasks() {
  console.log("");
  console.log("| Lista de Tareas |");
  console.log("");
  for (let i = 0; i < taskList.length; i++) {
    console.log(`${i + 1}. ${taskList[i]}`);
  }
}

//5. MOSTRAR MENU POR CONSOLA
function showMenu() {
  console.log(menu());
  leerDatos.question("Introduzca la opción deseada: ", (opcion) => {
    console.log("");
    switch (opcion) {
      case "1":
        leerDatos.question("-Escribe una tarea:  ", (task) => {
          console.log("");
          addTask(task);
          showMenu();
        });
        break;
      case "2":
        leerDatos.question(
          "Ingresa el Id de la tarea que deseas eliminar:  ",
          (task) => {
            console.log("");
            deleteTask(parseInt(task, 10) - 1);
            showMenu();
          }
        );
        break;
      case "3":
        leerDatos.question(
          "Ingresa el Id de la tarea que deseas completar:  ",
          (task) => {
            console.log("");
            completeTask(parseInt(task, 10) - 1);
            showMenu();
          }
        );
        break;
      case "4":
        console.log("");
        showTasks();
        showMenu();
        break;
      case "5":
        console.log("Saliendo del programa.");
        leerDatos.close;
        break;
      default:
        console.log(
          "Opcion no valida. Por favor seleccione una opcion valida."
        );
        showMenu();
        break;
    }
  });
}

showMenu();
