import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnclassName,LocalCoumnstart,LocalCoumntitle}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnclassName,LocalCoumnstart,LocalCoumntitle});

    return LocalFromDal;
};

export {
    postDefaultFunc
};