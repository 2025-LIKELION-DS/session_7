# [7차 세션] 에브리타임 프론트엔드-백엔드 연동 실습

## ✅ Django 관련 명령어
- 가상환경 생성
```
python -m venv myvenv
```

- 가상환경 실행
```
source myvenv/scripts/activate
```

- 장고 설치
```
pip install django
```

- 모델 반영 및 장고 서버 실행 (반드시 프로젝트 폴더 내부에서 명령어 사용하기)
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```