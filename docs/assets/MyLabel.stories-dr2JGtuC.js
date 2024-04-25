import{j as S}from"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";const f=({label:x,size:g="normal",allCaps:C=!1,color:h="text-primary",fontColor:v})=>S.jsx("span",{className:`${g} ${h} label`,style:{color:v,...C&&{textTransform:"uppercase"}},children:x});f.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Label size",defaultValue:{value:'"normal"',computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"All caps text",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"Color of the button",defaultValue:{value:'"text-primary"',computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"Color of the text"}}};const A={title:"UI/labels/MyLabel",component:f,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{color:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Hello World"}},a={args:{label:"All caps label",allCaps:!0}},r={args:{label:"Secondary label",color:"text-secondary"}},l={args:{label:"Custom color label",fontColor:"#0d0aa8"}};var o,t,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Hello World"
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var n,c,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "All caps label",
    allCaps: true
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,i,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Secondary label",
    color: "text-secondary"
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,y,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Custom color label",
    fontColor: "#0d0aa8"
  }
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const L=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,L as __namedExportsOrder,A as default};
