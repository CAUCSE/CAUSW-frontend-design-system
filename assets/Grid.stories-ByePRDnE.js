import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{w as i,e as l}from"./index-Cpohvpwh.js";import{G as j}from"./Grid-xnniTtAI.js";import{B as s}from"./Box-DgjA9pjP.js";import"./iframe-Db0LztzR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ca4j9_td.js";import"./mergeStyles-Dw1fI3XI.js";const m=e=>Array.from({length:e}).map((r,a)=>n.jsxs(s,{padding:"md",background:a%2===0?"subtle":"default",radius:"md",className:"flex h-20 items-center justify-center border border-gray-200 font-medium text-gray-600",children:["Item ",a+1]},a)),G={title:"Layouts/Grid",component:j,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:"text",description:"The HTML element to render."},columns:{control:"select",options:[1,2,3,4,6,8,12,"none"],description:"Defines the number of columns (grid-template-columns)."},rows:{control:"select",options:[1,2,3,4,5,6,"none"],description:"Defines the number of rows (grid-template-rows)."},gap:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"The spacing between grid items."},flow:{control:"radio",options:["row","col","row-dense","col-dense"],description:"Controls how the auto-placement algorithm works (grid-auto-flow)."}}},t={args:{columns:3,gap:"md",className:"w-[600px]",children:m(6)},play:async({canvasElement:e})=>{const a=i(e).getByText("Item 1").parentElement;await l(a).toHaveClass("grid","grid-cols-3","gap-4")}},o={args:{columns:4,gap:"lg",className:"w-[800px]",children:m(8)},play:async({canvasElement:e})=>{const a=i(e).getByText("Item 1").parentElement;await l(a).toHaveClass("gap-6")}},c={args:{columns:3,rows:3,flow:"col",gap:"sm",className:"w-[400px] h-[400px]",children:m(9)},parameters:{docs:{description:{story:"Items fill columns first instead of rows (`grid-auto-flow: column`)."}}}},d={args:{columns:4,gap:"md",className:"w-[800px]"},render:e=>n.jsxs(j,{...e,children:[n.jsx(s,{padding:"lg",background:"subtle",radius:"md",className:"col-span-4 border border-blue-200 text-center font-bold text-blue-800",children:"Header (col-span-4)"}),n.jsx(s,{padding:"md",background:"default",radius:"md",className:"row-span-2 flex items-center justify-center border border-gray-200",children:"Sidebar (row-span-2)"}),n.jsx(s,{padding:"md",background:"subtle",radius:"md",className:"col-span-3 flex h-32 items-center justify-center border border-green-200",children:"Main Content 1 (col-span-3)"}),n.jsx(s,{padding:"md",background:"subtle",radius:"md",className:"col-span-3 flex h-32 items-center justify-center border border-purple-200",children:"Main Content 2 (col-span-3)"}),n.jsx(s,{padding:"md",background:"inverse",radius:"md",className:"col-span-4 text-center text-white",children:"Footer (col-span-4)"})]}),play:async({canvasElement:e})=>{const r=i(e);await l(r.getByText("Header (col-span-4)")).toBeInTheDocument(),await l(r.getByText("Sidebar (row-span-2)")).toBeInTheDocument()}};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 'md',
    className: 'w-[600px]',
    children: createItems(6)
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByText('Item 1').parentElement;
    await expect(container).toHaveClass('grid', 'grid-cols-3', 'gap-4');
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,b,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    columns: 4,
    gap: 'lg',
    className: 'w-[800px]',
    children: createItems(8)
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByText('Item 1').parentElement;
    await expect(container).toHaveClass('gap-6');
  }
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var f,h,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    columns: 3,
    rows: 3,
    flow: 'col',
    gap: 'sm',
    className: 'w-[400px] h-[400px]',
    children: createItems(9)
  },
  parameters: {
    docs: {
      description: {
        story: 'Items fill columns first instead of rows (\`grid-auto-flow: column\`).'
      }
    }
  }
}`,...(y=(h=c.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,B,N;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    columns: 4,
    gap: 'md',
    className: 'w-[800px]'
  },
  render: args => <Grid {...args}>
      <Box padding="lg" background="subtle" radius="md" className="col-span-4 border border-blue-200 text-center font-bold text-blue-800">
        Header (col-span-4)
      </Box>

      <Box padding="md" background="default" radius="md" className="row-span-2 flex items-center justify-center border border-gray-200">
        Sidebar (row-span-2)
      </Box>

      <Box padding="md" background="subtle" radius="md" className="col-span-3 flex h-32 items-center justify-center border border-green-200">
        Main Content 1 (col-span-3)
      </Box>

      <Box padding="md" background="subtle" radius="md" className="col-span-3 flex h-32 items-center justify-center border border-purple-200">
        Main Content 2 (col-span-3)
      </Box>

      <Box padding="md" background="inverse" radius="md" className="col-span-4 text-center text-white">
        Footer (col-span-4)
      </Box>
    </Grid>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Header (col-span-4)')).toBeInTheDocument();
    await expect(canvas.getByText('Sidebar (row-span-2)')).toBeInTheDocument();
  }
}`,...(N=(B=d.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const M=["Default","WithGap","FlowColumn","ComplexLayout"];export{d as ComplexLayout,t as Default,c as FlowColumn,o as WithGap,M as __namedExportsOrder,G as default};
