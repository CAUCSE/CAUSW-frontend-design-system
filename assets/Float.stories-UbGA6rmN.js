import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as B}from"./iframe-Ca3o9qSC.js";import{t as A}from"./index-CKBcBfht.js";import{c as s}from"./converter-Cub1Z0Tz.js";import{F as D}from"./FloatingActionButton-CXiaZUjU.js";import{H as S}from"./HStack-DkgNwNnF.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-CJvxXMcu.js";import"./mergeStyles-CG35R4DM.js";import"./Primitive-BcSoJT3s.js";import"./index-Ceoahxjk.js";import"./Stack-CHk7Urey.js";const E=A({base:"w-fit h-fit",variants:{floatType:{absolute:"absolute",fixed:"fixed",sticky:"sticky",relative:"relative"},zIndex:{sticky:"z-sticky",dropdown:"z-dropdown",bottomsheet:"z-bottomsheet",modal:"z-modal",toast:"z-toast"}},defaultVariants:{floatType:"absolute",zIndex:"sticky"}});function P({...e}){return{top:s(e.top),bottom:s(e.bottom),left:s(e.left),right:s(e.right)}}const o=({as:e,floatType:g="absolute",zIndex:x="sticky",top:y,bottom:b,left:v,right:w,className:F,style:j,children:z,...N})=>{const k=e||"div",I=E({floatType:g,zIndex:x,className:F}),T=P({top:y,bottom:b,left:v,right:w});return B.createElement(k,{className:I,style:{...T,...j},...N},z)};o.displayName="Float";o.__docgenInfo={description:"",methods:[],displayName:"Float",props:{as:{required:!1,tsType:{name:"E"},description:""},floatType:{defaultValue:{value:"'absolute'",computed:!1},required:!1},zIndex:{defaultValue:{value:"'sticky'",computed:!1},required:!1}}};const R=()=>t.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),K={title:"Layouts/Float",component:o,parameters:{layout:"centered",docs:{description:{component:"The `Float` component is a utility component used to position elements absolutely, fixed, or stuck relative to their container or the viewport. It simplifies the process of applying positioning styles."}}},tags:["autodocs"],argTypes:{floatType:{control:"select",description:"The positioning strategy to use.",options:["absolute","fixed","sticky","relative"],table:{type:{summary:"string"},defaultValue:{summary:"absolute"}}},zIndex:{control:"select",description:"The z-index level to apply.",options:["sticky","dropdown","bottomsheet","modal","toast"],table:{type:{summary:"string"},defaultValue:{summary:"sticky"}}},top:{control:"number",description:"Distance from top (px)"},bottom:{control:"number",description:"Distance from bottom (px)"},left:{control:"number",description:"Distance from left (px)"},right:{control:"number",description:"Distance from right (px)"}}},a={args:{bottom:16,right:16,children:"Floating Element",className:"rounded-md bg-blue-500 p-2 text-white shadow-md"},render:e=>t.jsxs("div",{className:"relative h-[400px] w-full border border-dashed border-gray-300 bg-gray-100 p-4",children:[t.jsx("div",{className:"mb-4 text-gray-500",children:"Adjust the controls below to move the floating element."}),t.jsx(o,{...e})]}),parameters:{docs:{description:{story:"The default story allows you to interactively test the positioning props (`top`, `bottom`, `left`, `right`) and `floatType`."}}}},r={render:()=>t.jsxs("div",{className:"relative h-[400px] w-full bg-gray-50 p-4",children:[t.jsx("div",{className:"mb-4",children:"Float used for Floating Action Button (bottom right)"}),t.jsx(o,{floatType:"absolute",bottom:24,right:24,zIndex:"toast",children:t.jsx(D,{children:t.jsxs(S,{gap:"xs",className:"items-center",children:[t.jsx(R,{}),t.jsx("p",{children:"글 쓰기"})]})})})]}),parameters:{docs:{description:{story:"Common use case: Positioning a Floating Action Button (FAB) at the bottom-right corner of a container."}}}},n={render:()=>t.jsxs("div",{className:"relative h-[600px] w-[600px] bg-gray-100 p-4",children:[t.jsx(o,{top:40,left:40,className:"flex h-20 w-20 items-center justify-center bg-blue-500 p-2 text-white shadow-lg",zIndex:"dropdown",children:"z-dropdown"}),t.jsx(o,{top:60,left:60,className:"flex h-20 w-20 items-center justify-center bg-red-500 p-2 text-white shadow-lg",zIndex:"modal",children:"z-modal"}),t.jsx("div",{className:"absolute top-24 left-24 p-2 text-sm text-gray-500",children:"(Red should overlap Blue due to higher z-index)"})]}),parameters:{docs:{description:{story:"Demonstrates how different `zIndex` values affect the stacking order of floating elements."}}}};var i,l,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const Q=["Default","FAB","ZIndex"];export{a as Default,r as FAB,n as ZIndex,Q as __namedExportsOrder,K as default};
