(()=>{"use strict";var e={1610:(e,t,l)=>{l.r(t),l.d(t,{default:()=>v});var r=l(2982),a=l(4942),n=l(885),s=l(3292),o=l(2365),i=l(4637),u=l(477),c=l(7959),d=l(8592),f=l(9233),g=l(1133),y=l(9526),x=l(7557);function b(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function j(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?b(Object(l),!0).forEach((function(t){(0,a.default)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):b(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function v(){var e=(0,y.useState)(0),t=(0,n.default)(e,2),l=t[0],r=t[1],a=(0,y.useCallback)((function(){return r(l+1)}),[l,r]);return(0,x.jsx)(h,{reset:a},l)}function h(e){var t=(0,y.useState)(30),l=(0,n.default)(t,2),r=l[0],a=l[1],o=(0,y.useState)(!1),i=(0,n.default)(o,2),d=i[0],f=i[1],g=(0,y.useRef)({Uniformity:10,"Clean Cup":10,Sweetness:10,Defects:0}),b=(0,y.useCallback)((function(e,t){if(t!==g.current[e]){g.current[e]=t;var l=Object.values(g.current).reduce((function(e,t){return(e||0)+(t||0)}));a(l),f(11===Object.values(g.current).filter((function(e){return!isNaN(e)})).length)}}),[a,g]);return(0,x.jsxs)(u.default,{style:p.container,children:[(0,x.jsx)(s.default,{style:"auto"}),(0,x.jsxs)(c.default,{style:{flexDirection:"column",paddingBottom:100},children:[(0,x.jsx)(C,{name:"Fragrance/Aroma",setValueForCategory:b,categoryValues:g.current,scoringType:"quality"}),(0,x.jsx)(C,{name:"Flavor",setValueForCategory:b,categoryValues:g.current,scoringType:"quality"}),(0,x.jsx)(C,{name:"Aftertaste",setValueForCategory:b,categoryValues:g.current,scoringType:"quality"}),(0,x.jsx)(C,{name:"Acidity",setValueForCategory:b,categoryValues:g.current,scoringType:"quality"}),(0,x.jsx)(C,{name:"Body",setValueForCategory:b,categoryValues:g.current,scoringType:"quality"}),(0,x.jsx)(C,{name:"Balance",setValueForCategory:b,categoryValues:g.current,scoringType:"quality"}),(0,x.jsx)(C,{name:"Overall",setValueForCategory:b,categoryValues:g.current,scoringType:"quality"}),(0,x.jsx)(C,{name:"Uniformity",setValueForCategory:b,categoryValues:g.current,scoringType:"technical"}),(0,x.jsx)(C,{name:"Clean Cup",setValueForCategory:b,categoryValues:g.current,scoringType:"technical"}),(0,x.jsx)(C,{name:"Sweetness",setValueForCategory:b,categoryValues:g.current,scoringType:"technical"}),(0,x.jsx)(C,{name:"Defects",setValueForCategory:b,categoryValues:g.current,scoringType:"defects"})]}),(0,x.jsx)(m,{total:r,isComplete:d,reset:e.reset,categoryValues:g.current})]})}var p=d.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"stretch",justifyContent:"flex-start",maxHeight:"100vh",overflow:"hidden",height:"100%",width:"100%"}});function m(e){var t=(0,y.useState)(!1),l=(0,n.default)(t,2),r=l[0],a=l[1],s=(0,y.useCallback)((function(){return a(!r)}),[r,a]);return(0,x.jsxs)(i.default,{onPress:s,style:j(j({},S.headerContainer),{},{backgroundColor:e.isComplete?"lightgreen":"lightyellow"}),children:[(0,x.jsxs)(g.default,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"baseline"},children:[(0,x.jsx)(f.default,{style:S.caret,children:r?"\ud83d\udd3d":"\ud83d\udd3c"}),(0,x.jsx)(f.default,{style:S.totalLabel,children:"Total"}),(0,x.jsxs)(f.default,{style:S.scoreText,children:[e.isComplete?"\u2705":"\u26a0\ufe0f"," ",e.total.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),r&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(g.default,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"baseline"},children:[(0,x.jsx)(f.default,{style:S.totalLabel,children:"Subtotal"}),(0,x.jsxs)(f.default,{style:S.scoreText,children:[e.isComplete?"":"\u26a0\ufe0f"," ",(e.total-e.categoryValues.Defects).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),(0,x.jsxs)(g.default,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"baseline"},children:[(0,x.jsx)(f.default,{style:S.totalLabel,children:"Defects"}),(0,x.jsx)(f.default,{style:S.scoreText,children:e.categoryValues.Defects.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})})]}),(0,x.jsx)(g.default,{style:{padding:24},children:(0,x.jsx)(o.default,{title:"Reset",onPress:e.reset,color:"red"})})]})]})}var S=d.default.create({headerContainer:{backgroundColor:"darkgray",padding:12,paddingTop:24,borderTopLeftRadius:12,borderTopRightRadius:12,borderWidth:1,borderStyle:"solid",borderColor:"#424242",position:"absolute",right:8,left:8,bottom:0},totalLabel:{fontSize:18,marginRight:12,fontWeight:"bold"},scoreText:{fontWeight:"bold",fontSize:24},caret:{fontSize:24,fontWeight:"600",width:64,marginRight:12}});function C(e){var t=(0,y.useCallback)((function(t){e.setValueForCategory(e.name,t)}),[e.setValueForCategory]),l=e.categoryValues[e.name],r=(0,y.useState)(null==l),a=(0,n.default)(r,2),s=a[0],o=a[1],u=(0,y.useCallback)((function(){return o(!1)}),[o]),c=(0,y.useCallback)((function(){if(s)switch(e.scoringType){case"technical":return void(10===l&&o(!1));case"quality":return void(null!=l&&o(!1));case"defects":return void(0===l&&o(!1))}else o(!0)}),[o,s,e.scoringType,l]),d=(0,y.useMemo)((function(){switch(e.scoringType){case"quality":return(0,x.jsx)(O,{value:l,setScore:t,onFinishedSetting:u});case"technical":return(0,x.jsx)(T,{setScore:t});case"defects":return(0,x.jsx)(w,{setScore:t})}}),[e.scoringType,l,t,u]);return(0,x.jsxs)(g.default,{style:V.container,children:[(0,x.jsxs)(i.default,{style:V.rowContainer,onPress:c,children:[(0,x.jsxs)(f.default,{style:V.labelText,children:[e.icon,e.name]}),(0,x.jsx)(f.default,{style:V.scoreText,children:(null!=l?l:0).toLocaleString(void 0,{maximumFractionDigits:2,minimumFractionDigits:2})})]}),s&&(0,x.jsx)(g.default,{style:{marginTop:24},children:d})]})}var V=d.default.create({container:{flexDirection:"column",backgroundColor:"lightgray",marginBottom:8,padding:24},rowContainer:{flexDirection:"row"},labelText:{fontSize:18,fontWeight:"600",flexGrow:1,marginRight:24},scoreText:{fontSize:24,fontWeight:"bold"}});function T(e){var t=(0,y.useState)([!1,!1,!1,!1,!1]),l=(0,n.default)(t,2),a=l[0],s=l[1],o=(0,y.useCallback)((function(t,l){if(!(t<0||t>=5)){var n=(0,r.default)(a);n[t]=l,s(n),e.setScore(2*n.filter((function(e){return!e})).length)}}),[a,s,e.setScore]);return(0,x.jsx)(g.default,{style:k.container,children:(0,x.jsxs)(g.default,{style:k.optionRow,children:[(0,x.jsx)(F,{value:!a[0],label:a[0]?"\u274c":"\u2705",setValue:function(e){return o(0,e)},isSelected:!1}),(0,x.jsx)(F,{value:!a[1],label:a[1]?"\u274c":"\u2705",setValue:function(e){return o(1,e)},isSelected:!1}),(0,x.jsx)(F,{value:!a[2],label:a[2]?"\u274c":"\u2705",setValue:function(e){return o(2,e)},isSelected:!1}),(0,x.jsx)(F,{value:!a[3],label:a[3]?"\u274c":"\u2705",setValue:function(e){return o(3,e)},isSelected:!1}),(0,x.jsx)(F,{value:!a[4],label:a[4]?"\u274c":"\u2705",setValue:function(e){return o(4,e)},isSelected:!1})]})})}function w(e){var t=(0,y.useState)(0),l=(0,n.default)(t,2),r=l[0],a=l[1],s=(0,y.useState)(-2),o=(0,n.default)(s,2),i=o[0],u=o[1],c=(0,y.useCallback)((function(t){a(t),e.setScore(t*i)}),[a,e.setScore,i]),d=(0,y.useCallback)((function(t){u(t),e.setScore(r*t)}),[u,e.setScore,r]);return(0,x.jsxs)(g.default,{style:k.container,children:[(0,x.jsxs)(g.default,{style:k.optionRow,children:[(0,x.jsx)(F,{value:0,setValue:c,isSelected:0===r}),(0,x.jsx)(F,{value:1,setValue:c,isSelected:1===r}),(0,x.jsx)(F,{value:2,setValue:c,isSelected:2===r}),(0,x.jsx)(F,{value:3,setValue:c,isSelected:3===r}),(0,x.jsx)(F,{value:4,setValue:c,isSelected:4===r}),(0,x.jsx)(F,{value:5,setValue:c,isSelected:5===r})]}),(0,x.jsxs)(g.default,{style:k.optionRow,children:[(0,x.jsx)(F,{value:-2,label:"Taint (-2)",setValue:d,isSelected:-2===i}),(0,x.jsx)(F,{value:-4,label:"Fault (-4)",setValue:d,isSelected:-4===i})]})]})}function O(e){var t=(0,y.useState)(null==e.value?void 0:Math.floor(e.value)),l=(0,n.default)(t,2),r=l[0],a=l[1],s=(0,y.useState)(null==e.value?void 0:e.value%1),o=(0,n.default)(s,2),i=o[0],u=o[1],c=(0,y.useCallback)((function(t){a(t),u(void 0),e.setScore(t)}),[a,u,i,e.setScore]),d=(0,y.useCallback)((function(t){null!=r&&(u(t),e.onFinishedSetting(),e.setScore(r+t))}),[a,e.onFinishedSetting,r,e.setScore]);return(0,x.jsxs)(g.default,{style:k.container,children:[(0,x.jsxs)(g.default,{style:k.optionRow,children:[(0,x.jsx)(F,{value:6,setValue:c,isSelected:6===r}),(0,x.jsx)(F,{value:7,setValue:c,isSelected:7===r}),(0,x.jsx)(F,{value:8,setValue:c,isSelected:8===r}),(0,x.jsx)(F,{value:9,setValue:c,isSelected:9===r})]}),(0,x.jsxs)(g.default,{style:k.optionRow,children:[(0,x.jsx)(F,{value:0,label:".00",setValue:d,isSelected:0===i,disabled:null==r}),(0,x.jsx)(F,{value:.25,label:".25",setValue:d,isSelected:.25===i,disabled:null==r}),(0,x.jsx)(F,{value:.5,label:".50",setValue:d,isSelected:.5===i,disabled:null==r}),(0,x.jsx)(F,{value:.75,label:".75",setValue:d,isSelected:.75===i,disabled:null==r})]})]})}function F(e){var t,l=e.value,r=null!=(t=e.label)?t:l.toString(),a=(0,y.useCallback)((function(){return e.setValue(e.value)}),[e.setValue,e.value]);return(0,x.jsx)(i.default,{style:j(j({},k.optionTile),e.isSelected?k.optionTileSelected:e.disabled?k.optionTileDisabled:null),onPress:a,children:(0,x.jsx)(f.default,{style:k.optionTileText,children:r.toString()})})}var k=d.default.create({container:{flexDirection:"column",flexGrow:1},optionRow:{flexDirection:"row",alignItems:"stretch"},optionTile:{margin:8,padding:12,backgroundColor:"white",alignItems:"center",justifyContent:"center",flexGrow:1},optionTileSelected:{backgroundColor:"cyan"},optionTileDisabled:{backgroundColor:"darkgray"},optionTileText:{fontWeight:"600",fontSize:18}})}},t={};function l(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,l),n.exports}l.m=e,(()=>{var e=[];l.O=(t,r,a,n)=>{if(!r){var s=1/0;for(c=0;c<e.length;c++){for(var[r,a,n]=e[c],o=!0,i=0;i<r.length;i++)(!1&n||s>=n)&&Object.keys(l.O).every((e=>l.O[e](r[i])))?r.splice(i--,1):(o=!1,n<s&&(s=n));if(o){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,a,n]}})(),l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var a,n,[s,o,i]=r,u=0;if(s.some((t=>0!==e[t]))){for(a in o)l.o(o,a)&&(l.m[a]=o[a]);if(i)var c=i(l)}for(t&&t(r);u<s.length;u++)n=s[u],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(c)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=l.O(void 0,[454],(()=>l(9484)));r=l.O(r)})();
//# sourceMappingURL=main.18a47e42.js.map