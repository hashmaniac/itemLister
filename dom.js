var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);

//add item function
function addItem(e) {
  e.preventDefault();

  //create li element
  var li = document.createElement('li');
  li.className = 'list-group-item';

  //add text node
  var newItem = document.getElementById('newItem').value;
  var newText = document.createTextNode(newItem);

  //append text node
  li.appendChild(newText);

  //createElement delete button
  var delBtn = document.createElement('button');
  delBtn.className = 'btn btn-danger btn-sm float-right delete';
  //append text node to button
  delBtn.appendChild(document.createTextNode('X'));

  //append button to li
  li.appendChild(delBtn);

  //append li to item List
  itemList.appendChild(li);
}

//remove Item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter Items
function filterItems(e){
  //convert text to lower case
  var text = e.target.value.toLowerCase();
  //get List
  var items = itemList.getElementsByTagName('li');
  //conert to array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }else{
      item.style.display = 'none';
    }
  })

}
