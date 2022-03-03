# partials

번들링 된 HTML 문서(`/views/index.html`) 가독성 향상을 위한 작성 규칙입니다.

1. 문서 시작과 끝에 줄바꿈을 추가합니다.
2. partials 파일의 첫 부분에 해당하는 부분의 주석을 추가합니다.

  옳지 않은 사례:

  ```html
  <div>
    ..
  </div>
  ```

  옳은 사례:

  ```html

  <!-->side-nav<-->
  <div>
    ..
  </div>

  ```
