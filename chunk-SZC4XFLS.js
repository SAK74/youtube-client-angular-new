import{a as G}from"./chunk-5CLAHI3E.js";import{a as L,b as $,c as R,d as T,e as A}from"./chunk-WZLQVCDA.js";import{a as x,b as u,d as y,e as E,i as N,k as v,m as I,n as q,o as j,p as V,q as k}from"./chunk-2YUVB3FG.js";import{Aa as g,Fa as b,Ma as a,Na as h,Q as l,S as c,T as w,U as p,dc as C,ec as M,jc as d,pb as S,ra as f,xa as F,ya as o,za as n}from"./chunk-EV3K43WP.js";import"./chunk-TUXIIIP4.js";var B=e=>{let{value:t}=e,m="";switch(!0){case t.length<8:m="min 8 characters";break;case!/(?=.*[a-z])(?=.*[A-Z])/.test(t):m="a mixture of uppercase and lowercase";break;case!/(?=.*\d)/.test(t):m="at least one number";break;case!/(?=.*\d)(?=.*[@$!%*?&])/.test(t):m="at least one special character";break;default:return null}return m?{wrongFormat:`You password is't strong enough, it should contain ${m}`}:null};var P=(()=>{let t=class t{constructor(){this.loginService=c(G),this.fb=c(j),this.loginForm=this.fb.group({login:["",[u.required,u.email]],password:["",[u.required,B]]})}getError(i){let r=this.loginForm.controls[i];switch(!0){case r.hasError("required"):return`${i.replace(/\b\w/,s=>s.toUpperCase())} is required!`;case r.hasError("email"):return`The ${i} must be e-mail format`;case r.hasError("wrongFormat"):return r.getError("wrongFormat");default:return null}}login(){this.loginForm.valid&&this.loginService.login(this.loginForm.controls.login.value)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=w({type:t,selectors:[["auth-component"]],decls:17,vars:3,consts:[[1,"flex","flex-col","bg-slate-200","p-8",3,"formGroup","ngSubmit"],["for","login"],["type","text","required","","matInput","","id","login","formControlName","login"],["for","password"],["type","password","required","","matInput","","id","password","formControlName","password"],["type","submit","effect","raised","color","primary",1,"self-end","mt-9"]],template:function(r,s){r&1&&(o(0,"form",0),b("ngSubmit",function(){return s.login()}),o(1,"h2"),a(2,"Login"),n(),o(3,"label",1),a(4,"Login"),n(),o(5,"mat-form-field"),g(6,"input",2),o(7,"mat-error"),a(8),n()(),o(9,"label",3),a(10,"Password"),n(),o(11,"mat-form-field"),g(12,"input",4),o(13,"mat-error"),a(14),n()(),o(15,"app-button",5),a(16,"Login"),n()()),r&2&&(F("formGroup",s.loginForm),f(8),h(s.getError("login")),f(6),h(s.getError("password")))},dependencies:[N,x,y,E,q,$,L,T,C,v,I],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;padding-top:2rem;padding-bottom:2rem}"]});let e=t;return e})();var O=[{path:"",component:P}],z=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=p({type:t}),t.\u0275inj=l({imports:[d.forChild(O)]});let e=t;return e})();var ft=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=p({type:t}),t.\u0275inj=l({imports:[z,d,V,S,R,A,M,k]});let e=t;return e})();export{ft as AuthModule};
