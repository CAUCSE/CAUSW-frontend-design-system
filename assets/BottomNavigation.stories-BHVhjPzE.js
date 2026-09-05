import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as m,R as C}from"./iframe-B6ts6m-X.js";import{t as w}from"./index-Ca4j9_td.js";import{P as d}from"./Primitive-CS3CjoDN.js";import{H as S,B as L,C as _,S as P}from"./Setting-qGyiCC8Z.js";import{B as u}from"./Box-C4f7rjhY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B7fs1FBk.js";import"./types-2sDnptjW.js";import"./colors-B5_xS8Kn.js";import"./mergeStyles-Dw1fI3XI.js";const g=w({slots:{root:"fixed bottom-[max(16px,env(safe-area-inset-bottom))] left-1/2 z-sticky flex w-[calc(100%-32px)] max-w-[360px] -translate-x-1/2 items-center justify-center gap-8 rounded-full bg-white px-4 py-1.5 shadow-[0_0_30px_0_rgba(51,53,61,0.16)]",item:"group flex h-11 w-10 flex-col items-center justify-center gap-1 transition-colors",icon:"w-5 h-5",label:"typo-caption-11-semibold text-center whitespace-nowrap"},variants:{selected:{true:{icon:"fill-gray-600",label:"text-gray-600"},false:{icon:"fill-gray-300 group-hover:fill-gray-500 group-active:fill-gray-500",label:"text-gray-400 group-hover:text-gray-500 group-active:text-gray-500"}}},defaultVariants:{selected:!1}}),h=m.createContext(null),R=()=>{const e=m.useContext(h);if(!e)throw new Error("BottomNavigation compound components must be used within BottomNavigation");return e},f=m.createContext(null),b=()=>{const e=m.useContext(f);if(!e)throw new Error("BottomNavigation Item compound components must be used within BottomNavigation.Item");return e},I=({children:e,selected:a,onSelectChange:n,className:s,...i})=>{const{root:r}=g();return t.jsx(h.Provider,{value:{selected:a,onSelectChange:n},children:t.jsx(d.nav,{className:r({className:s}),...i,children:e})})},E=({selected:e,value:a,className:n,children:s,onClick:i,...r})=>{const c=R(),v=e??(c.selected!==void 0&&a!==void 0?c.selected===a:!1),{item:j}=g({selected:v,...r}),y=x=>{i==null||i(x),!x.defaultPrevented&&c.onSelectChange&&a!==void 0&&c.onSelectChange(a)};return t.jsx(f.Provider,{value:{selected:v},children:t.jsx(d.button,{type:"button",className:j({className:n}),onClick:y,...r,children:s})})},q=({children:e,selected:a,className:n,...s})=>{const i=b(),r=a??i.selected,{icon:c}=g({selected:r,...s});return t.jsx(d.svg,{asChild:!0,className:c({className:n}),...s,children:e})},H=({children:e,selected:a,className:n,...s})=>{const i=b(),r=a??i.selected,{label:c}=g({selected:r,...s});return t.jsx(d.span,{className:c({className:n}),...s,children:e})},o=Object.assign(I,{Item:E,Icon:q,Label:H});I.__docgenInfo={description:"",methods:[],displayName:"BottomNavigationRoot",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Whether the element should be rendered as a child of a slot.
@default false`},selected:{required:!1,tsType:{name:"string"},description:""},onSelectChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}},composes:["ComponentProps"]};const M={title:"Components/BottomNavigation",component:o,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{children:void 0}},l={render:()=>{const[e,a]=C.useState("home");return t.jsxs(u,{className:"h-screen bg-gray-100",children:[t.jsxs(u,{className:"p-4 text-sm text-gray-500",children:["Active: ",e]}),t.jsxs(o,{selected:e,onSelectChange:n=>a(n),children:[t.jsxs(o.Item,{value:"home",children:[t.jsx(o.Icon,{children:t.jsx(S,{})}),t.jsx(o.Label,{children:"홈"})]}),t.jsxs(o.Item,{value:"news",children:[t.jsx(o.Icon,{children:t.jsx(L,{})}),t.jsx(o.Label,{children:"소식"})]}),t.jsxs(o.Item,{value:"directory",children:[t.jsx(o.Icon,{children:t.jsx(_,{})}),t.jsx(o.Label,{children:"동문수첩"})]}),t.jsxs(o.Item,{value:"profile",children:[t.jsx(o.Icon,{children:t.jsx(P,{})}),t.jsx(o.Label,{children:"내 정보"})]})]})]})}};var p,N,B;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState('home');
    return <Box className="h-screen bg-gray-100">
        <Box className="p-4 text-sm text-gray-500">Active: {selected}</Box>

        <BottomNavigation selected={selected} onSelectChange={val => setSelected(val)}>
          <BottomNavigation.Item value="home">
            <BottomNavigation.Icon>
              <Home />
            </BottomNavigation.Icon>
            <BottomNavigation.Label>홈</BottomNavigation.Label>
          </BottomNavigation.Item>

          <BottomNavigation.Item value="news">
            <BottomNavigation.Icon>
              <Board />
            </BottomNavigation.Icon>
            <BottomNavigation.Label>소식</BottomNavigation.Label>
          </BottomNavigation.Item>

          <BottomNavigation.Item value="directory">
            <BottomNavigation.Icon>
              <Contacts />
            </BottomNavigation.Icon>
            <BottomNavigation.Label>동문수첩</BottomNavigation.Label>
          </BottomNavigation.Item>

          <BottomNavigation.Item value="profile">
            <BottomNavigation.Icon>
              <Setting />
            </BottomNavigation.Icon>
            <BottomNavigation.Label>내 정보</BottomNavigation.Label>
          </BottomNavigation.Item>
        </BottomNavigation>
      </Box>;
  }
}`,...(B=(N=l.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const Q=["Default"];export{l as Default,Q as __namedExportsOrder,M as default};
