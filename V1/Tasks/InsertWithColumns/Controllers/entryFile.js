import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumntitle = LocalRequestBody.title;
	let LocalCoumnstart = LocalRequestBody.start;
	let LocalCoumnclassName = LocalRequestBody.className;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnclassName,LocalCoumnstart,LocalCoumntitle});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};