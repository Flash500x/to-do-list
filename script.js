document.addEventListener('DOMContentLoaded', (event) => {
    async function fetchQuote() 
{
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.getElementById('quote').textContent = `"${data.content}"`;
        document.getElementById('author').textContent = `- ${data.author}`;
    } catch (error) {
        document.getElementById('quote').textContent = "Failed to fetch a new quote.";
        document.getElementById('author').textContent = "";
        console.error('Error fetching quote:', error);
    }
}

// Fetch a quote when the page loads
fetchQuote();
document.getElementById('add-task-button').addEventListener('click', addTask);

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Please enter a task!");
    }
     else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
         // Clear the input box after adding the task
    }
    inputBox.value = ''; 
    savedata();
}

listContainer.addEventListener('click', function(e)
 { 
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        savedata();  // Save the updated list to local storage when a task is checked or unchecked.
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        savedata();  // Save the updated list to local storage when a task is deleted.  // localStorage.removeItem('data');  // Clear the list from local storage when the page is refreshed.  // localStorage.clear();  // Clear all data from local storage when the browser is closed.  // localStorage.getItem('data') || '';  // Retrieve the saved list from local storage when the page is loaded.  // listContainer.innerHTML = localStorage.getItem('data') ||
    }


 },false);
 function  savedata(){
    localStorage.setItem('data', listContainer.innerHTML);
 }
 function showTask(){
    listContainer.innerHTML = localStorage.getItem('data') || '';
 }
 showTask(); // Show the saved list when the page is loaded.

});