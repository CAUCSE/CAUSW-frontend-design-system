import{j as t}from"./jsx-runtime-BbjYY0PH.js";import{R as B}from"./iframe-CoaixIpO.js";import"./preload-helper-Dp1pzeXC.js";const Ve={"gray-50":"text-gray-50","gray-100":"text-gray-100","gray-200":"text-gray-200","gray-300":"text-gray-300","gray-400":"text-gray-400","gray-500":"text-gray-500","gray-600":"text-gray-600","gray-700":"text-gray-700","gray-800":"text-gray-800","gray-900":"text-gray-900","blue-50":"text-blue-50","blue-500":"text-blue-500","blue-700":"text-blue-700","red-100":"text-red-100","red-400":"text-red-400",white:"text-white-main",black:"text-black-main"},$e={caption:{sm:{normal:{fontSize:"text-12",lineHeight:"leading-normal",fontWeight:"font-regular"},point:{fontSize:"text-12",lineHeight:"leading-normal",fontWeight:"font-semibold"}},md:{normal:{fontSize:"text-14",lineHeight:"leading-normal",fontWeight:"font-medium"},point:{fontSize:"text-14",lineHeight:"leading-normal",fontWeight:"font-semibold"}}},body2:{sm:{normal:{fontSize:"text-14",lineHeight:"leading-normal",fontWeight:"font-regular"},point:{fontSize:"text-14",lineHeight:"leading-normal",fontWeight:"font-semibold"}},md:{normal:{fontSize:"text-16",lineHeight:"leading-normal",fontWeight:"font-medium"},point:{fontSize:"text-16",lineHeight:"leading-normal",fontWeight:"font-semibold"}}},body:{sm:{normal:{fontSize:"text-16",lineHeight:"leading-tight",fontWeight:"font-regular"},point:{fontSize:"text-16",lineHeight:"leading-normal",fontWeight:"font-bold"}},md:{normal:{fontSize:"text-18",lineHeight:"leading-normal",fontWeight:"font-medium"},point:{fontSize:"text-18",lineHeight:"leading-normal",fontWeight:"font-bold"}}},subtitle:{sm:{normal:{fontSize:"text-18",lineHeight:"leading-normal",fontWeight:"font-medium"},point:{fontSize:"text-18",lineHeight:"leading-normal",fontWeight:"font-bold"}},md:{normal:{fontSize:"text-20",lineHeight:"leading-normal",fontWeight:"font-medium"},point:{fontSize:"text-20",lineHeight:"leading-normal",fontWeight:"font-bold"}}},title:{sm:{normal:{fontSize:"text-22",lineHeight:"leading-normal",fontWeight:"font-bold"},point:{fontSize:"text-22",lineHeight:"leading-normal",fontWeight:"font-bold"}},md:{normal:{fontSize:"text-32",lineHeight:"leading-normal",fontWeight:"font-bold"},point:{fontSize:"text-32",lineHeight:"leading-normal",fontWeight:"font-bold"}}},head:{sm:{normal:{fontSize:"text-30",lineHeight:"leading-normal",fontWeight:"font-bold"},point:{fontSize:"text-30",lineHeight:"leading-normal",fontWeight:"font-bold"}},md:{normal:{fontSize:"text-48",lineHeight:"leading-normal",fontWeight:"font-bold"},point:{fontSize:"text-48",lineHeight:"leading-normal",fontWeight:"font-bold"}}}},W={12:{fontSize:"text-12",lineHeight:"leading-normal",fontWeight:"font-medium"},14:{fontSize:"text-14",lineHeight:"leading-normal",fontWeight:"font-medium"},15:{fontSize:"text-15",lineHeight:"leading-normal",fontWeight:"font-semibold"},16:{fontSize:"text-16",lineHeight:"leading-normal",fontWeight:"font-medium"},18:{fontSize:"text-18",lineHeight:"leading-normal",fontWeight:"font-medium"},20:{fontSize:"text-20",lineHeight:"leading-normal",fontWeight:"font-semibold"},24:{fontSize:"text-24",lineHeight:"leading-normal",fontWeight:"font-bold"}};function Fe({variant:i,size:M,fixedSize:n,point:w,color:q}){const H="font-sans",k=Ve[q];let a;if(i==="fixed"&&n)a=W[n];else if(i!=="fixed"){const r=$e[i][M];a=w?r.point:r.normal}else a=W[16];return`${H} ${k} ${a.fontSize} ${a.lineHeight} ${a.fontWeight}`.trim()}const e=B.forwardRef(({variant:i="body",size:M="sm",fixedSize:n,point:w=!1,color:q="gray-700",as:H="span",children:k,className:a="",...r},Pe)=>{const Ne=Fe({variant:i,size:M,fixedSize:n,point:w,color:q});return B.createElement(H,{ref:Pe,className:`${Ne} ${a}`.trim(),...r},k)});e.displayName="Text";e.__docgenInfo={description:"",methods:[],displayName:"Text",props:{point:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'gray-50'
| 'gray-100'
| 'gray-200'
| 'gray-300'
| 'gray-400'
| 'gray-500'
| 'gray-600'
| 'gray-700'
| 'gray-800'
| 'gray-900'
| 'blue-50'
| 'blue-500'
| 'blue-700'
| 'red-100'
| 'red-400'
| 'white'
| 'black'`,elements:[{name:"literal",value:"'gray-50'"},{name:"literal",value:"'gray-100'"},{name:"literal",value:"'gray-200'"},{name:"literal",value:"'gray-300'"},{name:"literal",value:"'gray-400'"},{name:"literal",value:"'gray-500'"},{name:"literal",value:"'gray-600'"},{name:"literal",value:"'gray-700'"},{name:"literal",value:"'gray-800'"},{name:"literal",value:"'gray-900'"},{name:"literal",value:"'blue-50'"},{name:"literal",value:"'blue-500'"},{name:"literal",value:"'blue-700'"},{name:"literal",value:"'red-100'"},{name:"literal",value:"'red-400'"},{name:"literal",value:"'white'"},{name:"literal",value:"'black'"}]},description:"",defaultValue:{value:"'gray-700'",computed:!1}},as:{required:!1,tsType:{name:"union",raw:"'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label'",elements:[{name:"literal",value:"'span'"},{name:"literal",value:"'p'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'div'"},{name:"literal",value:"'label'"}]},description:"",defaultValue:{value:"'span'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{defaultValue:{value:"'body'",computed:!1},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const Ie={title:"Components/Text",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["caption","body2","body","subtitle","title","head","fixed"],description:"Typography variant"},size:{control:"select",options:["sm","md"],description:"Size for responsive variants"},fixedSize:{control:"select",options:[12,14,15,16,18,20,24],description:"Size for fixed variant"},point:{control:"boolean",description:"Emphasis style (bolder weight)"},as:{control:"select",options:["span","p","h1","h2","h3","h4","h5","h6","div","label"],description:"HTML element to render"}}},o={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"caption",size:"sm"}},s={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"caption",size:"md"}},l={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"caption",size:"sm",point:!0}},d={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"body2",size:"sm"}},m={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"body2",size:"md"}},c={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"body",size:"sm"}},u={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"body",size:"md"}},g={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"body",size:"sm",point:!0}},p={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"subtitle",size:"sm"}},h={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"subtitle",size:"md",point:!0}},x={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"title",size:"sm",as:"h2"}},f={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"title",size:"md",as:"h1"}},y={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"head",size:"sm",as:"h1"}},v={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"head",size:"md",as:"h1"}},z={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"fixed",fixedSize:12}},b={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"fixed",fixedSize:16}},S={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"fixed",fixedSize:24}},T={args:{children:""},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx(e,{variant:"head",size:"md",as:"h1",children:"Head MD - 48px Bold"}),t.jsx(e,{variant:"head",size:"sm",as:"h2",children:"Head SM - 30px Bold"}),t.jsx(e,{variant:"title",size:"md",as:"h2",children:"Title MD - 32px Bold"}),t.jsx(e,{variant:"title",size:"sm",as:"h3",children:"Title SM - 22px Bold"}),t.jsx(e,{variant:"subtitle",size:"md",children:"Subtitle MD - 20px Medium"}),t.jsx(e,{variant:"subtitle",size:"sm",children:"Subtitle SM - 18px Medium"}),t.jsx(e,{variant:"body",size:"md",children:"Body MD - 18px Medium"}),t.jsx(e,{variant:"body",size:"sm",children:"Body SM - 16px Regular"}),t.jsx(e,{variant:"body2",size:"md",children:"Body2 MD - 16px Medium"}),t.jsx(e,{variant:"body2",size:"sm",children:"Body2 SM - 14px Regular"}),t.jsx(e,{variant:"caption",size:"md",children:"Caption MD - 14px Medium"}),t.jsx(e,{variant:"caption",size:"sm",children:"Caption SM - 12px Regular"})]})},j={args:{children:""},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx(e,{variant:"body",size:"sm",children:"Body SM - Normal"}),t.jsx(e,{variant:"body",size:"sm",point:!0,children:"Body SM - Point (Bold)"}),t.jsx(e,{variant:"subtitle",size:"sm",children:"Subtitle SM - Normal"}),t.jsx(e,{variant:"subtitle",size:"sm",point:!0,children:"Subtitle SM - Point (Bold)"})]})};var C,D,R;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'caption',
    size: 'sm'
  }
}`,...(R=(D=o.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var P,N,V;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'caption',
    size: 'md'
  }
}`,...(V=(N=s.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var $,F,E;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'caption',
    size: 'sm',
    point: true
  }
}`,...(E=(F=l.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var _,A,I;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body2',
    size: 'sm'
  }
}`,...(I=(A=d.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var L,O,G;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body2',
    size: 'md'
  }
}`,...(G=(O=m.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var J,K,Q;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body',
    size: 'sm'
  }
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body',
    size: 'md'
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body',
    size: 'sm',
    point: true
  }
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ie,ne;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'subtitle',
    size: 'sm'
  }
}`,...(ne=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var re,oe,se;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'subtitle',
    size: 'md',
    point: true
  }
}`,...(se=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var le,de,me;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'title',
    size: 'sm',
    as: 'h2'
  }
}`,...(me=(de=x.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ce,ue,ge;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'title',
    size: 'md',
    as: 'h1'
  }
}`,...(ge=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var pe,he,xe;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'head',
    size: 'sm',
    as: 'h1'
  }
}`,...(xe=(he=y.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var fe,ye,ve;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'head',
    size: 'md',
    as: 'h1'
  }
}`,...(ve=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var ze,be,Se;z.parameters={...z.parameters,docs:{...(ze=z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'fixed',
    fixedSize: 12
  }
}`,...(Se=(be=z.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var Te,je,Me;b.parameters={...b.parameters,docs:{...(Te=b.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'fixed',
    fixedSize: 16
  }
}`,...(Me=(je=b.parameters)==null?void 0:je.docs)==null?void 0:Me.source}}};var we,qe,He;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'fixed',
    fixedSize: 24
  }
}`,...(He=(qe=S.parameters)==null?void 0:qe.docs)==null?void 0:He.source}}};var ke,Be,We;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    children: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Text variant="head" size="md" as="h1">
        Head MD - 48px Bold
      </Text>
      <Text variant="head" size="sm" as="h2">
        Head SM - 30px Bold
      </Text>
      <Text variant="title" size="md" as="h2">
        Title MD - 32px Bold
      </Text>
      <Text variant="title" size="sm" as="h3">
        Title SM - 22px Bold
      </Text>
      <Text variant="subtitle" size="md">
        Subtitle MD - 20px Medium
      </Text>
      <Text variant="subtitle" size="sm">
        Subtitle SM - 18px Medium
      </Text>
      <Text variant="body" size="md">
        Body MD - 18px Medium
      </Text>
      <Text variant="body" size="sm">
        Body SM - 16px Regular
      </Text>
      <Text variant="body2" size="md">
        Body2 MD - 16px Medium
      </Text>
      <Text variant="body2" size="sm">
        Body2 SM - 14px Regular
      </Text>
      <Text variant="caption" size="md">
        Caption MD - 14px Medium
      </Text>
      <Text variant="caption" size="sm">
        Caption SM - 12px Regular
      </Text>
    </div>
}`,...(We=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:We.source}}};var Ce,De,Re;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    children: ''
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Text variant="body" size="sm">
        Body SM - Normal
      </Text>
      <Text variant="body" size="sm" point>
        Body SM - Point (Bold)
      </Text>
      <Text variant="subtitle" size="sm">
        Subtitle SM - Normal
      </Text>
      <Text variant="subtitle" size="sm" point>
        Subtitle SM - Point (Bold)
      </Text>
    </div>
}`,...(Re=(De=j.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};const Le=["CaptionSmall","CaptionMedium","CaptionPoint","Body2Small","Body2Medium","BodySmall","BodyMedium","BodyPoint","SubtitleSmall","SubtitlePoint","TitleSmall","TitleMedium","HeadSmall","HeadMedium","Fixed12","Fixed16","Fixed24","AllVariants","PointComparison"];export{T as AllVariants,m as Body2Medium,d as Body2Small,u as BodyMedium,g as BodyPoint,c as BodySmall,s as CaptionMedium,l as CaptionPoint,o as CaptionSmall,z as Fixed12,b as Fixed16,S as Fixed24,v as HeadMedium,y as HeadSmall,j as PointComparison,h as SubtitlePoint,p as SubtitleSmall,f as TitleMedium,x as TitleSmall,Le as __namedExportsOrder,Ie as default};
