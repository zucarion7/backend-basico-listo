const {request,response}=require('express');

const usuariosGet=(req=request, res=response)=> {
    
    const query=req.query;
    
    
    res.json({
        msg:'get zuca7 - controlador',
        query
    });
}

const usuariosPost=(req, res=response)=> {
    const {nombre,edad}=req.body;
    
    res.status(201).json({
        msg:'post zuca7 - controlador',
        nombre,
        edad
    })
};

const usuariosPut=(req, res=response)=> {
    const id=req.params.id;
    
    res.json({
        msg:'put zuca7 - controlador',
        id
    })
};

const usuariosDelete=(req, res=response)=> {
    res.json({
        msg:'Delete zuca7 - controlador'
    })
};

const usuariosPatch=(req, res=response)=> {
    res.json({
        msg:'patch zuca7 - controlador'
    })
};




module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}