/**
 * 二分／归并排序
 */

import Base from '../base/index';

class MergeClass extends Base {
    constructor(props) {
        super(props)
    }

    /**
     * 归并/二分排序 - 工具方法
     * @param left
     * @param right
     * @returns {Array}
     */
    toolOfMerge(left = [], right = []){
        try {
            if (!Array.isArray(left) || !Array.isArray(right)) {
                throw('argument should be Array');
                return;
            }
            const blockArr = [];
            while (left.length && right.length) {
                if (left[0] <= right [0]) {
                    blockArr.push(left.shift());
                } else {
                    blockArr.push(right.shift());
                }
            }
            while (left.length) {
                blockArr.push(left.shift());
            }
            while (right.length) {
                blockArr.push(right.shift());
            }

            return blockArr;
        } catch (err) {
            console.error('toolOfMerge err', err);
        }
    }

    /**
     * 归并/二分排序处理
     * @param arr
     * @returns {Array}
     */
    mergeRank(arr = []) {
        try {
            if (!Array.isArray(arr)) {
                throw('argument should be Array');
                return;
            }
            if (arr.length < 2) return arr;

            const len = arr.length;
            const middle = Math.floor(len/2);
            const left = arr.slice(0, middle);
            const right = arr.slice(middle);

            return this.toolOfMerge(this.mergeRank(left), this.mergeRank(right));
        } catch (err) {
            console.error('mergeRank err', err);
        }
    }
}

export default new MergeClass();