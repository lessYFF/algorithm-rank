/**
 * 快速排序单元测试
 */

import { expect } from 'chai';
import quickModel from '../../src/rank-quick/index';

const orderArray = quickModel.quickRank(quickModel.disorderArray);
const isOrderArray = orderArray.every((item, i) => {
      if (i === orderArray.length-1) return true;
      return (+orderArray[i+1] >= +orderArray[i])
});

describe('快速排序是否有效', () => {
    it('已经排成正序', () => {
        expect(isOrderArray).to.be.ok;
    });
});