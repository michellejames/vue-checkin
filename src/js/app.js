"use strict";

var app = new Vue({
	el: "#app",
	data: {
		people: [
		{
			name: "Shelly",
			email: "shelljames90@yahoo.com",
			time: Date.now(),
			since: 0,
		},
		{
			name: "Spenser",
			email: "hubby@soon.com",
			time: Date.now(),
			since: 0,
		},
		{
			name: "Sydney",
			email: "please@sleepin.com",
			time: Date.now(),
			since: 0,
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
			})

			if(this.people.length > 4) {
				this.people.pop();
			}

			this.enteredName = "";
			this.enteredEmail = "";
		}
	},
	created: function () {
		setInterval(this.updateSinceValues, 6000);
	},
})







