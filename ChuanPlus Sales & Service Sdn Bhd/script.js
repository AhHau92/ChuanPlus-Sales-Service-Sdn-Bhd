

// menu toggle script
document.addEventListener('DOMContentLoaded', function() {
  const menuToggleOpen = document.querySelector('.menuToggleOpen');
  const menuToggleClose = document.querySelector('.menuToggleClose');
  const navigationList = document.querySelector('.navigationList');

  function openNavigation() {
    navigationList.style.display = 'flex';
    menuToggleOpen.style.display = 'none';
    menuToggleClose.style.display = 'block';
  }

  function closeNavigation() {
    navigationList.style.display = 'none';
    menuToggleOpen.style.display = 'block';
    menuToggleClose.style.display = 'none';
  }

  menuToggleOpen.addEventListener('click', openNavigation);
  menuToggleClose.addEventListener('click', closeNavigation);
});


// scrolling Progess

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    // console.log(pos);
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // console.log(calcHeight);
    let scrollValue = Math.round((pos * 100)/calcHeight);
    // console.log(scrollValue);
    if(pos>100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#2559a4 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = function() {
    // checkNavbar();
    calcScrollValue();
};



// about Us page typing effect

ityped.init('#ityped', {
  strings: ['Company Website!'],
  typeSpeed: 150,
  backSpeed: 50,
  backDelay: 1000,
  startDelay: 500,
  cursorChar: '|',
  showCursor: true,
  disableBackTyping: false,
  loop: true,
  onFinished: function () { }


}); 



