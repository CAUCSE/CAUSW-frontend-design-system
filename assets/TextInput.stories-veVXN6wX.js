import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as r}from"./TextInput-Cok2KaEW.js";import{F as a}from"./Field-BnGdWRYT.js";import"./Text-C-mJTATk.js";import"./iframe-DMrKVEOR.js";import"./preload-helper-Dp1pzeXC.js";const X=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.35-4.35"})]}),Y=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),te={title:"Components/TextInput",component:r,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsx(r,{placeholder:"이메일을 입력하세요"})},n={render:()=>e.jsx(r,{leftIcon:e.jsx(X,{}),placeholder:"검색어를 입력하세요"})},t={render:()=>e.jsx(r,{type:"password",rightIcon:e.jsx(Y,{}),placeholder:"비밀번호 입력"})},o={render:()=>e.jsx(r,{error:!0,placeholder:"에러 상태",defaultValue:"잘못된 값"})},d={render:()=>e.jsx(r,{disabled:!0,defaultValue:"비활성화"})},l={render:()=>e.jsxs(a,{children:[e.jsx(a.Label,{children:"이메일"}),e.jsx(r,{type:"email",placeholder:"example@cau.ac.kr"}),e.jsx(a.Description,{children:"학교 이메일을 입력해주세요."})]})},c={render:()=>e.jsxs(a,{error:!0,children:[e.jsx(a.Label,{children:"사용자 이름"}),e.jsx(r,{defaultValue:"invalid!"}),e.jsx(a.Description,{children:"특수문자는 사용할 수 없습니다."})]})},i={render:()=>e.jsxs(a,{disabled:!0,children:[e.jsx(a.Label,{children:"학번"}),e.jsx(r,{defaultValue:"20201234"}),e.jsx(a.Description,{children:"학번은 수정할 수 없습니다."})]})},p={render:()=>e.jsx(r,{variant:"underline",placeholder:"이름을 입력하세요"})},u={render:()=>e.jsx(r,{variant:"underline",leftIcon:e.jsx(X,{}),placeholder:"검색어를 입력하세요"})},m={render:()=>e.jsx(r,{variant:"underline",error:!0,placeholder:"에러 상태",defaultValue:"잘못된 값"})},x={render:()=>e.jsxs("div",{className:"flex w-80 flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm text-gray-500",children:"Default"}),e.jsx(r,{placeholder:"기본 스타일"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm text-gray-500",children:"Underline"}),e.jsx(r,{variant:"underline",placeholder:"언더라인 스타일"})]})]})};var h,j,I;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <TextInput placeholder="이메일을 입력하세요" />
}`,...(I=(j=s.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var f,g,F;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <TextInput leftIcon={<SearchIcon />} placeholder="검색어를 입력하세요" />
}`,...(F=(g=n.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};var v,b,D;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <TextInput type="password" rightIcon={<EyeIcon />} placeholder="비밀번호 입력" />
}`,...(D=(b=t.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var S,T,W;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <TextInput error placeholder="에러 상태" defaultValue="잘못된 값" />
}`,...(W=(T=o.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var y,V,L;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <TextInput disabled defaultValue="비활성화" />
}`,...(L=(V=d.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var E,w,U;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Field>
      <Field.Label>이메일</Field.Label>
      <TextInput type="email" placeholder="example@cau.ac.kr" />
      <Field.Description>학교 이메일을 입력해주세요.</Field.Description>
    </Field>
}`,...(U=(w=l.parameters)==null?void 0:w.docs)==null?void 0:U.source}}};var k,N,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Field error>
      <Field.Label>사용자 이름</Field.Label>
      <TextInput defaultValue="invalid!" />
      <Field.Description>특수문자는 사용할 수 없습니다.</Field.Description>
    </Field>
}`,...(C=(N=c.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var R,B,_;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Field disabled>
      <Field.Label>학번</Field.Label>
      <TextInput defaultValue="20201234" />
      <Field.Description>학번은 수정할 수 없습니다.</Field.Description>
    </Field>
}`,...(_=(B=i.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var M,O,Z;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <TextInput variant="underline" placeholder="이름을 입력하세요" />
}`,...(Z=(O=p.parameters)==null?void 0:O.docs)==null?void 0:Z.source}}};var q,z,A;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <TextInput variant="underline" leftIcon={<SearchIcon />} placeholder="검색어를 입력하세요" />
}`,...(A=(z=u.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var G,H,J;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <TextInput variant="underline" error placeholder="에러 상태" defaultValue="잘못된 값" />
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,P,Q;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-6">
      <div>
        <p className="mb-2 text-sm text-gray-500">Default</p>
        <TextInput placeholder="기본 스타일" />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-500">Underline</p>
        <TextInput variant="underline" placeholder="언더라인 스타일" />
      </div>
    </div>
}`,...(Q=(P=x.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const oe=["Default","WithLeftIcon","WithRightIcon","ErrorState","Disabled","WithField","WithFieldError","WithFieldDisabled","Underline","UnderlineWithIcons","UnderlineError","VariantComparison"];export{s as Default,d as Disabled,o as ErrorState,p as Underline,m as UnderlineError,u as UnderlineWithIcons,x as VariantComparison,l as WithField,i as WithFieldDisabled,c as WithFieldError,n as WithLeftIcon,t as WithRightIcon,oe as __namedExportsOrder,te as default};
