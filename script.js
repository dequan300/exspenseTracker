// Add Expense: The addExpense function takes description and amount parameters, creates an expense object with the given description and amount, and adds it to the expenses array. It then displays a message indicating that the expense was added.

// Calculate Total Expenses: The calculateTotalExpenses function loops through each expense in the expenses array and calculates the total amount by summing up the expense amounts. It returns the total expenses.

// Display Expenses: The displayExpenses function checks if the expenses array is empty. If it is, it displays a message indicating that no expenses are found. Otherwise, it loops through each expense in the array and displays its description and amount. It also calculates and displays the total expenses.



let button = document.getElementById("submit")
    document.getElementById('expForm').addEventListener('submit', addExpense);
    const array=JSON.parse(localStorage.getItem("ex_data")) || [];

function addExpense(e){
   e.preventDefault();
     // take the values from my form 
    // add them to my local storage to avoid losing data
let name = document.getElementById("name").value
let selection =document.getElementById("expenseMenu").value
let amount = document.getElementById("amount").value

    const expense={
        name,
        selection,
        amount,
        id: array.length>0 ? array[array.length-1].id+1:1
    }
    

    // if(localStorage.getItem("ex_data")===null){
    //     localStorage.setItem("ex_data","[]")
    // }
    array.push(expense)
    localStorage.setItem("ex_data",JSON.stringify(array))



    document.getElementById('expForm').reset();
    display()

    
}




const display=()=>{
    
    

    let display =document.getElementById("display")
   let html=""
   for (const info of array) {


    html += `
            <tr>
                <td>${info.name}</td>
                <td>${info.selection}</td>
                <td>${info.amount}</td>
                <td><a class="deleteButton" onclick="deleteInfo(${info.id})">
                Delete</td>
                </tr>
                `;     
   }   
                display.innerHTML=html
      
}
const deleteInfo = (expense) => {
    
    for (const id of array) {
       if(id.id===expense){
        console.log(array)
    array.splice(array.id,1)
        
       }
       
      console.log( localStorage.setItem('ex_data', JSON.stringify(array)))
    display();
    }

   }



display()
    


