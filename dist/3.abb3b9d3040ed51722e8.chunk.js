webpackJsonp([3],{Wnfe:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("LMZF"),u=e("s7ht"),o=e("l6K7"),d=(e("WYiA"),e("UHIZ")),a=e("ygJe"),r=e("9iV4"),i=this&&this.__assign||Object.assign||function(l){for(var n,e=1,t=arguments.length;e<t;e++)for(var u in n=arguments[e])Object.prototype.hasOwnProperty.call(n,u)&&(l[u]=n[u]);return l},s=function(){function l(l,n){this.postService=l,this.http=n,this.posts=[]}return l.prototype.mapPostToCalendar=function(l){return l.start=l.date,l.comments=[],l.fullDay=!0,l._id=Date.now(),l.saved=!0,i({},l)},l.prototype.addMember=function(l){return this.http.post(a.a.url+"/api/v1/memberships",l)},l.prototype.savePost=function(l){var n;this.postService.posts.forEach(function(e,t){e._id===l._id&&(n=t)}),this.postService.posts[n]=l},l.prototype.addPost=function(l){this.postService.posts.push(l)},l.prototype.updatePost=function(l){var n;this.postService.posts.forEach(function(l,e){n=e}),console.log(n),this.postService.posts[n]=l,console.log(this.posts)},l}(),c=e("mHUZ"),p=e("Rjt1"),m=this&&this.__assign||Object.assign||function(l){for(var n,e=1,t=arguments.length;e<t;e++)for(var u in n=arguments[e])Object.prototype.hasOwnProperty.call(n,u)&&(l[u]=n[u]);return l},f=function(){function l(l,n,e,t,u){this.calendarService=l,this.container=n,this.router=e,this.postService=t,this.sharedService=u,this.roles=[],this.user={}}return l.prototype.addMember=function(){this.user.role=Number(this.user.role),console.log(this.user),this.calendarService.addMember(m({project:this.container.projectId},this.user)).subscribe(function(l){console.log(l)})},l.prototype.initCalendar=function(l){var n=this;this.fullCalendar=$("#calendar"),this.fullCalendar.fullCalendar({header:{right:"",center:"prev, title, next",left:""},theme:!0,selectable:!0,selectHelper:!0,editable:!0,events:l||[],eventClick:function(l,e,t){n.router.navigate(["/","post",l._id])},select:function(l,e,t){n.createPost.show()},dayClick:function(l,e,t){n.date=l.toDate(),$(n).css("background-color","red")}})},l.prototype.addPost=function(l){var n=this,e=this.calendarService.mapPostToCalendar(l);console.log(e),swal("Post Added","Post has been added to your calendar","success").then(function(){n.calendarService.addPost(e),$("#calendar").fullCalendar("renderEvent",e,!0),n.createPost.hide()})},l.prototype.updatePost=function(){var l=this;swal({title:"Are you sure?",text:"You want to update this post",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update it!"}).then(function(n){n.value&&(l.calendarService.updatePost(l.currentPost),$("#calendar").fullCalendar("updateEvent",l.currentPost))})},l.prototype.deletePost=function(l){this.postService.deletePost(l),swal({title:"Are you sure?",text:"You want to delete this post",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(n){n.value&&swal("Deleted!","The post has been removed from the calendar","success").then(function(){console.log(l),$("#calendar").fullCalendar("removeEvents",l._id),$(".modal").modal("hide")})})},l.prototype.submitForm=function(l){var n=this;console.log(l,"post"),this.postService.createPost(l).subscribe(function(e){console.log(e),c.extend(l,e),n.addPost(l)},function(l){console.log(l)})},l.prototype.ngOnInit=function(){var l=this;this.sharedService.getProjectTemplate().subscribe(function(n){l.roles=n.roles,l.user.role=l.roles[0]}),this.postService.getPosts().subscribe(function(n){console.log(n),l.initCalendar(n)}),this.postService.getCustomAttributes().subscribe(function(n){console.log(n),n.forEach(function(n){l.container.customAttributes[n.name]=n})})},l.prototype.exit=function(){this.createPost.hide()},l}(),v=function(){},h=e("LdGb"),g=e("TRAr"),C=e("Ujhx"),b=e("9gdc"),y=e("e7TK"),M=e("s18B"),S=e("poDJ"),P=e("i24V"),R=e("F4d+"),E=e("0nO6"),O=e("ihXH"),_=e("Un6q"),k=function(){function l(l,n,e){this.fb=l,this.container=n,this.calendarService=e}return l.prototype.ngOnInit=function(){},l.prototype.addMember=function(){console.log(this.role),console.log(this.username),this.calendarService.addMember({project:this.container.projectId,role:this.role,username:this.username}).subscribe(function(l){console.log(l)})},l}(),F=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),t["\u0275did"](1,147456,null,0,E.NgSelectOption,[t.ElementRef,t.Renderer2,[2,E.SelectControlValueAccessor]],{value:[0,"value"]},null),t["\u0275did"](2,147456,null,0,E["\u0275q"],[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](3,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit.order),l(n,2,0,n.context.$implicit.order)},function(l,n){l(n,3,0,n.context.$implicit.name)})}function T(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](2,0,null,null,5,"input",[["class","form-control"],["placeholder","User Email ID"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var u=!0,o=l.component;return"input"===n&&(u=!1!==t["\u0275nov"](l,3)._handleInput(e.target.value)&&u),"blur"===n&&(u=!1!==t["\u0275nov"](l,3).onTouched()&&u),"compositionstart"===n&&(u=!1!==t["\u0275nov"](l,3)._compositionStart()&&u),"compositionend"===n&&(u=!1!==t["\u0275nov"](l,3)._compositionEnd(e.target.value)&&u),"ngModelChange"===n&&(u=!1!==(o.username=e)&&u),u},null,null)),t["\u0275did"](3,16384,null,0,E.DefaultValueAccessor,[t.Renderer2,t.ElementRef,[2,E.COMPOSITION_BUFFER_MODE]],null,null),t["\u0275prd"](1024,null,E.NG_VALUE_ACCESSOR,function(l){return[l]},[E.DefaultValueAccessor]),t["\u0275did"](5,671744,null,0,E.NgModel,[[8,null],[8,null],[8,null],[2,E.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,E.NgControl,null,[E.NgModel]),t["\u0275did"](7,16384,null,0,E.NgControlStatus,[E.NgControl],null,null),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](9,0,null,null,0,"i",[["class","form-group__bar"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275eld"](12,0,null,null,15,"div",[["class","form-group form-group--select"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](14,0,null,null,12,"div",[["class","select"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](16,0,null,null,9,"select",[["class","form-control"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var u=!0,o=l.component;return"change"===n&&(u=!1!==t["\u0275nov"](l,17).onChange(e.target.value)&&u),"blur"===n&&(u=!1!==t["\u0275nov"](l,17).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(o.role=e)&&u),u},null,null)),t["\u0275did"](17,16384,null,0,E.SelectControlValueAccessor,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,E.NG_VALUE_ACCESSOR,function(l){return[l]},[E.SelectControlValueAccessor]),t["\u0275did"](19,671744,null,0,E.NgModel,[[8,null],[8,null],[8,null],[2,E.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,E.NgControl,null,[E.NgModel]),t["\u0275did"](21,16384,null,0,E.NgControlStatus,[E.NgControl],null,null),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](24,802816,null,0,_.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275ted"](-1,null,["\n\n      "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,5,0,e.username),l(n,19,0,e.role),l(n,24,0,e.roles)},function(l,n){l(n,2,0,t["\u0275nov"](n,7).ngClassUntouched,t["\u0275nov"](n,7).ngClassTouched,t["\u0275nov"](n,7).ngClassPristine,t["\u0275nov"](n,7).ngClassDirty,t["\u0275nov"](n,7).ngClassValid,t["\u0275nov"](n,7).ngClassInvalid,t["\u0275nov"](n,7).ngClassPending),l(n,16,0,t["\u0275nov"](n,21).ngClassUntouched,t["\u0275nov"](n,21).ngClassTouched,t["\u0275nov"](n,21).ngClassPristine,t["\u0275nov"](n,21).ngClassDirty,t["\u0275nov"](n,21).ngClassValid,t["\u0275nov"](n,21).ngClassInvalid,t["\u0275nov"](n,21).ngClassPending)})}var w=t["\u0275crt"]({encapsulation:0,styles:[[".fc-time[_ngcontent-%COMP%], .fc-title[_ngcontent-%COMP%]{color:#fff}"]],data:{}});function x(l){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{createPost:0}),(l()(),t["\u0275eld"](1,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](3,0,null,null,6,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](5,0,null,null,1,"button",[["class","btn btn-light btn--icon pull-right"],["style","margin:10px;"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,48).show()&&u),u},null,null)),(l()(),t["\u0275eld"](6,0,null,null,0,"i",[["class","zmdi zmdi-plus-circle"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](8,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275eld"](12,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](14,0,null,null,3,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](16,0,null,null,0,"div",[["id","calendar"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n\n\n    "])),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275eld"](20,16777216,null,null,25,"div",[["bsModal",""],["class","modal fade"]],null,[[null,"click"],[null,"keydown.esc"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,21).onClick(e)&&u),"keydown.esc"===n&&(u=!1!==t["\u0275nov"](l,21).onEsc()&&u),u},null,null)),t["\u0275did"](21,212992,[[1,4],["createPost",4]],0,M.a,[t.ElementRef,t.ViewContainerRef,t.Renderer2,S.a],null,null),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](23,0,null,null,21,"div",[["class","modal-dialog modal-lg"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](25,0,null,null,18,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](27,0,null,null,4,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275eld"](29,0,null,null,1,"h5",[["class","modal-title pull-left"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Create a Post"])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](33,0,null,null,5,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275eld"](35,0,null,null,1,"app-create-post",[],null,[[null,"formSubmitted"],[null,"exit"]],function(l,n,e){var t=!0,u=l.component;return"formSubmitted"===n&&(t=!1!==u.submitForm(e)&&t),"exit"===n&&(t=!1!==u.exit()&&t),t},P.b,P.a)),t["\u0275did"](36,4308992,null,0,R.a,[E.FormBuilder,p.a,o.a,O.a,d.m],{date:[0,"date"],time:[1,"time"]},{exit:"exit",formSubmitted:"formSubmitted"}),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](40,0,null,null,2,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275ted"](-1,null,["\n\n"])),(l()(),t["\u0275eld"](47,16777216,null,null,27,"div",[["bsModal",""],["class","modal fade"]],null,[[null,"click"],[null,"keydown.esc"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,48).onClick(e)&&u),"keydown.esc"===n&&(u=!1!==t["\u0275nov"](l,48).onEsc()&&u),u},null,null)),t["\u0275did"](48,212992,[["addUserModal",4]],0,M.a,[t.ElementRef,t.ViewContainerRef,t.Renderer2,S.a],null,null),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](50,0,null,null,23,"div",[["class","modal-dialog"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](52,0,null,null,20,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](54,0,null,null,4,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275eld"](56,0,null,null,1,"h5",[["class","modal-title pull-left"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Add a member"])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](60,0,null,null,4,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275eld"](62,0,null,null,1,"app-add-user",[],null,null,null,T,F)),t["\u0275did"](63,114688,null,0,k,[E.FormBuilder,p.a,s],{roles:[0,"roles"]},null),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](66,0,null,null,5,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275eld"](69,0,null,null,1,"button",[["class","btn btn-primary"],["style","width: 100%;"],["type","button"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.addMember()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Send Invitation "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,21,0),l(n,36,0,e.date,e.date),l(n,48,0),l(n,63,0,e.roles)},null)}var A=t["\u0275ccf"]("app-calendar",f,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-calendar",[],null,null,null,x,w)),t["\u0275did"](1,114688,null,0,f,[s,p.a,d.m,o.a,u.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),H=e("BhHz"),B=e("3/hO"),I=e("4JSf"),j=e("ZqMj"),D=e("PUf6"),V=e("bb3D"),U=e("Rbxc"),X=e("qCSQ"),L=e("TKh6"),q=e("mJpb"),z=e("4zAq"),J=e("PK6g"),K=e("EQxj"),Z=e("h278"),G=e("0Zl/"),Y=e("3eTq"),Q=e("bIam"),W=e("e6Rn"),ll=e("lxaj"),nl=e("pBJ6");e.d(n,"CalendarModuleNgFactory",function(){return el});var el=t["\u0275cmf"](v,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[h.a,g.a,C.a,b.a,y.a,A]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,_.NgLocalization,_.NgLocaleLocalization,[t.LOCALE_ID,[2,_["\u0275a"]]]),t["\u0275mpd"](4608,r.HttpXsrfTokenExtractor,r["\u0275h"],[_.DOCUMENT,t.PLATFORM_ID,r["\u0275f"]]),t["\u0275mpd"](4608,r["\u0275i"],r["\u0275i"],[r.HttpXsrfTokenExtractor,r["\u0275g"]]),t["\u0275mpd"](5120,r.HTTP_INTERCEPTORS,function(l){return[l]},[r["\u0275i"]]),t["\u0275mpd"](4608,r["\u0275e"],r["\u0275e"],[]),t["\u0275mpd"](6144,r.XhrFactory,null,[r["\u0275e"]]),t["\u0275mpd"](4608,r.HttpXhrBackend,r.HttpXhrBackend,[r.XhrFactory]),t["\u0275mpd"](6144,r.HttpBackend,null,[r.HttpXhrBackend]),t["\u0275mpd"](4608,r.HttpHandler,r["\u0275c"],[r.HttpBackend,t.Injector]),t["\u0275mpd"](4608,r.HttpClient,r.HttpClient,[r.HttpHandler]),t["\u0275mpd"](4608,E.FormBuilder,E.FormBuilder,[]),t["\u0275mpd"](4608,E["\u0275i"],E["\u0275i"],[]),t["\u0275mpd"](4608,H.a,H.a,[]),t["\u0275mpd"](4608,S.a,S.a,[t.ComponentFactoryResolver,t.NgZone,t.Injector,H.a,t.ApplicationRef]),t["\u0275mpd"](4608,B.a,B.a,[]),t["\u0275mpd"](4608,I.a,I.a,[]),t["\u0275mpd"](4608,j.a,j.a,[]),t["\u0275mpd"](4608,D.a,D.a,[]),t["\u0275mpd"](4608,V.a,V.a,[]),t["\u0275mpd"](4608,U.a,U.a,[I.a,V.a]),t["\u0275mpd"](4608,X.a,X.a,[]),t["\u0275mpd"](4608,L.a,L.a,[]),t["\u0275mpd"](4608,q.a,q.a,[]),t["\u0275mpd"](4608,z.a,z.a,[]),t["\u0275mpd"](4608,o.a,o.a,[r.HttpClient,p.a,d.m]),t["\u0275mpd"](4608,J.a,J.a,[t.RendererFactory2,S.a]),t["\u0275mpd"](4608,s,s,[o.a,r.HttpClient]),t["\u0275mpd"](512,_.CommonModule,_.CommonModule,[]),t["\u0275mpd"](512,d.p,d.p,[[2,d.u],[2,d.m]]),t["\u0275mpd"](512,K.a,K.a,[]),t["\u0275mpd"](512,r.HttpClientXsrfModule,r.HttpClientXsrfModule,[]),t["\u0275mpd"](512,r.HttpClientModule,r.HttpClientModule,[]),t["\u0275mpd"](512,E["\u0275ba"],E["\u0275ba"],[]),t["\u0275mpd"](512,E.ReactiveFormsModule,E.ReactiveFormsModule,[]),t["\u0275mpd"](512,E.FormsModule,E.FormsModule,[]),t["\u0275mpd"](512,Z.a,Z.a,[]),t["\u0275mpd"](512,G.a,G.a,[]),t["\u0275mpd"](512,Y.Ng2ImgFallbackModule,Y.Ng2ImgFallbackModule,[]),t["\u0275mpd"](512,Q.a,Q.a,[]),t["\u0275mpd"](512,W.TextMaskModule,W.TextMaskModule,[]),t["\u0275mpd"](512,ll.a,ll.a,[]),t["\u0275mpd"](512,v,v,[]),t["\u0275mpd"](256,r["\u0275f"],"XSRF-TOKEN",[]),t["\u0275mpd"](256,r["\u0275g"],"X-XSRF-TOKEN",[]),t["\u0275mpd"](256,nl.a,{autoClose:!0},[]),t["\u0275mpd"](1024,d.k,function(){return[[{path:"",component:f}]]},[])])})}});