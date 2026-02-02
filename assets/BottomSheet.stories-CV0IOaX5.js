import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u,R as z}from"./iframe-DdQLMFew.js";import{R as U,D as I,T as G,P as J,C as K,a as M,b as Q,O as X}from"./index-Crm2NBHq.js";import{t as H}from"./index-Ca4j9_td.js";import{T as Y}from"./Text-BDDPiOGY.js";import{C as k}from"./CTAButton-CF0yqXEj.js";import{S as Z}from"./Stack-DAKO6ne7.js";import{B as h}from"./Box-6NY_EY9F.js";import"./preload-helper-Dp1pzeXC.js";import"./index-NOL-yXR-.js";import"./index-UqW9JDjA.js";import"./index-DA2z5Rdk.js";import"./index-CoWXO7uz.js";import"./index-D8n9IHNK.js";import"./index-DvF8r9dI.js";import"./Primitive-DrAfh3Zo.js";import"./mergeStyles-Dw1fI3XI.js";const F=H({slots:{overlay:["fixed inset-0 z-50","data-[state=open]:animate-overlay-show","data-[state=closed]:animate-overlay-hide"],content:["fixed z-50 w-full","data-[state=open]:animate-content-show","data-[state=closed]:animate-content-hide"]},variants:{position:{bottom:{content:"bottom-0"}}},defaultVariants:{position:"bottom"}}),B=U,$=M,ee=K,te=J,oe=G,ne=I,re=({className:t,...n})=>{const{overlay:r}=F();return e.jsx(X,{className:r({className:t}),...n})},se=({position:t,className:n,children:r,...s})=>{const{content:m}=F({position:t});return e.jsx(Q,{className:m({className:n}),...s,children:r})},a=Object.assign(B,{Root:B,Trigger:$,Close:ee,Portal:te,Overlay:re,Content:se,Title:oe,Description:ne}),D=u.createContext(void 0),R=()=>{const t=z.useContext(D);if(!t)throw new Error("useBottomSheet must be used within a BottomSheetProvider");return t},l=H({slots:{content:"flex w-full flex-col items-center gap-8 rounded-t-2xl bg-white px-6 py-3.5 pb-10 shadow-[0_-2px_30px_0_rgba(51,53,61,0.30)]",handle:"h-1 w-11 rounded-full bg-gray-200",header:"text-left",body:"overflow-y-auto",footer:""},variants:{headerAlign:{left:{header:"text-left"},center:{header:"text-center"}}},defaultVariants:{headerAlign:"left"}}),g=({children:t,open:n,defaultOpen:r=!1,onOpenChange:s,headerAlign:m="left"})=>{const[L,W]=u.useState(r),x=n!==void 0,b=x?n:L,p=y=>{x||W(y),s==null||s(y)};return e.jsx(D.Provider,{value:{headerAlign:m,isOpen:b,onOpen:()=>p(!0),onClose:()=>p(!1)},children:e.jsx(a.Root,{open:b,onOpenChange:p,children:t})})},A=a.Trigger,ae=()=>{const{handle:t}=l();return e.jsx("div",{className:t()})},P=({children:t,className:n,...r})=>{const{content:s}=l();return e.jsxs(a.Portal,{children:[e.jsx(a.Overlay,{}),e.jsxs(a.Content,{className:s({className:n}),...r,children:[e.jsx(ae,{}),e.jsx("div",{className:"w-full",children:t})]})]})},_=({title:t,className:n})=>{const{headerAlign:r}=R(),{header:s}=l({headerAlign:r});return e.jsx("div",{className:s({className:n}),children:t&&e.jsx(a.Title,{asChild:!0,children:e.jsx(Y,{as:"h2",typography:"subtitle-18-bold",children:t})})})},E=({className:t,children:n,maxHeight:r})=>{const{body:s}=l();return e.jsx("div",{className:s({className:t}),style:{maxHeight:r},children:n})},V=({className:t,children:n})=>{const{footer:r}=l();return e.jsx("div",{className:r({className:t}),children:n})},o=Object.assign(g,{Trigger:A,Content:P,Header:_,Body:E,Footer:V});g.displayName="BottomSheet";A.displayName="BottomSheet.Trigger";P.displayName="BottomSheet.Content";_.displayName="BottomSheet.Header";E.displayName="BottomSheet.Body";V.displayName="BottomSheet.Footer";g.__docgenInfo={description:"",methods:[],displayName:"BottomSheet",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},headerAlign:{required:!1,tsType:{name:"VariantProps['headerAlign']",raw:"VariantProps<typeof bottomSheet>['headerAlign']"},description:"",defaultValue:{value:"'left'",computed:!1}}}};const ve={title:"Components/BottomSheet",component:o,subcomponents:{Trigger:o.Trigger,Content:o.Content,Header:o.Header,Body:o.Body,Footer:o.Footer},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headerAlign:{control:"radio",options:["left","center"],description:"헤더 텍스트의 정렬 방식입니다.",table:{defaultValue:{summary:"left"},type:{summary:"'left' | 'center'"}}},open:{control:"boolean",description:"제어형(Controlled)으로 사용할 때의 상태입니다."},defaultOpen:{control:"boolean",description:"비제어형(Uncontrolled)으로 사용할 때의 초기 상태입니다."},onOpenChange:{action:"onOpenChange",description:"시트가 열리거나 닫힐 때 호출되는 콜백입니다."}},args:{headerAlign:"left",defaultOpen:!1}},q=()=>{const{onClose:t}=R();return e.jsx(k,{onClick:t,color:"dark",fullWidth:!0,children:"확인"})},d={render:t=>e.jsxs(o,{...t,children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx("button",{className:"cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 hover:text-gray-200",children:"Open"})}),e.jsxs(o.Content,{children:[e.jsx(o.Header,{title:"제목"}),e.jsx(o.Body,{children:"Content"}),e.jsx(o.Footer,{children:e.jsx(q,{})})]})]})},i={parameters:{docs:{description:{story:`
**제어형(Controlled) 컴포넌트** 예제입니다.

- \`open\` prop을 통해 열림/닫힘 상태를 직접 주입합니다.
- \`onOpenChange\` 콜백을 통해 상태 변경 요청을 받아 부모 컴포넌트의 state를 업데이트합니다.
- 외부 버튼이나 로직에 의해 시트를 닫아야 할 때 유용합니다.
        `}}},render:t=>{const[n,r]=u.useState(!1);return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx("button",{onClick:()=>r(!0),className:"cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 hover:text-gray-200",children:"Open"}),e.jsxs("div",{className:"text-sm text-gray-500",children:["현재 상태: ",n?"열림 (Open)":"닫힘 (Closed)"]}),e.jsx(o,{...t,open:n,onOpenChange:r,children:e.jsxs(o.Content,{children:[e.jsx(o.Header,{title:"제어형 모드"}),e.jsx(o.Body,{children:e.jsx("p",{className:"text-gray-600",children:"onOpenChange 이벤트를 통해 상태를 업데이트합니다."})}),e.jsx(o.Footer,{children:e.jsx(k,{onClick:()=>r(!1),color:"dark",fullWidth:!0,children:"닫기 (상태 변경)"})})]})})]})}},c={parameters:{docs:{description:{story:`
**긴 콘텐츠와 스크롤 처리(Long Content & Scroll)** 예제입니다.

- \`BottomSheetBody\`에 \`maxHeight\` prop(예: 400px, 50vh 등)을 지정하여 영역의 높이를 제한할 수 있습니다.
- 콘텐츠가 지정된 높이를 초과할 경우 Body 영역 내부에만 스크롤이 생성됩니다.
- Header와 Footer는 고정된 상태로 유지되므로, 중요한 액션 버튼이 항상 노출되어야 할 때 유용합니다.
        `}}},render:t=>e.jsxs(o,{...t,children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx("button",{className:"cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 hover:text-gray-200",children:"Open"})}),e.jsxs(o.Content,{children:[e.jsx(o.Header,{title:"스크롤 테스트"}),e.jsx(o.Body,{maxHeight:300,className:"my-4",children:e.jsxs(Z,{gap:"md",children:[e.jsx(h,{background:"subtle",radius:"md",className:"h-30 w-full border border-gray-200"}),e.jsx(h,{background:"subtle",radius:"md",className:"h-30 w-full border border-gray-200"}),e.jsx(h,{background:"subtle",radius:"md",className:"h-30 w-full border border-gray-200"})]})}),e.jsx(o.Footer,{children:e.jsx(q,{})})]})]})};var f,S,C;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <BottomSheet {...args}>
      <BottomSheet.Trigger asChild>
        <button className="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 hover:text-gray-200">
          Open
        </button>
      </BottomSheet.Trigger>

      <BottomSheet.Content>
        <BottomSheet.Header title="제목" />
        <BottomSheet.Body>Content</BottomSheet.Body>
        <BottomSheet.Footer>
          <ExampleCloseButton />
        </BottomSheet.Footer>
      </BottomSheet.Content>
    </BottomSheet>
}`,...(C=(S=d.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var j,v,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
**제어형(Controlled) 컴포넌트** 예제입니다.

- \\\`open\\\` prop을 통해 열림/닫힘 상태를 직접 주입합니다.
- \\\`onOpenChange\\\` 콜백을 통해 상태 변경 요청을 받아 부모 컴포넌트의 state를 업데이트합니다.
- 외부 버튼이나 로직에 의해 시트를 닫아야 할 때 유용합니다.
        \`
      }
    }
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="flex flex-col items-center gap-4">
        <button onClick={() => setOpen(true)} className="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 hover:text-gray-200">
          Open
        </button>
        <div className="text-sm text-gray-500">
          현재 상태: {open ? '열림 (Open)' : '닫힘 (Closed)'}
        </div>

        <BottomSheet {...args} open={open} onOpenChange={setOpen}>
          <BottomSheet.Content>
            <BottomSheet.Header title="제어형 모드" />
            <BottomSheet.Body>
              <p className="text-gray-600">
                onOpenChange 이벤트를 통해 상태를 업데이트합니다.
              </p>
            </BottomSheet.Body>
            <BottomSheet.Footer>
              <CTAButton onClick={() => setOpen(false)} color="dark" fullWidth>
                닫기 (상태 변경)
              </CTAButton>
            </BottomSheet.Footer>
          </BottomSheet.Content>
        </BottomSheet>
      </div>;
  }
}`,...(N=(v=i.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var w,O,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
**긴 콘텐츠와 스크롤 처리(Long Content & Scroll)** 예제입니다.

- \\\`BottomSheetBody\\\`에 \\\`maxHeight\\\` prop(예: 400px, 50vh 등)을 지정하여 영역의 높이를 제한할 수 있습니다.
- 콘텐츠가 지정된 높이를 초과할 경우 Body 영역 내부에만 스크롤이 생성됩니다.
- Header와 Footer는 고정된 상태로 유지되므로, 중요한 액션 버튼이 항상 노출되어야 할 때 유용합니다.
        \`
      }
    }
  },
  render: args => <BottomSheet {...args}>
      <BottomSheet.Trigger asChild>
        <button className="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 hover:text-gray-200">
          Open
        </button>
      </BottomSheet.Trigger>

      <BottomSheet.Content>
        <BottomSheet.Header title="스크롤 테스트" />
        <BottomSheet.Body maxHeight={300} className="my-4">
          <Stack gap="md">
            <Box background="subtle" radius="md" className="h-30 w-full border border-gray-200" />
            <Box background="subtle" radius="md" className="h-30 w-full border border-gray-200" />
            <Box background="subtle" radius="md" className="h-30 w-full border border-gray-200" />
          </Stack>
        </BottomSheet.Body>
        <BottomSheet.Footer>
          <ExampleCloseButton />
        </BottomSheet.Footer>
      </BottomSheet.Content>
    </BottomSheet>
}`,...(T=(O=c.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const Ne=["Default","Controlled","LongContent"];export{i as Controlled,d as Default,c as LongContent,Ne as __namedExportsOrder,ve as default};
