import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as H,R as J}from"./iframe-BugSrr0f.js";import{T as ee}from"./Text-DP4hy-4b.js";import{m as x}from"./mergeStyles-Cx6ulRiC.js";import"./preload-helper-Dp1pzeXC.js";const K=J.createContext(null),M=()=>{const a=J.useContext(K);if(!a)throw new Error("Toggle 서브 컴포넌트는 <Toggle> 컴포넌트 내부에서 사용해야 합니다. ex) <Toggle><Toggle.Switch /></Toggle>");return a},T=({checked:a,defaultChecked:r=!1,onCheckedChange:o,disabled:t,children:h,className:X,...Y})=>{const[Z,$]=H.useState(r),p=a!==void 0?a:Z,P=()=>{if(t)return;const b=!p;a===void 0&&$(b),o==null||o(b)};return e.jsx(K.Provider,{value:{checked:p,disabled:t},children:e.jsxs("label",{className:x("inline-flex cursor-pointer items-center gap-2",t&&"cursor-not-allowed opacity-50",X),...Y,children:[e.jsx("input",{type:"checkbox",checked:p,onChange:P,disabled:t,className:"sr-only"}),h]})})},Q=()=>{const{checked:a}=M();return e.jsx("span",{className:x("relative inline-flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out","h-7 w-12",a?"bg-gray-600":"bg-gray-200"),children:e.jsx("span",{className:x("pointer-events-none inline-block rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out","h-5 w-5",a?"translate-x-5":"translate-x-0")})})},U=({children:a,typography:r="fixed-16",textColor:o="gray-700",...t})=>{const{disabled:h}=M();return e.jsx(ee,{typography:r,textColor:h?"gray-400":o,...t,children:a})};T.displayName="Toggle";Q.displayName="Toggle.Switch";U.displayName="Toggle.Label";const s=Object.assign(T,{Switch:Q,Label:U});T.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const le={title:"Components/Toggle",component:s,parameters:{layout:"centered",backgrounds:{default:"white",values:[{name:"white",value:"#ffffff"},{name:"gray",value:"#f3f4f6"},{name:"dark",value:"#1f2937"}]}},tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},l={render:()=>e.jsxs(s,{children:[e.jsx(s.Switch,{}),e.jsx(s.Label,{children:"알림 받기"})]})},n={render:()=>e.jsxs(s,{children:[e.jsx(s.Label,{children:"라벨이 왼쪽에"}),e.jsx(s.Switch,{})]})},c={render:()=>e.jsxs(s,{children:[e.jsx(s.Switch,{}),e.jsx(s.Label,{children:"라벨이 오른쪽에"})]})},g={render:()=>e.jsxs(s,{className:"flex-col items-start gap-3",children:[e.jsx(s.Label,{children:"세로 배치"}),e.jsx(s.Switch,{})]})},d={render:()=>e.jsxs(s,{className:"w-64 justify-between",children:[e.jsx(s.Label,{children:"알림 설정"}),e.jsx(s.Switch,{})]})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{children:e.jsx(s.Switch,{})}),e.jsx(s,{defaultChecked:!0,children:e.jsx(s.Switch,{})})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(s,{disabled:!0,children:[e.jsx(s.Switch,{}),e.jsx(s.Label,{children:"비활성화 (Off)"})]}),e.jsxs(s,{disabled:!0,defaultChecked:!0,children:[e.jsx(s.Switch,{}),e.jsx(s.Label,{children:"비활성화 (On)"})]})]})},u={render:()=>{const[a,r]=H.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(s,{checked:a,onCheckedChange:r,children:[e.jsx(s.Switch,{}),e.jsx(s.Label,{children:"알림 설정"})]}),e.jsxs("p",{className:"text-sm text-gray-500",children:["현재 상태: ",a?"켜짐":"꺼짐"]}),e.jsx("button",{onClick:()=>r(!a),className:"rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600",children:"토글 전환"})]})}};var f,j,w;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Toggle>
      <Toggle.Switch />
      <Toggle.Label>알림 받기</Toggle.Label>
    </Toggle>
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var S,L,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Toggle>
      <Toggle.Label>라벨이 왼쪽에</Toggle.Label>
      <Toggle.Switch />
    </Toggle>
}`,...(y=(L=n.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var k,C,v;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Toggle>
      <Toggle.Switch />
      <Toggle.Label>라벨이 오른쪽에</Toggle.Label>
    </Toggle>
}`,...(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var N,R,O;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Toggle className="flex-col items-start gap-3">
      <Toggle.Label>세로 배치</Toggle.Label>
      <Toggle.Switch />
    </Toggle>
}`,...(O=(R=g.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var q,D,E;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Toggle className="w-64 justify-between">
      <Toggle.Label>알림 설정</Toggle.Label>
      <Toggle.Switch />
    </Toggle>
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var _,B,I;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Toggle>
        <Toggle.Switch />
      </Toggle>
      <Toggle defaultChecked>
        <Toggle.Switch />
      </Toggle>
    </div>
}`,...(I=(B=i.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var W,V,z;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(z=(V=m.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var A,F,G;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const ne=["Default","LabelLeft","LabelRight","CustomLayout","SpaceBetween","WithoutLabel","Disabled","Controlled"];export{u as Controlled,g as CustomLayout,l as Default,m as Disabled,n as LabelLeft,c as LabelRight,d as SpaceBetween,i as WithoutLabel,ne as __namedExportsOrder,le as default};
