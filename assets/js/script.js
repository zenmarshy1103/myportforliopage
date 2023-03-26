//Assignment 2 - Using Javascript to build a input field for user to type the text and 
//               when the add button is pressed the entered text displays on the screen 
//               underneath the input box in a list format. 


//Modification: This version is modified differently to what  is specified on the 
//               assignment criteria. This version acts as a feedback where the user
//               type in their suggestions or anything and after pressing add suggestion 
//               button, user's suggestions will display underneath the input field in a 
//               list format.


function addSuggestion() {	
    
    //Store the value of the text entered in the input field
    var textEntered = document.querySelector('[data-suggestion]').value;

    //Assign suggestion list to variable    
	var suggestionList = document.querySelector("[data-suggestion-list]");

    //Create an li element and have it a variable for storing purpose
	const singleEntry = document.createElement("li");

    //Write the text entered in the input filed to the li element
	singleEntry.innerHTML = textEntered;

    //Append the variable in a form of list element onto the unordered list. This will output it on the screen. 
	suggestionList.append(singleEntry);

    //clear the value on the input field after the text has been appended to the list
    document.querySelector('[data-suggestion]').value = "";
	
}



