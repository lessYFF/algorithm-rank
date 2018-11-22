/**
 * 选择排序单元测试
 */

import { expect } from 'chai';
import selectModel from '../../src/rank-select/index';

const orderArray = selectModel.selectRank(selectModel.disorderArray);
const isOrderArray = orderArray.every((item, i) => {
      if (i === orderArray.length-1) return true;
      return (orderArray[i+1] >= orderArray[i])
});

describe('选择排序是否有效', () => {
    it('已经排成正序', () => {
        expect(isOrderArray).to.be.ok;
    });
});