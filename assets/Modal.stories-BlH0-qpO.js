import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{D as z,T as _,P as k,b as E,O as L}from"./index-Crm2NBHq.js";import{t as P}from"./index-Ca4j9_td.js";import{D as x}from"./Dialog-BSzNRvXr.js";import{B as u}from"./Button-6rHxlSbg.js";import{S as R}from"./Separator-6iKhG5vF.js";import"./iframe-DdQLMFew.js";import"./preload-helper-Dp1pzeXC.js";import"./index-NOL-yXR-.js";import"./index-UqW9JDjA.js";import"./index-DA2z5Rdk.js";import"./index-CoWXO7uz.js";import"./index-D8n9IHNK.js";import"./index-DvF8r9dI.js";import"./converter-Cub1Z0Tz.js";import"./Primitive-DrAfh3Zo.js";import"./mergeStyles-Dw1fI3XI.js";const l=P({slots:{overlay:"fixed inset-0 z-modal bg-black/50 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",content:"fixed left-[50%] top-[50%] z-modal flex w-[19.5rem] md:w-[26.25rem] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded-[1rem] bg-white pb-[0.75rem] pt-[1.875rem] shadow-lg data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out focus:outline-none",title:"w-full typo-subtitle-18-bold text-gray-800",description:"w-full mt-2 typo-body-16-regular text-gray-500",footer:"mt-6 flex w-full items-start px-10",actionButton:"flex flex-1 items-center justify-center py-3 px-10 rounded-md typo-subtitle-16-semibold transition-colors focus:outline-none"},variants:{variant:{primary:{actionButton:"text-blue-700 hover:bg-blue-50 active:bg-blue-100 data-[active]:bg-blue-100"},destructive:{actionButton:"text-red-400 hover:bg-red-50 active:bg-red-100 data-[active]:bg-red-100"},cancel:{actionButton:"text-gray-400 hover:bg-gray-50 active:bg-gray-100 data-[active]:bg-gray-100"}},textAlign:{center:{title:"text-center px-10",description:"text-center px-10"},left:{title:"text-left px-8",description:"text-left px-8"},right:{title:"text-right",description:"text-right"}}},compoundVariants:[{textAlign:"left",title:"flex"},{textAlign:"right",title:"flex"}],defaultVariants:{variant:"primary",textAlign:"center"}}),b=({className:o,...n})=>{const{overlay:a}=l();return t.jsx(L,{className:a({className:o}),...n})};b.displayName="ModalOverlay";const D=({className:o,children:n,...a})=>{const{content:r}=l();return t.jsxs(k,{children:[t.jsx(b,{}),t.jsx(E,{className:r({className:o}),...a,children:n})]})};D.displayName="ModalContent";const N=({className:o,textAlign:n,...a})=>{const{title:r}=l();return t.jsx(_,{className:r({className:o,textAlign:n}),...a})};N.displayName="ModalTitle";const F=({className:o,textAlign:n,...a})=>{const{description:r}=l();return t.jsx(z,{className:r({className:o,textAlign:n}),...a})};F.displayName="ModalDescription";const w=({className:o,children:n,...a})=>{const{footer:r}=l();return t.jsx("div",{className:r({className:o}),...a,children:n})};w.displayName="ModalFooter";const O=({className:o,variant:n,...a})=>{const{actionButton:r}=l(),S=r({className:o,variant:n});return t.jsx("button",{className:S,...a})};O.displayName="ModalAction";const m=o=>t.jsx(x,{...o});m.displayName="Modal";const e=Object.assign(m,{Trigger:x.Trigger,Content:D,Title:N,Description:F,Footer:w,Close:x.Close,ActionButton:O});m.__docgenInfo={description:"",methods:[],displayName:"Modal"};const nt={title:"Components/Modal",component:e,parameters:{layout:"centered",docs:{description:{component:"Modal은 사용자의 작업에 대한 확인이 필요하거나 중요한 정보를 전달할 때 사용되는 구체화된 컴포넌트입니다. \n\n 기본적인 `Dialog` 컴포넌트가 추상적인 모달 프레임을 제공한다면, `Modal`은 타이틀, 설명, 그리고 액션 버튼(확인/취소/삭제 등)이 미리 정의된 레이아웃을 제공하여 더욱 빠르게 경고창이나 확인창을 구현할 수 있습니다."}}},tags:["autodocs"]},i={render:()=>t.jsxs(e,{children:[t.jsx(e.Trigger,{asChild:!0,children:t.jsx(u,{children:"Open Modal"})}),t.jsxs(e.Content,{children:[t.jsx(e.Title,{children:"회원 탈퇴"}),t.jsx(e.Footer,{children:t.jsx(e.Close,{asChild:!0,children:t.jsx(e.ActionButton,{variant:"primary",children:"확인"})})})]})]})},s={render:()=>t.jsxs(e,{children:[t.jsx(e.Trigger,{asChild:!0,children:t.jsx(u,{children:"로그아웃"})}),t.jsxs(e.Content,{children:[t.jsx(e.Title,{children:"로그아웃 하시겠습니까?"}),t.jsxs(e.Footer,{children:[t.jsx(e.Close,{asChild:!0,children:t.jsx(e.ActionButton,{variant:"cancel",children:"취소"})}),t.jsx(R,{orientation:"vertical",className:"mx-0"}),t.jsx(e.Close,{asChild:!0,children:t.jsx(e.ActionButton,{variant:"primary",children:"확인"})})]})]})]})},d={render:()=>t.jsxs(e,{children:[t.jsx(e.Trigger,{asChild:!0,children:t.jsx(u,{color:"red",children:"계정 삭제"})}),t.jsxs(e.Content,{children:[t.jsx(e.Title,{children:"계정을 삭제하시겠습니까?"}),t.jsx(e.Description,{children:"이 작업은 되돌릴 수 없습니다."}),t.jsxs(e.Footer,{children:[t.jsx(e.Close,{asChild:!0,children:t.jsx(e.ActionButton,{variant:"cancel",children:"취소"})}),t.jsx("div",{className:"w-[1px] bg-gray-200"}),t.jsx(e.Close,{asChild:!0,children:t.jsx(e.ActionButton,{variant:"destructive",children:"삭제"})})]})]})]})},c={render:()=>t.jsxs(e,{children:[t.jsx(e.Trigger,{asChild:!0,children:t.jsx(u,{color:"red",children:"TextAlign Left"})}),t.jsxs(e.Content,{children:[t.jsx(e.Title,{textAlign:"left",children:"타이틀 문구 왼쪽에"}),t.jsx(e.Description,{textAlign:"left",children:"설명 문구 왼쪽에."}),t.jsxs(e.Footer,{children:[t.jsx(e.Close,{asChild:!0,children:t.jsx(e.ActionButton,{variant:"cancel",children:"취소"})}),t.jsx(e.Close,{asChild:!0,children:t.jsx(e.ActionButton,{variant:"destructive",children:"삭제"})})]})]})]})};var p,M,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Modal>
      <Modal.Trigger asChild>
        <Button>Open Modal</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Title>회원 탈퇴</Modal.Title>
        <Modal.Footer>
          <Modal.Close asChild>
            <Modal.ActionButton variant="primary">확인</Modal.ActionButton>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
}`,...(g=(M=i.parameters)==null?void 0:M.docs)==null?void 0:g.source}}};var h,C,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Modal>
      <Modal.Trigger asChild>
        <Button>로그아웃</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Title>로그아웃 하시겠습니까?</Modal.Title>
        <Modal.Footer>
          <Modal.Close asChild>
            <Modal.ActionButton variant="cancel">취소</Modal.ActionButton>
          </Modal.Close>
          <Separator orientation="vertical" className="mx-0" />
          <Modal.Close asChild>
            <Modal.ActionButton variant="primary">확인</Modal.ActionButton>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var v,f,B;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Modal>
      <Modal.Trigger asChild>
        <Button color="red">계정 삭제</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Title>계정을 삭제하시겠습니까?</Modal.Title>
        <Modal.Description>이 작업은 되돌릴 수 없습니다.</Modal.Description>
        <Modal.Footer>
          <Modal.Close asChild>
            <Modal.ActionButton variant="cancel">취소</Modal.ActionButton>
          </Modal.Close>
          <div className="w-[1px] bg-gray-200" />
          <Modal.Close asChild>
            <Modal.ActionButton variant="destructive">삭제</Modal.ActionButton>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
}`,...(B=(f=d.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var T,y,A;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Modal>
      <Modal.Trigger asChild>
        <Button color="red">TextAlign Left</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Title textAlign="left">타이틀 문구 왼쪽에</Modal.Title>
        <Modal.Description textAlign="left">
          설명 문구 왼쪽에.
        </Modal.Description>
        <Modal.Footer>
          <Modal.Close asChild>
            <Modal.ActionButton variant="cancel">취소</Modal.ActionButton>
          </Modal.Close>
          <Modal.Close asChild>
            <Modal.ActionButton variant="destructive">삭제</Modal.ActionButton>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
}`,...(A=(y=c.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const at=["Default","TwoButtons","Destructive","TextAlign"];export{i as Default,d as Destructive,c as TextAlign,s as TwoButtons,at as __namedExportsOrder,nt as default};
