'use strict';
  const myApp = require('../app/findMinMax');
  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [6] for [6, 6, 6, 6]', function () {
        expect(myApp.findMinMax([6, 6, 6, 6])).toEqual([6]);
      });

    });

  });


  describe('Edge Cases for findMinMax function', function () {

      it('should return "invalid input" for "0"', function () {
        expect(myApp.findMinMax(0)).toEqual('invalid input');
      });

      it('should return "invalid input" for boolean values', function () {
        expect(myApp.findMinMax(true)).toEqual('invalid input');
        expect(myApp.findMinMax(false)).toEqual('invalid input');
      });

    });

