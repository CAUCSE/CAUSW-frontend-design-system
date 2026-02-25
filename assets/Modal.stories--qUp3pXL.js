import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{D as k,a as z,P as S,C as _,O as E}from"./index-OH5FuWw_.js";import{t as L}from"./index-Ca4j9_td.js";import{D as u}from"./Dialog-AxibgXZH.js";import{C as P}from"./CTAButton-CIXoRMYm.js";import{B as M}from"./Button-BhzOi51v.js";import"./iframe-D-Cw7QyC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BM8XUbx9.js";import"./index-DlWVvF_u.js";import"./index-B-G5CbZG.js";import"./index-Cjyok00M.js";import"./index-DkNwAVsB.js";import"./index-2X-rWojq.js";import"./converter-Cub1Z0Tz.js";import"./Primitive-CWpBWH2p.js";import"./mergeStyles-Dw1fI3XI.js";const a=L({slots:{overlay:"fixed inset-0 z-modal bg-black/50 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",content:"fixed left-[50%] top-[50%] z-modal flex w-[19.5rem] md:w-[26.25rem] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded-[1rem] bg-white pb-4 pt-8 shadow-lg data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out focus:outline-none",title:"w-full typo-subtitle-18-bold text-gray-800",description:"w-full mt-2 typo-body-16-regular text-gray-500",footer:"mt-8 gap-2 flex w-full items-start px-4"},variants:{textAlign:{center:{title:"text-center px-10",description:"text-center px-10"},left:{title:"text-left px-8",description:"text-left px-8"},right:{title:"text-right",description:"text-right"}}},compoundVariants:[{textAlign:"left",title:"flex"},{textAlign:"right",title:"flex"}],defaultVariants:{textAlign:"center"}}),F=({className:e,...n})=>{const{overlay:l}=a();return o.jsx(E,{className:l({className:e}),...n})};F.displayName="ModalOverlay";const N=({className:e,children:n,...l})=>{const{content:r}=a();return o.jsxs(S,{children:[o.jsx(F,{}),o.jsx(_,{className:r({className:e}),...l,children:n})]})};N.displayName="ModalContent";const b=({className:e,textAlign:n,...l})=>{const{title:r}=a();return o.jsx(z,{className:r({className:e,textAlign:n}),...l})};b.displayName="ModalTitle";const v=({className:e,textAlign:n,...l})=>{const{description:r}=a();return o.jsx(k,{className:r({className:e,textAlign:n}),...l})};v.displayName="ModalDescription";const w=({className:e,children:n,...l})=>{const{footer:r}=a();return o.jsx("div",{className:r({className:e}),...l,children:n})};w.displayName="ModalFooter";const O=e=>o.jsx(P,{fullWidth:!0,...e});O.displayName="ModalAction";const x=e=>o.jsx(u,{...e});x.displayName="Modal";const t=Object.assign(x,{Trigger:u.Trigger,Content:N,Title:b,Description:v,Footer:w,Close:u.Close,ActionButton:O});x.__docgenInfo={description:"",methods:[],displayName:"Modal"};const eo={title:"Components/Modal",component:t,parameters:{layout:"centered",docs:{description:{component:"Modal은 사용자의 작업에 대한 확인이 필요하거나 중요한 정보를 전달할 때 사용되는 구체화된 컴포넌트입니다. \n\n 기본적인 `Dialog` 컴포넌트가 추상적인 모달 프레임을 제공한다면, `Modal`은 타이틀, 설명, 그리고 액션 버튼(확인/취소/삭제 등)이 미리 정의된 레이아웃을 제공하여 더욱 빠르게 경고창이나 확인창을 구현할 수 있습니다."}}},tags:["autodocs"]},s={render:()=>o.jsxs(t,{children:[o.jsx(t.Trigger,{asChild:!0,children:o.jsx(M,{children:"Open Modal"})}),o.jsxs(t.Content,{children:[o.jsx(t.Title,{children:"회원 탈퇴"}),o.jsx(t.Footer,{children:o.jsx(t.Close,{asChild:!0,children:o.jsx(t.ActionButton,{color:"dark",children:"확인"})})})]})]})},i={render:()=>o.jsxs(t,{children:[o.jsx(t.Trigger,{asChild:!0,children:o.jsx(M,{children:"로그아웃"})}),o.jsxs(t.Content,{children:[o.jsx(t.Title,{children:"로그아웃 하시겠습니까?"}),o.jsxs(t.Footer,{children:[o.jsx(t.Close,{asChild:!0,children:o.jsx(t.ActionButton,{color:"light",children:"취소"})}),o.jsx(t.Close,{asChild:!0,children:o.jsx(t.ActionButton,{color:"dark",children:"확인"})})]})]})]})},d={render:()=>o.jsxs(t,{children:[o.jsx(t.Trigger,{asChild:!0,children:o.jsx(M,{color:"red",children:"계정 삭제"})}),o.jsxs(t.Content,{children:[o.jsx(t.Title,{children:"계정을 삭제하시겠습니까?"}),o.jsx(t.Description,{children:"이 작업은 되돌릴 수 없습니다."}),o.jsxs(t.Footer,{children:[o.jsx(t.Close,{asChild:!0,children:o.jsx(t.ActionButton,{color:"light",children:"취소"})}),o.jsx(t.Close,{asChild:!0,children:o.jsx(t.ActionButton,{color:"red",children:"삭제"})})]})]})]})},c={render:()=>o.jsxs(t,{children:[o.jsx(t.Trigger,{asChild:!0,children:o.jsx(M,{color:"red",children:"TextAlign Left"})}),o.jsxs(t.Content,{children:[o.jsx(t.Title,{textAlign:"left",children:"타이틀 문구 왼쪽에"}),o.jsx(t.Description,{textAlign:"left",children:"설명 문구 왼쪽에."}),o.jsxs(t.Footer,{children:[o.jsx(t.Close,{asChild:!0,children:o.jsx(t.ActionButton,{color:"light",children:"취소"})}),o.jsx(t.Close,{asChild:!0,children:o.jsx(t.ActionButton,{color:"red",children:"삭제"})})]})]})]})};var p,m,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Modal>
      <Modal.Trigger asChild>
        <Button>Open Modal</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Title>회원 탈퇴</Modal.Title>
        <Modal.Footer>
          <Modal.Close asChild>
            <Modal.ActionButton color="dark">확인</Modal.ActionButton>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,C,j;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Modal>
      <Modal.Trigger asChild>
        <Button>로그아웃</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Title>로그아웃 하시겠습니까?</Modal.Title>
        <Modal.Footer>
          <Modal.Close asChild>
            <Modal.ActionButton color="light">취소</Modal.ActionButton>
          </Modal.Close>
          <Modal.Close asChild>
            <Modal.ActionButton color="dark">확인</Modal.ActionButton>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
}`,...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var f,A,T;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Modal>
      <Modal.Trigger asChild>
        <Button color="red">계정 삭제</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Title>계정을 삭제하시겠습니까?</Modal.Title>
        <Modal.Description>이 작업은 되돌릴 수 없습니다.</Modal.Description>
        <Modal.Footer>
          <Modal.Close asChild>
            <Modal.ActionButton color="light">취소</Modal.ActionButton>
          </Modal.Close>
          <Modal.Close asChild>
            <Modal.ActionButton color="red">삭제</Modal.ActionButton>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
}`,...(T=(A=d.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var B,y,D;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
            <Modal.ActionButton color="light">취소</Modal.ActionButton>
          </Modal.Close>
          <Modal.Close asChild>
            <Modal.ActionButton color="red">삭제</Modal.ActionButton>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
}`,...(D=(y=c.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const no=["Default","TwoButtons","Destructive","TextAlign"];export{s as Default,d as Destructive,c as TextAlign,i as TwoButtons,no as __namedExportsOrder,eo as default};
