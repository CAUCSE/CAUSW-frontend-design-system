import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as B,R as M}from"./iframe-IAXBoR6K.js";import{T as Y}from"./Text-Cqrm9tn1.js";import{m as V}from"./mergeStyles-Cx6ulRiC.js";import"./preload-helper-Dp1pzeXC.js";const z=M.createContext(null),A=()=>{const r=M.useContext(z);if(!r)throw new Error("Checkbox 서브 컴포넌트는 <Checkbox> 컴포넌트 내부에서 사용해야 합니다. ex) <Checkbox><Checkbox.Indicator /></Checkbox>");return r},C=({checked:r,defaultChecked:o=!1,onCheckedChange:s,disabled:a,children:b,className:J,...K})=>{const[Q,U]=B.useState(o),k=r!==void 0?r:Q,X=()=>{if(a)return;const u=!k;r===void 0&&U(u),s==null||s(u)};return e.jsx(z.Provider,{value:{checked:k,disabled:a},children:e.jsxs("label",{className:V("inline-flex cursor-pointer items-center gap-2",a&&"cursor-not-allowed opacity-50",J),...K,children:[e.jsx("input",{type:"checkbox",checked:k,onChange:X,disabled:a,className:"sr-only"}),b]})})},F=()=>{const{checked:r}=A();return r?e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",className:"flex-shrink-0",children:[e.jsx("rect",{width:"18",height:"18",rx:"4",fill:"#1E2939"}),e.jsx("path",{d:"M5 9.08333L7.94737 12L13 7",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}):e.jsx("span",{className:V("flex-shrink-0","aspect-square h-[18px] w-[18px]","rounded border-2 border-gray-200 bg-white")})},H=({children:r,typography:o="body-sm",textColor:s="gray-600",...a})=>{const{disabled:b}=A();return e.jsx(Y,{typography:o,textColor:b?"gray-400":s,...a,children:r})};C.displayName="Checkbox";F.displayName="Checkbox.Indicator";H.displayName="Checkbox.Label";const c=Object.assign(C,{Indicator:F,Label:H});C.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const re={title:"Components/Checkbox",component:c,parameters:{layout:"centered",backgrounds:{default:"white",values:[{name:"white",value:"#ffffff"},{name:"gray",value:"#f3f4f6"},{name:"dark",value:"#1f2937"}]}},tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},n={render:()=>e.jsxs(c,{children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"동의합니다"})]})},t={render:()=>e.jsxs(c,{defaultChecked:!0,children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"선택됨"})]})},d={render:()=>e.jsxs(c,{children:[e.jsx(c.Label,{children:"라벨이 왼쪽에"}),e.jsx(c.Indicator,{})]})},l={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(c,{children:e.jsx(c.Indicator,{})}),e.jsx(c,{defaultChecked:!0,children:e.jsx(c.Indicator,{})})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(c,{disabled:!0,children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"비활성화 (Off)"})]}),e.jsxs(c,{disabled:!0,defaultChecked:!0,children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"비활성화 (On)"})]})]})},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs(c,{children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"옵션 1"})]}),e.jsxs(c,{children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"옵션 2"})]}),e.jsxs(c,{children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"옵션 3"})]})]})},h={render:()=>{const[r,o]=B.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(c,{checked:r,onCheckedChange:o,children:[e.jsx(c.Indicator,{}),e.jsx(c.Label,{children:"이용약관에 동의합니다"})]}),e.jsxs("p",{className:"text-sm text-gray-500",children:["현재 상태: ",r?"동의함":"동의 안 함"]}),e.jsx("button",{onClick:()=>o(!r),className:"rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600",children:"토글"})]})}};var m,p,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Checkbox>
      <Checkbox.Indicator />
      <Checkbox.Label>동의합니다</Checkbox.Label>
    </Checkbox>
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var j,g,L;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Checkbox defaultChecked>
      <Checkbox.Indicator />
      <Checkbox.Label>선택됨</Checkbox.Label>
    </Checkbox>
}`,...(L=(g=t.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var v,I,y;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Checkbox>
      <Checkbox.Label>라벨이 왼쪽에</Checkbox.Label>
      <Checkbox.Indicator />
    </Checkbox>
}`,...(y=(I=d.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var N,w,S;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Checkbox>
        <Checkbox.Indicator />
      </Checkbox>
      <Checkbox defaultChecked>
        <Checkbox.Indicator />
      </Checkbox>
    </div>
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var R,T,O;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(T=i.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var q,E,D;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(D=(E=x.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var _,W,G;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(W=h.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const oe=["Default","Checked","LabelLeft","WithoutLabel","Disabled","CheckboxGroup","Controlled"];export{x as CheckboxGroup,t as Checked,h as Controlled,n as Default,i as Disabled,d as LabelLeft,l as WithoutLabel,oe as __namedExportsOrder,re as default};
