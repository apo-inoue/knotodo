export const DRAWER_ROUTE_NAMES = {
  ホーム: 'ホーム',
  カラー設定: 'カラー設定',
  カテゴリ設定: 'カテゴリ設定',
  ヒトコト設定: 'ヒトコト設定',
  ログアウト: 'ログアウト',
} as const;

export type DrawerRouteName = typeof DRAWER_ROUTE_NAMES[keyof typeof DRAWER_ROUTE_NAMES];

export const STACK_ROUTE_NAMES = {
  Root: 'Root',
  詳細: '詳細',
  編集: '編集',
  新規作成: '新規作成',
} as const;

export type StackRouteName = typeof STACK_ROUTE_NAMES[keyof typeof STACK_ROUTE_NAMES];

export const TAB_ROUTE_NAMES = {
  Archive: 'Archive',
  Today: 'Today',
  NotToday: 'NotToday',
} as const;

export type TabRouteName = typeof TAB_ROUTE_NAMES[keyof typeof TAB_ROUTE_NAMES];
