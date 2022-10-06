import { CommonFunction } from "./commonFunc";
import {CommonFuncDate} from "./commDate";
import {HandleFile} from './handleFile';

const CommonFunc = new CommonFunction();
const CommonDate = new CommonFuncDate();
const CommonFile = new HandleFile();
export {
    CommonFunc,
    CommonDate,
    CommonFile
}