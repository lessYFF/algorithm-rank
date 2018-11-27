/**
 * 归并／二分排序单元测试
 */

import { expect } from 'chai';
import mergeModel from '../../src/rank-merge/index';

const orderArray = mergeModel.mergeRank(mergeModel.disorderArray);
const isOrderArray = orderArray.every((item, i) => {
      if (i === orderArray.length-1) return true;
return (+orderArray[i+1] >= +orderArray[i])
});

describe('归并排序是否有效', () => {
    it('已经排成正序', () => {
        expect(isOrderArray).to.be.ok;
    });
});