//use describe to write a testcase
//use xdescribe if you don't want to run the testcase --  xdescribe
//use fdescribe if you want to execute a particular testcase --  fdescribe
describe("helloTest",()=>{
    let expected = '';
    let notExpected = '';
    let expectMatch = null;
    beforeEach(()=>{
        expected = "helloTest";
        notExpected = "helloTest123";
        expectMatch = new RegExp(/^hello/);
    });
    afterEach(()=>{
        expected = "";
        notExpected = "";
    })
it("checks if helloTest is helloTest",()=>expect( "helloTest").toBe(expected));
it("checks if helloTest is hellotest",()=>expect( "helloTest").not.toBe(notExpected));
it("checks if helloTest is starts with hello",()=>expect( "helloTest").toMatch(expectMatch));
});