// const token = '81c96bf385beafd7530f3b3cca18fd3c30e4fc57';
function send() {
    const commentBody = document.getElementById('userComment').value
    // const blogBody = document.getElementById('body').value
    // const blogAuthor = document.getElementById('author').value
    const postData = { comment: commentBody}
    fetch(`http://localhost:3000/comments`, {
      method: 'post',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    }).then(res => res.json())
    .then( () => {
    //   location.reload();
    })
  }


function show(){
fetch('http://localhost:3000/posts', {
    headers: {
      // Authorization: `token ${token}`
    }
  }).then(res => res.json())
  .then(json => {
    // let para = document.createElement("div");
    // para.classList.add("boxShdow");
    // para.classList.add("col-lg-9");
    // let node = document.createTextNode(json[2].id);
    // para.appendChild(node)
    // document.getElementById('blogsParent').appendChild(para)
  
    for(i=0;i<json.length;i++){
    let para = document.createElement("div");
    let para1 = document.createElement("div");
    let para2 = document.createElement("div");
    let para21 = document.createElement("h2");
    let para3 = document.createElement("p");
    let para4 = document.createElement("p");
    let title = document.createTextNode(json[i].title);
    let body = document.createTextNode(json[i].body);
    let author = document.createTextNode('Written By: '+json[i].author);
    //let para5 = document.createElement("button");
    // let Delete = document.createTextNode('Delete');
    // let parac = document.createElement("div");
    // let parac1 = document.createElement("p");
    // let comment = document.createElement('input');
    // let send = document.createElement('button');
    // let innerButton = document.createTextNode('Send');
    let iid = document.createElement("p");
    let myId = document.createTextNode('Post ID: ' +json[i].id);    
    //<button class=" newPost edit btn btn-outline-secondary col-lg-2 btn-sm">Edit</button>
        para.classList.add("col-lg-9");
        para1.classList.add("boxShdow");
        para1.classList.add('col-lg-8');
        para.append(para1);
        para1.append(para2);
        para2.classList.add("row");
        para21.setAttribute('id', 'title');
        para21.appendChild(title)
        para21.classList.add('col-lg-7');
        para2.appendChild(para21)
        // $('a').addClass("newPost edit btn btn-outline-secondary col-lg-2 btn-sm").html('Edit'),
        // $('a').addClass("newPost edit btn btn-outline-secondary col-lg-2 btn-sm").html('Delete')
        para3.setAttribute('id', 'body')
        para3.appendChild(body)
        para1.appendChild(para3)
        para4.classList.add('author'); 
        para4.appendChild(author)
        para1.appendChild(para4)
        // para5.appendChild(Delete);
        // para5.classList.add('newPost');  
        // para5.classList.add('edit');
        // para5.classList.add('btn');
        // para5.classList.add('btn-outline-secondary');
        // para5.classList.add('col-lg-2');
        // para5.classList.add('btn-sm');
        // para5.setAttribute('onClick', 'remove()')
        // para2.appendChild(para5) 
        // parac.classList.add("boxShdow");
        // parac.classList.add('col-lg-8');
        // para.appendChild(parac) 
        // parac.appendChild(parac1) 
        // parac1.appendChild(comment)
        // parac1.appendChild(send)
        // comment.setAttribute('type', 'text')
        // comment.setAttribute('placeholder', 'comment')
        // comment.classList.add('col-lg-10');
        // send.classList.add('newPost');  
        // send.classList.add('edit');
        // send.classList.add('btn');
        // send.classList.add('btn-outline-secondary');
        // send.classList.add('col-lg-2');
        // send.classList.add('btn-sm');
        // send.setAttribute('onClick', 'send()')
        // send.setAttribute('id', 'userComment')
        // send.appendChild(innerButton);
        iid.classList.add('author');
        iid.setAttribute('id', 'wara')
        iid.appendChild(myId)
        para4.appendChild(iid)             
        // <div class="col-lg-4"><p> </p></div>
    document.getElementById('blogsParent').appendChild(para)
      url = `http://localhost:3000/posts/${json[i].id}`
  
    }
  }
  )
}

  function sports(){
    const category = document.getElementById('sports').value;
    fetch('http://localhost:3000/posts', {
    headers: {
      // Authorization: `token ${token}`
    }
  }).then(res => res.json())
  .then(json => {
    // let para = document.createElement("div");
    // para.classList.add("boxShdow");
    // para.classList.add("col-lg-9");
    // let node = document.createTextNode(json[2].id);
    // para.appendChild(node)
    // document.getElementById('blogsParent').appendChild(para)
  
    for(i=0;i<json.length;i++){
        if(json[i].category === 'sports' ){
    let para = document.createElement("div");
    let para1 = document.createElement("div");
    let para2 = document.createElement("div");
    let para21 = document.createElement("h2");
    let para3 = document.createElement("p");
    let para4 = document.createElement("p");
    let title = document.createTextNode(json[i].title);
    let body = document.createTextNode(json[i].body);
    let author = document.createTextNode('Written By: '+json[i].author);
    //let para5 = document.createElement("button");
    // let Delete = document.createTextNode('Delete');
    // let parac = document.createElement("div");
    // let parac1 = document.createElement("p");
    // let comment = document.createElement('input');
    // let send = document.createElement('button');
    // let innerButton = document.createTextNode('Send');
    let iid = document.createElement("p");
    let myId = document.createTextNode('Post ID: ' +json[i].id);    
    //<button class=" newPost edit btn btn-outline-secondary col-lg-2 btn-sm">Edit</button>
        para.classList.add("col-lg-9");
        para1.classList.add("boxShdow");
        para1.classList.add('col-lg-8');
        para.append(para1);
        para1.append(para2);
        para2.classList.add("row");
        para21.setAttribute('id', 'title');
        para21.appendChild(title)
        para21.classList.add('col-lg-7');
        para2.appendChild(para21)
        // $('a').addClass("newPost edit btn btn-outline-secondary col-lg-2 btn-sm").html('Edit'),
        // $('a').addClass("newPost edit btn btn-outline-secondary col-lg-2 btn-sm").html('Delete')
        para3.setAttribute('id', 'body')
        para3.appendChild(body)
        para1.appendChild(para3)
        para4.classList.add('author'); 
        para4.appendChild(author)
        para1.appendChild(para4)
        // para5.appendChild(Delete);
        // para5.classList.add('newPost');  
        // para5.classList.add('edit');
        // para5.classList.add('btn');
        // para5.classList.add('btn-outline-secondary');
        // para5.classList.add('col-lg-2');
        // para5.classList.add('btn-sm');
        // para5.setAttribute('onClick', 'remove()')
        // para2.appendChild(para5) 
        // parac.classList.add("boxShdow");
        // parac.classList.add('col-lg-8');
        // para.appendChild(parac) 
        // parac.appendChild(parac1) 
        // parac1.appendChild(comment)
        // parac1.appendChild(send)
        // comment.setAttribute('type', 'text')
        // comment.setAttribute('placeholder', 'comment')
        // comment.classList.add('col-lg-10');
        // send.classList.add('newPost');  
        // send.classList.add('edit');
        // send.classList.add('btn');
        // send.classList.add('btn-outline-secondary');
        // send.classList.add('col-lg-2');
        // send.classList.add('btn-sm');
        // send.setAttribute('onClick', 'send()')
        // send.setAttribute('id', 'userComment')
        // send.appendChild(innerButton);
        iid.classList.add('author');
        iid.setAttribute('id', 'wara')
        iid.appendChild(myId)
        para4.appendChild(iid)             
        // <div class="col-lg-4"><p> </p></div>
    document.getElementById('blogsParent').appendChild(para)
    
  
    }}
  }
  )
  
}

function arts(){
    const category = document.getElementById('arts').value;
    fetch('http://localhost:3000/posts', {
    headers: {
      // Authorization: `token ${token}`
    }
  }).then(res => res.json())
  .then(json => {
    // let para = document.createElement("div");
    // para.classList.add("boxShdow");
    // para.classList.add("col-lg-9");
    // let node = document.createTextNode(json[2].id);
    // para.appendChild(node)
    // document.getElementById('blogsParent').appendChild(para)
  
    for(i=0;i<json.length;i++){
        if(json[i].category === 'arts' ){
    let para = document.createElement("div");
    let para1 = document.createElement("div");
    let para2 = document.createElement("div");
    let para21 = document.createElement("h2");
    let para3 = document.createElement("p");
    let para4 = document.createElement("p");
    let title = document.createTextNode(json[i].title);
    let body = document.createTextNode(json[i].body);
    let author = document.createTextNode('Written By: '+json[i].author);
    //let para5 = document.createElement("button");
    // let Delete = document.createTextNode('Delete');
    // let parac = document.createElement("div");
    // let parac1 = document.createElement("p");
    // let comment = document.createElement('input');
    // let send = document.createElement('button');
    // let innerButton = document.createTextNode('Send');
    let iid = document.createElement("p");
    let myId = document.createTextNode('Post ID: ' +json[i].id);    
    //<button class=" newPost edit btn btn-outline-secondary col-lg-2 btn-sm">Edit</button>
        para.classList.add("col-lg-9");
        para1.classList.add("boxShdow");
        para1.classList.add('col-lg-8');
        para.append(para1);
        para1.append(para2);
        para2.classList.add("row");
        para21.setAttribute('id', 'title');
        para21.appendChild(title)
        para21.classList.add('col-lg-7');
        para2.appendChild(para21)
        // $('a').addClass("newPost edit btn btn-outline-secondary col-lg-2 btn-sm").html('Edit'),
        // $('a').addClass("newPost edit btn btn-outline-secondary col-lg-2 btn-sm").html('Delete')
        para3.setAttribute('id', 'body')
        para3.appendChild(body)
        para1.appendChild(para3)
        para4.classList.add('author'); 
        para4.appendChild(author)
        para1.appendChild(para4)
        // para5.appendChild(Delete);
        // para5.classList.add('newPost');  
        // para5.classList.add('edit');
        // para5.classList.add('btn');
        // para5.classList.add('btn-outline-secondary');
        // para5.classList.add('col-lg-2');
        // para5.classList.add('btn-sm');
        // para5.setAttribute('onClick', 'remove()')
        // para2.appendChild(para5) 
        // parac.classList.add("boxShdow");
        // parac.classList.add('col-lg-8');
        // para.appendChild(parac) 
        // parac.appendChild(parac1) 
        // parac1.appendChild(comment)
        // parac1.appendChild(send)
        // comment.setAttribute('type', 'text')
        // comment.setAttribute('placeholder', 'comment')
        // comment.classList.add('col-lg-10');
        // send.classList.add('newPost');  
        // send.classList.add('edit');
        // send.classList.add('btn');
        // send.classList.add('btn-outline-secondary');
        // send.classList.add('col-lg-2');
        // send.classList.add('btn-sm');
        // send.setAttribute('onClick', 'send()')
        // send.setAttribute('id', 'userComment')
        // send.appendChild(innerButton);
        iid.classList.add('author');
        iid.setAttribute('id', 'wara')
        iid.appendChild(myId)
        para4.appendChild(iid)             
        // <div class="col-lg-4"><p> </p></div>
    document.getElementById('blogsParent').appendChild(para)
    
  
    }}
  }
  )
  
}





// id.classList.add('hidden');
        // iid.appendChild(myId)
        // para2.appendChild(iid)          

         // let iid = document.createElement("p");
    // let myId = document.createTextNode(json[i].id);