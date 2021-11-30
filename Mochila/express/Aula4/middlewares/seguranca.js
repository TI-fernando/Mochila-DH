function seguranca (req,res,next) {
    console.log('Passando no middleware de segurança')
    if((1+2) === 2){
        next()
    }

    else {
        res.send('Você não esta autorizado...')
    }
}

module.exports = {
    seguranca
}