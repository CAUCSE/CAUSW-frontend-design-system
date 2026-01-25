import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-DT-_7YRs.js";import{t as F}from"./index-CKBcBfht.js";import{P as _}from"./Primitive-COH1LJud.js";import{m as G}from"./mergeStyles-B83jKakq.js";import{T as u}from"./Text-DeZ-7JPx.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-CJvxXMcu.js";import"./index-AVE-RrXy.js";const H=F({base:"flex items-center flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar [-webkit-overflow-scrolling:touch]",variants:{variant:{underline:"border-b border-gray-200",chip:"gap-2"}},defaultVariants:{variant:"underline"}}),J=F({base:"cursor-pointer transition-colors select-none flex-shrink-0",variants:{variant:{underline:"flex-1 min-w-fit px-3 py-3 text-center border-b-2 typo-subtitle-16-bold",chip:"px-3 py-2 rounded-[0.5rem] typo-body-14-medium"},active:{true:"",false:""}},compoundVariants:[{variant:"underline",active:!0,class:"border-gray-700 text-gray-700"},{variant:"underline",active:!1,class:"border-transparent text-gray-300"},{variant:"chip",active:!0,class:"bg-gray-700 text-white"},{variant:"chip",active:!1,class:"bg-white text-gray-600"}],defaultVariants:{variant:"underline",active:!1}}),k=s.createContext(null),w=()=>{const t=s.useContext(k);if(!t)throw new Error("Tab.* must be used within Tab.Root");return t},y=({variant:t,scrollAlign:r="center",defaultValue:l="",value:n,onValueChange:o,id:c,className:T,children:b})=>{const[i,j]=s.useState(l),v=n!==void 0,x=(v?n:i)??"",C=R=>{v||j(R),o==null||o(R)},p=s.useId(),m=c??`tab-${p}`,D=s.useRef(null);return e.jsx(k.Provider,{value:{variant:t,value:x,setValue:C,baseId:m,listRef:D,scrollAlign:r},children:e.jsx("div",{className:T,children:b})})};y.displayName="Tab.Root";const A=({className:t,...r})=>{const{variant:l,listRef:n}=w();return e.jsx("div",{ref:n,role:"tablist",className:H({variant:l,className:t}),...r})};A.displayName="Tab.List";const W=({value:t,asChild:r,className:l,onClick:n,...o})=>{const{variant:c,value:T,setValue:b,baseId:i,listRef:j,scrollAlign:v}=w(),x=T===t,C=p=>{b(t);const m=j.current;m&&m.scrollWidth>m.clientWidth+1&&p.currentTarget.scrollIntoView({behavior:"smooth",block:"nearest",inline:v??"center"}),n==null||n(p)};return e.jsx(_.button,{asChild:r,role:"tab","aria-selected":x,id:`${i}-TabItem-${t}`,"aria-controls":`${i}-content-${t}`,className:J({variant:c,active:x,className:G(l)}),onClick:C,...o})};W.displayName="Tab.Item";const z=({value:t,forceMount:r=!1,asChild:l,className:n,children:o,...c})=>{const{value:T,baseId:b}=w(),i=T===t;return!r&&!i?null:e.jsx(_.div,{asChild:l,role:"tabpanel",id:`${b}-content-${t}`,"aria-labelledby":`${b}-TabItem-${t}`,hidden:!i,className:n,...c,children:o})};z.displayName="Tab.Content";const a=Object.assign(y,{Root:y,List:A,TabItem:W,Content:z});y.__docgenInfo={description:"",methods:[],displayName:"Tab.Root",props:{scrollAlign:{required:!1,tsType:{name:"ScrollLogicalPosition"},description:"",defaultValue:{value:"'center'",computed:!1}},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["TabListVariants"]};const le={title:"Components/Tab",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
탭(Tab) 컴포넌트입니다.

- underline / chip variant 지원
- controlled / uncontrolled 패턴 지원
- 가로 스크롤 가능 + 선택된 항목으로 스크롤 자동 이동
        `}}},argTypes:{variant:{description:"탭 스타일 variant",control:"radio",options:["underline","chip"]},defaultValue:{description:"uncontrolled 상태의 초기 값",control:"text"},value:{description:"controlled 상태의 현재 값",control:"text"},onValueChange:{description:"탭 변경 시 호출",action:"valueChanged"}}},d=t=>e.jsx("div",{className:"flex h-35 items-center justify-center rounded-lg border border-gray-200 bg-white",children:t.children}),h={render:()=>e.jsx("div",{children:e.jsxs(a.Root,{variant:"underline",defaultValue:"3",children:[e.jsxs(a.List,{children:[e.jsx(a.TabItem,{value:"1",children:"라벨1"}),e.jsx(a.TabItem,{value:"2",children:"라벨2"}),e.jsx(a.TabItem,{value:"3",children:"라벨3"})]}),e.jsx(a.Content,{value:"1",children:e.jsx(d,{children:e.jsx(u,{typography:"body-16-regular",children:"Underline Content 1"})})}),e.jsx(a.Content,{value:"2",children:e.jsx(d,{children:e.jsx(u,{typography:"body-16-regular",children:"Underline Content 2"})})}),e.jsx(a.Content,{value:"3",children:e.jsx(d,{children:e.jsx(u,{typography:"body-16-regular",children:"Underline Content 3"})})})]})})},I={render:()=>{const t=[{value:"total",label:"전체"},{value:"wedding",label:"결혼"},{value:"funeral",label:"장례"}],[r,l]=s.useState("total");return e.jsx("div",{style:{width:360},className:"bg-gray-50 p-4",children:e.jsxs(a.Root,{variant:"chip",value:r,onValueChange:n=>l(n),children:[e.jsx(a.List,{children:t.map(n=>e.jsx(a.TabItem,{value:n.value,children:n.label},n.value))}),e.jsx(a.Content,{value:r,children:e.jsx(d,{children:e.jsx(u,{children:`선택된 필터: ${r}`})})})]})})}},g={render:()=>{const[t,r]=s.useState("all"),[l,n]=s.useState(t==="all"?"total":"done");return s.useEffect(()=>{n(t==="all"?"total":"done")},[t]),e.jsxs("div",{className:"flex w-full flex-col gap-5 p-8",children:[e.jsx(a.Root,{variant:"underline",value:t,onValueChange:o=>r(o),children:e.jsxs(a.List,{children:[e.jsx(a.TabItem,{value:"all",children:"전체 경조사"}),e.jsx(a.TabItem,{value:"my",children:"내 경조사"})]})}),e.jsxs(a.Root,{variant:"chip",value:l,onValueChange:n,children:[e.jsx(a.List,{children:t==="all"?e.jsxs(e.Fragment,{children:[e.jsx(a.TabItem,{value:"total",children:"전체"}),e.jsx(a.TabItem,{value:"wedding",children:"결혼"}),e.jsx(a.TabItem,{value:"funeral",children:"장례"})]}):e.jsxs(e.Fragment,{children:[e.jsx(a.TabItem,{value:"done",children:"등록 완료"}),e.jsx(a.TabItem,{value:"waiting",children:"등록 대기중"})]})}),e.jsx(a.Content,{value:l,children:e.jsx(d,{children:e.jsx(u,{typography:"body-16-regular",children:`선택: ${t} / ${l}`})})})]})]})}},f={render:()=>{const[t,r]=s.useState("all"),[l,n]=s.useState(t==="all"?"total":"done");return s.useEffect(()=>{n(t==="all"?"total":"done")},[t]),e.jsxs("div",{className:"flex w-full flex-col gap-6 bg-gray-50 p-4",children:[e.jsx(a.Root,{variant:"underline",value:t,onValueChange:o=>r(o),children:e.jsxs(a.List,{children:[e.jsx(a.TabItem,{value:"all",children:"전체 경조사"}),e.jsx(a.TabItem,{value:"my-1",children:"내 경조사"}),e.jsx(a.TabItem,{value:"all-1",children:"전체 경조사1"}),e.jsx(a.TabItem,{value:"my-2",children:"내 경조사1"}),e.jsx(a.TabItem,{value:"all-3",children:"전체 경조사2"}),e.jsx(a.TabItem,{value:"my-4",children:"내 경조사2"})]})}),e.jsxs(a.Root,{variant:"chip",value:l,onValueChange:n,children:[e.jsx(a.List,{children:t==="all"?e.jsxs(e.Fragment,{children:[e.jsx(a.TabItem,{value:"total",children:"전체"}),e.jsx(a.TabItem,{value:"wedding",children:"결혼"}),e.jsx(a.TabItem,{value:"funeral",children:"장례"}),e.jsx(a.TabItem,{value:"total-1",children:"전체1"}),e.jsx(a.TabItem,{value:"wedding-1",children:"결혼1"}),e.jsx(a.TabItem,{value:"funeral-1",children:"장례1"}),e.jsx(a.TabItem,{value:"total-2",children:"전체2"}),e.jsx(a.TabItem,{value:"wedding-2",children:"결혼2"}),e.jsx(a.TabItem,{value:"funeral-2",children:"장례2"})]}):e.jsxs(e.Fragment,{children:[e.jsx(a.TabItem,{value:"done",children:"등록 완료"}),e.jsx(a.TabItem,{value:"waiting",children:"등록 대기중"}),e.jsx(a.TabItem,{value:"total",children:"전체"}),e.jsx(a.TabItem,{value:"wedding",children:"결혼"}),e.jsx(a.TabItem,{value:"funeral",children:"장례"})]})}),e.jsx(a.Content,{value:l,children:e.jsx(d,{children:e.jsx(u,{typography:"body-16-regular",children:`선택: ${t} / ${l}`})})})]})]})}};var S,V,L;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(V=h.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var N,$,B;I.parameters={...I.parameters,docs:{...(N=I.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(B=($=I.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var O,U,E;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(E=(U=g.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var M,q,P;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(P=(q=f.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};const re=["Underline","Chip","CombinedTabs","Multiple"];export{I as Chip,g as CombinedTabs,f as Multiple,h as Underline,re as __namedExportsOrder,le as default};
