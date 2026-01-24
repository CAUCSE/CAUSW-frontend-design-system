import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-CYzFodF5.js";import{t as gt}from"./index-CKBcBfht.js";import{m as le}from"./mergeStyles-B83jKakq.js";import{C as jt,P as It}from"./chunk-4PGAIDWE-CGCBBYjZ.js";import{C as re}from"./Checkbox-CgOcPO31.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-CJvxXMcu.js";import"./chunk-EVKQEOYT-B7U-Du-_.js";import"./Text-5VzG3BB5.js";const ft=l.createContext(null),vt=()=>{const a=l.useContext(ft);if(!a)throw new Error("RatioChart 서브 컴포넌트는 <RatioChart.Root> 내부에서 사용해야 합니다.");return a},k=gt({slots:{root:"flex flex-col gap-[0.75rem] pb-[0.5rem] min-w-[20rem] max-h-[16.25rem] overflow-y-auto",item:"relative flex items-center px-[1rem] h-[3.5rem] flex-shrink-0 rounded-[0.75rem] border border-gray-200 overflow-hidden transition-all duration-200",fill:"absolute inset-y-0 left-0 rounded-l-[0.75rem] transition-all duration-300",content:"absolute inset-0 z-10 flex items-center justify-between px-[1rem] gap-[0.5rem] typo-body1-md-point",label:"truncate",ratio:"flex-shrink-0",footer:"flex items-end justify-between px-[0.25rem]",footerText:"typo-body-14 text-gray-400"},variants:{disabled:{true:{root:"opacity-50 cursor-not-allowed",item:"cursor-not-allowed"},false:{item:"cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-inset"}},selected:{true:{fill:"bg-gray-900"},false:{fill:"bg-gray-200"}},contentVariant:{light:{content:"text-white font-bold"},dark:{content:"text-gray-800 font-medium"}}},defaultVariants:{disabled:!1,selected:!1,contentVariant:"dark"}}),oe=a=>{const{mode:o="single",value:s,defaultValue:i,onValueChange:m,disabled:b,children:j,className:x,...v}=a,[S,R]=l.useState(()=>o==="single"&&typeof i=="string"?i:""),[V,I]=l.useState(()=>o==="multiple"&&Array.isArray(i)?i:[]),[h,y]=l.useState(new Map),p=s!==void 0,g=o==="single"?p?s:S:p?s:V,u=l.useCallback(r=>o==="single"?g===r:g.includes(r),[o,g]),F=l.useCallback(r=>{if(!b)if(o==="single")p||R(r),m==null||m(r);else{const n=g,d=n.includes(r)?n.filter(w=>w!==r):[...n,r];p||I(d),m==null||m(d)}},[o,b,p,g,m]),C=l.useCallback((r,n)=>{y(d=>new Map(d).set(r,n))},[]),M=l.useCallback(r=>{y(n=>{const d=new Map(n);return d.delete(r),d})},[]),f=l.useMemo(()=>{let r=0;return h.forEach(n=>r+=n),r},[h]),N=l.useCallback(r=>{const n=h.get(r)??0;return f>0?Math.round(n/f*100):0},[h,f]),D=k({disabled:b});return e.jsx(ft.Provider,{value:{value:g,mode:o,disabled:b,onSelect:F,isSelected:u,counts:h,registerCount:C,unregisterCount:M,totalCount:f,getRatio:N},children:e.jsx("div",{role:"group",className:le(D.root(),x),...v,children:j})})},Rt=({value:a,label:o,count:s,ratio:i,disabled:m,className:b,...j})=>{const{disabled:x,onSelect:v,isSelected:S,registerCount:R,unregisterCount:V,getRatio:I}=vt(),h=m||x,y=S(a);l.useEffect(()=>{if(s!==void 0)return R(a,s),()=>V(a)},[s,a,R,V]);const p=()=>{h||v(a)},g=D=>{(D.key==="Enter"||D.key===" ")&&!h&&(D.preventDefault(),v(a))},u=s!==void 0?I(a):i??0,F=s!==void 0||i!==void 0,C=k({disabled:h,selected:y}),M=k({contentVariant:"light"}),f=k({contentVariant:"dark"}),N=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:C.label(),children:o}),F&&e.jsxs("span",{className:C.ratio(),children:[u,"%"]})]});return e.jsxs("button",{type:"button",role:"option","aria-selected":y,disabled:h,onClick:p,onKeyDown:g,className:le(C.item(),b),style:{minWidth:0},...j,children:[e.jsx("span",{className:C.fill(),style:{width:`${u}%`}}),y?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:M.content(),style:{clipPath:`inset(0 ${100-u}% 0 0)`},children:N}),e.jsx("span",{className:f.content(),style:{clipPath:`inset(0 0 0 ${u}%)`},children:N})]}):e.jsx("span",{className:f.content(),children:N})]})};function Nt(a){const o=new Date,s=a.getTime()-o.getTime();if(s<=0)return"종료됨";const i=s/(1e3*60*60),m=s/(1e3*60);return i>=24?`${Math.round(i/24)}일 후 종료`:i>=1?`${Math.floor(i)}시간 후 종료`:`${Math.floor(m)}분 후 종료`}const yt=({endDate:a,endTime:o,hideParticipantCount:s,className:i,children:m,...b})=>{const{totalCount:j}=vt(),x=a?Nt(a):o,v=k();return e.jsx("div",{className:le(v.footer(),i),...b,children:m??e.jsxs(e.Fragment,{children:[!s&&e.jsxs("span",{className:v.footerText(),children:[j,"명 참여"]}),x&&e.jsx("span",{className:v.footerText(),children:x})]})})};oe.displayName="RatioChart.Root";Rt.displayName="RatioChart.Item";yt.displayName="RatioChart.Footer";const t=Object.assign(oe,{Root:oe,Item:Rt,Footer:yt});oe.__docgenInfo={description:"",methods:[],displayName:"RatioChart.Root"};const Dt=gt({slots:{root:"flex flex-col gap-[1.25rem] pb-[0.5rem] min-w-[20rem]",fields:"flex flex-col gap-[0.75rem] max-h-[16.25rem] overflow-y-auto",input:"flex items-center gap-[1rem] h-[3.5rem] flex-shrink-0 px-[1rem] rounded-[0.75rem] border border-gray-200 bg-white",textInput:"flex-1 h-full bg-transparent outline-none typo-fixed-16 text-gray-800 placeholder:text-gray-400",removeButton:"flex-shrink-0 p-[0.25rem] rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors",addButton:"flex items-center gap-[0.5rem] h-[3.5rem] flex-shrink-0 px-[1rem] rounded-[0.75rem] border border-dashed border-gray-200 bg-white cursor-pointer hover:bg-gray-50 transition-colors",addButtonText:"typo-fixed-16 text-gray-400",footer:"flex items-center justify-between",deleteButton:"typo-fixed-16 text-red-400 cursor-pointer hover:text-red-500 transition-colors"},variants:{disabled:{true:{root:"opacity-50 pointer-events-none"}}},defaultVariants:{disabled:!1}}),E=({options:a,onOptionsChange:o,allowMultiple:s,onAllowMultipleChange:i,onDelete:m,minOptions:b=2,placeholder:j="내용을 입력해주세요",disabled:x,className:v,...S})=>{const R=l.useId(),[V,I]=l.useState(()=>{const n=[];for(let d=0;d<b;d++)n.push({id:`${R}-${d}`,value:""});return n}),[h,y]=l.useState(!1),p=a!==void 0,g=s!==void 0,u=p?a:V,F=g?s:h,C=l.useCallback((n,d)=>{const w=u.map(T=>T.id===n?{...T,value:d}:T);p||I(w),o==null||o(w)},[u,p,o]),M=l.useCallback(()=>{const n={id:`${R}-${Date.now()}`,value:""},d=[...u,n];p||I(d),o==null||o(d)},[u,p,o,R]),f=l.useCallback(n=>{if(u.length<=b)return;const d=u.filter(w=>w.id!==n);p||I(d),o==null||o(d)},[u,b,p,o]),N=l.useCallback(n=>{g||y(n),i==null||i(n)},[g,i]),D=u.length>b,r=Dt({disabled:x});return e.jsxs("div",{className:le(r.root(),v),...S,children:[e.jsxs("div",{className:r.fields(),children:[u.map(n=>e.jsxs("div",{className:r.input(),children:[e.jsx("input",{type:"text",value:n.value,onChange:d=>C(n.id,d.target.value),placeholder:j,disabled:x,className:r.textInput()}),D&&e.jsx("button",{type:"button",onClick:()=>f(n.id),disabled:x,className:r.removeButton(),"aria-label":"옵션 삭제",children:e.jsx(jt,{size:20})})]},n.id)),e.jsxs("button",{type:"button",onClick:M,disabled:x,className:r.addButton(),children:[e.jsx(It,{size:20}),e.jsx("span",{className:r.addButtonText(),children:"다른 선택 항목 추가"})]})]}),e.jsxs("div",{className:r.footer(),children:[e.jsxs(re,{checked:F,onCheckedChange:N,disabled:x,children:[e.jsx(re.Indicator,{}),e.jsx(re.Label,{children:"복수 선택 허용"})]}),m&&e.jsx("button",{type:"button",onClick:m,disabled:x,className:r.deleteButton(),children:"투표 삭제"})]})]})};E.displayName="RatioChartEditor";E.__docgenInfo={description:"",methods:[],displayName:"RatioChartEditor",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"RatioChartEditorOption"}],raw:"RatioChartEditorOption[]"},description:"옵션 목록"},onOptionsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(options: RatioChartEditorOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"RatioChartEditorOption"}],raw:"RatioChartEditorOption[]"},name:"options"}],return:{name:"void"}}},description:"옵션 변경 콜백"},allowMultiple:{required:!1,tsType:{name:"boolean"},description:"복수 선택 허용 여부"},onAllowMultipleChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(allowMultiple: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"allowMultiple"}],return:{name:"void"}}},description:"복수 선택 변경 콜백"},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"투표 삭제 콜백"},minOptions:{required:!1,tsType:{name:"number"},description:"최소 옵션 수 (기본: 2)",defaultValue:{value:"2",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"플레이스홀더 텍스트",defaultValue:{value:"'내용을 입력해주세요'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화"}},composes:["Omit"]};const qt={title:"Components/RatioChart",component:t,parameters:{layout:"centered",backgrounds:{default:"white",values:[{name:"white",value:"#ffffff"},{name:"gray",value:"#f3f4f6"}]}},tags:["autodocs"]},wt=a=>{const{mode:o,disabled:s,itemCount:i,useCount:m,item1Label:b,item1Value:j,item1Disabled:x,item2Label:v,item2Value:S,item2Disabled:R,item3Label:V,item3Value:I,item3Disabled:h,item4Label:y,item4Value:p,item4Disabled:g,item5Label:u,item5Value:F,item5Disabled:C,showFooter:M,useEndDate:f,endDays:N,endTime:D,hideParticipantCount:r}=a,[n,d]=l.useState("item1"),[w,T]=l.useState([]),ne=l.useMemo(()=>[{value:"item1",label:b,count:j,disabled:x},{value:"item2",label:v,count:S,disabled:R},{value:"item3",label:V,count:I,disabled:h},{value:"item4",label:y,count:p,disabled:g},{value:"item5",label:u,count:F,disabled:C}],[b,j,x,v,S,R,V,I,h,y,p,g,u,F,C]).slice(0,i),A=ne.reduce((c,Ct)=>c+Ct.count,0),se=l.useMemo(()=>{const c=new Date;return c.setDate(c.getDate()+N),c},[N]);return e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"Playground"}),o==="single"?e.jsxs(t.Root,{mode:"single",value:n,onValueChange:d,disabled:s,children:[ne.map(c=>m?e.jsx(t.Item,{value:c.value,label:c.label,count:c.count,disabled:c.disabled},c.value):e.jsx(t.Item,{value:c.value,label:c.label,ratio:A>0?Math.round(c.count/A*100):0,disabled:c.disabled},c.value)),M&&e.jsx(t.Footer,{endDate:f?se:void 0,endTime:f?void 0:D,hideParticipantCount:r})]}):e.jsxs(t.Root,{mode:"multiple",value:w,onValueChange:T,disabled:s,children:[ne.map(c=>m?e.jsx(t.Item,{value:c.value,label:c.label,count:c.count,disabled:c.disabled},c.value):e.jsx(t.Item,{value:c.value,label:c.label,ratio:A>0?Math.round(c.count/A*100):0,disabled:c.disabled},c.value)),M&&e.jsx(t.Footer,{endDate:f?se:void 0,endTime:f?void 0:D,hideParticipantCount:r})]}),e.jsxs("div",{className:"text-sm text-gray-500",children:[e.jsxs("p",{children:["선택된 값:"," ",o==="single"?n:w.length>0?w.join(", "):"없음"]}),m&&e.jsxs("p",{children:["총 참여: ",A,"명"]})]})]})},O={render:a=>e.jsx(wt,{...a}),args:{mode:"single",disabled:!1,itemCount:3,useCount:!0,item1Label:"두쫀쿠",item1Value:8,item1Disabled:!1,item2Label:"마라탕",item2Value:5,item2Disabled:!1,item3Label:"엽떡",item3Value:2,item3Disabled:!1,item4Label:"치킨",item4Value:0,item4Disabled:!1,item5Label:"구이",item5Value:0,item5Disabled:!1,showFooter:!0,useEndDate:!1,endDays:3,endTime:"72시간 후 종료",hideParticipantCount:!1},argTypes:{mode:{control:"radio",options:["single","multiple"],description:"선택 모드",table:{category:"Root"}},disabled:{control:"boolean",description:"전체 비활성화",table:{category:"Root"}},itemCount:{control:{type:"range",min:2,max:5,step:1},description:"항목 개수",table:{category:"Items"}},useCount:{control:"boolean",description:"count 자동 계산 사용 (false면 ratio 직접 지정)",table:{category:"Items"}},item1Label:{control:"text",table:{category:"Item 1"}},item1Value:{control:{type:"number",min:0},table:{category:"Item 1"}},item1Disabled:{control:"boolean",table:{category:"Item 1"}},item2Label:{control:"text",table:{category:"Item 2"}},item2Value:{control:{type:"number",min:0},table:{category:"Item 2"}},item2Disabled:{control:"boolean",table:{category:"Item 2"}},item3Label:{control:"text",table:{category:"Item 3"}},item3Value:{control:{type:"number",min:0},table:{category:"Item 3"}},item3Disabled:{control:"boolean",table:{category:"Item 3"}},item4Label:{control:"text",table:{category:"Item 4"}},item4Value:{control:{type:"number",min:0},table:{category:"Item 4"}},item4Disabled:{control:"boolean",table:{category:"Item 4"}},item5Label:{control:"text",table:{category:"Item 5"}},item5Value:{control:{type:"number",min:0},table:{category:"Item 5"}},item5Disabled:{control:"boolean",table:{category:"Item 5"}},showFooter:{control:"boolean",description:"Footer 표시",table:{category:"Footer"}},useEndDate:{control:"boolean",description:"endDate 사용 (false면 endTime 문자열 사용)",table:{category:"Footer"}},endDays:{control:{type:"number",min:0},description:"종료까지 남은 일수 (useEndDate=true일 때)",table:{category:"Footer"}},endTime:{control:"text",description:"종료 시간 문자열 (useEndDate=false일 때)",table:{category:"Footer"}},hideParticipantCount:{control:"boolean",description:"참여 인원 숨기기",table:{category:"Footer"}}}},L={render:()=>e.jsxs(t.Root,{children:[e.jsx(t.Item,{value:"option1",label:"짬뽕",ratio:80}),e.jsx(t.Item,{value:"option2",label:"짜장면",ratio:20})]})},B={render:()=>{const[a,o]=l.useState("option1");return e.jsxs("div",{className:"flex flex-col gap-[1rem]",children:[e.jsxs(t.Root,{value:a,onValueChange:o,children:[e.jsx(t.Item,{value:"option1",label:"짬뽕",ratio:80}),e.jsx(t.Item,{value:"option2",label:"짜장면",ratio:20})]}),e.jsxs("p",{className:"text-sm text-gray-500",children:["선택된 값: ",a]})]})}},q={render:()=>{const[a,o]=l.useState([]);return e.jsxs("div",{className:"flex flex-col gap-[1rem]",children:[e.jsxs(t.Root,{mode:"multiple",value:a,onValueChange:o,children:[e.jsx(t.Item,{value:"option1",label:"ICT",ratio:45}),e.jsx(t.Item,{value:"option2",label:"동네",ratio:30}),e.jsx(t.Item,{value:"option3",label:"크자회",ratio:25})]}),e.jsxs("p",{className:"text-sm text-gray-500",children:["선택된 값: ",a.length>0?a.join(", "):"없음"]})]})}},P={render:()=>e.jsxs("div",{className:"flex flex-col gap-[1rem]",children:[e.jsxs(t.Root,{defaultValue:"high",children:[e.jsx(t.Item,{value:"high",label:"높은 비율",ratio:90}),e.jsx(t.Item,{value:"low",label:"낮은 비율",ratio:10})]}),e.jsxs(t.Root,{defaultValue:"equal1",children:[e.jsx(t.Item,{value:"equal1",label:"동일 비율 A",ratio:50}),e.jsx(t.Item,{value:"equal2",label:"동일 비율 B",ratio:50})]}),e.jsxs(t.Root,{defaultValue:"zero",children:[e.jsx(t.Item,{value:"zero",label:"0%",ratio:0}),e.jsx(t.Item,{value:"full",label:"100%",ratio:100})]})]})},W={render:()=>e.jsxs(t.Root,{defaultValue:"option1",children:[e.jsx(t.Item,{value:"option1",label:"옵션 A"}),e.jsx(t.Item,{value:"option2",label:"옵션 B"})]})},$={render:()=>e.jsxs("div",{className:"flex flex-col gap-[1rem]",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"전체 비활성화:"}),e.jsxs(t.Root,{disabled:!0,defaultValue:"option1",children:[e.jsx(t.Item,{value:"option1",label:"TypeScript",ratio:80}),e.jsx(t.Item,{value:"option2",label:"JavaScript",ratio:20})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"개별 항목 비활성화:"}),e.jsxs(t.Root,{defaultValue:"option1",children:[e.jsx(t.Item,{value:"option1",label:"선택 가능",ratio:60}),e.jsx(t.Item,{value:"option2",label:"비활성화",ratio:40,disabled:!0})]})]})},z={render:()=>e.jsxs(t.Root,{defaultValue:"option1",children:[e.jsx(t.Item,{value:"option1",label:"찬성",ratio:55}),e.jsx(t.Item,{value:"option2",label:"반대",ratio:30}),e.jsx(t.Item,{value:"option3",label:"기권",ratio:15})]})},_={render:()=>{const[a,o]=l.useState(""),s=i=>{o(i)};return e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"오늘 점심 뭐 먹을까요?"}),e.jsxs(t.Root,{value:a,onValueChange:s,children:[e.jsx(t.Item,{value:"jjamppong",label:"짬뽕",ratio:65}),e.jsx(t.Item,{value:"jjajang",label:"짜장면",ratio:35})]}),a&&e.jsxs("p",{className:"text-sm text-gray-600",children:[a==="jjamppong"?"짬뽕":"짜장면","에 투표했습니다!"]})]})}},J={render:()=>e.jsxs("div",{className:"flex flex-col gap-[1rem]",children:[e.jsxs("div",{className:"w-[20rem]",children:[e.jsx("p",{className:"mb-[0.5rem] text-sm text-gray-500",children:"최소 너비 (320px)"}),e.jsxs(t.Root,{defaultValue:"option1",children:[e.jsx(t.Item,{value:"option1",label:"A",ratio:70}),e.jsx(t.Item,{value:"option2",label:"B",ratio:30})]})]}),e.jsxs("div",{className:"w-[30rem]",children:[e.jsx("p",{className:"mb-[0.5rem] text-sm text-gray-500",children:"넓은 너비 (480px)"}),e.jsxs(t.Root,{defaultValue:"option1",children:[e.jsx(t.Item,{value:"option1",label:"긴 레이블 텍스트",ratio:70}),e.jsx(t.Item,{value:"option2",label:"짧은 텍스트",ratio:30})]})]})]})},K={name:"Footer - Auto Ratio",render:()=>{const[a,o]=l.useState("option1");return e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"오늘 점심 뭐 먹을까요?"}),e.jsxs(t.Root,{value:a,onValueChange:o,children:[e.jsx(t.Item,{value:"option1",label:"짬뽕",count:8}),e.jsx(t.Item,{value:"option2",label:"짜장면",count:2}),e.jsx(t.Footer,{endTime:"72시간 후 종료"})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"count만 전달하면 자동으로 total과 ratio 계산 (8+2=10, 80%/20%)"})]})}},H={name:"Footer - Before Voting",render:()=>e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"오늘 점심 뭐 먹을까요?"}),e.jsxs(t.Root,{children:[e.jsx(t.Item,{value:"option1",label:"짬뽕",count:0}),e.jsx(t.Item,{value:"option2",label:"짜장면",count:0}),e.jsx(t.Footer,{endTime:"72시간 후 종료"})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"아직 투표 전 상태 (0명 참여)"})]})},G={name:"Footer - After Voting",render:()=>e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"오늘 점심 뭐 먹을까요?"}),e.jsxs(t.Root,{defaultValue:"option1",disabled:!0,children:[e.jsx(t.Item,{value:"option1",label:"짬뽕",count:65}),e.jsx(t.Item,{value:"option2",label:"짜장면",count:35}),e.jsx(t.Footer,{endTime:"종료됨"})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"투표 종료 상태 (disabled + 종료됨 표시)"})]})},Q={name:"Footer - With EndDate",render:()=>{const a=new Date;return a.setDate(a.getDate()+3),e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"이번 주 회식 메뉴"}),e.jsxs(t.Root,{children:[e.jsx(t.Item,{value:"option1",label:"고기",count:15}),e.jsx(t.Item,{value:"option2",label:"해산물",count:8}),e.jsx(t.Item,{value:"option3",label:"한식",count:7}),e.jsx(t.Footer,{endDate:a})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"endDate를 전달하면 자동으로 남은 시간 계산"})]})}},U={name:"Footer - Custom Children",render:()=>e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"커스텀 Footer"}),e.jsxs(t.Root,{children:[e.jsx(t.Item,{value:"option1",label:"옵션 A",count:10}),e.jsx(t.Item,{value:"option2",label:"옵션 B",count:5}),e.jsxs(t.Footer,{children:[e.jsx("span",{className:"typo-body-14 text-gray-400",children:"익명 투표"}),e.jsx("span",{className:"typo-body-14 text-blue-500",children:"결과 보기"})]})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"children으로 커스텀 Footer 내용 전달 가능"})]})},X={name:"Manual Ratio",render:()=>e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"기존 ratio 방식"}),e.jsxs(t.Root,{children:[e.jsx(t.Item,{value:"option1",label:"짬뽕",ratio:80}),e.jsx(t.Item,{value:"option2",label:"짜장면",ratio:20})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"ratio를 직접 지정하는 방식도 호환됨"})]})},Y={name:"Edit Mode - Default",render:()=>e.jsx(E,{onDelete:()=>alert("투표 삭제")})},Z={name:"Edit Mode - Controlled",render:()=>{const[a,o]=l.useState([{id:"1",value:"짬뽕"},{id:"2",value:""}]),[s,i]=l.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-[1rem]",children:[e.jsx(E,{options:a,onOptionsChange:o,allowMultiple:s,onAllowMultipleChange:i,onDelete:()=>alert("투표 삭제")}),e.jsxs("div",{className:"text-sm text-gray-500",children:[e.jsxs("p",{children:["옵션: ",JSON.stringify(a.map(m=>m.value))]}),e.jsxs("p",{children:["복수 선택: ",s?"허용":"비허용"]})]})]})}},ee={name:"Edit Mode - Three Options",render:()=>{const[a,o]=l.useState([{id:"1",value:"짬뽕"},{id:"2",value:""},{id:"3",value:""}]);return e.jsx(E,{options:a,onOptionsChange:o,onDelete:()=>alert("투표 삭제")})}},te={name:"Edit Mode - Filled Options",render:()=>{const[a,o]=l.useState([{id:"1",value:"짬뽕"},{id:"2",value:"짜장면"},{id:"3",value:"탕수육"}]),[s,i]=l.useState(!0);return e.jsx(E,{options:a,onOptionsChange:o,allowMultiple:s,onAllowMultipleChange:i,onDelete:()=>alert("투표 삭제")})}},ae={name:"Edit Mode - Disabled",render:()=>e.jsx(E,{disabled:!0,onDelete:()=>alert("투표 삭제")})};var ie,ce,de;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => <PlaygroundComponent {...args} />,
  args: {
    // Root
    mode: 'single',
    disabled: false,
    // Items
    itemCount: 3,
    useCount: true,
    item1Label: '두쫀쿠',
    item1Value: 8,
    item1Disabled: false,
    item2Label: '마라탕',
    item2Value: 5,
    item2Disabled: false,
    item3Label: '엽떡',
    item3Value: 2,
    item3Disabled: false,
    item4Label: '치킨',
    item4Value: 0,
    item4Disabled: false,
    item5Label: '구이',
    item5Value: 0,
    item5Disabled: false,
    // Footer
    showFooter: true,
    useEndDate: false,
    endDays: 3,
    endTime: '72시간 후 종료',
    hideParticipantCount: false
  },
  argTypes: {
    // Root
    mode: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: '선택 모드',
      table: {
        category: 'Root'
      }
    },
    disabled: {
      control: 'boolean',
      description: '전체 비활성화',
      table: {
        category: 'Root'
      }
    },
    // Items
    itemCount: {
      control: {
        type: 'range',
        min: 2,
        max: 5,
        step: 1
      },
      description: '항목 개수',
      table: {
        category: 'Items'
      }
    },
    useCount: {
      control: 'boolean',
      description: 'count 자동 계산 사용 (false면 ratio 직접 지정)',
      table: {
        category: 'Items'
      }
    },
    item1Label: {
      control: 'text',
      table: {
        category: 'Item 1'
      }
    },
    item1Value: {
      control: {
        type: 'number',
        min: 0
      },
      table: {
        category: 'Item 1'
      }
    },
    item1Disabled: {
      control: 'boolean',
      table: {
        category: 'Item 1'
      }
    },
    item2Label: {
      control: 'text',
      table: {
        category: 'Item 2'
      }
    },
    item2Value: {
      control: {
        type: 'number',
        min: 0
      },
      table: {
        category: 'Item 2'
      }
    },
    item2Disabled: {
      control: 'boolean',
      table: {
        category: 'Item 2'
      }
    },
    item3Label: {
      control: 'text',
      table: {
        category: 'Item 3'
      }
    },
    item3Value: {
      control: {
        type: 'number',
        min: 0
      },
      table: {
        category: 'Item 3'
      }
    },
    item3Disabled: {
      control: 'boolean',
      table: {
        category: 'Item 3'
      }
    },
    item4Label: {
      control: 'text',
      table: {
        category: 'Item 4'
      }
    },
    item4Value: {
      control: {
        type: 'number',
        min: 0
      },
      table: {
        category: 'Item 4'
      }
    },
    item4Disabled: {
      control: 'boolean',
      table: {
        category: 'Item 4'
      }
    },
    item5Label: {
      control: 'text',
      table: {
        category: 'Item 5'
      }
    },
    item5Value: {
      control: {
        type: 'number',
        min: 0
      },
      table: {
        category: 'Item 5'
      }
    },
    item5Disabled: {
      control: 'boolean',
      table: {
        category: 'Item 5'
      }
    },
    // Footer
    showFooter: {
      control: 'boolean',
      description: 'Footer 표시',
      table: {
        category: 'Footer'
      }
    },
    useEndDate: {
      control: 'boolean',
      description: 'endDate 사용 (false면 endTime 문자열 사용)',
      table: {
        category: 'Footer'
      }
    },
    endDays: {
      control: {
        type: 'number',
        min: 0
      },
      description: '종료까지 남은 일수 (useEndDate=true일 때)',
      table: {
        category: 'Footer'
      }
    },
    endTime: {
      control: 'text',
      description: '종료 시간 문자열 (useEndDate=false일 때)',
      table: {
        category: 'Footer'
      }
    },
    hideParticipantCount: {
      control: 'boolean',
      description: '참여 인원 숨기기',
      table: {
        category: 'Footer'
      }
    }
  }
}`,...(de=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ue,pe;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <RatioChart.Root>
      <RatioChart.Item value="option1" label="짬뽕" ratio={80} />
      <RatioChart.Item value="option2" label="짜장면" ratio={20} />
    </RatioChart.Root>
}`,...(pe=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var be,xe,he;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('option1');
    return <div className="flex flex-col gap-[1rem]">
        <RatioChart.Root value={selected} onValueChange={setSelected}>
          <RatioChart.Item value="option1" label="짬뽕" ratio={80} />
          <RatioChart.Item value="option2" label="짜장면" ratio={20} />
        </RatioChart.Root>
        <p className="text-sm text-gray-500">선택된 값: {selected}</p>
      </div>;
  }
}`,...(he=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var ge,fe,ve;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return <div className="flex flex-col gap-[1rem]">
        <RatioChart.Root mode="multiple" value={selected} onValueChange={setSelected}>
          <RatioChart.Item value="option1" label="ICT" ratio={45} />
          <RatioChart.Item value="option2" label="동네" ratio={30} />
          <RatioChart.Item value="option3" label="크자회" ratio={25} />
        </RatioChart.Root>
        <p className="text-sm text-gray-500">
          선택된 값: {selected.length > 0 ? selected.join(', ') : '없음'}
        </p>
      </div>;
  }
}`,...(ve=(fe=q.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var Re,ye,Ce;P.parameters={...P.parameters,docs:{...(Re=P.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-[1rem]">
      <RatioChart.Root defaultValue="high">
        <RatioChart.Item value="high" label="높은 비율" ratio={90} />
        <RatioChart.Item value="low" label="낮은 비율" ratio={10} />
      </RatioChart.Root>

      <RatioChart.Root defaultValue="equal1">
        <RatioChart.Item value="equal1" label="동일 비율 A" ratio={50} />
        <RatioChart.Item value="equal2" label="동일 비율 B" ratio={50} />
      </RatioChart.Root>

      <RatioChart.Root defaultValue="zero">
        <RatioChart.Item value="zero" label="0%" ratio={0} />
        <RatioChart.Item value="full" label="100%" ratio={100} />
      </RatioChart.Root>
    </div>
}`,...(Ce=(ye=P.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source}}};var je,Ie,Ne;W.parameters={...W.parameters,docs:{...(je=W.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <RatioChart.Root defaultValue="option1">
      <RatioChart.Item value="option1" label="옵션 A" />
      <RatioChart.Item value="option2" label="옵션 B" />
    </RatioChart.Root>
}`,...(Ne=(Ie=W.parameters)==null?void 0:Ie.docs)==null?void 0:Ne.source}}};var De,we,Ve;$.parameters={...$.parameters,docs:{...(De=$.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-[1rem]">
      <p className="text-sm text-gray-500">전체 비활성화:</p>
      <RatioChart.Root disabled defaultValue="option1">
        <RatioChart.Item value="option1" label="TypeScript" ratio={80} />
        <RatioChart.Item value="option2" label="JavaScript" ratio={20} />
      </RatioChart.Root>

      <p className="text-sm text-gray-500">개별 항목 비활성화:</p>
      <RatioChart.Root defaultValue="option1">
        <RatioChart.Item value="option1" label="선택 가능" ratio={60} />
        <RatioChart.Item value="option2" label="비활성화" ratio={40} disabled />
      </RatioChart.Root>
    </div>
}`,...(Ve=(we=$.parameters)==null?void 0:we.docs)==null?void 0:Ve.source}}};var Se,Fe,Me;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <RatioChart.Root defaultValue="option1">
      <RatioChart.Item value="option1" label="찬성" ratio={55} />
      <RatioChart.Item value="option2" label="반대" ratio={30} />
      <RatioChart.Item value="option3" label="기권" ratio={15} />
    </RatioChart.Root>
}`,...(Me=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};var Ee,Te,Ae;_.parameters={..._.parameters,docs:{...(Ee=_.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const [vote, setVote] = useState<string>('');
    const handleVote = (value: string) => {
      setVote(value);
    };
    return <div className="flex w-[25rem] flex-col gap-[1rem]">
        <h3 className="font-bold">오늘 점심 뭐 먹을까요?</h3>
        <RatioChart.Root value={vote} onValueChange={handleVote}>
          <RatioChart.Item value="jjamppong" label="짬뽕" ratio={65} />
          <RatioChart.Item value="jjajang" label="짜장면" ratio={35} />
        </RatioChart.Root>
        {vote && <p className="text-sm text-gray-600">
            {vote === 'jjamppong' ? '짬뽕' : '짜장면'}에 투표했습니다!
          </p>}
      </div>;
  }
}`,...(Ae=(Te=_.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var ke,Oe,Le;J.parameters={...J.parameters,docs:{...(ke=J.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-[1rem]">
      <div className="w-[20rem]">
        <p className="mb-[0.5rem] text-sm text-gray-500">최소 너비 (320px)</p>
        <RatioChart.Root defaultValue="option1">
          <RatioChart.Item value="option1" label="A" ratio={70} />
          <RatioChart.Item value="option2" label="B" ratio={30} />
        </RatioChart.Root>
      </div>

      <div className="w-[30rem]">
        <p className="mb-[0.5rem] text-sm text-gray-500">넓은 너비 (480px)</p>
        <RatioChart.Root defaultValue="option1">
          <RatioChart.Item value="option1" label="긴 레이블 텍스트" ratio={70} />
          <RatioChart.Item value="option2" label="짧은 텍스트" ratio={30} />
        </RatioChart.Root>
      </div>
    </div>
}`,...(Le=(Oe=J.parameters)==null?void 0:Oe.docs)==null?void 0:Le.source}}};var Be,qe,Pe;K.parameters={...K.parameters,docs:{...(Be=K.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Footer - Auto Ratio',
  render: () => {
    const [selected, setSelected] = useState('option1');
    return <div className="flex w-[25rem] flex-col gap-[1rem]">
        <h3 className="font-bold">오늘 점심 뭐 먹을까요?</h3>
        <RatioChart.Root value={selected} onValueChange={setSelected}>
          <RatioChart.Item value="option1" label="짬뽕" count={8} />
          <RatioChart.Item value="option2" label="짜장면" count={2} />
          <RatioChart.Footer endTime="72시간 후 종료" />
        </RatioChart.Root>
        <p className="text-sm text-gray-500">
          count만 전달하면 자동으로 total과 ratio 계산 (8+2=10, 80%/20%)
        </p>
      </div>;
  }
}`,...(Pe=(qe=K.parameters)==null?void 0:qe.docs)==null?void 0:Pe.source}}};var We,$e,ze;H.parameters={...H.parameters,docs:{...(We=H.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'Footer - Before Voting',
  render: () => <div className="flex w-[25rem] flex-col gap-[1rem]">
      <h3 className="font-bold">오늘 점심 뭐 먹을까요?</h3>
      <RatioChart.Root>
        <RatioChart.Item value="option1" label="짬뽕" count={0} />
        <RatioChart.Item value="option2" label="짜장면" count={0} />
        <RatioChart.Footer endTime="72시간 후 종료" />
      </RatioChart.Root>
      <p className="text-sm text-gray-500">아직 투표 전 상태 (0명 참여)</p>
    </div>
}`,...(ze=($e=H.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var _e,Je,Ke;G.parameters={...G.parameters,docs:{...(_e=G.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Footer - After Voting',
  render: () => <div className="flex w-[25rem] flex-col gap-[1rem]">
      <h3 className="font-bold">오늘 점심 뭐 먹을까요?</h3>
      <RatioChart.Root defaultValue="option1" disabled>
        <RatioChart.Item value="option1" label="짬뽕" count={65} />
        <RatioChart.Item value="option2" label="짜장면" count={35} />
        <RatioChart.Footer endTime="종료됨" />
      </RatioChart.Root>
      <p className="text-sm text-gray-500">
        투표 종료 상태 (disabled + 종료됨 표시)
      </p>
    </div>
}`,...(Ke=(Je=G.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var He,Ge,Qe;Q.parameters={...Q.parameters,docs:{...(He=Q.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'Footer - With EndDate',
  render: () => {
    // 현재 시간에서 3일 후
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);
    return <div className="flex w-[25rem] flex-col gap-[1rem]">
        <h3 className="font-bold">이번 주 회식 메뉴</h3>
        <RatioChart.Root>
          <RatioChart.Item value="option1" label="고기" count={15} />
          <RatioChart.Item value="option2" label="해산물" count={8} />
          <RatioChart.Item value="option3" label="한식" count={7} />
          <RatioChart.Footer endDate={endDate} />
        </RatioChart.Root>
        <p className="text-sm text-gray-500">
          endDate를 전달하면 자동으로 남은 시간 계산
        </p>
      </div>;
  }
}`,...(Qe=(Ge=Q.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source}}};var Ue,Xe,Ye;U.parameters={...U.parameters,docs:{...(Ue=U.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: 'Footer - Custom Children',
  render: () => <div className="flex w-[25rem] flex-col gap-[1rem]">
      <h3 className="font-bold">커스텀 Footer</h3>
      <RatioChart.Root>
        <RatioChart.Item value="option1" label="옵션 A" count={10} />
        <RatioChart.Item value="option2" label="옵션 B" count={5} />
        <RatioChart.Footer>
          <span className="typo-body-14 text-gray-400">익명 투표</span>
          <span className="typo-body-14 text-blue-500">결과 보기</span>
        </RatioChart.Footer>
      </RatioChart.Root>
      <p className="text-sm text-gray-500">
        children으로 커스텀 Footer 내용 전달 가능
      </p>
    </div>
}`,...(Ye=(Xe=U.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,et,tt;X.parameters={...X.parameters,docs:{...(Ze=X.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  name: 'Manual Ratio',
  render: () => <div className="flex w-[25rem] flex-col gap-[1rem]">
      <h3 className="font-bold">기존 ratio 방식</h3>
      <RatioChart.Root>
        <RatioChart.Item value="option1" label="짬뽕" ratio={80} />
        <RatioChart.Item value="option2" label="짜장면" ratio={20} />
      </RatioChart.Root>
      <p className="text-sm text-gray-500">
        ratio를 직접 지정하는 방식도 호환됨
      </p>
    </div>
}`,...(tt=(et=X.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,ot,lt;Y.parameters={...Y.parameters,docs:{...(at=Y.parameters)==null?void 0:at.docs,source:{originalSource:`{
  name: 'Edit Mode - Default',
  render: () => <RatioChartEditor onDelete={() => alert('투표 삭제')} />
}`,...(lt=(ot=Y.parameters)==null?void 0:ot.docs)==null?void 0:lt.source}}};var nt,rt,st;Z.parameters={...Z.parameters,docs:{...(nt=Z.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  name: 'Edit Mode - Controlled',
  render: () => {
    const [options, setOptions] = useState<RatioChartEditorOption[]>([{
      id: '1',
      value: '짬뽕'
    }, {
      id: '2',
      value: ''
    }]);
    const [allowMultiple, setAllowMultiple] = useState(false);
    return <div className="flex flex-col gap-[1rem]">
        <RatioChartEditor options={options} onOptionsChange={setOptions} allowMultiple={allowMultiple} onAllowMultipleChange={setAllowMultiple} onDelete={() => alert('투표 삭제')} />
        <div className="text-sm text-gray-500">
          <p>옵션: {JSON.stringify(options.map(o => o.value))}</p>
          <p>복수 선택: {allowMultiple ? '허용' : '비허용'}</p>
        </div>
      </div>;
  }
}`,...(st=(rt=Z.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var it,ct,dt;ee.parameters={...ee.parameters,docs:{...(it=ee.parameters)==null?void 0:it.docs,source:{originalSource:`{
  name: 'Edit Mode - Three Options',
  render: () => {
    const [options, setOptions] = useState<RatioChartEditorOption[]>([{
      id: '1',
      value: '짬뽕'
    }, {
      id: '2',
      value: ''
    }, {
      id: '3',
      value: ''
    }]);
    return <RatioChartEditor options={options} onOptionsChange={setOptions} onDelete={() => alert('투표 삭제')} />;
  }
}`,...(dt=(ct=ee.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var mt,ut,pt;te.parameters={...te.parameters,docs:{...(mt=te.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  name: 'Edit Mode - Filled Options',
  render: () => {
    const [options, setOptions] = useState<RatioChartEditorOption[]>([{
      id: '1',
      value: '짬뽕'
    }, {
      id: '2',
      value: '짜장면'
    }, {
      id: '3',
      value: '탕수육'
    }]);
    const [allowMultiple, setAllowMultiple] = useState(true);
    return <RatioChartEditor options={options} onOptionsChange={setOptions} allowMultiple={allowMultiple} onAllowMultipleChange={setAllowMultiple} onDelete={() => alert('투표 삭제')} />;
  }
}`,...(pt=(ut=te.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var bt,xt,ht;ae.parameters={...ae.parameters,docs:{...(bt=ae.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  name: 'Edit Mode - Disabled',
  render: () => <RatioChartEditor disabled onDelete={() => alert('투표 삭제')} />
}`,...(ht=(xt=ae.parameters)==null?void 0:xt.docs)==null?void 0:ht.source}}};const Pt=["Playground","Default","Controlled","MultipleSelection","VariousRatios","WithoutRatio","Disabled","ThreeOptions","VotingExample","FlexibleWidth","WithFooter","BeforeVoting","AfterVoting","FooterWithEndDate","FooterCustomChildren","ManualRatio","EditModeDefault","EditModeControlled","EditModeWithThreeOptions","EditModeFilled","EditModeDisabled"];export{G as AfterVoting,H as BeforeVoting,B as Controlled,L as Default,$ as Disabled,Z as EditModeControlled,Y as EditModeDefault,ae as EditModeDisabled,te as EditModeFilled,ee as EditModeWithThreeOptions,J as FlexibleWidth,U as FooterCustomChildren,Q as FooterWithEndDate,X as ManualRatio,q as MultipleSelection,O as Playground,z as ThreeOptions,P as VariousRatios,_ as VotingExample,K as WithFooter,W as WithoutRatio,Pt as __namedExportsOrder,qt as default};
