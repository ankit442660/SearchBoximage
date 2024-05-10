const users=document.querySelector(".user-list");
const user=document.querySelector("#user");
const userArray=[];
const getUserData= async()=>{
    try{
        const res= await fetch("https://api.github.com/users");
        const data= await res.json();
         console.log(data);
         if(data){
            users.innerHTML="";
         }
        data.map((user) => {
            const li=document.createElement('li');
            userArray.push(li);
            li.insertAdjacentHTML('afterbegin',
                `  <div class="user-data">
                <img src=${user.avatar_url} alt="${user.avatar_url}">
                <div>
                    <p>${user.login}</p>
                    <a href=${user.html_url} target="_blank">${user.html_url}</a>
                </div>
            </div>
                `
            )
            users.appendChild(li);

        })
    }
    catch(error){
        console.log(error);
    }
}

user.addEventListener('input',(e)=>{
    const val=e.target.value;
    console.log(val);
    userArray.filter((currElem)=>{
        currElem.innerText.toLowerCase().includes(val.toLowerCase()) ?
        currElem.classList.remove('hide') : 
        currElem.classList.add('hide')

    })

})
getUserData();