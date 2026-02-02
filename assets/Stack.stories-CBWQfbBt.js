import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as i,e as n}from"./index-Cpohvpwh.js";import{S as B}from"./Stack-DAKO6ne7.js";import{B as a}from"./Box-6NY_EY9F.js";import"./iframe-DdQLMFew.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ca4j9_td.js";import"./mergeStyles-Dw1fI3XI.js";const N={title:"Layouts/Stack",component:B,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:"text",description:"The HTML element to render (e.g., div, section, main)."},direction:{control:"radio",options:["horizontal","vertical"],description:"The direction to stack the items."},gap:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"The spacing between items."},align:{control:"select",options:["start","center","end","stretch"],description:"Defines the default behavior for how flex items are laid out along the cross axis (align-items)."},justify:{control:"select",options:["start","center","end","between"],description:"Defines the alignment along the main axis (justify-content)."}}},s={args:{direction:"vertical",gap:"md",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{padding:"sm",background:"subtle",children:"Item 1"}),e.jsx(a,{padding:"sm",background:"subtle",children:"Item 2"}),e.jsx(a,{padding:"sm",background:"subtle",children:"Item 3"})]})},play:async({canvasElement:t})=>{const o=i(t).getByText("Item 1");await n(o).toBeInTheDocument()}},d={args:{direction:"vertical",gap:"lg",className:"bg-gray-50 p-4 border border-gray-200 rounded-lg",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{padding:"md",background:"subtle",radius:"md",children:"Item 1"}),e.jsx(a,{padding:"md",background:"subtle",radius:"md",children:"Item 2"}),e.jsx(a,{padding:"md",background:"subtle",radius:"md",children:"Item 3"})]})},play:async({canvasElement:t})=>{const o=i(t).getByText("Item 1").parentElement;await n(o).toBeInTheDocument()}},c={args:{direction:"vertical",gap:"md",justify:"between",className:"w-[300px] h-[400px] bg-slate-50 border border-slate-300 p-4 rounded-xl"},render:t=>e.jsxs(B,{...t,children:[e.jsx(a,{as:"header",padding:"md",radius:"md",background:"subtle",className:"border border-gray-200 font-bold",children:"Header"}),e.jsx(a,{as:"main",padding:"lg",radius:"md",background:"default",className:"flex-1 border border-gray-200",children:"Content Area (Flex-1)"}),e.jsx(a,{as:"footer",padding:"sm",radius:"md",background:"subtle",className:"border border-gray-200 text-sm",children:"Footer"})]}),play:async({canvasElement:t})=>{const r=i(t),o=r.getByText("Header"),v=r.getByText("Content Area (Flex-1)"),k=r.getByText("Footer");await n(o).toBeInTheDocument(),await n(v).toBeInTheDocument(),await n(k).toBeInTheDocument()}};var m,l,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
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
  }
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,p,x;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    gap: 'lg',
    className: 'bg-gray-50 p-4 border border-gray-200 rounded-lg',
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
    await expect(stack).toBeInTheDocument();
  }
}`,...(x=(p=d.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var b,h,y;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    gap: 'md',
    justify: 'between',
    // Added height and background to make layout behavior visible
    className: 'w-[300px] h-[400px] bg-slate-50 border border-slate-300 p-4 rounded-xl'
  },
  render: args => <Stack {...args}>
      <Box as="header" padding="md" radius="md" background="subtle" className="border border-gray-200 font-bold">
        Header
      </Box>
      <Box as="main" padding="lg" radius="md" background="default" className="flex-1 border border-gray-200">
        Content Area (Flex-1)
      </Box>
      <Box as="footer" padding="sm" radius="md" background="subtle" className="border border-gray-200 text-sm">
        Footer
      </Box>
    </Stack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByText('Header');
    const content = canvas.getByText('Content Area (Flex-1)');
    const footer = canvas.getByText('Footer');
    await expect(header).toBeInTheDocument();
    await expect(content).toBeInTheDocument();
    await expect(footer).toBeInTheDocument();
  }
}`,...(y=(h=c.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const S=["Default","WithGap","LayoutExample"];export{s as Default,c as LayoutExample,d as WithGap,S as __namedExportsOrder,N as default};
