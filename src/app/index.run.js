(function() {
  'use strict';

  angular
    .module('jenkinsTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
