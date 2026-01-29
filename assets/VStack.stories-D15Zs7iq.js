import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as i,e as s}from"./index-Cpohvpwh.js";import{V as k}from"./VStack-BfWNwqYt.js";import{B as a}from"./Box-DgjA9pjP.js";import"./Stack-CwuChWNB.js";import"./iframe-Db0LztzR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ca4j9_td.js";import"./mergeStyles-Dw1fI3XI.js";const F={title:"Layouts/VStack",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{gap:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"The spacing between items."},align:{control:"select",options:["start","center","end","stretch"],description:"Align items horizontally (align-items)."},justify:{control:"select",options:["start","center","end","between"],description:"Justify content vertically (justify-content)."},as:{control:"text",description:"The HTML element to render."}}},n={args:{gap:"sm",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{padding:"sm",background:"subtle",children:"Item 1"}),e.jsx(a,{padding:"sm",background:"subtle",children:"Item 2"}),e.jsx(a,{padding:"sm",background:"subtle",children:"Item 3"})]})},play:async({canvasElement:r})=>{const t=i(r).getByText("Item 1");await s(t).toBeInTheDocument();const l=t.parentElement;await s(l).toHaveClass("flex-col")}},c={args:{gap:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{padding:"md",background:"subtle",radius:"md",children:"Item 1"}),e.jsx(a,{padding:"md",background:"subtle",radius:"md",children:"Item 2"}),e.jsx(a,{padding:"md",background:"subtle",radius:"md",children:"Item 3"})]})},play:async({canvasElement:r})=>{const t=i(r).getByText("Item 1").parentElement;await s(t).toHaveClass("gap-6"),await s(t).toHaveClass("flex-col")}},d={args:{gap:"md",justify:"between",className:"w-[300px] h-[400px] bg-slate-50 border border-slate-300 p-4 rounded-xl"},render:r=>e.jsxs(k,{...r,children:[e.jsx(a,{as:"header",padding:"md",radius:"md",background:"subtle",className:"border border-gray-200 font-bold",children:"Header"}),e.jsx(a,{as:"main",padding:"lg",radius:"md",background:"default",className:"flex flex-1 items-center justify-center border border-gray-200",children:"Content Area (Flex-1)"}),e.jsx(a,{as:"footer",padding:"sm",radius:"md",background:"subtle",className:"border border-gray-200 text-sm",children:"Footer"})]}),play:async({canvasElement:r})=>{const o=i(r),t=o.getByText("Header"),l=o.getByText("Footer");await s(t).toBeInTheDocument(),await s(l).toBeInTheDocument();const m=t.parentElement;await s(m).toHaveClass("flex-col"),await s(m).toHaveClass("justify-between")}};var p,g,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    await expect(stack).toHaveClass('flex-col');
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,b,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    await expect(stack).toHaveClass('flex-col');
  }
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,f,B;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    gap: 'md',
    justify: 'between',
    className: 'w-[300px] h-[400px] bg-slate-50 border border-slate-300 p-4 rounded-xl'
  },
  render: args => <VStack {...args}>
      <Box as="header" padding="md" radius="md" background="subtle" className="border border-gray-200 font-bold">
        Header
      </Box>
      <Box as="main" padding="lg" radius="md" background="default" className="flex flex-1 items-center justify-center border border-gray-200">
        Content Area (Flex-1)
      </Box>
      <Box as="footer" padding="sm" radius="md" background="subtle" className="border border-gray-200 text-sm">
        Footer
      </Box>
    </VStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByText('Header');
    const footer = canvas.getByText('Footer');
    await expect(header).toBeInTheDocument();
    await expect(footer).toBeInTheDocument();
    const stack = header.parentElement;
    await expect(stack).toHaveClass('flex-col');
    await expect(stack).toHaveClass('justify-between');
  }
}`,...(B=(f=d.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const N=["Default","WithGap","LayoutExample"];export{n as Default,d as LayoutExample,c as WithGap,N as __namedExportsOrder,F as default};
