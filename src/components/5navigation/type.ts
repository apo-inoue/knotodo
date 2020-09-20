export const ROUTE_NAMES = {
  ホーム: 'ホーム',
  カラー設定: 'カラー設定',
  カテゴリ設定: 'カテゴリ設定',
} as const;

export type RouteName = typeof ROUTE_NAMES[keyof typeof ROUTE_NAMES];
