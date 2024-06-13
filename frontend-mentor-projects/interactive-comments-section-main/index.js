function getData() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) throw new Error("Can't Get Response");
            return response.json();
        })
        .then(data => {
            console.log(data)
            data.comments.forEach(comment => {
                console.log(comment)
                showComments(comment)
            });
            createUser(data.currentUser)
        })
        .catch(error => {
            console.error('Something went wrong:', error);
        });
}
function createUser (currentUser){
    const user = currentUser
    const commentDiv = document.getElementById("commentForm")
    console.log(currentUser)
    const image = document.createElement("img")
    image.src=currentUser.image.png
    image.alt = currentUser.username
    image.className = "userImage"
    image.setAttribute("class","image")
    const textArea = document.createElement("textarea")
    textArea.placeholder="Add a commnets"
    textArea.classList="textarea"
    const commentButton = document.createElement("button")
    commentButton.id = "commentButton"
    commentButton.innerText = "send"
    commentDiv.append(image,textArea,commentButton)
}
function showComments (commnet) {
    console.log(commnet)

    //scoreDiv Createds
    const score = commnet.score
    const buttonPlus = document.createElement("button")
    buttonPlus.id = "increment"
    buttonPlus.onclick = (score) => {
        score = score+1;
    }
    const scoreTag = document.createElement("p")
    scoreTag.innerHTML = score;
    const buttonMinus = document.createElement("button")
    buttonMinus.id ="decrement"
    buttonMinus.onclick = () => {
        score = score - 1;
    }
    const scoreDiv = document.createElement("div")
    scoreDiv.className = "scoreDiv"
    scoreDiv.append(buttonPlus,score,buttonMinus)
    console.log(scoreDiv)



    //commneted User Div
    const user = commnet.user
    console.log(user)
    const image = document.createElement("img")
    image.src = user.image.png
    image.alt = user.username
    const userName = document.createElement("h1")
    userName.id = "userName"
    userName.innerText = user.userName
    const createdAt = document.createElement("p")
    createdAt.innerText = commnet.createdAt
    createdAt.id = "createdAt"
    const userDiv = document.createElement("div")
    userDiv.id = "userDiv"
    userDiv.append(image,userName,createdAt)
    

}
window.addEventListener("DOMContentLoaded", getData);
