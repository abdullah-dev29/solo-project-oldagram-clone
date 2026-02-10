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
// Stretch goal two implemented

const redHeart = "images/red-heart.png"
const grayHeart = "images/icon-heart.png"

function setupLikes(postId, heartId, countId) {
    let liked = false;

    const post = document.getElementById(postId);
    const heart = document.getElementById(heartId);
    const count = document.getElementById(countId);

    if(post == null || heart == null || count == null) {
        return;
    }

    // heart click: toggle
    heart.addEventListener("click", function() {
        liked = !liked;
        if(liked) {
            count.textContent = Number(count.textContent) + 1;
            heart.src = redHeart;
        } else {
            count.textContent = Number (count.textContent) - 1;
            heart.src = grayHeart;
        }
    });

    // post double click: like only if not already liked
    post.addEventListener("dblclick", function() {
        if(!liked) {
            liked = true;
            count.textContent = Number(count.textContent) + 1;
            heart.src = redHeart;
        }
    });
}
setupLikes("user-one-post-el", "user-one-heart-icon-el", "user-one-el");
setupLikes("user-two-post-el", "user-two-heart-icon-el", "user-two-el");
setupLikes("user-three-post-el", "user-three-heart-icon-el", "user-three-el");
