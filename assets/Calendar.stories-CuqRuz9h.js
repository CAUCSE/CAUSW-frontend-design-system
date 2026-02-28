import{j as B}from"./jsx-runtime-D_zvdyIk.js";import{f as d}from"./index-Cpohvpwh.js";import{r as c}from"./iframe-Br0sS7fQ.js";import{t as f,C as u}from"./Calendar-avZHX7Nv.js";import"./preload-helper-Dp1pzeXC.js";import"./types-2sDnptjW.js";import"./colors-B5_xS8Kn.js";import"./index-Ca4j9_td.js";import"./Box-ChvH-dxV.js";import"./mergeStyles-Dw1fI3XI.js";import"./Grid-CgJqjR0J.js";import"./Flex-CfJTvD6V.js";function L(e,a){return+f(e)<+f(a)}const Y={title:"Components/Calendar",component:u,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{today:{control:"date"},events:{control:"object"},size:{control:"radio",options:["sm","md","lg",void 0],description:"undefined(Auto)일 때는 화면 크기에 따라 반응형으로 동작합니다."},selectedStartDate:{control:"date"},selectedEndDate:{control:"date"}},args:{onDateClick:d(),onEventClick:d(),onPrevMonth:d(),onNextMonth:d()}},G=[{id:1,title:"개천절",startDate:"2025-10-03",type:"holiday"},{id:2,title:"추석",startDate:"2025-10-06",type:"holiday"},{id:3,title:"수도권",startDate:"2025-10-07",type:"event"},{id:4,title:"모꼬지",startDate:"2025-10-08",type:"event"},{id:5,title:"한글날",startDate:"2025-10-09",type:"holiday"},{id:6,title:"크자회",startDate:"2025-10-09",type:"event"},{id:7,title:"중간고사",startDate:"2025-10-27",endDate:"2025-10-29",type:"event"},{id:8,title:"팀 회의",startDate:"2025-10-23",type:"event"},{id:9,title:"1text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-10-11",endDate:"2025-10-23",type:"event"},{id:10,title:"2text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-10-18",endDate:"2025-10-26",type:"event"},{id:11,title:"3text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-10-21",endDate:"2025-10-26",type:"event"},{id:12,title:"4text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-10-15",endDate:"2025-10-27",type:"event"},{id:13,title:"5text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-10-11",endDate:"2025-10-22",type:"event"},{id:14,title:"6text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-10-11",endDate:"2025-10-23",type:"event"},{id:15,title:"7text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-10-11",endDate:"2025-11-03",type:"event"},{id:16,title:"8text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트",startDate:"2025-11-01",endDate:"2025-11-07",type:"event"}],s={args:{className:"border border-gray-100",defaultMonth:new Date(2025,9,1),today:new Date(2025,9,1),events:G}},i={args:{...s.args,size:"sm"}},l={args:{...s.args,size:"md"}},D={args:{...s.args,size:"lg"}},p={args:{...s.args,selectedStartDate:void 0,selectedEndDate:void 0},render:e=>{const[a,r]=c.useState(e.selectedStartDate),[n,t]=c.useState(e.selectedEndDate);c.useEffect(()=>{r(e.selectedStartDate)},[e.selectedStartDate]),c.useEffect(()=>{t(e.selectedEndDate)},[e.selectedEndDate]);const I=o=>{var v;!a||a&&n?(r(o),t(void 0)):L(o,a)?(r(o),t(a)):t(o),(v=e.onDateClick)==null||v.call(e,o)};return B.jsx(u,{...e,selectedStartDate:a,selectedEndDate:n,onDateClick:I})},parameters:{docs:{description:{story:"시작일과 종료일을 클릭하면 파란색 범위가 그려지는 것을 테스트할 수 있습니다."}}}},m={render:e=>{const a=n=>{var t;console.log("스토리 레이어 - 이전 달:",n),(t=e.onPrevMonth)==null||t.call(e,n)},r=n=>{var t;console.log("스토리 레이어 - 다음 달:",n),(t=e.onNextMonth)==null||t.call(e,n)};return B.jsx(u,{...e,onPrevMonth:a,onNextMonth:r})},args:{className:"border border-gray-100",defaultMonth:new Date(2025,9,1),today:new Date(2025,9,1),events:G}};var g,y,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    className: 'border border-gray-100',
    defaultMonth: new Date(2025, 9, 1),
    today: new Date(2025, 9, 1),
    events: mockEvents
  }
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,h,E;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default_Responsive.args,
    size: 'sm'
  }
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var M,_,C;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default_Responsive.args,
    size: 'md'
  }
}`,...(C=(_=l.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var k,N,b;D.parameters={...D.parameters,docs:{...(k=D.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default_Responsive.args,
    size: 'lg'
  }
}`,...(b=(N=D.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var R,w,P;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(P=(w=p.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var z,F,j;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=(F=m.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const Z=["Default_Responsive","Fixed_SM","Fixed_MD","Fixed_LG","Interactive_Range_Selection","MoveMonth"];export{s as Default_Responsive,D as Fixed_LG,l as Fixed_MD,i as Fixed_SM,p as Interactive_Range_Selection,m as MoveMonth,Z as __namedExportsOrder,Y as default};
