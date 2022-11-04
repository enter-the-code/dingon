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


            ![ezgif com-gif-maker (21)](https://user-images.githubusercontent.com/84896918/199916675-35573eab-ca21-404b-bdec-84591986bbce.gif)




**게시글 리스트를 보여주는 컴포넌트 (**  `JavaScript` `mui` `pagenation` `axios`)

- 프론트 엔드
    - mui를 사용해 table을 커스터마이징한 후 백엔드에서 받아온 게시글 정보를 보여줌
    - 페이지네이션
        1. 해당 갤러리의 게시글의 총 개수를 받아옴(처음 한 번만)
        2. axios에 갤러리 및 페이지 정보를 함께 보내어 원하는 데이터를 받아와서 렌더링 함

            ![ezgif com-gif-maker (22)](https://user-images.githubusercontent.com/84896918/199916545-c314bc1f-fa46-4ce3-b691-f467ca91157f.gif)


**게시글을 보여주는 컴포넌트 (**  `JavaScript` `mui` `axios`)

- 프론트 엔드
    - 벡엔드에서 받아온 게시글 내용을 화면에 띄워줌
    - 오른쪽 상단에 조회수 추천수 덧글수도 함께 띄워줌

            ![ezgif com-gif-maker (23)](https://user-images.githubusercontent.com/84896918/199916712-c04d83f0-d911-4e93-bc2c-a7403cb41e12.gif)


**게시글작성 컴포넌트 (**  `JavaScript` `mui` `게시판 api` `quill` `axios`)

- 프론트 엔드
    - mui의 textfield를 사용하여 글의 제목을 받아옴
    - 게시판 api(quill)를 사용해 게시글을 작성하도록 만듬
    - 게시판 api의 경우 db에 gif, img 데이터를 그대로 db 저장할 경우 과부하가 커질 것을 예상하여
    - 처음 이미지를 업로드하면 벡엔드에 요청을 보내 서버내에 저장하고 경로를 반환받아 img태그로 게시글에 붙여넣는 식으로 구현
    - 게시판 api는 태그를 반환하므로 그대로 데이터베이스에 저장
        
            ![ezgif com-gif-maker-2](https://user-images.githubusercontent.com/84896918/199916740-a3c3511c-bce0-4160-b409-f8630b7cb1f4.gif)

        

**추천 기능 (**  `JavaScript` `mui` `axios`)

- 프론트 엔드
    - 추천과 비추천 기능을 mui의 버튼 컴포넌트를 사용해 꾸민후 벡엔드에 전달
    - 이미 그 글에 한번 추천한 사용자는 두번하지 못하도록 설정

            ![ezgif com-gif-maker-3](https://user-images.githubusercontent.com/84896918/199916767-a3838983-eff6-433f-8757-178ffaaa4076.gif)


개념글,일반글 **기능 (**  `JavaScript` `mui` `axios`)

- 프론트 엔드
    - 왼쪽상단에 일반일 경우 전체 리스트를 다 불러 오고 만약 개념글이라면 추천이 5개 이상인 게시글만 불러옴
            ![ezgif com-gif-maker-4](https://user-images.githubusercontent.com/84896918/199916790-47540c5f-1794-4d6b-8897-f67daf603556.gif)


검색 **기능 (**  `JavaScript` `mui` `axios`)

- 프론트 엔드
    - 검색기능을 통해 게시글의 제목에서 일치한 항목이 한개라도 있다면 리스트를 받아오도록 구현

![ezgif com-gif-maker-5](https://user-images.githubusercontent.com/84896918/199916909-16f19505-9900-4b23-a1ba-dc9018ded2fd.gif)



## 🖌️ 예상 이슈

- 동시 접속자가 100명 이상일 경우 트레픽이 몰려 접속장애 혹은 접속 지연이 생길수 있음.
- AWS에 정보 전송이 과도할 경우 CPU사용량이 너무 커져 접속이 불가능한 상태가 될수 있음.
