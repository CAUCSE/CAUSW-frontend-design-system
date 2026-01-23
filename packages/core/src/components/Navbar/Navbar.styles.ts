export const navbarStyles = {
  desktop: {
    root: 'w-[240px] h-screen bg-white border-r border-gray-200 flex flex-col',

    top: 'px-4 py-6',

    content: 'flex-1 px-2 py-4 space-y-1 overflow-y-auto',

    footer: 'px-4 py-4 border-t border-gray-100',

    item: (active: boolean) =>
      [
        'w-full flex items-center gap-3 px-3 py-2 rounded-md',
        'text-sm transition-colors',
        active ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50',
      ].join(' '),

    badge: 'ml-auto px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-400',
  },

  mobile: {
    root:
      'fixed bottom-0 left-0 right-0 ' +
      'h-[72px] bg-white border-t border-gray-200 ' +
      'flex items-center justify-between',

    item: (active: boolean) =>
      [
        'flex flex-col items-center justify-center flex-1',
        'text-xs transition-colors',
        active ? 'text-gray-900 font-medium' : 'text-gray-400',
      ].join(' '),

    icon: (active: boolean) => (active ? 'text-gray-700' : 'text-gray-300'),
  },
};
