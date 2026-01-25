import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x,R as H}from"./iframe-BKdtO-JH.js";import{t as w}from"./index-Ca4j9_td.js";import{P as d}from"./Primitive-DIpuJ4GE.js";import{F as j}from"./Flex-C2iMnNUk.js";import{V as p}from"./VStack-Day6-h-f.js";import{H as c}from"./HStack-DDItUciH.js";import{H as k,B,P as F,a as z,d as R,Q as E,e as P}from"./chunk-4PGAIDWE-Cvnv7Ykn.js";import{F as V}from"./Float-Blsj-mo2.js";import{B as i}from"./Box-Bg1L1MBM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B5XjD_jX.js";import"./mergeStyles-Dw1fI3XI.js";import"./Stack-CaeFStBK.js";import"./chunk-EVKQEOYT-B7U-Du-_.js";import"./converter-Cub1Z0Tz.js";const n=w({slots:{root:"flex h-screen w-65 flex-col bg-white border-r border-gray-100",header:"px-2.5 py-8",content:"flex-1 overflow-y-auto px-2.5 py-2",footer:"border-t border-gray-100 px-4 py-4",item:"group w-full flex items-center gap-2 px-4.5 py-2 rounded-sm text-md transition-colors",badge:"ml-auto px-2 py-0.5 text-sm rounded-sm bg-red-100 text-red-400",icon:"w-4.5 h-4.5",text:"text-md"},variants:{selected:{true:{item:"bg-gray-100",text:"text-gray-700 typo-subtitle-16-bold",icon:"fill-gray-600"},false:{item:"hover:bg-gray-50 active:bg-gray-50",text:"typo-body-16-medium text-gray-500 group-hover:text-gray-700 group-active:text-gray-700",icon:"fill-gray-300 group-hover:fill-gray-600 group-active:fill-gray-600"}}},defaultVariants:{selected:!1}}),f=x.createContext(null),A=()=>{const a=x.useContext(f);if(!a)throw new Error("Sidebar compound components must be used within Sidebar");return a},v=x.createContext(null),N=()=>{const a=x.useContext(v);if(!a)throw new Error("Sidebar Item compound components must be used within Sidebar.Item");return a},y=({children:a,selected:s,onSelectChange:r,...o})=>{const{root:u}=n();return e.jsx(f.Provider,{value:{selected:s,onSelectChange:r},children:e.jsx(d.nav,{className:u(),...o,children:a})})},q=({children:a,...s})=>{const{header:r}=n();return e.jsx(d.div,{className:r(),...s,children:a})},_=({children:a,...s})=>{const{content:r}=n();return e.jsx(d.div,{className:r(),...s,children:a})},Q=({selected:a,value:s,children:r,onClick:o,...u})=>{const l=A(),b=a??(l.selected!==void 0&&s!==void 0?l.selected===s:!1),{item:C}=n({selected:b}),T=h=>{o==null||o(h),!h.defaultPrevented&&l.onSelectChange&&s!==void 0&&l.onSelectChange(s)};return e.jsx(v.Provider,{value:{selected:b},children:e.jsx(d.button,{type:"button",className:C(),onClick:T,...u,children:r})})},D=({children:a,...s})=>{const r=N(),{icon:o}=n({selected:r.selected});return e.jsx(d.svg,{asChild:!0,className:o(),...s,children:a})},O=({children:a,...s})=>{const r=N(),{text:o}=n({selected:r.selected});return e.jsx(d.span,{className:o(),...s,children:a})},L=({children:a,...s})=>{const{footer:r}=n();return e.jsx(d.div,{className:r(),...s,children:a})};n().badge();const t=Object.assign(y,{Header:q,Content:_,Item:Q,ItemIcon:D,ItemText:O,Footer:L});y.__docgenInfo={description:"",methods:[],displayName:"SidebarRoot",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Whether the element should be rendered as a child of a slot.
@default false`},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},selected:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onSelectChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: SidebarValue) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""}},composes:["ComponentProps"]};const ce={title:"Components/Sidebar",component:t,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{children:void 0}};function W(){return e.jsx("span",{className:"px-2.5 font-bold text-blue-500",children:"크자회 Logo"})}function G(){return e.jsxs(j,{align:"center",className:"gap-3",children:[e.jsx(i,{className:"h-10 w-10 rounded-md bg-gray-200"}),e.jsxs(i,{className:"flex-1",children:[e.jsx(i,{className:"text-sm font-bold text-gray-700",children:"유지아"}),e.jsx(i,{className:"text-xs text-gray-400",children:"djdkwnl@cau.ac.kr"})]}),e.jsx(i,{className:"text-xl text-gray-400",children:"⋯"})]})}const m={render:()=>{const[a,s]=H.useState("home");return e.jsxs(j,{className:"h-screen bg-gray-100",children:[e.jsxs(t,{selected:a,onSelectChange:r=>s(String(r)),children:[e.jsx(t.Header,{children:e.jsx(W,{})}),e.jsx(t.Content,{children:e.jsxs("div",{className:"flex h-full flex-col",children:[e.jsxs(p,{gap:"sm",children:[e.jsx(t.Item,{value:"home",asChild:!0,children:e.jsxs(c,{className:"gap-3.5",children:[e.jsx(t.ItemIcon,{children:e.jsx(k,{})}),e.jsx(t.ItemText,{children:"홈"})]})}),e.jsx(t.Item,{value:"community",asChild:!0,children:e.jsxs(c,{className:"gap-3.5",children:[e.jsx(t.ItemIcon,{children:e.jsx(B,{size:18})}),e.jsx(t.ItemText,{children:"커뮤니티"})]})}),e.jsx(t.Item,{value:"write",asChild:!0,children:e.jsxs(c,{className:"gap-3.5",children:[e.jsx(t.ItemIcon,{children:e.jsx(F,{size:18})}),e.jsx(t.ItemText,{children:"글쓰기"})]})}),e.jsx(t.Item,{value:"directory",asChild:!0,children:e.jsxs(c,{className:"gap-3.5",children:[e.jsx(t.ItemIcon,{children:e.jsx(z,{size:18})}),e.jsx(t.ItemText,{children:"동문수첩"})]})}),e.jsx(t.Item,{value:"profile",asChild:!0,children:e.jsxs(c,{className:"gap-3.5",children:[e.jsx(t.ItemIcon,{children:e.jsx(R,{size:18})}),e.jsx(t.ItemText,{children:"내 동문수첩"})]})})]}),e.jsxs(p,{gap:"sm",className:"mt-auto",children:[e.jsx(t.Item,{value:"about",asChild:!0,children:e.jsxs(c,{className:"gap-3.5",children:[e.jsx(t.ItemIcon,{children:e.jsx(E,{size:18})}),e.jsx(t.ItemText,{children:"크자회 소개"})]})}),e.jsx(t.Item,{value:"notifications",asChild:!0,children:e.jsxs(c,{className:"gap-3.5 pr-2",children:[e.jsxs("div",{className:"relative",children:[e.jsx(V,{floatType:"absolute",top:-2,right:-2,children:e.jsx("div",{className:"h-1 w-1 rounded-full bg-red-500"})}),e.jsx(t.ItemIcon,{asChild:!0,children:e.jsx(P,{size:18})})]}),e.jsx(t.ItemText,{children:"알림"}),e.jsx(i,{className:"ml-auto flex h-6 w-6 items-center justify-center rounded-sm bg-red-100 text-xs text-red-400",children:"1"})]})})]})]})}),e.jsx(t.Footer,{children:e.jsx(G,{})})]}),e.jsxs(i,{className:"flex-1 p-8",children:[e.jsxs(i,{className:"text-xl font-bold",children:["Active: ",a]}),e.jsx(i,{className:"mt-2 text-sm text-gray-500",children:"Custom content + Footer 포함 기본 예시"})]})]})}};var S,I,g;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = React.useState('home');
    return <Flex className="h-screen bg-gray-100">
        <Sidebar selected={active} onSelectChange={v => setActive(String(v))}>
          <Sidebar.Header>
            <HeaderExample />
          </Sidebar.Header>

          <Sidebar.Content>
            {/* custom content */}
            <div className="flex h-full flex-col">
              <VStack gap="sm">
                <Sidebar.Item value="home" asChild>
                  <HStack className="gap-3.5">
                    <Sidebar.ItemIcon>
                      <Home />
                    </Sidebar.ItemIcon>
                    <Sidebar.ItemText>홈</Sidebar.ItemText>
                  </HStack>
                </Sidebar.Item>

                <Sidebar.Item value="community" asChild>
                  <HStack className="gap-3.5">
                    <Sidebar.ItemIcon>
                      <Board size={18} />
                    </Sidebar.ItemIcon>
                    <Sidebar.ItemText>커뮤니티</Sidebar.ItemText>
                  </HStack>
                </Sidebar.Item>

                <Sidebar.Item value="write" asChild>
                  <HStack className="gap-3.5">
                    <Sidebar.ItemIcon>
                      <Pen size={18} />
                    </Sidebar.ItemIcon>
                    <Sidebar.ItemText>글쓰기</Sidebar.ItemText>
                  </HStack>
                </Sidebar.Item>

                <Sidebar.Item value="directory" asChild>
                  <HStack className="gap-3.5">
                    <Sidebar.ItemIcon>
                      <Contacts size={18} />
                    </Sidebar.ItemIcon>
                    <Sidebar.ItemText>동문수첩</Sidebar.ItemText>
                  </HStack>
                </Sidebar.Item>

                <Sidebar.Item value="profile" asChild>
                  <HStack className="gap-3.5">
                    <Sidebar.ItemIcon>
                      <Book size={18} />
                    </Sidebar.ItemIcon>
                    <Sidebar.ItemText>내 동문수첩</Sidebar.ItemText>
                  </HStack>
                </Sidebar.Item>
              </VStack>

              <VStack gap="sm" className="mt-auto">
                <Sidebar.Item value="about" asChild>
                  <HStack className="gap-3.5">
                    <Sidebar.ItemIcon>
                      <Question size={18} />
                    </Sidebar.ItemIcon>
                    <Sidebar.ItemText>크자회 소개</Sidebar.ItemText>
                  </HStack>
                </Sidebar.Item>
                <Sidebar.Item value="notifications" asChild>
                  <HStack className="gap-3.5 pr-2">
                    <div className="relative">
                      <Float floatType="absolute" top={-2} right={-2}>
                        <div className="h-1 w-1 rounded-full bg-red-500" />
                      </Float>
                      <Sidebar.ItemIcon asChild>
                        <Bell size={18} />
                      </Sidebar.ItemIcon>
                    </div>
                    <Sidebar.ItemText>알림</Sidebar.ItemText>
                    <Box className="ml-auto flex h-6 w-6 items-center justify-center rounded-sm bg-red-100 text-xs text-red-400">
                      1
                    </Box>
                  </HStack>
                </Sidebar.Item>
              </VStack>
            </div>
          </Sidebar.Content>

          <Sidebar.Footer>
            <FooterExample />
          </Sidebar.Footer>
        </Sidebar>

        <Box className="flex-1 p-8">
          <Box className="text-xl font-bold">Active: {active}</Box>
          <Box className="mt-2 text-sm text-gray-500">
            Custom content + Footer 포함 기본 예시
          </Box>
        </Box>
      </Flex>;
  }
}`,...(g=(I=m.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};const de=["Default"];export{m as Default,de as __namedExportsOrder,ce as default};
