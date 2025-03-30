from django import forms
from django.contrib.auth.models import User
import re

class LoginForm(forms.Form):
    email = forms.EmailField(label='E-mail', widget=forms.EmailInput(attrs={'placeholder': 'E-mail'}))
    senha = forms.CharField(label='Senha', widget=forms.PasswordInput(attrs={'placeholder': 'Senha'}))

    def clean(self):
        cleaned_data = super().clean()
        email = cleaned_data.get('email')
        senha = cleaned_data.get('senha')

        if not email:
            raise forms.ValidationError("O campo e-mail é obrigatório.")
        if not senha:
            raise forms.ValidationError("O campo senha é obrigatório.")

        return cleaned_data

class RegisterForm(forms.Form):
    nome = forms.CharField(label='Nome', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Seu nome'}))
    email = forms.EmailField(label='E-mail', widget=forms.EmailInput(attrs={'placeholder': 'Seu e-mail'}))
    senha = forms.CharField(label='Senha', widget=forms.PasswordInput(attrs={'placeholder': 'Senha'}))
    confirmar_senha = forms.CharField(label='Confirmar Senha', widget=forms.PasswordInput(attrs={'placeholder': 'Confirmar senha'}))

    def clean_nome(self):
        nome = self.cleaned_data.get('nome')
        if not re.match(r'^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$', nome):
            raise forms.ValidationError("O nome deve conter apenas letras.")
        return nome

    def clean_senha(self):
        senha = self.cleaned_data.get('senha')
        # Pelo menos 8 caracteres, 1 letra maiúscula, 1 número e 1 caractere especial
        if not re.match(r'^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$', senha):
            raise forms.ValidationError("A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula, 1 número e 1 caractere especial.")
        return senha

    def clean(self):
        cleaned_data = super().clean()
        senha = cleaned_data.get('senha')
        confirmar_senha = cleaned_data.get('confirmar_senha')

        if senha and confirmar_senha and senha != confirmar_senha:
            self.add_error('confirmar_senha', "As senhas não coincidem.")
        return cleaned_data
