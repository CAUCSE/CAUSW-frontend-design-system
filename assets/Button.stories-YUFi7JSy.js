import{j as V}from"./jsx-runtime-CDt2p4po.js";import{R as _}from"./index-GiUgBvb1.js";const E=({variant:l,size:i,fullWidth:c})=>{const u=`
    inline-flex items-center justify-center
    font-medium rounded-md
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `.replace(/\s+/g," ").trim(),d={primary:"bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500",secondary:"bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",outline:"border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500"},m={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"},p=c?"w-full":"";return`${u} ${d[l]} ${m[i]} ${p}`.trim()},g=_.forwardRef(({variant:l="primary",size:i="md",fullWidth:c=!1,children:u,className:d="",...m},p)=>{const T=E({variant:l,size:i,fullWidth:c});return V.jsx("button",{ref:p,className:`${T} ${d}`,...m,children:u})});g.displayName="Button";g.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const k={title:"Components/Button",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline"]},size:{control:"select",options:["sm","md","lg"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},e={args:{children:"Primary Button",variant:"primary"}},r={args:{children:"Secondary Button",variant:"secondary"}},a={args:{children:"Outline Button",variant:"outline"}},t={args:{children:"Small Button",size:"sm"}},s={args:{children:"Large Button",size:"lg"}},n={args:{children:"Full Width Button",fullWidth:!0}},o={args:{children:"Disabled Button",disabled:!0}};var y,f,h;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}`,...(h=(f=e.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,v,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
}`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var B,x,w;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Outline Button',
    variant: 'outline'
  }
}`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var W,z,$;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'sm'
  }
}`,...($=(z=t.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var O,j,q;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'lg'
  }
}`,...(q=(j=s.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var D,F,L;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    fullWidth: true
  }
}`,...(L=(F=n.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var N,P,R;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const A=["Primary","Secondary","Outline","Small","Large","FullWidth","Disabled"];export{o as Disabled,n as FullWidth,s as Large,a as Outline,e as Primary,r as Secondary,t as Small,A as __namedExportsOrder,k as default};
