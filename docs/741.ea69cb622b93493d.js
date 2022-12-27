"use strict";(self.webpackChunkcelsus_zorro=self.webpackChunkcelsus_zorro||[]).push([[741],{3741:(Q,g,s)=>{s.r(g),s.d(g,{AccountsModule:()=>S});var z=s(9808),f=s(4521),U=s(2340),i=s(3075),t=s(5e3),h=s(9635),p=s(1894),Z=s(9010),c=s(4546),T=s(1047),y=s(6042),A=s(2683),v=s(2643);let C=(()=>{class o{constructor(n,e){this.fb=n,this.accounts=e,this.orcid=U.N.orcid,this.form=this.fb.group({username:["",i.kI.required],password:["",i.kI.required]})}ngOnInit(){}submit(){this.form.valid&&this.accounts.login(this.form.value.username,this.form.value.password).subscribe(n=>{this.processLogin(n)})}processLogin(n){this.accounts.accessToken=n.access,this.accounts.refreshToken=n.refresh,this.accounts.loggedIn=!0,this.accounts.lastTokenUpdateTime=new Date,this.accounts.lastRefreshTokenUpdateTime=new Date,this.accounts.getUserData().subscribe(e=>{this.accounts.user_id=e.id,this.accounts.user_name=e.username,this.accounts.user_staff=e.is_staff,this.form.reset(),window.location.assign(window.location.origin)},e=>{})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(i.qu),t.Y36(h.i))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:20,vars:10,consts:[["nzJustify","center"],["nz-typography",""],["nz-form","",3,"formGroup","submit"],["nzFor","username",3,"nzSm","nzXs"],[3,"nzSm","nzXs"],["nz-input","","type","text","id","username","formControlName","username"],["nzFor","password",3,"nzSm","nzXs"],["nz-input","","type","password","id","password","formControlName","password"],["type","button","nz-button","","nzType","link","target","_blank","id","orcidAuthButton",1,"btn","btn-sm","btn-outline-secondary",3,"href"],["src","https://orcid.org/sites/default/files/images/orcid_24x24.png"],["nz-button","","type","submit","nzType","primary"]],template:function(n,e){1&n&&(t.TgZ(0,"nz-row",0)(1,"h4",1),t._uU(2,"User Login Credentials"),t.qZA()(),t.TgZ(3,"form",2),t.NdJ("submit",function(){return e.submit()}),t.TgZ(4,"nz-form-item")(5,"nz-form-label",3),t._uU(6,"Username"),t.qZA(),t.TgZ(7,"nz-form-control",4),t._UZ(8,"input",5),t.qZA()(),t.TgZ(9,"nz-form-item")(10,"nz-form-label",6),t._uU(11," Password "),t.qZA(),t.TgZ(12,"nz-form-control",4),t._UZ(13,"input",7),t.qZA()(),t.TgZ(14,"nz-form-item",0)(15,"a",8),t._UZ(16,"img",9),t._uU(17,"Connect your ORCID iD"),t.qZA(),t.TgZ(18,"button",10),t._uU(19,"Sign In"),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("formGroup",e.form),t.xp6(2),t.Q6J("nzSm",8)("nzXs",24),t.xp6(2),t.Q6J("nzSm",8)("nzXs",24),t.xp6(3),t.Q6J("nzSm",8)("nzXs",24),t.xp6(2),t.Q6J("nzSm",8)("nzXs",24),t.xp6(3),t.MGl("href","https://orcid.org/oauth/authorize?response_type=code&redirect_uri=https://celsus.proteo.info/&client_id=",e.orcid,"&scope=openid",t.LSH))},directives:[p.SK,Z.ZU,i._Y,i.JL,c.Lr,i.sg,c.Nx,p.t3,c.iK,c.Fd,T.Zp,i.Fj,i.JJ,i.u,y.ix,A.w,v.dQ],styles:[""]}),o})();var a=s(7848);function j(o,r){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA()()),2&o){const n=r.$implicit;t.xp6(2),t.hij(" ",n.id," "),t.xp6(2),t.hij(" ",n.title," "),t.xp6(2),t.hij(" ",n.project_type," "),t.xp6(2),t.hij(" ",n.date," ")}}const F=[{path:"login",component:C},{path:"user",component:(()=>{class o{constructor(n){this.accounts=n,this.projects={count:0,results:[]},this.loading=!1,this.pageIndex=1,this.filterProject=[{text:"Total Proteomics",value:"TP"},{text:"Post-Translational Modification",value:"PTM"}],this.term=""}ngOnInit(){}onQueryParamsChange(n){const{pageIndex:l,sort:m,filter:d}=n,u=m.find(x=>null!==x.value);this.loadProjects(l,u&&u.key||null,u&&u.value||null,d)}loadProjects(n,e,l,m){this.loading=!0,this.accounts.getProjects(this.term,20,n-1,m,e,l).subscribe(d=>{this.loading=!1,this.projects=d,this.projects.results=this.projects.results.map(u=>(u.date=new Date(u.date),u))})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(h.i))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-user"]],decls:22,vars:11,consts:[["nzJustify","center"],[3,"nzData","nzLoading","nzTotal","nzPageSize","nzPageIndex","nzQueryParams"],["nzColumnKey","id"],["nzColumnKey","title"],["nzColumnKey","project_type",3,"nzFilters","nzFilterFn"],["nzColumnKey","date",3,"nzSortFn"],[4,"ngFor","ngForOf"]],template:function(n,e){1&n&&(t.TgZ(0,"nz-row",0)(1,"p")(2,"b"),t._uU(3,"Username"),t.qZA(),t._uU(4),t._UZ(5,"br"),t.TgZ(6,"b"),t._uU(7,"Staff"),t.qZA(),t._uU(8),t.qZA()(),t.TgZ(9,"nz-table",1),t.NdJ("nzQueryParams",function(m){return e.onQueryParamsChange(m)}),t.TgZ(10,"thead")(11,"tr")(12,"th",2),t._uU(13," id "),t.qZA(),t.TgZ(14,"th",3),t._uU(15," Title "),t.qZA(),t.TgZ(16,"th",4),t._uU(17," Project Type "),t.qZA(),t.TgZ(18,"th",5),t._uU(19," Date "),t.qZA()()(),t.TgZ(20,"tbody"),t.YNc(21,j,9,4,"tr",6),t.qZA()()),2&n&&(t.xp6(4),t.hij(": ",e.accounts.user_name,""),t.xp6(4),t.hij(": ",e.accounts.user_staff," "),t.xp6(1),t.Q6J("nzData",e.projects.results)("nzLoading",e.loading)("nzTotal",e.projects.count)("nzPageSize",20)("nzPageIndex",e.pageIndex),t.xp6(7),t.Q6J("nzFilters",e.filterProject)("nzFilterFn",!0),t.xp6(2),t.Q6J("nzSortFn",!0),t.xp6(3),t.Q6J("ngForOf",e.projects.results))},directives:[p.SK,a.N8,a.Om,a.$Z,a.Uo,a._C,a.qD,a.p0,z.sg],styles:[""]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[f.Bz.forChild(F)],f.Bz]}),o})(),S=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[z.ez,P,c.U5,T.o7,Z.ZJ,y.sL,i.UX,a.HQ]]}),o})()}}]);