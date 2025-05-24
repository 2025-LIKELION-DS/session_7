from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model

class SignUpForm(UserCreationForm):
    # ENTRY_YEAR_CHOICES = User.ENTRY_YEAR_CHOICES
    
    # entry_year = forms.ChoiceField(choices=ENTRY_YEAR_CHOICES, label='입학연도')
    # 입학연도는 프론트엔드 보고 구성
    
    school = forms.CharField(max_length=50, label='학교')
    email = forms.EmailField(max_length=100, label='이메일')
    nickname = forms.CharField(max_length=20, label='닉네임')

    class Meta:
        model = get_user_model()
        fields = ('school', 'email', 'nickname', 'username', 'password') # 'entry_year'


from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model

class SignUpForm(UserCreationForm):

    class Meta:
        model = get_user_model() # get_user_model() 함수를 사용해 User 모델을 불러옴
        fields = ['username', 'email', 'nickname']# User 모델의 필드 중 username, email, nickname을 사용자가 입력할 수 있도록 함 (password1, password2는 자동 생성됨)