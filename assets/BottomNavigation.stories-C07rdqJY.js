import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as l,R as w}from"./iframe-Db3Uhgk5.js";import{t as S}from"./index-Ca4j9_td.js";import{P as d}from"./Primitive-BD6VY4fS.js";import{I as O,M as u,D as P}from"./types-B8TrPOAa.js";import{H as E,P as R,C as _}from"./Pen-ssHZ9WJD.js";import{B as h}from"./Box-Bo1bbD_m.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CFF4tP34.js";import"./colors-CD_udyfQ.js";import"./mergeStyles-Dw1fI3XI.js";const g=S({slots:{root:"fixed bg-white right-0 bottom-0 left-0 z-sticky flex h-15 items-center justify-between border-t border-gray-200 px-12 py-2 pb-safe",item:"group flex flex-1 flex-col items-center justify-center gap-1 text-xs transition-colors",icon:"w-5 h-5",label:"typo-caption-12-semibold text-center"},variants:{selected:{true:{icon:"fill-gray-700",label:"text-gray-600"},false:{icon:"fill-gray-300 group-hover:fill-gray-500 group-active:fill-gray-500",label:"text-gray-300 group-hover:text-gray-500 group-active:text-gray-500"}}},defaultVariants:{selected:!1}}),f=l.createContext(null),T=()=>{const e=l.useContext(f);if(!e)throw new Error("BottomNavigation compound components must be used within BottomNavigation");return e},C=l.createContext(null),b=()=>{const e=l.useContext(C);if(!e)throw new Error("BottomNavigation Item compound components must be used within BottomNavigation.Item");return e},I=({children:e,selected:a,onSelectChange:i,className:o,...s})=>{const{root:r}=g();return t.jsx(f.Provider,{value:{selected:a,onSelectChange:i},children:t.jsx(d.nav,{className:r({className:o}),...s,children:e})})},D=({selected:e,value:a,className:i,children:o,onClick:s,...r})=>{const c=T(),v=e??(c.selected!==void 0&&a!==void 0?c.selected===a:!1),{item:y}=g({selected:v,...r}),L=x=>{s==null||s(x),!x.defaultPrevented&&c.onSelectChange&&a!==void 0&&c.onSelectChange(a)};return t.jsx(C.Provider,{value:{selected:v},children:t.jsx(d.button,{type:"button",className:y({className:i}),onClick:L,...r,children:o})})},q=({children:e,selected:a,className:i,...o})=>{const s=b(),r=a??s.selected,{icon:c}=g({selected:r,...o});return t.jsx(d.svg,{asChild:!0,className:c({className:i}),...o,children:e})},A=({children:e,selected:a,className:i,...o})=>{const s=b(),r=a??s.selected,{label:c}=g({selected:r,...o});return t.jsx(d.span,{className:c({className:i}),...o,children:e})},n=Object.assign(I,{Item:D,Icon:q,Label:A});I.__docgenInfo={description:"",methods:[],displayName:"BottomNavigationRoot",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Whether the element should be rendered as a child of a slot.
@default false`},selected:{required:!1,tsType:{name:"string"},description:""},onSelectChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}},composes:["ComponentProps"]};const j=({size:e=P,active:a=!1,color:i,title:o,...s})=>{const r=i?O[i]:a?u.active:u.inactive;return t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:e,height:e,fill:r,color:r,"aria-hidden":o?void 0:!0,"aria-label":o,role:o?"img":void 0,...s,children:[o&&t.jsx("title",{children:o}),t.jsx("path",{d:"M20 10C20 4.47714 15.5229 0 10 0C4.47714 0 0 4.47714 0 10C0 15.5229 4.47714 20 10 20C11.6914 20 13.2871 19.5793 14.6857 18.8364L18.6343 19.9593C18.8178 20.0113 19.0119 20.0134 19.1965 19.9653C19.381 19.9173 19.5495 19.8208 19.6843 19.6859C19.8191 19.551 19.9155 19.3825 19.9635 19.1979C20.0114 19.0133 20.0093 18.8192 19.9571 18.6357L18.8343 14.6879C19.6017 13.2446 20.0021 11.6346 20 10Z"})]})};j.displayName="Comment";const Q={title:"Components/BottomNavigation",component:n,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{children:void 0}},m={render:()=>{const[e,a]=w.useState("home");return t.jsxs(h,{className:"h-screen bg-gray-100",children:[t.jsxs(h,{className:"p-4 text-sm text-gray-500",children:["Active: ",e]}),t.jsxs(n,{selected:e,onSelectChange:i=>a(i),children:[t.jsxs(n.Item,{value:"home",children:[t.jsx(n.Icon,{children:t.jsx(E,{})}),t.jsx(n.Label,{children:"홈"})]}),t.jsxs(n.Item,{value:"community",children:[t.jsx(n.Icon,{children:t.jsx(j,{})}),t.jsx(n.Label,{children:"커뮤니티"})]}),t.jsxs(n.Item,{value:"write",children:[t.jsx(n.Icon,{children:t.jsx(R,{})}),t.jsx(n.Label,{children:"글쓰기"})]}),t.jsxs(n.Item,{value:"directory",children:[t.jsx(n.Icon,{children:t.jsx(_,{})}),t.jsx(n.Label,{children:"동문수첩"})]})]})]})}};var N,p,B;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(B=(p=m.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};const X=["Default"];export{m as Default,X as __namedExportsOrder,Q as default};
