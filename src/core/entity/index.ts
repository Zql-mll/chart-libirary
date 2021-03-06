import { EChartType, EThemeType } from '@/core/constans/enum';
import _default from 'my-chart-demo';

export interface IEntity<T> {
  id: T;
}
export interface IBase<T> {
  key: string;
  value: T;
}

export interface ISelectBase<T> extends IBase<T> {
  selected: boolean;
}

export interface IBaseDesc<T> extends ISelectBase<T>, IEntity<string> { }

export interface ITheme {
  version: number;
  themeName: string;
  theme: Object;
}
export interface IChartTheme extends IBase<EThemeType> {
  name: string;
  data: ITheme;
}
export interface IChartOpts {
  // 设备像素比
  devicePixelRatio?: number;
  // 渲染器，支持 'canvas' 或者 'svg'
  renderer?: string;
  // 可显式指定实例宽度，单位为像素。如果传入值为 null/undefined/'auto'，则表示自动取 dom（实例容器）的宽度。
  width?: number | string;
  // 可显式指定实例高度，单位为像素。如果传入值为 null/undefined/'auto'，则表示自动取 dom（实例容器）的高度。
  height?: number | string;
}

export interface IChartBase extends IEntity<string> {
  name: string;
  description: string;
  remark: string;
  themeType: EThemeType;
  chartType: EChartType;
}
export interface IChartData extends IEntity<string> {
  // 数据项名
  name: string;
  // 数据
  value: string;
}

export interface IChartProperty<T> {
  name: string;
  value: T;
}

export interface IChart extends IChartBase {
  // 类目轴数据
  categoryData: string;
  // 数据项
  chartsData: IChartData[];
}


export class ChartOpts implements IChartOpts {
  devicePixelRatio?: number;
  renderer?: string = "canvas";
  width?: number | string;
  height?: number | string;
  constructor(_width?: number | string, _height?: number | string, _render?: string, _devicePixelRatio?: number) {
    this.width = _width;
    this.height = _height;
    this.renderer = _render;
    this.devicePixelRatio = _devicePixelRatio;
  }
}