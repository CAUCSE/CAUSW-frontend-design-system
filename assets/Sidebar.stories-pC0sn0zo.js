import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x,R as T}from"./iframe-fHu3cj1X.js";import{t as B}from"./index-Ca4j9_td.js";import{P as c}from"./Primitive-B69EZ0qL.js";import{I as R,M as I,D as O}from"./types-2sDnptjW.js";import{H as E,B as V,C as _,S as F}from"./Setting-qGyiCC8Z.js";import{F as H}from"./Flex-4vsEDRF2.js";import{V as A}from"./VStack-C4fTMwQF.js";import{B as u}from"./Box-DZL7-RD4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-tUr42x44.js";import"./colors-B5_xS8Kn.js";import"./mergeStyles-Dw1fI3XI.js";import"./Stack-DkZjJiNk.js";const f=({size:t=O,active:r=!1,color:s,title:a,...n})=>{const d=s?R[s]:r?I.active:I.inactive;return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:t,height:t,fill:d,color:d,"aria-hidden":a?void 0:!0,"aria-label":a,role:a?"img":void 0,...n,children:[a&&e.jsx("title",{children:a}),e.jsx("path",{d:"M10 0C7.95398 0 5.99176 0.790176 4.54501 2.1967C3.09826 3.60322 2.28548 5.51088 2.28548 7.5V11.9825L1.37645 12.8663C1.19669 13.0411 1.07428 13.2638 1.02469 13.5062C0.975103 13.7487 1.00056 13.9999 1.09786 14.2283C1.19515 14.4567 1.35991 14.6519 1.5713 14.7893C1.78269 14.9266 2.03122 14.9999 2.28548 15H17.7145C17.9688 14.9999 18.2173 14.9266 18.4287 14.7893C18.6401 14.6519 18.8048 14.4567 18.9021 14.2283C18.9994 13.9999 19.0249 13.7487 18.9753 13.5062C18.9257 13.2638 18.8033 13.0411 18.6236 12.8663L17.7145 11.9825V7.5C17.7145 5.51088 16.9017 3.60322 15.455 2.1967C14.0082 0.790176 12.046 0 10 0ZM10 20C8.97699 20 7.99588 19.6049 7.27251 18.9017C6.54913 18.1984 6.14274 17.2446 6.14274 16.25H13.8573C13.8573 17.2446 13.4509 18.1984 12.7275 18.9017C12.0041 19.6049 11.023 20 10 20Z"})]})};f.displayName="Bell";const i=B({slots:{root:"flex h-screen w-16 shrink-0 flex-col items-start gap-8 border-r border-gray-200 bg-white px-3 pt-[120px]",header:"w-full",content:"flex flex-1 flex-col items-start gap-8 overflow-y-auto",footer:"w-full",item:"group flex h-11 w-10 flex-col items-center justify-center gap-1 rounded-md text-center transition-colors",badge:"ml-auto px-2 py-0.5 text-sm rounded-sm bg-red-100 text-red-400",icon:"h-5 w-5",text:"whitespace-nowrap"},variants:{selected:{true:{text:"typo-caption-12-semibold text-gray-600",icon:"fill-gray-600"},false:{item:"hover:bg-gray-50 active:bg-gray-50",text:"typo-caption-12-medium text-gray-400 group-hover:text-gray-700 group-active:text-gray-700",icon:"fill-gray-300 group-hover:fill-gray-600 group-active:fill-gray-600"}}},defaultVariants:{selected:!1}}),v=x.createContext(null),P=()=>{const t=x.useContext(v);if(!t)throw new Error("Sidebar compound components must be used within Sidebar");return t},j=x.createContext(null),C=()=>{const t=x.useContext(j);if(!t)throw new Error("Sidebar Item compound components must be used within Sidebar.Item");return t},y=({children:t,selected:r,onSelectChange:s,className:a,...n})=>{const{root:d}=i();return e.jsx(v.Provider,{value:{selected:r,onSelectChange:s},children:e.jsx(c.nav,{className:d({className:a}),...n,children:t})})},L=({children:t,className:r,...s})=>{const{header:a}=i();return e.jsx(c.div,{className:a({className:r}),...s,children:t})},q=({children:t,className:r,...s})=>{const{content:a}=i();return e.jsx(c.div,{className:a({className:r}),...s,children:t})},D=({selected:t,value:r,className:s,children:a,onClick:n,...d})=>{const m=P(),b=t??(m.selected!==void 0&&r!==void 0?m.selected===r:!1),{item:w}=i({selected:b}),N=p=>{n==null||n(p),!p.defaultPrevented&&m.onSelectChange&&r!==void 0&&m.onSelectChange(r)};return e.jsx(j.Provider,{value:{selected:b},children:e.jsx(c.button,{type:"button",className:w({className:s}),onClick:N,...d,children:a})})},M=({children:t,className:r,...s})=>{const a=C(),{icon:n}=i({selected:a.selected});return e.jsx(c.svg,{asChild:!0,className:n({className:r}),...s,children:t})},Z=({children:t,className:r,...s})=>{const a=C(),{text:n}=i({selected:a.selected});return e.jsx(c.span,{className:n({className:r}),...s,children:t})},k=({children:t,className:r,...s})=>{const{footer:a}=i();return e.jsx(c.div,{className:a({className:r}),...s,children:t})};i().badge();const o=Object.assign(y,{Header:L,Content:q,Item:D,ItemIcon:M,ItemText:Z,Footer:k});y.__docgenInfo={description:"",methods:[],displayName:"SidebarRoot",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Whether the element should be rendered as a child of a slot.
@default false`},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},selected:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onSelectChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: SidebarValue) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""}},composes:["ComponentProps"]};const se={title:"Components/Sidebar",component:o,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{children:void 0}},l={render:()=>{const[t,r]=T.useState("home");return e.jsxs(H,{className:"h-screen bg-gray-100",children:[e.jsxs(o,{selected:t,onSelectChange:s=>r(String(s)),children:[e.jsxs(A,{gap:"xl",className:"items-start",children:[e.jsxs(o.Item,{value:"home",children:[e.jsx(o.ItemIcon,{children:e.jsx(E,{})}),e.jsx(o.ItemText,{children:"홈"})]}),e.jsxs(o.Item,{value:"news",children:[e.jsx(o.ItemIcon,{children:e.jsx(V,{})}),e.jsx(o.ItemText,{children:"소식"})]}),e.jsxs(o.Item,{value:"directory",children:[e.jsx(o.ItemIcon,{children:e.jsx(_,{})}),e.jsx(o.ItemText,{children:"동문수첩"})]}),e.jsxs(o.Item,{value:"profile",children:[e.jsx(o.ItemIcon,{children:e.jsx(F,{})}),e.jsx(o.ItemText,{children:"내 정보"})]})]}),e.jsx("div",{className:"w-10 border-t border-gray-200"}),e.jsxs(o.Item,{value:"notifications",children:[e.jsx(o.ItemIcon,{children:e.jsx(f,{})}),e.jsx(o.ItemText,{children:"알림"})]})]}),e.jsxs(u,{className:"flex-1 p-8",children:[e.jsxs(u,{className:"text-xl font-bold",children:["Active: ",t]}),e.jsx(u,{className:"mt-2 text-sm text-gray-500",children:"컴팩트 데스크톱 내비게이션 기본 예시"})]})]})}};var S,h,g;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const oe=["Default"];export{l as Default,oe as __namedExportsOrder,se as default};
