/**
 * 计数排序
 */

import Base from '../base/index';

class CountClass extends Base {
    constructor(props) {
        super(props)
    }

    /**
     * 计数排序实现
     * 桶用对象不用数组: 1、数组要知道边界,提前比较耗性能,不比较预设置浪费内存;2、对象遍历是先数值升序,然后是字符串时间升序,最后是smbol时间升序
     * @param arr
     * @returns {Array}
     */
    countRank(arr = []) {
        try {
            if (!Array.isArray(arr)) {
                throw('argument should be Array');
                return;
            }
            if (arr.length < 2) return arr;

            const cacheMap = {};
            let rankIndex = 0;

            for (let item of arr) {
                if (!cacheMap[item]) {
                    cacheMap[item] = 0;
                }
                cacheMap[item]++;
            }

            for (let key in cacheMap) {
                let value = cacheMap[key];
                while (value) {
                    arr[rankIndex++] = +key;
                    value--;
                }
            }

            return arr;
        } catch(err) {
            console.error('countRank error', err);
        }
    }
}

export default new CountClass();
