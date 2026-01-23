import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as r}from"./Field-Cdy5Pr_i.js";import{T as i}from"./TextInput-DOjjjFCk.js";import{T as t}from"./TextArea-DIr-hF6w.js";import"./iframe-Ca3o9qSC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CKBcBfht.js";import"./bundle-mjs-CJvxXMcu.js";import"./Text-ChRC8lu_.js";import"./Primitive-BcSoJT3s.js";import"./index-Ceoahxjk.js";const I=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.35-4.35"})]}),_={title:"Components/Field",component:r,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"white",value:"#ffffff"},{name:"gray",value:"#f3f4f6"},{name:"dark",value:"#1f2937"}]}},tags:["autodocs"]},l={render:()=>e.jsxs(r,{children:[e.jsx(r.Label,{children:"이메일"}),e.jsx(i,{type:"email",placeholder:"example@cau.ac.kr"}),e.jsx(r.Description,{children:"학교 이메일을 입력해주세요."}),e.jsx(r.ErrorDescription,{children:"올바른 이메일 형식이 아닙니다."})]})},n={render:()=>e.jsxs(r,{error:!0,children:[e.jsx(r.Label,{children:"이메일"}),e.jsx(i,{type:"email",defaultValue:"invalid"}),e.jsx(r.Description,{children:"학교 이메일을 입력해주세요."}),e.jsx(r.ErrorDescription,{children:"올바른 이메일 형식이 아닙니다."})]})},s={render:()=>e.jsxs(r,{children:[e.jsx(r.Label,{children:"자기소개"}),e.jsx(t,{children:e.jsx(t.Input,{placeholder:"자기소개를 작성해주세요"})}),e.jsx(r.Description,{children:"최대 500자까지 입력 가능합니다."})]})},a={render:()=>e.jsxs(r,{disabled:!0,children:[e.jsx(r.Label,{children:"학번"}),e.jsx(i,{defaultValue:"20201234"}),e.jsx(r.Description,{children:"학번은 수정할 수 없습니다."})]})},d={render:()=>e.jsxs("div",{className:"flex w-80 flex-col gap-6",children:[e.jsxs(r,{children:[e.jsx(r.Label,{children:"기본 상태"}),e.jsx(i,{placeholder:"입력해주세요"}),e.jsx(r.Description,{children:"도움말 텍스트"}),e.jsx(r.ErrorDescription,{children:"에러 메시지"})]}),e.jsxs(r,{error:!0,children:[e.jsx(r.Label,{children:"에러 상태"}),e.jsx(i,{defaultValue:"잘못된 값"}),e.jsx(r.Description,{children:"도움말 텍스트 (에러시 숨김)"}),e.jsx(r.ErrorDescription,{children:"올바른 값을 입력해주세요."})]}),e.jsxs(r,{children:[e.jsx(r.Label,{children:"왼쪽 아이콘"}),e.jsx(i,{leftIcon:e.jsx(I,{}),placeholder:"검색"})]}),e.jsxs(r,{disabled:!0,children:[e.jsx(r.Label,{children:"비활성화"}),e.jsx(i,{defaultValue:"수정 불가"})]})]})};var o,c,p;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Field>
      <Field.Label>이메일</Field.Label>
      <TextInput type="email" placeholder="example@cau.ac.kr" />
      <Field.Description>학교 이메일을 입력해주세요.</Field.Description>
      <Field.ErrorDescription>
        올바른 이메일 형식이 아닙니다.
      </Field.ErrorDescription>
    </Field>
}`,...(p=(c=l.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var x,u,F;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Field error>
      <Field.Label>이메일</Field.Label>
      <TextInput type="email" defaultValue="invalid" />
      <Field.Description>학교 이메일을 입력해주세요.</Field.Description>
      <Field.ErrorDescription>
        올바른 이메일 형식이 아닙니다.
      </Field.ErrorDescription>
    </Field>
}`,...(F=(u=n.parameters)==null?void 0:u.docs)==null?void 0:F.source}}};var m,h,j;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Field>
      <Field.Label>자기소개</Field.Label>
      <TextArea>
        <TextArea.Input placeholder="자기소개를 작성해주세요" />
      </TextArea>
      <Field.Description>최대 500자까지 입력 가능합니다.</Field.Description>
    </Field>
}`,...(j=(h=s.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var D,f,b;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Field disabled>
      <Field.Label>학번</Field.Label>
      <TextInput defaultValue="20201234" />
      <Field.Description>학번은 수정할 수 없습니다.</Field.Description>
    </Field>
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var L,E,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-6">
      <Field>
        <Field.Label>기본 상태</Field.Label>
        <TextInput placeholder="입력해주세요" />
        <Field.Description>도움말 텍스트</Field.Description>
        <Field.ErrorDescription>에러 메시지</Field.ErrorDescription>
      </Field>

      <Field error>
        <Field.Label>에러 상태</Field.Label>
        <TextInput defaultValue="잘못된 값" />
        <Field.Description>도움말 텍스트 (에러시 숨김)</Field.Description>
        <Field.ErrorDescription>
          올바른 값을 입력해주세요.
        </Field.ErrorDescription>
      </Field>

      <Field>
        <Field.Label>왼쪽 아이콘</Field.Label>
        <TextInput leftIcon={<SearchIcon />} placeholder="검색" />
      </Field>

      <Field disabled>
        <Field.Label>비활성화</Field.Label>
        <TextInput defaultValue="수정 불가" />
      </Field>
    </div>
}`,...(T=(E=d.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const B=["Default","WithError","WithTextArea","Disabled","AllStates"];export{d as AllStates,l as Default,a as Disabled,n as WithError,s as WithTextArea,B as __namedExportsOrder,_ as default};
