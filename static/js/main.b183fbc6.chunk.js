(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),o=a.n(l),r=(a(13),a(1)),s=a(2),i=a(4),u=a(3),m=a(5),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={data:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.id;fetch("https://jsonplaceholder.typicode.com/posts/".concat(t)).then((function(e){return e.json()})).then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){var e=this.state.data,t=e.title,a=e.userId,n=e.body,l=this.props.handleClickOnArticle;return c.a.createElement("section",{className:"article"},!t&&c.a.createElement("h1",{className:"waiting"},"Waiting..."),c.a.createElement("header",{className:"article__info"},c.a.createElement("h1",{className:"article__title"},!t&&"Title:",t),c.a.createElement("address",{className:"article__author"},"Author:"," ".concat(a))),c.a.createElement("p",{className:"article__text"},n),c.a.createElement("button",{type:"button",className:"article__button button",onClick:l},"Return"))}}]),t}(n.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.body,n=e.value,l=e.handleClickOnPost;return c.a.createElement("li",{className:"post"},c.a.createElement("h1",{className:"post__title"},t),c.a.createElement("p",{className:"post__text"},a),c.a.createElement("button",{type:"button",className:"post__button button",value:n,onClick:l},"View details"))}}]),t}(n.PureComponent),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={posts:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){e.setState({posts:t})}))}},{key:"render",value:function(){var e=this.state.posts,t=this.props.handleClickOnPost;return c.a.createElement("ul",{className:"posts"},e.map((function(e){return c.a.createElement(b,{title:e.title,body:e.body,value:e.id,key:e.id,handleClickOnPost:t})})))}}]),t}(n.Component),d=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleClickonAbout,a=e.handleClickOnHome,n=e.isAbout;return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",{className:"nav__button",id:"bar"},"Blog"),c.a.createElement("li",{className:"nav__button ".concat(n?"":"nav__buttom-checked"),onClick:a},"Home"),c.a.createElement("li",{className:"nav__button ".concat(n?"nav__buttom-checked":""),onClick:t},"About")))}}]),t}(n.PureComponent);d.defaultProps={isAbout:!1};var f=d,O=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("h1",{className:"header__title"},"Hello, World"),c.a.createElement("p",{className:"header__text"},"This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique."),c.a.createElement("div",{className:"header__button button"},"Learn more")))},k=function(){return c.a.createElement("article",{className:"about"},"I am about page. I am about page. I  I am about page.I am about page. I am about page. am about page. I am about page. I am about page. I am about page. I am about page. I am about page. I am about page.")},E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClickOnPost=function(e){var t=e.target.value;a.setState({postId:t})},a.handleClickOnArticle=function(){a.setState({postId:null})},a.handleClickonAbout=function(){a.setState({postId:null,isAbout:!0})},a.handleClickOnHome=function(){a.setState({postId:null,isAbout:!1})},a.state={postId:null,isAbout:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.postId,a=e.isAbout;return c.a.createElement("div",{className:"App"},c.a.createElement(f,{handleClickonAbout:this.handleClickonAbout,handleClickOnHome:this.handleClickOnHome,isAbout:a}),c.a.createElement(O,null),c.a.createElement("section",{className:" wrapper"},!t&&!a&&c.a.createElement(h,{handleClickOnPost:this.handleClickOnPost}),t&&c.a.createElement(p,{id:Number(t),handleClickOnArticle:this.handleClickOnArticle}),!t&&a&&c.a.createElement(k,null),c.a.createElement("div",{id:"line"})),c.a.createElement("footer",{className:"wrapper"},"\xa9 Company 2019"))}}]),t}(n.Component);o.a.render(c.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.b183fbc6.chunk.js.map