"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6561],{6561:(w,A,r)=>{r.r(A),r.d(A,{AllmemberPageModule:()=>Z});var b=r(9808),g=r(2382),c=r(8058),y=r(2561),_=r(7582),e=r(4893),C=r(6501),T=r(2468),x=r(6524);function P(n,m){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"ion-icon",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2).$implicit,a=e.oxw(2);return e.KtG(a.remove_admin(o.user_id))}),e.qZA(),e.BQk()}}function h(n,m){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"ion-icon",17),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2).$implicit,a=e.oxw(2);return e.KtG(a.make_admin(o.user_id))}),e.qZA(),e.BQk()}}function M(n,m){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"ion-item"),e._UZ(2,"ion-icon",13),e.TgZ(3,"ion-label",14),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.memberdetails(o.user_id))}),e._uU(4),e.qZA(),e.YNc(5,P,2,0,"ng-container",9),e.YNc(6,h,2,0,"ng-container",9),e.TgZ(7,"ion-icon",15),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.deletemember(o.user_id))}),e.qZA()(),e.BQk()}if(2&n){const t=e.oxw().$implicit;e.xp6(2),e.Q6J("name",1===t.is_admin?"checkmark-circle":""),e.xp6(2),e.Oqu(t.full_name),e.xp6(1),e.Q6J("ngIf",1==t.is_admin),e.xp6(1),e.Q6J("ngIf",0==t.is_admin)}}function d(n,m){if(1&n&&(e.ynx(0),e.YNc(1,M,8,4,"ng-container",9),e.BQk()),2&n){const t=m.$implicit,s=e.oxw(2);e.xp6(1),e.Q6J("ngIf",0==t.request&&t.user_id!=s.communityData[0].user_id)}}function u(n,m){if(1&n&&(e.TgZ(0,"div",11)(1,"h2"),e._uU(2,"All Members"),e.qZA(),e.YNc(3,d,2,1,"ng-container",12),e.qZA()),2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngForOf",t.filterData)}}function p(n,m){1&n&&(e.TgZ(0,"div")(1,"p",18),e._uU(2,"No Members Added"),e.qZA()())}function f(n,m){1&n&&(e.TgZ(0,"div",19),e._uU(1," No results found. "),e.qZA())}const i=[{path:"",component:(()=>{class n{constructor(t,s,o,a,l,I){this.commonservice=t,this._router=s,this.modalController=o,this.dataservice=a,this.chatconnect=l,this.alertController=I,this.showSearchBar=!1,this.searchQuery="",this.filterData=[],this.noResultFound=!1,this.noUserfound=!1}toggleSearchBar(){this.showSearchBar=!this.showSearchBar,this.showSearchBar||(this.searchQuery="")}filterItems(t){const s=t.detail.value.toLowerCase();this.dataservice.isNullOrUndefined(s)?(this.filterData=[],this.noResultFound=!0):(this.filterData=this.member.filter(o=>o.full_name.toLowerCase().includes(s)),this.noResultFound=0===this.filterData.length)}doRefresh(t){this.ngOnInit(),setTimeout(()=>{t.target.complete()},2e3)}ngOnInit(){this.GetUserEvents()}GetUserEvents(){const t=this.dataservice.GetAccountuser();let s={user_token:this.dataservice.getUserData(),community_id:t};this.chatconnect.postData(s,"paid_community_details_by_id").then(o=>{console.log(o),1==o.Response.status?(this.communityData=o.Response.Details,this.member=this.communityData[0].member,this.filterData=this.member,this.noUserfound=0===this.member.length):(this.commonservice.presentToast("Oops",o.Response.message),this.noUserfound=!0)},o=>{console.log("Connection failed Message"),this.noUserfound=!0})}memberdetails(t){console.log("This is member ID ==>",t),this._router.navigate(["/member-details",{user_id:t}])}make_admin(t){return(0,_.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Confirm",message:"Are you sure want to make admin?",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary"},{text:"Yes",handler:()=>{console.log("Member Id ==>",t),this.commonservice.show("Please Wait");const o=this.dataservice.GetAccountuser();let a={user_token:this.dataservice.getUserData(),community_id:o,member_id:t,command:"admin",premium:1,command_Type:"member"};this.chatconnect.postData(a,"verify_member").then(l=>{this.commonservice.hide(),console.log(l),1==l.Response.status?(this.commonservice.presentToast("",l.Response.message),this.GetUserEvents()):this.commonservice.presentToast("Oops",l.Response.message)},l=>{console.log("Connection failed Message")})}}]})).present()})}remove_admin(t){return(0,_.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Confirm",message:"Are you sure want to remove?",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary"},{text:"Yes",handler:()=>{console.log("Member Id ==>",t),this.commonservice.show("Please Wait");const o=this.dataservice.GetAccountuser();let a={user_token:this.dataservice.getUserData(),community_id:o,member_id:t,command:"admin_remove",premium:1,command_Type:"member"};this.chatconnect.postData(a,"verify_member").then(l=>{this.commonservice.hide(),console.log(l),1==l.Response.status?(this.commonservice.presentToast("",l.Response.message),this.GetUserEvents()):this.commonservice.presentToast("Oops",l.Response.message)},l=>{console.log("Connection failed Message")})}}]})).present()})}deletemember(t){return(0,_.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Confirm",message:"Are you sure want to remove?",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary"},{text:"Yes",handler:()=>{console.log("Member Id ==>",t),this.commonservice.show("Please Wait");const o=this.dataservice.GetAccountuser();let a={user_token:this.dataservice.getUserData(),community_id:o,member_id:t,command:"delete",premium:1,command_Type:"member"};this.chatconnect.postData(a,"verify_member").then(l=>{this.commonservice.hide(),console.log(l),1==l.Response.status?(this.commonservice.presentToast("",l.Response.message),this.GetUserEvents()):this.commonservice.presentToast("Oops",l.Response.message)},l=>{console.log("Connection failed Message")})}}]})).present()})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C.v),e.Y36(y.F0),e.Y36(c.IN),e.Y36(T.D),e.Y36(x.O),e.Y36(c.Br))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-allmember"]],decls:16,vars:5,consts:[[1,"top"],["slot","start"],["text","","icon","arrow-back-outline"],["name","search-outline",1,"search_icon",3,"click"],[1,"ion-padding-start","ion-padding-end"],["slot","fixed",3,"ionRefresh"],["pullingIcon","arrow-down","pullingText","Pull to refresh","refreshingSpinner","circles"],["placeholder","Search Events",3,"ngModel","hidden","ngModelChange","ionCancel","ionChange"],["class","container",4,"ngIf","ngIfElse"],[4,"ngIf"],["noResultsTemplate",""],[1,"container"],[4,"ngFor","ngForOf"],["slot","start",2,"color","rgb(18, 4, 92)",3,"name"],[2,"text-transform","capitalize",3,"click"],["name","trash-outline","slot","end",2,"color","red",3,"click"],["name","remove-circle","slot","end",3,"click"],["name","add-circle-outline","slot","end",3,"click"],[1,"no-results-message"],[1,"no-results"]],template:function(t,s){if(1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"div",0)(3,"ion-buttons",1),e._UZ(4,"ion-back-button",2),e.qZA(),e.TgZ(5,"ion-title"),e._uU(6,"Members"),e.qZA(),e.TgZ(7,"ion-icon",3),e.NdJ("click",function(){return s.toggleSearchBar()}),e.qZA()()()(),e.TgZ(8,"ion-content",4)(9,"ion-refresher",5),e.NdJ("ionRefresh",function(a){return s.doRefresh(a)}),e._UZ(10,"ion-refresher-content",6),e.qZA(),e.TgZ(11,"ion-searchbar",7),e.NdJ("ngModelChange",function(a){return s.searchQuery=a})("ionCancel",function(){return s.toggleSearchBar()})("ionChange",function(a){return s.filterItems(a)}),e.qZA(),e.YNc(12,u,4,1,"div",8),e.YNc(13,p,3,0,"div",9),e.YNc(14,f,2,0,"ng-template",null,10,e.W1O),e.qZA()),2&t){const o=e.MAs(15);e.xp6(11),e.Q6J("ngModel",s.searchQuery)("hidden",!s.showSearchBar),e.xp6(1),e.Q6J("ngIf",!s.noResultFound)("ngIfElse",o),e.xp6(1),e.Q6J("ngIf",s.noUserfound)}},dependencies:[b.sg,b.O5,g.JJ,g.On,c.oU,c.Sm,c.W2,c.Gu,c.gu,c.Ie,c.Q$,c.nJ,c.Wo,c.VI,c.wd,c.sr,c.j9,c.cs],styles:[".top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.top[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{text-align:center}.top[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding-right:10px}ion-item[_ngcontent-%COMP%]{--background: transparent;--border-style: solid !important}.no-results-message[_ngcontent-%COMP%]{text-align:center;margin-top:20px;color:gray}ion-searchbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:2}"]}),n})()}];let k=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[y.Bz.forChild(i),y.Bz]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[b.ez,g.u5,g.UX,c.Pc,k]}),n})()},6524:(w,A,r)=>{r.d(A,{O:()=>P});var b=r(7582),g=r(520);const y=(0,r(7423).fo)("Network",{web:()=>r.e(4203).then(r.bind(r,4203)).then(h=>new h.NetworkWeb)});var _=r(4893),e=r(2468),C=r(6501);let T="https://api.soeasyapp.com/",P=(()=>{class h{constructor(d,u,p){this.http=d,this.dataservice=u,this.common=p,this.checkInternetConnection()}initiatePayment(d,u){const p={headers:(new g.WM).set("Content-Type","application/json").set("Authorization","PAY46ZGYME1AE6LUR1AVI1701862757.YFGJ11SECKEY")};return new Promise((f,v)=>{this.http.post("https://admin.payomatix.com/payment/merchant/"+u,JSON.stringify(d),p).subscribe(i=>{f(i)},i=>{v(i),"HttpErrorResponse"==i.name&&("Unknown Error"==i.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==i.statusText?"Something Went Wrong...":i.statusText)),console.log("In Chatconnect provider : Error",i)})})}postData(d,u){const p={headers:(new g.WM).set("Content-Type","application/json")};return new Promise((f,v)=>{this.http.post(T+u,JSON.stringify(d),p).subscribe(i=>{f(i)},i=>{v(i),"HttpErrorResponse"==i.name&&("Unknown Error"==i.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==i.statusText?"Something Went Wrong...":i.statusText)),console.log("In Chatconnect provider : Error",i)})})}checkInternetConnection(){return(0,b.mG)(this,void 0,void 0,function*(){(yield y.getStatus()).connected?console.log("Internet is connected"):(console.log("No internet connection"),this.common.presentToast("","Check your internet connection"))})}postFormData(d,u){return new Promise((p,f)=>{const v=(new g.WM).set("Accept","application/json");this.http.post(T+u,d,{headers:v}).subscribe(i=>{p(i)},i=>{f(i)})})}}return h.\u0275fac=function(d){return new(d||h)(_.LFG(g.eN),_.LFG(e.D),_.LFG(C.v))},h.\u0275prov=_.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()}}]);