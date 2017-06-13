import calendarComponent from './calendar.vue';

const calendar = {
	install:function(Vue){
		Vue.component('calendar',calendarComponent);
	}
}

export default calendar;