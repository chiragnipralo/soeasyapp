"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5674],{5674:(x,O,e)=>{e.r(O),e.d(O,{EventPaymentPageModule:()=>P});var v=e(9808),n=e(2382),a=e(8058),_=e(2561),h=e(7582),M=e(6866),t=e(4893),d=e(2468),f=e(6501),g=e(6524);function r(s,o){if(1&s){const c=t.EpF();t.ynx(0),t.TgZ(1,"ion-button",8),t.NdJ("click",function(){t.CHM(c);const l=t.oxw();return t.KtG(l.GoClose())}),t._uU(2,"Close"),t.qZA(),t.BQk()}}function T(s,o){if(1&s){const c=t.EpF();t.ynx(0),t.TgZ(1,"ion-button",8),t.NdJ("click",function(){t.CHM(c);const l=t.oxw();return t.KtG(l.GoNext(l.dataservice.totalContactCount?1*l.dataservice.totalContactCount:0))}),t._uU(2,"Invite"),t.qZA(),t.BQk()}}const u=[{path:"",component:(()=>{class s{constructor(c,i,l,C,E,Z,S){this.dataservice=c,this.modalController=i,this.common=l,this.chatconnect=C,this._route=E,this.navCtrl=Z,this.location=S,this.razor_key="rzp_live_G3jYxHdfoo5gQR",this.currency="INR";let I={user_token:this.dataservice.getUserData()};this.chatconnect.postData(I,"user_profile").then(y=>{console.log(y),1==y.Response.status?y.Response.user_data&&(this.dataservice.user_profile_data=y.Response.user_data[0],this.user_data=y.Response.user_data[0]):this.common.presentToast("Oops",y.Response.message)},y=>{console.log("Connection failed Messge")})}ngOnInit(){console.log("Invite OR Reinvite ==> ",this._route.snapshot.params.invite_type),console.log("Reinvite for page ==> ",this._route.snapshot.params.type)}ionViewDidEnter(){console.log("Invite OR Reinvite ==> ",this._route.snapshot.params.invite_type),console.log("Reinvite for page ==> ",this._route.snapshot.params.type)}GoNext(c){"invite"!=this._route.snapshot.params.invite_type?this.send_invite():(this.OpenSuccess("any"),this.common.presentToast("","Invitation Send Successfully..."))}GoClose(){this.OpenSuccess("any")}send_invite(){console.log("Event OR Community ==> ",this._route.snapshot.params.type);const c=this.dataservice.getUserData();if("free_community"==this._route.snapshot.params.type){this.common.show("Please Wait");var i=new FormData;null!==c&&i.append("user_token",c),i.append("community_title",this.dataservice.user_event_data.community_title),i.append("community_id",this.dataservice.user_event_data.id),i.append("guest_contacts",JSON.stringify(this.dataservice.all_contacts.filter(l=>l.checked))),this.chatconnect.postFormData(i,"invite_for_community").then(l=>{this.common.hide(),1==l.Response.status?(this.navCtrl.navigateRoot("/tabs/dashboard"),this.common.presentToast("","Invitation Send Successfully...")):this.common.presentToast("Oops",l.Response.message)},l=>{this.common.hide(),console.log("Connection failed Messge")})}else this.common.show("Please Wait Dont Press Back Button"),console.log("Event Invitation"),i=new FormData,null!==c&&i.append("user_token",c),i.append("event_title",this.dataservice.user_event_data.title),i.append("event_id",this.dataservice.user_event_data.id),i.append("event_dates",JSON.stringify(this.dataservice.user_event_data.event_dates)),i.append("guest_contacts",JSON.stringify(this.dataservice.all_contacts.filter(C=>C.checked))),i.append("event_type","paid_event"==this._route.snapshot.params.type?"paid_event":"free_event"),this.chatconnect.postFormData(i,"invite_for_event").then(C=>{this.common.hide(),1==C.Response.status?("paid_event"==this._route.snapshot.params.type?(this.location.back(),this.location.back()):this.navCtrl.navigateRoot("/tabs/dashboard"),this.common.presentToast("","Invitation Send Successfully...")):this.common.presentToast("Oops",C.Response.message)},C=>{this.common.hide(),console.log("Connection failed Messge")})}OpenSuccess(c){return(0,h.mG)(this,void 0,void 0,function*(){this.dataservice.shareable_event_url=c;const i=yield this.modalController.create({component:M.I,cssClass:"pindialog-container",handle:!0});return i.onDidDismiss().then(l=>{console.log("DATA HERE ---\x3e",l),null!=l.data&&this.dataservice.shareable_event_url&&(this.closeModal(),this.navCtrl.navigateRoot("/tabs/dashboard"))}),yield i.present()})}closeModal(){return(0,h.mG)(this,void 0,void 0,function*(){yield this.modalController.dismiss({dismissed:!0})})}}return s.\u0275fac=function(c){return new(c||s)(t.Y36(d.D),t.Y36(a.IN),t.Y36(f.v),t.Y36(g.O),t.Y36(_.gz),t.Y36(a.SH),t.Y36(v.Ye))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-event-payment"]],decls:42,vars:5,consts:[[1,"ion-no-border"],["slot","start"],["text","","icon","arrow-back-outline"],[1,"ion-content-center"],[1,"ion-card-center"],["size","9"],[1,"total_cost"],[4,"ngIf"],["color","secondary","shape","round",1,"right",3,"click"]],template:function(c,i){1&c&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Payment Details"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"div",3)(8,"ion-card",4)(9,"ion-card-header")(10,"h4"),t._uU(11,"Details"),t.qZA()(),t.TgZ(12,"ion-card-content")(13,"ion-grid")(14,"ion-row")(15,"ion-col",5)(16,"ion-label"),t._uU(17,"Total Selected Contacts"),t.qZA()(),t.TgZ(18,"ion-col")(19,"h5"),t._uU(20),t.qZA()()(),t.TgZ(21,"ion-row")(22,"ion-col",5)(23,"ion-label"),t._uU(24,"Cost Per Invite"),t.qZA()(),t.TgZ(25,"ion-col")(26,"h5"),t._uU(27),t.qZA()()(),t.TgZ(28,"ion-row",6)(29,"ion-col",5)(30,"ion-label"),t._uU(31,"Total Cost"),t.qZA()(),t.TgZ(32,"ion-col")(33,"h5"),t._uU(34),t.qZA()()(),t.TgZ(35,"ion-row")(36,"ion-col")(37,"p"),t._uU(38,"You are using free version, enjoy your invitations cost free."),t.qZA()()()()()()()(),t.TgZ(39,"ion-footer",0),t.YNc(40,r,3,0,"ng-container",7),t.YNc(41,T,3,0,"ng-container",7),t.qZA()),2&c&&(t.xp6(20),t.Oqu(i.dataservice.totalContactCount?i.dataservice.totalContactCount:0),t.xp6(7),t.Oqu(i.dataservice.inviteCharge),t.xp6(7),t.Oqu(i.dataservice.totalContactCount?i.dataservice.totalContactCount*i.dataservice.inviteCharge:0),t.xp6(6),t.Q6J("ngIf","invite"==i._route.snapshot.params.invite_type),t.xp6(1),t.Q6J("ngIf","invite"!=i._route.snapshot.params.invite_type))},dependencies:[v.O5,a.oU,a.YG,a.Sm,a.PM,a.FN,a.Zi,a.wI,a.W2,a.fr,a.jY,a.Gu,a.Q$,a.Nd,a.wd,a.sr,a.cs],styles:["ion-title[_ngcontent-%COMP%]{text-align:center;position:absolute;inset:0}.ion-content-center[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}ion-card[_ngcontent-%COMP%]{width:80%;margin:auto}ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:20px;font-weight:900;color:#000}ion-card[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}ion-card[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:16px}ion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;margin-top:10px;word-spacing:1px}ion-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;font-weight:600}ion-card[_ngcontent-%COMP%]   .total_cost[_ngcontent-%COMP%]{border-top:1px solid;padding-top:10px}ion-card[_ngcontent-%COMP%]   .total_cost[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{font-weight:900}ion-footer[_ngcontent-%COMP%]{display:flex;justify-content:center;position:relative;top:-40px}ion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:150px}"]}),s})()}];let m=(()=>{class s{}return s.\u0275fac=function(c){return new(c||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[_.Bz.forChild(u),_.Bz]}),s})(),P=(()=>{class s{}return s.\u0275fac=function(c){return new(c||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[v.ez,n.u5,a.Pc,m]}),s})()},6866:(x,O,e)=>{e.d(O,{I:()=>t});var v=e(7582),n=e(4893),a=e(8058),_=e(2468),h=e(9808);function M(d,f){1&d&&(n.ynx(0),n.TgZ(1,"P"),n._uU(2,"Your public event has been sent for approval. You will be notified once it's approved."),n.qZA(),n.BQk())}let t=(()=>{class d{constructor(g,r){this.modalController=g,this.dataservice=r}ngOnInit(){}closeModal(){return(0,v.mG)(this,void 0,void 0,function*(){yield this.modalController.dismiss({dismissed:!0})})}}return d.\u0275fac=function(g){return new(g||d)(n.Y36(a.IN),n.Y36(_.D))},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-success"]],decls:13,vars:1,consts:[["slot","start"],[3,"click"],["slot","end","name","close"],[1,"ion-padding"],[1,"contianer"],["src","assets/images/congratulation.png"],[1,"text"],[1,"head-text"],[4,"ngIf"],[1,"foot"],["expand","block","color","secondary","shape","round",3,"click"]],template:function(g,r){1&g&&(n.TgZ(0,"ion-buttons",0)(1,"ion-button",1),n.NdJ("click",function(){return r.closeModal()}),n._UZ(2,"ion-icon",2),n.qZA()(),n.TgZ(3,"ion-content",3)(4,"div",4),n._UZ(5,"ion-img",5),n.TgZ(6,"div",6)(7,"p",7),n._uU(8,"Event creation complete!"),n.qZA(),n.YNc(9,M,3,0,"ng-container",8),n.qZA(),n.TgZ(10,"div",9)(11,"ion-button",10),n.NdJ("click",function(){return r.closeModal()}),n._uU(12,"Close"),n.qZA()()()()),2&g&&(n.xp6(9),n.Q6J("ngIf",0==r.dataservice.public_event))},dependencies:[h.O5,a.YG,a.Sm,a.W2,a.gu,a.Xz],styles:["ion-icon[_ngcontent-%COMP%]{font-size:1.4rem}.contianer[_ngcontent-%COMP%]{position:relative;top:10%}.contianer[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;height:40vh;border-radius:20px;margin:auto}.contianer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{text-align:center}.contianer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .head-text[_ngcontent-%COMP%]{font-size:1.2rem;word-spacing:2px;font-weight:600}.contianer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;font-weight:bolder}.contianer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5;font-weight:500}.contianer[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]{margin-top:40px;text-align:center}.contianer[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{background:var(--ion-color-dark);padding:7px;margin-left:10px;border-radius:50%}.contianer[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{max-width:250px;margin:40px auto auto;height:40px}"]}),d})()},6524:(x,O,e)=>{e.d(O,{O:()=>g});var v=e(7582),n=e(520);const _=(0,e(7423).fo)("Network",{web:()=>e.e(4203).then(e.bind(e,4203)).then(r=>new r.NetworkWeb)});var h=e(4893),M=e(2468),t=e(6501);let d="https://api.soeasyapp.com/",g=(()=>{class r{constructor(p,u,m){this.http=p,this.dataservice=u,this.common=m,this.checkInternetConnection()}initiatePayment(p,u){const m={headers:(new n.WM).set("Content-Type","application/json").set("Authorization","PAY46ZGYME1AE6LUR1AVI1701862757.YFGJ11SECKEY")};return new Promise((P,s)=>{this.http.post("https://admin.payomatix.com/payment/merchant/"+u,JSON.stringify(p),m).subscribe(o=>{P(o)},o=>{s(o),"HttpErrorResponse"==o.name&&("Unknown Error"==o.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==o.statusText?"Something Went Wrong...":o.statusText)),console.log("In Chatconnect provider : Error",o)})})}postData(p,u){const m={headers:(new n.WM).set("Content-Type","application/json")};return new Promise((P,s)=>{this.http.post(d+u,JSON.stringify(p),m).subscribe(o=>{P(o)},o=>{s(o),"HttpErrorResponse"==o.name&&("Unknown Error"==o.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==o.statusText?"Something Went Wrong...":o.statusText)),console.log("In Chatconnect provider : Error",o)})})}checkInternetConnection(){return(0,v.mG)(this,void 0,void 0,function*(){(yield _.getStatus()).connected?console.log("Internet is connected"):(console.log("No internet connection"),this.common.presentToast("","Check your internet connection"))})}postFormData(p,u){return new Promise((m,P)=>{const s=(new n.WM).set("Accept","application/json");this.http.post(d+u,p,{headers:s}).subscribe(o=>{m(o)},o=>{P(o)})})}}return r.\u0275fac=function(p){return new(p||r)(h.LFG(n.eN),h.LFG(M.D),h.LFG(t.v))},r.\u0275prov=h.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);