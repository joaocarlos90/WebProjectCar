const RegisterModel = require('../model/RegisterModel');

const RegisterValidation = async(req, res, next) => {
    const { Nome, Email, Telefone, Profissao, PossuiCarro } = req.body;

    if(!Nome)
    return res.status(400).json({error: 'Nome é obrigatório'});
    else if(!Email)
    return res.status(400).json({error: 'Email é obrigatório'});
    else if(!Telefone)
    return res.status(400).json({error: 'Telefone é obrigatório'});
    else if(!Profissao)
    return res.status(400).json({error: 'Profissao é obrigatório'});
    else if(!PossuiCarro)
    return res.status(400).json({error: 'PossuiCarro é obrigatório'});
    else{
        let exists;
        if(req.params.id)
        exist = await RegisterModel.
        findOne({
            '_id': {'$ne': req.params.id}
        });
    }
    next();

}

module.exports = RegisterValidation;