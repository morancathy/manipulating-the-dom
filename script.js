let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  // randomQuote();

  // Do all of your work inside the document.addEventListener
  // Part 1
  const wordyTitle = () => {
  const titleEl = document.getElementById('main-title');
  titleEl.innerHTML = 'I am DOM. I have muscles.';
  };
  wordyTitle();

  // Part 2
  const bodyChange = () => {
    let bodyEl = document.querySelector('body');
    bodyEl.style.backgroundColor = 'ghostwhite';
  }
  bodyChange();

  // Part 3
  const favThings = () => {
    let favThingsEl = document.querySelector("#favorite-things");
    favThingsEl.removeChild(favThingsEl.lastElementChild);
  }
  favThings();

  // // Part 4
  const specialTitle = () => {
    const item = document.querySelectorAll('.special-title');
    item.forEach(function(bananas){
    bananas.style.fontSize = '2rem';
  })}
  specialTitle();

  // Part 5
  const pastRaces = () =>{
    let item = document.querySelector('#past-races');
    item.removeChild(item.children[3]);
  };
  pastRaces();
// favorite = document.querySelector('#favorite-things > li:nth-child(6)');

  // Part 6
  const newCity = () => {
    const li = document.createElement('li');
    li.innerHTML = 'Sydney';
    document.getElementById('past-races').appendChild(li);
  };
  newCity();

  // Part 7
  const blog = () => {
    const div = document.createElement('div');
    div.classList.add('.blog-post');
    document.querySelector('#past-races').appendChild(div);

    const newH2 = document.createElement('h2');
    newH2.innerHTML = 'Sydney Blog Heading Text';
    document.querySelector('#past-races div').appendChild(newH2);

    const newP = document.createElement('p');
    newP.innerHTML = 'I crashed into the Sydney Opera House';
    document.querySelector("#past-races div").appendChild(newP);
  };
  blog();

  // Part 8
  const quoteWork = () => {
    const quoteEl = document.querySelector("#quote-title");
    quoteEl.addEventListener("click", randomQuote);
  };
  quoteWork();

  // Part 9cd
  const blogWork = () => {    //this does not work
    const blogEl = document.querySelectorAll(".blog-post");
    console.log(blogEl)

    blogEl.forEach(function(bananas){
      bananas.addEventListener("mouseout", mouseOut);
      function mouseOut(){
        blogEl.classList.toggle('purple');
      }
      bananas.addEventListener("mouseenter", mouseEnter);
      function mouseEnter(){
        blogEl.classList.toggle('red');
      }
    }
  )
  }
  blogWork();

});
