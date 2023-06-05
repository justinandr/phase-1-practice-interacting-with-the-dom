const counter = document.getElementById('counter')

function timer(){
    counter.textContent++
}

let interval = setInterval(timer, 1000)

document.getElementById('minus').addEventListener('click', incDec)
document.getElementById('plus').addEventListener('click', incDec)
document.getElementById('heart').addEventListener('click', like)
document.getElementById('pause').addEventListener('click', pauseResume)
document.getElementById('comment-form').addEventListener('submit', postComment)

function incDec(e){
    if (e.target.id === 'minus'){
        counter.textContent--
    }
    else if (e.target.id === 'plus'){
        counter.textContent++
    }
}

function like(e){
    const current = counter.textContent
    const check = document.getElementById(`${current}`)
    if (check){
        let likeCount = parseInt(check.childNodes[1].innerText, 10)
        likeCount += 1
        check.childNodes[1].innerText = likeCount
    }
    else {
        const li = document.createElement('li')
        li.id = current
        li.innerHTML = `Likes for ${current}: <span>` + 1 + `</span> times`
        document.querySelector('.likes').appendChild(li)
    }
}

function pauseResume(e){
    if (!document.getElementById('minus').disabled){
        clearInterval(interval)
        document.getElementById('minus').disabled = true
        document.getElementById('plus').disabled = true
        document.getElementById('heart').disabled = true
        document.getElementById('submit').disabled = true
        document.getElementById('pause').textContent = 'resume'
    }
    else {
        document.getElementById('minus').disabled = false
        document.getElementById('plus').disabled = false
        document.getElementById('heart').disabled = false
        document.getElementById('submit').disabled = false
        document.getElementById('pause').textContent = 'pause'
        interval = setInterval(timer, 1000)
    }
    
}

function postComment(e){
    e.preventDefault()
    const p = document.createElement('p')
    p.textContent = document.getElementById('comment-input').value
    document.getElementById('list').appendChild(p)
    document.getElementById('comment-form').reset()
}