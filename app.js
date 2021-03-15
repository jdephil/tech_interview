let cardContainer = document.querySelector('#cardContainer')

let cardExists = false

const submitForm = (form) => {
  if (cardExists) {
    function removeAllChildNodes(parent) {
      while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
      }
  }
    removeAllChildNodes(cardContainer)
  }
 index = form.storyOptions.selectedIndex
 chosenOption = form.storyOptions.options[index].text
 
 
 fetch(`https://gnews.io/api/v4/search?q=${chosenOption}&token=https://gnews.io/api/v4/search?q=example&token=https://gnews.io/api/v4/search?q=example&token=daea43b4c9d14a086bfb07f8aa88b09a`)
 .then(res => 
  res.json()
  ).then(data => {
    for (let i = 0; i < data.articles.length; i++) {
      // console.log(data.articles[i])
      let cardDiv = document.createElement("div")
      cardDiv.setAttribute("class", "cardDiv")
      cardContainer.appendChild(cardDiv)
      cardExists = true
      let cardTitle = document.createElement('h2')
      cardTitle.innerText = data.articles[i].title
      let cardImg = document.createElement('img')
      cardImg.setAttribute("src", `${data.articles[i].image}`) 
      cardImg.setAttribute("class", "cardImg")
      let cardBlurb = document.createElement('p')
      cardBlurb.innerText = data.articles[i].description
      cardDiv.appendChild(cardTitle)
      cardDiv.appendChild(cardImg)
      cardDiv.appendChild(cardBlurb)
      
    }
  }).catch(err => {
    console.log
  })
  
}