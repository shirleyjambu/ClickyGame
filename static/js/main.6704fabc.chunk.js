(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{id:1,name:"Flower",image:"flower1.jpg"},{id:2,name:"Flower",image:"flower2.jpg"},{id:3,name:"Flower",image:"flower3.jpg"},{id:4,name:"Flower",image:"flower4.jpg"},{id:5,name:"Flower",image:"flower5.jpg"},{id:6,name:"Flower",image:"flower6.jpg"},{id:7,name:"Flower",image:"flower7.jpg"},{id:8,name:"Flower",image:"flower8.jpg"},{id:9,name:"Flower",image:"flower9.jpg"},{id:10,name:"Flower",image:"flower10.jpg"},{id:11,name:"Flower",image:"flower11.jpg"},{id:12,name:"Flower",image:"flower12.jpg"}]},function(e,a,t){e.exports=t(19)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),l=t.n(c),o=(t(15),t(1)),i=t(2),s=t(4),m=t(3),u=t(5),f=(t(16),t(8));t(17);var d=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};t(18);var g=function(e){return r.a.createElement("div",{className:"col-3 card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:"./assets/images/"+e.image,onClick:e.onClick})))};var w=function(e){return r.a.createElement("div",null,e.label,r.a.createElement("span",{className:"text-".concat(e.clsName)},e.children))},p=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={flowers:f,score:0,topScore:0,clickedItems:[],message:"",clsName:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"shuffle",value:function(){var e=this.state.flowers;e.sort(function(e,a){return.5-Math.random()}),this.setState({flowers:e})}},{key:"handleClick",value:function(e){var a=this.state,t=a.clickedItems,n=a.flowers,r=a.topScore,c=a.score;if(t.includes(e))this.setState({topScore:c>r?c:r,score:0,clickedItems:[],message:"Oops, Try again",clsName:"danger"});else{var l=t;l.push(e),l.length===n.length?this.setState({clickedItems:[],score:0,message:"Game Over",clsName:"info"}):this.setState({clickedItems:l,score:c+1,message:"Guessed Correct",clsName:"success"})}this.shuffle()}},{key:"render",value:function(){var e=this,a=this.state,t=a.flowers,n=a.message,c=a.score,l=a.topScore,o=a.clsName;return r.a.createElement("div",null,r.a.createElement("nav",{className:"text-center"},r.a.createElement("h1",{className:"title"},"Clicky Game"),r.a.createElement("h4",null,r.a.createElement("div",{className:"row"},r.a.createElement(w,{clsName:o},n),r.a.createElement(w,{label:"Score"},c),r.a.createElement(w,{label:"TopScore"},l)))),r.a.createElement(d,null,t.map(function(a){return r.a.createElement(g,{key:a.id,name:a.name,image:a.image,onClick:function(){return e.handleClick(a.id)}})})))}}]),a}(n.Component),h=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(p,null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.6704fabc.chunk.js.map