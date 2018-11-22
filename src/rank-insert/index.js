/**
 * 插入排序
 */

import Base from '../base/index';

class InsertClass extends Base {
    constructor(props) {
        super(props)
    }

    /**
     * 插入排序处理
     * @param arr
     * @returns {Array}
     */
    insertRank(arr = []) {
        try {
            if (!Array.isArray(arr)) {
                throw('argument should be Array');
                return;
            }
            if (arr.length < 2) return arr;

            const len = arr.length;
            let preIndex, current;

            for (let i = 1; i < len; i ++) {
                preIndex = i-1;
                current = arr[i];

                while (preIndex >= 0 && arr[preIndex] > current) {
                    arr[preIndex+1] = arr[preIndex];
                    preIndex--;
                }
                arr[preIndex+1] = current;
            }
        } catch (err) {
            console.error('insertRank error', err);
        }
        return arr;
    }
}

export default new InsertClass();