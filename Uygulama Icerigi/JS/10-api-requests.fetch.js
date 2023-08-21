// Aşağıda tarifinden anlayacağınız istekleri https://jsonplaceholder.typicode.com/ URL'ine atın. her bir isteği 1 kere then, 1 kere de async/await yöntemi ile atın. update isteğini Put ve Patch olacak şekilde ayrı ayrı atın. Toplamda 5 then, 5 async/await isteği atacaksınız. isteklerinizi fonksiyon içerisinde tanımlayın.

//getCommentById, getAllComments, deleteComment, putComment, PatchComment

const jsonPlaceholderUrl = "https://jsonplaceholder.typicode.com/comments/";

// getCommentByID Async
const getCommentByIdAsync = async (commentId) => {
  const response = await fetch(`${jsonPlaceholderUrl}${commentId}`);
  const data = await response.json();
  return data;
};
let commentAsync;
getCommentByIdAsync(7).then((res) => console.log(res));

// getCommentByID Then

const getCommentByIdThen = (commentId) => {
  return fetch(`${jsonPlaceholderUrl}${commentId}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

getCommentByIdThen(9);

// getAllComments Async

const getAllCommentsAsync = async () => {
  const response = await fetch(`${jsonPlaceholderUrl}`);
  const data = await response.json();
  return data;
};

getAllCommentsAsync().then((res) => console.log(res));

// getAllComments Then

const getAllCommentsThen = () => {
  return fetch(`${jsonPlaceholderUrl}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

getAllCommentsThen();

// updateComment Pathc Then
const updateCommentPathcThen = (commentId, newData) => {
  return fetch(`${jsonPlaceholderUrl}${commentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const updatedCommentPathcThen = {
  body: "new comment / Patch / Then",
};

updateCommentPathcThen(4, updatedCommentPathcThen);

// updateComment Pathc Async

const updateCommentPathcAsync = async (commentId, newData) => {
  const response = await fetch(`${jsonPlaceholderUrl}${commentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  });
  const data = await response.json();
  return data;
};

const updatedCommentPatchAsync = {
  body: "new comment / Patch / Async",
};

updateCommentPathcAsync(8, updatedCommentPatchAsync).then((res) =>
  console.log(res)
);

// updateComment Put Then

const updateCommentPutThen = (commentId, newData) => {
  return fetch(`${jsonPlaceholderUrl}${commentId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const updatedCommentPutThen = {
  body: "new comment / Put / Then",
};

updateCommentPutThen(5, updatedCommentPutThen);

// updateComment Put Async

const updateCommentPutAsync = async (commentId, newData) => {
  const response = await fetch(`${jsonPlaceholderUrl}${commentId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  });
  const data = response.json();
  return data;
};

const updatedCommentPutAsync = {
  body: "new comment / Put / Async",
};

updateCommentPutAsync(3, updatedCommentPutAsync).then((res) =>
  console.log(res)
);

// deleteComment Then

const deleteCommentThen = (commentId) => {
  return fetch(`${jsonPlaceholderUrl}${commentId}`, {
    method: "DELETE",
  }).then((res) => {
    console.log("Veri silindi");
    return res.json();
  });
};
deleteCommentThen(5).then((data) => console.log(data));

// deleteComment Async

const deleteCommentAsync = async (commentId) => {
  const response = await fetch(`${jsonPlaceholderUrl}${commentId}`, {
    method: "DELETE",
  })
  const data = await response.json()
  console.log("Veri silindi");
  return data 
};

deleteCommentAsync(9).then(res => console.log(res))
