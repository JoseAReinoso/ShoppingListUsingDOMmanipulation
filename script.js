//1 Get browsers enter ID to run an event on it
var button = document.getElementById("enter");
//5. Get browsers userinput ID to run an event on it
var input = document.getElementById("userinput");
//7. Get browsers first UL to be used to append new li on it.
var ul = document.querySelector("ul");
//9.Get browsers li list that are under the ul list on top to run event
//. to then add button and crossout as well.
var liList = ul.children;


//2. help function to check what is the value.length of the users input to use it on the addListAfterClick
//and addListAfterKeypress functions
function inputLength() {
	return input.value.length;
}
//4. function that will create new shopping list
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	// NOTE Looped to enable new elements created in this function to have an evenlistener as well
	//as call toggleOnOff function
    for(let i=0; i < liList.length; i++){
		liList[i].addEventListener("click",toggleOnOff )
	}
}
//3. function that will check if there is something typed to call the createListElement() function if there is
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
//8. function that will check if somethign was typed in and if keycode is equal to 13 which is ecual to 
// the  keyword "enter" = https://keycode.info/ and if it is it calls createListElement()
function addListAfterKeypress(event) {
	//NOTE = event in this case comes from input.addEventListener from the bottom.
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
//15 function that checks if there what was click was the button or li,
//if it was the button it will wipeoue the ourHTML wich in this case is the parent Li of the button
function deleteLiByButton (data){
	//console.log(data.originalTarget.localName) - This ws
	if (data.originalTarget.localName ===`button`){
		return this.outerHTML = "" 	
	} 
		
}
// 14 function to call event listener on buttons that gets clicked. and deleteLiByButton as well
function liButtonListener (data){
	data.addEventListener("click",deleteLiByButton )
}
//13 function to create button, add classlist for css, text, and appends it to the li clicked
//which in this case it got passed on the data, it calls liButtonListener function as well
function addLiButton (data){
	var button = document.createElement("button")
	button.classList.add('button1')
	button.innerText = "Delete"
	data.appendChild(button)
	liButtonListener(data)
}
//12 function checks if there is a button when li is clicke, if it does it removes it, if it doesnt it calls
//addLiButton function 
function doesItHaveAbutton(data) {
	var removeButton = data.querySelectorAll("button")
	// if there is 1 button remove it =
	if(removeButton.length === 1){
		removeButton[0].remove()
	}else {
		   addLiButton (data)
	}
}
//11 funciton to toggle li clicked by calling .done in my style.css file. and call doesItHaveAbutton
function toggleOnOff() {
//NOTE =note this. is coming from evenlistener when the li is clicked, console.log(this) to see
this.classList.toggle("done")
doesItHaveAbutton(this)
}

//10. looping over li list and enable then for event listener and call toggleOnOff when any li is clicked
//notice i use this again on createListElement, so that new LI created gets also activated for even listening
for(let i=0; i < liList.length; i++){
    console.log(liList)
	liList[i].addEventListener("click",toggleOnOff )
}
//2 activating listener when button is click and therefore invoking addListAfterClick function
button.addEventListener("click", addListAfterClick);
//6 activating listener when a key is pressed inside of input box and call function addListAfterKeypress
input.addEventListener("keypress", addListAfterKeypress);

