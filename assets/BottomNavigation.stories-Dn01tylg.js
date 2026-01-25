import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as m,R as y}from"./iframe-DT-_7YRs.js";import{t as C}from"./index-CKBcBfht.js";import{P as l}from"./Primitive-COH1LJud.js";import{B as u}from"./Box-DCB7dldp.js";import{H as L,C as S,P as w,a as P}from"./chunk-4PGAIDWE-Cvnv7Ykn.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-CJvxXMcu.js";import"./index-AVE-RrXy.js";import"./mergeStyles-B83jKakq.js";import"./chunk-EVKQEOYT-B7U-Du-_.js";const d=C({slots:{root:"fixed right-0 bottom-0 left-0 z-sticky flex h-15 items-center justify-between border-t border-gray-200 px-12 py-2 pb-safe",item:"group flex flex-1 flex-col items-center justify-center gap-1 text-xs transition-colors",icon:"w-5 h-5",label:"typo-caption-12-semibold text-center"},variants:{selected:{true:{icon:"fill-gray-700",label:"text-gray-600"},false:{icon:"fill-gray-300 group-hover:fill-gray-500 group-active:fill-gray-500",label:"text-gray-300 group-hover:text-gray-500 group-active:text-gray-500"}}},defaultVariants:{selected:!1}}),h=m.createContext(null),R=()=>{const e=m.useContext(h);if(!e)throw new Error("BottomNavigation compound components must be used within BottomNavigation");return e},B=m.createContext(null),f=()=>{const e=m.useContext(B);if(!e)throw new Error("BottomNavigation Item compound components must be used within BottomNavigation.Item");return e},b=({children:e,selected:a,onSelectChange:n,...i})=>{const{root:s}=d();return t.jsx(h.Provider,{value:{selected:a,onSelectChange:n},children:t.jsx(l.nav,{className:s(),...i,children:e})})},E=({selected:e,value:a,children:n,onClick:i,...s})=>{const r=R(),g=e??(r.selected!==void 0&&a!==void 0?r.selected===a:!1),{item:I}=d({selected:g,...s}),j=v=>{i==null||i(v),!v.defaultPrevented&&r.onSelectChange&&a!==void 0&&r.onSelectChange(a)};return t.jsx(B.Provider,{value:{selected:g},children:t.jsx(l.button,{type:"button",className:I(),onClick:j,...s,children:n})})},_=({children:e,selected:a,...n})=>{const i=f(),s=a??i.selected,{icon:r}=d({selected:s,...n});return t.jsx(l.svg,{asChild:!0,className:r(),...n,children:e})},q=({children:e,selected:a,...n})=>{const i=f(),s=a??i.selected,{label:r}=d({selected:s,...n});return t.jsx(l.span,{className:r(),...n,children:e})},o=Object.assign(b,{Item:E,Icon:_,Label:q});b.__docgenInfo={description:"",methods:[],displayName:"BottomNavigationRoot",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Whether the element should be rendered as a child of a slot.
@default false`},selected:{required:!1,tsType:{name:"string"},description:""},onSelectChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}},composes:["ComponentProps"]};const K={title:"Components/BottomNavigation",component:o,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{children:void 0}},c={render:()=>{const[e,a]=y.useState("home");return t.jsxs(u,{className:"h-screen bg-gray-100",children:[t.jsxs(u,{className:"p-4 text-sm text-gray-500",children:["Active: ",e]}),t.jsxs(o,{selected:e,onSelectChange:n=>a(n),children:[t.jsxs(o.Item,{value:"home",children:[t.jsx(o.Icon,{children:t.jsx(L,{})}),t.jsx(o.Label,{children:"홈"})]}),t.jsxs(o.Item,{value:"community",children:[t.jsx(o.Icon,{children:t.jsx(S,{})}),t.jsx(o.Label,{children:"커뮤니티"})]}),t.jsxs(o.Item,{value:"write",children:[t.jsx(o.Icon,{children:t.jsx(w,{})}),t.jsx(o.Label,{children:"글쓰기"})]}),t.jsxs(o.Item,{value:"directory",children:[t.jsx(o.Icon,{children:t.jsx(P,{})}),t.jsx(o.Label,{children:"동문수첩"})]})]})]})}};var x,N,p;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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

          <BottomNavigation.Item value="community">
            <BottomNavigation.Icon>
              <Comment />
            </BottomNavigation.Icon>
            <BottomNavigation.Label>커뮤니티</BottomNavigation.Label>
          </BottomNavigation.Item>

          <BottomNavigation.Item value="write">
            <BottomNavigation.Icon>
              <Pen />
            </BottomNavigation.Icon>
            <BottomNavigation.Label>글쓰기</BottomNavigation.Label>
          </BottomNavigation.Item>

          <BottomNavigation.Item value="directory">
            <BottomNavigation.Icon>
              <Contacts />
            </BottomNavigation.Icon>
            <BottomNavigation.Label>동문수첩</BottomNavigation.Label>
          </BottomNavigation.Item>
        </BottomNavigation>
      </Box>;
  }
}`,...(p=(N=c.parameters)==null?void 0:N.docs)==null?void 0:p.source}}};const M=["Default"];export{c as Default,M as __namedExportsOrder,K as default};
