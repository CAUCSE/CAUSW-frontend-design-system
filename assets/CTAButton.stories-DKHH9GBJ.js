import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as W}from"./index-BqtnN4Dm.js";import{m as w}from"./mergeStyles-Cx6ulRiC.js";import"./iframe-BugSrr0f.js";import"./preload-helper-Dp1pzeXC.js";import"./index-sUYT1hHV.js";const S="inline-flex items-center justify-center h-[3.375rem] px-[0.5rem] rounded-[0.75rem] typo-fixed-15 whitespace-nowrap select-none transition-colors",d={default:"w-[18rem]",full:"w-full"},k={blue:"bg-blue-100 text-blue-700",red:"bg-red-400 text-white",dark:"bg-gray-700 text-white",light:"bg-gray-100 text-gray-500",white:"bg-white text-gray-500",disabled:"bg-gray-200 text-gray-300"};function q({color:s,fullWidth:c=!1,disabled:l=!1}){return w(S,c?d.full:d.default,k[l?"disabled":s],l?"pointer-events-none":"cursor-pointer")}function t({color:s="light",fullWidth:c=!1,disabled:l=!1,asChild:u=!1,className:j,children:v,...y}){const N=u?W:"button";return e.jsx(N,{type:u?void 0:"button",disabled:l,className:w(q({color:s,fullWidth:c,disabled:l}),j),...y,children:v})}t.__docgenInfo={description:"",methods:[],displayName:"CTAButton",props:{color:{required:!1,tsType:{name:"union",raw:"'blue' | 'red' | 'dark' | 'light' | 'white'",elements:[{name:"literal",value:"'blue'"},{name:"literal",value:"'red'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"},{name:"literal",value:"'white'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["ComponentProps"]};const I={title:"Components/CTAButton",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["blue","red","dark","light","white"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(t,{color:"blue",children:"text"}),e.jsx(t,{color:"red",children:"text"}),e.jsx(t,{color:"dark",children:"text"}),e.jsx(t,{color:"light",children:"text"}),e.jsx(t,{color:"white",children:"text"})]})},r={render:()=>e.jsx(t,{disabled:!0,color:"blue",children:"text"})},n={render:()=>e.jsxs("div",{className:"flex w-[288px] flex-col gap-3",children:[e.jsx(t,{fullWidth:!0,color:"blue",children:"text"}),e.jsx(t,{fullWidth:!0,color:"red",children:"text"}),e.jsx(t,{fullWidth:!0,color:"dark",children:"text"}),e.jsx(t,{fullWidth:!0,color:"light",children:"text"}),e.jsx(t,{fullWidth:!0,color:"white",children:"text"})]})},a={render:()=>e.jsxs("div",{className:"flex w-[288px] flex-col gap-3",children:[e.jsx(t,{className:"w-1/2",color:"blue",children:"text"}),e.jsx(t,{className:"w-1/2",color:"red",children:"text"}),e.jsx(t,{className:"w-1/2",color:"dark",children:"text"}),e.jsx(t,{className:"w-1/2",color:"light",children:"text"}),e.jsx(t,{className:"w-1/2",color:"white",children:"text"})]})};var i,x,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <CTAButton color="blue">text</CTAButton>
      <CTAButton color="red">text</CTAButton>
      <CTAButton color="dark">text</CTAButton>
      <CTAButton color="light">text</CTAButton>
      <CTAButton color="white">text</CTAButton>
    </div>
}`,...(m=(x=o.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var p,h,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <CTAButton disabled color="blue">
      text
    </CTAButton>
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var T,g,C;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex w-[288px] flex-col gap-3">
      <CTAButton fullWidth color="blue">
        text
      </CTAButton>
      <CTAButton fullWidth color="red">
        text
      </CTAButton>
      <CTAButton fullWidth color="dark">
        text
      </CTAButton>
      <CTAButton fullWidth color="light">
        text
      </CTAButton>
      <CTAButton fullWidth color="white">
        text
      </CTAButton>
    </div>
}`,...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var B,A,b;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex w-[288px] flex-col gap-3">
      <CTAButton className="w-1/2" color="blue">
        text
      </CTAButton>
      <CTAButton className="w-1/2" color="red">
        text
      </CTAButton>
      <CTAButton className="w-1/2" color="dark">
        text
      </CTAButton>
      <CTAButton className="w-1/2" color="light">
        text
      </CTAButton>
      <CTAButton className="w-1/2" color="white">
        text
      </CTAButton>
    </div>
}`,...(b=(A=a.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};const O=["Default","Disabled","FullWidth","HalfWidth"];export{o as Default,r as Disabled,n as FullWidth,a as HalfWidth,O as __namedExportsOrder,I as default};
