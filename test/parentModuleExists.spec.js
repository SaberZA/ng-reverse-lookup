describe('when initialising', function() {
  beforeEach(module('parent'));

  it('should indicate initialisation', function() {
    expect(true).toBe(true);
  });

  it('should not be an empty module', function() {
    // create an injector
    var $injector = angular.injector(['ng', 'parent']);

    var parentModule = $injector.get('$parentService');

    expect(parentModule).toBeDefined();

    // use the injector to kick off your application
    // use the type inference to auto inject arguments, or use implicit injection
    // $injector.invoke(function($rootScope, $compile, $document) {
    //   $compile($document)($rootScope);
    //   $rootScope.$digest();
    // });

  });
})