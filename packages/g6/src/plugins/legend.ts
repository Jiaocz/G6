import { Category, Layout, Selection } from '@antv/component';
import { CategoryStyleProps } from '@antv/component/lib/ui/legend/types';
import { get, isFunction } from '@antv/util';
import { GraphEvent } from '../constants';
import type { RuntimeContext } from '../runtime/types';
import type { ElementDatum, ElementType, ID, State } from '../types';
import type { CardinalPlacement } from '../types/placement';
import type { BasePluginOptions } from './base-plugin';
import { BasePlugin } from './base-plugin';

interface Datum extends Record<string, any> {
  id?: string;
  label?: string;
  color?: string;
  marker?: string;
  elementType?: ElementType;
}

/**
 * <zh/> 图例配置项
 *
 * <en/> Legend options
 */
export interface LegendOptions extends BasePluginOptions, Omit<CategoryStyleProps, 'data'> {
  /**
   * <zh/> 图例触发行为
   * - `'hover'`：鼠标移入图例项时触发
   * - `'click'`：鼠标点击图例项时触发
   *
   * <en/> Legend trigger behavior
   * - `'hover'`：mouseover the legend item
   * - `'click'`：click the legend item
   * @defaultValue 'hover'
   */
  trigger?: 'hover' | 'click';
  /**
   * <zh/> 图例在画布中的相对位置，默认为 'bottom'，代表在画布正下方
   *
   * <en/> Relative position of the legend in the canvas, defaults to 'bottom', representing the bottom of the canvas
   * @defaultValue 'bottom'
   */
  position?: CardinalPlacement;
  /**
   * <zh/> 节点分类标识
   *
   * <en/> Node Classification Identifier
   */
  nodeField?: string | ((item: ElementDatum) => string);
  /**
   * <zh/> 边分类标识
   *
   * <en/> Edge Classification Identifier
   */
  edgeField?: string | ((item: ElementDatum) => string);
  /**
   * <zh/> 组合分类标识
   *
   * <en/> Combo Classification Identifier
   */
  comboField?: string | ((item: ElementDatum) => string);
}

/**
 * <zh/> 图例
 *
 * <en/> Legend
 * @remarks
 * <zh/> 图例插件用于展示图中元素的分类信息，支持节点、边、组合的分类信息展示。
 *
 * <en/> The legend plugin is used to display the classification information of elements in the graph, and supports the display of classification information of nodes, edges, and combos.
 */
export class Legend extends BasePlugin<LegendOptions> {
  static defaultOptions: Partial<LegendOptions> = {
    position: 'bottom',
    trigger: 'hover',
    orientation: 'horizontal',
    layout: 'flex',
    itemSpacing: 4,
    rowPadding: 10,
    colPadding: 10,
    itemMarkerSize: 16,
    itemLabelFontSize: 16,
  };
  private typePrefix = '__data__';
  private element: Layout | null = null;
  private draw = false;
  private fieldMap = {
    node: new Map<string, ID[]>(),
    edge: new Map<string, ID[]>(),
    combo: new Map<string, ID[]>(),
  };
  private selectedItems: string[] = [];

  constructor(context: RuntimeContext, options: LegendOptions) {
    super(context, Object.assign({}, Legend.defaultOptions, options));
    this.bindEvents();
  }

  /**
   * <zh/> 更新图例配置
   *
   * <en/> Update the legend configuration
   * @param options - <zh/> 图例配置项 | <en/> Legend configuration item
   * @internal
   */
  public update(options: Partial<LegendOptions>) {
    super.update(options);
    this.clear();
    this.createElement();
  }

  private clear() {
    this.element?.destroy();
    this.element = null;
    this.draw = false;
  }

  private bindEvents = () => {
    const { graph } = this.context;
    graph.on(GraphEvent.AFTER_DRAW, this.createElement);
  };

  private changeState = (el: Selection, state: State | State[]) => {
    const { graph } = this.context;
    const { typePrefix } = this;
    const composeId = get(el, [typePrefix, 'id']);
    const category = get(el, [typePrefix, 'style', 'labelText']);
    const [type] = composeId.split('__');
    const ids = this.fieldMap[type as keyof typeof this.fieldMap].get(category) || [];

    graph.setElementState(Object.fromEntries(ids?.map((id) => [id, state])));
  };

  /**
   * <zh/> 图例元素点击事件
   *
   * <en/> Legend element click event
   * @param event - <zh/> 点击的元素 | <en/> The element that is clicked
   */
  public click = (event: Selection) => {
    if (this.options.trigger === 'hover') return;
    const composeId = get(event, [this.typePrefix, 'id']);
    if (!this.selectedItems.includes(composeId)) {
      this.selectedItems.push(composeId);
      this.changeState(event, 'selected');
    } else {
      this.selectedItems = this.selectedItems.filter((item) => item !== composeId);
      this.changeState(event, []);
    }
  };

  /**
   * <zh/> 图例元素移出事件
   *
   * <en/> Legend element mouseleave event
   * @param event - <zh/> 移出的元素 | <en/> The element that is moved out
   */
  public mouseleave = (event: Selection) => {
    if (this.options.trigger === 'click') return;
    this.selectedItems = [];
    this.changeState(event, []);
  };

  /**
   * <zh/> 图例元素移入事件
   *
   * <en/> Legend element mouseenter event
   * @param event - <zh/> 移入的元素 | <en/> The element that is moved in
   */
  public mouseenter = (event: Selection) => {
    if (this.options.trigger === 'click') return;
    const composeId = get(event, [this.typePrefix, 'id']);
    if (!this.selectedItems.includes(composeId)) {
      this.selectedItems.push(composeId);
      this.changeState(event, 'active');
    } else {
      this.selectedItems = this.selectedItems.filter((item) => item !== composeId);
    }
  };

  /**
   * <zh/> 刷新图例元素状态
   *
   * <en/> Refresh the status of the legend element
   */
  public updateElement() {
    if (!this.element) return;
    const category = this.element.getChildByIndex(0) as Category;

    category.update({
      itemMarkerOpacity: ({ id }) => {
        if (!this.selectedItems.length || this.selectedItems.includes(id)) return 1;
        return 0.5;
      },
      itemLabelOpacity: ({ id }) => {
        if (!this.selectedItems.length || this.selectedItems.includes(id)) return 1;
        return 0.5;
      },
    });
  }

  private setFieldMap = (field: string, id: ID, type: ElementType) => {
    if (!field) return;
    const map = this.fieldMap[type];
    if (!map) return;
    if (!map.has(field)) {
      map.set(field, [id]);
    } else {
      const ids = map.get(field);
      if (ids) {
        ids.push(id);
        map.set(field, ids);
      }
    }
  };

  private getEvents = () => {
    return {
      mouseenter: this.mouseenter,
      mouseleave: this.mouseleave,
      click: this.click,
    };
  };

  private getMarkerData = (field: string | ((item: ElementDatum) => string), elementType: ElementType) => {
    if (!field) return [];
    const { model, element, graph } = this.context;
    const { nodes, edges, combos } = model.getData();
    const items: { [key: string]: Datum } = {};

    const getField = (item: ElementDatum) => {
      if (isFunction(field)) return field(item);
      return field;
    };

    const defaultType = {
      node: 'circle',
      edge: 'line',
      combo: 'rect',
    };

    /** 用于将 G6 element 转换为 componets 支持的类型 */
    const markerMapping: { [key: string]: string } = {
      circle: 'circle',
      ellipse: 'circle', // 待 components 支持 ellipse
      image: 'bowtie',
      rect: 'square',
      star: 'cross',
      triangle: 'triangle',
      diamond: 'diamond',
      cubic: 'dot',
      line: 'hyphen',
      polyline: 'hyphen',
      quadratic: 'hv',
      'cubic-horizontal': 'hyphen',
      'cubic-vertical': 'line',
    };

    const getElementStyle = (type: ElementType, datum: ElementDatum) => {
      const style = element?.getElementComputedStyle(type, datum);
      return style;
    };

    const getElementModel = (data: ElementDatum[], type: ElementType) => {
      data.forEach((item) => {
        const { id } = item;
        const value = get(item, ['data', getField(item)]);
        const marker = element?.getElementType(type, item) || 'circle';
        const style = getElementStyle(type, item);
        const color = (type === 'edge' ? style?.stroke : style?.fill) || '#1783ff';

        if (id && value && value.replace(/\s+/g, '')) {
          this.setFieldMap(value, id, type);
          if (!items[value]) {
            items[value] = {
              id: `${type}__${id}`,
              label: value,
              marker: markerMapping[marker] || defaultType[type],
              elementType: type,
              lineWidth: 1,
              stroke: color,
              fill: color,
            };
          }
        }
      });
    };

    switch (elementType) {
      case 'node':
        getElementModel(nodes, 'node');
        break;
      case 'edge':
        getElementModel(edges, 'edge');
        break;
      case 'combo':
        getElementModel(combos, 'combo');
        break;
      default:
        return [];
    }

    return Object.values(items);
  };

  /**
   * <zh/> 图例布局
   *
   * <en/> Legend layout
   * @param position -  <zh/> 图例位置| <en/> Legend position
   * @returns <zh/> 图例布局样式| <en/> Legend layout style
   */
  public layout = (position: CardinalPlacement) => {
    const preset = {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'center',
    };
    let { flexDirection, alignItems, justifyContent } = preset;

    const layout = {
      top: ['row', 'flex-start', 'center'],
      bottom: ['row', 'flex-end', 'center'],
      left: ['column', 'flex-start', 'center'],
      right: ['column', 'flex-end', 'center'],
    };

    if (position in layout) {
      [flexDirection, alignItems, justifyContent] = layout[position];
    }
    return {
      display: 'flex',
      flexDirection,
      justifyContent,
      alignItems,
    };
  };

  private createElement = () => {
    if (this.draw) {
      this.updateElement();
      return;
    }
    const { canvas } = this.context;
    const [canvasWidth, canvasHeight] = canvas.getSize();
    const {
      width = canvasWidth,
      height = canvasHeight,
      nodeField,
      edgeField,
      comboField,
      trigger,
      position,
      ...rest
    } = this.options;
    const nodeItems = this.getMarkerData(nodeField, 'node');
    const edgeItems = this.getMarkerData(edgeField, 'edge');
    const comboItems = this.getMarkerData(comboField, 'combo');
    const items = [...nodeItems, ...comboItems, ...edgeItems];
    const layout = this.layout(position);

    const layoutWrapper = new Layout({
      style: {
        width,
        height,
        ...layout,
      },
    });

    const categoryStyle = Object.assign(
      {
        width,
        height,
        data: items,
        itemMarkerLineWidth: ({ lineWidth }: Datum) => lineWidth,
        itemMarker: ({ marker }: Datum) => marker,
        itemMarkerStroke: ({ stroke }: Datum) => stroke,
        itemMarkerFill: ({ fill }: Datum) => fill,
        gridCol: nodeItems.length,
      },
      rest,
      this.getEvents(),
    );

    const category = new Category({
      className: 'legend',
      style: categoryStyle,
    });
    layoutWrapper.appendChild(category);
    canvas.appendChild(layoutWrapper as any);
    this.element = layoutWrapper;
    this.draw = true;
  };

  /**
   * <zh/>销毁图例
   *
   * <en/> Destroy the legend
   */
  public destroy(): void {
    this.clear();
    this.context.graph.off(GraphEvent.AFTER_DRAW, this.createElement);
    super.destroy();
  }
}
