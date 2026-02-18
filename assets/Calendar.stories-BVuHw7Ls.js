import{j as I}from"./jsx-runtime-D_zvdyIk.js";import{f as u}from"./index-Cpohvpwh.js";import{r}from"./iframe-BRQz8sX-.js";import{t as f,C as A}from"./Calendar-BBsWnUhf.js";import"./preload-helper-Dp1pzeXC.js";import"./types-B8TrPOAa.js";import"./colors-CD_udyfQ.js";import"./index-Ca4j9_td.js";import"./Box-CFqzq0PM.js";import"./mergeStyles-Dw1fI3XI.js";import"./Grid-Cox_7UjN.js";import"./Flex-DZyz3VU6.js";function L(e,t){return+f(e)<+f(t)}const Y={title:"Components/Calendar",component:A,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{today:{control:"date"},events:{control:"object"},size:{control:"radio",options:["sm","md","lg",void 0],description:"undefined(Auto)일 때는 화면 크기에 따라 반응형으로 동작합니다."},selectedStartDate:{control:"date"},selectedEndDate:{control:"date"}},args:{onDateClick:u(),onEventClick:u()}},B=[{id:1,title:"개천절",startDate:"2025-10-03",type:"holiday"},{id:2,title:"추석",startDate:"2025-10-06",type:"holiday"},{id:3,title:"수도권",startDate:"2025-10-07",type:"event"},{id:4,title:"모꼬지",startDate:"2025-10-08",type:"event"},{id:5,title:"한글날",startDate:"2025-10-09",type:"holiday"},{id:6,title:"크자회",startDate:"2025-10-09",type:"event"},{id:7,title:"중간고사",startDate:"2025-10-27",endDate:"2025-10-29",type:"event"},{id:8,title:"팀 회의",startDate:"2025-10-23",type:"event"}],a={args:{className:"border border-gray-100",defaultMonth:new Date(2025,9,1),today:new Date(2025,9,1),events:B}},o={args:{...a.args,size:"sm"}},d={args:{...a.args,size:"md"}},c={args:{...a.args,size:"lg"}},N=Array.from({length:10}).map((e,t)=>({id:`scroll-${t}`,title:`스크롤 테스트 일정 ${t+1}`,startDate:"2025-10-15",type:t%2===0?"event":"important"})),i={args:{...a.args,defaultMonth:new Date(2025,9,1),events:[...B,...N]},parameters:{docs:{description:{story:"하루에 이벤트가 4개 이상일 경우, 영역이 늘어나지 않고 스크롤이 생기는지 확인합니다."}}}},l={args:{...a.args,selectedStartDate:void 0,selectedEndDate:void 0},render:e=>{const[t,D]=r.useState(e.selectedStartDate),[p,n]=r.useState(e.selectedEndDate);r.useEffect(()=>{D(e.selectedStartDate)},[e.selectedStartDate]),r.useEffect(()=>{n(e.selectedEndDate)},[e.selectedEndDate]);const G=s=>{var m;!t||t&&p?(D(s),n(void 0)):L(s,t)?(D(s),n(t)):n(s),(m=e.onDateClick)==null||m.call(e,s)};return I.jsx(A,{...e,selectedStartDate:t,selectedEndDate:p,onDateClick:G})},parameters:{docs:{description:{story:"시작일과 종료일을 클릭하면 파란색 범위가 그려지는 것을 테스트할 수 있습니다."}}}};var g,S,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    className: 'border border-gray-100',
    defaultMonth: new Date(2025, 9, 1),
    today: new Date(2025, 9, 1),
    events: mockEvents
  }
}`,...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var E,y,_;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default_Responsive.args,
    size: 'sm'
  }
}`,...(_=(y=o.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var C,k,x;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default_Responsive.args,
    size: 'md'
  }
}`,...(x=(k=d.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var h,R,M;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default_Responsive.args,
    size: 'lg'
  }
}`,...(M=(R=c.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var z,w,F;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default_Responsive.args,
    defaultMonth: new Date(2025, 9, 1),
    events: [...mockEvents, ...manyEvents]
  },
  parameters: {
    docs: {
      description: {
        story: '하루에 이벤트가 4개 이상일 경우, 영역이 늘어나지 않고 스크롤이 생기는지 확인합니다.'
      }
    }
  }
}`,...(F=(w=i.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var b,j,T;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(j=l.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const Z=["Default_Responsive","Fixed_SM","Fixed_MD","Fixed_LG","Scroll_Test","Interactive_Range_Selection"];export{a as Default_Responsive,c as Fixed_LG,d as Fixed_MD,o as Fixed_SM,l as Interactive_Range_Selection,i as Scroll_Test,Z as __namedExportsOrder,Y as default};
