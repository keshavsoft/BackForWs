import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnclassName,LocalCoumnstart,LocalCoumntitle}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnclassName,LocalCoumnstart,LocalCoumntitle});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};