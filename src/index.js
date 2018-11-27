/**
 * 算法演练——正序
 * Date 2018-11-21
 * write by bruce yan
 */

// 引入类文件并构造实例
import BaseClass from './base/index';
import bubbleModel from './rank-bubble/index';
import bucketModel from './rank-bucket/index';
import countModel from './rank-count/index';
import heapModel from './rank-heap/index';
import insertModel from './rank-insert/index';
import mergeModel from './rank-merge/index';
import quickModel from './rank-quick/index';
import radixModel from './rank-radix/index';
import selectModel from './rank-select/index';
import shellModel from './rank-shell/index';

const BaseModel = new BaseClass(1000);
BaseModel.analyzePerformance([
    bubbleModel.bubbleRank,
    selectModel.selectRank,
    insertModel.insertRank,
    shellModel.shellRank,
    mergeModel.mergeRank,
    quickModel.quickRank,
    heapModel.heapRank,
    countModel.countRank,
], true);