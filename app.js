const app = Vue.createApp({
    data (){
        return {
            firstName : 'Mohon',
            lastName : 'Sarker',
            email: 'morshedmohon4@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/med/women/18.jpg',
        }
    }
})

app.mount('#app')