let talk = document.querySelector('.talk-box');
const input = document.getElementById('input');
const btn = document.getElementById('button');
const img = document.getElementsByClassName('image')[0].children[0];
const body = document.getElementsByTagName('body')[0];
const notice = document.getElementsByClassName('typing-text')[0];

let count = 0;
let follow = 0;

let message = [
  {
    "question" : "안녕",
    "answer" : "아안 녀엉!",
    "img": "img/coco1.png"
  },
  {
    "question" : "이름",
    "answer" : "코코! <br> (먹느라 바쁨)",
    "img": "img/coco2.png"
  },
  {
    "question" : "밥",
    "answer" : "지금 먹고있지앵!",
    "img": "img/coco6.png"
  },
  {
    "question" : "바보",
    "answer" : "삐졌다😡 앵!",
    "img": "img/coco3.png"
  },
  {
    "question" : "못생겼",
    "answer" : "시무룩...😢 앵...",
    "img": "img/coco7.png"
  },
  {
    "question" : "불꺼",
    "answer" : "그럼 난 잘래앵!",
    "img": "img/coco5.png"
  },
  {
    "question" : "일어나",
    "answer" : "기상~ 배고프다앵!",
    "img": "img/coco6.png"
  }
];

let question = "";//사용자의 질문을 임시 저장할 변수
let answer = "";//사용자의 대답을 임시 저장할 변수

let key = 0;// 키 값을 이용하여 말을 배우는 상황인지 아닌지 판별


function textCheck() {
  let talk = document.querySelector('.talk-box');
  let value = document.getElementById('input').value;
  
  if(key == 1) { //key 값이 1인 경우, 사용자의 선택 유도
    if(value == "응"){
      talk.innerHTML = "뭐라고 대답할까앵!?"
      key = 2; //key 값을 2로 만들어, 대답을 입력받는 조건으로 변경
    }
    else {
      talk.innerHTML = "다음에 알려줘앵!"
      key = 0; // key값을 다시 0으로 변경하여 상태 변경
    }
    return;
  }

  if(key == 2) {
    answer = value; //전역변수 answer값에 사용자의 입력을 저장
    pushMessage();
    return;
  }



  for (let i = 0; i < message.length; i++) {
    if(value.indexOf(message[i].question) >= 0) {
      typingtalk(message[i].answer);
      img.src = message[i].img;
      darkMode(value);
      return;
    }
  }

  talk.innerHTML = "그 말은 몰라요~ <br> 대답을 가르쳐 주실래요? (응 or 아니)";
  question = value; //사용자의 질문을 미리 저장
  key = 1; //조건문으로 진입하게 만들 키 값 변경
  console.log(key)
}


function pushMessage() {
  message.push({question: `${question}`, answer: `${answer}`,img: "img/coco8.png"}); //json이라는 데이터에 값을 추가하는 push함수
  talk.innerHTML = "말을 배웠다 앵!";
  key = 0; //키 값 0으로 초기화
}

function time(val) {
  let today = new Date();
  let hours = today.getHours();
  let minuites = today.getMinutes();
  let timeText = '지금은'+ hours+ '시'+ minuites + '분 이야';
  typingtalk(timeText);
  
}

function darkMode (valu) {
  if (valu.indexOf('불꺼') >= 0){
    body.classList.add('dark');
 }else {
   body.classList.remove('dark');
 }
}


//답변 타이핑
function typingtalk (va) {
  let typewriter2 = new Typewriter(talk, {
    loop: false
  });

  typewriter2
  .typeString(va)
  .pauseFor(1500)
  .start();
}

//공지사항 타이핑
function noticeTyping() {
  let typingText = '말을 걸어보세요 <br> 키워드: [ 안녕 / 이름 / 밥 / 바보 / 못생겼어 / 불꺼 / 일어나]';
  let typewriter = new Typewriter(notice, {
    loop: false
  });
    typewriter
    .typeString('앵무새가 자고있네요..')
    .pauseFor(1500)
    .deleteAll()
    .typeString(typingText)
    .pauseFor(1500)
    .start();
}


btn.addEventListener('click', textCheck );
input.addEventListener('keypress', function(e){
  if (e.code == 'Enter'){
    textCheck();
    input.value= '';
  }
});


noticeTyping();