(this["webpackJsonpreact-tutorial-2"]=this["webpackJsonpreact-tutorial-2"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},7:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(2),r=n(3),o=n(4),s=n(0),l=n.n(s),u=n(6),c=n.n(u),m=(n(13),n(14),{english:[{name:"phone",url:"img/phone.png",audio:"english/phone.mp3"},{name:"moon",url:"img/moon.png",audio:"english/moon.mp3"},{name:"shoes",url:"img/shoes.png",audio:"english/shoes.mp3"},{name:"socks",url:"img/socks.png",audio:"english/socks.mp3"},{name:"star",url:"img/star.png",audio:"english/star.mp3"},{name:"sun",url:"img/sun.png",audio:"english/sun.mp3"},{name:"bottle",url:"img/bottle.png",audio:"english/bottle.mp3"},{name:"door",url:"img/door.png",audio:"english/door.mp3"},{name:"car",url:"img/car.png",audio:"english/car.mp3"},{name:"cup",url:"img/cup.png",audio:"english/cup.mp3"}],swahili:[{name:"simu",url:"img/phone.png",audio:"phone.mp3"},{name:"mwezi",url:"img/moon.png",audio:"moon.mp3"},{name:"viatu",url:"img/shoes.png",audio:"shoes.mp3"},{name:"soksi",url:"img/socks.png",audio:"socks.mp3"},{name:"nyota",url:"img/star.png",audio:"star.mp3"},{name:"jua",url:"img/sun.png",audio:"sun.mp3"},{name:"chupa",url:"img/bottle.png",audio:"bottle.mp3"},{name:"mlango",url:"img/door.png",audio:"door.mp3"},{name:"gari",url:"img/car.png",audio:"car.mp3"},{name:"kikombe",url:"img/cup.png",audio:"cup.mp3"}]}),p=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={display:!0,value:"Start",language:m.english},i}return Object(i.a)(n,[{key:"toggle",value:function(){"Start"===this.state.value?this.setState({value:"Home",display:!1}):this.setState({value:"Start",display:!0})}},{key:"swahili",value:function(){this.setState({language:m.swahili}),this.toggle()}},{key:"english",value:function(){this.setState({language:m.english}),this.toggle()}},{key:"render",value:function(){var e=this,t=this.state.language;return!0===this.state.display?l.a.createElement("div",{className:"app container"},l.a.createElement(g,{headerDisplay:this.state.display}),l.a.createElement("button",{className:"button is-fullwidth",onClick:function(t){return e.toggle(t)}},this.state.value),l.a.createElement("button",{className:"button is-fullwidth",onClick:function(t){return e.english(t)}},"English"),l.a.createElement("button",{className:"button is-fullwidth",onClick:function(t){return e.swahili(t)}},"Swahili")):l.a.createElement("div",{className:"app container"},l.a.createElement(h,{allItems:t,itemsDisplay:this.state.display}),l.a.createElement("button",{className:"button is-fullwidth",onClick:function(t){return e.toggle(t)}},this.state.value))}}]),n}(s.Component),g=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"header"},l.a.createElement("h1",{id:"my-logo",className:"title"},"Picture learner"),l.a.createElement("img",{src:"".concat("","/img/explain-img.png"),alt:"Exciting learning"}),l.a.createElement("h2",{className:"subtitle"},"Learn a language through pictures."))}}]),n}(s.Component),h=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).increment=function(e){i.setState({count:e})},i.decrement=function(e){i.setState({count:e})},i.state={count:0},i}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.allItems;return l.a.createElement("div",{id:"app-5"},console.log(this.state.count),l.a.createElement("h2",{className:"title"},e[this.state.count].name),l.a.createElement("img",{src:"".concat("").concat(e[this.state.count].url),alt:"Decorative text"}),l.a.createElement("br",null),l.a.createElement(d,{increment:this.increment,count:this.state.count,decrement:this.decrement}))}}]),n}(s.Component),d=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).incrementer=function(t){e.props.count<9&&e.props.increment(t+1)},e.decrementer=function(t){e.props.count>0&&e.props.increment(t-1)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("button",{className:"button is-fullwidth",onClick:function(){return e.decrementer(e.props.count)}},"Previous"),l.a.createElement("button",{className:"button is-fullwidth",onClick:function(){return e.incrementer(e.props.count)}},"Next"))}}]),n}(s.Component);c.a.render(l.a.createElement(p,null),document.getElementById("root"))}},[[7,1,2]]]);
//# sourceMappingURL=main.80e76c5f.chunk.js.map