const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
let postUserImg = document.getElementById('post-user-img')
let postUser = document.getElementById('post-user')
let postlocation = document.getElementById('post-add')
let postImg = document.getElementById('postimg')
let like = document.getElementById('like')
let comments = document.getElementById('comments')
let dm = document.getElementById('dm')
let likeNum = document.getElementById('like-num')
let userName = document.getElementById('user')
let userMessage = document.getElementById('user-message')
let postNum = 1;

like.addEventListener('click', function(){
    let currNum = parseInt(likeNum.textContent)
    currNum += 1
    likeNum.textContent = `${currNum} likes`
})

postUserImg.addEventListener('click', function(){
    if(postNum < 2){
        postNum += 1;
        renderPost(postNum)
    }else{
        postNum = 0;
        renderPost(postNum)
    }
})

function renderPost(postNum){
    postUserImg.src = posts[postNum].avatar
    postUser.textContent = posts[postNum].name
    postlocation.textContent = posts[postNum].location
    userName.textContent = posts[postNum].username
    postImg.src = posts[postNum].post
    userMessage.textContent = posts[postNum].comment
    likeNum.textContent = posts[postNum].likes
}

