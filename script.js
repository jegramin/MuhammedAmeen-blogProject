const token = '81c96bf385beafd7530f3b3cca18fd3c30e4fc57';

function postBlog() {
    const category = document.getElementById('category').value
    const blogTitle = document.getElementById('title').value
    const blogBody = document.getElementById('body').value
    const blogAuthor = document.getElementById('author').value
    const postData = { title: blogTitle, body: blogBody ,author: blogAuthor, category: category}
    fetch(`http://localhost:3000/posts`, {
      method: 'post',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    }).then(res => res.json())
    .then( () => {
      location.reload();
    })
  }
  
  
  
  

  
  

function remove() {
    const id = document.getElementById('idToEdit').value
    const blogTitle = document.getElementById('title').value
    const blogBody = document.getElementById('body').value
    const postData = { title: blogTitle, body: blogBody }
  fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  }).then(res => res.json())
  .then( () => {
    location.reload();
  })
  
}

    function update(){
      const id = document.getElementById('idToEdit').value
      const blogTitle = document.getElementById('title').value
      const blogBody = document.getElementById('body').value
      const blogAuthor = document.getElementById('author').value
      const postData = { title: blogTitle, body: blogBody ,author: blogAuthor}
      fetch(`http://localhost:3000/posts/${id}`,
        {
          method:'PATCH',
          headers:{
            'Authorization':`token ${token}`,
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(postData)
        })
    }