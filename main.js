// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

function openLink() {
    window.open('C:\Users\krans\Desktop\vs code\Blog-Tutorial-master\Modern-Login-Page-main\index2.html', '_blank');
  }

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});



// further applied changes
document.addEventListener('DOMContentLoaded', function () {
    const likeButtons = document.querySelectorAll('.like-button');
    const shareButtons = document.querySelectorAll('.share-button');
    const commentButtons = document.querySelectorAll('.comment-button');
    const submitCommentButtons = document.querySelectorAll('.submit-comment');

    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('liked');
            if (this.classList.contains('liked')) {
                this.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked';
            } else {
                this.innerHTML = '<i class="fas fa-thumbs-up"></i> Like';
            }
        });
    });

    shareButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Post shared!');
        });
    });

    commentButtons.forEach(button => {
        button.addEventListener('click', function () {
            const postBox = this.closest('.post-box');
            const commentSection = postBox.querySelector('.comment-section');
            commentSection.style.display = commentSection.style.display === 'none' || commentSection.style.display === '' ? 'block' : 'none';
        });
    });

    submitCommentButtons.forEach(button => {
        button.addEventListener('click', function () {
            const postBox = this.closest('.post-box');
            const commentInput = postBox.querySelector('.comment-input');
            const comments = postBox.querySelector('.comments');
            if (commentInput.value.trim()) {
                const newComment = document.createElement('div');
                newComment.textContent = commentInput.value;
                comments.appendChild(newComment);
                commentInput.value = '';
            }
        });
    });
});


// dark mode changes

document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }    
    }
    
    toggleSwitch.addEventListener('change', switchTheme, false);
});



// JavaScript for toggling dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Toggle dark mode class on body
});

