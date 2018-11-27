/**
 * 快速排序
 */

import Base from '../base/index';

class QuickClass extends Base {
    constructor(props) {
        super(props)
        this.quickRank = this.quickRank.bind(this);
    }

    /**
     * 快速排序实现
     * @param arr - 待排序数组
     * @param left - 区间边界
     * @param right - 区间边界
     * @returns {Array} 已排序数组
     */
    quickRank(arr = [], left, right) {
        try {
            if (!Array.isArray(arr)) {
                throw('argument should be Array');
                return;
            }
            if (arr.length < 2) return arr;

            const len = arr.length -1;
            let partIndex,
            _left = typeof left != 'number' ? 0 : left,
            _right = typeof right != 'number' ? len : right;

            if (_left < _right) {
                partIndex  = this.toolTwoOfQuick(arr, _left, _right);
                this.quickRank(arr, _left, partIndex-1);
                this.quickRank(arr, partIndex+1, _right);
            }
            return arr;
        } catch (err) {
            console.error('quickRank error', err);
        }
    }

    /**
     * 快速排序 - 工具方法一
     * @param arr
     * @param i
     * @param j
     */
    toolOneOfQuick(arr = [], i, j) {
        try {
            if (!Array.isArray(arr)) {
                throw('argument should be Array');
                return;
            }
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        } catch (err) {
            console.error('toolOneOfQuick error', err);
        }
    }

    /**
     * 快速排序 - 工具方法二
     * @param arr
     * @param left
     * @param right
     * @returns {number}
     */
    toolTwoOfQuick(arr = [], left, right) {
        try {
            if (!Array.isArray(arr)) {
                throw('argument should be Array');
                return;
            }
            const pivot = left;
            let index = left + 1;

            for (let i = index; i <= right; i++) {
                if (arr[i] < arr[pivot]) {
                    this.toolOneOfQuick(arr, i, index);
                    index++;
                }
            }
            this.toolOneOfQuick(arr, pivot, index - 1);

            return index-1;
        } catch(err) {
            console.error('toolTwoOfQuick error', err);
        }
    }
}

export default new QuickClass();
