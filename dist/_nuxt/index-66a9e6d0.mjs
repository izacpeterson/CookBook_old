import{_ as p,i as _,g as h,G as f,S as g,b as m,I as k,e as S,o as t,c as s,d as b,w as x,a as e,F as l,r,f as y,t as i}from"./entry-7896d1fb.mjs";const I={apiKey:"AIzaSyD9EOSlnmGS-kseGdB2F9nOWG9UIlSBP_E",authDomain:"cookbook-769df.firebaseapp.com",projectId:"cookbook-769df",storageBucket:"cookbook-769df.appspot.com",messagingSenderId:"644720982505",appId:"1:644720982505:web:7ddfea4d742c26c2c23378"},w=_(I),D=h();new f;const B=g(w),A={data(){return{user:{},recipes:[]}},created(){m(D,a=>{this.user=a,this.getData()})},methods:{async getData(){const a=k(B,"users",this.user.uid),c=await S(a);c.exists()?(console.log("Document data:",c.data()),this.recipes=c.data().recipes):console.log("No such document!")}}},G=e("h2",null,"My Recipes",-1),N=e("button",null,"New",-1),v={class:"recipe"},C=e("h4",null,"Ingredients",-1),E=e("h4",null,"Directions",-1);function F(a,c,$,z,u,L){const d=y;return t(),s("div",null,[G,b(d,{to:"newrecipe"},{default:x(()=>[N]),_:1}),e("ul",v,[(t(!0),s(l,null,r(u.recipes,o=>(t(),s("li",{key:o.title},[e("h3",null,i(o.title),1),e("p",null,i(o.desc),1),C,e("ul",null,[(t(!0),s(l,null,r(o.ingredients,n=>(t(),s("li",{key:n},i(n),1))),128))]),E,e("ol",null,[(t(!0),s(l,null,r(o.directions,n=>(t(),s("li",{key:n},i(n),1))),128))])]))),128))])])}var P=p(A,[["render",F]]);export{P as default};