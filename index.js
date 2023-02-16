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
let vvgpost=document.getElementById("vvg")
// function render(){
//     let l=document.getElementById("like")
//     for(let i=0;i<posts.length;i++)
//     {
//         posts[i].likes+=1
//         l.innerHTML=`
//             ${posts[i].likes} likes
//         `
//     }
//     console.log(posts[0].likes)
    
// }

for(let i=0;i<posts.length;i++)
{
vvgpost.innerHTML+=`
    <div class="content-1">
        <div class="content-inner">
            <img class="vvg" src="${posts[i].avatar}">
        </div>
         <div class="content-inner-1">
            <h4>${posts[i].name}<br><span class="sp1">${posts[i].location}</h4>
        </div>
    </div>
    <img class="post" src="${posts[i].post}">
    <div class="icons">
        <img class="icon-reaction-1" src="images/icon-heart.png">
        <img class="icon-reaction-2" src="images/icon-comment.png">
        <img class="icon-reaction-3" src="images/icon-dm.png">
        <p class="like" id="like">${posts[i].likes} likes</p>
        <p class="comment"><span class="sp2">${posts[i].username}</span> ${posts[i].comment}</p>
        <hr>
        </div>
    
`
}
