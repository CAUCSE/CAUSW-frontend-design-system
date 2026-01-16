import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as l,e as r,B as a}from"./Box-Dh3wekja.js";import{S as w}from"./Stack-BU4FjGPO.js";import"./iframe-BugSrr0f.js";import"./preload-helper-Dp1pzeXC.js";import"./mergeStyles-Cx6ulRiC.js";const i=({...t})=>e.jsx(w,{direction:"horizontal",...t});i.displayName="HStack";i.__docgenInfo={description:"",methods:[],displayName:"HStack"};const T={title:"Components/HStack",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{gap:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"The spacing between items."},align:{control:"select",options:["start","center","end","stretch"],description:"Align items vertically (align-items)."},justify:{control:"select",options:["start","center","end","between"],description:"Justify content horizontally (justify-content)."},as:{control:"text",description:"The HTML element to render."}}},o={args:{gap:"sm",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{padding:"sm",background:"subtle",children:"Item 1"}),e.jsx(a,{padding:"sm",background:"subtle",children:"Item 2"}),e.jsx(a,{padding:"sm",background:"subtle",children:"Item 3"})]})},play:async({canvasElement:t})=>{const s=l(t).getByText("Item 1");await r(s).toBeInTheDocument();const n=s.parentElement;await r(n).toHaveClass("flex-row")}},c={args:{gap:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{padding:"md",background:"subtle",radius:"md",children:"Item 1"}),e.jsx(a,{padding:"md",background:"subtle",radius:"md",children:"Item 2"}),e.jsx(a,{padding:"md",background:"subtle",radius:"md",children:"Item 3"})]})},play:async({canvasElement:t})=>{const s=l(t).getByText("Item 1").parentElement;await r(s).toHaveClass("gap-6"),await r(s).toHaveClass("flex-row")}},d={args:{gap:"md",align:"center",className:"w-[500px] h-[200px] bg-slate-50 border border-slate-300 p-4 rounded-xl"},render:t=>e.jsxs(i,{...t,children:[e.jsx(a,{padding:"md",radius:"md",background:"subtle",className:"flex h-[100px] flex-1 items-center justify-center border border-gray-200",children:"Left"}),e.jsx(a,{padding:"md",radius:"md",background:"default",className:"flex h-[80px] flex-1 items-center justify-center border border-gray-200",children:"Center (Shorter)"}),e.jsx(a,{padding:"md",radius:"md",background:"subtle",className:"flex h-[100px] flex-1 items-center justify-center border border-gray-200",children:"Right"})]}),play:async({canvasElement:t})=>{const s=l(t).getByText("Left");await r(s).toBeInTheDocument();const n=s.parentElement;await r(n).toHaveClass("flex-row"),await r(n).toHaveClass("items-center")}};var p,g,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    gap: 'sm',
    children: <>
        <Box padding="sm" background="subtle">
          Item 1
        </Box>
        <Box padding="sm" background="subtle">
          Item 2
        </Box>
        <Box padding="sm" background="subtle">
          Item 3
        </Box>
      </>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const item1 = canvas.getByText('Item 1');
    await expect(item1).toBeInTheDocument();
    const stack = item1.parentElement;
    await expect(stack).toHaveClass('flex-row');
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var u,b,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    gap: 'lg',
    children: <>
        <Box padding="md" background="subtle" radius="md">
          Item 1
        </Box>
        <Box padding="md" background="subtle" radius="md">
          Item 2
        </Box>
        <Box padding="md" background="subtle" radius="md">
          Item 3
        </Box>
      </>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const stack = canvas.getByText('Item 1').parentElement;
    await expect(stack).toHaveClass('gap-6');
    await expect(stack).toHaveClass('flex-row');
  }
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,y,k;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    gap: 'md',
    align: 'center',
    // 시각적 확인을 위해 높이와 배경 추가
    className: 'w-[500px] h-[200px] bg-slate-50 border border-slate-300 p-4 rounded-xl'
  },
  render: args => <HStack {...args}>
      <Box padding="md" radius="md" background="subtle" className="flex h-[100px] flex-1 items-center justify-center border border-gray-200">
        Left
      </Box>
      <Box padding="md" radius="md" background="default" className="flex h-[80px] flex-1 items-center justify-center border border-gray-200">
        Center (Shorter)
      </Box>
      <Box padding="md" radius="md" background="subtle" className="flex h-[100px] flex-1 items-center justify-center border border-gray-200">
        Right
      </Box>
    </HStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const left = canvas.getByText('Left');
    await expect(left).toBeInTheDocument();

    // 부모 요소가 flex-row 인지 확인
    const stack = left.parentElement;
    await expect(stack).toHaveClass('flex-row');
    await expect(stack).toHaveClass('items-center');
  }
}`,...(k=(y=d.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const C=["Default","WithGap","LayoutExample"];export{o as Default,d as LayoutExample,c as WithGap,C as __namedExportsOrder,T as default};
