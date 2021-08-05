var groceryForm = document.querySelector(".form");
var alert = document.querySelector(".alert");
var submitButton = document.querySelector(".btn-form");
var inputValue = document.getElementById("grocery");
var listOfItem = document.querySelector(".itemList");
var clear = document.querySelector(".clear");
var bringToNewDiv = document.querySelector(".bringToHere");
var container = document.querySelector(".btn-container");
// const list = document.querySelector(".list-items");

// edit option
let editElement;
let editFlag = false;
let editID = "";

groceryForm.addEventListener("submit", function(e) {
  // alert("are you ok");
  e.preventDefault();
  console.log(inputValue.value);
  var addedValueToTheForm = inputValue.value;
  console.log(addedValueToTheForm);
  // listOfItem.innerText = addedValueToTheForm;

  // we need id for each item
  const id = new Date().getTime().toString();
  console.log(id);

  //  you can say like this too >> if(addedValueToTheForm && !editFlag){
  if (addedValueToTheForm !== "" && editFlag === false) {
    //                       empty
    console.log("add itme to the list")
    const element = document.createElement('div');
    element.classList.add('list-items');
    // add id
    const attr = document.createAttribute('date-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
      <div class="item">
      <h4 class="itemList">${addedValueToTheForm}</h4>
      </div>
      <div class="icons">
      <i class="fas fa-trash-alt"></i>
      <i class="far fa-edit"></i>
    </div>`;
    // only now we have access to edite and delete individually
    const deleteBtn = element.querySelector(".fa-trash-alt");
    const editeBtn = element.querySelector(".fa-edit")
    deleteBtn.addEventListener("click", deleteItem);
    editeBtn.addEventListener("click", editItem);



    bringToNewDiv.appendChild(element);
    alert.textContent = "An item has been added";
    alert.classList.add("Notdanger");
    container.classList.remove("btn-container")
    setTimeout(function() {
      alert.textContent = "";
      alert.classList.remove("Notdanger");
    }, 1000)

    // set back to default
    setBackToDefault();

    // add to local Storage
    addToLocalStorage(id, addedValueToTheForm);

  } else if (addedValueToTheForm !== "" && editFlag === true) {
    console.log("editing")
  } else {
    console.log("empty value");
    alert.textContent = "Please enter a value";
    alert.classList.add("danger-alert");
    // remove alert
    setTimeout(function() {
      alert.textContent = "";
      alert.classList.remove("danger-alert");
    }, 1000)
  }

})

clear.addEventListener('click', clearItems);

function clearItems() {
  // alert("gg")
  const items = document.querySelectorAll('.list-items');
  if (items.length > 0) {
    items.forEach(function(item) {
      item.remove();
    });
  }
  container.classList.remove("show-container");
  setBackToDefault();
}

// delete function
function deleteItem(e){
  console.log("item deleted");
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  console.log( "see kaka what element is below")
  bringToNewDiv.removeChild(element);
  console.log(element);
  console.log(id);
  if(bringToNewDiv.children.length === 0){
    container.classList.add("btn-container")
  }
setBackToDefault();

}

// // edite function
function editItem(){
  console.log("edite item")
}

// set back to default, after we add an item input field is wipedout
function setBackToDefault() {
  console.log("set back to default");
  inputValue.value = "";
  editFlag = false;
  editID = "";
  submitButton.textContent = "submit";
}

//  for Local Storage
function addToLocalStorage(id, value) {
  console.log("added to local storage")
}

function removeFromLocalStorage(id){

}
