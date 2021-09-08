function add(variable) {
	var element;

	console.log(variable.children[0]);
	if (variable.classList.contains('unused')) { // switching to used
		variable.classList.remove('unused');
		variable.classList.add('used');
		variable.children[1].innerText = 'Remove';

		variable_input = variable.children[0];
		variable_input.setAttribute('name', variable_input.value);

		element = variable.cloneNode(true);
		variable.remove();
		document.getElementById('used-variables-list').appendChild(element);
	} else if (variable.classList.contains('used')) { // switching to unused
		variable.classList.remove('used');
		variable.classList.add('unused');
		variable.children[1].innerText = 'Add'

		element = variable.cloneNode(true);

		variable.remove();
		document.getElementById('unused-variables-list').appendChild(element);
	}

	console.log('done');
}
