// window.onload = function() {
//     let form= document.getElementById('createAccount');
//     form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const username = document.getElementById("signupUsername").value;
//     const email = document.getElementById("signupEmail").value;
//     const password = document.getElementById("signupPassword").value;
//     localStorage.setItem("name", username);
//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//     alert("your details are saved");
// });
// };


function setForMessage(forElement,type,message){
    const messageElement=forElement.querySelector("form__message");
    messageElement.textContent=message;
    messageElement.classList.remove("form__message--success","form__message--error");
    messageElement.classList.add("form__message--$(type");
}

function setInputError(inputElement,message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent=message;

}
function clearInputError(inputElement){

    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent=" ";
}
window.onload=function(){
  
}
document.addEventListener("DOMContentLoaded", () => {
    const loginForm=document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    document.querySelector("#linkCreateAccount").addEventListener("click",e =>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");

    });


    document.querySelector("#linkLogin").addEventListener("click",e =>{
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        
    });


    loginForm.addEventListener("submit",e =>{
        e.preventDefault();

        //perform your AJAX login 
        setForMessage(loginForm,"error","Invalid username/password comnbination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement =>{
        inputElement.addEventListener("blur",e=>{
            if(e.target.id=="signupUsername" && e.target.value.length > 0 && e.target.value.length< 10){
                setInputError(inputElement,"Username must be at least 10 characters in length");
            }

        });

        inputElement.addEventListener("input",e=>{
            clearInputError(inputElement);
        });
    });

});


window.onload = function() {
  localStorage.clear()
  let users=[]

  if(localStorage.getItem('user')){
    //parse to JSON object 
    let usersArray=JSON.parse(localStorage.getItem('user')) || []
    console.log(usersArray)
    for(var i=0;i<usersArray.length;i++){
      if(usersArray[i].username){
        console.log(usersArray[i].username)
      }
    }

    // document.getElementById('username').value=obj.username
    // document.getElementById('password').value=obj.password

  };

  let form= document.getElementById('createAccount');
  form.addEventListener('submit',(e)=>{
    
    // $("#result").empty()
    e.preventDefault()

    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    let user={
      username:username,
      password:password,
      email:email
    }
    users.push([user])
    // users.forEach(user=>{
    //   let res=`
    //   <tr>
    //     <td>${user.username}</td>
    //     <td>${user.password}</td>
    //     <td>${user.email}</td>
    //   </tr>
    //   `
    //   $("#result").append(res)
    //})
    

    //local Storage
    localStorage.setItem('user',JSON.stringify(users))
    console.log(JSON.stringify(users))
    localStorage.setItem("name", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

      
    alert("your details are saved");
  });
};

let postData = () => {
    window.addEventListener('load', function() {
      let form = document.getElementById('createAccount');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById("signupUsername").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        localStorage.setItem("name", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("your details are saved");
  
        fetch("http://localhost:3001/UserData", {
          method: "POST", 
          body: JSON.stringify({
            name: username,
            email: email,
            password:password
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(() => { 
          console.log("User data was posted successfully");
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
      });
    });
  }


document.getElementById("submitButton").addEventListener("click", postData);

  