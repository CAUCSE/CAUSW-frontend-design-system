import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as G}from"./iframe-DT-_7YRs.js";import{C as c}from"./Checkbox-DQU00Ofl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CKBcBfht.js";import"./bundle-mjs-CJvxXMcu.js";import"./Text-DeZ-7JPx.js";const B={title:"Components/Checkbox",component:c,parameters:{layout:"centered",backgrounds:{default:"white",values:[{name:"white",value:"#ffffff"},{name:"gray",value:"#f3f4f6"},{name:"dark",value:"#1f2937"}]}},tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},r={render:()=>e.jsxs(c,{children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"동의합니다"})]})},a={render:()=>e.jsxs(c,{defaultChecked:!0,children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"선택됨"})]})},o={render:()=>e.jsxs(c,{children:[e.jsx(c.Label,{children:"라벨이 왼쪽에"}),e.jsx(c.Indicator,{})]})},s={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(c,{children:e.jsx(c.Indicator,{})}),e.jsx(c,{defaultChecked:!0,children:e.jsx(c.Indicator,{})})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(c,{disabled:!0,children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"비활성화 (Off)"})]}),e.jsxs(c,{disabled:!0,defaultChecked:!0,children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"비활성화 (On)"})]})]})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs(c,{children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"옵션 1"})]}),e.jsxs(c,{children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"옵션 2"})]}),e.jsxs(c,{children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"옵션 3"})]})]})},d={render:()=>{const[l,x]=G.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(c,{checked:l,onCheckedChange:x,children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"이용약관에 동의합니다"})]}),e.jsxs("p",{className:"text-sm text-gray-500",children:["현재 상태: ",l?"동의함":"동의 안 함"]}),e.jsx("button",{onClick:()=>x(!l),className:"rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600",children:"토글"})]})}};var h,b,i;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Checkbox>
      <Checkbox.Indicator />
      <Checkbox.Label>동의합니다</Checkbox.Label>
    </Checkbox>
}`,...(i=(b=r.parameters)==null?void 0:b.docs)==null?void 0:i.source}}};var k,C,m;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Checkbox defaultChecked>
      <Checkbox.Indicator />
      <Checkbox.Label>선택됨</Checkbox.Label>
    </Checkbox>
}`,...(m=(C=a.parameters)==null?void 0:C.docs)==null?void 0:m.source}}};var u,p,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Checkbox>
      <Checkbox.Label>라벨이 왼쪽에</Checkbox.Label>
      <Checkbox.Indicator />
    </Checkbox>
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var j,L,g;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Checkbox>
        <Checkbox.Indicator />
      </Checkbox>
      <Checkbox defaultChecked>
        <Checkbox.Indicator />
      </Checkbox>
    </div>
}`,...(g=(L=s.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var I,v,N;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Checkbox disabled>
        <Checkbox.Indicator />
        <Checkbox.Label>비활성화 (Off)</Checkbox.Label>
      </Checkbox>
      <Checkbox disabled defaultChecked>
        <Checkbox.Indicator />
        <Checkbox.Label>비활성화 (On)</Checkbox.Label>
      </Checkbox>
    </div>
}`,...(N=(v=n.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var S,y,O;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Checkbox>
        <Checkbox.Indicator />
        <Checkbox.Label>옵션 1</Checkbox.Label>
      </Checkbox>
      <Checkbox>
        <Checkbox.Indicator />
        <Checkbox.Label>옵션 2</Checkbox.Label>
      </Checkbox>
      <Checkbox>
        <Checkbox.Indicator />
        <Checkbox.Label>옵션 3</Checkbox.Label>
      </Checkbox>
    </div>
}`,...(O=(y=t.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var w,D,E;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="flex flex-col gap-4">
        <Checkbox checked={checked} onCheckedChange={setChecked}>
          <Checkbox.Indicator />
          <Checkbox.Label>이용약관에 동의합니다</Checkbox.Label>
        </Checkbox>
        <p className="text-sm text-gray-500">
          현재 상태: {checked ? '동의함' : '동의 안 함'}
        </p>
        <button onClick={() => setChecked(!checked)} className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600">
          토글
        </button>
      </div>;
  }
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const F=["Default","Checked","LabelLeft","WithoutLabel","Disabled","CheckboxGroup","Controlled"];export{t as CheckboxGroup,a as Checked,d as Controlled,r as Default,n as Disabled,o as LabelLeft,s as WithoutLabel,F as __namedExportsOrder,B as default};
