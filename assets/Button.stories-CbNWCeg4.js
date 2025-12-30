import{j as N}from"./jsx-runtime-CIilbVx7.js";import{R as P}from"./iframe-D-1YIn1h.js";import"./preload-helper-Dp1pzeXC.js";const V=({variant:a,size:e,fullWidth:c})=>{const u=`
    inline-flex items-center justify-center
    font-medium rounded-md
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `.replace(/\s+/g," ").trim(),d={primary:"bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500",secondary:"bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",outline:"border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500"},m={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"},p=c?"w-full":"";return`${u} ${d[a]} ${m[e]} ${p}`.trim()},y=P.forwardRef(({variant:a="primary",size:e="md",fullWidth:c=!1,children:u,className:d="",...m},p)=>{const F=V({variant:a,size:e,fullWidth:c});return N.jsx("button",{ref:p,className:`${F} ${d}`,...m,children:u})});y.displayName="Button";y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const{userEvent:g,within:C}=__STORYBOOK_MODULE_TEST__,U={title:"Components/Button",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline"]},size:{control:"select",options:["sm","md","lg"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},r={args:{children:"Primary Button",variant:"primary"}},t={args:{children:"Secondary Button",variant:"secondary"},play:async({canvasElement:a})=>{const e=C(a.ownerDocument.body);await g.click(await e.findByRole("button",{name:"Secondary Button"})),await g.dblClick(await e.findByRole("button",{name:"Secondary Button"}))}},n={args:{children:"Outline Button",variant:"outline"}},s={args:{children:"Small Button",size:"sm"}},o={args:{children:"Large Button",size:"lg"}},i={args:{children:"Full Width Button",fullWidth:!0}},l={args:{children:"Disabled Button",disabled:!0}};var f,b,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,B,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await userEvent.click(await canvas.findByRole('button', {
      name: 'Secondary Button'
    }));
    await userEvent.dblClick(await canvas.findByRole('button', {
      name: 'Secondary Button'
    }));
  }
}`,...(S=(B=t.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var w,x,_;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Outline Button',
    variant: 'outline'
  }
}`,...(_=(x=n.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var E,O,R;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'sm'
  }
}`,...(R=(O=s.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var W,z,D;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'lg'
  }
}`,...(D=(z=o.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var T,$,L;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    fullWidth: true
  }
}`,...(L=($=i.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var j,k,q;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...(q=(k=l.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const Y=["Primary","Secondary","Outline","Small","Large","FullWidth","Disabled"];export{l as Disabled,i as FullWidth,o as Large,n as Outline,r as Primary,t as Secondary,s as Small,Y as __namedExportsOrder,U as default};
