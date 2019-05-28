!function () {
    var view = document.querySelector('section.message')
    var model = {
        init: function () {
            var APP_ID = 'NnEiAumXxdHop6QNEgU15OhO-gzGzoHsz';
            var APP_KEY = 'eElfxcr6rtpBg3hoYMgi64OJ';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        fetch: function(){
            var query = new AV.Query('Message');
            return query.find()
        },
        save: function(name, content){
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({
                'name': name,
                'content': content
            })
        }
    }
    var controller = {
        view: null,
        messageList: null,
        init: function (view,model) {
            this.view = view
            this.model = model
          
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },

        loadMessages: function () {
            this.model.fetch().then(
                (messages) => {
                    let array = messages.map((item => item.attributes))
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                        this.messageList.appendChild(li)
                    })
                }
            )
        },
        bindEvents: function () {
            this.form.addEventListener('submit', function (e) {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name.content).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
                console.log(obiect)
            })
        }
    }
    controller.init(view,model)
}.call()

