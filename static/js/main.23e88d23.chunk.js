(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),a=n(6),i=n(8),r=n(1),l=n(4),u=n.n(l),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.Name="alphabetically",t.Length="length",t.Default=""}(c||(c={}));var j=function(){var t=Object(r.useState)(c.Default),e=Object(a.a)(t,2),n=e[0],s=e[1],o=Object(r.useState)(!1),l=Object(a.a)(o,2),j=l[0],g=l[1],d=function(t,e,n){var s=Object(i.a)(t);if(e)switch(e){case c.Name:s.sort((function(t,e){return t.localeCompare(e)}));break;case c.Length:s.sort((function(t,e){return t.length-e.length}))}return n&&s.reverse(),s}(h,n,j),f=!!n||j;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":n!==c.Name}),onClick:function(){return s(c.Name)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":n!==c.Length}),onClick:function(){return s(c.Length)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!j}),onClick:function(){return g(!j)},children:"Reverse"}),f&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(c.Default),g(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:d.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.23e88d23.chunk.js.map