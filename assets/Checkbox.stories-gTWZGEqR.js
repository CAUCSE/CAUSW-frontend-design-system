import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as z,R as A}from"./iframe-Dr7Y0Ehb.js";import{t as Z}from"./index-CKBcBfht.js";import{T as $}from"./Text-CME5GUr3.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-CJvxXMcu.js";const p=Z({slots:{root:"inline-flex cursor-pointer items-center gap-2",indicator:"flex aspect-square h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded border-2 transition-colors",indicatorIcon:"h-2.5 w-2.5 transition-opacity duration-200",label:""},variants:{checked:{true:{indicator:"border-gray-800 bg-gray-800",indicatorIcon:"text-white opacity-100"},false:{indicator:"border-gray-200 bg-white",indicatorIcon:"opacity-0"}},disabled:{true:{root:"cursor-not-allowed opacity-50",label:"text-gray-600"}}}}),F=A.createContext(null),H=()=>{const o=A.useContext(F);if(!o)throw new Error("Checkbox 서브 컴포넌트는 <Checkbox> 컴포넌트 내부에서 사용해야 합니다. ex) <Checkbox><Checkbox.Indicator /></Checkbox>");return o},m=({checked:o,defaultChecked:r=!1,onCheckedChange:a,disabled:s,children:b,className:k,...u})=>{const[Q,U]=z.useState(r),C=o!==void 0?o:Q,X=()=>{if(s)return;const f=!C;o===void 0&&U(f),a==null||a(f)},{root:Y}=p({disabled:s});return e.jsx(F.Provider,{value:{checked:C,disabled:s},children:e.jsxs("label",{className:Y({className:k}),...u,children:[e.jsx("input",{type:"checkbox",checked:C,onChange:X,disabled:s,className:"sr-only"}),b]})})},J=()=>{const{checked:o}=H(),{indicator:r,indicatorIcon:a}=p({checked:o});return e.jsx("span",{className:r(),children:e.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a(),children:e.jsx("path",{d:"M11.6666 3.5L5.24992 9.91667L2.33325 7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})},K=({children:o,typography:r="body-16-regular",textColor:a="gray-600",className:s,...b})=>{const{disabled:k}=H(),{label:u}=p({disabled:k});return e.jsx($,{typography:r,textColor:a,className:u({className:s}),...b,children:o})};m.displayName="Checkbox";J.displayName="Checkbox.Indicator";K.displayName="Checkbox.Label";const c=Object.assign(m,{Indicator:J,Label:K});m.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit","CheckboxVariants"]};const se={title:"Components/Checkbox",component:c,parameters:{layout:"centered",backgrounds:{default:"white",values:[{name:"white",value:"#ffffff"},{name:"gray",value:"#f3f4f6"},{name:"dark",value:"#1f2937"}]}},tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},t={render:()=>e.jsxs(c,{children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"동의합니다"})]})},n={render:()=>e.jsxs(c,{defaultChecked:!0,children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"선택됨"})]})},d={render:()=>e.jsxs(c,{children:[e.jsx(c.Label,{children:"라벨이 왼쪽에"}),e.jsx(c.Indicator,{})]})},l={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(c,{children:e.jsx(c.Indicator,{})}),e.jsx(c,{defaultChecked:!0,children:e.jsx(c.Indicator,{})})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(c,{disabled:!0,children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"비활성화 (Off)"})]}),e.jsxs(c,{disabled:!0,defaultChecked:!0,children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"비활성화 (On)"})]})]})},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs(c,{children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"옵션 1"})]}),e.jsxs(c,{children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"옵션 2"})]}),e.jsxs(c,{children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"옵션 3"})]})]})},h={render:()=>{const[o,r]=z.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(c,{checked:o,onCheckedChange:r,children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"이용약관에 동의합니다"})]}),e.jsxs("p",{className:"text-sm text-gray-500",children:["현재 상태: ",o?"동의함":"동의 안 함"]}),e.jsx("button",{onClick:()=>r(!o),className:"rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600",children:"토글"})]})}};var j,g,L;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Checkbox>
      <Checkbox.Indicator />
      <Checkbox.Label>동의합니다</Checkbox.Label>
    </Checkbox>
}`,...(L=(g=t.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var I,v,y;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Checkbox defaultChecked>
      <Checkbox.Indicator />
      <Checkbox.Label>선택됨</Checkbox.Label>
    </Checkbox>
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var N,w,S;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Checkbox>
      <Checkbox.Label>라벨이 왼쪽에</Checkbox.Label>
      <Checkbox.Indicator />
    </Checkbox>
}`,...(S=(w=d.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var R,O,T;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Checkbox>
        <Checkbox.Indicator />
      </Checkbox>
      <Checkbox defaultChecked>
        <Checkbox.Indicator />
      </Checkbox>
    </div>
}`,...(T=(O=l.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var q,D,E;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var _,W,G;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(W=x.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var V,B,M;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(B=h.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const te=["Default","Checked","LabelLeft","WithoutLabel","Disabled","CheckboxGroup","Controlled"];export{x as CheckboxGroup,n as Checked,h as Controlled,t as Default,i as Disabled,d as LabelLeft,l as WithoutLabel,te as __namedExportsOrder,se as default};
