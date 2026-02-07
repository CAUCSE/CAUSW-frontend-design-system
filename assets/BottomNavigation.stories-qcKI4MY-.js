import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as m,R as L}from"./iframe-C0TQl0yr.js";import{t as w}from"./index-Ca4j9_td.js";import{P as l}from"./Primitive-CrlZCiAx.js";import{I as S,M as x,D as O}from"./types-B8TrPOAa.js";import{H as P,P as E,C as R}from"./Pen-ssHZ9WJD.js";import{B as u}from"./Box-DTuMlpsU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DKRmAHQB.js";import"./colors-CD_udyfQ.js";import"./mergeStyles-Dw1fI3XI.js";const d=w({slots:{root:"fixed right-0 bottom-0 left-0 z-sticky flex h-15 items-center justify-between border-t border-gray-200 px-12 py-2 pb-safe",item:"group flex flex-1 flex-col items-center justify-center gap-1 text-xs transition-colors",icon:"w-5 h-5",label:"typo-caption-12-semibold text-center"},variants:{selected:{true:{icon:"fill-gray-700",label:"text-gray-600"},false:{icon:"fill-gray-300 group-hover:fill-gray-500 group-active:fill-gray-500",label:"text-gray-300 group-hover:text-gray-500 group-active:text-gray-500"}}},defaultVariants:{selected:!1}}),B=m.createContext(null),_=()=>{const e=m.useContext(B);if(!e)throw new Error("BottomNavigation compound components must be used within BottomNavigation");return e},f=m.createContext(null),C=()=>{const e=m.useContext(f);if(!e)throw new Error("BottomNavigation Item compound components must be used within BottomNavigation.Item");return e},I=({children:e,selected:a,onSelectChange:n,...o})=>{const{root:r}=d();return t.jsx(B.Provider,{value:{selected:a,onSelectChange:n},children:t.jsx(l.nav,{className:r(),...o,children:e})})},T=({selected:e,value:a,children:n,onClick:o,...r})=>{const s=_(),g=e??(s.selected!==void 0&&a!==void 0?s.selected===a:!1),{item:j}=d({selected:g,...r}),y=v=>{o==null||o(v),!v.defaultPrevented&&s.onSelectChange&&a!==void 0&&s.onSelectChange(a)};return t.jsx(f.Provider,{value:{selected:g},children:t.jsx(l.button,{type:"button",className:j(),onClick:y,...r,children:n})})},D=({children:e,selected:a,...n})=>{const o=C(),r=a??o.selected,{icon:s}=d({selected:r,...n});return t.jsx(l.svg,{asChild:!0,className:s(),...n,children:e})},q=({children:e,selected:a,...n})=>{const o=C(),r=a??o.selected,{label:s}=d({selected:r,...n});return t.jsx(l.span,{className:s(),...n,children:e})},i=Object.assign(I,{Item:T,Icon:D,Label:q});I.__docgenInfo={description:"",methods:[],displayName:"BottomNavigationRoot",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Whether the element should be rendered as a child of a slot.
@default false`},selected:{required:!1,tsType:{name:"string"},description:""},onSelectChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}},composes:["ComponentProps"]};const b=({size:e=O,active:a=!1,color:n,title:o,...r})=>{const s=n?S[n]:a?x.active:x.inactive;return t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:e,height:e,fill:s,color:s,"aria-hidden":o?void 0:!0,"aria-label":o,role:o?"img":void 0,...r,children:[o&&t.jsx("title",{children:o}),t.jsx("path",{d:"M20 10C20 4.47714 15.5229 0 10 0C4.47714 0 0 4.47714 0 10C0 15.5229 4.47714 20 10 20C11.6914 20 13.2871 19.5793 14.6857 18.8364L18.6343 19.9593C18.8178 20.0113 19.0119 20.0134 19.1965 19.9653C19.381 19.9173 19.5495 19.8208 19.6843 19.6859C19.8191 19.551 19.9155 19.3825 19.9635 19.1979C20.0114 19.0133 20.0093 18.8192 19.9571 18.6357L18.8343 14.6879C19.6017 13.2446 20.0021 11.6346 20 10Z"})]})};b.displayName="Comment";const J={title:"Components/BottomNavigation",component:i,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{children:void 0}},c={render:()=>{const[e,a]=L.useState("home");return t.jsxs(u,{className:"h-screen bg-gray-100",children:[t.jsxs(u,{className:"p-4 text-sm text-gray-500",children:["Active: ",e]}),t.jsxs(i,{selected:e,onSelectChange:n=>a(n),children:[t.jsxs(i.Item,{value:"home",children:[t.jsx(i.Icon,{children:t.jsx(P,{})}),t.jsx(i.Label,{children:"홈"})]}),t.jsxs(i.Item,{value:"community",children:[t.jsx(i.Icon,{children:t.jsx(b,{})}),t.jsx(i.Label,{children:"커뮤니티"})]}),t.jsxs(i.Item,{value:"write",children:[t.jsx(i.Icon,{children:t.jsx(E,{})}),t.jsx(i.Label,{children:"글쓰기"})]}),t.jsxs(i.Item,{value:"directory",children:[t.jsx(i.Icon,{children:t.jsx(R,{})}),t.jsx(i.Label,{children:"동문수첩"})]})]})]})}};var h,N,p;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(p=(N=c.parameters)==null?void 0:N.docs)==null?void 0:p.source}}};const Q=["Default"];export{c as Default,Q as __namedExportsOrder,J as default};
