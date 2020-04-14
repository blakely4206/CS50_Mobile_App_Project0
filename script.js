const classNames = {
	TODO_ITEM: 'todo-container',
	TODO_CHECKBOX: 'todo-checkbox',
	TODO_TEXT: 'todo-text',
	TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list') //The <ul> 
const itemCountSpan = document.getElementById('item-count') //Item Count label
const uncheckedCountSpan = document.getElementById('unchecked-count') //Unchecked label

function newTodo() {
	let the_todo = prompt("Enter a new TODO");
	
	if(the_todo != ""){ //Verify not empty string
		let list_item = document.createElement("li");
		let item_label = document.createElement("label");
		let check_box = document.createElement("INPUT");
		let unchecked_count = parseInt(uncheckedCountSpan.innerHTML, 10);
		let delete_button = document.createElement("button");					
		
		item_label.innerHTML = the_todo;
		item_label.setAttribute("class", classNames["TODO_TEXT"]);
		
		check_box.setAttribute("type", "checkbox");
		check_box.setAttribute("class", classNames["TODO_CHECKBOX"]);		
		check_box.addEventListener("click", checkbox_onClick);
		
		delete_button.setAttribute("class", classNames["TODO_DELETE"]);
		delete_button.innerHTML = "Delete";
		delete_button.addEventListener("click", btn_onClick);
		
		list_item.setAttribute("class", classNames["TODO_ITEM"]);
		list_item.appendChild(check_box);
		list_item.appendChild(item_label);
		list_item.appendChild(delete_button);

		list.append(list_item);

		itemCountSpan.innerHTML = document.getElementsByClassName(classNames["TODO_ITEM"]).length;
		
		uncheckedCountSpan.innerHTML =  unchecked_count + 1;
	}
}

function btn_onClick(){
	var parent_li = this.parentElement; // Get parent <li>
	
	parent_li.remove(); // Delete parent
	
	itemCountSpan.innerHTML = document.getElementsByClassName(classNames["TODO_ITEM"]).length;
	uncheckedCountSpan.innerHTML = count_unchecked();
}

function checkbox_onClick(){
	if(this.checked){
		this.removeAttribute("checked");
	}
	else{
		this.setAttribute("checked", "checked");
	}  	
	
	uncheckedCountSpan.innerHTML = count_unchecked();
}

function count_unchecked(){
	let list = document.getElementsByClassName(classNames["TODO_CHECKBOX"]);
	let count = 0;
	
	for(let i = 0; i < list.length; i++){
		if(!list[i].checked){
			count += 1;
		}
	}
	
	return count;
}