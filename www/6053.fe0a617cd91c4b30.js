"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6053],{6524:(Z,M,o)=>{o.d(M,{O:()=>y});var x=o(7582),p=o(520);const i=(0,o(7423).fo)("Network",{web:()=>o.e(4203).then(o.bind(o,4203)).then(g=>new g.NetworkWeb)});var v=o(4893),e=o(2468),u=o(6501);let _="https://api.soeasyapp.com/",y=(()=>{class g{constructor(l,d,h){this.http=l,this.dataservice=d,this.common=h,this.checkInternetConnection()}initiatePayment(l,d){const h={headers:(new p.WM).set("Content-Type","application/json").set("Authorization","PAY46ZGYME1AE6LUR1AVI1701862757.YFGJ11SECKEY")};return new Promise((T,f)=>{this.http.post("https://admin.payomatix.com/payment/merchant/"+d,JSON.stringify(l),h).subscribe(s=>{T(s)},s=>{f(s),"HttpErrorResponse"==s.name&&("Unknown Error"==s.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==s.statusText?"Something Went Wrong...":s.statusText)),console.log("In Chatconnect provider : Error",s)})})}postData(l,d){const h={headers:(new p.WM).set("Content-Type","application/json")};return new Promise((T,f)=>{this.http.post(_+d,JSON.stringify(l),h).subscribe(s=>{T(s)},s=>{f(s),"HttpErrorResponse"==s.name&&("Unknown Error"==s.statusText?this.checkInternetConnection():this.common.presentToast("","OK"==s.statusText?"Something Went Wrong...":s.statusText)),console.log("In Chatconnect provider : Error",s)})})}checkInternetConnection(){return(0,x.mG)(this,void 0,void 0,function*(){(yield i.getStatus()).connected?console.log("Internet is connected"):(console.log("No internet connection"),this.common.presentToast("","Check your internet connection"))})}postFormData(l,d){return new Promise((h,T)=>{const f=(new p.WM).set("Accept","application/json");this.http.post(_+d,l,{headers:f}).subscribe(s=>{h(s)},s=>{T(s)})})}}return g.\u0275fac=function(l){return new(l||g)(v.LFG(p.eN),v.LFG(e.D),v.LFG(u.v))},g.\u0275prov=v.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},6053:(Z,M,o)=>{o.r(M),o.d(M,{TrendingPageModule:()=>s});var x=o(9808),p=o(2382),P=o(2561),i=o(8058),v=o(7582),e=o(4893),u=o(1591),_=o(6501),O=o(2468),y=o(7053),g=o(6524);const w=["searchBar"],l=["slider"];function d(r,m){if(1&r){const n=e.EpF();e.ynx(0),e.TgZ(1,"ion-col",14),e.NdJ("click",function(){const c=e.CHM(n).$implicit,C=e.oxw();return e.KtG(C.ExploreEv(c))}),e._UZ(2,"ion-img",15),e.TgZ(3,"h4"),e._uU(4),e.qZA()(),e.BQk()}if(2&r){const n=m.$implicit;e.xp6(2),e.Q6J("src",n.cat_img),e.xp6(2),e.Oqu(n.name)}}function h(r,m){if(1&r){const n=e.EpF();e.ynx(0),e.TgZ(1,"ion-col",14),e.NdJ("click",function(){const c=e.CHM(n).$implicit,C=e.oxw();return e.KtG(C.ExploreCom(c))}),e._UZ(2,"ion-img",15),e.TgZ(3,"h4"),e._uU(4),e.qZA()(),e.BQk()}if(2&r){const n=m.$implicit;e.xp6(2),e.Q6J("src",null==n?null:n.cat_img),e.xp6(2),e.Oqu(null==n?null:n.name)}}const f=[{path:"",component:(()=>{class r{constructor(n,t,a,c,C,S){this.commonservice=n,this._router=t,this.dataservice=a,this.authservice=c,this.chatconnect=C,this.alertController=S,this.showSearchBar=!1,this.searchQuery="",this.fadeInState="void",this.events_categories=[],this.filterData=[],this.segment=0}segmentChanged(){return(0,v.mG)(this,void 0,void 0,function*(){yield this.slider.slideTo(this.segment)})}slideChanged(){this.slider.getActiveIndex().then(n=>{console.log("Current index: "+n),this.segment=n})}get shouldShowEvents(){return 0===this.segment}toggleSearchBar(){this.showSearchBar=!this.showSearchBar,this.showSearchBar?setTimeout(()=>{this.searchBarRef.nativeElement.setFocus()},100):this.searchQuery=""}ngOnInit(){}filterItems(n){console.log(n.detail.value),this.dataservice.isNullOrUndefined(n.detail.value)||(this.filterData=this.events_categories.filter(t=>t.name.toLowerCase().indexOf(n.detail.value.toLowerCase())>-1),this.triggerFadeInAnimation())}triggerFadeInAnimation(){this.fadeInState="in"}ionViewDidEnter(){console.log("ionViewDidEnter"),this.All_events()}All_events(){this.commonservice.show();let n={user_token:this.dataservice.getUserData()};this.chatconnect.postData(n,"all_categories").then(t=>{this.commonservice.hide(),console.log(t),1===t.Response.status?(this.events_categories=t.Response.all_categories,this.events_categories.sort((a,c)=>{const C=a.name.toLowerCase(),S=c.name.toLowerCase();return C.localeCompare(S)}),this.filterData=this.events_categories):this.commonservice.presentToast("Oops",t.Response.message)},t=>{console.log("Connection failed Messge")})}ExploreEv(n){console.log(n),this._router.navigate(["/exploreeve",{event_id:n.id}])}ExploreCom(n){console.log(n),this._router.navigate(["/exeplorecom",{community_id:n.id}])}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(_.v),e.Y36(P.F0),e.Y36(O.D),e.Y36(y.$),e.Y36(g.O),e.Y36(i.Br))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-trending"]],viewQuery:function(n,t){if(1&n&&(e.Gf(w,5,e.SBq),e.Gf(l,7)),2&n){let a;e.iGM(a=e.CRH())&&(t.searchBarRef=a.first),e.iGM(a=e.CRH())&&(t.slider=a.first)}},decls:30,vars:7,consts:[[1,"top"],["slot","start"],["color","","slot","start","name","arrow-back-outline","routerLink","/tabs/home"],["name","search-outline",1,"search_icon",3,"click"],["slot","fixed",3,"ngModel","ngModelChange","ionChange"],["value","0"],["value","1"],["placeholder","Search Category",3,"ngModel","hidden","ngModelChange","ionCancel","ionChange"],["searchBar",""],["scrollbar","true",3,"ionSlideDidChange"],["slider",""],[2,"margin-top","47px","width","100%"],[1,"container"],[4,"ngFor","ngForOf"],["size","4",3,"click"],[1,"img",3,"src"]],template:function(n,t){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"div",0)(3,"ion-buttons",1),e._UZ(4,"ion-icon",2),e.qZA(),e.TgZ(5,"ion-title"),e._uU(6,"Explore"),e.qZA(),e.TgZ(7,"ion-icon",3),e.NdJ("click",function(){return t.toggleSearchBar()}),e.qZA()()()(),e.TgZ(8,"ion-content")(9,"ion-segment",4),e.NdJ("ngModelChange",function(c){return t.segment=c})("ionChange",function(){return t.segmentChanged()}),e.TgZ(10,"ion-segment-button",5)(11,"ion-label"),e._uU(12,"Events"),e.qZA()(),e.TgZ(13,"ion-segment-button",6)(14,"ion-label"),e._uU(15,"Community"),e.qZA()()(),e.TgZ(16,"ion-searchbar",7,8),e.NdJ("ngModelChange",function(c){return t.searchQuery=c})("ionCancel",function(){return t.toggleSearchBar()})("ionChange",function(c){return t.filterItems(c)}),e.qZA(),e.TgZ(18,"ion-slides",9,10),e.NdJ("ionSlideDidChange",function(){return t.slideChanged()}),e.TgZ(20,"ion-slide")(21,"ion-list",11)(22,"div",12)(23,"ion-row"),e.YNc(24,d,5,2,"ng-container",13),e.qZA()()()(),e.TgZ(25,"ion-slide")(26,"ion-list",11)(27,"div",12)(28,"ion-row"),e.YNc(29,h,5,2,"ng-container",13),e.qZA()()()()()()),2&n&&(e.xp6(9),e.Q6J("ngModel",t.segment),e.xp6(7),e.Q6J("ngModel",t.searchQuery)("hidden",!t.showSearchBar),e.xp6(5),e.Q6J("@fadeIn",void 0),e.xp6(3),e.Q6J("ngForOf",t.filterData),e.xp6(2),e.Q6J("@fadeIn",void 0),e.xp6(3),e.Q6J("ngForOf",t.filterData))},dependencies:[x.sg,p.JJ,p.On,i.Sm,i.wI,i.W2,i.Gu,i.gu,i.Xz,i.Q$,i.q_,i.Nd,i.VI,i.cJ,i.GO,i.A$,i.Hr,i.wd,i.sr,i.QI,i.j9,i.YI,P.rH],styles:["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{text-align:center}ion-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.6rem}.top[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.top[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{text-align:center}.top[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.6rem;padding-right:10px}ion-searchbar[_ngcontent-%COMP%]{position:sticky;top:48px;z-index:2}ion-segment-button[_ngcontent-%COMP%]{background-color:var(--ion-color-secondary);color:#fff;--color-hover:white}.segment-button-checked[_ngcontent-%COMP%]{background:#152c01;--color: white;--color-checked:white;--indicator-color:#152c01}ion-segment.ios[_ngcontent-%COMP%]{padding:5px}ion-segment.ios[_ngcontent-%COMP%]   ion-segment-button.ios[_ngcontent-%COMP%]{padding:5px}ion-segment.ios[_ngcontent-%COMP%]   .segment-button-checked.ios[_ngcontent-%COMP%]{--color-checked: #fff;font-weight:bolder}ion-segment.ios[_ngcontent-%COMP%]   ion-label.ios[_ngcontent-%COMP%]{max-width:100%;text-overflow:ellipsis;text-wrap:nowrap;overflow:hidden;font-size:16px}.container[_ngcontent-%COMP%]{margin-bottom:80px}.container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:14px}.container[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center;border-radius:15px;height:105px;width:50%;margin:auto}.container[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{position:absolute;bottom:7px;left:-5px;right:-5px;margin:0 10px 10px;border-radius:0 0 9px 9px;height:32px;padding-top:7px}.container[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:50px}"],data:{animation:[(0,u.X$)("fadeIn",[(0,u.SB)("void",(0,u.oB)({opacity:0})),(0,u.eR)(":enter",[(0,u.jt)("1000ms ease",(0,u.oB)({opacity:1}))])])]}}),r})()}];let s=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[x.ez,p.u5,i.Pc,P.Bz.forChild(f)]}),r})()}}]);