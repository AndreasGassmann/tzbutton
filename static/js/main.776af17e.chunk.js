(this.webpackJsonptzbutton=this.webpackJsonptzbutton||[]).push([[0],{141:function(e,t){},243:function(e,t,n){e.exports=n.p+"static/media/tzbutton-logo-pressed.83915e22.svg"},244:function(e,t,n){e.exports=n.p+"static/media/tzbutton-logo-unpressed.45024e1f.svg"},251:function(e,t,n){e.exports=n.p+"static/media/beacon-logo.944018ec.svg"},252:function(e,t,n){e.exports=n.p+"static/media/airgap-logo.38eff924.svg"},289:function(e,t,n){e.exports=n(550)},294:function(e,t,n){},295:function(e,t,n){},303:function(e,t){},305:function(e,t){},315:function(e,t){},317:function(e,t){},343:function(e,t){},345:function(e,t){},346:function(e,t){},352:function(e,t){},354:function(e,t){},372:function(e,t){},375:function(e,t){},391:function(e,t){},394:function(e,t){},469:function(e,t){},471:function(e,t){},550:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(38),c=n.n(o),i=(n(294),n(64)),l=n(95),s=n(99),u=n(98),m=(n(295),n(253)),h=n(12),d=n(17),p=n.n(d),f=n(28),E=n(240),b=n(569),w=n(48),y=n(557),g=n(558),T=n(559),v=n(560),x=n(561),O=n(8),I=n(131),A=n(32),k=n(10),N="KT1RdjGLf3o6Vku5hUwNJFYQyGeuabYXshCt",S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"".concat(new k.BigNumber("200000").shiftedBy(-6).times(e).toFixed()," ").concat("XTZ")};A.b.setProvider({rpc:"https://api.tez.ie/rpc/carthagenet"});var R=function(){var e=Object(f.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new I.a({name:"TzButton"}),A.b.setWalletProvider(t),n={type:O.NetworkType.CARTHAGENET},e.next=5,t.requestPermissions({network:n});case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:return t=e.sent,e.next=5,t.client.requestOperation({operationDetails:[{kind:"transaction",amount:"200000",destination:N}]});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(f.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:return e.next=4,A.b.wallet.at(N);case 4:return t=e.sent,e.next=7,t.methods.withdraw("").send();case 7:return n=e.sent,e.abrupt("return",n.opHash);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(f.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.b.contract.at(N);case 2:return t=e.sent,e.next=5,t.storage();case 5:return n=e.sent,console.log(n),n.countdown_seconds=n.countdown_seconds.toNumber(),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j="",B=function(){var e=Object(f.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("checking for updates"),e.next=3,A.b.rpc.getBlock();case 3:return t=e.sent,n=t.hash!==j&&t.operations[3].some((function(e){return e.contents.some((function(e){return e.kind===A.a.TRANSACTION&&e.destination===N}))})),j=t.hash,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("https://carthagenet.tezblock.io/account/".concat(N),"_blank");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("https://better-call.dev/carthagenet/".concat(N,"/code"),"_blank");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.b.tz.getBalance(N);case 2:return e.abrupt("return",e.sent.shiftedBy(-6).toString());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(f.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new I.a({name:"TzButton"}),e.next=3,n.client.getActiveAccount();case 3:return a=e.sent,e.abrupt("return",null!==(t=null===a||void 0===a?void 0:a.address)&&void 0!==t?t:"");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=n(243),M=n.n(P),U=n(244),G=n.n(U),Y=function(){return r.a.createElement("span",null,"The game is over!",r.a.createElement("br",null),r.a.createElement(b.a,{onClick:C,colorScheme:"green",size:"sm"},"Withdraw"))},_=new Promise((function(e,t){X(e)})),X=function(){var e=Object(f.a)(p.a.mark((function e(t,n){var a,r,o,c,i,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("refreshing"),e.next=3,W();case 3:return a=e.sent,e.next=6,L();case 6:return r=e.sent,o=new Date(a.leadership_start_timestamp),c=a.countdown_seconds,i=new Date(o.getTime()+1e3*c),e.next=12,F();case 12:e.t0=e.sent,e.t1=a.leader,e.t2=o,e.t3=i,e.t4=r,l={loaded:!0,potAmount:e.t0,leader:e.t1,leaderStartTime:e.t2,leaderEndTime:e.t3,myAddress:e.t4},_=Promise.resolve(l),t(l),n&&n({position:"top",title:"New leader",description:"Someone just became the new leader and the countdown was reset.",status:"success",duration:6e3,isClosable:!0});case 21:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q={loaded:!1,potAmount:"",leader:"",leaderStartTime:void 0,leaderEndTime:void 0,myAddress:""},Z=function(){var e=Object(w.useToast)(),t=Object(a.useState)(q),n=Object(h.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(!1),l=Object(h.a)(i,2),s=l[0],u=l[1],m=Object(a.useRef)();Object(a.useEffect)((function(){return console.log("setting up interval"),_.then(c),m.current=setInterval(Object(f.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B();case 2:t.sent&&X(c,e);case 4:case"end":return t.stop()}}),t)}))),1e4),function(){console.log("removing interval"),m.current&&clearInterval(m.current)}}),[e]);var d=o.loaded?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{as:"h1",size:"xl",fontWeight:"semibold"},"TzButton"),r.a.createElement(g.a,{opacity:.7,fontSize:"xl",mt:"6"},"A social experiment on the Tezos blockchain."),r.a.createElement(g.a,{fontSize:"6xl"},o.leaderEndTime?r.a.createElement(E.a,{date:o.leaderEndTime,daysInHours:!0,zeroPadTime:2},r.a.createElement(Y,null)):"Loading..."),r.a.createElement(T.b,{mt:"6",onClick:z},r.a.createElement("img",{style:{cursor:"pointer"},src:s?M.a:G.a,onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},width:"200px",height:"200px",alt:"TzButton - click to participate"})),r.a.createElement(v.a,{my:16}),r.a.createElement(g.a,{fontSize:"3xl"},"Contract Balance: ",r.a.createElement(g.a,{as:"b"},o.potAmount," XTZ")),o.leader===o.myAddress?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{fontSize:"6xl"},"You are currently the leader!"),r.a.createElement(g.a,{fontSize:"xl"},o.leader)):r.a.createElement(g.a,{fontSize:"xl"},"Leader: ",o.leader),r.a.createElement(x.a,null,r.a.createElement(b.a,{mr:2,mt:8,onClick:D,colorScheme:"blue",size:"sm"},"History"),r.a.createElement(b.a,{mt:8,onClick:H,colorScheme:"blue",size:"sm"},"Contract"))):r.a.createElement(T.a,{my:50},"Loading...");return r.a.createElement(T.a,{mb:20},r.a.createElement(T.a,{as:"section",pt:24,pb:16},r.a.createElement(x.a,null,r.a.createElement(T.a,{maxW:"xl",mx:"auto",textAlign:"center"},d))))},J=n(562),V=n(563),K=function(e,t){return r.a.createElement(J.a,{href:t,isExternal:!0},e)},Q=K("Beacon","https://www.walletbeacon.io/"),$=K("Taquito","https://tezostaquito.io/"),ee=K('Reddit "The Button"',"https://www.reddit.com/r/thebutton/"),te=function(){var e=[{title:"How does it work?",description:r.a.createElement(r.a.Fragment,null,"The TZButton experiment is controlled by a smart contract deployed on the Tezos blockchain. Whenever anyone presses the button three things will happen:",r.a.createElement(V.b,null,r.a.createElement(V.a,null,"You will add ",S()," to the smart contract\u2019s balance"),r.a.createElement(V.a,null,"The address of the sender will become the leader"),r.a.createElement(V.a,null,"A countdown of ","TODO: EXPLAIN COUNTDOWN"," minutes is reset and started")),"The address that is set after the countdown expired will be eligible to withdraw the total balance on the smart contract. Example:",r.a.createElement(V.b,null,r.a.createElement(V.a,null,"Alice presses the button, ",S()," are now on the smart contract, the countdown of"," ","TODO: EXPLAIN COUNTDOWN"," minutes starts."),r.a.createElement(V.a,null,"After 200 minutes Bob presses the button, ",S(2)," are now on the smart contract, the countdown resets to ","TODO: EXPLAIN COUNTDOWN"," minutes and starts."),r.a.createElement(V.a,null,"After 5 minutes Charlie presses the button, ",S(3)," are now on the smart contract, the countdown resets to ","TODO: EXPLAIN COUNTDOWN"," minutes and starts."),r.a.createElement(V.a,null,"No one presses the button for more than ","TODO: EXPLAIN COUNTDOWN"," minutes. "),r.a.createElement(V.a,null,"Charlie can now withdraw ",S(3),", because he was the last leader and his countdown has expired.")))},{title:"Why TzButton?",description:r.a.createElement(r.a.Fragment,null,"The experiment was inspired by \u201cthe Button\u201d (an experiment conducted with Reddit users ",ee,"). Besides the fact that the behavior of the participating users will be automatically recorded on the blockchain and analyzed + published on this site, there are also other reasons why this experiment is interesting:",r.a.createElement(V.c,null,r.a.createElement(V.a,null,"It showcases how easy it is for dApps to interact securely with the Tezos blockchain using the existing libraries in the ecosystem (like ",Q," and ",$,")"),r.a.createElement(V.a,null,"It sets an incentive for security engineers to try to break and exploit the smart contract. This could mean two things:",r.a.createElement(V.b,null,r.a.createElement(V.a,null,"The contract and tooling used is secure and can be used as a reference for future applications."),r.a.createElement(V.a,null,"A breach would be transparent and recorded on the blockchain, meaning the entire community would be able to learn from it."))),r.a.createElement(V.a,null,"It provides to the community an open source boilerplate/project to create dApps on the Tezos Blockchain.")))}];return r.a.createElement(T.a,{bg:"gray.100",py:16},e.map((function(e,t){return r.a.createElement("span",{key:t},0!==t?r.a.createElement(v.a,{my:16}):"",r.a.createElement(x.a,null,r.a.createElement(y.a,{mb:4},e.title),e.description))})))},ne=n(570),ae=n(568),re=r.a.createElement(r.a.Fragment,null,"There are:",r.a.createElement("br",null),r.a.createElement(ne.a,{src:"https://source.unsplash.com/collection/139386/",boxSize:"200"})),oe=function(e,t){return r.a.createElement(J.a,{href:t,isExternal:!0},e)},ce=oe("AirGap","https://airgap.it/"),ie=oe("TzButton GitHub","https://github.com/tzbutton/tzbutton"),le=[{title:"Are there any fees?",description:"The only fees that are required are the transaction fees (gas cost to execute your transaction)."},{title:"Who developed TZButton?",description:r.a.createElement(r.a.Fragment,null,"TZButton was developed by members of the ",ce," team during their free time.")},{title:"Can I press the button multiple times?",description:"Yes. Just keep in mind that every time the button is pressed, you will add ".concat(S()," to the balance and the countdown will be reset. So it does not make any sense to press it if you already are the leader.")},{title:"How is this project funded?",description:r.a.createElement(r.a.Fragment,null,"This project was created on a voluntary basis during our free time. We don't have any direct commercial motivation.",r.a.createElement("br",null),r.a.createElement("br",null),"The only thing that could be considered as a commercial motivation is that the contracts balance is delegated to the AirGap baker. All resulting baking rewards will be used to support open source software.")},{title:"Where can I find the source code of this project?",description:r.a.createElement(r.a.Fragment,null,"The entire project is released using the permissive MIT license, you can find the code on github:"," ",ie)},{title:"How can I participate in the experiment?",description:"In case you already have a beacon compatible wallet, you just have to press the button. In case you don't have a beacon compatible wallet yet, here are some guide how to set up one: coming soon"},{title:"How can I withdraw the balance?",description:"When the countdown expires the current button will become the withdraw button."},{title:"If I'm the leader and the countdown expires, how quickly do I need to withdraw the balance?",description:"No rush. You can take all the time you need, no one will be able to overwrite your leader position and you are the only one capable of withdrawing the funds."},{title:"Can't the contract owner withdraw the balance?",description:"No. The contract does not have such a function. Only the leader can withdraw the balance once the countdown expired."},{title:"Why are there no cat pictures on this site?",description:re},{title:"Can I pay more than ".concat(S(),"?"),description:"No, the contract will not allow you to pay more or less than ".concat(S(),".")},{title:"Can I pay less than ".concat(S(),"?"),description:"No, the contract will not allow you to pay more or less than ".concat(S(),".")},{title:"Is this dApp secure?",description:"We've put in a lot of effort to make it as easy and secure as possible (and our team is dedicated to security). It is an experiment and it should be dealt with that way. Don't participate if you cannot afford to lose the 0.2 TZ you are sending to the contract."}],se=function(){return r.a.createElement(T.a,{as:"section",py:16},r.a.createElement(x.a,null,r.a.createElement(T.a,{maxW:"1000px",mx:"auto"},r.a.createElement(y.a,{mb:4},"FAQs"),r.a.createElement(ae.a,{allowToggle:!0},le.map((function(e,t){return r.a.createElement(ae.d,{key:t},r.a.createElement(ae.b,null,r.a.createElement(T.a,{flex:"1",textAlign:"left"},e.title),r.a.createElement(ae.c,null)),r.a.createElement(ae.e,{pb:4},e.description))}))))))},ue=n(82),me=n(565),he=n(566),de=n(251),pe=n.n(de),fe=n(252),Ee=n.n(fe),be={code:[{link:"https://github.com/tzbutton/tzbutton",name:"Frontend",icon:r.a.createElement(ue.b,null)},{link:"https://github.com/tzbutton/tzbutton",name:"Contract",icon:r.a.createElement(ue.b,null)}],social:[{link:"https://twitter.com/airgap_it",name:"Twitter",icon:r.a.createElement(ue.c,null)}],contact:[{link:"mailto:hi@airgap.it",name:"Email",icon:r.a.createElement(ue.a,null)}]},we=function(){var e=Object(w.useColorMode)().colorMode;return console.log("colorMode",e),r.a.createElement(T.a,{as:"footer",bg:"gray.100",py:10,px:8},r.a.createElement(T.a,{maxW:"1000px",mx:"auto"},r.a.createElement(me.a,{wrap:"wrap",justify:"center"},r.a.createElement(he.b,{textAlign:"center",my:4,w:["100%","50%","33%"]},r.a.createElement(g.a,{fontWeight:"900"},"Code"),be.code.map((function(e,t){return r.a.createElement(J.a,{href:e.link,key:t,isExternal:!0,_hover:{textDecoration:"none"}},r.a.createElement(b.a,{variant:"ghost",leftIcon:e.icon,color:"gray.500"},e.name))}))),r.a.createElement(he.b,{textAlign:"center",my:4,w:["100%","50%","33%"]},r.a.createElement(g.a,{fontWeight:"900"},"Social"),be.social.map((function(e,t){return r.a.createElement(J.a,{href:e.link,key:t,isExternal:!0,_hover:{textDecoration:"none"}},r.a.createElement(b.a,{variant:"ghost",leftIcon:e.icon,color:"gray.500"},e.name))}))),r.a.createElement(he.b,{textAlign:"center",my:4,w:["100%","50%","33%"]},r.a.createElement(g.a,{fontWeight:"900"},"Contact"),be.contact.map((function(e,t){return r.a.createElement(J.a,{href:e.link,key:t,isExternal:!0,_hover:{textDecoration:"none"}},r.a.createElement(b.a,{variant:"ghost",leftIcon:e.icon,color:"gray.500"},e.name))})))),r.a.createElement(v.a,{borderColor:"gray.300",my:4}),r.a.createElement(x.a,null,r.a.createElement(he.a,null,r.a.createElement(J.a,{href:"https://airgap.it/",isExternal:!0},r.a.createElement(ne.a,{src:Ee.a,width:"150px"})),r.a.createElement(J.a,{href:"https://walletbeacon.io/",isExternal:!0},r.a.createElement(ne.a,{src:pe.a,width:"150px"})))),r.a.createElement(v.a,{borderColor:"gray.300",my:4}),r.a.createElement(x.a,null,r.a.createElement(g.a,{fontSize:"xs"},r.a.createElement(g.a,{as:"b"},"Disclaimer"),": This is an experiment, consider the funds you send to the contract as lost. No one forces you to participate."),r.a.createElement(g.a,{fontSize:"xs"},'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'))))},ye=n(567),ge=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(w.ChakraProvider,{theme:m.a},r.a.createElement(ye.a,null),r.a.createElement(he.b,{minH:"90vh"},r.a.createElement(Z,null),r.a.createElement(te,null),r.a.createElement(se,null)),r.a.createElement(we,null))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[289,1,2]]]);
//# sourceMappingURL=main.776af17e.chunk.js.map