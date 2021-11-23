# 앵무새 ChatBot
> 자바스크립트를 이용해 명령에 해당하는 결과가 나오는 간단한 채팅을 구현하였습니다.

![chatbot00](https://user-images.githubusercontent.com/89460582/142963791-4a5cff01-28fd-4d34-aada-7bf5ef4c5935.gif)


[1. 타이핑 효과구현](#플러그인을-이용한-타이핑-구현)  
[2. JSON 객체배열을 이용한 명령모음](#JSON객체배열을-이용한-명령모음)  
[3. 단어필터링](#단어-필터링)  
[4. 대답배우기](#대답-배우기)  
[5. 불끄기, 불켜기](#불끄기,-불켜기)

---
# 플러그인을 이용한 타이핑 구현
[TypewriterJS](https://safi.me.uk/typewriterjs/) 플러그인을 이용하여 글자 타이핑 효과를 구현하였습니다.

<img src="https://user-images.githubusercontent.com/89460582/142963893-5ce018c0-f83c-46cd-85fb-8314a21f27b7.gif" width="400">

---
# `JSON`객체배열을 이용한 명령모음  
`JSON`객체배열을 만들어, 명령과 대답에 대한 객체들을 나열하였습니다.
```javascript
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

``` 

---
# 단어 필터링
키워드에 있는 단어가 포함되어 있으면 명령을 인식해 대답이 출력됩니다.
```javascript
for (let i = 0; i < message.length; i++) {
    if(value.indexOf(message[i].question) >= 0) {
      typingtalk(message[i].answer);
      img.src = message[i].img;
      return;
    }
  }
```
조건문으로 입력한 `input`의 `value`값을 `indexOf()`메소드를 이용하여 `for`문으로 검사합니다.  
`value`값이 위의 객체배열과 같지 않을 시 음수 값을 리턴합니다.  
이 방법으로 객체 배열에 있는 단어를 필터링을 하였습니다.

<img src="https://user-images.githubusercontent.com/89460582/142964358-84f95e25-79a1-4f5f-bbed-6755dd0c7703.gif" width="300">

---

# 대답 배우기
객체배열에 해당하는 단어가 없으면 질문에 해당하는 답변을 배우도록 구현하였습니다.

<img src="https://user-images.githubusercontent.com/89460582/142967448-ec74964f-13d8-4dab-8770-5698d23f61e1.gif" width="300" >

```javascript
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

  talk.innerHTML = "그 말은 몰라요~ <br> 대답을 가르쳐 주실래요? (응 or 아니)";
  question = value; //사용자의 질문을 미리 저장
  key = 1; //조건문으로 진입하게 만들 키 값 변경
  console.log(key)
}
```

# 불끄기
'불꺼'라는 단어가 입력되면 `class`를 붙여 스타일이 적용되도록 구현하였습니다.

![chatbot04](https://user-images.githubusercontent.com/89460582/142969022-31b41dce-a8ec-4920-8477-ce5dc35700db.gif)

```javascript
function darkMode (valu) {
  if (valu.indexOf('불꺼') >= 0){
    body.classList.add('dark');
 }else {
   body.classList.remove('dark');
 }
}
```