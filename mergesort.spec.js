describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    expect(split([5, 3, 6, 3, 4, 1])).toEqual([[5, 3, 6], [3, 4, 1]]);
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    expect(merge([[2, 5, 7, 8], [1, 3, 4, 6]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

describe('Merge Sort', function(){
  it('handles an empty array', function(){
  testArr = [];
    expect( mergeSort(testArr) ).toEqual( [] );
  });
  it('handles an array of length 1', function(){
      testArr = [2];

    expect( mergeSort([2]) ).toEqual( [2] );
  });
  it('handles an array of length 2', function(){
          testArr = [5, 3];
        expect( mergeSort(testArr) ).toEqual( [3, 5] );
      });
  it('handles an array of many elements', function(){
      testArr = [45, 31, 22, 11, -5, 9, 0, 1000];
    expect( mergeSort(testArr) ).toEqual( [-5, 0, 9, 11, 22, 31, 45, 1000] ); 
  });
  it('always takes less than n² swaps', function () {
      spyOn(window, 'swap').and.callThrough(); 
      testArr = [45, 31, 22, 11, -5, 9, 0, 1000];
      expect(window.swap.calls.count() <= testArr.length*testArr.length).toBe(true);
    });
});