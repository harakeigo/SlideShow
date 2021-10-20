let nowPlaying = false;
let timer;

function play(){
  if(nowPlaying == false){
    nowPlaying = true;
    autoPlay();
  }
}

function autoPlay(){
  timer = setTimeout(function(){
  right();
  autoPlay();
  },1000);
}

function stop(){
  clearTimeout(timer);
  nowPlaying = false;
}

function reset(){
  stop();
  let mainElement = document.querySelector("div.main>img");
  URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_01.jpg";
  mainElement.setAttribute('src',URL);
  thumbnailsElement.children[count-1].classList.remove('selected');
  count = 1;
  thumbnailsElement.children[count-1].classList.add('selected');
}


let thumbnailsElement = document.querySelector("div.thumbnails");
let count=1;
  let mainElement = document.querySelector("div.main>img");
  function left(){
    count = count-1;
    thumbnailsElement.children[count].classList.remove('selected');
    if (count == 0) {
      count =19;
    }
    if(count<10){
      let url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
      mainElement.setAttribute('src',url);
    }else {
      let url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
      mainElement.setAttribute('src',url);
    }
      thumbnailsElement.children[count-1].classList.add('selected');
  }
  function right(){
    thumbnailsElement.children[count-1].classList.remove('selected');
      count = count+1;
      if (count == 20) {
        count = 1;
      }
      if(count<10){
        let url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
        mainElement.setAttribute('src',url);
      }else {
        let url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
        mainElement.setAttribute('src',url);
      }
      thumbnailsElement.children[count-1].classList.add('selected');
  }
