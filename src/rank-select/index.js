/**
 * 选择排序
 */

import Base from '../base/index';

class SelectClass extends Base {
    constructor(props) {
        super(props)
    }

    /**
     * 选择排序处理
     * @param arr
     * @returns {Array}
     */
    selectRank(arr = []) {
        try {
            if (!Array.isArray(arr)) {
                throw('argument should be Array!');
                return;
            }
            if (arr.length < 2) return arr;
            const len = arr.length;

            for (let i = 0; i < len; i++) {
                for (let j = i + 1; j < len; j++) {
                    if (arr[j] < arr[i]) {
                        let block = arr[i];
                        arr[i] = arr[j];
                        arr[j] = block;
                    }
                }
            }
        } catch (err) {
            console.error('selectRank error', err);
        }
        return arr;
    }
}

export default new SelectClass();