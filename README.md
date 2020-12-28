# IRIS-Design-Guide

[IRIS-Design-Core](https://github.com/mobigen/IRIS-Design-Core/tree/main) 가이드를 확인할 수 있는 저장소

<<<<<<< HEAD
작업 설정은 IRIS-Design-Product 저장소의 [문서](https://github.com/mobigen/IRIS-Design-Product/blob/main/README.md)에서 확인해주세요 😉
=======
## 작업 방법

IRIS-Design-Core 에는 HTML view가 없습니다.
초기 작업 편의성을 위해 수정된 코드를 반영할 수 있는 subtree로 core 소스를 관리합니다.

IRIS-Design-Product 저장소의 [README](https://github.com/mobigen/IRIS-Design-Product/blob/main/README.md)를 먼저 셋팅 해주세요.
### 작업 순서
1. 작업 할 저장소(IRIS-Design-Product, IDP) 에서 서브 트리 (IRIS-Design-Core, IDC) 변경사항 받아오기
   ```bash
   git subtree pull -P src/core-style design-core-upstrea main

   # 위 명령어를 수행하는 npm 스크립트
   npm run pull
   ```
2. 작업용 상위 저장소에서 서브트리의 코드를 수정한 경우
   - 상위 저장소에 커밋 남기고 원격 저장소에 push 하기
     ```bash
     git add <file-path>
     git commit -m"commit-message"
     git push origin <branch-name>
     ```
     이 후, 상위 저장소에 PR요청 혹은 upstream에 push하는 등 작업자들에게 코드를 공유해줍니다.
   - 서브트리에 push 하기
   ```bash
   git subtree push -P src/core-style design-core-origin main

   # 위 명령어를 수행하는 npm 스크립트
   npm run push
   ```
   - 서브트리의 upstream에 PR하기

upstream에 변경 내역이 잘 **병합 되고 나면**, 다시 1번 과정을 수행한 후 작업 합니다.
>>>>>>> 1c386aa4d76f6d7a66e079472e34708c7bc0bbb2
