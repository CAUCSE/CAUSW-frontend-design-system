import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as o}from"./FloatingActionButton-DLX51l_6.js";import{H as a}from"./HStack-BL9EqjsC.js";import"./mergeStyles-B83jKakq.js";import"./bundle-mjs-CJvxXMcu.js";import"./Primitive-COH1LJud.js";import"./iframe-DT-_7YRs.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AVE-RrXy.js";import"./Stack-Czr2L4qC.js";const v=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),B=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.72168 6.66656L1.34415 12L0 10.6669L4.70546 6L0 1.33312L1.34415 0L6.72168 5.33344C6.89989 5.51024 7 5.75 7 6C7 6.25 6.89989 6.48976 6.72168 6.66656Z",fill:"#6A7282"})}),H={title:"Components/FloatingActionButton",component:o,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx(o,{children:"FAB"})})},r={render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(o,{children:e.jsxs(a,{gap:"xs",className:"items-center",children:[e.jsx(v,{}),e.jsx("p",{children:"글쓰기"})]})}),e.jsx(o,{className:"px-[1.25rem] py-[0.625rem]",children:e.jsxs(a,{className:"items-center gap-2.5",children:[e.jsx("p",{children:"내 동문수첩"}),e.jsx(B,{})]})})]})},s={args:{children:"내 동문수첩"}},n={args:{children:"글쓰기",disabled:!0}};var c,i,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <FloatingActionButton>FAB</FloatingActionButton>
    </div>
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center gap-3">
      <FloatingActionButton>
        <HStack gap="xs" className="items-center">
          <PlusIcon />
          <p>글쓰기</p>
        </HStack>
      </FloatingActionButton>
      <FloatingActionButton className="px-[1.25rem] py-[0.625rem]">
        <HStack className="items-center gap-2.5">
          <p>내 동문수첩</p>
          <ChevronRightIcon />
        </HStack>
      </FloatingActionButton>
    </div>
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: '내 동문수첩'
  }
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,f,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: '글쓰기',
    disabled: true
  }
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const b=["Default","LeftIcon","RightIcon","Disabled"];export{t as Default,n as Disabled,r as LeftIcon,s as RightIcon,b as __namedExportsOrder,H as default};
