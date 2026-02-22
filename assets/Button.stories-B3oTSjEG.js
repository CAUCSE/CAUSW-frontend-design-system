import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as t}from"./Button-CPCI6eBk.js";import{r as I}from"./iframe-wPdtzJUx.js";import"./index-Ca4j9_td.js";import"./Primitive-BC933kmg.js";import"./index-QxABgTxX.js";import"./mergeStyles-Dw1fI3XI.js";import"./preload-helper-Dp1pzeXC.js";const c=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 21s-7-4.35-10-9c-2-3.5.5-8 5-8 2.5 0 4 2 5 3 1-1 2.5-3 5-3 4.5 0 7 4.5 5 8-3 4.65-10 9-10 9z"})}),b=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2 .6 3.1.6.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C9.7 22 2 14.3 2 4.5c0-.6.4-1 1-1H6.5c.6 0 1 .4 1 1 0 1.1.2 2.1.6 3.1.1.4 0 .9-.2 1.2l-2.3 2z"})}),y=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12l4-4h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"})}),z={title:"Components/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{color:"gray",children:"text"}),e.jsx(t,{color:"red",children:"text"}),e.jsx(t,{color:"white",children:"text"})]})},o={render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs(t,{color:"white",children:[e.jsx(b,{}),"전화"]}),e.jsxs(t,{color:"white",children:[e.jsx(y,{}),"메시지"]})]})},n={name:"Active",render:()=>{const[a,f]=I.useState(!1);return e.jsxs(t,{color:a?"red":"gray",onClick:()=>f(w=>!w),children:[e.jsx(c,{}),"좋아요 ",a?1:0]})}},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(t,{disabled:!0,color:"gray",children:[e.jsx(c,{}),"좋아요 0"]}),e.jsxs(t,{disabled:!0,color:"red",children:[e.jsx(c,{}),"좋아요 1"]}),e.jsx(t,{disabled:!0,color:"white",children:"변경"})]})};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Button color="gray">text</Button>
      <Button color="red">text</Button>
      <Button color="white">text</Button>
    </div>
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,x,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(x=o.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var p,h,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Active',
  render: () => {
    const [active, setActive] = useState(false);
    return <Button color={active ? 'red' : 'gray'} onClick={() => setActive(prev => !prev)}>
        <HeartIcon />
        좋아요 {active ? 1 : 0}
      </Button>;
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var B,g,j;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Button disabled color="gray">
        <HeartIcon />
        좋아요 0
      </Button>
      <Button disabled color="red">
        <HeartIcon />
        좋아요 1
      </Button>
      <Button disabled color="white">
        변경
      </Button>
    </div>
}`,...(j=(g=s.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};const E=["Default","WithIcon","LikeButtons","Disabled"];export{r as Default,s as Disabled,n as LikeButtons,o as WithIcon,E as __namedExportsOrder,z as default};
