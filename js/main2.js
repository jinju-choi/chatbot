const talk = document.getElementsByClassName('talk')[0];
const btn = document.getElementById('submit');
const img = document.getElementsByClassName('character')[0].children[0];
const body = document.getElementsByTagName('body')[0];
const notice = document.getElementsByClassName('notice')[0];

let count = 0;
let follow = 0;

let message = [
  {
    question : "안녕",
    answer : "아안 녀엉!",
    img: "img/coco1.png"
  },
  {
    question : "이름",
    answer : "코코! <br> (먹느라 바쁨)",
    img: "img/coco2.png"
  },
  {
    question : "밥",
    answer : "지금 먹고있지앵!",
    img: "img/coco6.png"
  },
  {
    question : "바보",
    answer : "삐졌다😡 앵!",
    img: "img/coco3.png"
  },
  {
    question : "못생겼",
    answer : "시무룩...😢 앵...",
    img: "img/coco7.png"
  },
  {
    question : "불꺼",
    answer : "그럼 난 잘래앵!",
    img: "img/coco5.png"
  },
  {
    question : "일어나",
    answer : "기상~ 배고프다앵!",
    img: "img/coco6.png"
  },
  {
    question : "따라해",
    answer : "난 앵무새니까 따라해볼게앵!",
    img: "img/coco4.png"
  }
];

btn.addEventListener('click', textCheck );
noticeTyping();


function textCheck () {
  let value = document.getElementById('talk').value;
  
  if(follow == 0){
    message.forEach(element =>{
      if(value.indexOf(element.question) >= 0 ){
        typingtalk (element.answer)
        img.src = element.img;
        darkMode(value);

        if (value.indexOf('따라해') >= 0) {
          talk.innerHTML = element.answer;
          follow = 1;
        }
      } 
      else if(value !== element.question)  {
        talk.innerHTML = "그말은 아직 안배웠다앵!";
        img.src = "img/coco8.png"
      }      
    });
  }
  else {
    followTalk (value);
  }

}


function darkMode (valu) {
  if (valu.indexOf('불꺼') >= 0){
    body.classList.add('dark');
 }else {
   body.classList.remove('dark');
 }
}

function followTalk (val) {
  if (val.indexOf('그만') >= 0) {
    if(count > 1){
      talk.innerHTML = val + '~ 앵!';
      count++;
    }else {
      talk.innerHTML = "알겠다..앵";
      follow = 0;
      count = 0;
    }
  }else {
    talk.innerHTML = val + '~ 앵!';
  }
}

function typingtalk (va) {
  let typewriter2 = new Typewriter(talk, {
    loop: false
  });

  typewriter2
  .typeString(va)
  .pauseFor(1500)
  .start();
}

function noticeTyping() {
  let typewriter = new Typewriter(notice, {
    loop: false
  });
    typewriter
    .typeString('앵무새가 자고있네요..')
    .pauseFor(1500)
    .deleteAll()
    .typeString('말을 걸어보세요<br> [ 안녕 / 이름 / 밥 / 바보 / 못생겼어 / 불꺼 / 일어나 / 따라해 ]')
    .pauseFor(1500)
    .start();
}


