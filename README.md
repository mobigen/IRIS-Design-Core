# IRIS-Design-Product

IRIS-Design-Core를 포함하는 상위 저장소

## 작업 방법
[IRIS-Design-Core](https://github.com/mobigen/IRIS-Design-Core)를 subtree로 지정하는 작업이 필요합니다.
### Subtree 설정

1. IDC(IRIS-Design-Core) 저장소를 원격 저장소로 등록합니다. 이 때, push와 pull을 할 수 있도록 origin과 upstream 저장소 2개 등록이 필요합니다
   ```bash
   $ git remote add core-origin https://github.com/<본인계정>/IRIS-Design-Core
   $ git remote add core-upstream https://github.com/mobigen/IRIS-Design-Core
   ``` 
2. IDC 의 `setting` 브랜치를 Subtree로 등록합니다
   `setting` 브랜치는 초기 웹팩 설정 등을 위한 임시 브랜치입니다. 추후 개발 진행시 `dev` 브랜치로 변경이 필요합니다.
   ```bash
   $ git subtree add -P src/core-style https://github.com/mobigen/IRIS-Design-Core.git main
   ```

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
   git subtree push -P src/core-style design-core-origin master

   # 위 명령어를 수행하는 npm 스크립트
   npm run push
   ```
   - 서브트리의 upstream에 PR하기

upstream에 변경 내역이 잘 **병합 되고 나면**, 다시 1번 과정을 수행한 후 작업 합니다.