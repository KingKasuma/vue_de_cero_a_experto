const app = Vue.createApp({
    // template: `
    // <h1> Hola mundo </h1>
    // <p> Desde app.js </p>
    // `

    // estado de la aplicacion
    data() {
        return {
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    },
    //metodos de la aplicacion
    methods: {
        changeQuote() {
            console.log('Hola Mundo')
            this.author = 'Fernando Herrera'

            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')