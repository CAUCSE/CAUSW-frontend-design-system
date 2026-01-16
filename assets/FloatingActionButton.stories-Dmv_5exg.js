import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as C}from"./index-BqtnN4Dm.js";import{m as A}from"./mergeStyles-Cx6ulRiC.js";import"./iframe-BugSrr0f.js";import"./preload-helper-Dp1pzeXC.js";import"./index-sUYT1hHV.js";const R="inline-flex items-center justify-center bg-gray-100 border border-gray-200 text-gray-500 typo-body-sm-point h-[2.875rem] rounded-[6.1875rem] select-none whitespace-nowrap transition-colors",w="px-[1rem] py-[0.625rem]",P={left:"gap-[0.25rem]",right:"gap-[0.625rem]",none:""};function L({iconPosition:t="none",disabled:n=!1}){return A(R,w,P[t],n?"opacity-50 pointer-events-none":"cursor-pointer")}function o({leftIcon:t,rightIcon:n,disabled:l=!1,asChild:d=!1,children:p,className:F,...S}){const N=t?"left":n?"right":"none",k=d?C:"button";return e.jsxs(k,{type:d?void 0:"button",disabled:l,className:A(L({iconPosition:N,disabled:l}),F),...S,children:[t&&e.jsx("span",{className:"flex items-center",children:t}),p&&e.jsx("span",{children:p}),n&&e.jsx("span",{className:"flex items-center",children:n})]})}o.__docgenInfo={description:"",methods:[],displayName:"FloatingActionButton",props:{leftIcon:{required:!1,tsType:{name:"ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["ComponentProps"]};const i=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),q=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M9 6l6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),W={title:"Components/FloatingActionButton",component:o,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx(o,{children:"FAB"})})},r={render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(o,{leftIcon:e.jsx(i,{}),children:"글쓰기"}),e.jsx(o,{leftIcon:e.jsx(i,{}),children:"경조사 추가"})]})},a={args:{children:"내 동문수첩",rightIcon:e.jsx(q,{})}},c={args:{children:"글쓰기",leftIcon:e.jsx(i,{}),disabled:!0}};var m,u,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <FloatingActionButton>FAB</FloatingActionButton>
    </div>
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,h,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center gap-3">
      <FloatingActionButton leftIcon={<PlusIcon />}>
        글쓰기
      </FloatingActionButton>
      <FloatingActionButton leftIcon={<PlusIcon />}>
        경조사 추가
      </FloatingActionButton>
    </div>
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,y,v;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: '내 동문수첩',
    rightIcon: <ChevronRightIcon />
  }
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var I,B,b;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: '글쓰기',
    leftIcon: <PlusIcon />,
    disabled: true
  }
}`,...(b=(B=c.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const G=["Default","LeftIcon","RightIcon","Disabled"];export{s as Default,c as Disabled,r as LeftIcon,a as RightIcon,G as __namedExportsOrder,W as default};
