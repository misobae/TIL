# Git 명령어
명령어 | 의미
--|--
git init | 저장소 생성
git clone git_path | 원격 저장소로부터 프로젝트 복제
git remote | 현재 프로젝트에 등록된 원격 저장소 확인
git remote add remote_name branch_name | 원격 저장소 추가
git config | git 사용 환경 설정 확인 및 변경
git add file_path | 해당 파일을 Staging Area로 이동
git add . | 현재 폴더의 모든 파일 스테이징
git status | 파일 상태 확인
git commit -m "커밋 메세지" | Staging Area에 있는 파일의 변경사항을 저장소에 기록
git log | 모든 커밋 로그 확인
git push remote_name branch_name | 로컬 저장소의 파일 변경 이력을 원격 저장소로 전송
git branch branch_name | 브랜치 생성
git checkout branch_name | 현재 브랜치에서 명령한 브랜치로 이동
git merge branch_name | 브랜치 병합