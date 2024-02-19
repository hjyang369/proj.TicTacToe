# 프로젝트 소개
- tic-tac-toe 게임 구현
- 개발 인원 : 양회진(1인)
- 개발 기간 : 2024.2.15 ~ 2023.2.19 (5일)

## 1. 프로젝트 설치 및 실행 방법

```
git clone https://github.com/hjyang369/proj.TicTacToe.git
npm install
npm start
```

## 2. 기술 스택
- React.js
- TypeScript (타입에러를 미연에 방지하기 위해 사용하였습니다.)
- 상태관리 : Jotai (유저가 고른 옵션을 다른 페이지에서도 적용하기 위해, 가볍고 간편한 상태관리 라이브러리인 Jotai 사용하였습니다.)
- CSS : styled-component (유저가 고른 옵션에 따라 동적으로 css를 변경하기 위해 사용하였습니다.)
  
## 3. 컴포넌트를 만들때 고려한 사항
- 아토믹 디자인 패턴
   - 다른 컴포넌트에서 재사용하는지, 반복되는 UI인지 고려해 공통 텀포넌트로 제작하였습니다.
   - 확장성을 고려하여 최대한 재사용할 수 있도록 분리하여 제작하였습니다.
 
## 4. 폴더 구조
- 확장자 분리 기준
  - 타입스크립트+JSX인 경우 index.tsx로 제작
  - 타입스크립트만 사용하는 경우 파일명.ts로 제작
- 타입의 경우 types 폴더 내 type.ts에서 관리
- 상수데이터의 경우 modules 폴더 내 constants.ts에서 관리
- 스타일의 경우 style.ts로 제작
- 전역 상태관리의 경우 store 폴더 내 atom.ts에서 관리
<details>
  <summary>폴더 구조 자세히 보기</summary>

```
📦src
 ┣ 📂components
 ┃ ┣ 📂board
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.ts
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂select
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂title
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┗ 📂toggle
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┗ 📂square
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.ts
 ┣ 📂hooks
 ┃ ┗ 📜useInputValue.ts
 ┣ 📂modules
 ┃ ┣ 📜constants.ts
 ┃ ┗ 📜function.ts
 ┣ 📂pages
 ┃ ┣ 📂game
 ┃ ┃ ┣ 📂player
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.ts
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.ts
 ┃ ┣ 📂readiness
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.ts
 ┃ ┗ 📂result
 ┃ ┃ ┣ 📂board
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂square
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.ts
 ┣ 📂store
 ┃ ┗ 📜atom.ts
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┗ 📜type.ts
 ┣ 📜Router.tsx
 ┗ 📜index.tsx
```

  </div>
</details>




# 구현사항

## 0. 레이아웃 및 반응형 웹
코드 참고 :

- UI에 따라 IPhone 14 PRO Max 또는 IPad air를 기준으로 미디어 쿼리 적용하여 반응형 웹 구현하였습니다.
- 일관된 UI를 보여주기 위해 button, title 등 공통 컴포넌트 적용하였습니다.
  
## 1. 메인 페이지
코드 참고 :

- [x] 게임 시작 버튼 클릭 시 설정 페이지로 이동합니다.
- [x] 저장된 게임 버튼 클릭 시 결과 페이지로 이동합니다.

<img width="300" alt="스크린샷 2024-02-19 오후 7 57 54" src="https://github.com/hjyang369/proj.TicTacToe/assets/125977702/d30135df-96b9-45d4-93b5-83b6217dd6e6">
<img width="600" alt="스크린샷 2024-02-19 오후 8 23 53" src="https://github.com/hjyang369/proj.TicTacToe/assets/125977702/e2fe1c52-f92b-4372-98f6-78d35acd942e">


## 2. 설정 페이지
코드 참고 :

- [x] 게임판의 크기( 3x3 ~ 9x9 )를 설정 할 수 있습니다.
- [x] 승리 조건( 최소: 3, 최대: 9 )을 설정 할 수 있습니다.
- [x] 각 플레이어는 자신의 마크( X, O, ♢, ♡, ♧, ♤, ▵, ◻︎ )를 설정 할 수 있습니다.
- [x] 각 플레이어는 자신의 마크의 색( 빨강색, 주황색, 노랑색, 초록색, 파랑색, 남색, 보라색, 핑크색 )을 설정 할 수 있습니다.
- [x] 기본 값은 플레이어1은 X - 파랑, 플레이어2는 O - 빨강 입니다.
- [x] 먼저 마크를 놓는 플레이어를 설정할 수 있습니다.
- [x] 기본값은 랜덤입니다.
- [x] 시작 버튼 클릭 시 게임 페이지로 이동합니다.

<img width="300" alt="스크린샷 2024-02-19 오후 7 58 06" src="https://github.com/hjyang369/proj.TicTacToe/assets/125977702/52261709-ac2e-4dac-bbad-91f9d4b0bac5">
<img width="600" alt="스크린샷 2024-02-19 오후 8 24 01" src="https://github.com/hjyang369/proj.TicTacToe/assets/125977702/e7de2ddf-3462-4de1-be43-d52694761142">


## 3. 게임 페이지
코드 참고 :

- [x] 두 플레이어에 대한 정보(마크, 마크색, 남은 무르기 횟수)가 표시됩니다.
- [x] 각 플레이어는 경기가 시작되었을 때부터 종료되기 전까지 무르기를 최대 3번까지 할 수 있습니다.
- [x] 무르기 버튼을 클릭 시 마지막 마크가 하나 삭제됩니다.
- [x] 현재 마크를 놓아야하는 플레이어를 중앙 상단에서 보여줍니다.
- [x] 어느 한 플레이어가 승리조건을 만족하거나 무승부가 되면 경기는 종료됩니다.
- [x] 게임 시작 전 ~ 중에는 메인페이지로 이동할 수 있는 버튼이 있습니다.
- [x] 게임 종료 후에는 게임을 저장하며 결과 페이지로 이동할 수 있는 버튼이 있습니다.

<img width="300" alt="스크린샷 2024-02-19 오후 7 58 15" src="https://github.com/hjyang369/proj.TicTacToe/assets/125977702/67bc3d04-f144-4012-8558-683af3b6d38a">
<img width="300" alt="스크린샷 2024-02-19 오후 8 29 03" src="https://github.com/hjyang369/proj.TicTacToe/assets/125977702/1dd3be0a-0297-493e-bbed-144fce2f4997">
<img width="600" alt="스크린샷 2024-02-19 오후 8 24 12" src="https://github.com/hjyang369/proj.TicTacToe/assets/125977702/03cf5c1d-7c08-4d20-b8cd-a64f02d0e738">


## 4. 결과 페이지
코드 참고 :

- [x] 현재 기기에서 이전에 했던 저장된 게임의 목록을 확인할 수 있습니다.
- [x] 게임을 종료했던 날짜와 시간이 리스트로 보여집니다.
- [x] 날짜 버튼을 클릭 시 그 당시 게임의 결과를 보여줍니다.
- [x] 게임의 결과는 승자, 놓여진 마크, 마크가 놓여진 순서를 보여줍니다.
- [x] 게임 다시 시작하기 버튼 클릭 시 메인 페이지로 이동합니다.

<img width="300" alt="스크린샷 2024-02-19 오후 7 58 32" src="https://github.com/hjyang369/proj.TicTacToe/assets/125977702/ae97230f-89f8-4e68-b95a-1fa12a3d06c3">
<img width="300" alt="스크린샷 2024-02-19 오후 8 29 21" src="https://github.com/hjyang369/proj.TicTacToe/assets/125977702/e62c7031-99a9-4339-bc85-3cd62fbc1ff7">
<img width="600" alt="스크린샷 2024-02-19 오후 8 25 30" src="https://github.com/hjyang369/proj.TicTacToe/assets/125977702/993441c5-922d-4fe3-b320-0482f1889bb4">


