(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(7),o=n.n(r),i=n(8),s=n(2),d=n(3),b=n(5),u=n(4),l=(n(14),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.onLeaveFeedback;return Object(a.jsx)("div",{className:"group-button",children:t.map((function(e){var t=e.id,c=e.type,r=e.name;return Object(a.jsx)("button",{type:"button",onClick:function(){return n(c)},children:r},t)}))})}}]),n}(c.Component));l.defaultProps={options:[]};n(15);var j=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,c=e.bad,r=e.total,o=e.positivePercentage;return Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{className:"statistics",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"Good"}),": ",t]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"Neutral"}),": ",n]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"bad"}),": ",c]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"Total"}),": ",r]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"Positive feedback"}),": ",o,"%"]})]})})}}]),n}(c.Component);function p(e){var t=e.message;return Object(a.jsx)("h3",{children:t})}j.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0},p.defaultProps={message:"No feedback given"};var h=[{id:1,name:"Good",type:"good"},{id:2,name:"Neutral",type:"neutral"},{id:3,name:"Bad",type:"bad"}],O=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).countTotalFeedback=function(){var e=a.state;return e.good+e.neutral+e.bad},a.countPositiveFeedbackPercentage=function(){var e=a.countTotalFeedback(),t=a.state.good;return parseFloat((100/e*t).toFixed(0))},a.onLeaveFeedback=function(e){a.setState((function(t){return Object(i.a)({},e,t[e]+1)}))},a.state={good:0,neutral:0,bad:0},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.title,t=this.state,n=t.good,c=t.neutral,r=t.bad,o=this.countTotalFeedback(),i=this.countPositiveFeedbackPercentage();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:e}),Object(a.jsx)(l,{options:h,onLeaveFeedback:this.onLeaveFeedback}),Object(a.jsx)("br",{}),Object(a.jsx)("h2",{children:"Statistics"}),0!==n||0!==c||0!==r?Object(a.jsx)(j,{good:n,neutral:c,bad:r,total:o,positivePercentage:i}):Object(a.jsx)(p,{title:"No feedback given"})]})}}]),n}(c.Component);function v(){return Object(a.jsx)(O,{title:"Please leave feedback"})}O.defaultProps={title:"Section Name"},o.a.render(Object(a.jsx)(v,{}),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ac00a7f3.chunk.js.map