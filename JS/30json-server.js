// GET
async function getPosts() {
  const uri = "http://localhost:5000/posts";
  const res = await fetch(uri);
  const posts = await res.json();
  console.log(posts);
}
// getPosts();

// POST
async function postPosts() {
  const newPost = {
    userId: 1,
    title: "Title 4",
    body: "New post added",
  };

  const uri = "http://localhost:5000/posts";
  const res = await fetch(uri, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const post = await res.json();
  console.log(post);
}
// postPosts();

// DELETE
async function deletePost() {
  const uri = "http://localhost:5000/posts/4";
  const res = await fetch(uri, {
    method: "DELETE",
  });
  console.log(res.ok);
}
// deletePost();

// PUT
async function updatePost() {
  const updatedPost = {
    title: "Updated Title",
    body: "Changed body ...",
  };

  const uri = "http://localhost:5000/posts/4";
  const res = await fetch(uri, {
    method: "PUT",
    body: JSON.stringify(updatedPost),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const post = await res.json();
  console.log(post);
}
// updatePost();

// SEARCH
// q: json objeleri içerisinde aratmak istediğimiz kelimeyi tanımladığımız parametre.
// _sort: json objelerinin hangi property'ye göre sıralanacağını seçer.
// _order: "asc", "desc" value'larını alır. Buna bağlı olarak desc tersten sıralama yapar.
async function searchPost() {
  const uri = "http://localhost:5000/posts?q=lorem&_sort=body&_order=desc";
  const res = await fetch(uri);
  const posts = await res.json();
  console.log(posts);
}
searchPost();