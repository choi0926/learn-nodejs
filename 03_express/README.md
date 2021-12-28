npmjs.com

- 라이브러리명 옆에 DT면 타입스크립트 전용 라이브러리도 설치해줘야한다.(TS면 따로 설치해주지않아도된다.)

라이브러리 삭제

- npm rm 라이브러리

express setting

- 1. express 설치

  - app.set() 글로벌 변수(조심해서 사용)

- 2. nodemon 설치(저장시 자동 재실행 라이브러리)
     ts-node -> nodemon

- 3. morgan 설치(로그 라이브러리);
  - app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
    - 개발 모드 : dev
    - 프로덕션 모드 : combined

* eslint disable

- // eslint-disable-next-line no-unused-vars

* ETag

- express에서 응답 헤더로 ETag 발급
- ETag 과 요청 헤더에 If-None-Match이 같으면 (304) 캐싱처리
