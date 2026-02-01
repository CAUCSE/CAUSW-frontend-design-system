import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{F as e}from"./Float-DeG6tUlH.js";import{F as g}from"./FloatingActionButton-DsHkgbUh.js";import{H as x}from"./HStack-VOXcP0-O.js";import"./iframe-FAIZXgoY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ca4j9_td.js";import"./converter-Cub1Z0Tz.js";import"./Primitive-W1CyyCEa.js";import"./index-DwnCxMhs.js";import"./mergeStyles-Dw1fI3XI.js";import"./Stack-BGpvRpRF.js";const f=()=>t.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),T={title:"Layouts/Float",component:e,parameters:{layout:"centered",docs:{description:{component:"The `Float` component is a utility component used to position elements absolutely, fixed, or stuck relative to their container or the viewport. It simplifies the process of applying positioning styles."}}},tags:["autodocs"],argTypes:{floatType:{control:"select",description:"The positioning strategy to use.",options:["absolute","fixed","sticky","relative"],table:{type:{summary:"string"},defaultValue:{summary:"absolute"}}},zIndex:{control:"select",description:"The z-index level to apply.",options:["sticky","dropdown","bottomsheet","modal","toast"],table:{type:{summary:"string"},defaultValue:{summary:"sticky"}}},top:{control:"number",description:"Distance from top (px)"},bottom:{control:"number",description:"Distance from bottom (px)"},left:{control:"number",description:"Distance from left (px)"},right:{control:"number",description:"Distance from right (px)"}}},o={args:{bottom:16,right:16,children:"Floating Element",className:"rounded-md bg-blue-500 p-2 text-white shadow-md"},render:u=>t.jsxs("div",{className:"relative h-[400px] w-full border border-dashed border-gray-300 bg-gray-100 p-4",children:[t.jsx("div",{className:"mb-4 text-gray-500",children:"Adjust the controls below to move the floating element."}),t.jsx(e,{...u})]}),parameters:{docs:{description:{story:"The default story allows you to interactively test the positioning props (`top`, `bottom`, `left`, `right`) and `floatType`."}}}},r={render:()=>t.jsxs("div",{className:"relative h-[400px] w-full bg-gray-50 p-4",children:[t.jsx("div",{className:"mb-4",children:"Float used for Floating Action Button (bottom right)"}),t.jsx(e,{floatType:"absolute",bottom:24,right:24,zIndex:"toast",children:t.jsx(g,{children:t.jsxs(x,{gap:"xs",className:"items-center",children:[t.jsx(f,{}),t.jsx("p",{children:"글 쓰기"})]})})})]}),parameters:{docs:{description:{story:"Common use case: Positioning a Floating Action Button (FAB) at the bottom-right corner of a container."}}}},s={render:()=>t.jsxs("div",{className:"relative h-[600px] w-[600px] bg-gray-100 p-4",children:[t.jsx(e,{top:40,left:40,className:"flex h-20 w-20 items-center justify-center bg-blue-500 p-2 text-white shadow-lg",zIndex:"dropdown",children:"z-dropdown"}),t.jsx(e,{top:60,left:60,className:"flex h-20 w-20 items-center justify-center bg-red-500 p-2 text-white shadow-lg",zIndex:"modal",children:"z-modal"}),t.jsx("div",{className:"absolute top-24 left-24 p-2 text-sm text-gray-500",children:"(Red should overlap Blue due to higher z-index)"})]}),parameters:{docs:{description:{story:"Demonstrates how different `zIndex` values affect the stacking order of floating elements."}}}};var a,n,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    bottom: 16,
    right: 16,
    children: 'Floating Element',
    className: 'rounded-md bg-blue-500 p-2 text-white shadow-md'
  },
  render: args => <div className="relative h-[400px] w-full border border-dashed border-gray-300 bg-gray-100 p-4">
      <div className="mb-4 text-gray-500">
        Adjust the controls below to move the floating element.
      </div>
      <Float {...args} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The default story allows you to interactively test the positioning props (\`top\`, \`bottom\`, \`left\`, \`right\`) and \`floatType\`.'
      }
    }
  }
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="relative h-[400px] w-full bg-gray-50 p-4">
      <div className="mb-4">
        Float used for Floating Action Button (bottom right)
      </div>
      <Float floatType="absolute" bottom={24} right={24} zIndex="toast">
        <FloatingActionButton>
          <HStack gap="xs" className="items-center">
            <PlusIcon />
            <p>글 쓰기</p>
          </HStack>
        </FloatingActionButton>
      </Float>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Common use case: Positioning a Floating Action Button (FAB) at the bottom-right corner of a container.'
      }
    }
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="relative h-[600px] w-[600px] bg-gray-100 p-4">
      <Float top={40} left={40} className="flex h-20 w-20 items-center justify-center bg-blue-500 p-2 text-white shadow-lg" zIndex="dropdown">
        z-dropdown
      </Float>
      <Float top={60} left={60} className="flex h-20 w-20 items-center justify-center bg-red-500 p-2 text-white shadow-lg" zIndex="modal">
        z-modal
      </Float>
      <div className="absolute top-24 left-24 p-2 text-sm text-gray-500">
        (Red should overlap Blue due to higher z-index)
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how different \`zIndex\` values affect the stacking order of floating elements.'
      }
    }
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const D=["Default","FAB","ZIndex"];export{o as Default,r as FAB,s as ZIndex,D as __namedExportsOrder,T as default};
