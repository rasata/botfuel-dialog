const { SampleAbstractModuleView } = require('sample-botfuel-module');

class ConcreteView extends SampleAbstractModuleView {
  getTextsConcrete() {
    return ['Extending a view defined in a module...'];
  }
}

module.exports = ConcreteView;
