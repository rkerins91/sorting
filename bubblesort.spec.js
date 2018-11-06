describe('Bubble Sort', function(){
  it('handles an empty array', function(){
  testArr = [];
    expect( bubbleSort(testArr) ).toEqual( [] );
  });
  it('handles an array of length 1', function(){
      testArr = [2];

    expect( bubbleSort([2]) ).toEqual( [2] );
  });
  it('handles an array of length 2', function(){
          testArr = [5, 3];
        expect( bubbleSort(testArr) ).toEqual( [3, 5] );
      });
  it('handles an array of many elements', function(){
      testArr = [45, 31, 22, 11, -5, 9, 0, 1000];
    expect( bubbleSort(testArr) ).toEqual( [-5, 0, 9, 11, 22, 31, 45, 1000] ); 
  });
  it('always takes less than n² swaps', function () {
      spyOn(window, 'swap').and.callThrough(); 
      testArr = [45, 31, 22, 11, -5, 9, 0, 1000];
      expect(window.swap.calls.count() <= testArr.length*testArr.length).toBe(true);
    });
});
