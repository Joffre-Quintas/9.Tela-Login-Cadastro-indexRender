// localStorage.clear()
const login = document.getElementById('userLogin')
const password = document.getElementById('password')
const repassword = document.getElementById('repassword')
const btnSubmit = document.querySelector('#btnSubmit')
const btnLogin = document.querySelector('#btnLogin')
const container = document.querySelector('.container')
let user = []

//Medindo a força da senha
function strengthMeter(inputPassword){
    let i = 0;
    if(inputPassword.length > 6){
        i++
    }
    if(inputPassword.length >= 10){
        i++
    }
    if(/[A-Z]/.test(inputPassword)){
        i++
    }
    if(/[0-9]/.test(inputPassword)){
        i++
    }
    if(/[A-Za-z0-8]/.test(inputPassword)){
        i++
    }
    console.log(i)
    return i;
}
//Escutando a tecla digitada no campo e validando a sua força com o callback da função acima
password.addEventListener('keyup',(e)=>{
    const inputPassword = password.value
    let strength = strengthMeter(inputPassword)
    if(strength == 0){
        container.classList.remove('weak1')
        container.classList.remove('weak2')
        container.classList.remove('medium')
        container.classList.remove('strong')
    }else if(strength <= 2){
        container.classList.add('weak1')
        container.classList.remove('weak2')
        container.classList.remove('medium')
        container.classList.remove('strong')
    }else if(strength == 3){
        container.classList.remove('weak1')
        container.classList.add('weak2')
        container.classList.remove('medium')
        container.classList.remove('strong')
    }else if(strength == 4){
        container.classList.remove('weak1')
        container.classList.remove('weak2')
        container.classList.add('medium')
        container.classList.remove('strong')
    }else if(strength == 5){
        container.classList.remove('weak1')
        container.classList.remove('weak2')
        container.classList.remove('medium')
        container.classList.add('strong')
    }
})

//Após a validação do preenchimento dos campos o registo é feito ou n atrav´s do botão registrar
btnSubmit.addEventListener('click', register = (e) =>{
    // e.preventDefault()
    let inputLogin = login.value
    let inputPassword = password.value
    let inputRepassword = repassword.value
    if(inputPassword === inputRepassword){
        user.push({'login':inputLogin, 'senha':inputRepassword})
        localStorage.setItem('user', JSON.stringify(user))
        alert('Cadastrado com sucesso!')
    }else{
        e.preventDefault()
        alert('As senhas não são iguais! Por favor verifique os dois campos')
    }
})

//Escutar o botão de login, validar as informações, buscar no localstorage e realizar o login
const validationUser = (e) =>{
    // e.preventDefault()
    const inputLogin = login.value.toLowerCase()
    const inputPassword = password.value
    currentUsers = localStorage.getItem('user')
    user = JSON.parse(currentUsers)
    console.log(user)

    let index = user.findIndex(item => item.login === inputLogin && item.senha === inputPassword)
    console.log(index)
    if(index !== -1){
        e.preventDefault()
        alert('Login realizado com sucesso!');
        window.location.assign('https://gamestorrent-48c05.web.app');
        return user[index];
    }else{
        e.preventDefault()
        alert('Usário e senha não correspondem, por favor verifique os campos.')
    }    
}
 


btnLogin.addEventListener('click', validationUser)