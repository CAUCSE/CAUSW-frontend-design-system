// src/uniqueSvgIds.ts
let seq = 0;

export function uniquifySvgIds(svg: SVGSVGElement, prefix?: string) {
  const p = prefix ?? `__svg${++seq}__`;

  const idElems = svg.querySelectorAll<HTMLElement>('[id]');
  if (idElems.length === 0) return;

  const map = new Map<string, string>();

  idElems.forEach((el) => {
    const oldId = el.getAttribute('id');
    if (!oldId) return;
    if (oldId.startsWith(p)) return; // 중복 적용 방지
    const newId = `${p}${oldId}`;
    map.set(oldId, newId);
    el.setAttribute('id', newId);
  });

  const attrsToFix = [
    'href',
    'xlink:href',
    'fill',
    'stroke',
    'filter',
    'clip-path',
    'mask',
    'marker-start',
    'marker-mid',
    'marker-end',
    'style',
    'aria-labelledby',
    'aria-describedby',
  ];

  const all = svg.querySelectorAll<HTMLElement>('*');

  all.forEach((el) => {
    for (const attr of attrsToFix) {
      const v = el.getAttribute(attr);
      if (!v) continue;

      let nv = v;

      // url(#id)
      nv = nv.replace(/url\(#([^)]+)\)/g, (m, id) => {
        const mapped = map.get(id);
        return mapped ? `url(#${mapped})` : m;
      });

      // href="#id" / xlink:href="#id"
      nv = nv.replace(/^#(.+)$/, (m, id) => {
        const mapped = map.get(id);
        return mapped ? `#${mapped}` : m;
      });

      // aria-labelledby="id1 id2" 같은 케이스
      nv = nv.replace(/\b([A-Za-z][\w:.-]*)\b/g, (m, token) => {
        const mapped = map.get(token);
        return mapped ?? m;
      });

      if (nv !== v) el.setAttribute(attr, nv);
    }
  });
}
