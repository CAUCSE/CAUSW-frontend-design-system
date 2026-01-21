import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-Cjm6fHpE.js";import{u as Ne,c as Re,P as D,a as j,b as Oe,d as Ae,D as Pe,e as Fe}from"./index-hQvW4U_T.js";import{u as H}from"./index-CG8j-80s.js";import{u as F,h as Me,R as He,a as Ee,F as _e}from"./index-C9azxXN6.js";import{P as E}from"./index-BQFCm9Ng.js";import{t as Be}from"./index-CKBcBfht.js";import{c as C}from"./converter-Cub1Z0Tz.js";import{C as u}from"./CTAButton-uzNYC4m-.js";import{T as d}from"./Text-Cg4OJqq3.js";import{V as h}from"./VStack-C0tP_IBz.js";import{T as b}from"./Toggle-D4xR005C.js";import{H as p}from"./HStack-DnffUbLx.js";import{F as W}from"./Field-CHDJqilx.js";import{T as M}from"./TextArea-CZQNeoEI.js";import{B as Ie}from"./Button-rLRgCPts.js";import{F as We}from"./Flex-DItcS1od.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B_UGtfoo.js";import"./index-pK5jcRj4.js";import"./bundle-mjs-CJvxXMcu.js";import"./mergeStyles-CG35R4DM.js";import"./Primitive-DjYCK9qy.js";import"./Stack-lzFUM3k-.js";function Ve(t,n){const r={},s={};for(const o in t)n.includes(o)?r[o]=t[o]:s[o]=t[o];return[r,s]}var A="Dialog",[ie]=Re(A),[Le,m]=ie(A),ce=t=>{const{__scopeDialog:n,children:r,open:s,defaultOpen:o,onOpenChange:a,modal:i=!0}=t,g=l.useRef(null),x=l.useRef(null),[y,P]=Ne({prop:s,defaultProp:o??!1,onChange:a,caller:A});return e.jsx(Le,{scope:n,triggerRef:g,contentRef:x,contentId:F(),titleId:F(),descriptionId:F(),open:y,onOpenChange:P,onOpenToggle:l.useCallback(()=>P(ke=>!ke),[P]),modal:i,children:r})};ce.displayName=A;var de="DialogTrigger",ge=l.forwardRef((t,n)=>{const{__scopeDialog:r,...s}=t,o=m(de,r),a=H(n,o.triggerRef);return e.jsx(D.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":I(o.open),...s,ref:a,onClick:j(t.onClick,o.onOpenToggle)})});ge.displayName=de;var _="DialogPortal",[ze,ue]=ie(_,{forceMount:void 0}),pe=t=>{const{__scopeDialog:n,forceMount:r,children:s,container:o}=t,a=m(_,n);return e.jsx(ze,{scope:n,forceMount:r,children:l.Children.map(s,i=>e.jsx(E,{present:r||a.open,children:e.jsx(Oe,{asChild:!0,container:o,children:i})}))})};pe.displayName=_;var O="DialogOverlay",he=l.forwardRef((t,n)=>{const r=ue(O,t.__scopeDialog),{forceMount:s=r.forceMount,...o}=t,a=m(O,t.__scopeDialog);return a.modal?e.jsx(E,{present:s||a.open,children:e.jsx(Ue,{...o,ref:n})}):null});he.displayName=O;var $e=Ae("DialogOverlay.RemoveScroll"),Ue=l.forwardRef((t,n)=>{const{__scopeDialog:r,...s}=t,o=m(O,r);return e.jsx(He,{as:$e,allowPinchZoom:!0,shards:[o.contentRef],children:e.jsx(D.div,{"data-state":I(o.open),...s,ref:n,style:{pointerEvents:"auto",...s.style}})})}),f="DialogContent",me=l.forwardRef((t,n)=>{const r=ue(f,t.__scopeDialog),{forceMount:s=r.forceMount,...o}=t,a=m(f,t.__scopeDialog);return e.jsx(E,{present:s||a.open,children:a.modal?e.jsx(Ge,{...o,ref:n}):e.jsx(Ke,{...o,ref:n})})});me.displayName=f;var Ge=l.forwardRef((t,n)=>{const r=m(f,t.__scopeDialog),s=l.useRef(null),o=H(n,r.contentRef,s);return l.useEffect(()=>{const a=s.current;if(a)return Me(a)},[]),e.jsx(xe,{...t,ref:o,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:j(t.onCloseAutoFocus,a=>{var i;a.preventDefault(),(i=r.triggerRef.current)==null||i.focus()}),onPointerDownOutside:j(t.onPointerDownOutside,a=>{const i=a.detail.originalEvent,g=i.button===0&&i.ctrlKey===!0;(i.button===2||g)&&a.preventDefault()}),onFocusOutside:j(t.onFocusOutside,a=>a.preventDefault())})}),Ke=l.forwardRef((t,n)=>{const r=m(f,t.__scopeDialog),s=l.useRef(!1),o=l.useRef(!1);return e.jsx(xe,{...t,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var i,g;(i=t.onCloseAutoFocus)==null||i.call(t,a),a.defaultPrevented||(s.current||(g=r.triggerRef.current)==null||g.focus(),a.preventDefault()),s.current=!1,o.current=!1},onInteractOutside:a=>{var x,y;(x=t.onInteractOutside)==null||x.call(t,a),a.defaultPrevented||(s.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const i=a.target;((y=r.triggerRef.current)==null?void 0:y.contains(i))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),xe=l.forwardRef((t,n)=>{const{__scopeDialog:r,trapFocus:s,onOpenAutoFocus:o,onCloseAutoFocus:a,...i}=t,g=m(f,r),x=l.useRef(null),y=H(n,x);return Ee(),e.jsxs(e.Fragment,{children:[e.jsx(_e,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:o,onUnmountAutoFocus:a,children:e.jsx(Pe,{role:"dialog",id:g.contentId,"aria-describedby":g.descriptionId,"aria-labelledby":g.titleId,"data-state":I(g.open),...i,ref:y,onDismiss:()=>g.onOpenChange(!1)})}),e.jsxs(e.Fragment,{children:[e.jsx(Ze,{titleId:g.titleId}),e.jsx(Qe,{contentRef:x,descriptionId:g.descriptionId})]})]})}),B="DialogTitle",qe=l.forwardRef((t,n)=>{const{__scopeDialog:r,...s}=t,o=m(B,r);return e.jsx(D.h2,{id:o.titleId,...s,ref:n})});qe.displayName=B;var fe="DialogDescription",Ye=l.forwardRef((t,n)=>{const{__scopeDialog:r,...s}=t,o=m(fe,r);return e.jsx(D.p,{id:o.descriptionId,...s,ref:n})});Ye.displayName=fe;var ye="DialogClose",be=l.forwardRef((t,n)=>{const{__scopeDialog:r,...s}=t,o=m(ye,r);return e.jsx(D.button,{type:"button",...s,ref:n,onClick:j(t.onClick,()=>o.onOpenChange(!1))})});be.displayName=ye;function I(t){return t?"open":"closed"}var Ce="DialogTitleWarning",[Ft,je]=Fe(Ce,{contentName:f,titleName:B,docsSlug:"dialog"}),Ze=({titleId:t})=>{const n=je(Ce),r=`\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;return l.useEffect(()=>{t&&(document.getElementById(t)||console.error(r))},[r,t]),null},Je="DialogDescriptionWarning",Qe=({contentRef:t,descriptionId:n})=>{const s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${je(Je).contentName}}.`;return l.useEffect(()=>{var a;const o=(a=t.current)==null?void 0:a.getAttribute("aria-describedby");n&&o&&(document.getElementById(n)||console.warn(s))},[s,t,n]),null},Xe=ce,et=ge,tt=pe,De=he,Te=me,ot=be;const ve=Be({slots:{overlay:"fixed inset-0 z-modal bg-black/50 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",content:"fixed left-[50%] top-[50%] z-modal grid w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-white p-6 shadow-lg rounded-lg data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out",title:"text-lg font-semibold leading-none tracking-tight",description:"text-sm text-gray-500",close:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500"},variants:{fullscreen:{true:{content:"inset-0 top-0 left-0 w-full h-full max-w-none translate-x-0 translate-y-0 rounded-none sm:rounded-none data-[state=open]:slide-in-from-bottom-0 data-[state=closed]:slide-out-to-bottom-0"}}}}),nt=["maxWidth","minWidth","width","minHeight","maxHeight","fullscreen"],rt=({...t})=>({width:t.width?C(t.width):void 0,maxWidth:t.maxWidth?C(t.maxWidth):void 0,minWidth:t.minWidth?C(t.minWidth):void 0,maxHeight:t.maxHeight?C(t.maxHeight):void 0,minHeight:t.minHeight?C(t.minHeight):void 0}),at=Xe,st=et,lt=tt,it=ot,we=({className:t,...n})=>{const{overlay:r}=ve();return e.jsx(De,{className:r({className:t}),...n})};we.displayName=De.displayName;const Se=({className:t,children:n,...r})=>{const[s,o]=Ve(r,nt),a=rt(s),{content:i}=ve({fullscreen:s.fullscreen});return e.jsxs(lt,{children:[e.jsx(we,{}),e.jsx(Te,{className:i({className:t}),style:{...a,...r.style},...o,children:n})]})};Se.displayName=Te.displayName;const c=Object.assign(at,{Trigger:st,Content:Se,Close:it}),Mt={title:"Components/Dialog",component:c,parameters:{layout:"centered",docs:{description:{component:"`Dialog`는 `modal` 형태의 웹 컴포넌트입니다. 헤더와 푸터 같은 영역이 정해져 있지 않습니다.\n\n`Dialog.Content` 내부에 자유롭게 `VStack`, `HStack`, `Text`, `Button` 등을 조합하여 원하는 레이아웃을 구성할 수 있습니다."}}},tags:["autodocs"],argTypes:{width:{control:{type:"number"},description:"Dialog width (px)",table:{type:{summary:"number"},category:"Style"}},minWidth:{control:{type:"number"},description:"Minimum width (px)",table:{type:{summary:"number"},category:"Style"}},maxWidth:{control:{type:"number"},description:"Maximum width (px)",table:{type:{summary:"number"},category:"Style"}},minHeight:{control:{type:"number"},description:"Minimum height (px)",table:{type:{summary:"number"},category:"Style"}},maxHeight:{control:{type:"number"},description:"Maximum height (px)",table:{type:{summary:"number"},category:"Style"}},fullscreen:{control:{type:"boolean"},description:"Whether the dialog should be fullscreen",table:{type:{summary:"boolean"},category:"Style"}}}},T={args:{width:void 0,minWidth:void 0,maxWidth:void 0,minHeight:void 0,maxHeight:void 0},render:t=>e.jsxs(c,{children:[e.jsx(c.Trigger,{children:e.jsx(u,{color:"blue",children:"Open Dialog (Playground)"})}),e.jsx(c.Content,{...t,children:e.jsxs("div",{className:"flex h-32 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 p-4 text-center",children:[e.jsx(d,{typography:"body-16-regular",textColor:"gray-400",children:"Arbitrary content area"}),e.jsx(d,{typography:"body-16-regular",textColor:"gray-400",children:"(Use VStack, HStack, etc.)"})]})})]})},v={render:()=>e.jsxs(c,{children:[e.jsx(c.Trigger,{children:e.jsx(u,{color:"blue",children:"Open Toggle Dialog"})}),e.jsx(c.Content,{maxWidth:420,children:e.jsxs(h,{gap:"lg",children:[e.jsx(d,{typography:"subtitle-20-bold",children:"Privacy Settings"}),e.jsxs(h,{gap:"md",children:[e.jsx(b,{className:"w-full",children:e.jsxs(p,{justify:"between",align:"center",className:"w-full",children:[e.jsx(b.Label,{children:"Phone Number"}),e.jsx(b.Switch,{})]})}),e.jsx(b,{className:"w-full",children:e.jsxs(p,{justify:"between",align:"center",className:"w-full",children:[e.jsx(b.Label,{children:"Message Visibility"}),e.jsx(b.Switch,{})]})})]}),e.jsxs(p,{gap:"sm",children:[e.jsx(c.Close,{asChild:!0,children:e.jsx(u,{color:"light",className:"w-1/2",children:"Close"})}),e.jsx(u,{color:"dark",className:"w-1/2",children:"Save"})]})]})})]})},w={render:()=>{const[t,n]=l.useState(!1);return e.jsxs(c,{open:t,onOpenChange:n,children:[e.jsx(c.Trigger,{children:e.jsx(u,{color:"red",children:"Open Controlled Dialog"})}),e.jsx(c.Content,{width:400,children:e.jsxs(h,{gap:"lg",children:[e.jsxs(h,{gap:"sm",children:[e.jsx(d,{typography:"title-30-bold",children:"Controlled Dialog"}),e.jsx(d,{typography:"body-18-medium",textColor:"gray-500",children:"This dialog is controlled by external React state."})]}),e.jsx(p,{justify:"end",gap:"sm",children:e.jsx(u,{color:"light",onClick:()=>n(!1),children:"Close using State"})})]})})]})}},S={render:()=>{const[t,n]=l.useState(!1),[r,s]=l.useState(!0),o=l.useRef(!1);l.useEffect(()=>{t&&(o.current=!1)},[t]);const a=()=>{o.current=!0,n(!1)};return e.jsxs(c,{open:t,onOpenChange:i=>{i||(o.current=!0),n(i)},children:[e.jsx(c.Trigger,{children:e.jsx(u,{color:"red",children:"Open Prevent Close Dialog"})}),e.jsx(c.Content,{width:400,onPointerDownOutside:i=>{o.current||r&&(i.preventDefault(),setTimeout(()=>{window.confirm("저장하지 않은 변경사항이 있습니다. 정말 닫으시겠습니까?")&&a()},0))},children:e.jsxs(h,{gap:"lg",children:[e.jsxs(h,{gap:"sm",children:[e.jsx(d,{typography:"title-30-bold",children:"Prevent Closing"}),e.jsx(d,{typography:"body-18-medium",textColor:"gray-500",children:"Try clicking outside the dialog."})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-yellow-200 bg-yellow-50 p-2",children:[e.jsx("input",{type:"checkbox",id:"unsaved-changes-toggle",checked:r,onChange:i=>s(i.target.checked),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),e.jsx("label",{htmlFor:"unsaved-changes-toggle",className:"cursor-pointer text-sm font-medium text-yellow-800",children:"Unsaved changes active"})]}),e.jsx(d,{typography:"body-16-regular",textColor:"gray-400",children:"If checked, clicking outside will trigger a confirmation alert instead of closing immediately."}),e.jsx(p,{justify:"end",gap:"sm",children:e.jsx(u,{color:"light",onClick:a,children:"Close"})})]})})]})}},k={render:()=>{const[t,n]=l.useState(!1),[r,s]=l.useState(null);return e.jsxs(c,{open:t,onOpenChange:n,children:[e.jsx(c.Trigger,{children:e.jsx(u,{color:"blue",children:"Open Feedback Popup"})}),e.jsx(c.Content,{width:700,className:"max-w-none gap-0 rounded-[16px] bg-gray-100 p-[32px] sm:rounded-[16px]","aria-describedby":void 0,children:e.jsxs(h,{className:"w-full",children:[e.jsxs(p,{justify:"between",align:"center",className:"mb-[39px] w-full",children:[e.jsx(d,{typography:"title-30-bold",children:"건의/오류 제보하기"}),e.jsx(c.Close,{asChild:!0,children:e.jsx("button",{className:"text-gray-500 transition-colors hover:text-gray-700",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})})]}),e.jsx(d,{typography:"body-18-medium",children:"크자회 서비스에 관한 의견을 자유롭게 남겨주세요"}),e.jsxs(h,{className:"mb-[24px] w-full rounded-[12px] bg-white p-[24px]",children:[e.jsx(d,{typography:"body-18-medium",children:"크자회 앱 사용에 대한 전반적인 만족도를 알려주세요."}),e.jsx(p,{justify:"center",gap:"md",children:[1,2,3,4,5].map(o=>e.jsx("button",{onClick:()=>s(o),className:`flex h-[60px] w-[60px] items-center justify-center rounded-[12px] border text-[16px] transition-all ${r===o?"border-blue-500 bg-blue-50 font-bold text-blue-600":"border-transparent bg-gray-100 text-gray-500 hover:bg-gray-200"}`,children:o},o))}),e.jsxs(p,{justify:"between",children:[e.jsx(d,{typography:"body-16-regular",textColor:"gray-400",children:"매우 아쉬움"}),e.jsx(d,{typography:"body-16-regular",textColor:"gray-400",children:"매우 만족"})]})]}),e.jsxs(W,{children:[e.jsx(W.Label,{children:"크자회에 대한 건의나 오류를 자유롭게 남겨주세요. (선택)"}),e.jsxs(M,{children:[e.jsx(M.Input,{placeholder:"답변을 적어주세요."}),e.jsx(M.Footer,{children:e.jsx(Ie,{children:"파일 첨부"})})]})]}),e.jsx(We,{justify:"center",children:e.jsx(u,{color:"blue",children:"제출하기"})})]})})]})}},N={render:()=>e.jsxs(c,{children:[e.jsx(c.Trigger,{children:e.jsx(u,{color:"blue",children:"Open Fullscreen Dialog"})}),e.jsx(c.Content,{fullscreen:!0,children:e.jsxs(h,{gap:"lg",className:"h-full",children:[e.jsxs(p,{justify:"between",align:"center",children:[e.jsx(d,{typography:"title-48-bold",children:"Fullscreen Dialog"}),e.jsx(c.Close,{asChild:!0,children:e.jsx(u,{color:"light",children:"Close"})})]}),e.jsx("div",{className:"flex flex-1 items-center justify-center rounded-md bg-gray-100 text-gray-400",children:"Full Screen Content"})]})})]})},R={render:()=>{const[t,n]=l.useState(!1);return l.useEffect(()=>{const r=()=>{n(window.innerWidth<768)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e.jsxs(c,{children:[e.jsx(c.Trigger,{children:e.jsx(u,{color:"blue",children:"Open Responsive Fullscreen"})}),e.jsx(c.Content,{fullscreen:t,width:t?void 0:700,children:e.jsxs(h,{gap:"lg",className:"h-full",children:[e.jsxs(p,{justify:"between",align:"center",children:[e.jsx(d,{typography:"title-48-bold",children:"Responsive Dialog"}),e.jsx(c.Close,{asChild:!0,children:e.jsx(u,{color:"light",children:"Close"})})]}),e.jsx("div",{className:"flex flex-1 items-center justify-center rounded-md bg-gray-100 p-4 text-gray-400",children:e.jsxs(h,{align:"center",gap:"sm",children:[e.jsx(d,{typography:"subtitle-20-bold",children:"Resize the window!"}),e.jsxs(d,{typography:"body-16-regular",textColor:"gray-500",children:["Current Mode:"," ",t?"Fullscreen (Mobile)":"Modal (Desktop)"]})]})}),e.jsx(p,{justify:"end",className:"md:hidden",children:e.jsx(c.Close,{asChild:!0,children:e.jsx(u,{color:"blue",className:"w-full",children:"Done"})})})]})})]})}};var V,L,z;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=(L=T.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var $,U,G;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(G=(U=v.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var K,q,Y;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(q=w.parameters)==null?void 0:q.docs)==null?void 0:Y.source}}};var Z,J,Q;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,ee,te;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ne,re;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,se,le;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(le=(se=R.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};const Ht=["Playground","TogglePopup","Controlled","PreventClose","FeedbackPopup","Fullscreen","ResponsiveFullscreen"];export{w as Controlled,k as FeedbackPopup,N as Fullscreen,T as Playground,S as PreventClose,R as ResponsiveFullscreen,v as TogglePopup,Ht as __namedExportsOrder,Mt as default};
