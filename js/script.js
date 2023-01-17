console.log('ok ' + Vue);

const dateTime = luxon.DateTime;

const app = Vue.createApp({
    data(){
        return {
            emojis: ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"],
            show: false,
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
                    messages: [
                    {
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
                    messages: [
                    {
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
                    messages: [
                    {
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
                    messages: [
                    {
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
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        text: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        text: 'OK!!',
                        status: 'received'
                    }
                    ],
                }
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
    },
    methods: {
        setCurrIndex(index) {
            this.currIndex = index;
        },
        AddMsg(text, status){
            //create a message object suitable for user and bot
            const msgObj = {date: this.getCurrTime(), text: text, status: status}
            return this.currMessages.push(msgObj);
        },
        sendMessage(){
            if(this.newMsg){
                
                this.AddMsg(this.newMsg, 'sent' );
                this.newMsg = ''; // clean input message
                this.show = false; // it closes the emoji's window

                //bot answers
                setTimeout(()=>{
                    this.AddMsg('ok', 'received')
                }, 1000);
            }
        },
        getCurrTime(){
            return dateTime.now().setLocale('it').toLocaleString(dateTime.DATETIME_SHORT);
        },
        filterContacts(){
            return this.contacts.forEach((contact) =>{
                contact.visible = contact.name.toLowerCase().includes(this.search.toLowerCase())
            });
        },
        getMsgMenu(index){
            this.currMessages[index].isClicked = !this.currMessages[index].isClicked;
        },
        deleteMsg(index){
            this.currMessages[index].date = '';
            this.currMessages[index].text = 'Questo messaggio è stato cancellato';
        },
        getLastMsg(index) {
            const lastChatMsg = this.contacts[index].messages[this.contacts[index].messages.length - 1].text;
            return lastChatMsg.length < 20 ? lastChatMsg.slice(0, 20) : lastChatMsg.slice(0, 20)  + ' ...' ;
        },
        getLastMsgDate(index) {
            const lastChatDate = this.contacts[index].messages[this.contacts[index].messages.length - 1].date;
            return lastChatDate;
        },
        showEmoji(){
            this.show = !this.show;
        },
        getEmoji(index){
            this.newMsg += this.emojis[index];
        }
    },
});

app.mount('#ui');

