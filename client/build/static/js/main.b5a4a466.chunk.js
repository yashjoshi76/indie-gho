(this.webpackJsonpsongs=this.webpackJsonpsongs||[]).push([[0],{100:function(t,e){},119:function(t,e,n){},121:function(t,e,n){},122:function(t,e,n){},123:function(t,e,n){},124:function(t,e,n){},125:function(t,e,n){},126:function(t,e,n){},127:function(t,e,n){},128:function(t,e,n){"use strict";n.r(e);var i=n(2),c=n.n(i),s=n(19),o=n.n(s),a=(n(63),n(4)),r=n(1),l=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("a",{className:"btn btn-success btn-lg",href:"https://doti-ghoul.herokuapp.com/login",children:"Login With Spotify"})})},d=(n(20),n(56)),u=n.n(d),j=n(24),b=n.n(j),f=n(25),m=n(26),h=n.n(m),g=(n(51),n(52),h()(b.a)),x=function(t){var e=t.list;t.name;if(0===e.length)return null;return Object(r.jsx)(g,{style:{width:"500px",height:"300px",margin:"0px 0px 30px 0px;"},cssModule:f.a,animation:"openAnimation",play:!0,children:e.slice(0,6).map((function(t){return Object(r.jsx)("div",{onClick:function(e){return n=t.external_urls.spotify,void window.open(n,"_blank");var n},style:{objectFit:"cover",backgroundImage:"url(".concat(t.album.images[0].url,")"),backgroundSize:"contain",borderRadius:"15px",cursor:"pointer",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:Object(r.jsxs)("div",{style:{color:"white",height:"200px",borderRadius:"50%",fontSize:"xx-large",textTransform:"uppercase",fontWeight:"bold",backgroundColor:"#0000001a",width:"200px",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"},children:[t.name," "]})})}))})},O=function(t){var e=t.art,n=t.tracks;if(e){var i=e.name;return Object(r.jsxs)("div",{className:"spotify-artist",children:[Object(r.jsxs)("div",{className:"artist",children:[Object(r.jsx)("div",{style:{padding:"0px 0px 0px 20px",width:"60%"},children:Object(r.jsx)("img",{className:"art-image",src:"",alt:"song"})}),Object(r.jsx)("div",{className:"artist-details",children:Object(r.jsxs)("div",{className:"art-name",children:["Check out best tracks of: ",Object(r.jsx)("br",{}),i]})})]}),Object(r.jsx)(x,{list:n,name:i}),Object(r.jsx)("div",{})]})}return null},p=n.p+"static/media/ghost.60dc7bdd.gif",v=(n(119),function(){return Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{id:"text",children:[" ","Get Indie-Alt Music Suggestions from DOTI"," ",Object(r.jsx)("div",{style:{display:"contents"},children:Object(r.jsx)("img",{alt:"owl",src:p})})," "]})})}),y=n(14);n(121);function k(t){var e=t.image,n=t.background,c=t.url,s=Object(i.useState)(!1),o=Object(a.a)(s,2),l=o[0],d=o[1],u=Object(y.useSpring)({f:l?0:1,r:l?-3:3}),j=u.f,b=u.r,f=Object(y.useSprings)(5,[0,1,2,3,4].map((function(t){return{opacity:.2+t/5,z:l?t/5*80:0}})));return Object(r.jsx)("div",{class:"container",onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},children:f.map((function(t,i){var s=t.z,o=t.opacity;return Object(r.jsx)(y.animated.div,{onClick:function(t){return function(t){console.log("x",t),window.open(t,"_blank")}(c)},style:{opacity:o,background:n,transform:Object(y.interpolate)([s,j.interpolate([0,.2,.6,1],[0,i,i,0]),b],(function(t,e,n){return"translate3d(0,0,".concat(t,"px) rotateX(").concat(e*n,"deg)")}))},children:4===i&&Object(r.jsx)("div",{children:Object(r.jsx)(y.animated.img,{target:"_blank",style:{transform:j.interpolate([0,1],["scale(0.7)","scale(1)"]),height:"100%",width:"100%"},src:e})})})}))})}var w=function(t){var e=t.list;return e?Object(r.jsx)("div",{className:"rec-arts",children:Object(r.jsx)("div",{class:"main",children:e.slice(0,9).map((function(t){return Object(r.jsx)(k,{url:t.external_urls.spotify,image:t.images[0].url,background:"#52649e"})}))})}):null},S=(n(122),h()(b.a)),N=function(t){var e=t.list,n=t.simList;if(0===e.length)return null;var i=e.items,c=n.artists;console.log(c);return Object(r.jsxs)("div",{className:"playlist",children:[Object(r.jsx)("div",{className:"discover-text",children:"Discover Playlists And Similar Artists"}),Object(r.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(r.jsx)(S,{cssModule:f.a,animation:"openAnimation",play:!0,children:i.slice(0,15).map((function(t){return Object(r.jsx)("div",{onClick:function(e){return n=t.external_urls.spotify,void window.open(n,"_blank");var n},style:{objectFit:"cover",backgroundImage:"url(".concat(t.images[0].url,")"),backgroundSize:"contain",borderRadius:"15px",cursor:"pointer",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})}))}),Object(r.jsx)(w,{list:c})]})]})},I=(n(29),n(3),n(58),n.p,n(123),n(124),function(){return Object(r.jsx)("nav",{className:"footer",children:Object(r.jsx)("div",{className:"footer-text",children:Object(r.jsx)("div",{children:"Creatively yours, Yash J"})})})}),A=n.p+"static/media/doti.52b9a1df.svg",C=(n(125),function(){return Object(r.jsxs)("div",{className:"about-doti",children:[Object(r.jsxs)("div",{className:"doti-all-about",children:[Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"doti-heading",children:[Object(r.jsxs)("span",{className:"about-doti-text",children:["Day of The Indie:",Object(r.jsx)("br",{}),"DOTI"]}),Object(r.jsx)("span",{id:"doti-name",children:"Why doti exists"})]})}),Object(r.jsxs)("div",{className:"intro-text",children:["I believe if you want to brew good coffee, there must be good music around. Personally, I'm fond of indie-alt and house music and as a loyal spotify premium user(...the ads won); I wanted an 'Alternative' recommendation platform. Hence, I started DOTI! ",Object(r.jsx)("br",{}),Object(r.jsx)("span",{style:{fontSize:"10px",fontWeight:"bold"},children:"*Alternative refers to the genre's distinction from mainstream or commercial rock or pop music."})]})]}),Object(r.jsx)("div",{className:"doti-img-div",children:Object(r.jsx)("img",{className:"doti-img",src:A,alt:"indie rock"})}),Object(r.jsx)("div",{className:"doti-intro"})]})}),T=(n(126),new u.a({clientId:"509490d6f8d64997ad8e2eb63fe621c8"})),_=function(t){var e=t.code,n=Object(i.useState)([]),c=Object(a.a)(n,2),s=(c[0],c[1],Object(i.useState)([])),o=Object(a.a)(s,2),l=o[0],d=o[1],u=Object(i.useState)([]),j=Object(a.a)(u,2),b=j[0],f=j[1],m=Object(i.useState)([]),h=Object(a.a)(m,2),g=h[0],x=h[1];return Object(i.useEffect)((function(){e&&T.setAccessToken(e)}),[e]),Object(i.useEffect)((function(){T.getArtistRelatedArtists("5INjqkS1o8h1imAzPqGZBb").then((function(t){x(t.body),T.getArtistTopTracks(t.body.artists[0].id,"GB").then((function(t){d(t.body.tracks)}),(function(t){console.log("Something went wrong!",t)})),T.searchTracks("artist: [".concat(t.body.artists[0].name,", ").concat(t.body.artists[1].name,", ").concat(t.body.artists[2].name,"]")).then((function(t){console.log('Search tracks by "Alright" in the track name and "Kendrick Lamar" in the artist name',t.body)}),(function(t){console.log("Something went wrong!",t)}))}),(function(t){console.log(t)})),T.getPlaylistsForCategory("indie_alt",{country:"IE",limit:20,offset:0}).then((function(t){console.log(t.body),f(t.body.playlists)}),(function(t){console.log("Something went wrong!",t)})),T.getMe().then((function(t){console.log("Some information about the authenticated user",t.body)}),(function(t){console.log("Something went wrong!",t)}))}),[e]),console.log(g),e?Object(r.jsxs)("div",{children:[Object(r.jsx)(v,{}),Object(r.jsxs)("div",{className:"about",children:[Object(r.jsx)(O,{art:g,tracks:l}),Object(r.jsx)(N,{list:b,simList:g}),Object(r.jsx)(C,{})]}),Object(r.jsx)(I,{})]}):Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:"sdsdns"})};n(127);var P=function(){var t=Object(i.useState)(""),e=Object(a.a)(t,2),n=(e[0],e[1],function(){for(var t,e={},n=/([^&;=]+)=?([^&;]*)/g,i=window.location.hash.substring(1);t=n.exec(i);)e[t[1]]=decodeURIComponent(t[2]);return e}()),c=(n.error,n.access_token);return n.refresh_token,new URLSearchParams(window.location.search).get("code"),c?Object(r.jsx)(_,{code:c}):Object(r.jsx)(l,{})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),i(t),c(t),s(t),o(t)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(P,{})}),document.getElementById("root")),L()},52:function(t,e,n){},63:function(t,e,n){}},[[128,1,2]]]);
//# sourceMappingURL=main.b5a4a466.chunk.js.map