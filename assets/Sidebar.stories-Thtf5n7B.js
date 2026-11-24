import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l,R as C}from"./iframe-Cnf0TL4C.js";import{t as N}from"./index-Ca4j9_td.js";import{P as c}from"./Primitive-BffUoAla.js";import{B as T}from"./Bell-D9n2UMhM.js";import{H as B,B as R,C as F,S as P}from"./Setting-qGyiCC8Z.js";import{F as V}from"./Flex-DBj5l5S8.js";import{V as A}from"./VStack-DlfWx071.js";import{B as u}from"./Box-Dg4rCV38.js";import"./preload-helper-Dp1pzeXC.js";import"./index-fm1Hn0tn.js";import"./types-2sDnptjW.js";import"./colors-B5_xS8Kn.js";import"./mergeStyles-Dw1fI3XI.js";import"./Stack-ClQvbQ14.js";const i=N({slots:{root:"flex h-screen w-16 shrink-0 flex-col items-start gap-8 border-r border-gray-200 bg-white px-3 pt-[120px]",header:"w-full",content:"flex flex-1 flex-col items-start gap-8 overflow-y-auto",footer:"w-full",item:"group flex h-11 w-10 flex-col items-center justify-center gap-1 rounded-md text-center transition-colors",badge:"ml-auto px-2 py-0.5 text-sm rounded-sm bg-red-100 text-red-400",icon:"h-5 w-5",text:"whitespace-nowrap"},variants:{selected:{true:{text:"typo-caption-12-medium text-gray-600",icon:"fill-gray-600"},false:{item:"hover:bg-gray-50 active:bg-gray-50",text:"typo-caption-12-medium text-gray-400 group-hover:text-gray-700 group-active:text-gray-700",icon:"fill-gray-300 group-hover:fill-gray-600 group-active:fill-gray-600"}}},defaultVariants:{selected:!1}}),g=l.createContext(null),E=()=>{const t=l.useContext(g);if(!t)throw new Error("Sidebar compound components must be used within Sidebar");return t},f=l.createContext(null),v=()=>{const t=l.useContext(f);if(!t)throw new Error("Sidebar Item compound components must be used within Sidebar.Item");return t},j=({children:t,selected:r,onSelectChange:s,className:o,...n})=>{const{root:x}=i();return e.jsx(g.Provider,{value:{selected:r,onSelectChange:s},children:e.jsx(c.nav,{className:x({className:o}),...n,children:t})})},H=({children:t,className:r,...s})=>{const{header:o}=i();return e.jsx(c.div,{className:o({className:r}),...s,children:t})},q=({children:t,className:r,...s})=>{const{content:o}=i();return e.jsx(c.div,{className:o({className:r}),...s,children:t})},_=({selected:t,value:r,className:s,children:o,onClick:n,...x})=>{const d=E(),b=t??(d.selected!==void 0&&r!==void 0?d.selected===r:!1),{item:y}=i({selected:b}),w=p=>{n==null||n(p),!p.defaultPrevented&&d.onSelectChange&&r!==void 0&&d.onSelectChange(r)};return e.jsx(f.Provider,{value:{selected:b},children:e.jsx(c.button,{type:"button",className:y({className:s}),onClick:w,...x,children:o})})},k=({children:t,className:r,...s})=>{const o=v(),{icon:n}=i({selected:o.selected});return e.jsx(c.svg,{asChild:!0,className:n({className:r}),...s,children:t})},D=({children:t,className:r,...s})=>{const o=v(),{text:n}=i({selected:o.selected});return e.jsx(c.span,{className:n({className:r}),...s,children:t})},O=({children:t,className:r,...s})=>{const{footer:o}=i();return e.jsx(c.div,{className:o({className:r}),...s,children:t})};i().badge();const a=Object.assign(j,{Header:H,Content:q,Item:_,ItemIcon:k,ItemText:D,Footer:O});j.__docgenInfo={description:"",methods:[],displayName:"SidebarRoot",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Whether the element should be rendered as a child of a slot.
@default false`},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},selected:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onSelectChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: SidebarValue) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""}},composes:["ComponentProps"]};const re={title:"Components/Sidebar",component:a,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{children:void 0}},m={render:()=>{const[t,r]=C.useState("home");return e.jsxs(V,{className:"h-screen bg-gray-100",children:[e.jsxs(a,{selected:t,onSelectChange:s=>r(String(s)),children:[e.jsxs(A,{gap:"xl",className:"items-start",children:[e.jsxs(a.Item,{value:"home",children:[e.jsx(a.ItemIcon,{children:e.jsx(B,{})}),e.jsx(a.ItemText,{children:"홈"})]}),e.jsxs(a.Item,{value:"news",children:[e.jsx(a.ItemIcon,{children:e.jsx(R,{})}),e.jsx(a.ItemText,{children:"소식"})]}),e.jsxs(a.Item,{value:"directory",children:[e.jsx(a.ItemIcon,{children:e.jsx(F,{})}),e.jsx(a.ItemText,{children:"동문수첩"})]}),e.jsxs(a.Item,{value:"profile",children:[e.jsx(a.ItemIcon,{children:e.jsx(P,{})}),e.jsx(a.ItemText,{children:"내 정보"})]})]}),e.jsx("div",{className:"w-10 border-t border-gray-200"}),e.jsxs(a.Item,{value:"notifications",children:[e.jsx(a.ItemIcon,{children:e.jsx(T,{})}),e.jsx(a.ItemText,{children:"알림"})]})]}),e.jsxs(u,{className:"flex-1 p-8",children:[e.jsxs(u,{className:"text-xl font-bold",children:["Active: ",t]}),e.jsx(u,{className:"mt-2 text-sm text-gray-500",children:"컴팩트 데스크톱 내비게이션 기본 예시"})]})]})}};var I,S,h;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = React.useState('home');
    return <Flex className="h-screen bg-gray-100">
        <Sidebar selected={active} onSelectChange={v => setActive(String(v))}>
          <VStack gap="xl" className="items-start">
            <Sidebar.Item value="home">
              <Sidebar.ItemIcon>
                <Home />
              </Sidebar.ItemIcon>
              <Sidebar.ItemText>홈</Sidebar.ItemText>
            </Sidebar.Item>
            <Sidebar.Item value="news">
              <Sidebar.ItemIcon>
                <Board />
              </Sidebar.ItemIcon>
              <Sidebar.ItemText>소식</Sidebar.ItemText>
            </Sidebar.Item>
            <Sidebar.Item value="directory">
              <Sidebar.ItemIcon>
                <Contacts />
              </Sidebar.ItemIcon>
              <Sidebar.ItemText>동문수첩</Sidebar.ItemText>
            </Sidebar.Item>
            <Sidebar.Item value="profile">
              <Sidebar.ItemIcon>
                <Setting />
              </Sidebar.ItemIcon>
              <Sidebar.ItemText>내 정보</Sidebar.ItemText>
            </Sidebar.Item>
          </VStack>

          <div className="w-10 border-t border-gray-200" />

          <Sidebar.Item value="notifications">
            <Sidebar.ItemIcon>
              <Bell />
            </Sidebar.ItemIcon>
            <Sidebar.ItemText>알림</Sidebar.ItemText>
          </Sidebar.Item>
        </Sidebar>

        <Box className="flex-1 p-8">
          <Box className="text-xl font-bold">Active: {active}</Box>
          <Box className="mt-2 text-sm text-gray-500">
            컴팩트 데스크톱 내비게이션 기본 예시
          </Box>
        </Box>
      </Flex>;
  }
}`,...(h=(S=m.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const ae=["Default"];export{m as Default,ae as __namedExportsOrder,re as default};
