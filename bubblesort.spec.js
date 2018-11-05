describe("Bubble Sort", function() {
  beforeAll(function() {
    spyOn(window, "swap").and.callThrough();
  });

  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it("returns sorted array for single item", function() {
    expect(bubbleSort([6])).toEqual([6]);
  });

  it("returns sorted array for multiple items", function() {
    let input = [100, 6, 5, 9, 13, 8, 84, 65],
      answer = [5, 6, 8, 9, 13, 65, 84, 100];
    // let input = [13, 8],
    //   answer = [8, 13];
    expect(bubbleSort(input)).toEqual(answer);
  });

  it("calls swap correct number of times", function() {
    window.swap();
    expect(window.swap.calls.count()).toEqual(2);
  });
});
