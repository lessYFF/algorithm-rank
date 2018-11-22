/**
 * 希尔排序
 */

import Base from '../base/index';

class ShellClass extends Base {
    constructor(props) {
        super(props)
    }

    /**
     * 希尔排序处理
     * @param arr
     * @returns {Array}
     */
    shellRank(arr = []) {
        try {
            if (!Array.isArray(arr)) {
                throw('argument should be Array');
                return;
            }
            if (arr.length < 2) return arr;

            const len = arr.length;
            let current, preIndex, grap = 1;

            while (grap < len/5) {
                grap = grap*5 + 1;
            }

            for (grap; grap > 0; grap = Math.floor(grap/5)) {
                for (let i = grap; i < len; i++) {
                    current = arr[i];
                    preIndex = i-grap;

                    while(preIndex >= 0 && arr[preIndex] > current) {
                        arr[preIndex+grap] = arr[preIndex];
                        preIndex -= grap;
                    }
                    arr[preIndex+grap] = current;
                }
            }
        } catch (err) {
            console.error('shellRank error', err);
        }
        return arr;
    }
}

export default new ShellClass();