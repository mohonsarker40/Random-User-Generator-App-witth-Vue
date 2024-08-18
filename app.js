const app = Vue.createApp({
    data (){
        return {
            firstName : 'Mohon',
            lastName : 'Sarker',
            email: 'morshedmohon4@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/med/men/18.jpg',
        }
    },
    methods: {
        async getUser (){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            console.log(results)

            this.firstName = 'Voronika'
            this.lastName = 'Clark'
            this.email = 'voronika@gmail.com'
            this.gender = 'female'
            this.picture = 'https://randomuser.me/api/portraits/med/women/18.jpg'
        }
    }

})

app.mount('#app')