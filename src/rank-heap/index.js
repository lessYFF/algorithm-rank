/**
 * 堆排序
 */

import Base from '../base/index';

class HeapClass extends Base {
    constructor(props) {
        super(props);
        this.currentLen = 0;
        this.heapRank = this.heapRank.bind(this);
    }

    /**
     * 堆排序实现
     * @param arr
     * @returns {Array}
     */
    heapRank(arr = []) {
        try {
            if (!Array.isArray(arr)) {
                throw('argument should be Array');
                return;
            }
            if (arr.length < 2) return arr;

            // 构建堆
            this.toolOneOfHeap(arr);

            for(let i=arr.length-1; i > 0; i--) {
                this.toolThreeOfHeap(arr, 0, i);
                this.currentLen--;
                this.toolTwoOfHeap(arr, 0);
            }

            return arr;
        } catch(err) {
            console.error('heapRank error', err);
        }
    }

    /**
     * 堆排序 - 工具方法一
     * 构建大顶堆
     * @param arr
     */
    toolOneOfHeap(arr=[]) {
        try {
            if (!Array.isArray(arr)) {
                throw('argument should be Array');
                return;
            }

            this.currentLen = arr.length;
            const index = Math.floor(arr.length/2);

            // 构建大顶堆
            for(let i=index; i>=0; i--) {
                this.toolTwoOfHeap(arr, i);
            }
        } catch (err) {
            console.error('toolOneOfHeap error', err);
        }
    }

    /**
     * 堆排序 - 工具方法二
     * 堆调整
     * @param arr
     * @param i
     */
    toolTwoOfHeap(arr=[], i) {
        try {
            if (!Array.isArray(arr)) {
                throw('argument should be Array');
                return;
            }

            let larger = i;
            const left = i*2 + 1,
                  right = i*2 + 2;

            if(left < this.currentLen && arr[left] > arr[larger]) {
                larger = left;
            }
            if(right < this.currentLen && arr[right] > arr[larger]) {
                larger = right;
            }

            if (larger !== i) {
                this.toolThreeOfHeap(arr, i, larger);
                this.toolTwoOfHeap(arr, larger);
            }
        } catch(err) {
            console.error('toolTwoOfHeap error', err);
        }
    }

    /**
     * 堆排序 - 工具方法三
     * 数据转化
     * @param arr
     * @param i
     * @param j
     */
    toolThreeOfHeap(arr = [], i, j) {
        try {
            if (!Array.isArray(arr)) {
                throw('argument should be Array');
                return;
            }
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        } catch (err) {
            console.error('toolThreeOfHeap error', err);
        }
    }
}

export default new HeapClass();
