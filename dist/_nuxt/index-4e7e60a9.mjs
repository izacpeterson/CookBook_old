import{_ as h,i as p,g as m,G as f,S as k,o as g,I as b,e as S,a as t,c as s,b as y,w as I,d as e,F as r,r as u,f as d,h as x,t as i}from"./entry-a35ef5d1.mjs";const w={apiKey:"AIzaSyD9EOSlnmGS-kseGdB2F9nOWG9UIlSBP_E",authDomain:"cookbook-769df.firebaseapp.com",projectId:"cookbook-769df",storageBucket:"cookbook-769df.appspot.com",messagingSenderId:"644720982505",appId:"1:644720982505:web:7ddfea4d742c26c2c23378"},D=p(w),v=m();new f;const B=k(D),A={data(){return{user:{},recipes:[]}},created(){g(v,o=>{this.user=o,o?this.getData():this.user={}})},methods:{async getData(){const o=b(B,"users",this.user.uid),c=await S(o);c.exists()?(console.log("Document data:",c.data()),this.recipes=c.data().recipes):console.log("No such document!")}}},C={key:0},G=e("h2",null,"My Recipes",-1),N=e("button",{class:"fab"},"+",-1),E={class:"recipe"},F=e("h4",null,"Ingredients",-1),V=e("h4",null,"Directions",-1),z=e("hr",null,null,-1),L={key:1,class:"loginview"},O=e("h2",null,"Welcome to the cookbook",-1),P=e("p",null,"Click the Sign In button to get started",-1),R=[O,P];function W(o,c,j,K,l,M){const _=x;return t(),s("div",null,[l.user.email?(t(),s("div",C,[G,y(_,{to:"newrecipe"},{default:I(()=>[N]),_:1}),e("ul",E,[(t(!0),s(r,null,u(l.recipes,n=>(t(),s("li",{key:n.title},[e("h3",null,i(n.title),1),e("p",null,i(n.desc),1),F,e("ul",null,[(t(!0),s(r,null,u(n.ingredients,a=>(t(),s("li",{key:a},i(a),1))),128))]),V,e("ol",null,[(t(!0),s(r,null,u(n.directions,a=>(t(),s("li",{key:a},i(a),1))),128))]),z]))),128))])])):d("",!0),l.user.email?d("",!0):(t(),s("div",L,R))])}var $=h(A,[["render",W]]);export{$ as default};