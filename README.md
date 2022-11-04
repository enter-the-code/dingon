# dingon


## 👩‍🏫PROJECT 소개

---

부스트캠프를 함께한 동료들과 함께 할 수 있는 커뮤니티 제작

🗓️ **작업기간** : 2022.10.17 → 2022.10.29

👨‍💻 **투입인원** : 5명

📒 **주요업무** 

- 기획 및 react 컴포넌트 뼈대 구성
- 게시판 api를 사용해 글작성 컴포넌트 구현
- 프론트 깃 관리
- rest api로 벡엔드와 통신
- 게시글 내용을 보여주는 컴포넌트 구현
- 게시글 리스트 컴포넌트를 mui를 사용하여 구현
- aws에 nginx를 이용하여 배포
- 회원가입 구현

🌱 **스킬 및 사용툴**

`HTML5` `css3 reactjs`  `git && github`  `aws` `JavaScript` `Nodejs` `visualStudioCode` `nginx`

`axios` `mui`

### 구현 기능

**회원가입** **구현 (**  `JavaScript` `mui` `axios`)

- 프론트 엔드
    - 회원가입 클릭시 회원가입 모달을 띄우도록 자바스크립트로 구현
    - 유효성검사(reg_exp) 및 중복검사(axios)를 통해 회원가입의 고유성을 높힘
    - 검사를 통과하지 못하면 회원가입이 되지못하도록 버튼을 disabled로 설정한후 상태변화 라이브러리를 통해 변화

<center>![ezgif com-gif-maker (21)](https://user-images.githubusercontent.com/84896918/199915664-7eaaf64a-cdf9-4921-93ed-e8a0e84d4b99.gif)</center>


**게시글 리스트를 보여주는 컴포넌트 (**  `JavaScript` `mui` `pagenation` `axios`)

- 프론트 엔드
    - mui를 사용해 table을 커스터마이징한 후 백엔드에서 받아온 게시글 정보를 보여줌
    - 페이지네이션
        1. 해당 갤러리의 게시글의 총 개수를 받아옴(처음 한 번만)
        2. axios에 갤러리 및 페이지 정보를 함께 보내어 원하는 데이터를 받아와서 렌더링 함

![ezgif.com-gif-maker (22).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b5d9a545-ea50-4d07-a839-4d32bb3886e8/ezgif.com-gif-maker_(22).gif)

**게시글을 보여주는 컴포넌트 (**  `JavaScript` `mui` `axios`)

- 프론트 엔드
    - 벡엔드에서 받아온 게시글 내용을 화면에 띄워줌
    - 오른쪽 상단에 조회수 추천수 덧글수도 함께 띄워줌

![ezgif.com-gif-maker (23).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f8e9c252-ea3a-4807-92af-399576d6a166/ezgif.com-gif-maker_(23).gif)

**게시글작성 컴포넌트 (**  `JavaScript` `mui` `게시판 api` `quill` `axios`)

- 프론트 엔드
    - mui의 textfield를 사용하여 글의 제목을 받아옴
    - 게시판 api(quill)를 사용해 게시글을 작성하도록 만듬
    - 게시판 api의 경우 db에 gif, img 데이터를 그대로 db 저장할 경우 과부하가 커질 것을 예상하여
    - 처음 이미지를 업로드하면 벡엔드에 요청을 보내 서버내에 저장하고 경로를 반환받아 img태그로 게시글에 붙여넣는 식으로 구현
    - 게시판 api는 태그를 반환하므로 그대로 데이터베이스에 저장
        
        ![ezgif.com-gif-maker-5.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b51115a6-7c88-4019-8d66-9f99e431444c/ezgif.com-gif-maker-5.gif)
        

**추천 기능 (**  `JavaScript` `mui` `axios`)

- 프론트 엔드
    - 추천과 비추천 기능을 mui의 버튼 컴포넌트를 사용해 꾸민후 벡엔드에 전달
    - 이미 그 글에 한번 추천한 사용자는 두번하지 못하도록 설정

![ezgif.com-gif-maker-2.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26b49f83-5b94-4070-8b84-2be22c36c4a9/ezgif.com-gif-maker-2.gif)

개념글,일반글 **기능 (**  `JavaScript` `mui` `axios`)

- 프론트 엔드
    - 왼쪽상단에 일반일 경우 전체 리스트를 다 불러 오고 만약 개념글이라면 추천이 5개 이상인 게시글만 불러옴

![ezgif.com-gif-maker-3.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2da16ddd-ae80-4483-b946-5becb2940dc8/ezgif.com-gif-maker-3.gif)

검색 **기능 (**  `JavaScript` `mui` `axios`)

- 프론트 엔드
    - 검색기능을 통해 게시글의 제목에서 일치한 항목이 한개라도 있다면 리스트를 받아오도록 구현

![ezgif.com-gif-maker-4.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7d1dca2f-4c2a-4d8a-b29b-1a24d2dc1739/ezgif.com-gif-maker-4.gif)

## 🖌️ 예상 이슈

- 동시 접속자가 100명 이상일 경우 트레픽이 몰려 접속장애 혹은 접속 지연이 생길수 있음.
- AWS에 정보 전송이 과도할 경우 CPU사용량이 너무 커져 접속이 불가능한 상태가 될수 있음.
