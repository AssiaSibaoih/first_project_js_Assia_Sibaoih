// ### First JavaScript Project: 

// ## 1 - Instructions: 
// - Create a folder named: first_project_js_firstname_lastname
// - Create a repository with the same name as the folder  
// - Follow the folder structure
// - Individual work 
// - A minimum of 10 commits 
// - Deadline: One day 
// - Use object classes, arrays, functions, prompts, etc.

// ## 2 - Project Goal: 
// - Create a JavaScript program that simulates a login to a bank account using only the console to interact with the user.

// ## 3 - Instructions: 
// - Account creation and management: 
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
//     + If the user simply types "exit", they exit the current process and are prompted again to make a choice.
//         * If the user chooses to sign up, they must enter the following information: 
//             # Name (Full Name): 
//             - Check that there are no spaces at the beginning or end
//             - The first letter must be uppercase
//             - After each space, the first letter must be uppercase
//             - All other characters must be lowercase
//             - Do not register the Name if it has fewer than 5 characters (excluding spaces)
//             - Do not register the Name if it contains numbers, an @, or similar special characters.

//             # Email: 
//             - Check that there are no spaces at the beginning or end
//             - All letters must be lowercase
//             - Do not register the Email if there is a space in the middle
//             - Do not register the Email if it has fewer than 10 characters (excluding spaces)
//             - Do not register the Email if it does not contain exactly one @
//             - The email must be unique  

//             # Age: 
//             - Check that there are no spaces at the beginning, end, or in the middle
//             - Ensure only numbers are entered
//             - Do not register the Age if it has 0 characters, or if it has 3 or more characters

//             # Password: 
//             - Check that there are no spaces at the beginning or end
//             - Do not register the Password if there is a space in the middle 
//             - It must contain at least one special character from: ["@" , "#" , "-" , "+" , "*" , "/"]
//             - It must be at least 7 characters long

//             # Password_confirmed: 
//             - The user must re-enter their exact password, otherwise, they are blocked

//         * If the user chooses to log in, they must enter the following information: 
//             # Email:
//             - Verify that the email exists in our Database
//             # Password: 
//             - Verify that the Password is linked to the previously entered email

//         * If the user chooses to change the password: 
//             - They must enter their existing email from the Database

//         * After the user logs in, display their bank account balance (optional), and offer the following services: 
//             # Logout: 
//             - If the user chooses this option, they are logged out, and are again prompted to sign up, log in, or change the password.
//             # Withdraw money:
//             - If the user chooses this option, they can withdraw an amount from their bank account (not exceeding their balance).
//             # Deposit money: 
//             - If the user chooses this option, they can deposit an amount of up to 1000 dirhams into their account.
//             # Take a loan:
//             - If the user chooses this option, they can take a loan up to 20% of their current balance.
//             - They receive an additional 20% of their balance but lose 10% at each login until the loan amount is reached.
//             # Invest: 
//             - If the user chooses this option, they can invest any amount in the bank.
//             - On their next login, they receive 20% of their investment each time until reaching 120% (they gain 20% on each investment every time).
//             # Transaction history:
//             - Ability to view the complete transaction history.
let Database=[]
class BankAccount {
  constructor(name,Email,Age,password,ConfirmationOfpassword){
        this.name=name
        this.Email=Email
        this.Age=Age
        this.password=password
        this.ConfirmationOfpassword=ConfirmationOfpassword

   }

   
 }
  
  
  
let Choose=prompt("Can you choose between Sign Up or Log In or Change password")

if (Choose=="Sign Up") {
    let fullname = prompt("Can you enter your Full Name")
    let nospace = fullname.trim();
    let split = nospace.split(" ")
    let string =split.map(el => el[0].toUpperCase() + el.slice(1).toLowerCase()).join(" ") 
    console.log(string);
    let lengthofstring =""
    while(lengthofstring<5) {
        lengthofstring = lengthofstring.split(" ").join("").length;
        lengthofstring= prompt("Can you enter your Full Name")

        
    }

}  
let email=prompt("Can you enter your email")

while (email.trim()!==email) {
   alert("there are spaces at the beginning, end, or in the middle")
    email=prompt("Can you enter your email")

        
       
    }


let age= prompt("Can you enter your age ")
if (!isNaN(age) && age.trim() !==age) {
    age = prompt("Enter your age:");

} else if (age < 0 || age >= 100) { 
    console.log("Age must be between 0 and 99.");
    age = prompt("Enter your age:");
}
let password= prompt("Can you enter your password ")


while(password.length < 7) {
     password= prompt("Can you enter your password ")

 }
 let specialCharact = ['@', '#', '*', '-', '+', '/'];

  for (let i = 0; i < password.length; i++) {
    if (specialCharact.includes(password[i])) {
      console.log("Good"); 
    }
  }



