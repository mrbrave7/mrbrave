function getData() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) throw new Error("Can't Get Response");
            return response.json();
        })
        .then(data => {
            displayComments(data.comments);
            displayForm(data.currentUser);
        })
        .catch(error => {
            console.error('Something went wrong:', error);
        });
}

function displayComments(comments) {
    const commentSection = document.getElementById('comments');
    comments.forEach(comment => {
        const mainDiv = document.createElement('div');
        mainDiv.classList.add("main-div");
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add("buttondiv");
        const buttonPlus = createButton("+", "scorePlus");
        const buttonMinus = createButton("-", "scoreMinus");
        const score = document.createElement('p');
        score.classList.add('score');
        score.innerText = comment.score;
        buttonDiv.append(buttonPlus, score, buttonMinus);
        mainDiv.appendChild(buttonDiv);
        mainDiv.appendChild(createUserDiv(comment.user));
        commentSection.appendChild(mainDiv);
    });
}

function createButton(text, id) {
    const button = document.createElement('button');
    button.setAttribute('id', id);
    button.innerText = text;
    return button;
}

function createUserDiv(user) {
    const mainComment = document.createElement('div');
    mainComment.classList.add('mainComment');
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    const img = document.createElement('img');
    img.alt = 'userImage';
    img.src = user.image.png;
    const userName = document.createElement('h1');
    userName.classList.add('userName');
    userName.innerText = user.username;
    const createdAt = document.createElement('p');
    createdAt.classList.add('createdAt');
    createdAt.innerText = comment.createdAt;
    userDiv.append(img, userName, createdAt);
    mainComment.appendChild(userDiv);
    return mainComment;
}

function displayForm(user) {
    const commentForm = document.getElementById('commentForm');
    commentForm.innerHTML = `<img src="${user.image.png}" alt="userImage">
                             <textarea class="inputDiv" placeholder="Add a comment..."></textarea>
                             <button class="sendButton">Send</button>`;
}

window.addEventListener("DOMContentLoaded", getData);
