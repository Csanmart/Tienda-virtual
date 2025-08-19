export default class UserService {
    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }

    async getUsuarios(){
        const res = await fetch(this.apiUrl);
        return res.json();
    }

    async addUsuarios(usuario){
        const res = await fetch(this.apiUrl, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(usuario)
        });
        return res.json();
    }

    async updateUsuario(id, usuario){
        const res = await fetch(`${this.apiUrl}/${id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(usuario)
        })
        return res.json();
    }
}