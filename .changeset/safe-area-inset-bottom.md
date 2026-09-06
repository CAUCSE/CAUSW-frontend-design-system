---
'@causw/core': patch
---

safe-area-inset-bottom을 `var(--safe-area-inset-bottom, env(safe-area-inset-bottom, 0px))` 기준으로 통일

- BottomSheet: content 하단 여백에 safe-area 합산
- BottomNavigation: 하단 offset을 변수 기준으로 변경
- Toast: viewport 위치를 알약 offset 기준으로 변경
- Dialog: fullscreen 하단 여백에 safe-area 합산
