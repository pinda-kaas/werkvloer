describe('httpBasedService', function () {
    var httpBasedService,
        httpBackend;

    beforeEach(function (){
        // load the module.
        module('WIP');

        // get your service, also get $httpBackend
        // $httpBackend will be a mock, thanks to angular-mocks.js
        inject(function($httpBackend, _httpBasedService_) {
            httpBasedService = _httpBasedService_;
            httpBackend = $httpBackend;
        });
    });

    // make sure no expectations were missed in your tests.
    // (e.g. expectGET or expectPOST)
    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should send the msg and return the response.', function (){
        // set up some data for the http call to return and test later.
        var returnData = { excited: true };

        // expectGET to make sure this is called once.
        httpBackend.expectGET('somtdfgdgfdhing.json?msg=wee').respond(returnData);

        // make the call.
        var returnedPromise = httpBasedService.sendMessage('wee');

        // set up a handler for the response, that will put the result
        // into a variable in this scope for you to test.
        var result;
        returnedPromise.then(function(response) {
            result = response.data;
        });

        // flush the backend to "execute" the request to do the expectedGET assertion.
        httpBackend.flush();

        // check the result.
        // (after Angular 1.2.5: be sure to use `toEqual` and not `toBe`
        // as the object will be a copy and not the same instance.)
        expect(result).toEqual(returnData);
    });
});