import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-CDqz-qF0.js";import{t as ft}from"./index-Ca4j9_td.js";import{m as ne}from"./mergeStyles-Dw1fI3XI.js";import{M as E,D as vt}from"./types-BxvS68st.js";import{C as se}from"./Checkbox-BTIdiqm0.js";import"./preload-helper-Dp1pzeXC.js";import"./Text-DtCm8rgE.js";const Ct=({size:a=vt,active:o=!1,title:l,...r})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:a,height:a,fill:o?E.active:E.inactive,color:o?E.active:E.inactive,"aria-hidden":l?void 0:!0,"aria-label":l,role:l?"img":void 0,...r,children:[l&&e.jsx("title",{children:l}),e.jsx("path",{d:"M10 1C4.98571 1 1 4.98571 1 10C1 15.0143 4.98571 19 10 19C15.0143 19 19 15.0143 19 10C19 4.98571 15.0143 1 10 1ZM13.4714 14.5L10 11.0286L6.52857 14.5L5.5 13.4714L8.97143 10L5.5 6.52857L6.52857 5.5L10 8.97143L13.4714 5.5L14.5 6.52857L11.0286 10L14.5 13.4714L13.4714 14.5Z"})]});Ct.displayName="CloseFilled";const Rt=({size:a=vt,active:o=!1,title:l,...r})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:a,height:a,fill:o?E.active:E.inactive,color:o?E.active:E.inactive,"aria-hidden":l?void 0:!0,"aria-label":l,role:l?"img":void 0,...r,children:[l&&e.jsx("title",{children:l}),e.jsx("path",{d:"M16.8571 11.1429H11.1429V16.8571C11.1429 17.1602 11.0224 17.4509 10.8081 17.6653C10.5938 17.8796 10.3031 18 10 18C9.6969 18 9.40621 17.8796 9.19188 17.6653C8.97755 17.4509 8.85714 17.1602 8.85714 16.8571V11.1429H3.14286C2.83975 11.1429 2.54906 11.0224 2.33474 10.8081C2.12041 10.5938 2 10.3031 2 10C2 9.6969 2.12041 9.40621 2.33474 9.19188C2.54906 8.97755 2.83975 8.85714 3.14286 8.85714H8.85714V3.14286C8.85714 2.83975 8.97755 2.54906 9.19188 2.33473C9.40621 2.12041 9.6969 2 10 2C10.3031 2 10.5938 2.12041 10.8081 2.33473C11.0224 2.54906 11.1429 2.83975 11.1429 3.14286V8.85714H16.8571C17.1602 8.85714 17.4509 8.97755 17.6653 9.19188C17.8796 9.40621 18 9.6969 18 10C18 10.3031 17.8796 10.5938 17.6653 10.8081C17.4509 11.0224 17.1602 11.1429 16.8571 11.1429Z"})]});Rt.displayName="Plus";const yt=n.createContext(null),jt=()=>{const a=n.useContext(yt);if(!a)throw new Error("RatioChart 서브 컴포넌트는 <RatioChart.Root> 내부에서 사용해야 합니다.");return a},A=ft({slots:{root:"flex flex-col gap-[0.75rem] pb-[0.5rem] min-w-[20rem] max-h-[16.25rem] overflow-y-auto",item:"relative flex items-center px-[1rem] h-[3.5rem] flex-shrink-0 rounded-[0.75rem] border border-gray-200 overflow-hidden transition-all duration-200",fill:"absolute inset-y-0 left-0 rounded-l-[0.75rem] transition-all duration-300",content:"absolute inset-0 z-10 flex items-center justify-between px-[1rem] gap-[0.5rem] typo-body1-md-point",label:"truncate",ratio:"flex-shrink-0",footer:"flex items-end justify-between px-[0.25rem]",footerText:"typo-body-14 text-gray-400"},variants:{disabled:{true:{root:"opacity-50 cursor-not-allowed",item:"cursor-not-allowed"},false:{item:"cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-inset"}},selected:{true:{fill:"bg-gray-900"},false:{fill:"bg-gray-200"}},contentVariant:{light:{content:"text-white font-bold"},dark:{content:"text-gray-800 font-medium"}}},defaultVariants:{disabled:!1,selected:!1,contentVariant:"dark"}}),le=a=>{const{mode:o="single",value:l,defaultValue:r,onValueChange:m,disabled:x,children:j,className:b,...v}=a,[S,C]=n.useState(()=>o==="single"&&typeof r=="string"?r:""),[V,I]=n.useState(()=>o==="multiple"&&Array.isArray(r)?r:[]),[h,R]=n.useState(new Map),p=l!==void 0,g=o==="single"?p?l:S:p?l:V,u=n.useCallback(i=>o==="single"?g===i:g.includes(i),[o,g]),M=n.useCallback(i=>{if(!x)if(o==="single")p||C(i),m==null||m(i);else{const s=g,c=s.includes(i)?s.filter(D=>D!==i):[...s,i];p||I(c),m==null||m(c)}},[o,x,p,g,m]),y=n.useCallback((i,s)=>{R(c=>new Map(c).set(i,s))},[]),F=n.useCallback(i=>{R(s=>{const c=new Map(s);return c.delete(i),c})},[]),f=n.useMemo(()=>{let i=0;return h.forEach(s=>i+=s),i},[h]),N=n.useCallback(i=>{const s=h.get(i)??0;return f>0?Math.round(s/f*100):0},[h,f]),w=A({disabled:x});return e.jsx(yt.Provider,{value:{value:g,mode:o,disabled:x,onSelect:M,isSelected:u,counts:h,registerCount:y,unregisterCount:F,totalCount:f,getRatio:N},children:e.jsx("div",{role:"group",className:ne(w.root(),b),...v,children:j})})},It=({value:a,label:o,count:l,ratio:r,disabled:m,className:x,...j})=>{const{disabled:b,onSelect:v,isSelected:S,registerCount:C,unregisterCount:V,getRatio:I}=jt(),h=m||b,R=S(a);n.useEffect(()=>{if(l!==void 0)return C(a,l),()=>V(a)},[l,a,C,V]);const p=()=>{h||v(a)},g=w=>{(w.key==="Enter"||w.key===" ")&&!h&&(w.preventDefault(),v(a))},u=l!==void 0?I(a):r??0,M=l!==void 0||r!==void 0,y=A({disabled:h,selected:R}),F=A({contentVariant:"light"}),f=A({contentVariant:"dark"}),N=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:y.label(),children:o}),M&&e.jsxs("span",{className:y.ratio(),children:[u,"%"]})]});return e.jsxs("button",{type:"button",role:"option","aria-selected":R,disabled:h,onClick:p,onKeyDown:g,className:ne(y.item(),x),style:{minWidth:0},...j,children:[e.jsx("span",{className:y.fill(),style:{width:`${u}%`}}),R?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:F.content(),style:{clipPath:`inset(0 ${100-u}% 0 0)`},children:N}),e.jsx("span",{className:f.content(),style:{clipPath:`inset(0 0 0 ${u}%)`},children:N})]}):e.jsx("span",{className:f.content(),children:N})]})};function Dt(a){const o=new Date,l=a.getTime()-o.getTime();if(l<=0)return"종료됨";const r=l/(1e3*60*60),m=l/(1e3*60);return r>=24?`${Math.round(r/24)}일 후 종료`:r>=1?`${Math.floor(r)}시간 후 종료`:`${Math.floor(m)}분 후 종료`}const Nt=({endDate:a,endTime:o,hideParticipantCount:l,className:r,children:m,...x})=>{const{totalCount:j}=jt(),b=a?Dt(a):o,v=A();return e.jsx("div",{className:ne(v.footer(),r),...x,children:m??e.jsxs(e.Fragment,{children:[!l&&e.jsxs("span",{className:v.footerText(),children:[j,"명 참여"]}),b&&e.jsx("span",{className:v.footerText(),children:b})]})})};le.displayName="RatioChart.Root";It.displayName="RatioChart.Item";Nt.displayName="RatioChart.Footer";const t=Object.assign(le,{Root:le,Item:It,Footer:Nt});le.__docgenInfo={description:"",methods:[],displayName:"RatioChart.Root"};const Vt=ft({slots:{root:"flex flex-col gap-[1.25rem] pb-[0.5rem] min-w-[20rem]",fields:"flex flex-col gap-[0.75rem] max-h-[16.25rem] overflow-y-auto",input:"flex items-center gap-[1rem] h-[3.5rem] flex-shrink-0 px-[1rem] rounded-[0.75rem] border border-gray-200 bg-white",textInput:"flex-1 h-full bg-transparent outline-none typo-fixed-16 text-gray-800 placeholder:text-gray-400",removeButton:"flex-shrink-0 p-[0.25rem] rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors",addButton:"flex items-center gap-[0.5rem] h-[3.5rem] flex-shrink-0 px-[1rem] rounded-[0.75rem] border border-dashed border-gray-200 bg-white cursor-pointer hover:bg-gray-50 transition-colors",addButtonText:"typo-fixed-16 text-gray-400",footer:"flex items-center justify-between",deleteButton:"typo-fixed-16 text-red-400 cursor-pointer hover:text-red-500 transition-colors"},variants:{disabled:{true:{root:"opacity-50 pointer-events-none"}}},defaultVariants:{disabled:!1}}),T=({options:a,onOptionsChange:o,allowMultiple:l,onAllowMultipleChange:r,onDelete:m,minOptions:x=2,placeholder:j="내용을 입력해주세요",disabled:b,className:v,...S})=>{const C=n.useId(),[V,I]=n.useState(()=>{const s=[];for(let c=0;c<x;c++)s.push({id:`${C}-${c}`,value:""});return s}),[h,R]=n.useState(!1),p=a!==void 0,g=l!==void 0,u=p?a:V,M=g?l:h,y=n.useCallback((s,c)=>{const D=u.map(L=>L.id===s?{...L,value:c}:L);p||I(D),o==null||o(D)},[u,p,o]),F=n.useCallback(()=>{const s={id:`${C}-${Date.now()}`,value:""},c=[...u,s];p||I(c),o==null||o(c)},[u,p,o,C]),f=n.useCallback(s=>{if(u.length<=x)return;const c=u.filter(D=>D.id!==s);p||I(c),o==null||o(c)},[u,x,p,o]),N=n.useCallback(s=>{g||R(s),r==null||r(s)},[g,r]),w=u.length>x,i=Vt({disabled:b});return e.jsxs("div",{className:ne(i.root(),v),...S,children:[e.jsxs("div",{className:i.fields(),children:[u.map(s=>e.jsxs("div",{className:i.input(),children:[e.jsx("input",{type:"text",value:s.value,onChange:c=>y(s.id,c.target.value),placeholder:j,disabled:b,className:i.textInput()}),w&&e.jsx("button",{type:"button",onClick:()=>f(s.id),disabled:b,className:i.removeButton(),"aria-label":"옵션 삭제",children:e.jsx(Ct,{size:20})})]},s.id)),e.jsxs("button",{type:"button",onClick:F,disabled:b,className:i.addButton(),children:[e.jsx(Rt,{size:20}),e.jsx("span",{className:i.addButtonText(),children:"다른 선택 항목 추가"})]})]}),e.jsxs("div",{className:i.footer(),children:[e.jsxs(se,{checked:M,onCheckedChange:N,disabled:b,children:[e.jsx(se.Indicator,{}),e.jsx(se.Label,{children:"복수 선택 허용"})]}),m&&e.jsx("button",{type:"button",onClick:m,disabled:b,className:i.deleteButton(),children:"투표 삭제"})]})]})};T.displayName="RatioChartEditor";T.__docgenInfo={description:"",methods:[],displayName:"RatioChartEditor",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"RatioChartEditorOption"}],raw:"RatioChartEditorOption[]"},description:"옵션 목록"},onOptionsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(options: RatioChartEditorOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"RatioChartEditorOption"}],raw:"RatioChartEditorOption[]"},name:"options"}],return:{name:"void"}}},description:"옵션 변경 콜백"},allowMultiple:{required:!1,tsType:{name:"boolean"},description:"복수 선택 허용 여부"},onAllowMultipleChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(allowMultiple: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"allowMultiple"}],return:{name:"void"}}},description:"복수 선택 변경 콜백"},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"투표 삭제 콜백"},minOptions:{required:!1,tsType:{name:"number"},description:"최소 옵션 수 (기본: 2)",defaultValue:{value:"2",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"플레이스홀더 텍스트",defaultValue:{value:"'내용을 입력해주세요'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화"}},composes:["Omit"]};const qt={title:"Components/RatioChart",component:t,parameters:{layout:"centered",backgrounds:{default:"white",values:[{name:"white",value:"#ffffff"},{name:"gray",value:"#f3f4f6"}]}},tags:["autodocs"]},St=a=>{const{mode:o,disabled:l,itemCount:r,useCount:m,item1Label:x,item1Value:j,item1Disabled:b,item2Label:v,item2Value:S,item2Disabled:C,item3Label:V,item3Value:I,item3Disabled:h,item4Label:R,item4Value:p,item4Disabled:g,item5Label:u,item5Value:M,item5Disabled:y,showFooter:F,useEndDate:f,endDays:N,endTime:w,hideParticipantCount:i}=a,[s,c]=n.useState("item1"),[D,L]=n.useState([]),re=n.useMemo(()=>[{value:"item1",label:x,count:j,disabled:b},{value:"item2",label:v,count:S,disabled:C},{value:"item3",label:V,count:I,disabled:h},{value:"item4",label:R,count:p,disabled:g},{value:"item5",label:u,count:M,disabled:y}],[x,j,b,v,S,C,V,I,h,R,p,g,u,M,y]).slice(0,r),O=re.reduce((d,wt)=>d+wt.count,0),ie=n.useMemo(()=>{const d=new Date;return d.setDate(d.getDate()+N),d},[N]);return e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"Playground"}),o==="single"?e.jsxs(t.Root,{mode:"single",value:s,onValueChange:c,disabled:l,children:[re.map(d=>m?e.jsx(t.Item,{value:d.value,label:d.label,count:d.count,disabled:d.disabled},d.value):e.jsx(t.Item,{value:d.value,label:d.label,ratio:O>0?Math.round(d.count/O*100):0,disabled:d.disabled},d.value)),F&&e.jsx(t.Footer,{endDate:f?ie:void 0,endTime:f?void 0:w,hideParticipantCount:i})]}):e.jsxs(t.Root,{mode:"multiple",value:D,onValueChange:L,disabled:l,children:[re.map(d=>m?e.jsx(t.Item,{value:d.value,label:d.label,count:d.count,disabled:d.disabled},d.value):e.jsx(t.Item,{value:d.value,label:d.label,ratio:O>0?Math.round(d.count/O*100):0,disabled:d.disabled},d.value)),F&&e.jsx(t.Footer,{endDate:f?ie:void 0,endTime:f?void 0:w,hideParticipantCount:i})]}),e.jsxs("div",{className:"text-sm text-gray-500",children:[e.jsxs("p",{children:["선택된 값:"," ",o==="single"?s:D.length>0?D.join(", "):"없음"]}),m&&e.jsxs("p",{children:["총 참여: ",O,"명"]})]})]})},k={render:a=>e.jsx(St,{...a}),args:{mode:"single",disabled:!1,itemCount:3,useCount:!0,item1Label:"두쫀쿠",item1Value:8,item1Disabled:!1,item2Label:"마라탕",item2Value:5,item2Disabled:!1,item3Label:"엽떡",item3Value:2,item3Disabled:!1,item4Label:"치킨",item4Value:0,item4Disabled:!1,item5Label:"구이",item5Value:0,item5Disabled:!1,showFooter:!0,useEndDate:!1,endDays:3,endTime:"72시간 후 종료",hideParticipantCount:!1},argTypes:{mode:{control:"radio",options:["single","multiple"],description:"선택 모드",table:{category:"Root"}},disabled:{control:"boolean",description:"전체 비활성화",table:{category:"Root"}},itemCount:{control:{type:"range",min:2,max:5,step:1},description:"항목 개수",table:{category:"Items"}},useCount:{control:"boolean",description:"count 자동 계산 사용 (false면 ratio 직접 지정)",table:{category:"Items"}},item1Label:{control:"text",table:{category:"Item 1"}},item1Value:{control:{type:"number",min:0},table:{category:"Item 1"}},item1Disabled:{control:"boolean",table:{category:"Item 1"}},item2Label:{control:"text",table:{category:"Item 2"}},item2Value:{control:{type:"number",min:0},table:{category:"Item 2"}},item2Disabled:{control:"boolean",table:{category:"Item 2"}},item3Label:{control:"text",table:{category:"Item 3"}},item3Value:{control:{type:"number",min:0},table:{category:"Item 3"}},item3Disabled:{control:"boolean",table:{category:"Item 3"}},item4Label:{control:"text",table:{category:"Item 4"}},item4Value:{control:{type:"number",min:0},table:{category:"Item 4"}},item4Disabled:{control:"boolean",table:{category:"Item 4"}},item5Label:{control:"text",table:{category:"Item 5"}},item5Value:{control:{type:"number",min:0},table:{category:"Item 5"}},item5Disabled:{control:"boolean",table:{category:"Item 5"}},showFooter:{control:"boolean",description:"Footer 표시",table:{category:"Footer"}},useEndDate:{control:"boolean",description:"endDate 사용 (false면 endTime 문자열 사용)",table:{category:"Footer"}},endDays:{control:{type:"number",min:0},description:"종료까지 남은 일수 (useEndDate=true일 때)",table:{category:"Footer"}},endTime:{control:"text",description:"종료 시간 문자열 (useEndDate=false일 때)",table:{category:"Footer"}},hideParticipantCount:{control:"boolean",description:"참여 인원 숨기기",table:{category:"Footer"}}}},B={render:()=>e.jsxs(t.Root,{children:[e.jsx(t.Item,{value:"option1",label:"짬뽕",ratio:80}),e.jsx(t.Item,{value:"option2",label:"짜장면",ratio:20})]})},q={render:()=>{const[a,o]=n.useState("option1");return e.jsxs("div",{className:"flex flex-col gap-[1rem]",children:[e.jsxs(t.Root,{value:a,onValueChange:o,children:[e.jsx(t.Item,{value:"option1",label:"짬뽕",ratio:80}),e.jsx(t.Item,{value:"option2",label:"짜장면",ratio:20})]}),e.jsxs("p",{className:"text-sm text-gray-500",children:["선택된 값: ",a]})]})}},P={render:()=>{const[a,o]=n.useState([]);return e.jsxs("div",{className:"flex flex-col gap-[1rem]",children:[e.jsxs(t.Root,{mode:"multiple",value:a,onValueChange:o,children:[e.jsx(t.Item,{value:"option1",label:"ICT",ratio:45}),e.jsx(t.Item,{value:"option2",label:"동네",ratio:30}),e.jsx(t.Item,{value:"option3",label:"크자회",ratio:25})]}),e.jsxs("p",{className:"text-sm text-gray-500",children:["선택된 값: ",a.length>0?a.join(", "):"없음"]})]})}},W={render:()=>e.jsxs("div",{className:"flex flex-col gap-[1rem]",children:[e.jsxs(t.Root,{defaultValue:"high",children:[e.jsx(t.Item,{value:"high",label:"높은 비율",ratio:90}),e.jsx(t.Item,{value:"low",label:"낮은 비율",ratio:10})]}),e.jsxs(t.Root,{defaultValue:"equal1",children:[e.jsx(t.Item,{value:"equal1",label:"동일 비율 A",ratio:50}),e.jsx(t.Item,{value:"equal2",label:"동일 비율 B",ratio:50})]}),e.jsxs(t.Root,{defaultValue:"zero",children:[e.jsx(t.Item,{value:"zero",label:"0%",ratio:0}),e.jsx(t.Item,{value:"full",label:"100%",ratio:100})]})]})},$={render:()=>e.jsxs(t.Root,{defaultValue:"option1",children:[e.jsx(t.Item,{value:"option1",label:"옵션 A"}),e.jsx(t.Item,{value:"option2",label:"옵션 B"})]})},_={render:()=>e.jsxs("div",{className:"flex flex-col gap-[1rem]",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"전체 비활성화:"}),e.jsxs(t.Root,{disabled:!0,defaultValue:"option1",children:[e.jsx(t.Item,{value:"option1",label:"TypeScript",ratio:80}),e.jsx(t.Item,{value:"option2",label:"JavaScript",ratio:20})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"개별 항목 비활성화:"}),e.jsxs(t.Root,{defaultValue:"option1",children:[e.jsx(t.Item,{value:"option1",label:"선택 가능",ratio:60}),e.jsx(t.Item,{value:"option2",label:"비활성화",ratio:40,disabled:!0})]})]})},z={render:()=>e.jsxs(t.Root,{defaultValue:"option1",children:[e.jsx(t.Item,{value:"option1",label:"찬성",ratio:55}),e.jsx(t.Item,{value:"option2",label:"반대",ratio:30}),e.jsx(t.Item,{value:"option3",label:"기권",ratio:15})]})},H={render:()=>{const[a,o]=n.useState(""),l=r=>{o(r)};return e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"오늘 점심 뭐 먹을까요?"}),e.jsxs(t.Root,{value:a,onValueChange:l,children:[e.jsx(t.Item,{value:"jjamppong",label:"짬뽕",ratio:65}),e.jsx(t.Item,{value:"jjajang",label:"짜장면",ratio:35})]}),a&&e.jsxs("p",{className:"text-sm text-gray-600",children:[a==="jjamppong"?"짬뽕":"짜장면","에 투표했습니다!"]})]})}},J={render:()=>e.jsxs("div",{className:"flex flex-col gap-[1rem]",children:[e.jsxs("div",{className:"w-[20rem]",children:[e.jsx("p",{className:"mb-[0.5rem] text-sm text-gray-500",children:"최소 너비 (320px)"}),e.jsxs(t.Root,{defaultValue:"option1",children:[e.jsx(t.Item,{value:"option1",label:"A",ratio:70}),e.jsx(t.Item,{value:"option2",label:"B",ratio:30})]})]}),e.jsxs("div",{className:"w-[30rem]",children:[e.jsx("p",{className:"mb-[0.5rem] text-sm text-gray-500",children:"넓은 너비 (480px)"}),e.jsxs(t.Root,{defaultValue:"option1",children:[e.jsx(t.Item,{value:"option1",label:"긴 레이블 텍스트",ratio:70}),e.jsx(t.Item,{value:"option2",label:"짧은 텍스트",ratio:30})]})]})]})},Z={name:"Footer - Auto Ratio",render:()=>{const[a,o]=n.useState("option1");return e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"오늘 점심 뭐 먹을까요?"}),e.jsxs(t.Root,{value:a,onValueChange:o,children:[e.jsx(t.Item,{value:"option1",label:"짬뽕",count:8}),e.jsx(t.Item,{value:"option2",label:"짜장면",count:2}),e.jsx(t.Footer,{endTime:"72시간 후 종료"})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"count만 전달하면 자동으로 total과 ratio 계산 (8+2=10, 80%/20%)"})]})}},K={name:"Footer - Before Voting",render:()=>e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"오늘 점심 뭐 먹을까요?"}),e.jsxs(t.Root,{children:[e.jsx(t.Item,{value:"option1",label:"짬뽕",count:0}),e.jsx(t.Item,{value:"option2",label:"짜장면",count:0}),e.jsx(t.Footer,{endTime:"72시간 후 종료"})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"아직 투표 전 상태 (0명 참여)"})]})},U={name:"Footer - After Voting",render:()=>e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"오늘 점심 뭐 먹을까요?"}),e.jsxs(t.Root,{defaultValue:"option1",disabled:!0,children:[e.jsx(t.Item,{value:"option1",label:"짬뽕",count:65}),e.jsx(t.Item,{value:"option2",label:"짜장면",count:35}),e.jsx(t.Footer,{endTime:"종료됨"})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"투표 종료 상태 (disabled + 종료됨 표시)"})]})},G={name:"Footer - With EndDate",render:()=>{const a=new Date;return a.setDate(a.getDate()+3),e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"이번 주 회식 메뉴"}),e.jsxs(t.Root,{children:[e.jsx(t.Item,{value:"option1",label:"고기",count:15}),e.jsx(t.Item,{value:"option2",label:"해산물",count:8}),e.jsx(t.Item,{value:"option3",label:"한식",count:7}),e.jsx(t.Footer,{endDate:a})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"endDate를 전달하면 자동으로 남은 시간 계산"})]})}},Q={name:"Footer - Custom Children",render:()=>e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"커스텀 Footer"}),e.jsxs(t.Root,{children:[e.jsx(t.Item,{value:"option1",label:"옵션 A",count:10}),e.jsx(t.Item,{value:"option2",label:"옵션 B",count:5}),e.jsxs(t.Footer,{children:[e.jsx("span",{className:"typo-body-14 text-gray-400",children:"익명 투표"}),e.jsx("span",{className:"typo-body-14 text-blue-500",children:"결과 보기"})]})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"children으로 커스텀 Footer 내용 전달 가능"})]})},X={name:"Manual Ratio",render:()=>e.jsxs("div",{className:"flex w-[25rem] flex-col gap-[1rem]",children:[e.jsx("h3",{className:"font-bold",children:"기존 ratio 방식"}),e.jsxs(t.Root,{children:[e.jsx(t.Item,{value:"option1",label:"짬뽕",ratio:80}),e.jsx(t.Item,{value:"option2",label:"짜장면",ratio:20})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"ratio를 직접 지정하는 방식도 호환됨"})]})},Y={name:"Edit Mode - Default",render:()=>e.jsx(T,{onDelete:()=>alert("투표 삭제")})},ee={name:"Edit Mode - Controlled",render:()=>{const[a,o]=n.useState([{id:"1",value:"짬뽕"},{id:"2",value:""}]),[l,r]=n.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-[1rem]",children:[e.jsx(T,{options:a,onOptionsChange:o,allowMultiple:l,onAllowMultipleChange:r,onDelete:()=>alert("투표 삭제")}),e.jsxs("div",{className:"text-sm text-gray-500",children:[e.jsxs("p",{children:["옵션: ",JSON.stringify(a.map(m=>m.value))]}),e.jsxs("p",{children:["복수 선택: ",l?"허용":"비허용"]})]})]})}},te={name:"Edit Mode - Three Options",render:()=>{const[a,o]=n.useState([{id:"1",value:"짬뽕"},{id:"2",value:""},{id:"3",value:""}]);return e.jsx(T,{options:a,onOptionsChange:o,onDelete:()=>alert("투표 삭제")})}},ae={name:"Edit Mode - Filled Options",render:()=>{const[a,o]=n.useState([{id:"1",value:"짬뽕"},{id:"2",value:"짜장면"},{id:"3",value:"탕수육"}]),[l,r]=n.useState(!0);return e.jsx(T,{options:a,onOptionsChange:o,allowMultiple:l,onAllowMultipleChange:r,onDelete:()=>alert("투표 삭제")})}},oe={name:"Edit Mode - Disabled",render:()=>e.jsx(T,{disabled:!0,onDelete:()=>alert("투표 삭제")})};var de,ce,me;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ue,pe,xe;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <RatioChart.Root>
      <RatioChart.Item value="option1" label="짬뽕" ratio={80} />
      <RatioChart.Item value="option2" label="짜장면" ratio={20} />
    </RatioChart.Root>
}`,...(xe=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};var be,he,ge;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ge=(he=q.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var fe,ve,Ce;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ce=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var Re,ye,je;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(je=(ye=W.parameters)==null?void 0:ye.docs)==null?void 0:je.source}}};var Ie,Ne,we;$.parameters={...$.parameters,docs:{...(Ie=$.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <RatioChart.Root defaultValue="option1">
      <RatioChart.Item value="option1" label="옵션 A" />
      <RatioChart.Item value="option2" label="옵션 B" />
    </RatioChart.Root>
}`,...(we=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}};var De,Ve,Se;_.parameters={..._.parameters,docs:{...(De=_.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Se=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:Se.source}}};var Me,Fe,Ee;z.parameters={...z.parameters,docs:{...(Me=z.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <RatioChart.Root defaultValue="option1">
      <RatioChart.Item value="option1" label="찬성" ratio={55} />
      <RatioChart.Item value="option2" label="반대" ratio={30} />
      <RatioChart.Item value="option3" label="기권" ratio={15} />
    </RatioChart.Root>
}`,...(Ee=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:Ee.source}}};var Te,Le,Oe;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Oe=(Le=H.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source}}};var Ae,ke,Be;J.parameters={...J.parameters,docs:{...(Ae=J.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Be=(ke=J.parameters)==null?void 0:ke.docs)==null?void 0:Be.source}}};var qe,Pe,We;Z.parameters={...Z.parameters,docs:{...(qe=Z.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(We=(Pe=Z.parameters)==null?void 0:Pe.docs)==null?void 0:We.source}}};var $e,_e,ze;K.parameters={...K.parameters,docs:{...($e=K.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(ze=(_e=K.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};var He,Je,Ze;U.parameters={...U.parameters,docs:{...(He=U.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ze=(Je=U.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};var Ke,Ue,Ge;G.parameters={...G.parameters,docs:{...(Ke=G.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ge=(Ue=G.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var Qe,Xe,Ye;Q.parameters={...Q.parameters,docs:{...(Qe=Q.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=Q.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var et,tt,at;X.parameters={...X.parameters,docs:{...(et=X.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=X.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var ot,lt,nt;Y.parameters={...Y.parameters,docs:{...(ot=Y.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  name: 'Edit Mode - Default',
  render: () => <RatioChartEditor onDelete={() => alert('투표 삭제')} />
}`,...(nt=(lt=Y.parameters)==null?void 0:lt.docs)==null?void 0:nt.source}}};var rt,st,it;ee.parameters={...ee.parameters,docs:{...(rt=ee.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(st=ee.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var dt,ct,mt;te.parameters={...te.parameters,docs:{...(dt=te.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(mt=(ct=te.parameters)==null?void 0:ct.docs)==null?void 0:mt.source}}};var ut,pt,xt;ae.parameters={...ae.parameters,docs:{...(ut=ae.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(xt=(pt=ae.parameters)==null?void 0:pt.docs)==null?void 0:xt.source}}};var bt,ht,gt;oe.parameters={...oe.parameters,docs:{...(bt=oe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  name: 'Edit Mode - Disabled',
  render: () => <RatioChartEditor disabled onDelete={() => alert('투표 삭제')} />
}`,...(gt=(ht=oe.parameters)==null?void 0:ht.docs)==null?void 0:gt.source}}};const Pt=["Playground","Default","Controlled","MultipleSelection","VariousRatios","WithoutRatio","Disabled","ThreeOptions","VotingExample","FlexibleWidth","WithFooter","BeforeVoting","AfterVoting","FooterWithEndDate","FooterCustomChildren","ManualRatio","EditModeDefault","EditModeControlled","EditModeWithThreeOptions","EditModeFilled","EditModeDisabled"];export{U as AfterVoting,K as BeforeVoting,q as Controlled,B as Default,_ as Disabled,ee as EditModeControlled,Y as EditModeDefault,oe as EditModeDisabled,ae as EditModeFilled,te as EditModeWithThreeOptions,J as FlexibleWidth,Q as FooterCustomChildren,G as FooterWithEndDate,X as ManualRatio,P as MultipleSelection,k as Playground,z as ThreeOptions,W as VariousRatios,H as VotingExample,Z as WithFooter,$ as WithoutRatio,Pt as __namedExportsOrder,qt as default};
