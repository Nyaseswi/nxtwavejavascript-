// Write your code here
const createPost = function({title,content}){
    const socialCard = document.createElement('div');
    socialCard.setAttribute('class','social-card');

    const icon = document.createElement('div');
    icon.setAttribute('class','post-icon');

    const postTitle = document.createElement('div');
    postTitle.setAttribute('class','post-title');

    const postUser = document.createElement('div');
    postUser.setAttribute('class','post-user');

    const postContent = document.createElement('div');
    postContent.setAttribute('class','post-content');

    socialCard.append(icon,postTitle,postUser,postContent);

    //adding content 
    postTitle.innerText = title;
    postUser.innerText='Joe Mockery';
    postContent.innerText =  content;

    document.body.prepend(socialCard);
};

createPost({
    title:'Midnight sun',
    content:'oh man, this is content',
});

createPost({
    title:'Midnight sun',
    content:'oh man, this is content',
});