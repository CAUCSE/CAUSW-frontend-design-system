---
'@causw/core': patch
'@causw/tokens': patch
---

Update Sidebar with the compact desktop navigation layout and BottomNavigation
with the floating pill layout.

Sidebar: 64px 레일에 40x44 아이템(아이콘 + 캡션) 세로 스택 레이아웃으로 변경
BottomNavigation: 하단 플로팅 알약 레이아웃(최대 360px, 40x44 아이템, 32px 간격)으로 변경
Sidebar 하위 컴포넌트 7종이 전달받은 className을 덮어쓰지 않고 병합하도록 수정
11px 캡션 토큰(fontSize `3xs`, `typo-caption-11-semibold`) 추가
