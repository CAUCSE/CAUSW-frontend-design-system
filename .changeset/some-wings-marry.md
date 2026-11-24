---
'@causw/tokens': minor
'@causw/icons': minor
'@causw/core': minor
---

Home v3.2 update

- **Breaking** `@causw/core`: `CalendarEvent.type` renamed to `color` with 6 options (gray, blue, orange, red, skyblue, purple)
- **Breaking** `@causw/core`: remove `size="lg"`
- `@causw/core`: extract `Calendar.Nav` with `hideHeader` and controlled `month`/`onMonthChange` so the header can be sticky outside the calendar
- `@causw/core`: add `headerAction` and `banner` slots, show adjacent-month days at 30% opacity, week row min height 80px (120px from 768px), red weekend dates, no ellipsis on event titles
- `@causw/tokens`: add orange/skyblue/purple 100 color tokens
- `@causw/icons`: add PcMonitor and TeamMembers colored icons
