"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4171],{4171:(x,O,a)=>{a.r(O),a.d(O,{AllObituaryPageModule:()=>Z});var v=a(9808),p=a(2382),o=a(8058),b=a(2561),y=a(7582),t=a(4893),A=a(6501),C=a(2468),P=a(6524);function T(n,c){if(1&n&&(t.ynx(0),t._UZ(1,"img",17),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",e.person_img,t.LSH)}}function d(n,c){1&n&&t._UZ(0,"img",18)}function M(n,c){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"ion-item",20),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2).$implicit,l=t.oxw();return t.KtG(l.verify_obituary(s.id))}),t._UZ(2,"ion-icon",22),t.TgZ(3,"ion-label"),t._uU(4," Verify"),t.qZA()(),t.BQk()}}function g(n,c){if(1&n){const e=t.EpF();t.YNc(0,M,5,0,"ng-container",19),t.TgZ(1,"ion-item",20),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,l=t.oxw();return t.KtG(l.delete_obituary(s.id))}),t._UZ(2,"ion-icon",21),t.TgZ(3,"ion-label"),t._uU(4,"Delete"),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.Q6J("ngIf",1==(null==e?null:e.status))}}function m(n,c){1&n&&(t.TgZ(0,"div",23)(1,"h5"),t._uU(2,"Waiting for approval"),t.qZA()())}function h(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"ion-card")(2,"ion-card-content")(3,"ion-row")(4,"ion-col",8),t.YNc(5,T,2,1,"ng-container",9),t.YNc(6,d,1,0,"ng-template",null,10,t.W1O),t.qZA(),t.TgZ(8,"ion-col")(9,"h3"),t._uU(10),t.qZA(),t.TgZ(11,"div",11)(12,"ion-label"),t._uU(13),t.qZA()(),t.TgZ(14,"div",11)(15,"ion-label"),t._uU(16),t.qZA()()(),t.TgZ(17,"ion-fab",12)(18,"ion-fab-button",13),t._UZ(19,"ion-icon",14),t.qZA()(),t.TgZ(20,"ion-popover",15),t.YNc(21,g,5,1,"ng-template"),t.qZA(),t.YNc(22,m,3,0,"div",16),t.qZA()()(),t.BQk()),2&n){const e=c.$implicit,r=c.index,s=t.MAs(7);t.xp6(5),t.Q6J("ngIf",null!==(null==e?null:e.person_img))("ngIfElse",s),t.xp6(5),t.Oqu(null==e?null:e.person_name),t.xp6(3),t.Oqu(null==e?null:e.date1),t.xp6(3),t.Oqu(null==e?null:e.description),t.xp6(2),t.MGl("id","click-menu",r,""),t.xp6(2),t.MGl("trigger","click-menu",r,""),t.xp6(2),t.Q6J("ngIf",1==(null==e?null:e.status))}}const f=[{path:"",component:(()=>{class n{constructor(e,r,s,l,u,w,I){this.router=e,this.popoverController=r,this.commonservice=s,this.modalController=l,this.dataservice=u,this.chatconnect=w,this.alertController=I,this.showSearchBar=!1,this.searchQuery="",this.filterData=[]}doRefresh(e){this.ngOnInit(),setTimeout(()=>{e.target.complete()},2e3)}toggleSearchBar(){this.showSearchBar=!this.showSearchBar,this.showSearchBar||(this.searchQuery="")}filterItems(e){console.log(e.detail.value),this.dataservice.isNullOrUndefined(e.detail.value)||(this.filterData=this.obitury.filter(r=>r.person_name.toLowerCase().indexOf(e.detail.value.toLowerCase())>-1))}ngOnInit(){this.GetObituary()}GetObituary(){this.commonservice.show("");const e=this.dataservice.GetAccountuser();let r={user_token:this.dataservice.getUserData(),community_id:e};this.chatconnect.postData(r,"paid_community_details_by_id").then(s=>{this.commonservice.hide(),console.log(s),1==s.Response.status?(this.communityData=s.Response.Details,this.obitury=this.communityData[0].obitury,this.filterData=this.obitury):this.commonservice.presentToast("Oops",s.Response.message)},s=>{console.log("Connection failed Messge")})}verify_obituary(e){return(0,y.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Confirm",message:"Are you sure want to accept request?",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary"},{text:"Yes",handler:()=>{this.popoverController.dismiss();const s=this.dataservice.GetAccountuser();let l={user_token:this.dataservice.getUserData(),community_id:s,row_id:e,command:"verify_obituary",premium:"yes",type:"obituary"};console.log("this is api Data ==>",l),this.chatconnect.postData(l,"samiti_obitury_command").then(u=>{console.log(u),1==u.Response.status?(this.commonservice.presentToast("",u.Response.message),this.GetObituary()):this.commonservice.presentToast("Oops",u.Response.message)},u=>{console.log("Connection failed Messge")})}}]})).present()})}delete_obituary(e){return(0,y.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Confirm",message:"Are you sure want to delete this?",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary"},{text:"Yes",handler:()=>{this.popoverController.dismiss(),console.log("Member Id ==>",e);const s=this.dataservice.GetAccountuser();let l={user_token:this.dataservice.getUserData(),community_id:s,row_id:e,command:"remove_obituary",premium:"yes",type:"obituary"};this.chatconnect.postData(l,"samiti_obitury_command").then(u=>{console.log(u),1==u.Response.status?(this.commonservice.presentToast("",u.Response.message),this.GetObituary()):this.commonservice.presentToast("Oops",u.Response.message)},u=>{console.log("Connection failed Messge")})}}]})).present()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(b.F0),t.Y36(o.Dh),t.Y36(A.v),t.Y36(o.IN),t.Y36(C.D),t.Y36(P.O),t.Y36(o.Br))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-all-obituary"]],decls:12,vars:3,consts:[[1,"top"],["slot","start"],["text","","icon","arrow-back-outline"],["slot","end","name","search-outline",1,"ion-padding-end","search_icon",3,"click"],[1,"ion-padding"],["placeholder","Search..",3,"ngModel","hidden","ngModelChange","ionCancel","ionChange"],[1,"container"],[4,"ngFor","ngForOf"],["size","6"],[4,"ngIf","ngIfElse"],["noImage",""],[1,"title"],[1,"menu_buttton"],[3,"id"],["name","ellipsis-vertical"],["triggerAction","click",3,"trigger"],["class","pending",4,"ngIf"],[2,"height","100%","width","100%",3,"src"],["alt","Silhouette of a person's head","src","https://ionicframework.com/docs/img/demos/avatar.svg"],[4,"ngIf"],[3,"click"],["name","trash-outline"],["name","podium-outline"],[1,"pending"]],template:function(e,r){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"div",0)(3,"ion-buttons",1),t._UZ(4,"ion-back-button",2),t.qZA(),t.TgZ(5,"ion-title"),t._uU(6,"Obituary"),t.qZA()(),t.TgZ(7,"ion-icon",3),t.NdJ("click",function(){return r.toggleSearchBar()}),t.qZA()()(),t.TgZ(8,"ion-content",4)(9,"ion-searchbar",5),t.NdJ("ngModelChange",function(l){return r.searchQuery=l})("ionCancel",function(){return r.toggleSearchBar()})("ionChange",function(l){return r.filterItems(l)}),t.qZA(),t.TgZ(10,"div",6),t.YNc(11,h,23,8,"ng-container",7),t.qZA()()),2&e&&(t.xp6(9),t.Q6J("ngModel",r.searchQuery)("hidden",!r.showSearchBar),t.xp6(2),t.Q6J("ngForOf",r.filterData))},dependencies:[v.sg,v.O5,p.JJ,p.On,o.oU,o.Sm,o.PM,o.FN,o.wI,o.W2,o.IJ,o.W4,o.Gu,o.gu,o.Ie,o.Q$,o.Nd,o.VI,o.wd,o.sr,o.d8,o.j9,o.cs],styles:[".top[_ngcontent-%COMP%]{display:flex}.top[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{text-align:center}ion-card[_ngcontent-%COMP%]{background:var(--ion-color-dark)}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:0;color:#000}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:10px}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding-left:10px}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]::part(image){border-radius:10px}.menu_buttton[_ngcontent-%COMP%]{position:absolute;right:5px;top:3px}.menu_buttton[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{height:30px;width:30px}.pending[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;inset:0;justify-content:center}.pending[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{background:white;width:100%;text-align:center;padding:5px}"]}),n})()}];let i=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[b.Bz.forChild(f),b.Bz]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[v.ez,p.u5,o.Pc,i]}),n})()},6524:(x,O,a)=>{a.d(O,{O:()=>T});var v=a(7582),p=a(520);const b=(0,a(7423).fo)("Network",{web:()=>a.e(4203).then(a.bind(a,4203)).then(d=>new d.NetworkWeb)});var y=a(4893),t=a(2468),A=a(6501);let C="https://api.soeasyapp.com/",T=(()=>{class d{constructor(g,m,h){this.http=g,this.dataservice=m,this.common=h,this.checkInternetConnection()}initiatePayment(g,m){const h={headers:(new p.WM).set("Content-Type","application/json").set("Authorization","PAY46ZGYME1AE6LUR1AVI1701862757.YFGJ11SECKEY")};return new Promise((_,f)=>{this.http.post("https://admin.payomatix.com/payment/merchant/"+m,JSON.stringify(g),h).subscribe(i=>{_(i)},i=>{f(i),"HttpErrorResponse"==i.name&&("Unknown Error"==i.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==i.statusText?"Something Went Wrong...":i.statusText)),console.log("In Chatconnect provider : Error",i)})})}postData(g,m){const h={headers:(new p.WM).set("Content-Type","application/json")};return new Promise((_,f)=>{this.http.post(C+m,JSON.stringify(g),h).subscribe(i=>{_(i)},i=>{f(i),"HttpErrorResponse"==i.name&&("Unknown Error"==i.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==i.statusText?"Something Went Wrong...":i.statusText)),console.log("In Chatconnect provider : Error",i)})})}checkInternetConnection(){return(0,v.mG)(this,void 0,void 0,function*(){(yield b.getStatus()).connected?console.log("Internet is connected"):(console.log("No internet connection"),this.common.presentToast("","Check your internet connection"))})}postFormData(g,m){return new Promise((h,_)=>{const f=(new p.WM).set("Accept","application/json");this.http.post(C+m,g,{headers:f}).subscribe(i=>{h(i)},i=>{_(i)})})}}return d.\u0275fac=function(g){return new(g||d)(y.LFG(p.eN),y.LFG(t.D),y.LFG(A.v))},d.\u0275prov=y.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);