// variabels
const rightSide=document.querySelector('.RightSide')

// fetching
fetch('data.json').then(res=>res.json())
.then(data=>data.forEach(item => {
  let createDiv=document.createElement('div')
  createDiv.classList.add(item.category)
  createDiv.classList.add('scores')
  let left=document.createElement('div')
  let createIcon=document.createElement('img')
  createIcon.src=item.icon
  let categoryName=document.createElement('p')
  categoryName.innerHTML=item.category
  categoryName.classList.add('title')
  let right=document.createElement('div')
  let currentScore=document.createElement('p')
  currentScore.innerHTML=item.score
  let maxScore=document.createElement('p')
  maxScore.innerHTML=' / 100'
  maxScore.classList.add('fade')
  left.append(createIcon,categoryName)
  right.append(currentScore,maxScore)
  createDiv.append(left,right)
  rightSide.append(createDiv)
}))