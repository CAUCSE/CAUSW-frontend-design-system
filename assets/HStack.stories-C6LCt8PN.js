import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as i,e as r}from"./index-CH3kunnf.js";import{H as k}from"./HStack-DkgNwNnF.js";import{B as t}from"./Box-Ci1Y7QJA.js";import"./Stack-CHk7Urey.js";import"./iframe-Ca3o9qSC.js";import"./preload-helper-Dp1pzeXC.js";import"./mergeStyles-CG35R4DM.js";import"./bundle-mjs-CJvxXMcu.js";const S={title:"Components/HStack",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{gap:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"The spacing between items."},align:{control:"select",options:["start","center","end","stretch"],description:"Align items vertically (align-items)."},justify:{control:"select",options:["start","center","end","between"],description:"Justify content horizontally (justify-content)."},as:{control:"text",description:"The HTML element to render."}}},o={args:{gap:"sm",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{padding:"sm",background:"subtle",children:"Item 1"}),e.jsx(t,{padding:"sm",background:"subtle",children:"Item 2"}),e.jsx(t,{padding:"sm",background:"subtle",children:"Item 3"})]})},play:async({canvasElement:s})=>{const a=i(s).getByText("Item 1");await r(a).toBeInTheDocument();const n=a.parentElement;await r(n).toHaveClass("flex-row")}},c={args:{gap:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{padding:"md",background:"subtle",radius:"md",children:"Item 1"}),e.jsx(t,{padding:"md",background:"subtle",radius:"md",children:"Item 2"}),e.jsx(t,{padding:"md",background:"subtle",radius:"md",children:"Item 3"})]})},play:async({canvasElement:s})=>{const a=i(s).getByText("Item 1").parentElement;await r(a).toHaveClass("gap-6"),await r(a).toHaveClass("flex-row")}},d={args:{gap:"md",align:"center",className:"w-[500px] h-[200px] bg-slate-50 border border-slate-300 p-4 rounded-xl"},render:s=>e.jsxs(k,{...s,children:[e.jsx(t,{padding:"md",radius:"md",background:"subtle",className:"flex h-[100px] flex-1 items-center justify-center border border-gray-200",children:"Left"}),e.jsx(t,{padding:"md",radius:"md",background:"default",className:"flex h-[80px] flex-1 items-center justify-center border border-gray-200",children:"Center (Shorter)"}),e.jsx(t,{padding:"md",radius:"md",background:"subtle",className:"flex h-[100px] flex-1 items-center justify-center border border-gray-200",children:"Right"})]}),play:async({canvasElement:s})=>{const a=i(s).getByText("Left");await r(a).toBeInTheDocument();const n=a.parentElement;await r(n).toHaveClass("flex-row"),await r(n).toHaveClass("items-center")}};var m,p,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,u,b;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(u=c.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,h,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const N=["Default","WithGap","LayoutExample"];export{o as Default,d as LayoutExample,c as WithGap,N as __namedExportsOrder,S as default};
