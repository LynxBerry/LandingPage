//register a component
//Have to register before root instance
//It is registered globally, so it can be used across all the root instances 
Vue.component('my-menubar', {
	props:['menuitems'],
	template: '<div><my-menuitem v-for="menuitem in menuitems" v-bind:menuitem="menuitem" v-bind:key="menuitem.id"></my-menuitem></div>',
	components:{
		'my-menuitem':{ 
			props: ['menuitem'],
			template: '<div> {{menuitem}} </div>'
		}
	}
})
//root instance
//data flow in from root down to children
var app = new Vue({
	el: '#app',
	data: {
		message: "Hello Vue!",
		list:["duck","panda","monkey"]
	}
})
