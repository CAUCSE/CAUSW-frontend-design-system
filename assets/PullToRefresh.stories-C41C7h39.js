import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-Bt1_pmy6.js";import{t as E}from"./index-Ca4j9_td.js";import{S as F}from"./Spinner-BQfqDLUi.js";import{T as d}from"./Tab-C4rOxrTx.js";import{f as x}from"./index-Cpohvpwh.js";import"./preload-helper-Dp1pzeXC.js";import"./Primitive-CKgaYTgj.js";import"./index-9EVhS2bW.js";const Q=E({slots:{wrapper:"relative w-full h-full overflow-y-auto overscroll-y-none touch-pan-y",loaderContainer:"absolute top-0 left-0 w-full flex justify-center items-center pointer-events-none z-10",content:"relative w-full transition-transform duration-200 ease-out will-change-transform"}}),h=({children:t,onRefresh:n,threshold:l=60,className:o})=>{const{wrapper:s,loaderContainer:r,content:_}=Q(),b=a.useRef(null),[i,f]=a.useState(0),[g,v]=a.useState(!1),[L,y]=a.useState(!1),w=a.useRef(0),p=a.useRef(!1),M=c=>{g||(b.current&&b.current.scrollTop===0?(p.current=!0,w.current=c.touches[0].clientY,y(!0)):p.current=!1)},Y=c=>{if(!p.current||g)return;const T=c.touches[0].clientY-w.current;if(T>0){const z=Math.min(T*.5,l*2.5);f(z),c.cancelable&&c.preventDefault()}},U=async()=>{if(y(!1),!(!p.current||g))if(i>=l){v(!0),f(l);try{await n()}finally{v(!1),f(0)}}else f(0)},N=L?"none":"all 0.45s cubic-bezier(0, 0, 0.2, 1)";return e.jsxs("div",{ref:b,className:s({className:o}),onTouchStart:M,onTouchMove:Y,onTouchEnd:U,children:[e.jsx("div",{className:r(),style:{height:"auto",top:i>0?`${i/2}px`:`-${l}px`,transform:"translateY(-50%)",opacity:i>0?Math.min(i/l,1):0,transition:N},children:e.jsx(F,{size:"md",speed:"fast"})}),e.jsx("div",{className:_(),style:{transform:`translateY(${i}px)`,transition:N},children:t})]})};h.__docgenInfo={description:"",methods:[],displayName:"PullToRefresh",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onRefresh:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},threshold:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"60",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["PullToRefreshVariants"]};const ee={title:"Components/PullToRefresh",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{threshold:{control:{type:"number",min:40,max:100},description:"새로고침이 트리거되기 위해 당겨야 하는 거리(px)"}}},m={args:{onRefresh:async()=>{await new Promise(t=>setTimeout(t,1e3))},children:null},render:t=>{const[n,l]=a.useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem deserunt reprehenderit ducimus sunt. Quod laudantium excepturi tempora fuga repellendus accusantium nam maiores? Quas debitis, neque ullam eligendi minus sit?"),o=a.useCallback(async()=>{var s;x()("새로고침 시작..."),await((s=t.onRefresh)==null?void 0:s.call(t)),l(r=>r.startsWith("Updated")?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem deserunt reprehenderit ducimus sunt.":"Updated! "+r),x()("새로고침 완료!")},[t]);return e.jsxs("div",{className:"relative flex h-[500px] w-[360px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl",children:[e.jsx("div",{className:"z-20 shrink-0 border-b border-gray-100 bg-white py-4 text-center font-bold text-gray-800 shadow-sm",children:"Pull To Refresh"}),e.jsx(h,{...t,onRefresh:o,className:"bg-white",children:e.jsxs("div",{className:"p-6 text-sm leading-relaxed text-gray-700 select-none",children:[n,e.jsxs("div",{className:"mt-4 text-center text-xs text-gray-400",children:["(개발자 도구 F12를 켜고",e.jsx("br",{}),"모바일 모드에서 당겨보세요)"]})]})})]})}},u={args:{onRefresh:async()=>{},children:null},render:t=>{const[n,l]=a.useState({home:["🏠 홈 피드: 새로운 소식을 확인하세요.","오늘의 추천 컨텐츠입니다."],trending:["🔥 인기 급상승: 지금 가장 핫한 주제","실시간 검색어 순위"]}),o=a.useCallback(async s=>{x()(`${s} 탭 데이터를 불러오는 중...`),await new Promise(r=>setTimeout(r,1500)),l(r=>({...r,[s]:[`✨ [${s.toUpperCase()}] 새로고침 완료 (${new Date().toLocaleTimeString()})`,...r[s]]})),x()(`${s} 탭 업데이트 성공`)},[]);return e.jsxs("div",{className:"relative flex h-[600px] w-[375px] flex-col overflow-hidden rounded-[40px] border-[8px] border-gray-900 bg-gray-50 shadow-2xl",children:[e.jsx("div",{className:"h-6 w-full bg-white"}),e.jsxs(d.Root,{defaultValue:"home",className:"flex h-full flex-col",children:[e.jsxs("div",{className:"shrink-0 bg-white shadow-sm",children:[e.jsx("div",{className:"py-4 text-center font-bold text-gray-900",children:"모바일 피드"}),e.jsxs(d.List,{className:"flex border-b border-gray-100 px-4",children:[e.jsx(d.TabItem,{value:"home",className:"flex-1 py-3 text-sm font-bold transition-all aria-selected:border-b-2 aria-selected:border-blue-500 aria-selected:text-blue-600",children:"추천"}),e.jsx(d.TabItem,{value:"trending",className:"flex-1 py-3 text-sm font-bold transition-all aria-selected:border-b-2 aria-selected:border-blue-500 aria-selected:text-blue-600",children:"트렌딩"})]})]}),e.jsxs("div",{className:"flex-1 overflow-hidden",children:[e.jsx(d.Content,{value:"home",className:"h-full",forceMount:!0,children:e.jsx(h,{...t,onRefresh:()=>o("home"),className:"h-full bg-gray-50",children:e.jsx("div",{className:"flex flex-col gap-4 p-4",children:n.home.map((s,r)=>e.jsxs("div",{className:"rounded-2xl border border-gray-100 bg-white p-5 shadow-sm",children:[e.jsx("p",{className:"text-sm text-gray-800",children:s}),e.jsx("div",{className:"mt-3 h-2 w-20 rounded bg-gray-100"})]},r))})})}),e.jsx(d.Content,{value:"trending",className:"h-full",forceMount:!0,children:e.jsx(h,{...t,onRefresh:()=>o("trending"),className:"h-full bg-gray-50",children:e.jsx("div",{className:"flex flex-col gap-4 p-4",children:n.trending.map((s,r)=>e.jsxs("div",{className:"rounded-2xl border border-gray-100 bg-white p-5 shadow-sm",children:[e.jsx("p",{className:"text-sm text-gray-800",children:s}),e.jsx("div",{className:"mt-3 h-2 w-32 rounded bg-gray-100"})]},r))})})})]})]}),e.jsx("div",{className:"flex h-8 w-full items-center justify-center bg-white",children:e.jsx("div",{className:"h-1 w-32 rounded-full bg-gray-200"})})]})}};var R,j,P,C,S;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  // 에러 해결: 필수 props인 onRefresh와 children을 args에 정의
  args: {
    onRefresh: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
    },
    children: null
  },
  render: args => {
    const [text, setText] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem deserunt reprehenderit ducimus sunt. Quod laudantium excepturi tempora fuga repellendus accusantium nam maiores? Quas debitis, neque ullam eligendi minus sit?');
    const handleRefresh = useCallback(async () => {
      fn()('새로고침 시작...');
      await args.onRefresh?.();
      setText(prev => prev.startsWith('Updated') ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem deserunt reprehenderit ducimus sunt.' : 'Updated! ' + prev);
      fn()('새로고침 완료!');
    }, [args]);
    return <div className="relative flex h-[500px] w-[360px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
        <div className="z-20 shrink-0 border-b border-gray-100 bg-white py-4 text-center font-bold text-gray-800 shadow-sm">
          Pull To Refresh
        </div>

        <PullToRefresh {...args} onRefresh={handleRefresh} className="bg-white">
          <div className="p-6 text-sm leading-relaxed text-gray-700 select-none">
            {text}
            <div className="mt-4 text-center text-xs text-gray-400">
              (개발자 도구 F12를 켜고
              <br />
              모바일 모드에서 당겨보세요)
            </div>
          </div>
        </PullToRefresh>
      </div>;
  }
}`,...(P=(j=m.parameters)==null?void 0:j.docs)==null?void 0:P.source},description:{story:"1. 기본 카드 데모",...(S=(C=m.parameters)==null?void 0:C.docs)==null?void 0:S.description}}};var D,k,I,$,q;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  // 에러 해결: render 함수를 사용할 때도 필수 args 정의가 필요합니다.
  args: {
    onRefresh: async () => {},
    children: null
  },
  render: args => {
    const [feeds, setFeeds] = useState<{
      [key: string]: string[];
    }>({
      home: ['🏠 홈 피드: 새로운 소식을 확인하세요.', '오늘의 추천 컨텐츠입니다.'],
      trending: ['🔥 인기 급상승: 지금 가장 핫한 주제', '실시간 검색어 순위']
    });
    const handleRefresh = useCallback(async (tabId: string) => {
      fn()(\`\${tabId} 탭 데이터를 불러오는 중...\`);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFeeds(prev => ({
        ...prev,
        [tabId]: [\`✨ [\${tabId.toUpperCase()}] 새로고침 완료 (\${new Date().toLocaleTimeString()})\`, ...prev[tabId]]
      }));
      fn()(\`\${tabId} 탭 업데이트 성공\`);
    }, []);
    return <div className="relative flex h-[600px] w-[375px] flex-col overflow-hidden rounded-[40px] border-[8px] border-gray-900 bg-gray-50 shadow-2xl">
        <div className="h-6 w-full bg-white" />

        <Tab.Root defaultValue="home" className="flex h-full flex-col">
          <div className="shrink-0 bg-white shadow-sm">
            <div className="py-4 text-center font-bold text-gray-900">
              모바일 피드
            </div>
            <Tab.List className="flex border-b border-gray-100 px-4">
              <Tab.TabItem value="home" className="flex-1 py-3 text-sm font-bold transition-all aria-selected:border-b-2 aria-selected:border-blue-500 aria-selected:text-blue-600">
                추천
              </Tab.TabItem>
              <Tab.TabItem value="trending" className="flex-1 py-3 text-sm font-bold transition-all aria-selected:border-b-2 aria-selected:border-blue-500 aria-selected:text-blue-600">
                트렌딩
              </Tab.TabItem>
            </Tab.List>
          </div>

          <div className="flex-1 overflow-hidden">
            <Tab.Content value="home" className="h-full" forceMount>
              <PullToRefresh {...args} onRefresh={() => handleRefresh('home')} className="h-full bg-gray-50">
                <div className="flex flex-col gap-4 p-4">
                  {feeds.home.map((item, i) => <div key={i} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                      <p className="text-sm text-gray-800">{item}</p>
                      <div className="mt-3 h-2 w-20 rounded bg-gray-100" />
                    </div>)}
                </div>
              </PullToRefresh>
            </Tab.Content>

            <Tab.Content value="trending" className="h-full" forceMount>
              <PullToRefresh {...args} onRefresh={() => handleRefresh('trending')} className="h-full bg-gray-50">
                <div className="flex flex-col gap-4 p-4">
                  {feeds.trending.map((item, i) => <div key={i} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                      <p className="text-sm text-gray-800">{item}</p>
                      <div className="mt-3 h-2 w-32 rounded bg-gray-100" />
                    </div>)}
                </div>
              </PullToRefresh>
            </Tab.Content>
          </div>
        </Tab.Root>

        <div className="flex h-8 w-full items-center justify-center bg-white">
          <div className="h-1 w-32 rounded-full bg-gray-200" />
        </div>
      </div>;
  }
}`,...(I=(k=u.parameters)==null?void 0:k.docs)==null?void 0:I.source},description:{story:"2. 탭 결합 데모 (리뷰어 요청 반영)",...(q=($=u.parameters)==null?void 0:$.docs)==null?void 0:q.description}}};const se=["Card_Demo","With_Tabs_Demo"];export{m as Card_Demo,u as With_Tabs_Demo,se as __namedExportsOrder,ee as default};
