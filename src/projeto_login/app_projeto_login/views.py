from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from .forms import LoginForm, RegisterForm

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            senha = form.cleaned_data['senha']
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                messages.error(request, "E-mail inexistente")
                return render(request, 'accounts/login.html', {'form': form})
            
            user = authenticate(request, username=user.username, password=senha)
            if user is None:
                messages.error(request, "Senha inválida")
                return render(request, 'accounts/login.html', {'form': form})
            
            login(request, user)
            return redirect('menu')
    else:
        form = LoginForm()
    return render(request, 'accounts/login.html', {'form': form})

def register_view(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            nome = form.cleaned_data['nome']
            email = form.cleaned_data['email'].lower() 
            senha = form.cleaned_data['senha']
            
            # Verifica se já existe um usuário com esse username (e-mail)
            if User.objects.filter(username=email).exists():
                form.add_error('email', "Já existe um usuário com este e-mail.")
                return render(request, 'accounts/register.html', {'form': form})

            
            # Cria o usuário
            user = User.objects.create_user(
                username=email,     
                email=email,
                password=senha,
                first_name=nome
            )
            

            messages.success(request, "Cadastro realizado com sucesso! Faça login para continuar.")
            return redirect('login')
    else:
        form = RegisterForm()
    return render(request, 'accounts/register.html', {'form': form})


def menu_view(request):
    # Busca todos os usuários cadastrados
    users = User.objects.all()
    # Envia a lista para o template
    return render(request, 'accounts/menu.html', {'users': users})

def listar_senhas(request):
    return render(request, 'accounts/list.html')

