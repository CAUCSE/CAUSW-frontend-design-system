import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as N,e as o}from"./index-Cpohvpwh.js";import{R as w}from"./iframe-Bt1_pmy6.js";import{t as S}from"./index-Ca4j9_td.js";import{m as z}from"./mergeStyles-Dw1fI3XI.js";import{B as a}from"./Box-UPu2eqMj.js";import{F as n}from"./Flex-BLmp5bcg.js";import"./preload-helper-Dp1pzeXC.js";const E=S({base:"bg-gray-200",variants:{orientation:{horizontal:"h-px w-full my-2",vertical:"h-full w-px mx-2"}},defaultVariants:{orientation:"horizontal"}}),r=({as:t,orientation:i="horizontal",className:s="",...j})=>{const B=t||"div",v=E({orientation:i});return w.createElement(B,{role:"separator","aria-orientation":i,className:z(v,s),...j})};r.displayName="Separator";r.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{as:{required:!1,tsType:{name:"E"},description:""},orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const V={title:"Layouts/Separator",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"],description:"The orientation of the separator."},as:{control:"text",description:"The HTML element to render."}}},l={args:{orientation:"horizontal"},render:t=>e.jsxs(a,{className:"w-[300px] rounded-lg border border-gray-200 bg-white p-4",children:[e.jsx(a,{className:"text-sm font-medium text-gray-900",children:"Header"}),e.jsx(a,{className:"mb-4 text-xs text-gray-500",children:"Description text goes here."}),e.jsx(r,{...t}),e.jsxs(n,{className:"mt-4 gap-4 text-sm",children:[e.jsx(a,{children:"Item 1"}),e.jsx(a,{children:"Item 2"}),e.jsx(a,{children:"Item 3"})]})]}),play:async({canvasElement:t})=>{const s=N(t).getByRole("separator");await o(s).toBeInTheDocument(),await o(s).toHaveAttribute("aria-orientation","horizontal")}},c={args:{orientation:"vertical"},render:t=>e.jsxs(n,{align:"center",className:"h-10 w-fit gap-4 rounded-lg border border-gray-200 bg-white p-4 text-sm",children:[e.jsx(a,{children:"Blog"}),e.jsx(r,{...t,className:"h-6"}),e.jsx(a,{children:"Docs"}),e.jsx(r,{...t,className:"h-6"}),e.jsx(a,{children:"Source"})]}),play:async({canvasElement:t})=>{const s=N(t).getAllByRole("separator");await o(s[0]).toBeInTheDocument(),await o(s[0]).toHaveAttribute("aria-orientation","vertical"),await o(s[0]).toHaveClass("w-px")}},x={render:()=>e.jsxs(a,{className:"w-[350px] overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm",children:[e.jsxs(a,{padding:"lg",children:[e.jsx("h3",{className:"text-lg font-bold",children:"Profile Settings"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Update your account preferences."})]}),e.jsx(r,{orientation:"horizontal"}),e.jsxs(a,{padding:"lg",className:"space-y-4",children:[e.jsxs(n,{justify:"between",align:"center",children:[e.jsx("span",{className:"text-sm font-medium",children:"Email Notifications"}),e.jsx("span",{className:"rounded bg-blue-100 px-2 py-1 text-xs text-blue-700",children:"Enabled"})]}),e.jsxs(n,{justify:"between",align:"center",children:[e.jsx("span",{className:"text-sm font-medium",children:"Push Notifications"}),e.jsx("span",{className:"rounded bg-gray-100 px-2 py-1 text-xs text-gray-700",children:"Disabled"})]})]}),e.jsx(r,{orientation:"horizontal"}),e.jsxs(n,{className:"h-12 bg-gray-50",children:[e.jsx(a,{className:"flex flex-1 cursor-pointer items-center justify-center text-sm font-medium hover:bg-gray-100",children:"Cancel"}),e.jsx(r,{orientation:"vertical",className:"my-0 h-full"}),e.jsx(a,{className:"flex flex-1 cursor-pointer items-center justify-center text-sm font-bold text-blue-600 hover:bg-gray-100",children:"Save"})]})]})};var m,d,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => <Box className="w-[300px] rounded-lg border border-gray-200 bg-white p-4">
      <Box className="text-sm font-medium text-gray-900">Header</Box>
      <Box className="mb-4 text-xs text-gray-500">
        Description text goes here.
      </Box>

      <Separator {...args} />

      <Flex className="mt-4 gap-4 text-sm">
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </Flex>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const separator = canvas.getByRole('separator');
    await expect(separator).toBeInTheDocument();
    await expect(separator).toHaveAttribute('aria-orientation', 'horizontal');
  }
}`,...(p=(d=l.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,u,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <Flex align="center" className="h-10 w-fit gap-4 rounded-lg border border-gray-200 bg-white p-4 text-sm">
      <Box>Blog</Box>

      <Separator {...args} className="h-6" />

      <Box>Docs</Box>

      <Separator {...args} className="h-6" />

      <Box>Source</Box>
    </Flex>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const separators = canvas.getAllByRole('separator');
    await expect(separators[0]).toBeInTheDocument();
    await expect(separators[0]).toHaveAttribute('aria-orientation', 'vertical');
    await expect(separators[0]).toHaveClass('w-px');
  }
}`,...(h=(u=c.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,y,b;x.parameters={...x.parameters,docs:{...(f=x.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Box className="w-[350px] overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
      <Box padding="lg">
        <h3 className="text-lg font-bold">Profile Settings</h3>
        <p className="text-sm text-gray-500">
          Update your account preferences.
        </p>
      </Box>

      <Separator orientation="horizontal" />

      <Box padding="lg" className="space-y-4">
        <Flex justify="between" align="center">
          <span className="text-sm font-medium">Email Notifications</span>
          <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700">
            Enabled
          </span>
        </Flex>
        <Flex justify="between" align="center">
          <span className="text-sm font-medium">Push Notifications</span>
          <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">
            Disabled
          </span>
        </Flex>
      </Box>

      <Separator orientation="horizontal" />

      <Flex className="h-12 bg-gray-50">
        <Box className="flex flex-1 cursor-pointer items-center justify-center text-sm font-medium hover:bg-gray-100">
          Cancel
        </Box>
        <Separator orientation="vertical" className="my-0 h-full" />

        <Box className="flex flex-1 cursor-pointer items-center justify-center text-sm font-bold text-blue-600 hover:bg-gray-100">
          Save
        </Box>
      </Flex>
    </Box>
}`,...(b=(y=x.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const P=["Horizontal","Vertical","CardExample"];export{x as CardExample,l as Horizontal,c as Vertical,P as __namedExportsOrder,V as default};
