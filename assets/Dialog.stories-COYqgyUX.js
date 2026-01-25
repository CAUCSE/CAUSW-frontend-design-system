import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./iframe-DT-_7YRs.js";import{R as X,C as Y,a as Z,P as ee,b as K,O as q}from"./index-CJl-XiJf.js";import{t as te}from"./index-CKBcBfht.js";import{c as p}from"./converter-Cub1Z0Tz.js";import{C as s}from"./CTAButton-DWCcpy26.js";import{T as r}from"./Text-DeZ-7JPx.js";import{V as c}from"./VStack-BQidRnR5.js";import{T as h}from"./Toggle--E2PZj2I.js";import{H as i}from"./HStack-BL9EqjsC.js";import{F as k}from"./Field-BtIrhTJz.js";import{T as w}from"./TextArea-BjAwTtbX.js";import{B as ne}from"./Button-CmNzeGj9.js";import{F as oe}from"./Flex-qHzKskwT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DHTHsAbY.js";import"./index-AVE-RrXy.js";import"./index-D2pqaLwv.js";import"./index-DJqLtpSU.js";import"./index-CXYFSIGU.js";import"./index-BGA_72qh.js";import"./bundle-mjs-CJvxXMcu.js";import"./mergeStyles-B83jKakq.js";import"./Primitive-COH1LJud.js";import"./Stack-Czr2L4qC.js";function re(t,a){const l={},d={};for(const o in t)a.includes(o)?l[o]=t[o]:d[o]=t[o];return[l,d]}const G=te({slots:{overlay:"fixed inset-0 z-modal bg-black/50 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",content:"fixed left-[50%] top-[50%] z-modal grid w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-white p-6 shadow-lg rounded-lg data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out",title:"text-lg font-semibold leading-none tracking-tight",description:"text-sm text-gray-500",close:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500"},variants:{fullscreen:{true:{content:"inset-0 top-0 left-0 w-full h-full max-w-none translate-x-0 translate-y-0 rounded-none sm:rounded-none data-[state=open]:slide-in-from-bottom-0 data-[state=closed]:slide-out-to-bottom-0"}}}}),le=["maxWidth","minWidth","width","minHeight","maxHeight","fullscreen"],ae=({...t})=>({width:t.width?p(t.width):void 0,maxWidth:t.maxWidth?p(t.maxWidth):void 0,minWidth:t.minWidth?p(t.minWidth):void 0,maxHeight:t.maxHeight?p(t.maxHeight):void 0,minHeight:t.minHeight?p(t.minHeight):void 0}),se=X,ie=Z,ce=ee,de=Y,J=({className:t,...a})=>{const{overlay:l}=G();return e.jsx(q,{className:l({className:t}),...a})};J.displayName=q.displayName;const Q=({className:t,children:a,...l})=>{const[d,o]=re(l,le),m=ae(d),{content:u}=G({fullscreen:d.fullscreen});return e.jsxs(ce,{children:[e.jsx(J,{}),e.jsx(K,{className:u({className:t}),style:{...m,...l.style},...o,children:a})]})};Q.displayName=K.displayName;const n=Object.assign(se,{Trigger:ie,Content:Q,Close:de}),Me={title:"Components/Dialog",component:n,parameters:{layout:"centered",docs:{description:{component:"`Dialog`는 `modal` 형태의 웹 컴포넌트입니다. 헤더와 푸터 같은 영역이 정해져 있지 않습니다.\n\n`Dialog.Content` 내부에 자유롭게 `VStack`, `HStack`, `Text`, `Button` 등을 조합하여 원하는 레이아웃을 구성할 수 있습니다."}}},tags:["autodocs"],argTypes:{width:{control:{type:"number"},description:"Dialog width (px)",table:{type:{summary:"number"},category:"Style"}},minWidth:{control:{type:"number"},description:"Minimum width (px)",table:{type:{summary:"number"},category:"Style"}},maxWidth:{control:{type:"number"},description:"Maximum width (px)",table:{type:{summary:"number"},category:"Style"}},minHeight:{control:{type:"number"},description:"Minimum height (px)",table:{type:{summary:"number"},category:"Style"}},maxHeight:{control:{type:"number"},description:"Maximum height (px)",table:{type:{summary:"number"},category:"Style"}},fullscreen:{control:{type:"boolean"},description:"Whether the dialog should be fullscreen",table:{type:{summary:"boolean"},category:"Style"}}}},x={args:{width:void 0,minWidth:void 0,maxWidth:void 0,minHeight:void 0,maxHeight:void 0},render:t=>e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx(s,{color:"blue",children:"Open Dialog (Playground)"})}),e.jsx(n.Content,{...t,children:e.jsxs("div",{className:"flex h-32 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 p-4 text-center",children:[e.jsx(r,{typography:"body-16-regular",textColor:"gray-400",children:"Arbitrary content area"}),e.jsx(r,{typography:"body-16-regular",textColor:"gray-400",children:"(Use VStack, HStack, etc.)"})]})})]})},y={render:()=>e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx(s,{color:"blue",children:"Open Toggle Dialog"})}),e.jsx(n.Content,{maxWidth:420,children:e.jsxs(c,{gap:"lg",children:[e.jsx(r,{typography:"subtitle-20-bold",children:"Privacy Settings"}),e.jsxs(c,{gap:"md",children:[e.jsx(h,{className:"w-full",children:e.jsxs(i,{justify:"between",align:"center",className:"w-full",children:[e.jsx(h.Label,{children:"Phone Number"}),e.jsx(h.Switch,{})]})}),e.jsx(h,{className:"w-full",children:e.jsxs(i,{justify:"between",align:"center",className:"w-full",children:[e.jsx(h.Label,{children:"Message Visibility"}),e.jsx(h.Switch,{})]})})]}),e.jsxs(i,{gap:"sm",children:[e.jsx(n.Close,{asChild:!0,children:e.jsx(s,{color:"light",className:"w-1/2",children:"Close"})}),e.jsx(s,{color:"dark",className:"w-1/2",children:"Save"})]})]})})]})},b={render:()=>{const[t,a]=g.useState(!1);return e.jsxs(n,{open:t,onOpenChange:a,children:[e.jsx(n.Trigger,{children:e.jsx(s,{color:"red",children:"Open Controlled Dialog"})}),e.jsx(n.Content,{width:400,children:e.jsxs(c,{gap:"lg",children:[e.jsxs(c,{gap:"sm",children:[e.jsx(r,{typography:"title-30-bold",children:"Controlled Dialog"}),e.jsx(r,{typography:"body-18-medium",textColor:"gray-500",children:"This dialog is controlled by external React state."})]}),e.jsx(i,{justify:"end",gap:"sm",children:e.jsx(s,{color:"light",onClick:()=>a(!1),children:"Close using State"})})]})})]})}},f={render:()=>{const[t,a]=g.useState(!1),[l,d]=g.useState(!0),o=g.useRef(!1);g.useEffect(()=>{t&&(o.current=!1)},[t]);const m=()=>{o.current=!0,a(!1)};return e.jsxs(n,{open:t,onOpenChange:u=>{u||(o.current=!0),a(u)},children:[e.jsx(n.Trigger,{children:e.jsx(s,{color:"red",children:"Open Prevent Close Dialog"})}),e.jsx(n.Content,{width:400,onPointerDownOutside:u=>{o.current||l&&(u.preventDefault(),setTimeout(()=>{window.confirm("저장하지 않은 변경사항이 있습니다. 정말 닫으시겠습니까?")&&m()},0))},children:e.jsxs(c,{gap:"lg",children:[e.jsxs(c,{gap:"sm",children:[e.jsx(r,{typography:"title-30-bold",children:"Prevent Closing"}),e.jsx(r,{typography:"body-18-medium",textColor:"gray-500",children:"Try clicking outside the dialog."})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-yellow-200 bg-yellow-50 p-2",children:[e.jsx("input",{type:"checkbox",id:"unsaved-changes-toggle",checked:l,onChange:u=>d(u.target.checked),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),e.jsx("label",{htmlFor:"unsaved-changes-toggle",className:"cursor-pointer text-sm font-medium text-yellow-800",children:"Unsaved changes active"})]}),e.jsx(r,{typography:"body-16-regular",textColor:"gray-400",children:"If checked, clicking outside will trigger a confirmation alert instead of closing immediately."}),e.jsx(i,{justify:"end",gap:"sm",children:e.jsx(s,{color:"light",onClick:m,children:"Close"})})]})})]})}},C={render:()=>{const[t,a]=g.useState(!1),[l,d]=g.useState(null);return e.jsxs(n,{open:t,onOpenChange:a,children:[e.jsx(n.Trigger,{children:e.jsx(s,{color:"blue",children:"Open Feedback Popup"})}),e.jsx(n.Content,{width:700,className:"max-w-none gap-0 rounded-[16px] bg-gray-100 p-[32px] sm:rounded-[16px]","aria-describedby":void 0,children:e.jsxs(c,{className:"w-full",children:[e.jsxs(i,{justify:"between",align:"center",className:"mb-[39px] w-full",children:[e.jsx(r,{typography:"title-30-bold",children:"건의/오류 제보하기"}),e.jsx(n.Close,{asChild:!0,children:e.jsx("button",{className:"text-gray-500 transition-colors hover:text-gray-700",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})})]}),e.jsx(r,{typography:"body-18-medium",children:"크자회 서비스에 관한 의견을 자유롭게 남겨주세요"}),e.jsxs(c,{className:"mb-[24px] w-full rounded-[12px] bg-white p-[24px]",children:[e.jsx(r,{typography:"body-18-medium",children:"크자회 앱 사용에 대한 전반적인 만족도를 알려주세요."}),e.jsx(i,{justify:"center",gap:"md",children:[1,2,3,4,5].map(o=>e.jsx("button",{onClick:()=>d(o),className:`flex h-[60px] w-[60px] items-center justify-center rounded-[12px] border text-[16px] transition-all ${l===o?"border-blue-500 bg-blue-50 font-bold text-blue-600":"border-transparent bg-gray-100 text-gray-500 hover:bg-gray-200"}`,children:o},o))}),e.jsxs(i,{justify:"between",children:[e.jsx(r,{typography:"body-16-regular",textColor:"gray-400",children:"매우 아쉬움"}),e.jsx(r,{typography:"body-16-regular",textColor:"gray-400",children:"매우 만족"})]})]}),e.jsxs(k,{children:[e.jsx(k.Label,{children:"크자회에 대한 건의나 오류를 자유롭게 남겨주세요. (선택)"}),e.jsxs(w,{children:[e.jsx(w.Input,{placeholder:"답변을 적어주세요."}),e.jsx(w.Footer,{children:e.jsx(ne,{children:"파일 첨부"})})]})]}),e.jsx(oe,{justify:"center",children:e.jsx(s,{color:"blue",children:"제출하기"})})]})})]})}},j={render:()=>e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx(s,{color:"blue",children:"Open Fullscreen Dialog"})}),e.jsx(n.Content,{fullscreen:!0,children:e.jsxs(c,{gap:"lg",className:"h-full",children:[e.jsxs(i,{justify:"between",align:"center",children:[e.jsx(r,{typography:"title-48-bold",children:"Fullscreen Dialog"}),e.jsx(n.Close,{asChild:!0,children:e.jsx(s,{color:"light",children:"Close"})})]}),e.jsx("div",{className:"flex flex-1 items-center justify-center rounded-md bg-gray-100 text-gray-400",children:"Full Screen Content"})]})})]})},T={render:()=>{const[t,a]=g.useState(!1);return g.useEffect(()=>{const l=()=>{a(window.innerWidth<768)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]),e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx(s,{color:"blue",children:"Open Responsive Fullscreen"})}),e.jsx(n.Content,{fullscreen:t,width:t?void 0:700,children:e.jsxs(c,{gap:"lg",className:"h-full",children:[e.jsxs(i,{justify:"between",align:"center",children:[e.jsx(r,{typography:"title-48-bold",children:"Responsive Dialog"}),e.jsx(n.Close,{asChild:!0,children:e.jsx(s,{color:"light",children:"Close"})})]}),e.jsx("div",{className:"flex flex-1 items-center justify-center rounded-md bg-gray-100 p-4 text-gray-400",children:e.jsxs(c,{align:"center",gap:"sm",children:[e.jsx(r,{typography:"subtitle-20-bold",children:"Resize the window!"}),e.jsxs(r,{typography:"body-16-regular",textColor:"gray-500",children:["Current Mode:"," ",t?"Fullscreen (Mobile)":"Modal (Desktop)"]})]})}),e.jsx(i,{justify:"end",className:"md:hidden",children:e.jsx(n.Close,{asChild:!0,children:e.jsx(s,{color:"blue",className:"w-full",children:"Done"})})})]})})]})}};var S,D,v;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    width: undefined,
    minWidth: undefined,
    maxWidth: undefined,
    minHeight: undefined,
    maxHeight: undefined
  },
  render: args => <Dialog>
      <Dialog.Trigger>
        <CTAButton color="blue">Open Dialog (Playground)</CTAButton>
      </Dialog.Trigger>
      <Dialog.Content {...args}>
        <div className="flex h-32 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 p-4 text-center">
          <Text typography="body-16-regular" textColor="gray-400">
            Arbitrary content area
          </Text>
          <Text typography="body-16-regular" textColor="gray-400">
            (Use VStack, HStack, etc.)
          </Text>
        </div>
      </Dialog.Content>
    </Dialog>
}`,...(v=(D=x.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var N,H,A;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Dialog>
      <Dialog.Trigger>
        <CTAButton color="blue">Open Toggle Dialog</CTAButton>
      </Dialog.Trigger>
      <Dialog.Content maxWidth={420}>
        <VStack gap="lg">
          <Text typography="subtitle-20-bold">Privacy Settings</Text>

          <VStack gap="md">
            <Toggle className="w-full">
              <HStack justify="between" align="center" className="w-full">
                <Toggle.Label>Phone Number</Toggle.Label>
                <Toggle.Switch />
              </HStack>
            </Toggle>
            <Toggle className="w-full">
              <HStack justify="between" align="center" className="w-full">
                <Toggle.Label>Message Visibility</Toggle.Label>
                <Toggle.Switch />
              </HStack>
            </Toggle>
          </VStack>

          <HStack gap="sm">
            <Dialog.Close asChild>
              <CTAButton color="light" className="w-1/2">
                Close
              </CTAButton>
            </Dialog.Close>
            <CTAButton color="dark" className="w-1/2">
              Save
            </CTAButton>
          </HStack>
        </VStack>
      </Dialog.Content>
    </Dialog>
}`,...(A=(H=y.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var O,B,R;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Dialog open={open} onOpenChange={setOpen}>
        <Dialog.Trigger>
          <CTAButton color="red">Open Controlled Dialog</CTAButton>
        </Dialog.Trigger>
        <Dialog.Content width={400}>
          <VStack gap="lg">
            <VStack gap="sm">
              <Text typography="title-30-bold">Controlled Dialog</Text>
              <Text typography="body-18-medium" textColor="gray-500">
                This dialog is controlled by external React state.
              </Text>
            </VStack>

            <HStack justify="end" gap="sm">
              <CTAButton color="light" onClick={() => setOpen(false)}>
                Close using State
              </CTAButton>
            </HStack>
          </VStack>
        </Dialog.Content>
      </Dialog>;
  }
}`,...(R=(B=b.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var F,V,M;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(true);
    const isClosingRef = React.useRef(false);

    // Reset closing ref when dialog opens
    React.useEffect(() => {
      if (open) {
        isClosingRef.current = false;
      }
    }, [open]);
    const handleClose = () => {
      isClosingRef.current = true;
      setOpen(false);
    };
    return <Dialog open={open} onOpenChange={newOpen => {
      if (!newOpen) {
        isClosingRef.current = true;
      }
      setOpen(newOpen);
    }}>
        <Dialog.Trigger>
          <CTAButton color="red">Open Prevent Close Dialog</CTAButton>
        </Dialog.Trigger>
        <Dialog.Content width={400} onPointerDownOutside={e => {
        // Skip if already closing
        if (isClosingRef.current) return;
        if (hasUnsavedChanges) {
          e.preventDefault();
          // Use setTimeout to avoid conflict with immediate events
          setTimeout(() => {
            if (window.confirm('저장하지 않은 변경사항이 있습니다. 정말 닫으시겠습니까?')) {
              handleClose();
            }
          }, 0);
        }
      }}>
          <VStack gap="lg">
            <VStack gap="sm">
              <Text typography="title-30-bold">Prevent Closing</Text>
              <Text typography="body-18-medium" textColor="gray-500">
                Try clicking outside the dialog.
              </Text>
            </VStack>

            <div className="flex items-center gap-2 rounded border border-yellow-200 bg-yellow-50 p-2">
              <input type="checkbox" id="unsaved-changes-toggle" checked={hasUnsavedChanges} onChange={e => setHasUnsavedChanges(e.target.checked)} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="unsaved-changes-toggle" className="cursor-pointer text-sm font-medium text-yellow-800">
                Unsaved changes active
              </label>
            </div>
            <Text typography="body-16-regular" textColor="gray-400">
              If checked, clicking outside will trigger a confirmation alert
              instead of closing immediately.
            </Text>

            <HStack justify="end" gap="sm">
              <CTAButton color="light" onClick={handleClose}>
                Close
              </CTAButton>
            </HStack>
          </VStack>
        </Dialog.Content>
      </Dialog>;
  }
}`,...(M=(V=f.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var P,W,L;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [rating, setRating] = React.useState<number | null>(null);
    return <Dialog open={open} onOpenChange={setOpen}>
        <Dialog.Trigger>
          <CTAButton color="blue">Open Feedback Popup</CTAButton>
        </Dialog.Trigger>
        <Dialog.Content width={700} className="max-w-none gap-0 rounded-[16px] bg-gray-100 p-[32px] sm:rounded-[16px]" aria-describedby={undefined}>
          <VStack className="w-full">
            {/* Header */}
            <HStack justify="between" align="center" className="mb-[39px] w-full">
              <Text typography="title-30-bold">건의/오류 제보하기</Text>
              <Dialog.Close asChild>
                <button className="text-gray-500 transition-colors hover:text-gray-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </Dialog.Close>
            </HStack>

            <Text typography="body-18-medium">
              크자회 서비스에 관한 의견을 자유롭게 남겨주세요
            </Text>

            {/* Satisfaction Survey */}
            <VStack className="mb-[24px] w-full rounded-[12px] bg-white p-[24px]">
              <Text typography="body-18-medium">
                크자회 앱 사용에 대한 전반적인 만족도를 알려주세요.
              </Text>

              <HStack justify="center" gap="md">
                {[1, 2, 3, 4, 5].map(idx => <button key={idx} onClick={() => setRating(idx)} className={\`flex h-[60px] w-[60px] items-center justify-center rounded-[12px] border text-[16px] transition-all \${rating === idx ? 'border-blue-500 bg-blue-50 font-bold text-blue-600' : 'border-transparent bg-gray-100 text-gray-500 hover:bg-gray-200'}\`}>
                    {idx}
                  </button>)}
              </HStack>
              <HStack justify="between">
                <Text typography="body-16-regular" textColor="gray-400">
                  매우 아쉬움
                </Text>
                <Text typography="body-16-regular" textColor="gray-400">
                  매우 만족
                </Text>
              </HStack>
            </VStack>

            {/* Text Feedback */}
            <Field>
              <Field.Label>
                크자회에 대한 건의나 오류를 자유롭게 남겨주세요. (선택)
              </Field.Label>
              <TextArea>
                <TextArea.Input placeholder="답변을 적어주세요." />
                <TextArea.Footer>
                  <Button>파일 첨부</Button>
                </TextArea.Footer>
              </TextArea>
            </Field>
            {/* Footer CTA */}
            <Flex justify="center">
              <CTAButton color="blue">제출하기</CTAButton>
            </Flex>
          </VStack>
        </Dialog.Content>
      </Dialog>;
  }
}`,...(L=(W=C.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var z,U,E;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Dialog>
      <Dialog.Trigger>
        <CTAButton color="blue">Open Fullscreen Dialog</CTAButton>
      </Dialog.Trigger>
      <Dialog.Content fullscreen>
        <VStack gap="lg" className="h-full">
          <HStack justify="between" align="center">
            <Text typography="title-48-bold">Fullscreen Dialog</Text>
            <Dialog.Close asChild>
              <CTAButton color="light">Close</CTAButton>
            </Dialog.Close>
          </HStack>

          <div className="flex flex-1 items-center justify-center rounded-md bg-gray-100 text-gray-400">
            Full Screen Content
          </div>
        </VStack>
      </Dialog.Content>
    </Dialog>
}`,...(E=(U=j.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var I,_,$;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768); // md breakpoint
      };
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return <Dialog>
        <Dialog.Trigger>
          <CTAButton color="blue">Open Responsive Fullscreen</CTAButton>
        </Dialog.Trigger>
        <Dialog.Content fullscreen={isMobile} width={isMobile ? undefined : 700}>
          <VStack gap="lg" className="h-full">
            <HStack justify="between" align="center">
              <Text typography="title-48-bold">Responsive Dialog</Text>
              <Dialog.Close asChild>
                <CTAButton color="light">Close</CTAButton>
              </Dialog.Close>
            </HStack>

            <div className="flex flex-1 items-center justify-center rounded-md bg-gray-100 p-4 text-gray-400">
              <VStack align="center" gap="sm">
                <Text typography="subtitle-20-bold">Resize the window!</Text>
                <Text typography="body-16-regular" textColor="gray-500">
                  Current Mode:{' '}
                  {isMobile ? 'Fullscreen (Mobile)' : 'Modal (Desktop)'}
                </Text>
              </VStack>
            </div>

            <HStack justify="end" className="md:hidden">
              <Dialog.Close asChild>
                <CTAButton color="blue" className="w-full">
                  Done
                </CTAButton>
              </Dialog.Close>
            </HStack>
          </VStack>
        </Dialog.Content>
      </Dialog>;
  }
}`,...($=(_=T.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};const Pe=["Playground","TogglePopup","Controlled","PreventClose","FeedbackPopup","Fullscreen","ResponsiveFullscreen"];export{b as Controlled,C as FeedbackPopup,j as Fullscreen,x as Playground,f as PreventClose,T as ResponsiveFullscreen,y as TogglePopup,Pe as __namedExportsOrder,Me as default};
