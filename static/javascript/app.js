function add(variable) {
	var element;

	console.log(variable.children[0]);
	if (variable.classList.contains('unused')) {
		variable.classList.remove('unused');
		variable.classList.add('used');
		variable.children[0].innerText = 'Remove';

		element = variable.cloneNode(true);
		variable.remove();
		document.getElementById('used-variables-list').appendChild(element);
	} else if (variable.classList.contains('used')) {
		variable.classList.remove('used');
		variable.classList.add('unused');
		variable.children[0].innerText = 'Add'

		element = variable.cloneNode(true);

		variable.remove();
		document.getElementById('unused-variables-list').appendChild(element);
	}

	console.log('done');
}
