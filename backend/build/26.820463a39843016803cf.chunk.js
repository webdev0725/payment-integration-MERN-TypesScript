(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"0b8eb3e35929778b339a":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),a=n("d7dd51e1bf6bfc2c9c3d"),c=n("adc20f99e57c573c589c"),u="app/HomePage/IS_LOGGED";var s=n("d782b72bc5b680c7122c"),b=n("3aced5b508e7389026da"),o=n("26a20beca00a2177e96c"),i=regeneratorRuntime.mark(f),p=regeneratorRuntime.mark(d);function f(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=new o.a,!e.loggedIn()){t.next=6;break}return t.next=5,Object(s.put)(Object(b.push)("/dashboard"));case 5:return t.abrupt("return",t.sent);case 6:return t.next=8,Object(s.put)(Object(b.push)("/login"));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),i)}function d(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.takeLatest)(u,f);case 2:case"end":return e.stop()}}),p)}function w(){var e=Object(a.useDispatch)(),t=function(){return e({type:u})};return Object(c.a)({key:"homePage",saga:d}),Object(r.useEffect)((function(){t()}),[]),null}n.d(t,"default",(function(){return w}))}}]);