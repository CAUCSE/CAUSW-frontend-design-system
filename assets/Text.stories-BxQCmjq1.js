import{j as t}from"./jsx-runtime-CIilbVx7.js";import{R as Pe}from"./iframe-D-1YIn1h.js";import"./preload-helper-Dp1pzeXC.js";const Ne={"gray-50":"text-gray-50","gray-100":"text-gray-100","gray-200":"text-gray-200","gray-300":"text-gray-300","gray-400":"text-gray-400","gray-500":"text-gray-500","gray-600":"text-gray-600","gray-700":"text-gray-700","gray-800":"text-gray-800","gray-900":"text-gray-900","blue-50":"text-blue-50","blue-500":"text-blue-500","blue-700":"text-blue-700","red-100":"text-red-100","red-400":"text-red-400",white:"text-white-main",black:"text-black-main"},Ve={caption:{sm:{normal:{fontSize:"text-12",lineHeight:"leading-normal",fontWeight:"font-regular"},point:{fontSize:"text-12",lineHeight:"leading-normal",fontWeight:"font-semibold"}},md:{normal:{fontSize:"text-14",lineHeight:"leading-normal",fontWeight:"font-medium"},point:{fontSize:"text-14",lineHeight:"leading-normal",fontWeight:"font-semibold"}}},body2:{sm:{normal:{fontSize:"text-14",lineHeight:"leading-normal",fontWeight:"font-regular"},point:{fontSize:"text-14",lineHeight:"leading-normal",fontWeight:"font-semibold"}},md:{normal:{fontSize:"text-16",lineHeight:"leading-normal",fontWeight:"font-medium"},point:{fontSize:"text-16",lineHeight:"leading-normal",fontWeight:"font-semibold"}}},body:{sm:{normal:{fontSize:"text-16",lineHeight:"leading-tight",fontWeight:"font-regular"},point:{fontSize:"text-16",lineHeight:"leading-normal",fontWeight:"font-bold"}},md:{normal:{fontSize:"text-18",lineHeight:"leading-normal",fontWeight:"font-medium"},point:{fontSize:"text-18",lineHeight:"leading-normal",fontWeight:"font-bold"}}},subtitle:{sm:{normal:{fontSize:"text-18",lineHeight:"leading-normal",fontWeight:"font-medium"},point:{fontSize:"text-18",lineHeight:"leading-normal",fontWeight:"font-bold"}},md:{normal:{fontSize:"text-20",lineHeight:"leading-normal",fontWeight:"font-medium"},point:{fontSize:"text-20",lineHeight:"leading-normal",fontWeight:"font-bold"}}},title:{sm:{normal:{fontSize:"text-22",lineHeight:"leading-normal",fontWeight:"font-bold"},point:{fontSize:"text-22",lineHeight:"leading-normal",fontWeight:"font-bold"}},md:{normal:{fontSize:"text-32",lineHeight:"leading-normal",fontWeight:"font-bold"},point:{fontSize:"text-32",lineHeight:"leading-normal",fontWeight:"font-bold"}}},head:{sm:{normal:{fontSize:"text-30",lineHeight:"leading-normal",fontWeight:"font-bold"},point:{fontSize:"text-30",lineHeight:"leading-normal",fontWeight:"font-bold"}},md:{normal:{fontSize:"text-48",lineHeight:"leading-normal",fontWeight:"font-bold"},point:{fontSize:"text-48",lineHeight:"leading-normal",fontWeight:"font-bold"}}}},B={12:{fontSize:"text-12",lineHeight:"leading-normal",fontWeight:"font-medium"},14:{fontSize:"text-14",lineHeight:"leading-normal",fontWeight:"font-medium"},15:{fontSize:"text-15",lineHeight:"leading-normal",fontWeight:"font-semibold"},16:{fontSize:"text-16",lineHeight:"leading-normal",fontWeight:"font-medium"},18:{fontSize:"text-18",lineHeight:"leading-normal",fontWeight:"font-medium"},20:{fontSize:"text-20",lineHeight:"leading-normal",fontWeight:"font-semibold"},24:{fontSize:"text-24",lineHeight:"leading-normal",fontWeight:"font-bold"}};function $e({variant:i,size:M,fixedSize:n,point:w,color:q}){const H="font-sans",k=Ne[q];let a;if(i==="fixed"&&n)a=B[n];else if(i!=="fixed"){const r=Ve[i][M];a=w?r.point:r.normal}else a=B[16];return`${H} ${k} ${a.fontSize} ${a.lineHeight} ${a.fontWeight}`.trim()}const e=({variant:i="body",size:M="sm",fixedSize:n,point:w=!1,color:q="gray-700",as:H="span",children:k,className:a="",...r})=>{const Re=$e({variant:i,size:M,fixedSize:n,point:w,color:q});return Pe.createElement(H,{className:`${Re} ${a}`.trim(),...r},k)};e.displayName="Text";e.__docgenInfo={description:"",methods:[],displayName:"Text",props:{point:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'gray-50'
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
| 'black'`,elements:[{name:"literal",value:"'gray-50'"},{name:"literal",value:"'gray-100'"},{name:"literal",value:"'gray-200'"},{name:"literal",value:"'gray-300'"},{name:"literal",value:"'gray-400'"},{name:"literal",value:"'gray-500'"},{name:"literal",value:"'gray-600'"},{name:"literal",value:"'gray-700'"},{name:"literal",value:"'gray-800'"},{name:"literal",value:"'gray-900'"},{name:"literal",value:"'blue-50'"},{name:"literal",value:"'blue-500'"},{name:"literal",value:"'blue-700'"},{name:"literal",value:"'red-100'"},{name:"literal",value:"'red-400'"},{name:"literal",value:"'white'"},{name:"literal",value:"'black'"}]},description:"",defaultValue:{value:"'gray-700'",computed:!1}},as:{required:!1,tsType:{name:"union",raw:"'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label'",elements:[{name:"literal",value:"'span'"},{name:"literal",value:"'p'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'div'"},{name:"literal",value:"'label'"}]},description:"",defaultValue:{value:"'span'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{defaultValue:{value:"'body'",computed:!1},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const Ae={title:"Components/Text",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["caption","body2","body","subtitle","title","head","fixed"],description:"Typography variant"},size:{control:"select",options:["sm","md"],description:"Size for responsive variants"},fixedSize:{control:"select",options:[12,14,15,16,18,20,24],description:"Size for fixed variant"},point:{control:"boolean",description:"Emphasis style (bolder weight)"},as:{control:"select",options:["span","p","h1","h2","h3","h4","h5","h6","div","label"],description:"HTML element to render"}}},o={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"caption",size:"sm"}},s={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"caption",size:"md"}},l={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"caption",size:"sm",point:!0}},d={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"body2",size:"sm"}},m={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"body2",size:"md"}},c={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"body",size:"sm"}},u={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"body",size:"md"}},g={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"body",size:"sm",point:!0}},p={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"subtitle",size:"sm"}},h={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"subtitle",size:"md",point:!0}},x={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"title",size:"sm",as:"h2"}},f={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"title",size:"md",as:"h1"}},y={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"head",size:"sm",as:"h1"}},v={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"head",size:"md",as:"h1"}},z={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"fixed",fixedSize:12}},b={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"fixed",fixedSize:16}},S={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"fixed",fixedSize:24}},T={args:{children:""},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx(e,{variant:"head",size:"md",as:"h1",children:"Head MD - 48px Bold"}),t.jsx(e,{variant:"head",size:"sm",as:"h2",children:"Head SM - 30px Bold"}),t.jsx(e,{variant:"title",size:"md",as:"h2",children:"Title MD - 32px Bold"}),t.jsx(e,{variant:"title",size:"sm",as:"h3",children:"Title SM - 22px Bold"}),t.jsx(e,{variant:"subtitle",size:"md",children:"Subtitle MD - 20px Medium"}),t.jsx(e,{variant:"subtitle",size:"sm",children:"Subtitle SM - 18px Medium"}),t.jsx(e,{variant:"body",size:"md",children:"Body MD - 18px Medium"}),t.jsx(e,{variant:"body",size:"sm",children:"Body SM - 16px Regular"}),t.jsx(e,{variant:"body2",size:"md",children:"Body2 MD - 16px Medium"}),t.jsx(e,{variant:"body2",size:"sm",children:"Body2 SM - 14px Regular"}),t.jsx(e,{variant:"caption",size:"md",children:"Caption MD - 14px Medium"}),t.jsx(e,{variant:"caption",size:"sm",children:"Caption SM - 12px Regular"})]})},j={args:{children:""},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx(e,{variant:"body",size:"sm",children:"Body SM - Normal"}),t.jsx(e,{variant:"body",size:"sm",point:!0,children:"Body SM - Point (Bold)"}),t.jsx(e,{variant:"subtitle",size:"sm",children:"Subtitle SM - Normal"}),t.jsx(e,{variant:"subtitle",size:"sm",point:!0,children:"Subtitle SM - Point (Bold)"})]})};var W,C,D;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'caption',
    size: 'sm'
  }
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var R,P,N;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'caption',
    size: 'md'
  }
}`,...(N=(P=s.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var V,$,F;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'caption',
    size: 'sm',
    point: true
  }
}`,...(F=($=l.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var E,_,A;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body2',
    size: 'sm'
  }
}`,...(A=(_=d.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var I,L,O;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body2',
    size: 'md'
  }
}`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var G,J,K;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body',
    size: 'sm'
  }
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body',
    size: 'md'
  }
}`,...(X=(U=u.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body',
    size: 'sm',
    point: true
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ie;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'subtitle',
    size: 'sm'
  }
}`,...(ie=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ne,re,oe;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'subtitle',
    size: 'md',
    point: true
  }
}`,...(oe=(re=h.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,le,de;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'title',
    size: 'sm',
    as: 'h2'
  }
}`,...(de=(le=x.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var me,ce,ue;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'title',
    size: 'md',
    as: 'h1'
  }
}`,...(ue=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var ge,pe,he;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'head',
    size: 'sm',
    as: 'h1'
  }
}`,...(he=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var xe,fe,ye;v.parameters={...v.parameters,docs:{...(xe=v.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'head',
    size: 'md',
    as: 'h1'
  }
}`,...(ye=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,ze,be;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'fixed',
    fixedSize: 12
  }
}`,...(be=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:be.source}}};var Se,Te,je;b.parameters={...b.parameters,docs:{...(Se=b.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'fixed',
    fixedSize: 16
  }
}`,...(je=(Te=b.parameters)==null?void 0:Te.docs)==null?void 0:je.source}}};var Me,we,qe;S.parameters={...S.parameters,docs:{...(Me=S.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'fixed',
    fixedSize: 24
  }
}`,...(qe=(we=S.parameters)==null?void 0:we.docs)==null?void 0:qe.source}}};var He,ke,Be;T.parameters={...T.parameters,docs:{...(He=T.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Be=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:Be.source}}};var We,Ce,De;j.parameters={...j.parameters,docs:{...(We=j.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(De=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:De.source}}};const Ie=["CaptionSmall","CaptionMedium","CaptionPoint","Body2Small","Body2Medium","BodySmall","BodyMedium","BodyPoint","SubtitleSmall","SubtitlePoint","TitleSmall","TitleMedium","HeadSmall","HeadMedium","Fixed12","Fixed16","Fixed24","AllVariants","PointComparison"];export{T as AllVariants,m as Body2Medium,d as Body2Small,u as BodyMedium,g as BodyPoint,c as BodySmall,s as CaptionMedium,l as CaptionPoint,o as CaptionSmall,z as Fixed12,b as Fixed16,S as Fixed24,v as HeadMedium,y as HeadSmall,j as PointComparison,h as SubtitlePoint,p as SubtitleSmall,f as TitleMedium,x as TitleSmall,Ie as __namedExportsOrder,Ae as default};
