let users = [];

const componenteLogin = {
    template: `
        <div class="componente">
            <h1>Entrar</h1>
            <form @submit.prevent="login">
                <input type="text" v-model="usuário" placeholder="Usuário">
                <input type="password" v-model="senha" placeholder="Senha">
                <button type="submit">Entrar</button>
                <p v-if="loginError" style="color: red;">{{ loginError }}</p>
            </form>
        </div>
    `,
    data() {
        return {
            usuário: '',
            senha: '',
            loginError: ''
        }
    },
    methods: {
        login() {
            if (this.usuário === 'user' && this.senha === 'password') {
                console.log('Login efetuado');
            } else {
                this.loginError = 'Ocorreu um erro. Por favor, tente novamente.';
            }
        }
    }
}

const componenteSignIn = {
    template: `
        <div class="componente">
            <h1>Cadastrar-se</h1>
            <form @submit.prevent="signIn">
                <input type="text" v-model="usuário" placeholder="Usuário">
                <input type="password" v-model="senha" placeholder="Senha">
                <button type="submit">Cadastrar-se</button>
            </form>
        </div>
    `,
    data() {
        return {
            usuário: '',
            senha: ''
        }
    },
    methods: {
        signIn() {
            console.log('Usuário:', this.usuário);
            console.log('Senha:', this.senha);
            users.push({ usuário: this.usuário, senha: this.senha });
            console.log('Usuários cadastrados:', users);
        }
    }
}

const { createApp } = Vue;

createApp({
    data() {
        return {
            componenteAtual: "componenteLogin"
        }
    },
    methods: {
        alterarComponentes() {
            this.componenteAtual = (this.componenteAtual === "componenteLogin") ? "componenteSignIn" : "componenteLogin";
        }
    },
    components: {
        componenteLogin,
        componenteSignIn
    }
}).mount("#app");
