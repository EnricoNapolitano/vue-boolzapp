console.log('ok ' + Vue);

const dateTime = luxon.DateTime;

const app = Vue.createApp({
    data(){
        return {
            search: '',
            newMsg: '',
            currIndex: 0,
            user: {
                name: 'Enrico',
                avatar: '_io'
            },
            contacts: [
                {
                  name: 'Michele',
                  avatar: '_1',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Fabio',
                  avatar: '_2',
                  visible: true,
                  messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                  },
                  {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                  },
                  {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Samuele',
                  avatar: '_3',
                  visible: true,
                  messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Luisa',
                  avatar: '_4',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                  }
                  ],
                },
            ],
        }
    },
    computed: {
        currContact(){
            return this.contacts[this.currIndex];
        },
        currAvatar(){
            return this.currContact.avatar;
        },
        currContactName(){
            return this.currContact.name;
        },
        currMessages(){
            return this.currContact.messages
        },
        newMsgObj() {
            return {date: this.getCurrTime(), text: this.newMsg, status: 'sent'}
        },
        contactAnswer(){
            return {date: this.getCurrTime(), text: 'ok', status: 'received'}
        }
    },
    methods: {
        setCurrIndex(index) {
            this.currIndex = index;
        },
        sendMessage(){
            if(this.newMsg){
                this.currMessages.push(this.newMsgObj);
                this.newMsg = '';
                setTimeout(()=>{
                    this.currMessages.push(this.contactAnswer);
                }, 1000);
            }
        },
        getCurrTime(){
            return dateTime.now().setLocale('it').toLocaleString(dateTime.DATETIME_SHORT);
        },
        filterContacts(){
            return this.contacts.forEach((contact) =>{
                if(!contact.name.toLowerCase().includes(this.search.toLowerCase())){
                    contact.visible = false;
                } 
                if(!this.search) {
                    this.contacts.forEach((contact) => contact.visible = true)
                }
            });
        }
    },
});

app.mount('#ui');