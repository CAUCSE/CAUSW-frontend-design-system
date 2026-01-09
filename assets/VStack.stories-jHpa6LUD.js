import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as m,e as r,B as t}from"./Box-B8RUCT3x.js";import{S as v}from"./Stack-CPRAMeEb.js";import"./iframe-IAXBoR6K.js";import"./preload-helper-Dp1pzeXC.js";import"./mergeStyles-Cx6ulRiC.js";const i=({...a})=>e.jsx(v,{direction:"vertical",...a});i.displayName="VStack";i.__docgenInfo={description:"",methods:[],displayName:"VStack"};const C={title:"Components/VStack",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{gap:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"The spacing between items."},align:{control:"select",options:["start","center","end","stretch"],description:"Align items horizontally (align-items)."},justify:{control:"select",options:["start","center","end","between"],description:"Justify content vertically (justify-content)."},as:{control:"text",description:"The HTML element to render."}}},n={args:{gap:"sm",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{padding:"sm",background:"subtle",children:"Item 1"}),e.jsx(t,{padding:"sm",background:"subtle",children:"Item 2"}),e.jsx(t,{padding:"sm",background:"subtle",children:"Item 3"})]})},play:async({canvasElement:a})=>{const s=m(a).getByText("Item 1");await r(s).toBeInTheDocument();const l=s.parentElement;await r(l).toHaveClass("flex-col")}},c={args:{gap:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{padding:"md",background:"subtle",radius:"md",children:"Item 1"}),e.jsx(t,{padding:"md",background:"subtle",radius:"md",children:"Item 2"}),e.jsx(t,{padding:"md",background:"subtle",radius:"md",children:"Item 3"})]})},play:async({canvasElement:a})=>{const s=m(a).getByText("Item 1").parentElement;await r(s).toHaveClass("gap-6"),await r(s).toHaveClass("flex-col")}},d={args:{gap:"md",justify:"between",className:"w-[300px] h-[400px] bg-slate-50 border border-slate-300 p-4 rounded-xl"},render:a=>e.jsxs(i,{...a,children:[e.jsx(t,{as:"header",padding:"md",radius:"md",background:"subtle",className:"border border-gray-200 font-bold",children:"Header"}),e.jsx(t,{as:"main",padding:"lg",radius:"md",background:"default",className:"flex flex-1 items-center justify-center border border-gray-200",children:"Content Area (Flex-1)"}),e.jsx(t,{as:"footer",padding:"sm",radius:"md",background:"subtle",className:"border border-gray-200 text-sm",children:"Footer"})]}),play:async({canvasElement:a})=>{const o=m(a),s=o.getByText("Header"),l=o.getByText("Footer");await r(s).toBeInTheDocument(),await r(l).toBeInTheDocument();const p=s.parentElement;await r(p).toHaveClass("flex-col"),await r(p).toHaveClass("justify-between")}};var g,u,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,y,h;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(y=c.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var k,f,B;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(f=d.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const S=["Default","WithGap","LayoutExample"];export{n as Default,d as LayoutExample,c as WithGap,S as __namedExportsOrder,C as default};
