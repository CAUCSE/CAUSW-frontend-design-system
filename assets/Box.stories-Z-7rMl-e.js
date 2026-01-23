import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{w as g,e as n}from"./index-CH3kunnf.js";import{B as e}from"./Box-Ci1Y7QJA.js";import"./iframe-Ca3o9qSC.js";import"./preload-helper-Dp1pzeXC.js";import"./mergeStyles-CG35R4DM.js";import"./bundle-mjs-CJvxXMcu.js";const k={title:"Components/Box",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:"text",description:"The HTML element to render (e.g., div, section, article)."},padding:{control:"select",options:["none","xs","sm","md","lg"],description:"Sets the internal padding of the box."},radius:{control:"select",options:["none","xs","sm","md","lg","xl","2xl","3xl"],description:"Sets the border radius based on design tokens."},display:{control:"select",options:["block","flex","grid","inline-block","inline-flex","none"],description:"Sets the CSS display property."},background:{control:"select",options:["default","subtle","inverse","transparent"],description:"Sets the background color style."}}},t={args:{children:"Box Content",padding:"md",background:"subtle",radius:"md",className:"border border-gray-200"},play:async({canvasElement:r})=>{const d=g(r).getByText("Box Content");await n(d).toBeInTheDocument(),await n(d).toHaveClass("p-4")}},o={render:()=>a.jsxs(e,{display:"flex",className:"w-[300px] flex-col gap-4",children:[a.jsx(e,{as:"header",padding:"md",radius:"md",background:"subtle",className:"border border-gray-200 font-bold",children:"Header"}),a.jsx(e,{as:"main",padding:"lg",radius:"md",background:"default",className:"min-h-[100px] border border-gray-200",children:"Content Area (bg-default)"}),a.jsx(e,{as:"section",padding:"md",radius:"md",background:"inverse",className:"text-center",children:"Inverse Background"}),a.jsx(e,{as:"footer",padding:"sm",radius:"md",background:"subtle",className:"border border-gray-200 text-sm text-gray-500",children:"Footer"})]}),play:async({canvasElement:r})=>{const s=g(r);await n(s.getByText("Header")).toBeInTheDocument(),await n(s.getByText("Inverse Background")).toBeInTheDocument()}};var c,i,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Box Content',
    padding: 'md',
    background: 'subtle',
    radius: 'md',
    className: 'border border-gray-200'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const box = canvas.getByText('Box Content');
    await expect(box).toBeInTheDocument();
    await expect(box).toHaveClass('p-4');
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Box display="flex" className="w-[300px] flex-col gap-4">
      <Box as="header" padding="md" radius="md" background="subtle" className="border border-gray-200 font-bold">
        Header
      </Box>
      <Box as="main" padding="lg" radius="md" background="default" className="min-h-[100px] border border-gray-200">
        Content Area (bg-default)
      </Box>
      <Box as="section" padding="md" radius="md" background="inverse" className="text-center">
        Inverse Background
      </Box>
      <Box as="footer" padding="sm" radius="md" background="subtle" className="border border-gray-200 text-sm text-gray-500">
        Footer
      </Box>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Header')).toBeInTheDocument();
    await expect(canvas.getByText('Inverse Background')).toBeInTheDocument();
  }
}`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const T=["Default","LayoutExample"];export{t as Default,o as LayoutExample,T as __namedExportsOrder,k as default};
