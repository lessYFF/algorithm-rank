/**
 * 堆排序单元测试
 */

import { expect } from 'chai';
import heapModel from '../../src/rank-heap/index';

const orderArray = heapModel.heapRank(heapModel.disorderArray);
const isOrderArray = orderArray.every((item, i) => {
      if (i === orderArray.length-1) return true;
return (+orderArray[i+1] >= +orderArray[i])
});

describe('堆排序是否有效', () => {
    it('已经排成正序', () => {
        expect(isOrderArray).to.be.ok;
    });
});