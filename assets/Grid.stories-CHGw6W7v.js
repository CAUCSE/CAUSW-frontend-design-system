import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{w as m,e as l}from"./index-CH3kunnf.js";import{R as D}from"./iframe-BKdtO-JH.js";import{t as G}from"./index-Ca4j9_td.js";import{m as M}from"./mergeStyles-Dw1fI3XI.js";import{B as n}from"./Box-Bg1L1MBM.js";import"./preload-helper-Dp1pzeXC.js";const _=G({base:"grid",variants:{columns:{1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",7:"grid-cols-7",8:"grid-cols-8",9:"grid-cols-9",10:"grid-cols-10",11:"grid-cols-11",12:"grid-cols-12",none:"grid-cols-none"},rows:{1:"grid-rows-1",2:"grid-rows-2",3:"grid-rows-3",4:"grid-rows-4",5:"grid-rows-5",6:"grid-rows-6",none:"grid-rows-none"},gap:{none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8"},flow:{row:"grid-flow-row",col:"grid-flow-col","row-dense":"grid-flow-row-dense","col-dense":"grid-flow-col-dense"}},defaultVariants:{columns:"none",rows:"none",gap:"md",flow:"row"}}),i=({as:e,columns:a,rows:s,gap:j,flow:I,className:C="",children:E,...k})=>{const H=e||"div",S=_({columns:a,rows:s,gap:j,flow:I});return D.createElement(H,{className:M(S,C),...k},E)};i.displayName="Grid";i.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{as:{required:!1,tsType:{name:"E"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const p=e=>Array.from({length:e}).map((a,s)=>r.jsxs(n,{padding:"md",background:s%2===0?"subtle":"default",radius:"md",className:"flex h-20 items-center justify-center border border-gray-200 font-medium text-gray-600",children:["Item ",s+1]},s)),O={title:"Layouts/Grid",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:"text",description:"The HTML element to render."},columns:{control:"select",options:[1,2,3,4,6,8,12,"none"],description:"Defines the number of columns (grid-template-columns)."},rows:{control:"select",options:[1,2,3,4,5,6,"none"],description:"Defines the number of rows (grid-template-rows)."},gap:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"The spacing between grid items."},flow:{control:"radio",options:["row","col","row-dense","col-dense"],description:"Controls how the auto-placement algorithm works (grid-auto-flow)."}}},o={args:{columns:3,gap:"md",className:"w-[600px]",children:p(6)},play:async({canvasElement:e})=>{const s=m(e).getByText("Item 1").parentElement;await l(s).toHaveClass("grid","grid-cols-3","gap-4")}},t={args:{columns:4,gap:"lg",className:"w-[800px]",children:p(8)},play:async({canvasElement:e})=>{const s=m(e).getByText("Item 1").parentElement;await l(s).toHaveClass("gap-6")}},c={args:{columns:3,rows:3,flow:"col",gap:"sm",className:"w-[400px] h-[400px]",children:p(9)},parameters:{docs:{description:{story:"Items fill columns first instead of rows (`grid-auto-flow: column`)."}}}},d={args:{columns:4,gap:"md",className:"w-[800px]"},render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{padding:"lg",background:"subtle",radius:"md",className:"col-span-4 border border-blue-200 text-center font-bold text-blue-800",children:"Header (col-span-4)"}),r.jsx(n,{padding:"md",background:"default",radius:"md",className:"row-span-2 flex items-center justify-center border border-gray-200",children:"Sidebar (row-span-2)"}),r.jsx(n,{padding:"md",background:"subtle",radius:"md",className:"col-span-3 flex h-32 items-center justify-center border border-green-200",children:"Main Content 1 (col-span-3)"}),r.jsx(n,{padding:"md",background:"subtle",radius:"md",className:"col-span-3 flex h-32 items-center justify-center border border-purple-200",children:"Main Content 2 (col-span-3)"}),r.jsx(n,{padding:"md",background:"inverse",radius:"md",className:"col-span-4 text-center text-white",children:"Footer (col-span-4)"})]}),play:async({canvasElement:e})=>{const a=m(e);await l(a.getByText("Header (col-span-4)")).toBeInTheDocument(),await l(a.getByText("Sidebar (row-span-2)")).toBeInTheDocument()}};var g,u,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(u=o.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var x,f,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,h,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var B,N,T;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(T=(N=d.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const z=["Default","WithGap","FlowColumn","ComplexLayout"];export{d as ComplexLayout,o as Default,c as FlowColumn,t as WithGap,z as __namedExportsOrder,O as default};
