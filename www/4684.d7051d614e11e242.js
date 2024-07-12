"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4684],{4684:(O,v,e)=>{e.r(v),e.d(v,{AddMoreGuestPageModule:()=>f});var g=e(9808),a=e(2382),t=e(8058),o=e(2561),m=e(7101),p=e(4893);const P=[{path:"",component:m.P}];let M=(()=>{class i{}return i.\u0275fac=function(h){return new(h||i)},i.\u0275mod=p.oAB({type:i}),i.\u0275inj=p.cJS({imports:[o.Bz.forChild(P),o.Bz]}),i})(),f=(()=>{class i{}return i.\u0275fac=function(h){return new(h||i)},i.\u0275mod=p.oAB({type:i}),i.\u0275inj=p.cJS({imports:[g.ez,a.u5,t.Pc,a.UX,M]}),i})()},7101:(O,v,e)=>{e.d(v,{P:()=>h});var g=e(7582),a=e(2382),t=e(4893),o=e(8058),m=e(2313),p=e(2561),P=e(2468),M=e(6524),f=e(6501),i=e(9808);function l(r,u){if(1&r){const s=t.EpF();t.ynx(0),t.TgZ(1,"ion-icon",16),t.NdJ("click",function(){t.CHM(s);const d=t.oxw();return t.KtG(d.closeModal())}),t.qZA(),t.BQk()}}let h=(()=>{class r{constructor(s,c,d,n,C,_,A,E,T,G,y){this.modalCtrl=s,this.navParams=c,this._router=n,this.modalController=C,this.dataservice=_,this.chatconnect=A,this.common=E,this.formBuilder=T,this.location=G,this.alertController=y,this.is_modal_open=!1,this.isSubmitted=!1}ngOnInit(){return(0,g.mG)(this,void 0,void 0,function*(){1==this.navParams.data.is_modal&&(this.navParams.get("event_id"),this.is_modal_open=!0),this.ionicForm=this.formBuilder.group({person_name:["",[a.kI.required]],person_number:["",[a.kI.required]],person_gender:["",[a.kI.required]]})})}submit(){var s,c,d;return(0,g.mG)(this,void 0,void 0,function*(){if(this.isSubmitted=!0,this.ionicForm.markAllAsTouched(),this.ionicForm.valid){const C=this.dataservice.getUserData();var n=new FormData;null!==C&&n.append("user_token",C),n.append("event_id",this.navParams.get("event_id")),n.append("person_name",null===(s=this.ionicForm.get("person_name"))||void 0===s?void 0:s.value),n.append("person_number",null===(c=this.ionicForm.get("person_number"))||void 0===c?void 0:c.value),n.append("person_gender",null===(d=this.ionicForm.get("person_gender"))||void 0===d?void 0:d.value),n.append("event_type",this.navParams.get("event_type")),this.chatconnect.postFormData(n,"add_more_guest_to_event").then(_=>{this.common.hide(),1==_.Response.status?(this.common.presentToast("",_.Response.message),this.closeModal()):this.common.presentToast("Oops",_.Response.message)},_=>{this.common.hide(),console.log("Connection failed Messge")})}else(yield this.alertController.create({subHeader:"Please Required details",buttons:["Dismiss"]})).present()})}closeModal(){return(0,g.mG)(this,void 0,void 0,function*(){yield this.modalCtrl.dismiss({dismissed:!0})})}}return r.\u0275fac=function(s){return new(s||r)(t.Y36(o.IN),t.Y36(o.X1),t.Y36(m.H7),t.Y36(p.F0),t.Y36(o.IN),t.Y36(P.D),t.Y36(M.O),t.Y36(f.v),t.Y36(a.qu),t.Y36(i.Ye),t.Y36(o.Br))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-add-more-guest"]],decls:29,vars:4,consts:[[3,"translucent"],[2,"text-align","center"],[4,"ngIf"],[3,"fullscreen"],[3,"formGroup","ngSubmit"],[1,"container"],["fill","outline"],["position","floating"],["formControlName","person_name","type","text","placeholder","Participant Name",1,"input_box"],["formControlName","person_number","type","tel","maxLength","10","placeholder","Mobile Number",1,"input_box"],["formControlName","person_gender","placeholder","Select Gender",1,"input_box"],["value","Male"],["value","Female"],["value","Other"],[1,"submit_btn"],["shape","round","type","submit","color","secondary"],["slot","end","name","close-outline",1,"ion-padding-end",3,"click"]],template:function(s,c){1&s&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),t._uU(3,"Add Guest"),t.qZA(),t.YNc(4,l,2,0,"ng-container",2),t.qZA()(),t.TgZ(5,"ion-content",3)(6,"form",4),t.NdJ("ngSubmit",function(){return c.submit()}),t.TgZ(7,"div",5)(8,"ion-item",6)(9,"ion-label",7),t._uU(10,"Name"),t.qZA(),t._UZ(11,"ion-input",8),t.qZA(),t.TgZ(12,"ion-item",6)(13,"ion-label",7),t._uU(14,"Mobile Number"),t.qZA(),t._UZ(15,"ion-input",9),t.qZA(),t.TgZ(16,"ion-item",6)(17,"ion-label",7),t._uU(18,"Gender"),t.qZA(),t.TgZ(19,"ion-select",10)(20,"ion-select-option",11),t._uU(21,"Male"),t.qZA(),t.TgZ(22,"ion-select-option",12),t._uU(23,"Female"),t.qZA(),t.TgZ(24,"ion-select-option",13),t._uU(25,"Other"),t.qZA()()(),t.TgZ(26,"div",14)(27,"ion-button",15),t._uU(28,"Add Guest"),t.qZA()()()()()),2&s&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("ngIf",c.is_modal_open),t.xp6(1),t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("formGroup",c.ionicForm))},dependencies:[i.O5,a._Y,a.JJ,a.JL,o.YG,o.W2,o.Gu,o.gu,o.pK,o.Ie,o.Q$,o.t9,o.n0,o.wd,o.sr,o.QI,o.j9,a.sg,a.u],styles:[".container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border:1px solid #285500;border-radius:5px;margin:20px 10px}.container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{--padding-start: 10px}.container[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%]{position:absolute!important;right:5px!important}.container[_ngcontent-%COMP%]   .submit_btn[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),r})()},6524:(O,v,e)=>{e.d(v,{O:()=>i});var g=e(7582),a=e(520);const o=(0,e(7423).fo)("Network",{web:()=>e.e(4203).then(e.bind(e,4203)).then(l=>new l.NetworkWeb)});var m=e(4893),p=e(2468),P=e(6501);let M="https://api.soeasyapp.com/",i=(()=>{class l{constructor(r,u,s){this.http=r,this.dataservice=u,this.common=s,this.checkInternetConnection()}initiatePayment(r,u){const s={headers:(new a.WM).set("Content-Type","application/json").set("Authorization","PAY46ZGYME1AE6LUR1AVI1701862757.YFGJ11SECKEY")};return new Promise((c,d)=>{this.http.post("https://admin.payomatix.com/payment/merchant/"+u,JSON.stringify(r),s).subscribe(n=>{c(n)},n=>{d(n),"HttpErrorResponse"==n.name&&("Unknown Error"==n.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==n.statusText?"Something Went Wrong...":n.statusText)),console.log("In Chatconnect provider : Error",n)})})}postData(r,u){const s={headers:(new a.WM).set("Content-Type","application/json")};return new Promise((c,d)=>{this.http.post(M+u,JSON.stringify(r),s).subscribe(n=>{c(n)},n=>{d(n),"HttpErrorResponse"==n.name&&("Unknown Error"==n.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==n.statusText?"Something Went Wrong...":n.statusText)),console.log("In Chatconnect provider : Error",n)})})}checkInternetConnection(){return(0,g.mG)(this,void 0,void 0,function*(){(yield o.getStatus()).connected?console.log("Internet is connected"):(console.log("No internet connection"),this.common.presentToast("","Check your internet connection"))})}postFormData(r,u){return new Promise((s,c)=>{const d=(new a.WM).set("Accept","application/json");this.http.post(M+u,r,{headers:d}).subscribe(n=>{s(n)},n=>{c(n)})})}}return l.\u0275fac=function(r){return new(r||l)(m.LFG(a.eN),m.LFG(p.D),m.LFG(P.v))},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);