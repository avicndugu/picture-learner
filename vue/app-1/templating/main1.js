// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      counter: 0
    }
  },
  template: '<button v-on:click="counter++">You clicked me {{ counter }} times.</button>'
})

const NextButton = Vue.component('next-button', {
  data: function () {
    return {
      message:"This is a message",
      count: 0,
      props:['count'],
      created: function () {
       this.increment();
      },
      methods:{
        increment: function(){
            this.count +=1;
        }
      }
    }
  },
  template: '<button>increment count{{count}}</button>'
})


// Vue.component('blog-post', {
//   props: ['title'],
//   template: '<h3>{{ title }}</h3>'
// })


// View items one by one
// Vue.component('items-cycle',{
//     props:['message'],
//     template:
//         `<div>
//             <p>{{ message }}</p>
//             <p>{{count}}</p>
//             <p>{{items[count]}}</p>
//             <p>{{items[count].name}}</p>
//             <img v-bind:src=items[count].url>
//             <button v-on:click="reverseMessage">Reverse Message</button>
//             <button v-on:click="changeTextValue">Change Message</button>
//             <button v-on:click="increment">increment count</button>
//             <button v-on:click="decrement">decrement count</button>
//         </div>`,
//     data: function() {
//         return{
//             message: 'Hello Vue.js!',
//             count:0,
//             info:"",
//             items: [
//                 {
//                   "name":"phone",
//                   "url":"img/phone.png",
//                   "audio":"phone.mp3"
//                 },
//                 {
//                   "name":"moon",
//                   "url":"img/moon.png",
//                   "audio":"moon.mp3"
//                 },
//                 {
//                   "name":"shoes",
//                   "url":"img/shoes.png",
//                   "audio":"shoes.mp3"
//                 },
//                 {
//                   "name":"socks",
//                   "url":"img/socks.png",
//                   "audio":"socks.mp3"
//                 },
//                 {
//                   "name":"star",
//                   "url":"img/star.png",
//                   "audio":"star.mp3"
//                 },
//                 {
//                   "name":"sun",
//                   "url":"img/sun.png",
//                   "audio":"sun.mp3"
//                 },
//                 {
//                   "name":"bottle",
//                   "url":"img/bottle.png",
//                   "audio":"bottle.mp3"
//                 },
//                 {
//                   "name":"door",
//                   "url":"img/door.png",
//                   "audio":"door.mp3"
//                 },
//                 {
//                   "name":"car",
//                   "url":"img/car.png",
//                   "audio":"car.mp3"
//                 },
//                 {
//                   "name":"cup",
//                   "url":"img/cup.png",
//                   "audio":"cup.mp3"
//                 }
//             ],
//             methods: {
//                 changeTextValue: function() {
//                   this.message = "A new message"
//                 },
//                 reverseMessage: function () {
//                   this.message = this.message.split('').reverse().join('')
//                 },
//                 increment: function(){
//                   if( this.count<this.items.length-1){
//                     this.count +=1;
//                   }  
//                 },
//                 decrement: function () {
//                     if (this.count>0){
//                       this.count -=1;
//                       console.log(this.items.length);
//                     }
//                     else{
//                       this.count ==0;
//                     }
//                 },
//             }
//         }
//     },
// })

new Vue({ el: '#app-1' })


// vue.js:634 [Vue warn]: Property or method "reverseMessage" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components,

// Use props instead