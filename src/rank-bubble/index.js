/**
 * 冒泡排序
 */

import Base from '../base/index';

class BubbleClass extends Base {
    constructor(props) {
        super(props)
    }

    /**
     * 冒泡排序处理
     * @param arr
     * @returns {Array}
     */
    bubbleRank(arr = []) {
        try {
            if (!Array.isArray(arr)) {
                throw('argument should be Array!');
                return;
            }
            if (arr.length < 2) return arr;
            const len = arr.length;

            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let block = arr[j + 1];
                        arr[j + 1] = arr[j];
                        arr[j] = block;
                    }
                }
            }
        } catch (err) {
            console.error('bubbleRank error', err);
        }
        return arr;
    }
}

export default new BubbleClass();