import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{m as N}from"./mergeStyles-Cx6ulRiC.js";import{r as H}from"./iframe-BugSrr0f.js";import"./preload-helper-Dp1pzeXC.js";const V="inline-flex items-center justify-center gap-[0.375rem] whitespace-nowrap rounded-[0.5rem] transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none",q={sm:"min-w-[3rem] h-[1.875rem] px-[0.5rem] typo-body2-sm-point",md:"h-[2.375rem] px-[0.75rem] typo-body2-sm-point"},m={white:{base:"bg-white text-gray-400",active:"bg-white text-gray-400"},gray:{base:"bg-gray-100 text-gray-400",active:"bg-gray-100 text-gray-400"},red:{base:"bg-red-100 text-red-400",active:"bg-red-100 text-red-400"}};function z({size:r,color:a,active:o=!1,disabled:d=!1,fullWidth:s=!1}){return N(V,d?"cursor-not-allowed pointer-events-none":"cursor-pointer",q[r],o?m[a].active:m[a].base,s&&"w-full")}function t({size:r="md",color:a="gray",active:o=!1,fullWidth:d=!1,disabled:s=!1,children:S,...C}){return e.jsx("button",{className:z({size:r,color:a,active:o,disabled:s,fullWidth:d}),disabled:s,...C,children:S})}t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'white' | 'gray' | 'red'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'red'"}]},description:"",defaultValue:{value:"'gray'",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["ComponentProps"]};const u=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 21s-7-4.35-10-9c-2-3.5.5-8 5-8 2.5 0 4 2 5 3 1-1 2.5-3 5-3 4.5 0 7 4.5 5 8-3 4.65-10 9-10 9z"})}),A=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2 .6 3.1.6.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C9.7 22 2 14.3 2 4.5c0-.6.4-1 1-1H6.5c.6 0 1 .4 1 1 0 1.1.2 2.1.6 3.1.1.4 0 .9-.2 1.2l-2.3 2z"})}),M=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12l4-4h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"})}),E={title:"Components/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"]},n={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{color:"gray",children:"text"}),e.jsx(t,{color:"red",active:!0,children:"text"}),e.jsx(t,{color:"white",children:"text"})]})},l={render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs(t,{color:"white",children:[e.jsx(A,{}),"전화"]}),e.jsxs(t,{color:"white",children:[e.jsx(M,{}),"메시지"]})]})},c={name:"Active",render:()=>{const[r,a]=H.useState(!1);return e.jsxs(t,{color:r?"red":"gray",active:r,onClick:()=>a(o=>!o),children:[e.jsx(u,{}),"좋아요 ",r?1:0]})}},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(t,{disabled:!0,color:"gray",children:[e.jsx(u,{}),"좋아요 0"]}),e.jsxs(t,{disabled:!0,color:"red",active:!0,children:[e.jsx(u,{}),"좋아요 1"]}),e.jsx(t,{disabled:!0,color:"white",children:"변경"})]})};var p,x,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Button color="gray">text</Button>
      <Button color="red" active>
        text
      </Button>
      <Button color="white">text</Button>
    </div>
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,h,g;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center gap-2">
      <Button color="white">
        <PhoneIcon />
        전화
      </Button>

      <Button color="white">
        <MessageIcon />
        메시지
      </Button>
    </div>
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,b,j;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Active',
  render: () => {
    const [active, setActive] = useState(false);
    return <Button color={active ? 'red' : 'gray'} active={active} onClick={() => setActive(prev => !prev)}>
        <HeartIcon />
        좋아요 {active ? 1 : 0}
      </Button>;
  }
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,B,I;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Button disabled color="gray">
        <HeartIcon />
        좋아요 0
      </Button>
      <Button disabled color="red" active>
        <HeartIcon />
        좋아요 1
      </Button>
      <Button disabled color="white">
        변경
      </Button>
    </div>
}`,...(I=(B=i.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const P=["Default","WithIcon","LikeButtons","Disabled"];export{n as Default,i as Disabled,c as LikeButtons,l as WithIcon,P as __namedExportsOrder,E as default};
