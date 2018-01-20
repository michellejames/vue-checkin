"use strict";

console.log(md5("shellyjames90@yahoo.com".trim().toLowerCase()));

var app = new Vue({
	el: "#app",
	data: {
		people: [
		{
			name: "Shelly",
			email: "shelljames90@yahoo.com",
			time: Date.now(),
			since: 0,
			image: 'https://www.gravatar.com/avatar/',
		},
		{
			name: "Spenser",
			email: "hubby@soon.com",
			time: Date.now(),
			since: 0,
			image: 'https://www.gravatar.com/avatar/',
		},
		{
			name: "Sydney",
			email: "please@sleepin.com",
			time: Date.now(),
			since: 0,
			image: 'https://www.gravatar.com/avatar/',
		},
		],
		enteredName: "",
		enteredEmail: "",
	},
	methods: {
		updateSinceValues: function () {
			this.people.forEach(person => {
				person.since = Math.round((Date.now() - person.time)/1000/60);
			});
		},
		submitPerson: function (){
			if (!this.enteredName || !this.enteredEmail){
				return;
			}
			console.log("Person submitted!");
			this.people.unshift({
				name: this.enteredName,
				email: this.enteredEmail,
				time: Date.now(),
				since: 0,
				image: 'https://www.gravatar.com/avatar/' + md5(this.enteredEmail),
			})

			if(this.people.length > 4) {
				this.people.pop();
			}

			this.enteredName = "";
			this.enteredEmail = "";
		},
		gravatar: function(){
			return md5(this.enteredEmail.trim().toLowerCase());
		},
	},
	created: function () {
		setInterval(this.updateSinceValues, 6000);
	},
})







