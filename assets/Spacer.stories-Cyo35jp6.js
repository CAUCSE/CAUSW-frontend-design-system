import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as j,e as N}from"./index-Cpohvpwh.js";import{R as F}from"./iframe-Brk0QucN.js";import{t as E}from"./index-Ca4j9_td.js";import{m as T}from"./mergeStyles-Dw1fI3XI.js";import{F as o}from"./Flex-BCSpu438.js";import{B as r}from"./Box-DFaz4XG7.js";import"./preload-helper-Dp1pzeXC.js";const A=E({base:"flex-none",variants:{size:{1:"w-1 h-1",2:"w-2 h-2",4:"w-4 h-4",6:"w-6 h-6",8:"w-8 h-8",10:"w-10 h-10",12:"w-12 h-12",16:"w-16 h-16",20:"w-20 h-20",24:"w-24 h-24",auto:"flex-1"}},defaultVariants:{size:"auto"}}),a=({as:s,size:l,className:t="",...S})=>{const z=s||"div",k=A({size:l});return F.createElement(z,{"aria-hidden":"true",className:T(k,t),...S})};a.displayName="Spacer";a.__docgenInfo={description:"",methods:[],displayName:"Spacer",props:{as:{required:!1,tsType:{name:"E"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const _={title:"Layout Components/Spacer",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["auto",1,2,4,6,8,10,12,16,20,24],description:'The size of the spacer. Use "auto" to fill remaining space.'},as:{control:"text",description:"The HTML element to render."}}},n={args:{size:6},render:s=>e.jsxs(o,{align:"center",className:"rounded-lg border border-gray-200 bg-white p-4",children:[e.jsx(r,{padding:"sm",background:"subtle",radius:"sm",children:"Item A"}),e.jsx(a,{...s}),e.jsx(r,{padding:"sm",background:"subtle",radius:"sm",children:"Item B"})]}),play:async({canvasElement:s})=>{const t=j(s).getByText("Item A").nextElementSibling;await N(t).toHaveClass("w-6","h-6")}},i={args:{size:"auto"},render:s=>e.jsxs(o,{align:"center",className:"w-[400px] rounded-lg border border-gray-200 bg-white p-4",children:[e.jsx(r,{padding:"sm",background:"subtle",radius:"sm",children:"Left"}),e.jsx(a,{...s}),e.jsx(r,{padding:"sm",background:"subtle",radius:"sm",children:"Right"})]}),play:async({canvasElement:s})=>{const t=j(s).getByText("Left").nextElementSibling;await N(t).toHaveClass("flex-1")}},d={args:{size:4},render:s=>e.jsxs(o,{direction:"column",className:"rounded-lg border border-gray-200 bg-white p-4",children:[e.jsx(r,{padding:"sm",background:"subtle",radius:"sm",children:"Top"}),e.jsx(a,{...s}),e.jsx(r,{padding:"sm",background:"subtle",radius:"sm",children:"Middle"}),e.jsx(a,{size:"auto"}),e.jsx(r,{padding:"sm",background:"subtle",radius:"sm",children:"Bottom (Pushed)"})]}),parameters:{docs:{description:{story:'Works in vertical Flex containers as well. Note: `size="auto"` requires the container to have a defined height to work vertically.'}}},decorators:[s=>e.jsx("div",{style:{height:"300px"},children:e.jsx(s,{})})]},c={render:()=>e.jsxs(r,{className:"w-[600px] overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm",children:[e.jsxs(o,{align:"center",className:"h-16 border-b border-gray-100 bg-white px-6",children:[e.jsx(r,{className:"text-xl font-bold text-blue-600",children:"MyLogo"}),e.jsx(a,{size:"auto"}),e.jsxs(o,{gap:"md",children:[e.jsx(r,{className:"cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900",children:"Home"}),e.jsx(r,{className:"cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900",children:"About"}),e.jsx(r,{className:"cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900",children:"Contact"})]}),e.jsx(a,{size:4}),e.jsx(r,{className:"cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700",children:"Sign In"})]}),e.jsx(r,{padding:"lg",className:"flex h-32 items-center justify-center bg-gray-50 text-gray-400",children:"Content Area"})]})};var m,x,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 6 // 24px
  },
  render: args => <Flex align="center" className="rounded-lg border border-gray-200 bg-white p-4">
      <Box padding="sm" background="subtle" radius="sm">
        Item A
      </Box>

      <Spacer {...args} />

      <Box padding="sm" background="subtle" radius="sm">
        Item B
      </Box>
    </Flex>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const spacer = canvas.getByText('Item A').nextElementSibling;
    await expect(spacer).toHaveClass('w-6', 'h-6');
  }
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var u,p,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'auto'
  },
  render: args => <Flex align="center" className="w-[400px] rounded-lg border border-gray-200 bg-white p-4">
      <Box padding="sm" background="subtle" radius="sm">
        Left
      </Box>

      <Spacer {...args} />

      <Box padding="sm" background="subtle" radius="sm">
        Right
      </Box>
    </Flex>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const spacer = canvas.getByText('Left').nextElementSibling;
    // size="auto"일 때 flex-1 클래스가 적용되었는지 확인
    await expect(spacer).toHaveClass('flex-1');
  }
}`,...(b=(p=i.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,y,w;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 4
  },
  render: args => <Flex direction="column" className="rounded-lg border border-gray-200 bg-white p-4">
      <Box padding="sm" background="subtle" radius="sm">
        Top
      </Box>

      <Spacer {...args} />

      <Box padding="sm" background="subtle" radius="sm">
        Middle
      </Box>

      <Spacer size="auto" />

      <Box padding="sm" background="subtle" radius="sm">
        Bottom (Pushed)
      </Box>
    </Flex>,
  parameters: {
    docs: {
      description: {
        story: 'Works in vertical Flex containers as well. Note: \`size="auto"\` requires the container to have a defined height to work vertically.'
      }
    }
  },
  decorators: [Story => <div style={{
    height: '300px'
  }}>
        <Story />
      </div>]
}`,...(w=(y=d.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var f,v,B;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Box className="w-[600px] overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
      <Flex align="center" className="h-16 border-b border-gray-100 bg-white px-6">
        {/* Logo */}
        <Box className="text-xl font-bold text-blue-600">MyLogo</Box>

        <Spacer size="auto" />

        <Flex gap="md">
          <Box className="cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900">
            Home
          </Box>
          <Box className="cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900">
            About
          </Box>
          <Box className="cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900">
            Contact
          </Box>
        </Flex>

        <Spacer size={4} />

        <Box className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700">
          Sign In
        </Box>
      </Flex>

      <Box padding="lg" className="flex h-32 items-center justify-center bg-gray-50 text-gray-400">
        Content Area
      </Box>
    </Box>
}`,...(B=(v=c.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};const P=["FixedSize","AutoSize","Vertical","NavbarExample"];export{i as AutoSize,n as FixedSize,c as NavbarExample,d as Vertical,P as __namedExportsOrder,_ as default};
