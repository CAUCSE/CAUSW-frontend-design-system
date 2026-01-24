import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{w as p,e as l}from"./index-CH3kunnf.js";import{R as G}from"./iframe-CYzFodF5.js";import{m as j}from"./mergeStyles-B83jKakq.js";import{B as r}from"./Box-D7bEZtbf.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-CJvxXMcu.js";const M={1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",7:"grid-cols-7",8:"grid-cols-8",9:"grid-cols-9",10:"grid-cols-10",11:"grid-cols-11",12:"grid-cols-12",none:"grid-cols-none"},_={1:"grid-rows-1",2:"grid-rows-2",3:"grid-rows-3",4:"grid-rows-4",5:"grid-rows-5",6:"grid-rows-6",none:"grid-rows-none"},F={none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8"},L={row:"grid-flow-row",col:"grid-flow-col","row-dense":"grid-flow-row-dense","col-dense":"grid-flow-col-dense"};function R({columns:e="none",rows:a="none",gap:s="md",flow:m="row"}){return j(["grid",M[e],_[a],F[s],L[m]])}const i=({as:e,columns:a,rows:s,gap:m,flow:I,className:E="",children:k,...S})=>{const H=e||"div",D=R({columns:a,rows:s,gap:m,flow:I});return G.createElement(H,{className:j(D,E),...S},k)};i.displayName="Grid";i.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{as:{required:!1,tsType:{name:"E"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const g=e=>Array.from({length:e}).map((a,s)=>n.jsxs(r,{padding:"md",background:s%2===0?"subtle":"default",radius:"md",className:"flex h-20 items-center justify-center border border-gray-200 font-medium text-gray-600",children:["Item ",s+1]},s)),K={title:"Components/Grid",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:"text",description:"The HTML element to render."},columns:{control:"select",options:[1,2,3,4,6,8,12,"none"],description:"Defines the number of columns (grid-template-columns)."},rows:{control:"select",options:[1,2,3,4,5,6,"none"],description:"Defines the number of rows (grid-template-rows)."},gap:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"The spacing between grid items."},flow:{control:"radio",options:["row","col","row-dense","col-dense"],description:"Controls how the auto-placement algorithm works (grid-auto-flow)."}}},o={args:{columns:3,gap:"md",className:"w-[600px]",children:g(6)},play:async({canvasElement:e})=>{const s=p(e).getByText("Item 1").parentElement;await l(s).toHaveClass("grid","grid-cols-3","gap-4")}},t={args:{columns:4,gap:"lg",className:"w-[800px]",children:g(8)},play:async({canvasElement:e})=>{const s=p(e).getByText("Item 1").parentElement;await l(s).toHaveClass("gap-6")}},c={args:{columns:3,rows:3,flow:"col",gap:"sm",className:"w-[400px] h-[400px]",children:g(9)},parameters:{docs:{description:{story:"Items fill columns first instead of rows (`grid-auto-flow: column`)."}}}},d={args:{columns:4,gap:"md",className:"w-[800px]"},render:e=>n.jsxs(i,{...e,children:[n.jsx(r,{padding:"lg",background:"subtle",radius:"md",className:"col-span-4 border border-blue-200 text-center font-bold text-blue-800",children:"Header (col-span-4)"}),n.jsx(r,{padding:"md",background:"default",radius:"md",className:"row-span-2 flex items-center justify-center border border-gray-200",children:"Sidebar (row-span-2)"}),n.jsx(r,{padding:"md",background:"subtle",radius:"md",className:"col-span-3 flex h-32 items-center justify-center border border-green-200",children:"Main Content 1 (col-span-3)"}),n.jsx(r,{padding:"md",background:"subtle",radius:"md",className:"col-span-3 flex h-32 items-center justify-center border border-purple-200",children:"Main Content 2 (col-span-3)"}),n.jsx(r,{padding:"md",background:"inverse",radius:"md",className:"col-span-4 text-center text-white",children:"Footer (col-span-4)"})]}),play:async({canvasElement:e})=>{const a=p(e);await l(a.getByText("Header (col-span-4)")).toBeInTheDocument(),await l(a.getByText("Sidebar (row-span-2)")).toBeInTheDocument()}};var u,x,w;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var f,b,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,v,B;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(B=(v=c.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var N,C,T;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const P=["Default","WithGap","FlowColumn","ComplexLayout"];export{d as ComplexLayout,o as Default,c as FlowColumn,t as WithGap,P as __namedExportsOrder,K as default};
