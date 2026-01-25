import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./iframe-DT-_7YRs.js";import{T as r}from"./TextArea-BjAwTtbX.js";import{F}from"./Field-BtIrhTJz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CKBcBfht.js";import"./bundle-mjs-CJvxXMcu.js";import"./Primitive-COH1LJud.js";import"./index-AVE-RrXy.js";import"./Text-DeZ-7JPx.js";const k={title:"Components/TextArea",component:r,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>e.jsx(r,{children:e.jsx(r.Input,{placeholder:"내용을 입력하세요"})})},a={render:()=>{const[S,E]=b.useState(0),c=500;return e.jsxs(r,{children:[e.jsx(r.Input,{placeholder:"내용을 입력하세요",rows:6,maxLength:c,onChange:L=>E(L.target.value.length)}),e.jsx(r.Footer,{children:e.jsxs("span",{className:"text-right text-xs text-gray-400",children:[S," / ",c]})})]})}},s={render:()=>e.jsx(r,{children:e.jsx(r.Input,{resize:!1,placeholder:"크기 고정"})})},n={render:()=>e.jsx(F,{disabled:!0,children:e.jsx(r,{children:e.jsx(r.Input,{placeholder:"비활성화됨"})})})},o={render:()=>e.jsx(F,{error:!0,children:e.jsx(r,{children:e.jsx(r.Input,{placeholder:"에러 상태"})})})};var d,p,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <TextArea>
      <TextArea.Input placeholder="내용을 입력하세요" />
    </TextArea>
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var x,i,m;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = useState(0);
    const maxLength = 500;
    return <TextArea>
        <TextArea.Input placeholder="내용을 입력하세요" rows={6} maxLength={maxLength} onChange={e => setCount(e.target.value.length)} />
        <TextArea.Footer>
          <span className="text-right text-xs text-gray-400">
            {count} / {maxLength}
          </span>
        </TextArea.Footer>
      </TextArea>;
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <TextArea>
      <TextArea.Input resize={false} placeholder="크기 고정" />
    </TextArea>
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var T,A,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Field disabled>
      <TextArea>
        <TextArea.Input placeholder="비활성화됨" />
      </TextArea>
    </Field>
}`,...(j=(A=n.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var C,I,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Field error>
      <TextArea>
        <TextArea.Input placeholder="에러 상태" />
      </TextArea>
    </Field>
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const q=["Default","WithCharCount","NoResize","Disabled","Error"];export{t as Default,n as Disabled,o as Error,s as NoResize,a as WithCharCount,q as __namedExportsOrder,k as default};
