
const blogBtn = document.getElementById('blog-btn');
const deskBtn = document.getElementById('desk-btn');

if (blogBtn) {
    blogBtn.addEventListener('click', function () {
        window.location.href = "blog.html";
    });
}

if (deskBtn) {
    deskBtn.addEventListener('click', function () {
        window.location.href = "index.html";
    });
}

let taskCount = document.getElementById('task-count').innerText
let taskCompleted = document.getElementById('task-completed').innerText
let completeBtn = document.querySelectorAll('.complete-btn')

completeBtn.forEach(button => {
    button.addEventListener('click', function () {
        let currentTaskCount = parseInt(taskCount)
        let currentCompletedTask = parseInt(taskCompleted)
        
        if(currentTaskCount > 0){
            taskCount = currentTaskCount - 1;
            document.getElementById('task-count').innerText = taskCount;
            taskCompleted = currentCompletedTask + 1;
            document.getElementById('task-completed').innerText = taskCompleted;
            alert("Submitted Successfully")
            button.disabled = true;
        }
    })
});










