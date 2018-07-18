describe('app', () => {

    describe('AppController Controller', () => {
        let scope, $state, $q, deferred, $transitions, controller;

        beforeEach(() => {
            angular.mock.module('wa');
        });

        beforeEach(inject((_$rootScope_, _$state_, _$q_, _$controller_, _$transitions_) => {
            scope = _$rootScope_.$new();
            $q = _$q_;
            $state = _$state_;
            $transitions = _$transitions_;
            deferred = $q.defer();

          spyOn($state, 'defaultErrorHandler');
          spyOn($transitions, 'onSuccess');

          controller = _$controller_('AppController', {
                $scope: scope,
                $state: $state,
                $q: $q,
                $transitions: $transitions,
            });
        }));

        afterEach(() => {
            scope.$destroy();
        });

        it('should be defined', () => {
            expect(controller).toBeDefined();
        });

        it('should call $state defaultErrorHandler', () => {
            expect($state.defaultErrorHandler).toBeDefined();
        });

        it('should call transition onSuccess', () => {
            expect($transitions.onSuccess).toBeDefined();
            controller.stateChangeSuccess({}, {});
        });

        describe('stateChangeSuccess method', () => {
            beforeEach(() => {
                spyOn($state, 'go');
            });

            it('should be defined', () => {
                expect(controller.stateChangeSuccess).toBeDefined();
            });

            it('should set page title if it\'s defined', () => {
                controller.stateChangeSuccess({data: { pageTitle: 'Unit testing'}}, {});

                expect(document.title).toEqual('Weather APP | Unit testing');
            });
        });

        describe('notAuthorized method', () => {
            beforeEach(() => {
                spyOn($state, 'go');
            });

            it('should be defined', () => {
                expect(controller.notAuthorized).toBeDefined();
            });

            it('should go to forbidden state', () => {
                controller.notAuthorized();
                expect($state.go).toHaveBeenCalledTimes(1);
            });
        });
    });
});
