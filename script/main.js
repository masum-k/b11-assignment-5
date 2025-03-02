function changeBg() {
    document.body.style.background =
        'rgb(' + Math.round(Math.random() * 255) +
        ',' + Math.round(Math.random() * 255) +
        ',' + Math.round(Math.random() * 255) + ')';
}

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

        if (currentTaskCount > 0) {
            taskCount = currentTaskCount - 1;
            document.getElementById('task-count').innerText = taskCount;
            taskCompleted = currentCompletedTask + 1;
            document.getElementById('task-completed').innerText = taskCompleted;
            alert("Boared Updated Successfully!")
            button.disabled = true;

            if (taskCount === 0) {
                alert("Congrates!!! You have completed all the task.")
            }

            let logBox = document.getElementById('log-activity');
            let div = document.createElement('div')
            let p = document.createElement('div');
            p.innerHTML = 'You have Completed <br> The Task at 12:48:15 PM'
            div.appendChild(p);
            div.classList.add('log-style');
            logBox.appendChild(div);
            // const logBox = document.querySelectorAll('.log-heading');
            // logBox.forEach(heading => {
            //     const innerValue = heading.innerText;
            //     const p = document.createElement('p')
            //     p.innerHTML = innerValue
            //     const div = document.createElement('div');
            //     div.appendChild(p)
            //     const activity = document.getElementById('log-activity');
            //     activity.appendChild(div)
            // })
        }
    })
});

const logBtn = document.getElementById('log-btn').addEventListener('click', function () {
    document.getElementById('log-activity').innerText = ''
})

