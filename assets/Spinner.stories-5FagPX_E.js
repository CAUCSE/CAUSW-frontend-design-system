import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as s}from"./Spinner-BQfqDLUi.js";import"./index-Ca4j9_td.js";const y={title:"Components/Spinner",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg","xl"],description:"스피너의 크기를 조절합니다."},color:{control:"radio",options:["primary","white","gray","black"],description:"스피너의 색상을 변경합니다."}}},a={args:{size:"md",color:"primary"}},r={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-xs text-gray-400",children:"sm (16px)"}),e.jsx(s,{size:"sm"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-xs text-gray-400",children:"md (24px)"}),e.jsx(s,{size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-xs text-gray-400",children:"lg (32px)"}),e.jsx(s,{size:"lg"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-xs text-gray-400",children:"xl (48px)"}),e.jsx(s,{size:"xl"})]})]})},l={render:()=>e.jsxs("div",{className:"flex items-center gap-4 rounded-lg bg-gray-100 p-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-xs text-gray-400",children:"primary"}),e.jsx(s,{color:"primary"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-xs text-gray-400",children:"gray"}),e.jsx(s,{color:"gray"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-xs text-gray-400",children:"black"}),e.jsx(s,{color:"black"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2 rounded bg-gray-800 p-2",children:[e.jsx("span",{className:"text-xs text-gray-400",children:"white"}),e.jsx(s,{color:"white"})]})]})};var n,t,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'primary'
  }
}`,...(c=(t=a.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var x,i,o;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400">sm (16px)</span>
        <Spinner size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400">md (24px)</span>
        <Spinner size="md" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400">lg (32px)</span>
        <Spinner size="lg" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400">xl (48px)</span>
        <Spinner size="xl" />
      </div>
    </div>
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 rounded-lg bg-gray-100 p-4">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400">primary</span>
        <Spinner color="primary" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400">gray</span>
        <Spinner color="gray" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400">black</span>
        <Spinner color="black" />
      </div>
      <div className="flex flex-col items-center gap-2 rounded bg-gray-800 p-2">
        <span className="text-xs text-gray-400">white</span>
        <Spinner color="white" />
      </div>
    </div>
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const v=["Default","All_Sizes","All_Colors"];export{l as All_Colors,r as All_Sizes,a as Default,v as __namedExportsOrder,y as default};
