import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-CE7tza1f.js";import{D as t}from"./Dialog-CmN-OFkX.js";import{C as r}from"./CTAButton-CGox-T0P.js";import{T as o}from"./Text-DpkYA4uW.js";import{V as i}from"./VStack-fcqv-wlH.js";import{T as u}from"./Toggle-CwycDDUh.js";import{H as l}from"./HStack-DHuYOMfT.js";import{F as D}from"./Field-Buqum4h-.js";import{T as j}from"./TextArea-gwySxTPq.js";import{B as $}from"./Button-CQRAooBP.js";import{F as q}from"./Flex-Gg9l9qnw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-qMCJ6_gH.js";import"./index-C3LEfTTf.js";import"./index-CGZ64Lu0.js";import"./index-3blWNaYr.js";import"./index-DHp25nV0.js";import"./index-DujTkUoO.js";import"./index-C8dy6xHf.js";import"./index-Ca4j9_td.js";import"./converter-Cub1Z0Tz.js";import"./Primitive-ReQRLi-V.js";import"./mergeStyles-Dw1fI3XI.js";import"./Stack-CZ3GKqMB.js";const be={title:"Components/Dialog",component:t,parameters:{layout:"centered",docs:{description:{component:"`Dialog`는 `modal` 형태의 웹 컴포넌트입니다. Modal보다 더 추상화된 버전입니다.\n\n 크게 Content와 Trigger로 구성되어 있습니다. Content 내부에는 Title, Description, Footer 등이 정의되어 있습니다.\n\n`Dialog.Content` 내부에 자유롭게 `VStack`, `HStack`, `Text`, `Button` 등을 조합하여 원하는 레이아웃을 구성할 수 있습니다."}}},tags:["autodocs"],argTypes:{width:{control:{type:"number"},description:"Dialog width (px)",table:{type:{summary:"number"},category:"Style"}},minWidth:{control:{type:"number"},description:"Minimum width (px)",table:{type:{summary:"number"},category:"Style"}},maxWidth:{control:{type:"number"},description:"Maximum width (px)",table:{type:{summary:"number"},category:"Style"}},minHeight:{control:{type:"number"},description:"Minimum height (px)",table:{type:{summary:"number"},category:"Style"}},maxHeight:{control:{type:"number"},description:"Maximum height (px)",table:{type:{summary:"number"},category:"Style"}},fullscreen:{control:{type:"boolean"},description:"Whether the dialog should be fullscreen",table:{type:{summary:"boolean"},category:"Style"}}}},p={args:{width:void 0,minWidth:void 0,maxWidth:void 0,minHeight:void 0,maxHeight:void 0},render:n=>e.jsxs(t,{children:[e.jsx(t.Trigger,{children:e.jsx(r,{color:"blue",children:"Open Dialog (Playground)"})}),e.jsx(t.Content,{...n,children:e.jsxs("div",{className:"flex h-32 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 p-4 text-center",children:[e.jsx(o,{typography:"body-16-regular",textColor:"gray-400",children:"Arbitrary content area"}),e.jsx(o,{typography:"body-16-regular",textColor:"gray-400",children:"(Use VStack, HStack, etc.)"})]})})]})},h={render:()=>e.jsxs(t,{children:[e.jsx(t.Trigger,{children:e.jsx(r,{color:"blue",children:"Open Toggle Dialog"})}),e.jsx(t.Content,{maxWidth:420,children:e.jsxs(i,{gap:"lg",children:[e.jsx(t.Title,{children:e.jsx(o,{typography:"subtitle-20-bold",children:"Privacy Settings"})}),e.jsxs(i,{gap:"md",children:[e.jsx(u,{className:"w-full",children:e.jsxs(l,{justify:"between",align:"center",className:"w-full",children:[e.jsx(u.Label,{children:"Phone Number"}),e.jsx(u.Switch,{})]})}),e.jsx(u,{className:"w-full",children:e.jsxs(l,{justify:"between",align:"center",className:"w-full",children:[e.jsx(u.Label,{children:"Message Visibility"}),e.jsx(u.Switch,{})]})})]}),e.jsx(t.Footer,{children:e.jsxs(l,{gap:"sm",children:[e.jsx(t.Close,{asChild:!0,children:e.jsx(r,{color:"light",className:"w-1/2",children:"Close"})}),e.jsx(r,{color:"dark",className:"w-1/2",children:"Save"})]})})]})})]})},x={render:()=>{const[n,a]=c.useState(!1);return e.jsxs(t,{open:n,onOpenChange:a,children:[e.jsx(t.Trigger,{children:e.jsx(r,{color:"red",children:"Open Controlled Dialog"})}),e.jsx(t.Content,{width:400,children:e.jsxs(i,{gap:"lg",children:[e.jsxs(i,{gap:"sm",children:[e.jsx(t.Title,{children:e.jsx(o,{typography:"title-30-bold",children:"Controlled Dialog"})}),e.jsx(t.Description,{children:e.jsx(o,{typography:"body-18-medium",textColor:"gray-500",children:"This dialog is controlled by external React state."})})]}),e.jsx(t.Footer,{children:e.jsx(l,{justify:"end",gap:"sm",children:e.jsx(r,{color:"light",onClick:()=>a(!1),children:"Close using State"})})})]})})]})}},m={render:()=>{const[n,a]=c.useState(!1),[d,f]=c.useState(!0),s=c.useRef(!1);c.useEffect(()=>{n&&(s.current=!1)},[n]);const T=()=>{s.current=!0,a(!1)};return e.jsxs(t,{open:n,onOpenChange:g=>{g||(s.current=!0),a(g)},children:[e.jsx(t.Trigger,{children:e.jsx(r,{color:"red",children:"Open Prevent Close Dialog"})}),e.jsx(t.Content,{width:400,onPointerDownOutside:g=>{s.current||d&&(g.preventDefault(),setTimeout(()=>{window.confirm("저장하지 않은 변경사항이 있습니다. 정말 닫으시겠습니까?")&&T()},0))},children:e.jsxs(i,{gap:"lg",children:[e.jsxs(i,{gap:"sm",children:[e.jsx(t.Title,{children:e.jsx(o,{typography:"title-30-bold",children:"Prevent Closing"})}),e.jsx(t.Description,{children:e.jsx(o,{typography:"body-18-medium",textColor:"gray-500",children:"Try clicking outside the dialog."})})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-yellow-200 bg-yellow-50 p-2",children:[e.jsx("input",{type:"checkbox",id:"unsaved-changes-toggle",checked:d,onChange:g=>f(g.target.checked),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),e.jsx("label",{htmlFor:"unsaved-changes-toggle",className:"cursor-pointer text-sm font-medium text-yellow-800",children:"Unsaved changes active"})]}),e.jsx(o,{typography:"body-16-regular",textColor:"gray-400",children:"If checked, clicking outside will trigger a confirmation alert instead of closing immediately."}),e.jsx(t.Footer,{children:e.jsx(l,{justify:"end",gap:"sm",children:e.jsx(r,{color:"light",onClick:T,children:"Close"})})})]})})]})}},y={render:()=>{const[n,a]=c.useState(!1),[d,f]=c.useState(null);return e.jsxs(t,{open:n,onOpenChange:a,children:[e.jsx(t.Trigger,{children:e.jsx(r,{color:"blue",children:"Open Feedback Popup"})}),e.jsx(t.Content,{width:700,className:"max-w-none gap-0 rounded-[16px] bg-gray-100 p-[32px] sm:rounded-[16px]","aria-describedby":void 0,children:e.jsxs(i,{className:"w-full",children:[e.jsxs(l,{justify:"between",align:"center",className:"mb-[39px] w-full",children:[e.jsx(t.Title,{children:e.jsx(o,{typography:"title-30-bold",children:"건의/오류 제보하기"})}),e.jsx(t.Close,{asChild:!0,children:e.jsx("button",{className:"text-gray-500 transition-colors hover:text-gray-700",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})})]}),e.jsx(t.Description,{children:e.jsx(o,{typography:"body-18-medium",children:"크자회 서비스에 관한 의견을 자유롭게 남겨주세요"})}),e.jsxs(i,{className:"mb-[24px] w-full rounded-[12px] bg-white p-[24px]",children:[e.jsx(o,{typography:"body-18-medium",children:"크자회 앱 사용에 대한 전반적인 만족도를 알려주세요."}),e.jsx(l,{justify:"center",gap:"md",children:[1,2,3,4,5].map(s=>e.jsx("button",{onClick:()=>f(s),className:`flex h-[60px] w-[60px] items-center justify-center rounded-[12px] border text-[16px] transition-all ${d===s?"border-blue-500 bg-blue-50 font-bold text-blue-600":"border-transparent bg-gray-100 text-gray-500 hover:bg-gray-200"}`,children:s},s))}),e.jsxs(l,{justify:"between",children:[e.jsx(o,{typography:"body-16-regular",textColor:"gray-400",children:"매우 아쉬움"}),e.jsx(o,{typography:"body-16-regular",textColor:"gray-400",children:"매우 만족"})]})]}),e.jsxs(D,{children:[e.jsx(D.Label,{children:"크자회에 대한 건의나 오류를 자유롭게 남겨주세요. (선택)"}),e.jsxs(j,{children:[e.jsx(j.Input,{placeholder:"답변을 적어주세요."}),e.jsx(j.Footer,{children:e.jsx($,{children:"파일 첨부"})})]})]}),e.jsx(t.Footer,{children:e.jsx(q,{justify:"center",children:e.jsx(r,{color:"blue",children:"제출하기"})})})]})})]})}},b={render:()=>e.jsxs(t,{children:[e.jsx(t.Trigger,{children:e.jsx(r,{color:"blue",children:"Open Fullscreen Dialog"})}),e.jsx(t.Content,{fullscreen:!0,children:e.jsxs(i,{gap:"lg",className:"h-full",children:[e.jsxs(l,{justify:"between",align:"center",children:[e.jsx(t.Title,{children:e.jsx(o,{typography:"title-48-bold",children:"Fullscreen Dialog"})}),e.jsx(t.Close,{asChild:!0,children:e.jsx(r,{color:"light",children:"Close"})})]}),e.jsx("div",{className:"flex flex-1 items-center justify-center rounded-md bg-gray-100 text-gray-400",children:"Full Screen Content"})]})})]})},C={render:()=>{const[n,a]=c.useState(!1);return c.useEffect(()=>{const d=()=>{a(window.innerWidth<768)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),e.jsxs(t,{children:[e.jsx(t.Trigger,{children:e.jsx(r,{color:"blue",children:"Open Responsive Fullscreen"})}),e.jsx(t.Content,{fullscreen:n,width:n?void 0:700,children:e.jsxs(i,{gap:"lg",className:"h-full",children:[e.jsxs(l,{justify:"between",align:"center",children:[e.jsx(t.Title,{children:e.jsx(o,{typography:"title-48-bold",children:"Responsive Dialog"})}),e.jsx(t.Close,{asChild:!0,children:e.jsx(r,{color:"light",children:"Close"})})]}),e.jsx(t.Description,{children:e.jsx("div",{className:"flex flex-1 items-center justify-center rounded-md bg-gray-100 p-4 text-gray-400",children:e.jsxs(i,{align:"center",gap:"sm",children:[e.jsx(o,{typography:"subtitle-20-bold",children:"Resize the window!"}),e.jsxs(o,{typography:"body-16-regular",textColor:"gray-500",children:["Current Mode:"," ",n?"Fullscreen (Mobile)":"Modal (Desktop)"]})]})})}),e.jsx(t.Footer,{children:e.jsx(l,{justify:"end",className:"md:hidden",children:e.jsx(t.Close,{asChild:!0,children:e.jsx(r,{color:"blue",className:"w-full",children:"Done"})})})})]})})]})}};var w,S,k;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(S=p.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var v,F,N;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Dialog>
      <Dialog.Trigger>
        <CTAButton color="blue">Open Toggle Dialog</CTAButton>
      </Dialog.Trigger>
      <Dialog.Content maxWidth={420}>
        <VStack gap="lg">
          <Dialog.Title>
            <Text typography="subtitle-20-bold">Privacy Settings</Text>
          </Dialog.Title>

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

          <Dialog.Footer>
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
          </Dialog.Footer>
        </VStack>
      </Dialog.Content>
    </Dialog>
}`,...(N=(F=h.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var A,B,H;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Dialog open={open} onOpenChange={setOpen}>
        <Dialog.Trigger>
          <CTAButton color="red">Open Controlled Dialog</CTAButton>
        </Dialog.Trigger>
        <Dialog.Content width={400}>
          <VStack gap="lg">
            <VStack gap="sm">
              <Dialog.Title>
                <Text typography="title-30-bold">Controlled Dialog</Text>
              </Dialog.Title>
              <Dialog.Description>
                <Text typography="body-18-medium" textColor="gray-500">
                  This dialog is controlled by external React state.
                </Text>
              </Dialog.Description>
            </VStack>

            <Dialog.Footer>
              <HStack justify="end" gap="sm">
                <CTAButton color="light" onClick={() => setOpen(false)}>
                  Close using State
                </CTAButton>
              </HStack>
            </Dialog.Footer>
          </VStack>
        </Dialog.Content>
      </Dialog>;
  }
}`,...(H=(B=x.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var O,R,M;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
              <Dialog.Title>
                <Text typography="title-30-bold">Prevent Closing</Text>
              </Dialog.Title>
              <Dialog.Description>
                <Text typography="body-18-medium" textColor="gray-500">
                  Try clicking outside the dialog.
                </Text>
              </Dialog.Description>
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

            <Dialog.Footer>
              <HStack justify="end" gap="sm">
                <CTAButton color="light" onClick={handleClose}>
                  Close
                </CTAButton>
              </HStack>
            </Dialog.Footer>
          </VStack>
        </Dialog.Content>
      </Dialog>;
  }
}`,...(M=(R=m.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var V,P,L;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
              <Dialog.Title>
                <Text typography="title-30-bold">건의/오류 제보하기</Text>
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="text-gray-500 transition-colors hover:text-gray-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </Dialog.Close>
            </HStack>

            <Dialog.Description>
              <Text typography="body-18-medium">
                크자회 서비스에 관한 의견을 자유롭게 남겨주세요
              </Text>
            </Dialog.Description>

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
            <Dialog.Footer>
              <Flex justify="center">
                <CTAButton color="blue">제출하기</CTAButton>
              </Flex>
            </Dialog.Footer>
          </VStack>
        </Dialog.Content>
      </Dialog>;
  }
}`,...(L=(P=y.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var W,U,E;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Dialog>
      <Dialog.Trigger>
        <CTAButton color="blue">Open Fullscreen Dialog</CTAButton>
      </Dialog.Trigger>
      <Dialog.Content fullscreen>
        <VStack gap="lg" className="h-full">
          <HStack justify="between" align="center">
            <Dialog.Title>
              <Text typography="title-48-bold">Fullscreen Dialog</Text>
            </Dialog.Title>
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
}`,...(E=(U=b.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var I,z,_;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
              <Dialog.Title>
                <Text typography="title-48-bold">Responsive Dialog</Text>
              </Dialog.Title>
              <Dialog.Close asChild>
                <CTAButton color="light">Close</CTAButton>
              </Dialog.Close>
            </HStack>

            <Dialog.Description>
              <div className="flex flex-1 items-center justify-center rounded-md bg-gray-100 p-4 text-gray-400">
                <VStack align="center" gap="sm">
                  <Text typography="subtitle-20-bold">Resize the window!</Text>
                  <Text typography="body-16-regular" textColor="gray-500">
                    Current Mode:{' '}
                    {isMobile ? 'Fullscreen (Mobile)' : 'Modal (Desktop)'}
                  </Text>
                </VStack>
              </div>
            </Dialog.Description>

            <Dialog.Footer>
              <HStack justify="end" className="md:hidden">
                <Dialog.Close asChild>
                  <CTAButton color="blue" className="w-full">
                    Done
                  </CTAButton>
                </Dialog.Close>
              </HStack>
            </Dialog.Footer>
          </VStack>
        </Dialog.Content>
      </Dialog>;
  }
}`,...(_=(z=C.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};const Ce=["Playground","TogglePopup","Controlled","PreventClose","FeedbackPopup","Fullscreen","ResponsiveFullscreen"];export{x as Controlled,y as FeedbackPopup,b as Fullscreen,p as Playground,m as PreventClose,C as ResponsiveFullscreen,h as TogglePopup,Ce as __namedExportsOrder,be as default};
