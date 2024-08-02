import data from '@@/dataset/radial.json';
import { Graph } from '@antv/g6';

export const layoutRadialConfigurationTranslate: TestCase = async (context) => {
  const graph = new Graph({
    ...context,
    data,
    node: {
      style: {
        labelText: (d) => d.id,
        labelPlacement: 'center',
      },
    },
    edge: {
      style: {
        endArrow: true,
        endArrowType: 'vee',
      },
    },
    layout: {
      type: 'radial',
      unitRadius: 50,
    },
    behaviors: ['drag-canvas', 'drag-element'],
  });

  await graph.render();

  return graph;
};
