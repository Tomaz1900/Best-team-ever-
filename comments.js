document
  .getElementById("submit-comment")
  .addEventListener("click", function () {
    const bookId = document.getElementById("book-id").value;
    const readerId = document.getElementById("reader-id").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;

    if (!bookId || !readerId || !rating || !comment) {
      alert("Prašome užpildyti visus laukelius.");
      return;
    }

    const newComment = {
      bookId,
      readerId,
      rating,
      comment,
    };

    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(comments));

    displayComments();
    alert("Atsiliepimas išsaugotas!");
  });

function displayComments() {
  const commentsList = document.getElementById("comments-list");
  commentsList.innerHTML = "";

  let comments = JSON.parse(localStorage.getItem("comments")) || [];

  comments.forEach((c, index) => {
    const commentItem = document.createElement("div");
    commentItem.className = "comment-item";
    commentItem.innerHTML = `
            <p><strong>Knygos ID:</strong> ${c.bookId}</p>
            <p><strong>Skaitytojo ID:</strong> ${c.readerId}</p>
            <p><strong>Įvertinimas:</strong> ${c.rating} / 5</p>
            <p><strong>Komentaras:</strong> ${c.comment}</p>
            <button onclick="deleteComment(${index})">Ištrinti</button>
        `;
    commentsList.appendChild(commentItem);
  });
}

function deleteComment(index) {
  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.splice(index, 1);
  localStorage.setItem("comments", JSON.stringify(comments));
  displayComments();
}

document.addEventListener("DOMContentLoaded", displayComments);
