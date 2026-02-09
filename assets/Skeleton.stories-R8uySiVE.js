import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as D}from"./index-Ca4j9_td.js";import{c as r}from"./converter-Cub1Z0Tz.js";import{m as E}from"./mergeStyles-Dw1fI3XI.js";import{F as p}from"./Flex-DYgPqkLp.js";import"./iframe-C5-xtdPD.js";import"./preload-helper-Dp1pzeXC.js";const I=D({base:["relative","overflow-hidden","animate-skeleton-pulse"],variants:{radius:{0:"rounded-none",8:"rounded-[8px]",16:"rounded-[16px]",full:"rounded-full"},tone:{neutral:"bg-gray-200",magic:"bg-purple-100"}},defaultVariants:{radius:"8",tone:"neutral"}}),W=({width:n,height:i,minWidth:s,maxWidth:o,minHeight:a,maxHeight:d})=>({width:typeof n=="number"?r(n):n,height:typeof i=="number"?r(i):i,minWidth:s?r(s):void 0,maxWidth:o?r(o):void 0,minHeight:a?r(a):void 0,maxHeight:d?r(d):void 0}),t=({radius:n,tone:i,width:s="100%",height:o="1rem",minWidth:a,maxWidth:d,minHeight:V,maxHeight:_,style:C,className:H,...N})=>e.jsx("div",{role:"status","aria-busy":"true",className:E(I({radius:n,tone:i}),H),style:{...W({width:s,height:o,minWidth:a,maxWidth:d,minHeight:V,maxHeight:_}),...C},...N});t.displayName="Skeleton";t.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'100%'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'1rem'",computed:!1}},minWidth:{required:!1,tsType:{name:"number"},description:""},maxWidth:{required:!1,tsType:{name:"number"},description:""},minHeight:{required:!1,tsType:{name:"number"},description:""},maxHeight:{required:!1,tsType:{name:"number"},description:""}},composes:["SkeletonVariants"]};const K={title:"Components/Skeleton",component:t,parameters:{layout:"centered",docs:{description:{component:`
**Skeleton**은 콘텐츠가 로딩되는 동안 이후 나타날 요소의 윤곽을 미리 보여주는 UI 요소입니다.

Spinner와 달리 실제 레이아웃과 유사한 형태를 유지하여,
사용자가 로딩 상태를 더 빠르고 자연스럽게 인지할 수 있도록 돕습니다.

Skeleton은 레이아웃을 책임지지 않으며,
\`Flex\`, \`HStack\` 등 레이아웃 컴포넌트와 조합하여 사용됩니다.

> Storybook에서는 시각적 확인을 위해 px 기반 사이즈를 사용합니다.
        `}}},tags:["autodocs"],argTypes:{width:{control:"number",description:"Skeleton width (px)",table:{type:{summary:"number"},category:"Style"}},height:{control:"number",description:"Skeleton height (px)",table:{type:{summary:"number"},category:"Style"}},radius:{control:"select",options:["0","8","16","full"],description:"Border radius preset",table:{type:{summary:"'0' | '8' | '16' | 'full'"},category:"Style"}},tone:{control:"select",options:["neutral","magic"],description:"Skeleton color tone",table:{type:{summary:"'neutral' | 'magic'"},category:"Style"}}}},l={args:{width:320,height:48,radius:"8",tone:"neutral"}},u={render:()=>e.jsxs(p,{gap:"lg",align:"center",children:[e.jsx(t,{radius:"0",width:48,height:48}),e.jsx(t,{radius:"8",width:48,height:48}),e.jsx(t,{radius:"16",width:48,height:48}),e.jsx(t,{radius:"full",width:48,height:48})]})},m={render:()=>e.jsxs(p,{direction:"column",gap:"lg",style:{width:400},children:[e.jsx(t,{tone:"neutral",radius:"16",width:400,height:48}),e.jsx(t,{tone:"magic",radius:"16",width:400,height:48})]})},h={render:()=>e.jsxs(p,{direction:"column",gap:"sm",style:{width:360},children:[e.jsx(t,{width:360,height:14}),e.jsx(t,{width:320,height:14}),e.jsx(t,{width:280,height:14})]})},c={render:()=>e.jsxs(p,{direction:"column",gap:"md",style:{width:320},children:[e.jsx(t,{width:320,height:180,radius:"16"}),e.jsx(t,{width:200,height:16}),e.jsx(t,{width:260,height:16})]})};var g,x,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    width: 320,
    height: 48,
    radius: '8',
    tone: 'neutral'
  }
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var w,S,f;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Flex gap="lg" align="center">
      <Skeleton radius="0" width={48} height={48} />
      <Skeleton radius="8" width={48} height={48} />
      <Skeleton radius="16" width={48} height={48} />
      <Skeleton radius="full" width={48} height={48} />
    </Flex>
}`,...(f=(S=u.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var k,b,j;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="lg" style={{
    width: 400
  }}>
      <Skeleton tone="neutral" radius="16" width={400} height={48} />
      <Skeleton tone="magic" radius="16" width={400} height={48} />
    </Flex>
}`,...(j=(b=m.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var v,T,F;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="sm" style={{
    width: 360
  }}>
      <Skeleton width={360} height={14} />
      <Skeleton width={320} height={14} />
      <Skeleton width={280} height={14} />
    </Flex>
}`,...(F=(T=h.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var q,P,R;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="md" style={{
    width: 320
  }}>
      <Skeleton width={320} height={180} radius="16" />
      <Skeleton width={200} height={16} />
      <Skeleton width={260} height={16} />
    </Flex>
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const L=["Default","Radius","Tone","TextPlaceholder","CardPlaceholder"];export{c as CardPlaceholder,l as Default,u as Radius,h as TextPlaceholder,m as Tone,L as __namedExportsOrder,K as default};
