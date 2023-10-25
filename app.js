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
  return new Promise((resolve) => {
    taskList.push(task);
    console.log(`| La tarea: '${task}', ha sido añadida con éxito. |`);
    console.log("");
    resolve(task);
  });
};

const deleteTask = (index) => {
  return new Promise((resolve, reject) => {
    console.log("");
    if (index >= 0 && index < taskList.length) {
      const deletedTask = taskList.splice(index, 1);
      console.log(`| Tarea eliminada: ${deletedTask} |`);
      resolve(deletedTask);
    } else {
      console.log(`< La tarea no existe. >`);
      reject('Tarea no encontrada');
    }
  });
};


//3. COMPLETAR TAREA
const completeTask = (index) => {
  return new Promise((resolve, reject) => {
    console.log("");
    if (index >= 0 && index < taskList.length) {
      taskList[index] = taskList[index] + " | Tarea Completada ✓ |";
      console.log(" | Tarea Completada |");
      resolve(taskList[index]);
    } else {
      console.log(`< Acción inválida. >`);
      reject('Acción inválida');
    }
  });
};

//4. LISTAR TAREAS
function showTasks() {
  return new Promise((resolve, reject) => {
    console.log("");
    console.log("| Lista de Tareas |");
    console.log("");
    for (let i = 0; i < taskList.length; i++) {
      console.log(`${i + 1}. ${taskList[i]}`);
    }
    resolve(); // Resolvemos la promesa cuando se completan las tareas
  });
}

//5. MOSTRAR MENU POR CONSOLA
async function showMenu() {
  console.log(menu());
  const opcion = await new Promise((resolve) => {
    leerDatos.question("Introduzca la opción deseada: ", resolve);
  });

  console.log("");
  switch (opcion) {
    case "1":
      const task = await new Promise((resolve) => {
        leerDatos.question("-Escribe una tarea:  ", resolve);
      });
      console.log("");
      await addTask(task);
      showMenu();
      break;
    case "2":
      const taskIdToDelete = await new Promise((resolve) => {
        leerDatos.question(
          "Ingresa el Id de la tarea que deseas eliminar:  ",
          resolve
        );
      });
      console.log("");
      await deleteTask(parseInt(taskIdToDelete, 10) - 1);
      showMenu();
      break;
    case "3":
      const taskIdToComplete = await new Promise((resolve) => {
        leerDatos.question(
          "Ingresa el Id de la tarea que deseas completar:  ",
          resolve
        );
      });
      console.log("");
      await completeTask(parseInt(taskIdToComplete, 10) - 1);
      showMenu();
      break;
    case "4":
      console.log("");
      showTasks();
      showMenu();
      break;
    case "5":
      console.log("Saliendo del programa.");
      leerDatos.close();
      break;
    default:
      console.log(
        "Opción no válida. Por favor seleccione una opción válida."
      );
      showMenu();
      break;
  }
}

showMenu();