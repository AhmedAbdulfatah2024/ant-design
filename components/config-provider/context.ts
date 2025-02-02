import * as React from 'react';

import type { WarningContextProps } from '../_util/warning';
import type { ShowWaveEffect } from '../_util/wave/interface';
import type { AlertProps } from '../alert';
import type { BadgeProps } from '../badge';
import type { ButtonProps } from '../button';
import type { CardProps } from '../card';
import type { DrawerProps } from '../drawer';
import type { FlexProps } from '../flex/interface';
import type { FormProps } from '../form/Form';
import type { InputProps } from '../input';
import type { Locale } from '../locale';
import type { ModalProps } from '../modal';
import type { ArgsProps } from '../notification/interface';
import type { PaginationProps } from '../pagination';
import type { SelectProps } from '../select';
import type { SpaceProps } from '../space';
import type { TableProps } from '../table';
import type { TabsProps } from '../tabs';
import type { TagProps } from '../tag';
import type { AliasToken, MappingAlgorithm, OverrideToken } from '../theme/interface';
import type { TourProps } from '../tour/interface';
import type { TransferProps } from '../transfer';
import type { RenderEmptyHandler } from './defaultRenderEmpty';

export const defaultIconPrefixCls = 'anticon';

export interface Theme {
  primaryColor?: string;
  infoColor?: string;
  successColor?: string;
  processingColor?: string;
  errorColor?: string;
  warningColor?: string;
}

export interface CSPConfig {
  nonce?: string;
}

export type DirectionType = 'ltr' | 'rtl' | undefined;

type ComponentsConfig = {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
    algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
  };
};

export interface ThemeConfig {
  token?: Partial<AliasToken>;
  components?: ComponentsConfig;
  algorithm?: MappingAlgorithm | MappingAlgorithm[];
  hashed?: boolean;
  inherit?: boolean;
  cssVar?:
    | {
        /**
         * Prefix for css variable, default to `ant`.
         */
        prefix?: string;
        /**
         * Unique key for theme, should be set manually < react@18.
         */
        key?: string;
      }
    | boolean;
}

export interface ComponentStyleConfig {
  className?: string;
  style?: React.CSSProperties;
}

export interface TableConfig extends ComponentStyleConfig {
  expandable?: {
    expandIcon?: NonNullable<TableProps['expandable']>['expandIcon'];
  };
}

export interface ImageConfig extends ComponentStyleConfig {
  preview?: Partial<Record<'closeIcon', React.ReactNode>>;
}

export type TourConfig = Pick<TourProps, 'closeIcon'>;

export type ModalConfig = ComponentStyleConfig &
  Pick<ModalProps, 'classNames' | 'styles' | 'closeIcon'>;

export type TabsConfig = ComponentStyleConfig &
  Pick<TabsProps, 'indicator' | 'indicatorSize' | 'moreIcon' | 'addIcon'>;

export type AlertConfig = ComponentStyleConfig & Pick<AlertProps, 'closeIcon'>;

export type BadgeConfig = ComponentStyleConfig & Pick<BadgeProps, 'classNames' | 'styles'>;

export type ButtonConfig = ComponentStyleConfig & Pick<ButtonProps, 'classNames' | 'styles'>;

export type NotificationConfig = ComponentStyleConfig & Pick<ArgsProps, 'closeIcon'>;

export type TagConfig = ComponentStyleConfig & Pick<TagProps, 'closeIcon'>;

export interface CardConfig extends ComponentStyleConfig {
  classNames?: CardProps['classNames'];
  styles?: CardProps['styles'];
}

export type DrawerConfig = ComponentStyleConfig &
  Pick<DrawerProps, 'classNames' | 'styles' | 'closeIcon'>;

export type FlexConfig = ComponentStyleConfig & Pick<FlexProps, 'vertical'>;

export type TransferConfig = ComponentStyleConfig & Pick<TransferProps, 'selectionsIcon'>;

export type PopupOverflow = 'viewport' | 'scroll';

export interface WaveConfig {
  disabled?: boolean;
  showEffect?: ShowWaveEffect;
}

export interface ConfigConsumerProps {
  getTargetContainer?: () => HTMLElement;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
  rootPrefixCls?: string;
  iconPrefixCls: string;
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
  renderEmpty?: RenderEmptyHandler;
  csp?: CSPConfig;
  autoInsertSpaceInButton?: boolean;
  input?: ComponentStyleConfig & Pick<InputProps, 'autoComplete' | 'classNames' | 'styles'>;
  pagination?: ComponentStyleConfig & Pick<PaginationProps, 'showSizeChanger'>;
  locale?: Locale;
  direction?: DirectionType;
  space?: Pick<SpaceProps, 'size' | 'className' | 'classNames' | 'style' | 'styles'>;
  virtual?: boolean;
  popupMatchSelectWidth?: boolean;
  popupOverflow?: PopupOverflow;
  form?: ComponentStyleConfig &
    Pick<FormProps, 'requiredMark' | 'colon' | 'scrollToFirstError' | 'validateMessages'>;
  theme?: ThemeConfig;
  select?: ComponentStyleConfig & Pick<SelectProps, 'showSearch'>;
  alert?: AlertConfig;
  anchor?: ComponentStyleConfig;
  button?: ButtonConfig;
  divider?: ComponentStyleConfig;
  drawer?: DrawerConfig;
  calendar?: ComponentStyleConfig;
  carousel?: ComponentStyleConfig;
  cascader?: ComponentStyleConfig;
  collapse?: ComponentStyleConfig;
  typography?: ComponentStyleConfig;
  skeleton?: ComponentStyleConfig;
  spin?: ComponentStyleConfig;
  segmented?: ComponentStyleConfig;
  steps?: ComponentStyleConfig;
  statistic?: ComponentStyleConfig;
  image?: ImageConfig;
  layout?: ComponentStyleConfig;
  list?: ComponentStyleConfig;
  mentions?: ComponentStyleConfig;
  modal?: ModalConfig;
  progress?: ComponentStyleConfig;
  result?: ComponentStyleConfig;
  slider?: ComponentStyleConfig;
  breadcrumb?: ComponentStyleConfig;
  menu?: ComponentStyleConfig;
  checkbox?: ComponentStyleConfig;
  descriptions?: ComponentStyleConfig;
  empty?: ComponentStyleConfig;
  badge?: BadgeConfig;
  radio?: ComponentStyleConfig;
  rate?: ComponentStyleConfig;
  switch?: ComponentStyleConfig;
  transfer?: TransferConfig;
  avatar?: ComponentStyleConfig;
  message?: ComponentStyleConfig;
  tag?: TagConfig;
  table?: TableConfig;
  card?: CardConfig;
  tabs?: TabsConfig;
  timeline?: ComponentStyleConfig;
  timePicker?: ComponentStyleConfig;
  tour?: TourConfig;
  upload?: ComponentStyleConfig;
  notification?: NotificationConfig;
  tree?: ComponentStyleConfig;
  colorPicker?: ComponentStyleConfig;
  datePicker?: ComponentStyleConfig;
  rangePicker?: ComponentStyleConfig;
  dropdown?: ComponentStyleConfig;
  flex?: FlexConfig;
  wave?: WaveConfig;
  warning?: WarningContextProps;
}

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return suffixCls ? `ant-${suffixCls}` : 'ant';
};

// zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will cause circular dependency.
export const ConfigContext = React.createContext<ConfigConsumerProps>({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls,
});

export const { Consumer: ConfigConsumer } = ConfigContext;
