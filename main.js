const usernameText=document.querySelector('.search-user');
const searchBtn=document.querySelector('.search-btn');
const githubDisplay=document.querySelector('.github-display');
searchBtn.addEventListener('click',()=>{
    console.log("Search Button Clicked");
    let username=usernameText.value;
    console.log(username);
    githubdisplay(username);
})

const githubdisplay=async (name)=>{
    const responce=await fetch(`https://api.github.com/users/${name}`);
     const data=await responce.json();
     console.log(data);
     
    githubDisplay.innerHTML=`
    <h1 class="name">${data.name}</h1>
    <p calss="bio" >${data.bio}</p>
    <img class="image" width="500px" src=${data.avatar_url}/>

    `
};

