import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as i,e as t}from"./index-Cpohvpwh.js";import{F as p}from"./Flex-DflPF56H.js";import{B as a}from"./Box-D9aMtHLe.js";import"./iframe-DBd1UhfT.js";import"./preload-helper-Dp1pzeXC.js";import"./mergeStyles-Dw1fI3XI.js";import"./index-Ca4j9_td.js";const S={title:"Layouts/Flex",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:"text",description:"The HTML element to render."},direction:{control:"select",options:["row","row-reverse","column","column-reverse"],description:"The direction of the flex items."},gap:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"The spacing between items."},align:{control:"select",options:["start","center","end","stretch","baseline"],description:"Align items along the cross axis (align-items)."},justify:{control:"select",options:["start","center","end","between","around","evenly"],description:"Justify content along the main axis (justify-content)."},wrap:{control:"radio",options:["nowrap","wrap","wrap-reverse"],description:"Controls whether flex items should wrap."}}},n={args:{direction:"row",gap:"md",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{padding:"sm",background:"subtle",children:"Item 1"}),e.jsx(a,{padding:"sm",background:"subtle",children:"Item 2"}),e.jsx(a,{padding:"sm",background:"subtle",children:"Item 3"})]})},play:async({canvasElement:s})=>{const r=i(s).getByText("Item 1");await t(r).toBeInTheDocument();const l=r.parentElement;await t(l).toHaveClass("flex-row")}},o={args:{gap:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{padding:"md",background:"subtle",radius:"md",children:"Item 1"}),e.jsx(a,{padding:"md",background:"subtle",radius:"md",children:"Item 2"}),e.jsx(a,{padding:"md",background:"subtle",radius:"md",children:"Item 3"})]})},play:async({canvasElement:s})=>{const r=i(s).getByText("Item 1").parentElement;await t(r).toHaveClass("gap-6")}},d={args:{wrap:"wrap",gap:"md",className:"w-[300px] border border-dashed border-gray-300 p-2",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{padding:"md",background:"subtle",className:"w-[100px]",children:"Box 1"}),e.jsx(a,{padding:"md",background:"subtle",className:"w-[100px]",children:"Box 2"}),e.jsx(a,{padding:"md",background:"subtle",className:"w-[100px]",children:"Box 3"}),e.jsx(a,{padding:"md",background:"subtle",className:"w-[100px]",children:"Box 4"}),e.jsx(a,{padding:"md",background:"subtle",className:"w-[100px]",children:"Box 5"})]})},play:async({canvasElement:s})=>{const l=i(s).getByText("Box 1").parentElement;await t(l).toHaveClass("flex-wrap")}},c={args:{direction:"column",gap:"md",className:"w-[300px] h-[400px]"},render:s=>e.jsxs(p,{...s,children:[e.jsx(a,{as:"header",padding:"md",radius:"md",background:"subtle",className:"border border-gray-200 font-bold",children:"Header"}),e.jsxs(p,{as:"main",direction:"row",gap:"sm",className:"flex-1",children:[e.jsx(a,{padding:"md",radius:"md",background:"default",className:"w-1/3 border border-gray-200",children:"Sidebar"}),e.jsx(a,{padding:"md",radius:"md",background:"default",className:"flex-1 border border-gray-200",children:"Main Content"})]}),e.jsx(a,{as:"footer",padding:"sm",radius:"md",background:"subtle",className:"border border-gray-200 text-sm",children:"Footer"})]}),play:async({canvasElement:s})=>{const r=i(s).getByText("Header");await t(r).toBeInTheDocument()}};var x,g,u;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    gap: 'md',
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
    const container = item1.parentElement;
    await expect(container).toHaveClass('flex-row');
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var b,h,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    const container = canvas.getByText('Item 1').parentElement;
    await expect(container).toHaveClass('gap-6');
  }
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var B,y,v;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    wrap: 'wrap',
    gap: 'md',
    className: 'w-[300px] border border-dashed border-gray-300 p-2',
    // Constrained width to force wrap
    children: <>
        <Box padding="md" background="subtle" className="w-[100px]">
          Box 1
        </Box>
        <Box padding="md" background="subtle" className="w-[100px]">
          Box 2
        </Box>
        <Box padding="md" background="subtle" className="w-[100px]">
          Box 3
        </Box>
        <Box padding="md" background="subtle" className="w-[100px]">
          Box 4
        </Box>
        <Box padding="md" background="subtle" className="w-[100px]">
          Box 5
        </Box>
      </>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const box1 = canvas.getByText('Box 1');
    const container = box1.parentElement;
    await expect(container).toHaveClass('flex-wrap');
  }
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,k,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: 'md',
    className: 'w-[300px] h-[400px]'
  },
  render: args => <Flex {...args}>
      <Box as="header" padding="md" radius="md" background="subtle" className="border border-gray-200 font-bold">
        Header
      </Box>
      <Flex as="main" direction="row" gap="sm" className="flex-1">
        <Box padding="md" radius="md" background="default" className="w-1/3 border border-gray-200">
          Sidebar
        </Box>
        <Box padding="md" radius="md" background="default" className="flex-1 border border-gray-200">
          Main Content
        </Box>
      </Flex>
      <Box as="footer" padding="sm" radius="md" background="subtle" className="border border-gray-200 text-sm">
        Footer
      </Box>
    </Flex>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByText('Header');
    await expect(header).toBeInTheDocument();
  }
}`,...(j=(k=c.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const L=["Default","WithGap","Wrapping","LayoutExample"];export{n as Default,c as LayoutExample,o as WithGap,d as Wrapping,L as __namedExportsOrder,S as default};
