"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4949],{4949:(H,T,i)=>{i.r(T),i.d(T,{PaydemoPageModule:()=>Y});var f=i(9808),m=i(2382),o=i(8058),P=i(2561),y=i(7582),e=i(4893),_=i(2313),Z=i(6501),x=i(2468),C=i(6524);const d=["slider"];function A(t,c){1&t&&(e.TgZ(0,"ion-segment-button",9)(1,"ion-label"),e._uU(2,"Received"),e.qZA()())}function l(t,c){1&t&&(e.ynx(0),e.TgZ(1,"p",10),e._uU(2,"No Payment"),e.qZA(),e.BQk())}function g(t,c){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),e._uU(4),e.qZA(),e.TgZ(5,"ion-card-subtitle"),e._uU(6,"Paid \xa0\xa0"),e.TgZ(7,"b"),e._uU(8),e.qZA()()(),e.TgZ(9,"ion-card-content")(10,"p"),e._uU(11),e.qZA()(),e.TgZ(12,"ion-card-footer")(13,"ion-button",12),e.NdJ("click",function(){const v=e.CHM(n).$implicit,M=e.oxw(2);return e.KtG(M.sendPayPdf(v))}),e._uU(14," Send On Mail"),e.qZA()()(),e.BQk()}if(2&t){const n=c.$implicit;e.xp6(4),e.Oqu(n.title),e.xp6(4),e.hij("\u20b9 ",n.amount,""),e.xp6(3),e.hij("On ",n.payment_date,"")}}function p(t,c){if(1&t&&(e.TgZ(0,"ion-row"),e.YNc(1,g,15,3,"ng-container",11),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.paymentHistory)}}function h(t,c){1&t&&(e.ynx(0),e.TgZ(1,"p",10),e._uU(2,"No Payment"),e.qZA(),e.BQk())}function u(t,c){if(1&t&&(e.ynx(0),e.TgZ(1,"ion-card")(2,"ion-card-header")(3,"ion-card-subtitle"),e._uU(4,"Received \xa0\xa0"),e.TgZ(5,"b"),e._uU(6),e.qZA()(),e.TgZ(7,"ion-label"),e._uU(8," For \xa0\xa0"),e.TgZ(9,"b"),e._uU(10),e.qZA()()(),e.TgZ(11,"ion-card-content")(12,"p"),e._uU(13),e.qZA()()(),e.BQk()),2&t){const n=c.$implicit;e.xp6(6),e.hij("\u20b9 ",n.send_amount,""),e.xp6(4),e.Oqu(n.eveventDetails.title),e.xp6(3),e.hij("On ",n.payment_date,"")}}function s(t,c){if(1&t&&(e.TgZ(0,"ion-row"),e.YNc(1,u,14,3,"ng-container",11),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",n.paymentRecivedHistory)}}function I(t,c){if(1&t&&(e.TgZ(0,"ion-slide"),e.YNc(1,h,3,0,"ng-container",8),e.YNc(2,s,2,1,"ion-row",8),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.paymentRecivedHistory.length<=0),e.xp6(1),e.Q6J("ngIf",n.paymentRecivedHistory.length>0)}}const N=[{path:"",component:(()=>{class t{constructor(n,a,r,v,M,w,U,R,J,S,Q){this.formBuilder=a,this.commonservice=r,this.alertController=v,this.dataservice=M,this.navCtrl=w,this.chatconnect=U,this.modalController=R,this.createv4omdal=J,this.successmodal=S,this.router=Q,this.paymentHistory=[],this.paymentRecivedHistory=[],this.segment=0}ngOnInit(){}ionViewWillEnter(){this.PaymentInfo()}segmentChanged(){return(0,y.mG)(this,void 0,void 0,function*(){yield this.slider.slideTo(this.segment)})}slideChanged(){this.slider.getActiveIndex().then(n=>{console.log("Current index: "+n),this.segment=n})}sendPayPdf(n){console.log("pdf",n);let a={user_token:this.dataservice.getUserData(),pdf_data:n};this.chatconnect.postData(a,"payment_pdf").then(r=>{this.commonservice.presentToast(1==r.Response.status?"":"Oops",r.Response.message)},r=>{console.log("Connection failed Messge")})}PaymentInfo(){this.commonservice.show();let n={user_token:this.dataservice.getUserData()};this.chatconnect.postData(n,"payment_history").then(a=>{this.commonservice.hide(),1==a.Response.status?(this.paymentHistory=a.Response.payment_history,this.paymentRecivedHistory=a.Response.payment_received_history,console.log("History==>",this.paymentHistory)):this.commonservice.presentToast("Oops",a.Response.message)},a=>{console.log("Connection failed Messge")})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_.H7),e.Y36(m.qu),e.Y36(Z.v),e.Y36(o.Br),e.Y36(x.D),e.Y36(o.SH),e.Y36(C.O),e.Y36(o.IN),e.Y36(o.IN),e.Y36(o.IN),e.Y36(P.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-paydemo"]],viewQuery:function(n,a){if(1&n&&e.Gf(d,7),2&n){let r;e.iGM(r=e.CRH())&&(a.slider=r.first)}},decls:18,vars:6,consts:[["slot","start"],["text","","icon","arrow-back-outline"],[3,"fullscreen"],[1,"segment_one",3,"ngModel","ngModelChange","ionChange"],["value","0"],["value","1",4,"ngIf"],[3,"ionSlideDidChange"],["slider",""],[4,"ngIf"],["value","1"],[1,"no_payment"],[4,"ngFor","ngForOf"],["size","small","shape","round","color","tertiary",2,"float","right","margin","10px",3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-back-button",1),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"Payment History"),e.qZA()()(),e.TgZ(6,"ion-content",2)(7,"ion-segment",3),e.NdJ("ngModelChange",function(v){return a.segment=v})("ionChange",function(){return a.segmentChanged()}),e.TgZ(8,"ion-segment-button",4)(9,"ion-label"),e._uU(10,"Send"),e.qZA()(),e.YNc(11,A,3,0,"ion-segment-button",5),e.qZA(),e.TgZ(12,"ion-slides",6,7),e.NdJ("ionSlideDidChange",function(){return a.slideChanged()}),e.TgZ(14,"ion-slide"),e.YNc(15,l,3,0,"ng-container",8),e.YNc(16,p,2,1,"ion-row",8),e.qZA(),e.YNc(17,I,3,2,"ion-slide",8),e.qZA()()),2&n&&(e.xp6(6),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("ngModel",a.segment),e.xp6(4),e.Q6J("ngIf",a.paymentRecivedHistory.length>0),e.xp6(4),e.Q6J("ngIf",a.paymentHistory.length<=0),e.xp6(1),e.Q6J("ngIf",a.paymentHistory.length>0),e.xp6(1),e.Q6J("ngIf",a.paymentRecivedHistory.length>0))},dependencies:[f.sg,f.O5,m.JJ,m.On,o.oU,o.YG,o.Sm,o.PM,o.FN,o.Zi,o.tO,o.Dq,o.W2,o.Gu,o.Q$,o.Nd,o.cJ,o.GO,o.A$,o.Hr,o.wd,o.sr,o.QI,o.cs],styles:["ion-title[_ngcontent-%COMP%]{position:absolute;inset:0;text-align:center}.no_payment[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;font-weight:700}ion-row[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]{width:100%}"]}),t})()}];let O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[P.Bz.forChild(N),P.Bz]}),t})(),Y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[f.ez,m.u5,o.Pc,O]}),t})()},6524:(H,T,i)=>{i.d(T,{O:()=>C});var f=i(7582),m=i(520);const P=(0,i(7423).fo)("Network",{web:()=>i.e(4203).then(i.bind(i,4203)).then(d=>new d.NetworkWeb)});var y=i(4893),e=i(2468),_=i(6501);let Z="https://api.soeasyapp.com/",C=(()=>{class d{constructor(l,g,p){this.http=l,this.dataservice=g,this.common=p,this.checkInternetConnection()}initiatePayment(l,g){const p={headers:(new m.WM).set("Content-Type","application/json").set("Authorization","PAY46ZGYME1AE6LUR1AVI1701862757.YFGJ11SECKEY")};return new Promise((h,u)=>{this.http.post("https://admin.payomatix.com/payment/merchant/"+g,JSON.stringify(l),p).subscribe(s=>{h(s)},s=>{u(s),"HttpErrorResponse"==s.name&&("Unknown Error"==s.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==s.statusText?"Something Went Wrong...":s.statusText)),console.log("In Chatconnect provider : Error",s)})})}postData(l,g){const p={headers:(new m.WM).set("Content-Type","application/json")};return new Promise((h,u)=>{this.http.post(Z+g,JSON.stringify(l),p).subscribe(s=>{h(s)},s=>{u(s),"HttpErrorResponse"==s.name&&("Unknown Error"==s.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==s.statusText?"Something Went Wrong...":s.statusText)),console.log("In Chatconnect provider : Error",s)})})}checkInternetConnection(){return(0,f.mG)(this,void 0,void 0,function*(){(yield P.getStatus()).connected?console.log("Internet is connected"):(console.log("No internet connection"),this.common.presentToast("","Check your internet connection"))})}postFormData(l,g){return new Promise((p,h)=>{const u=(new m.WM).set("Accept","application/json");this.http.post(Z+g,l,{headers:u}).subscribe(s=>{p(s)},s=>{h(s)})})}}return d.\u0275fac=function(l){return new(l||d)(y.LFG(m.eN),y.LFG(e.D),y.LFG(_.v))},d.\u0275prov=y.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);