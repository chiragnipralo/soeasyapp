"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4455],{8643:(C,p,n)=>{n.r(p),n.d(p,{AddObituryPageModule:()=>A});var y=n(9808),i=n(2382),f=n(8058),l=n(2561),c=n(1853),d=n(4893);const g=[{path:"",component:c.k}];let v=(()=>{class o{}return o.\u0275fac=function(h){return new(h||o)},o.\u0275mod=d.oAB({type:o}),o.\u0275inj=d.cJS({imports:[l.Bz.forChild(g),l.Bz]}),o})(),A=(()=>{class o{}return o.\u0275fac=function(h){return new(h||o)},o.\u0275mod=d.oAB({type:o}),o.\u0275inj=d.cJS({imports:[y.ez,i.u5,f.Pc,i.UX,v]}),o})()},6524:(C,p,n)=>{n.d(p,{O:()=>o});var y=n(7582),i=n(520);const l=(0,n(7423).fo)("Network",{web:()=>n.e(4203).then(n.bind(n,4203)).then(e=>new e.NetworkWeb)});var c=n(4893),d=n(2468),g=n(6501);let v="https://api.soeasyapp.com/",o=(()=>{class e{constructor(s,a,r){this.http=s,this.dataservice=a,this.common=r,this.checkInternetConnection()}initiatePayment(s,a){const r={headers:(new i.WM).set("Content-Type","application/json").set("Authorization","PAY46ZGYME1AE6LUR1AVI1701862757.YFGJ11SECKEY")};return new Promise((u,m)=>{this.http.post("https://admin.payomatix.com/payment/merchant/"+a,JSON.stringify(s),r).subscribe(t=>{u(t)},t=>{m(t),"HttpErrorResponse"==t.name&&("Unknown Error"==t.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==t.statusText?"Something Went Wrong...":t.statusText)),console.log("In Chatconnect provider : Error",t)})})}postData(s,a){const r={headers:(new i.WM).set("Content-Type","application/json")};return new Promise((u,m)=>{this.http.post(v+a,JSON.stringify(s),r).subscribe(t=>{u(t)},t=>{m(t),"HttpErrorResponse"==t.name&&("Unknown Error"==t.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==t.statusText?"Something Went Wrong...":t.statusText)),console.log("In Chatconnect provider : Error",t)})})}checkInternetConnection(){return(0,y.mG)(this,void 0,void 0,function*(){(yield l.getStatus()).connected?console.log("Internet is connected"):(console.log("No internet connection"),this.common.presentToast("","Check your internet connection"))})}postFormData(s,a){return new Promise((r,u)=>{const m=(new i.WM).set("Accept","application/json");this.http.post(v+a,s,{headers:m}).subscribe(t=>{r(t)},t=>{u(t)})})}}return e.\u0275fac=function(s){return new(s||e)(c.LFG(i.eN),c.LFG(d.D),c.LFG(g.v))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);