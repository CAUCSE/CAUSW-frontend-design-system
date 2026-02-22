import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-wPdtzJUx.js";import{T as a}from"./Tab-D7oyU9jQ.js";import{T as b}from"./Text-hmTctTyy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ca4j9_td.js";import"./Primitive-BC933kmg.js";import"./index-QxABgTxX.js";const M={title:"Components/Tab",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
탭(Tab) 컴포넌트입니다.

- underline / chip variant 지원
- controlled / uncontrolled 패턴 지원
- 가로 스크롤 가능 + 선택된 항목으로 스크롤 자동 이동
        `}}},argTypes:{variant:{description:"탭 스타일 variant",control:"radio",options:["underline","chip"]},defaultValue:{description:"uncontrolled 상태의 초기 값",control:"text"},value:{description:"controlled 상태의 현재 값",control:"text"},onValueChange:{description:"탭 변경 시 호출",action:"valueChanged"}}},s=t=>e.jsx("div",{className:"flex h-35 items-center justify-center rounded-lg border border-gray-200 bg-white",children:t.children}),i={render:()=>e.jsx("div",{children:e.jsxs(a.Root,{variant:"underline",defaultValue:"3",children:[e.jsxs(a.List,{children:[e.jsx(a.TabItem,{value:"1",children:"라벨1"}),e.jsx(a.TabItem,{value:"2",children:"라벨2"}),e.jsx(a.TabItem,{value:"3",children:"라벨3"})]}),e.jsx(a.Content,{value:"1",children:e.jsx(s,{children:e.jsx(b,{typography:"body-16-regular",children:"Underline Content 1"})})}),e.jsx(a.Content,{value:"2",children:e.jsx(s,{children:e.jsx(b,{typography:"body-16-regular",children:"Underline Content 2"})})}),e.jsx(a.Content,{value:"3",children:e.jsx(s,{children:e.jsx(b,{typography:"body-16-regular",children:"Underline Content 3"})})})]})})},u={render:()=>{const t=[{value:"total",label:"전체"},{value:"wedding",label:"결혼"},{value:"funeral",label:"장례"}],[r,n]=o.useState("total");return e.jsx("div",{style:{width:360},className:"bg-gray-50 p-4",children:e.jsxs(a.Root,{variant:"chip",value:r,onValueChange:l=>n(l),children:[e.jsx(a.List,{children:t.map(l=>e.jsx(a.TabItem,{value:l.value,children:l.label},l.value))}),e.jsx(a.Content,{value:r,children:e.jsx(s,{children:e.jsx(b,{children:`선택된 필터: ${r}`})})})]})})}},T={render:()=>{const[t,r]=o.useState("all"),[n,l]=o.useState(t==="all"?"total":"done");return o.useEffect(()=>{l(t==="all"?"total":"done")},[t]),e.jsxs("div",{className:"flex w-full flex-col gap-5 p-8",children:[e.jsx(a.Root,{variant:"underline",value:t,onValueChange:m=>r(m),children:e.jsxs(a.List,{children:[e.jsx(a.TabItem,{value:"all",children:"전체 경조사"}),e.jsx(a.TabItem,{value:"my",children:"내 경조사"})]})}),e.jsxs(a.Root,{variant:"chip",value:n,onValueChange:l,children:[e.jsx(a.List,{children:t==="all"?e.jsxs(e.Fragment,{children:[e.jsx(a.TabItem,{value:"total",children:"전체"}),e.jsx(a.TabItem,{value:"wedding",children:"결혼"}),e.jsx(a.TabItem,{value:"funeral",children:"장례"})]}):e.jsxs(e.Fragment,{children:[e.jsx(a.TabItem,{value:"done",children:"등록 완료"}),e.jsx(a.TabItem,{value:"waiting",children:"등록 대기중"})]})}),e.jsx(a.Content,{value:n,children:e.jsx(s,{children:e.jsx(b,{typography:"body-16-regular",children:`선택: ${t} / ${n}`})})})]})]})}},d={render:()=>{const[t,r]=o.useState("all"),[n,l]=o.useState(t==="all"?"total":"done");return o.useEffect(()=>{l(t==="all"?"total":"done")},[t]),e.jsxs("div",{className:"flex w-full flex-col gap-6 bg-gray-50 p-4",children:[e.jsx(a.Root,{variant:"underline",value:t,onValueChange:m=>r(m),children:e.jsxs(a.List,{children:[e.jsx(a.TabItem,{value:"all",children:"전체 경조사"}),e.jsx(a.TabItem,{value:"my-1",children:"내 경조사"}),e.jsx(a.TabItem,{value:"all-1",children:"전체 경조사1"}),e.jsx(a.TabItem,{value:"my-2",children:"내 경조사1"}),e.jsx(a.TabItem,{value:"all-3",children:"전체 경조사2"}),e.jsx(a.TabItem,{value:"my-4",children:"내 경조사2"})]})}),e.jsxs(a.Root,{variant:"chip",value:n,onValueChange:l,children:[e.jsx(a.List,{children:t==="all"?e.jsxs(e.Fragment,{children:[e.jsx(a.TabItem,{value:"total",children:"전체"}),e.jsx(a.TabItem,{value:"wedding",children:"결혼"}),e.jsx(a.TabItem,{value:"funeral",children:"장례"}),e.jsx(a.TabItem,{value:"total-1",children:"전체1"}),e.jsx(a.TabItem,{value:"wedding-1",children:"결혼1"}),e.jsx(a.TabItem,{value:"funeral-1",children:"장례1"}),e.jsx(a.TabItem,{value:"total-2",children:"전체2"}),e.jsx(a.TabItem,{value:"wedding-2",children:"결혼2"}),e.jsx(a.TabItem,{value:"funeral-2",children:"장례2"})]}):e.jsxs(e.Fragment,{children:[e.jsx(a.TabItem,{value:"done",children:"등록 완료"}),e.jsx(a.TabItem,{value:"waiting",children:"등록 대기중"}),e.jsx(a.TabItem,{value:"total",children:"전체"}),e.jsx(a.TabItem,{value:"wedding",children:"결혼"}),e.jsx(a.TabItem,{value:"funeral",children:"장례"})]})}),e.jsx(a.Content,{value:n,children:e.jsx(s,{children:e.jsx(b,{typography:"body-16-regular",children:`선택: ${t} / ${n}`})})})]})]})}};var c,v,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,I,p;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(p=(I=u.parameters)==null?void 0:I.docs)==null?void 0:p.source}}};var g,j,C;T.parameters={...T.parameters,docs:{...(g=T.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(j=T.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var y,f,R;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(R=(f=d.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};const U=["Underline","Chip","CombinedTabs","Multiple"];export{u as Chip,T as CombinedTabs,d as Multiple,i as Underline,U as __namedExportsOrder,M as default};
