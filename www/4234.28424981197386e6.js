"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4234],{4234:(O,v,c)=>{c.d(v,{Z:()=>D});var h=c(7582),e=c(4893),C=c(6501),x=c(2561),a=c(8058),M=c(2468),T=c(6524),f=c(9808),y=c(2382);const b=["searchBar"],l=["popover"];function P(t,m){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"ion-icon",10),e.NdJ("click",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.closeModal())}),e.qZA(),e.BQk()}}function _(t,m){1&t&&(e.ynx(0),e.TgZ(1,"ion-label",13),e._uU(2," Admin"),e.qZA(),e.BQk())}function g(t,m){if(1&t&&(e.ynx(0),e.TgZ(1,"ion-label",12),e._uU(2),e.qZA(),e.YNc(3,_,3,0,"ng-container",1),e.BQk()),2&t){const n=e.oxw(2),i=n.index,s=n.$implicit,o=e.oxw();e.xp6(1),e.MGl("id","click-trigger",i,""),e.xp6(1),e.Oqu(s.user_name),e.xp6(1),e.Q6J("ngIf",1==s.is_admin&&!o.same_user_created_community)}}function u(t,m){1&t&&(e.ynx(0),e.TgZ(1,"ion-label",13),e._uU(2," Admin"),e.qZA(),e.BQk())}function d(t,m){if(1&t&&(e.ynx(0),e.TgZ(1,"ion-label"),e._uU(2),e.qZA(),e.YNc(3,u,3,0,"ng-container",1),e.BQk()),2&t){const n=e.oxw(2).$implicit,i=e.oxw();e.xp6(2),e.Oqu(n.user_name),e.xp6(1),e.Q6J("ngIf",1==n.is_admin&&!i.same_user_created_community)}}function p(t,m){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"ion-button",14),e.NdJ("click",function(){e.CHM(n);const s=e.oxw(3).$implicit,o=e.oxw();return o.remove_admin(s),e.KtG(o.dismissPopover())}),e._uU(2,"Remove Admin"),e.qZA(),e.BQk()}}function r(t,m){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"ion-button",14),e.NdJ("click",function(){e.CHM(n);const s=e.oxw(4).$implicit,o=e.oxw();return o.make_admin(s),e.KtG(o.dismissPopover())}),e._uU(2,"Make Admin"),e.qZA(),e.BQk()}}function A(t,m){if(1&t&&(e.ynx(0),e.YNc(1,r,3,0,"ng-container",1),e.BQk()),2&t){const n=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",0==n.is_admin)}}function E(t,m){if(1&t&&(e.TgZ(0,"ion-content"),e.YNc(1,p,3,0,"ng-container",1),e.YNc(2,A,2,1,"ng-container",1),e.qZA()),2&t){const n=e.oxw(2).$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.community_data.is_admin&&1==n.is_admin&&!i.same_user_created_community),e.xp6(1),e.Q6J("ngIf",i.community_data.is_admin)}}function I(t,m){if(1&t&&(e.ynx(0),e.TgZ(1,"ion-item"),e.YNc(2,g,4,3,"ng-container",1),e.YNc(3,d,4,2,"ng-container",1),e.TgZ(4,"ion-popover",11),e.YNc(5,E,3,2,"ng-template"),e.qZA()(),e.BQk()),2&t){const n=e.oxw().index,i=e.oxw();e.xp6(2),e.Q6J("ngIf",i.community_data.is_admin),e.xp6(1),e.Q6J("ngIf",!i.community_data.is_admin),e.xp6(1),e.MGl("trigger","click-trigger",n,"")}}function Z(t,m){1&t&&(e.ynx(0),e.TgZ(1,"ion-label",13),e._uU(2," Admin"),e.qZA(),e.BQk())}function k(t,m){if(1&t&&(e.TgZ(0,"ion-item")(1,"ion-label"),e._uU(2),e.qZA(),e.YNc(3,Z,3,0,"ng-container",1),e.qZA()),2&t){const n=e.oxw(2).$implicit;e.xp6(2),e.Oqu(n.user_name),e.xp6(1),e.Q6J("ngIf",1==n.is_admin)}}function B(t,m){if(1&t&&(e.ynx(0),e.YNc(1,k,4,2,"ion-item",1),e.BQk()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",0==n.request)}}function w(t,m){if(1&t&&(e.ynx(0),e.YNc(1,I,6,3,"ng-container",1),e.YNc(2,B,2,1,"ng-container",1),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",1==n.type),e.xp6(1),e.Q6J("ngIf",2==n.type)}}let D=(()=>{class t{constructor(n,i,s,o,R,Q,Y,N){this.commonservice=n,this._router=i,this.modalCtrl=s,this.dataservice=o,this.navCtrl=R,this.popoverController=Q,this.chatconnect=Y,this.alertController=N,this.events_data=[],this.showSearchBar=!1,this.searchQuery="",this.filterData=[],this.is_modal_open=!1,this.community_members=[],this.isOpen=!1}toggleSearchBar(){this.showSearchBar=!this.showSearchBar,this.showSearchBar?setTimeout(()=>{this.searchBarRef.nativeElement.setFocus()},100):this.searchQuery=""}filterItems(n){this.dataservice.isNullOrUndefined(n.detail.value)||(this.filterData=this.community_members.filter(i=>i.user_name.toLowerCase().indexOf(n.detail.value.toLowerCase())>-1))}doRefresh(n){this.ngOnInit(),setTimeout(()=>{n.target.complete()},2e3)}presentPopover(n){this.popover.event=n,this.isOpen=!0}ngOnInit(){this.is_modal_open=!0,this.type=this.dataservice.community_type,this.community_data=this.dataservice.community_member,this.All_community()}All_community(){this.commonservice.show();let n={premium:this.dataservice.is_premium,user_token:this.dataservice.getUserData(),type:this.dataservice.community_type,community_id:this.community_data.id};this.chatconnect.postData(n,"view_community_by_id").then(i=>{this.commonservice.hide(),1==i.Response.status?(this.community_data=i.Response.community_data,this.community_members=i.Response.community_data.community_member,console.log("This is Community details ==>",this.community_data),console.log("Community Member ==> ",this.community_members),this.filterData=this.community_members):this.commonservice.presentToast("Oops",i.Response.message)},i=>{console.log("Connection failed Messge")})}closeModal(){return(0,h.mG)(this,void 0,void 0,function*(){yield this.modalCtrl.dismiss({dismissed:!0})})}make_admin(n){return(0,h.mG)(this,void 0,void 0,function*(){this.community_data.is_admin&&(yield(yield this.alertController.create({header:"Make Admin",message:"Are you sure?",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary"},{text:"Yes",handler:()=>{let s={user_token:this.dataservice.getUserData(),community_id:n.community_id,member_id:n.user_id,command:"admin",premium:0,command_Type:"member"};this.chatconnect.postData(s,"verify_member").then(o=>{1==o.Response.status?(this.commonservice.presentToast("",o.Response.message),this.All_community()):this.commonservice.presentToast("Oops",o.Response.message)},o=>{console.log("Connection failed Messge")})}}]})).present())})}remove_admin(n){return(0,h.mG)(this,void 0,void 0,function*(){console.log("This is Member Details=>",n),console.log("Result==>",n.is_admin=1!=n.is_owner),(n.is_admin=1!=n.is_owner)&&(yield(yield this.alertController.create({header:"Remove Admin",message:"Are you sure?",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary"},{text:"Yes",handler:()=>{let s={user_token:this.dataservice.getUserData(),community_id:n.community_id,member_id:n.user_id,command:"admin_remove",premium:0,command_Type:"member"};this.chatconnect.postData(s,"verify_member").then(o=>{1==o.Response.status?(this.commonservice.presentToast("",o.Response.message),this.All_community()):this.commonservice.presentToast("Oops",o.Response.message)},o=>{console.log("Connection failed Messge")})}}]})).present())})}dismissPopover(){return(0,h.mG)(this,void 0,void 0,function*(){const n=yield this.popoverController.getTop();n&&(yield n.dismiss())})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(C.v),e.Y36(x.F0),e.Y36(a.IN),e.Y36(M.D),e.Y36(a.SH),e.Y36(a.Dh),e.Y36(T.O),e.Y36(a.Br))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-community-member"]],viewQuery:function(n,i){if(1&n&&(e.Gf(b,5,e.SBq),e.Gf(l,5)),2&n){let s;e.iGM(s=e.CRH())&&(i.searchBarRef=s.first),e.iGM(s=e.CRH())&&(i.popover=s.first)}},decls:16,vars:4,consts:[[1,"top"],[4,"ngIf"],["name","search-outline",1,"search_icon",3,"click"],[1,"ion-padding-start","ion-padding-end"],["slot","fixed",3,"ionRefresh"],["pullingIcon","arrow-down","pullingText","Pull to refresh","refreshingSpinner","circles"],["placeholder","Search Member",3,"ngModel","hidden","ngModelChange","ionCancel","ionChange"],["searchBar",""],[1,"container"],[4,"ngFor","ngForOf"],["name","close-outline",3,"click"],["triggerAction","click","side","bottom","alignment","end","size","cover",3,"trigger"],[3,"id"],["slot","end"],["fill","clear",1,"click-button",3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"div",0),e.YNc(3,P,2,0,"ng-container",1),e.TgZ(4,"ion-title"),e._uU(5,"Members"),e.qZA(),e.TgZ(6,"ion-icon",2),e.NdJ("click",function(){return i.toggleSearchBar()}),e.qZA()()()(),e.TgZ(7,"ion-content",3)(8,"ion-refresher",4),e.NdJ("ionRefresh",function(o){return i.doRefresh(o)}),e._UZ(9,"ion-refresher-content",5),e.qZA(),e.TgZ(10,"ion-searchbar",6,7),e.NdJ("ngModelChange",function(o){return i.searchQuery=o})("ionCancel",function(){return i.toggleSearchBar()})("ionChange",function(o){return i.filterItems(o)}),e.qZA(),e.TgZ(12,"div",8)(13,"h2"),e._uU(14,"All Members"),e.qZA(),e.YNc(15,w,3,2,"ng-container",9),e.qZA()()),2&n&&(e.xp6(3),e.Q6J("ngIf",i.is_modal_open),e.xp6(7),e.Q6J("ngModel",i.searchQuery)("hidden",!i.showSearchBar),e.xp6(5),e.Q6J("ngForOf",i.filterData))},dependencies:[f.sg,f.O5,y.JJ,y.On,a.YG,a.W2,a.Gu,a.gu,a.Ie,a.Q$,a.nJ,a.Wo,a.VI,a.wd,a.sr,a.d8,a.j9],styles:[".top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.top[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{text-align:center}.top[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding-right:10px}ion-item[_ngcontent-%COMP%]{--background: transparent;--border-style: solid !important}ion-searchbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:2}ion-label[_ngcontent-%COMP%]{text-transform:capitalize}"]}),t})()},6524:(O,v,c)=>{c.d(v,{O:()=>b});var h=c(7582),e=c(520);const x=(0,c(7423).fo)("Network",{web:()=>c.e(4203).then(c.bind(c,4203)).then(l=>new l.NetworkWeb)});var a=c(4893),M=c(2468),T=c(6501);let f="https://api.soeasyapp.com/",b=(()=>{class l{constructor(_,g,u){this.http=_,this.dataservice=g,this.common=u,this.checkInternetConnection()}initiatePayment(_,g){const u={headers:(new e.WM).set("Content-Type","application/json").set("Authorization","PAY46ZGYME1AE6LUR1AVI1701862757.YFGJ11SECKEY")};return new Promise((d,p)=>{this.http.post("https://admin.payomatix.com/payment/merchant/"+g,JSON.stringify(_),u).subscribe(r=>{d(r)},r=>{p(r),"HttpErrorResponse"==r.name&&("Unknown Error"==r.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==r.statusText?"Something Went Wrong...":r.statusText)),console.log("In Chatconnect provider : Error",r)})})}postData(_,g){const u={headers:(new e.WM).set("Content-Type","application/json")};return new Promise((d,p)=>{this.http.post(f+g,JSON.stringify(_),u).subscribe(r=>{d(r)},r=>{p(r),"HttpErrorResponse"==r.name&&("Unknown Error"==r.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==r.statusText?"Something Went Wrong...":r.statusText)),console.log("In Chatconnect provider : Error",r)})})}checkInternetConnection(){return(0,h.mG)(this,void 0,void 0,function*(){(yield x.getStatus()).connected?console.log("Internet is connected"):(console.log("No internet connection"),this.common.presentToast("","Check your internet connection"))})}postFormData(_,g){return new Promise((u,d)=>{const p=(new e.WM).set("Accept","application/json");this.http.post(f+g,_,{headers:p}).subscribe(r=>{u(r)},r=>{d(r)})})}}return l.\u0275fac=function(_){return new(_||l)(a.LFG(e.eN),a.LFG(M.D),a.LFG(T.v))},l.\u0275prov=a.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);