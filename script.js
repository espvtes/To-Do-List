const add_button = document.querySelector('.add_button');
var input = document.querySelector('.input');
const container = document.querySelector('.container');


class item{
    constructor(itemName){
        //create a div
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disable = true;
        input.classList.add('item_input');
        input.type = 'text';
        // type

        let item_box = document.createElement('div');
        item_box.classList.add('item');


        let edit_button = document.createElement('button');
        edit_button.classList.add('edit_button')
        edit_button.innerHTML = 'EDIT';

        let remove_button = document.createElement('button');
        remove_button.classList.add('remove_button')
        remove_button.innerHTML = 'REMOVE';

        container.appendChild(item_box);

        item_box.appendChild(input);
        item_box.appendChild(edit_button);
        item_box.appendChild(remove_button);


        edit_button.addEventListener('click', () => this.edit(input));
        remove_button.addEventListener('click', () => this.remove(item_box));
    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
}

function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

add_button.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which = 13){
        check();
    }
})