//register a component
//Have to register before root instance
//It is registered globally, so it can be used across all the root instances
Vue.component('my-menubar', {
	props:['menuitems'],
	template: '<div id="menubar"><my-menuitem v-for="menuitem in menuitems" v-bind:menuitem="menuitem" v-bind:key="menuitem.id"></my-menuitem></div>',
	components:{
		'my-menuitem':{
			props: ['menuitem'],
			template: '<div class="menuitem"> {{menuitem}} </div>'
		}
	}
});

Vue.component('main-section',{
    props:['bgPic','mainMsg'],
    template: '<div id="mainsection"><slot>main section</slot></div>'

});

//root instance
//data flow in from root down to children
var app = new Vue({
	el: '#app',
	data: {
		message: "Hello Vue! This is the main message. I \
        am trying to be very long. I am trying to be very long.\
        I am trying to be very long. I am trying to be very long.",
        message2: "This is a relatively short message. I show I am here.",
		list:["duck","panda","monkey"],
        jobs:[]
	},

    mounted: function(){
        console.log("hello panda");

        this.fetchMenuList();

    },

    methods:{
        fetchMenuList: function(){
            // bind this
            var _this = this;
            axios.get('https://jsonplaceholder.typicode.com/users').then(function (response){
                console.log("hello panda2");
                console.log(response);
                _this.jobs = response.data ;
            }).catch(function(error){
                console.log(error);
            })
        }
    }
});
