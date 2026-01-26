import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as q}from"./iframe-CDqz-qF0.js";import{T as s}from"./Toggle-1h8Gk1-P.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ca4j9_td.js";import"./Text-DtCm8rgE.js";const J={title:"Components/Toggle",component:s,parameters:{layout:"centered",backgrounds:{default:"white",values:[{name:"white",value:"#ffffff"},{name:"gray",value:"#f3f4f6"},{name:"dark",value:"#1f2937"}]}},tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},r={render:()=>e.jsxs(s,{children:[e.jsx(s.Switch,{}),e.jsx(s.Label,{children:"알림 받기"})]})},a={render:()=>e.jsxs(s,{children:[e.jsx(s.Label,{children:"라벨이 왼쪽에"}),e.jsx(s.Switch,{})]})},l={render:()=>e.jsxs(s,{children:[e.jsx(s.Switch,{}),e.jsx(s.Label,{children:"라벨이 오른쪽에"})]})},o={render:()=>e.jsxs(s,{className:"flex-col items-start gap-3",children:[e.jsx(s.Label,{children:"세로 배치"}),e.jsx(s.Switch,{})]})},t={render:()=>e.jsxs(s,{className:"w-64 justify-between",children:[e.jsx(s.Label,{children:"알림 설정"}),e.jsx(s.Switch,{})]})},c={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{children:e.jsx(s.Switch,{})}),e.jsx(s,{defaultChecked:!0,children:e.jsx(s.Switch,{})})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(s,{disabled:!0,children:[e.jsx(s.Switch,{}),e.jsx(s.Label,{children:"비활성화 (Off)"})]}),e.jsxs(s,{disabled:!0,defaultChecked:!0,children:[e.jsx(s.Switch,{}),e.jsx(s.Label,{children:"비활성화 (On)"})]})]})},g={render:()=>{const[d,i]=q.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(s,{checked:d,onCheckedChange:i,children:[e.jsx(s.Switch,{}),e.jsx(s.Label,{children:"알림 설정"})]}),e.jsxs("p",{className:"text-sm text-gray-500",children:["현재 상태: ",d?"켜짐":"꺼짐"]}),e.jsx("button",{onClick:()=>i(!d),className:"rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600",children:"토글 전환"})]})}};var m,h,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Toggle>
      <Toggle.Switch />
      <Toggle.Label>알림 받기</Toggle.Label>
    </Toggle>
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var p,x,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Toggle>
      <Toggle.Label>라벨이 왼쪽에</Toggle.Label>
      <Toggle.Switch />
    </Toggle>
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var T,f,j;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Toggle>
      <Toggle.Switch />
      <Toggle.Label>라벨이 오른쪽에</Toggle.Label>
    </Toggle>
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var L,S,w;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Toggle className="flex-col items-start gap-3">
      <Toggle.Label>세로 배치</Toggle.Label>
      <Toggle.Switch />
    </Toggle>
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,C,v;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Toggle className="w-64 justify-between">
      <Toggle.Label>알림 설정</Toggle.Label>
      <Toggle.Switch />
    </Toggle>
}`,...(v=(C=t.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var N,y,O;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Toggle>
        <Toggle.Switch />
      </Toggle>
      <Toggle defaultChecked>
        <Toggle.Switch />
      </Toggle>
    </div>
}`,...(O=(y=c.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var D,E,R;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Toggle disabled>
        <Toggle.Switch />
        <Toggle.Label>비활성화 (Off)</Toggle.Label>
      </Toggle>
      <Toggle disabled defaultChecked>
        <Toggle.Switch />
        <Toggle.Label>비활성화 (On)</Toggle.Label>
      </Toggle>
    </div>
}`,...(R=(E=n.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var B,W,_;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="flex flex-col gap-4">
        <Toggle checked={checked} onCheckedChange={setChecked}>
          <Toggle.Switch />
          <Toggle.Label>알림 설정</Toggle.Label>
        </Toggle>
        <p className="text-sm text-gray-500">
          현재 상태: {checked ? '켜짐' : '꺼짐'}
        </p>
        <button onClick={() => setChecked(!checked)} className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600">
          토글 전환
        </button>
      </div>;
  }
}`,...(_=(W=g.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const K=["Default","LabelLeft","LabelRight","CustomLayout","SpaceBetween","WithoutLabel","Disabled","Controlled"];export{g as Controlled,o as CustomLayout,r as Default,n as Disabled,a as LabelLeft,l as LabelRight,t as SpaceBetween,c as WithoutLabel,K as __namedExportsOrder,J as default};
