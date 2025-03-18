import blocksLibrary from './../common/blocks-library/blocks.json';
import modulesLibrary from './../common/blocks-library/modules.json';

const requireBlocks = require.context('../common/blocks-library/', true, /index.vue$/);
const blocks = [...blocksLibrary.components, ...modulesLibrary.components].map(block => block.id);

export default function (Vue) {
  requireBlocks.keys()
    .filter(pathToBlock => pathToBlock.split('/').length === 3)
    .forEach((pathToBlock) => {
      const blockConfig = requireBlocks(pathToBlock);
      const block = blockConfig.default;
      const blockId = block.name;
      if (blockId && blocks.includes(blockId)) {
        Vue.component(blockId, block);
      }
    });
}
