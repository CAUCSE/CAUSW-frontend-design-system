import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-DQJ8ltRl.js";import{D as e}from"./Dropdown-DyiEGbbq.js";import{I as N,M as g,D as B}from"./types-2sDnptjW.js";import{C as c}from"./CTAButton-BI1d34Dv.js";import{B as O}from"./Box-DRyC5CyM.js";import{C as L}from"./Chip-hxttWog3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ccsde0TA.js";import"./index-2CE01wa_.js";import"./index-DKybYqT1.js";import"./index-XXj8IUnG.js";import"./index-_xxT30LM.js";import"./index-NnIRRJ0J.js";import"./index-DJc5mFQR.js";import"./index-BKrO3t7Y.js";import"./index-Ca4j9_td.js";import"./colors-B5_xS8Kn.js";import"./Primitive-BNiO0Z7w.js";import"./mergeStyles-Dw1fI3XI.js";const S=({size:p=B,active:t=!1,color:n,title:r,...v})=>{const l=n?N[n]:t?g.active:g.inactive;return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:p,height:p,fill:l,color:l,"aria-hidden":r?void 0:!0,"aria-label":r,role:r?"img":void 0,...v,children:[r&&o.jsx("title",{children:r}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5835 10C4.5835 9.30965 4.02385 8.75 3.3335 8.75C2.64314 8.75 2.0835 9.30965 2.0835 10C2.0835 10.6904 2.64314 11.25 3.3335 11.25C4.02385 11.25 4.5835 10.6904 4.5835 10ZM17.9168 10C17.9168 9.30965 17.3572 8.75 16.6668 8.75C15.9765 8.75 15.4168 9.30965 15.4168 10C15.4168 10.6904 15.9765 11.25 16.6668 11.25C17.3572 11.25 17.9168 10.6904 17.9168 10ZM11.2502 10C11.2502 9.30965 10.6905 8.75 10.0002 8.75C9.30982 8.75 8.75018 9.30965 8.75018 10C8.75018 10.6904 9.30982 11.25 10.0002 11.25C10.6905 11.25 11.2502 10.6904 11.2502 10Z"})]})};S.displayName="Menu";const Y={title:"Components/Dropdown",component:e,parameters:{layout:"centered",docs:{description:{component:"`Dropdown`은 메뉴, 필터, 또는 작업을 선택할 수 있는 오버레이 컴포넌트입니다.\n\n`Dropdown.Trigger`, `Dropdown.Content`, `Dropdown.Item`으로 구성되며, **React 19** 표준을 준수하여 `ref`를 prop으로 직접 전달받습니다.\n\n`Dropdown.Content` 내부에는 `divide-y` 스타일이 자동 적용되어 아이템 간 구분선이 자동으로 생성됩니다."}}},tags:["autodocs"],argTypes:{open:{control:{type:"boolean"},description:"The controlled open state of the dropdown menu.",table:{type:{summary:"boolean"},category:"State"}},defaultOpen:{control:{type:"boolean"},description:"The open state of the dropdown menu when it is initially rendered.",table:{type:{summary:"boolean"},category:"State"}},modal:{control:{type:"boolean"},description:"The modality of the dropdown menu.",defaultValue:!0,table:{type:{summary:"boolean"},category:"Behavior"}}}},s={parameters:{docs:{description:{story:'기본적인 `Dropdown` 사용 예시입니다. `Trigger`를 클릭하면 메뉴가 열리며, `Dropdown.Item`을 사용하여 메뉴 항목을 구성할 수 있습니다.\n\n`color="red"` prop을 사용하여 위험한 작업(삭제 등)을 시각적으로 구분할 수 있습니다.'}}},render:()=>o.jsxs(e,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx(c,{color:"light",children:"Options"})}),o.jsxs(e.Content,{align:"end",children:[o.jsx(e.Item,{children:"Edit Profile"}),o.jsx(e.Item,{children:"Settings"}),o.jsx(e.Item,{color:"red",children:"Delete Account"})]})]})},d={parameters:{docs:{description:{story:"`Dropdown.Content`의 `side`와 `align` prop을 사용하여 메뉴가 열리는 위치와 정렬을 제어할 수 있습니다.\n- `side`: `top`, `right`, `bottom`, `left` (기본값: `bottom`)\n- `align`: `start`, `center`, `end` (기본값: `center`)"}}},render:()=>o.jsxs(O,{className:"flex gap-4",children:[o.jsxs(e,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx(c,{color:"light",children:"Left Start"})}),o.jsxs(e.Content,{align:"start",side:"left",children:[o.jsx(e.Item,{children:"Item 1"}),o.jsx(e.Item,{children:"Item 2"})]})]}),o.jsxs(e,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx(c,{color:"light",children:"Bottom End"})}),o.jsxs(e.Content,{align:"end",side:"bottom",children:[o.jsx(e.Item,{children:"Item 1"}),o.jsx(e.Item,{children:"Item 2"})]})]})]})},a={parameters:{docs:{description:{story:"게시판 등에서 자주 사용되는 메뉴(`...`) 스타일 예시입니다. `className`을 사용하여 아이템의 스타일을 커스텀(가운데 정렬, 폰트 굵기 등)할 수 있습니다."}}},render:()=>o.jsxs(e,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx("div",{className:"rounded-md bg-gray-100 p-2 hover:bg-gray-200",children:o.jsx(S,{})})}),o.jsxs(e.Content,{align:"end",children:[o.jsx(e.Item,{className:"justify-center px-10 py-2.5 text-base font-bold",children:"수정하기"}),o.jsx(e.Item,{color:"red",className:"justify-center px-10 py-2.5 text-base font-bold",children:"삭제하기"})]})]})},i={parameters:{docs:{description:{story:"정렬 필터 등에 활용되는 예시입니다. 상태(`useState`)를 사용하여 선택된 항목을 하이라이트(`bg-gray-50`, `font-bold`)하고, 트리거의 내용을 동적으로 변경할 수 있습니다."}}},render:()=>{const[p,t]=m.useState("asc"),[n,r]=m.useState(!1);return o.jsxs(e,{open:n,onOpenChange:r,children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsxs(L,{color:"lightgray",children:[o.jsx("span",{children:"오름차순"}),o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`transition-transform duration-200 ${n?"rotate-180":""}`,children:o.jsx("path",{d:"M4 6L8 10L12 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),o.jsxs(e.Content,{align:"start",className:"w-[132px]",children:[o.jsx(e.Item,{onClick:()=>t("asc"),className:"px-6 py-2.5",children:"오름차순"}),o.jsx(e.Item,{onClick:()=>t("desc"),className:"px-6 py-2.5",children:"내림차순"})]})]})}};var h,w,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '기본적인 \`Dropdown\` 사용 예시입니다. \`Trigger\`를 클릭하면 메뉴가 열리며, \`Dropdown.Item\`을 사용하여 메뉴 항목을 구성할 수 있습니다.\\n\\n\`color="red"\` prop을 사용하여 위험한 작업(삭제 등)을 시각적으로 구분할 수 있습니다.'
      }
    }
  },
  render: () => <Dropdown>
      <Dropdown.Trigger asChild>
        <CTAButton color="light">Options</CTAButton>
      </Dropdown.Trigger>
      <Dropdown.Content align="end">
        <Dropdown.Item>Edit Profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>

        <Dropdown.Item color="red">Delete Account</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
}`,...(u=(w=s.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};var D,x,C;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`Dropdown.Content\`의 \`side\`와 \`align\` prop을 사용하여 메뉴가 열리는 위치와 정렬을 제어할 수 있습니다.\\n- \`side\`: \`top\`, \`right\`, \`bottom\`, \`left\` (기본값: \`bottom\`)\\n- \`align\`: \`start\`, \`center\`, \`end\` (기본값: \`center\`)'
      }
    }
  },
  render: () => <Box className="flex gap-4">
      <Dropdown>
        <Dropdown.Trigger asChild>
          <CTAButton color="light">Left Start</CTAButton>
        </Dropdown.Trigger>
        <Dropdown.Content align="start" side="left">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown>
        <Dropdown.Trigger asChild>
          <CTAButton color="light">Bottom End</CTAButton>
        </Dropdown.Trigger>
        <Dropdown.Content align="end" side="bottom">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </Box>
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var j,I,y;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '게시판 등에서 자주 사용되는 메뉴(\`...\`) 스타일 예시입니다. \`className\`을 사용하여 아이템의 스타일을 커스텀(가운데 정렬, 폰트 굵기 등)할 수 있습니다.'
      }
    }
  },
  render: () => <Dropdown>
      <Dropdown.Trigger asChild>
        <div className="rounded-md bg-gray-100 p-2 hover:bg-gray-200">
          <Menu />
        </div>
      </Dropdown.Trigger>
      <Dropdown.Content align="end">
        <Dropdown.Item className="justify-center px-10 py-2.5 text-base font-bold">
          수정하기
        </Dropdown.Item>

        <Dropdown.Item color="red" className="justify-center px-10 py-2.5 text-base font-bold">
          삭제하기
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
}`,...(y=(I=a.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var f,b,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '정렬 필터 등에 활용되는 예시입니다. 상태(\`useState\`)를 사용하여 선택된 항목을 하이라이트(\`bg-gray-50\`, \`font-bold\`)하고, 트리거의 내용을 동적으로 변경할 수 있습니다.'
      }
    }
  },
  render: () => {
    const [sort, setSort] = React.useState<'asc' | 'desc'>('asc');
    const [open, setOpen] = React.useState(false);
    return <Dropdown open={open} onOpenChange={setOpen}>
        <Dropdown.Trigger asChild>
          <Chip color="lightgray">
            <span>오름차순</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={\`transition-transform duration-200 \${open ? 'rotate-180' : ''}\`}>
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Chip>
        </Dropdown.Trigger>
        <Dropdown.Content align="start" className="w-[132px]">
          <Dropdown.Item onClick={() => setSort('asc')} className="px-6 py-2.5">
            오름차순
          </Dropdown.Item>

          <Dropdown.Item onClick={() => setSort('desc')} className="px-6 py-2.5">
            내림차순
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>;
  }
}`,...(T=(b=i.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const z=["Basic","Positions","BoardMenu","SortFilter"];export{s as Basic,a as BoardMenu,d as Positions,i as SortFilter,z as __namedExportsOrder,Y as default};
