/**
 * 排序基础类
 * 提供排序数据和性能分析方法
 */

export default class Base {
    constructor(len) {
        this.disorderArray = '';
        // 构造时初始化
        this.initDisorderArray(len);
    }

    /**
     * 初始化待排序数据
     * @param {Number} max - 数据长度
     */
    initDisorderArray(max = 100) {
        const testArray = new Array(max).fill();
        this.disorderArray = testArray.map(item => {
              return parseInt(Math.random() * 100, 10);
        });
    }

    /**
     * 性能分析方法
     * @param {Array} rankFnList - 待分析的排序方法数组
     */
    analyzePerformance(rankFnList) {
        try {
            rankFnList.map(item => {
                const startTime = Date.now();
                const orderArray = item(this.disorderArray);
                const diffTime = Date.now() - startTime;

                console.log('<<----%s--->>花费时间:%d ms', item.name, diffTime);
                console.log('<<----%s--->>排序后数组结果:%o', item.name, orderArray.join('-->'));
            });
        } catch (err) {
            console.error('analyzePerformance error', err);
        }
    }
}

