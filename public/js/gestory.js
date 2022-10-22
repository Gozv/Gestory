window.addEventListener('load', () => {
	const form = document.querySelector("#nueva-tarea-form");
	const input = document.querySelector("#nueva-tarea-input");
	const list_el = document.querySelector("#tareas");
	const contenido = document.querySelector("#contenido");
	
	Sortable.create(list_el, {}); // Drag & Drop
	
	form.addEventListener('submit', (e) => {
		e.preventDefault();

    const task = input.value;    

    const task_el = document.createElement('div');
    task_el.classList.add('tarea');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('card-estilo');

    task_el.appendChild(task_content_el);

    
	const task_input_el = document.createElement('input');
	task_input_el.classList.add('text');
	task_input_el.type = 'text';
	task_input_el.value = task;
	task_input_el.setAttribute('readonly', 'readonly');

	task_content_el.appendChild(task_input_el);

	const task_actions_el = document.createElement('div');
	task_actions_el.classList.add('actions');
	
	const task_edit_el = document.createElement('button');
	task_edit_el.classList.add('edit');
	task_edit_el.innerText = 'Editar';

	const task_delete_el = document.createElement('button');
	task_delete_el.classList.add('borrar');
	task_delete_el.innerText = 'Borrar';

	task_actions_el.appendChild(task_edit_el);
	task_actions_el.appendChild(task_delete_el);
	
	task_el.appendChild(task_actions_el);
	
    list_el.appendChild(task_el);

	input.value = '';

	task_edit_el.addEventListener('click', (e) => {
		if (task_edit_el.innerText.toLowerCase() == "editar") {
			task_edit_el.innerText = "Guardar";
			task_input_el.removeAttribute("readonly");
			task_input_el.focus();
		} else {
			task_edit_el.innerText = "Editar";
			task_input_el.setAttribute("readonly", "readonly");
		}
	});

	task_delete_el.addEventListener('click', (e) => {
		list_el.removeChild(task_el);
	});

    });
});

