import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-BKdtO-JH.js";import{t as G}from"./index-Ca4j9_td.js";import{P as _}from"./Primitive-DIpuJ4GE.js";import{T as d}from"./Text-pQWZWV0f.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B5XjD_jX.js";const k=G({slots:{list:"flex items-center flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar [-webkit-overflow-scrolling:touch]",item:"cursor-pointer transition-colors select-none flex-shrink-0"},variants:{variant:{underline:{list:"border-b border-gray-200",item:["flex-1 min-w-fit px-3 py-3 text-center border-b-2 typo-subtitle-16-bold","hover:border-gray-500 hover:text-gray-500","aria-selected:border-gray-700 aria-selected:text-gray-700","aria-[selected=false]:border-transparent aria-[selected=false]:text-gray-300","aria-[selected=false]:hover:text-gray-400 aria-[selected=false]:active:text-gray-400"].join(" ")},chip:{list:"gap-2",item:["px-3 py-2 rounded-[0.5rem] typo-body-14-medium","aria-selected:bg-gray-700 aria-selected:text-white","aria-[selected=false]:bg-white aria-[selected=false]:text-gray-600","aria-[selected=false]:hover:bg-gray-200 aria-[selected=false]:active:bg-gray-200"].join(" ")}}},defaultVariants:{variant:"underline"}}),A=o.createContext(null),R=()=>{const t=o.useContext(A);if(!t)throw new Error("Tab.* must be used within Tab.Root");return t},y=({variant:t,scrollAlign:r="center",defaultValue:l="",value:n,onValueChange:s,id:c,className:T,children:b})=>{const[i,f]=o.useState(l),v=n!==void 0,j=(v?n:i)??"",C=S=>{v||f(S),s==null||s(S)},w=o.useId(),x=c??`tab-${w}`,m=o.useRef(null);return e.jsx(A.Provider,{value:{variant:t,value:j,setValue:C,baseId:x,listRef:m,scrollAlign:r},children:e.jsx("div",{className:T,children:b})})};y.displayName="Tab.Root";const W=({className:t,...r})=>{const{variant:l,listRef:n}=R(),{list:s}=k({variant:l});return e.jsx("div",{ref:n,role:"tablist",className:s({className:t}),...r})};W.displayName="Tab.List";const z=({value:t,asChild:r,className:l,onClick:n,...s})=>{const{variant:c,value:T,setValue:b,baseId:i,listRef:f,scrollAlign:v}=R(),j=T===t,{item:C}=k({variant:c}),w=x=>{b(t);const m=f.current;m&&m.scrollWidth>m.clientWidth+1&&x.currentTarget.scrollIntoView({behavior:"smooth",block:"nearest",inline:v??"center"}),n==null||n(x)};return e.jsx(_.button,{asChild:r,role:"tab","aria-selected":j,id:`${i}-TabItem-${t}`,"aria-controls":`${i}-content-${t}`,className:C({className:l}),onClick:w,...s})};z.displayName="Tab.Item";const D=({value:t,forceMount:r=!1,asChild:l,className:n,children:s,...c})=>{const{value:T,baseId:b}=R(),i=T===t;return!r&&!i?null:e.jsx(_.div,{asChild:l,role:"tabpanel",id:`${b}-content-${t}`,"aria-labelledby":`${b}-TabItem-${t}`,hidden:!i,className:n,...c,children:s})};D.displayName="Tab.Content";const a=Object.assign(y,{Root:y,List:W,TabItem:z,Content:D});y.__docgenInfo={description:"",methods:[],displayName:"Tab.Root",props:{scrollAlign:{required:!1,tsType:{name:"ScrollLogicalPosition"},description:"",defaultValue:{value:"'center'",computed:!1}},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["TabVariants"]};const ee={title:"Components/Tab",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
탭(Tab) 컴포넌트입니다.

- underline / chip variant 지원
- controlled / uncontrolled 패턴 지원
- 가로 스크롤 가능 + 선택된 항목으로 스크롤 자동 이동
        `}}},argTypes:{variant:{description:"탭 스타일 variant",control:"radio",options:["underline","chip"]},defaultValue:{description:"uncontrolled 상태의 초기 값",control:"text"},value:{description:"controlled 상태의 현재 값",control:"text"},onValueChange:{description:"탭 변경 시 호출",action:"valueChanged"}}},u=t=>e.jsx("div",{className:"flex h-35 items-center justify-center rounded-lg border border-gray-200 bg-white",children:t.children}),p={render:()=>e.jsx("div",{children:e.jsxs(a.Root,{variant:"underline",defaultValue:"3",children:[e.jsxs(a.List,{children:[e.jsx(a.TabItem,{value:"1",children:"라벨1"}),e.jsx(a.TabItem,{value:"2",children:"라벨2"}),e.jsx(a.TabItem,{value:"3",children:"라벨3"})]}),e.jsx(a.Content,{value:"1",children:e.jsx(u,{children:e.jsx(d,{typography:"body-16-regular",children:"Underline Content 1"})})}),e.jsx(a.Content,{value:"2",children:e.jsx(u,{children:e.jsx(d,{typography:"body-16-regular",children:"Underline Content 2"})})}),e.jsx(a.Content,{value:"3",children:e.jsx(u,{children:e.jsx(d,{typography:"body-16-regular",children:"Underline Content 3"})})})]})})},h={render:()=>{const t=[{value:"total",label:"전체"},{value:"wedding",label:"결혼"},{value:"funeral",label:"장례"}],[r,l]=o.useState("total");return e.jsx("div",{style:{width:360},className:"bg-gray-50 p-4",children:e.jsxs(a.Root,{variant:"chip",value:r,onValueChange:n=>l(n),children:[e.jsx(a.List,{children:t.map(n=>e.jsx(a.TabItem,{value:n.value,children:n.label},n.value))}),e.jsx(a.Content,{value:r,children:e.jsx(u,{children:e.jsx(d,{children:`선택된 필터: ${r}`})})})]})})}},I={render:()=>{const[t,r]=o.useState("all"),[l,n]=o.useState(t==="all"?"total":"done");return o.useEffect(()=>{n(t==="all"?"total":"done")},[t]),e.jsxs("div",{className:"flex w-full flex-col gap-5 p-8",children:[e.jsx(a.Root,{variant:"underline",value:t,onValueChange:s=>r(s),children:e.jsxs(a.List,{children:[e.jsx(a.TabItem,{value:"all",children:"전체 경조사"}),e.jsx(a.TabItem,{value:"my",children:"내 경조사"})]})}),e.jsxs(a.Root,{variant:"chip",value:l,onValueChange:n,children:[e.jsx(a.List,{children:t==="all"?e.jsxs(e.Fragment,{children:[e.jsx(a.TabItem,{value:"total",children:"전체"}),e.jsx(a.TabItem,{value:"wedding",children:"결혼"}),e.jsx(a.TabItem,{value:"funeral",children:"장례"})]}):e.jsxs(e.Fragment,{children:[e.jsx(a.TabItem,{value:"done",children:"등록 완료"}),e.jsx(a.TabItem,{value:"waiting",children:"등록 대기중"})]})}),e.jsx(a.Content,{value:l,children:e.jsx(u,{children:e.jsx(d,{typography:"body-16-regular",children:`선택: ${t} / ${l}`})})})]})]})}},g={render:()=>{const[t,r]=o.useState("all"),[l,n]=o.useState(t==="all"?"total":"done");return o.useEffect(()=>{n(t==="all"?"total":"done")},[t]),e.jsxs("div",{className:"flex w-full flex-col gap-6 bg-gray-50 p-4",children:[e.jsx(a.Root,{variant:"underline",value:t,onValueChange:s=>r(s),children:e.jsxs(a.List,{children:[e.jsx(a.TabItem,{value:"all",children:"전체 경조사"}),e.jsx(a.TabItem,{value:"my-1",children:"내 경조사"}),e.jsx(a.TabItem,{value:"all-1",children:"전체 경조사1"}),e.jsx(a.TabItem,{value:"my-2",children:"내 경조사1"}),e.jsx(a.TabItem,{value:"all-3",children:"전체 경조사2"}),e.jsx(a.TabItem,{value:"my-4",children:"내 경조사2"})]})}),e.jsxs(a.Root,{variant:"chip",value:l,onValueChange:n,children:[e.jsx(a.List,{children:t==="all"?e.jsxs(e.Fragment,{children:[e.jsx(a.TabItem,{value:"total",children:"전체"}),e.jsx(a.TabItem,{value:"wedding",children:"결혼"}),e.jsx(a.TabItem,{value:"funeral",children:"장례"}),e.jsx(a.TabItem,{value:"total-1",children:"전체1"}),e.jsx(a.TabItem,{value:"wedding-1",children:"결혼1"}),e.jsx(a.TabItem,{value:"funeral-1",children:"장례1"}),e.jsx(a.TabItem,{value:"total-2",children:"전체2"}),e.jsx(a.TabItem,{value:"wedding-2",children:"결혼2"}),e.jsx(a.TabItem,{value:"funeral-2",children:"장례2"})]}):e.jsxs(e.Fragment,{children:[e.jsx(a.TabItem,{value:"done",children:"등록 완료"}),e.jsx(a.TabItem,{value:"waiting",children:"등록 대기중"}),e.jsx(a.TabItem,{value:"total",children:"전체"}),e.jsx(a.TabItem,{value:"wedding",children:"결혼"}),e.jsx(a.TabItem,{value:"funeral",children:"장례"})]})}),e.jsx(a.Content,{value:l,children:e.jsx(u,{children:e.jsx(d,{typography:"body-16-regular",children:`선택: ${t} / ${l}`})})})]})]})}};var V,L,N;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div>
      <Tab.Root variant="underline" defaultValue="3">
        <Tab.List>
          <Tab.TabItem value="1">라벨1</Tab.TabItem>
          <Tab.TabItem value="2">라벨2</Tab.TabItem>
          <Tab.TabItem value="3">라벨3</Tab.TabItem>
        </Tab.List>

        <Tab.Content value="1">
          <ContentBox>
            <Text typography="body-16-regular">Underline Content 1</Text>
          </ContentBox>
        </Tab.Content>
        <Tab.Content value="2">
          <ContentBox>
            <Text typography="body-16-regular">Underline Content 2</Text>
          </ContentBox>
        </Tab.Content>
        <Tab.Content value="3">
          <ContentBox>
            <Text typography="body-16-regular">Underline Content 3</Text>
          </ContentBox>
        </Tab.Content>
      </Tab.Root>
    </div>
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var $,B,O;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const OPTIONS = [{
      value: 'total',
      label: '전체'
    }, {
      value: 'wedding',
      label: '결혼'
    }, {
      value: 'funeral',
      label: '장례'
    }] as const;
    type TabValue = (typeof OPTIONS)[number]['value'];
    const [value, setValue] = React.useState<TabValue>('total');
    return <div style={{
      width: 360
    }} className="bg-gray-50 p-4">
        <Tab.Root variant="chip" value={value} onValueChange={val => setValue(val as 'total' | 'wedding' | 'funeral')}>
          <Tab.List>
            {OPTIONS.map(opt => <Tab.TabItem key={opt.value} value={opt.value}>
                {opt.label}
              </Tab.TabItem>)}
          </Tab.List>

          <Tab.Content value={value}>
            <ContentBox>
              <Text>{\`선택된 필터: \${value}\`}</Text>
            </ContentBox>
          </Tab.Content>
        </Tab.Root>
      </div>;
  }
}`,...(O=(B=h.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var U,E,M;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [main, setMain] = React.useState<'all' | 'my'>('all');
    const [sub, setSub] = React.useState(main === 'all' ? 'total' : 'done');
    React.useEffect(() => {
      setSub(main === 'all' ? 'total' : 'done');
    }, [main]);
    return <div className="flex w-full flex-col gap-5 p-8">
        <Tab.Root variant="underline" value={main} onValueChange={value => setMain(value as 'all' | 'my')}>
          <Tab.List>
            <Tab.TabItem value="all">전체 경조사</Tab.TabItem>
            <Tab.TabItem value="my">내 경조사</Tab.TabItem>
          </Tab.List>
        </Tab.Root>

        <Tab.Root variant="chip" value={sub} onValueChange={setSub}>
          <Tab.List>
            {main === 'all' ? <>
                <Tab.TabItem value="total">전체</Tab.TabItem>
                <Tab.TabItem value="wedding">결혼</Tab.TabItem>
                <Tab.TabItem value="funeral">장례</Tab.TabItem>
              </> : <>
                <Tab.TabItem value="done">등록 완료</Tab.TabItem>
                <Tab.TabItem value="waiting">등록 대기중</Tab.TabItem>
              </>}
          </Tab.List>

          {/* Combined에서는 “선택값 표시용 단일 Content”가 제일 자연스러움 */}
          <Tab.Content value={sub}>
            <ContentBox>
              <Text typography="body-16-regular">{\`선택: \${main} / \${sub}\`}</Text>
            </ContentBox>
          </Tab.Content>
        </Tab.Root>
      </div>;
  }
}`,...(M=(E=I.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var q,P,F;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [main, setMain] = React.useState<'all' | 'my'>('all');
    const [sub, setSub] = React.useState(main === 'all' ? 'total' : 'done');
    React.useEffect(() => {
      setSub(main === 'all' ? 'total' : 'done');
    }, [main]);
    return <div className="flex w-full flex-col gap-6 bg-gray-50 p-4">
        <Tab.Root variant="underline" value={main} onValueChange={value => setMain(value as 'all' | 'my')}>
          <Tab.List>
            <Tab.TabItem value="all">전체 경조사</Tab.TabItem>
            <Tab.TabItem value="my-1">내 경조사</Tab.TabItem>
            <Tab.TabItem value="all-1">전체 경조사1</Tab.TabItem>
            <Tab.TabItem value="my-2">내 경조사1</Tab.TabItem>
            <Tab.TabItem value="all-3">전체 경조사2</Tab.TabItem>
            <Tab.TabItem value="my-4">내 경조사2</Tab.TabItem>
          </Tab.List>
        </Tab.Root>

        <Tab.Root variant="chip" value={sub} onValueChange={setSub}>
          <Tab.List>
            {main === 'all' ? <>
                <Tab.TabItem value="total">전체</Tab.TabItem>
                <Tab.TabItem value="wedding">결혼</Tab.TabItem>
                <Tab.TabItem value="funeral">장례</Tab.TabItem>
                <Tab.TabItem value="total-1">전체1</Tab.TabItem>
                <Tab.TabItem value="wedding-1">결혼1</Tab.TabItem>
                <Tab.TabItem value="funeral-1">장례1</Tab.TabItem>
                <Tab.TabItem value="total-2">전체2</Tab.TabItem>
                <Tab.TabItem value="wedding-2">결혼2</Tab.TabItem>
                <Tab.TabItem value="funeral-2">장례2</Tab.TabItem>
              </> : <>
                <Tab.TabItem value="done">등록 완료</Tab.TabItem>
                <Tab.TabItem value="waiting">등록 대기중</Tab.TabItem>
                <Tab.TabItem value="total">전체</Tab.TabItem>
                <Tab.TabItem value="wedding">결혼</Tab.TabItem>
                <Tab.TabItem value="funeral">장례</Tab.TabItem>
              </>}
          </Tab.List>

          <Tab.Content value={sub}>
            <ContentBox>
              <Text typography="body-16-regular">{\`선택: \${main} / \${sub}\`}</Text>
            </ContentBox>
          </Tab.Content>
        </Tab.Root>
      </div>;
  }
}`,...(F=(P=g.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};const ae=["Underline","Chip","CombinedTabs","Multiple"];export{h as Chip,I as CombinedTabs,g as Multiple,p as Underline,ae as __namedExportsOrder,ee as default};
