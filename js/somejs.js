//register a component
//Have to register before root instance
//It is registered globally, so it can be used across all the root instances 
Vue.component('my-component', {
	template: '<div>A custom component!</div>'
})
//root instance
var app = new Vue({
	el: '#app',
	data: {
		message: "Hello Vue!"
	}
})
//root instance
var app = new Vue({
	el: '#app2',
	data: {
		message: "Hello Vue!"
	}
})
