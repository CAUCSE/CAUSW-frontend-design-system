import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as i}from"./index-C0BMkvII.js";import{r as d}from"./iframe-Cnf0TL4C.js";import{t as f,C as l}from"./Calendar-B01gBrRa.js";import{B as q}from"./Bell-D9n2UMhM.js";import{I as Y,M as b,D as K}from"./types-2sDnptjW.js";import{u as $}from"./uniqueSvgIds-0vWoh-Lt.js";import{V as ee}from"./VStack-DlfWx071.js";import{T as C}from"./Text-XFSRHRBs.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ca4j9_td.js";import"./Box-Dg4rCV38.js";import"./mergeStyles-Dw1fI3XI.js";import"./Grid-8f-DqFaf.js";import"./Flex-DBj5l5S8.js";import"./colors-B5_xS8Kn.js";import"./Stack-ClQvbQ14.js";const J=({size:t=K,active:a=!1,color:s,title:r,...o})=>{const p=s?Y[s]:a?b.active:b.inactive;return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:t,height:t,fill:p,color:p,"aria-hidden":r?void 0:!0,"aria-label":r,role:r?"img":void 0,...o,children:[r&&e.jsx("title",{children:r}),e.jsx("path",{d:"M10 11.4905L4.78327 16.7072C4.58809 16.9024 4.33967 17 4.03802 17C3.73638 17 3.48796 16.9024 3.29278 16.7072C3.09759 16.512 3 16.2636 3 15.962C3 15.6603 3.09759 15.4119 3.29278 15.2167L8.50951 10L3.29278 4.78327C3.09759 4.58809 3 4.33967 3 4.03802C3 3.73638 3.09759 3.48796 3.29278 3.29278C3.48796 3.09759 3.73638 3 4.03802 3C4.33967 3 4.58809 3.09759 4.78327 3.29278L10 8.50951L15.2167 3.29278C15.4119 3.09759 15.6603 3 15.962 3C16.2636 3 16.512 3.09759 16.7072 3.29278C16.9024 3.48796 17 3.73638 17 4.03802C17 4.33967 16.9024 4.58809 16.7072 4.78327L11.4905 10L16.7072 15.2167C16.9024 15.4119 17 15.6603 17 15.962C17 16.2636 16.9024 16.512 16.7072 16.7072C16.512 16.9024 16.2636 17 15.962 17C15.6603 17 15.4119 16.9024 15.2167 16.7072L10 11.4905Z"})]})};J.displayName="Close";const te=typeof window<"u"?d.useLayoutEffect:d.useEffect,Q=({size:t=K,title:a,...s})=>{const r=d.useRef(null);return te(()=>{r.current&&$(r.current)},[]),e.jsxs("svg",{ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22",width:t,height:t,fill:"none","aria-hidden":a?void 0:!0,"aria-label":a,role:a?"img":void 0,...s,children:[a&&e.jsx("title",{children:a}),e.jsx("path",{d:"M7.99951 14.9995H4.16539C3.52135 14.9995 2.99951 14.5182 2.99951 13.9241V8.07493C2.99951 7.48086 3.52135 6.99951 4.16539 6.99951H7.99951V14.9995Z",fill:"url(#paint0_linear_1797_7914)"}),e.jsx("path",{d:"M7.99951 15.0555V6.94299L16.6748 2.10594C17.29 1.76304 17.9995 2.29037 17.9995 3.09158V18.9075C17.9995 19.7082 17.29 20.236 16.6748 19.8931L7.99951 15.0555Z",fill:"#F9BEC3"}),e.jsx("path",{d:"M17.9995 7.99951H19.6005C20.3733 7.99951 20.9995 8.72154 20.9995 9.61263V12.3864C20.9995 13.2775 20.3733 13.9995 19.6005 13.9995H17.9995",fill:"url(#paint1_linear_1797_7914)"}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"paint0_linear_1797_7914",x1:"3.37451",y1:"6.99951",x2:"10.0036",y2:"10.5212",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#F5A1A8"}),e.jsx("stop",{offset:"1",stopColor:"#FD3848"})]}),e.jsxs("linearGradient",{id:"paint1_linear_1797_7914",x1:"18.2245",y1:"7.99951",x2:"22.5443",y2:"9.8354",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#F5A1A8"}),e.jsx("stop",{offset:"1",stopColor:"#FD3848"})]})]})]})};Q.displayName="SpeakerColored";function ae(t,a){return+f(t)<+f(a)}const fe={title:"Components/Calendar",component:l,subcomponents:{"Calendar.Nav":l.Nav},parameters:{layout:"padded"},tags:["autodocs"],argTypes:{today:{control:"date"},events:{control:"object"},size:{control:"radio",options:["sm","md",void 0],description:"undefined(Auto)일 때는 화면 크기에 따라 반응형으로 동작합니다."},selectedStartDate:{control:"date"},selectedEndDate:{control:"date"}},args:{onDateClick:i(),onEventClick:i(),onPrevMonth:i(),onNextMonth:i(),onMonthChange:i()}},X=[{id:0,title:"행사",startDate:"2025-09-29",color:"red"},{id:1,title:"개천절",startDate:"2025-10-03",color:"red"},{id:2,title:"추석",startDate:"2025-10-06",color:"red"},{id:3,title:"수도권",startDate:"2025-10-07",color:"purple"},{id:4,title:"모꼬지",startDate:"2025-10-08",color:"orange"},{id:5,title:"한글날",startDate:"2025-10-09",color:"red"},{id:6,title:"크자회",startDate:"2025-10-09",color:"skyblue"},{id:7,title:"중간고사",startDate:"2025-10-27",endDate:"2025-10-29",color:"blue"},{id:8,title:"팀 회의",startDate:"2025-10-23",color:"orange"},{id:9,title:"1text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-10-11",endDate:"2025-10-23",color:"gray"},{id:10,title:"2text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-10-18",endDate:"2025-10-26",color:"gray"},{id:11,title:"3text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-10-21",endDate:"2025-10-26",color:"gray"},{id:12,title:"4text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-10-15",endDate:"2025-10-27",color:"gray"},{id:13,title:"5text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-10-11",endDate:"2025-10-22",color:"gray"},{id:14,title:"6text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-10-11",endDate:"2025-10-23",color:"gray"},{id:15,title:"7text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-10-11",endDate:"2025-11-03",color:"gray"},{id:16,title:"8text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-11-01",endDate:"2025-11-07",color:"gray"}],n={args:{className:"border border-gray-100",defaultMonth:new Date(2025,9,1),today:new Date(2025,9,1),events:X}},m={args:{...n.args,size:"sm"}},u={args:{...n.args,size:"md"}},h={args:{...n.args,selectedStartDate:void 0,selectedEndDate:void 0},render:t=>{const[a,s]=d.useState(t.selectedStartDate),[r,o]=d.useState(t.selectedEndDate);d.useEffect(()=>{s(t.selectedStartDate)},[t.selectedStartDate]),d.useEffect(()=>{o(t.selectedEndDate)},[t.selectedEndDate]);const p=c=>{var y;!a||a&&r?(s(c),o(void 0)):ae(c,a)?(s(c),o(a)):o(c),(y=t.onDateClick)==null||y.call(t,c)};return e.jsx(l,{...t,selectedStartDate:a,selectedEndDate:r,onDateClick:p})},parameters:{docs:{description:{story:"시작일과 종료일을 클릭하면 파란색 범위가 그려지는 것을 테스트할 수 있습니다."}}}},g={render:t=>{const a=r=>{var o;console.log("스토리 레이어 - 이전 달:",r),(o=t.onPrevMonth)==null||o.call(t,r)},s=r=>{var o;console.log("스토리 레이어 - 다음 달:",r),(o=t.onNextMonth)==null||o.call(t,r)};return e.jsx(l,{...t,onPrevMonth:a,onNextMonth:s})},args:{className:"border border-gray-100",defaultMonth:new Date(2025,9,1),today:new Date(2025,9,1),events:X}},D={args:{...n.args,size:"sm",headerAction:e.jsxs("button",{onClick:i,className:"relative cursor-pointer hover:opacity-70",children:[e.jsx(q,{color:"gray-400",size:20}),e.jsx("span",{className:"absolute -top-0.5 -right-0.5 size-1.25 rounded-full bg-red-400"})]})},parameters:{docs:{description:{story:"headerAction으로 헤더 오른쪽에 버튼을 넣는 예시입니다. 헤더 flex의 마지막 요소로 오른쪽 끝에 배치됩니다."}}}},x={args:{...n.args},render:t=>{const[a,s]=d.useState(!0);return e.jsx(l,{...t,banner:a?e.jsxs("div",{className:"relative flex items-center rounded-lg bg-gray-100 px-4 py-3",children:[e.jsx(Q,{size:26,className:"mr-5 shrink-0"}),e.jsxs(ee,{gap:"none",children:[e.jsx(C,{typography:"subtitle-16-bold",textColor:"gray-700",children:"새 알림"}),e.jsx(C,{typography:"body-14-medium",textColor:"gray-400",children:"2학기 학사일정이 업데이트되었습니다."})]}),e.jsx("button",{type:"button",onClick:()=>s(!1),"aria-label":"배너 닫기",className:"absolute top-3 right-4 shrink-0 cursor-pointer hover:opacity-70",children:e.jsx(J,{size:20,color:"gray-400"})})]}):void 0})},parameters:{docs:{description:{story:"banner로 헤더와 달력 그리드 사이에 영역을 넣는 예시입니다. 공지 배너, 안내문 등 서비스에서 필요한 내용을 자유롭게 넣을 수 있습니다."}}}},v={args:{...n.args,className:"border-none"},render:t=>{const[a,s]=d.useState(t.defaultMonth??new Date);return e.jsx("div",{className:"h-140 overflow-y-auto rounded-lg border border-gray-100",children:e.jsxs("div",{className:"mx-auto max-w-300",children:[e.jsx("div",{className:"z-sticky sticky top-0 bg-white md:static",children:e.jsx(l.Nav,{month:a,onMonthChange:s,headerAction:e.jsx("div",{className:"md:hidden",children:e.jsxs("button",{onClick:i(),className:"relative cursor-pointer hover:opacity-70",children:[e.jsx(q,{color:"gray-400",size:20}),e.jsx("span",{className:"absolute -top-0.5 -right-0.5 size-1.25 rounded-full bg-red-400"})]})})})}),e.jsx(l,{...t,hideHeader:!0,month:a,onMonthChange:s}),e.jsx("div",{className:"m-4 h-45 rounded-lg bg-gray-50"})]})})},parameters:{viewport:{options:{mobile:{name:"Mobile (375px)",styles:{width:"375px",height:"720px"},type:"mobile"}}},docs:{description:{story:"홈화면처럼 캘린더 아래에 다른 컴포넌트가 이어지고, 월 표시 헤더가 상단에 계속 고정되어야 하는 경우입니다. Calendar에 `hideHeader`를 주고 `Calendar.Nav`를 홈화면 컨테이너의 직계 자식으로 올린 뒤 sticky를 걸면, 캘린더 영역을 지나 아래 섹션까지 스크롤해도 헤더가 남습니다. 월 상태는 `month`/`onMonthChange`로 Nav와 Calendar가 공유합니다. `md:static`이 걸려 있어 **768px 미만에서만 고정**되며, 그 이상에서는 일반 헤더처럼 함께 스크롤됩니다 — 확인을 위해 모바일 뷰포트로 열립니다."}}},globals:{viewport:{value:"mobile"}}};var N,S,M;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    className: 'border border-gray-100',
    defaultMonth: new Date(2025, 9, 1),
    today: new Date(2025, 9, 1),
    events: mockEvents
  }
}`,...(M=(S=n.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var j,k,w;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default_Responsive.args,
    size: 'sm'
  }
}`,...(w=(k=m.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var E,_,z;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default_Responsive.args,
    size: 'md'
  }
}`,...(z=(_=u.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var L,V,A;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default_Responsive.args,
    selectedStartDate: undefined,
    selectedEndDate: undefined
  },
  render: args => {
    const [startDate, setStartDate] = useState<Date | undefined>(args.selectedStartDate);
    const [endDate, setEndDate] = useState<Date | undefined>(args.selectedEndDate);
    useEffect(() => {
      setStartDate(args.selectedStartDate);
    }, [args.selectedStartDate]);
    useEffect(() => {
      setEndDate(args.selectedEndDate);
    }, [args.selectedEndDate]);
    const handleDateClick = (date: Date) => {
      if (!startDate || startDate && endDate) {
        setStartDate(date);
        setEndDate(undefined);
      } else {
        if (isBefore(date, startDate)) {
          setStartDate(date);
          setEndDate(startDate);
        } else {
          setEndDate(date);
        }
      }
      args.onDateClick?.(date);
    };
    return <Calendar {...args} selectedStartDate={startDate} selectedEndDate={endDate} onDateClick={handleDateClick} />;
  },
  parameters: {
    docs: {
      description: {
        story: '시작일과 종료일을 클릭하면 파란색 범위가 그려지는 것을 테스트할 수 있습니다.'
      }
    }
  }
}`,...(A=(V=h.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var B,R,H;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    const handlePrev = (date: Date) => {
      console.log('스토리 레이어 - 이전 달:', date);
      args.onPrevMonth?.(date);
    };
    const handleNext = (date: Date) => {
      console.log('스토리 레이어 - 다음 달:', date);
      args.onNextMonth?.(date);
    };
    return <Calendar {...args} onPrevMonth={handlePrev} onNextMonth={handleNext} />;
  },
  args: {
    className: 'border border-gray-100',
    defaultMonth: new Date(2025, 9, 1),
    today: new Date(2025, 9, 1),
    events: mockEvents
  }
}`,...(H=(R=g.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var O,F,T;D.parameters={...D.parameters,docs:{...(O=D.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default_Responsive.args,
    size: 'sm',
    headerAction: <button onClick={fn} className="relative cursor-pointer hover:opacity-70">
        <Bell color="gray-400" size={20} />
        <span className="absolute -top-0.5 -right-0.5 size-1.25 rounded-full bg-red-400" />
      </button>
  },
  parameters: {
    docs: {
      description: {
        story: 'headerAction으로 헤더 오른쪽에 버튼을 넣는 예시입니다. 헤더 flex의 마지막 요소로 오른쪽 끝에 배치됩니다.'
      }
    }
  }
}`,...(T=(F=D.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var P,I,W;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default_Responsive.args
  },
  render: args => {
    const [bannerVisible, setBannerVisible] = useState(true);
    return <Calendar {...args} banner={bannerVisible ? <div className="relative flex items-center rounded-lg bg-gray-100 px-4 py-3">
              <SpeakerColored size={26} className="mr-5 shrink-0" />
              <VStack gap="none">
                <Text typography="subtitle-16-bold" textColor="gray-700">
                  새 알림
                </Text>
                <Text typography="body-14-medium" textColor="gray-400">
                  2학기 학사일정이 업데이트되었습니다.
                </Text>
              </VStack>
              <button type="button" onClick={() => setBannerVisible(false)} aria-label="배너 닫기" className="absolute top-3 right-4 shrink-0 cursor-pointer hover:opacity-70">
                <Close size={20} color="gray-400" />
              </button>
            </div> : undefined} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'banner로 헤더와 달력 그리드 사이에 영역을 넣는 예시입니다. 공지 배너, 안내문 등 서비스에서 필요한 내용을 자유롭게 넣을 수 있습니다.'
      }
    }
  }
}`,...(W=(I=x.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var U,Z,G;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Default_Responsive.args,
    className: 'border-none'
  },
  render: args => {
    const [month, setMonth] = useState(args.defaultMonth ?? new Date());
    return (
      // 홈화면 스크롤 컨테이너
      <div className="h-140 overflow-y-auto rounded-lg border border-gray-100">
        {/* 이 컨테이너가 sticky의 containing block이 되므로,
            캘린더를 지나 아래 섹션까지 스크롤해도 헤더가 상단에 남는다. */}
        <div className="mx-auto max-w-300">
          <div className="z-sticky sticky top-0 bg-white md:static">
            <Calendar.Nav month={month} onMonthChange={setMonth} headerAction={<div className="md:hidden">
                  <button onClick={fn()} className="relative cursor-pointer hover:opacity-70">
                    <Bell color="gray-400" size={20} />
                    <span className="absolute -top-0.5 -right-0.5 size-1.25 rounded-full bg-red-400" />
                  </button>
                </div>} />
          </div>

          <Calendar {...args} hideHeader month={month} onMonthChange={setMonth} />

          <div className="m-4 h-45 rounded-lg bg-gray-50" />
        </div>
      </div>
    );
  },
  parameters: {
    viewport: {
      options: {
        mobile: {
          name: 'Mobile (375px)',
          styles: {
            width: '375px',
            height: '720px'
          },
          type: 'mobile'
        }
      }
    },
    docs: {
      description: {
        story: '홈화면처럼 캘린더 아래에 다른 컴포넌트가 이어지고, 월 표시 헤더가 상단에 계속 고정되어야 하는 경우입니다. Calendar에 \`hideHeader\`를 주고 \`Calendar.Nav\`를 홈화면 컨테이너의 직계 자식으로 올린 뒤 sticky를 걸면, 캘린더 영역을 지나 아래 섹션까지 스크롤해도 헤더가 남습니다. 월 상태는 \`month\`/\`onMonthChange\`로 Nav와 Calendar가 공유합니다. \`md:static\`이 걸려 있어 **768px 미만에서만 고정**되며, 그 이상에서는 일반 헤더처럼 함께 스크롤됩니다 — 확인을 위해 모바일 뷰포트로 열립니다.'
      }
    }
  },
  globals: {
    viewport: {
      value: 'mobile'
    }
  }
}`,...(G=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};const be=["Default_Responsive","Fixed_SM","Fixed_MD","Interactive_Range_Selection","MoveMonth","WithHeaderAction","WithBanner","WithStickyHeader"];export{n as Default_Responsive,u as Fixed_MD,m as Fixed_SM,h as Interactive_Range_Selection,g as MoveMonth,x as WithBanner,D as WithHeaderAction,v as WithStickyHeader,be as __namedExportsOrder,fe as default};
