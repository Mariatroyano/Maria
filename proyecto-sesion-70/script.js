document.getElementById("commentForm").addEventListener("sudmit",function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    addCommentTolist(data);
    document.getElementById("commentForm").reset();
})
function addCommentTolist(comment){
    const commentsList = document.getElementById("commentsList");
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("commet");

    const commentAutor = document.createElement("h3");
    commentAutor.textContent = comment.name;

    const commentBody = document.createElement("p");
    commentBody.textContent = comment.body;

    commentDiv.appendChild(commentAutor);
    commentDiv.appendChild(commenBody);
    commentsList.appendChild(commentDiv);
}

fetch("https://jsonplaceholder.typicode.com/comments ")
.then(response => response.json())
.then(data => {
    data.forEach(comment => addCommentTolist(comment));
})
.catch(error => console.error("Error",error));