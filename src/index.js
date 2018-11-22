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
import HeapModel from './rank-heap/index';
import InsertModel from './rank-insert/index';
import MergeModel from './rank-merge/index';
import QuickModel from './rank-quick/index';
import RadixModel from './rank-radix/index';
import SelectModel from './rank-select/index';
import ShellModel from './rank-shell/index';

const BaseModel = new BaseClass(1000);
BaseModel.analyzePerformance([bubbleModel.bubbleRank]);