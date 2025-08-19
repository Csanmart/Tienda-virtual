export default class AuthService{
    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }

    async registro(usuario){
        const res = await fetch(`${this.apiUrl}/Registro`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(usuario)
        })
        return res.json();
    }

    async login(credencials){
        const res = await fetch(`${this.apiUrl}/login`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(credencials),
        });
        const data = await res.json();
        
        if(data.token){
            localStorage.setItem('usuario', JSON.stringify(data.usuario))
            localStorage.setItem("token", data.token);
        }
        
        return data
    }

    logout(){
        localStorage.removeItem("token");
    }
    
    getToken(){
        return localStorage.getItem("token");
    }

    isAuthenticated(){
        return !!this.getToken();
    }

    getUsuario(){
        const usuario = localStorage.getItem('usuario');
        return usuario ? JSON.parse(usuario): null;
    }

    isAdmin(){
        const usuario = this.getUsuario()
        return usuario ? usuario.isAdmin: false;
    }

    isCliente(){
        const usuario = this.getUsuario();
        return usuario ? usuario.isAdmin: false
    }

    redirecionByRole(){
        const usuario = this.getUsuario();
        if(!usuario) return;
        if(usuario.isAdmin){
            window.location.href = 'admin.html';
        }else{
            window.location.href = 'cliente.html';
        }
    }
}