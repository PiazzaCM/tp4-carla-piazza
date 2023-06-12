const ctrl = {};


ctrl.postTp = (req, res)=>{
    res.send('post')
}
ctrl.putTp = (req, res)=>{
   res.send('put')
}
ctrl.deleteTp = (req, res)=>{
   res.send('delete')
}
ctrl.getTp = (req, res)=>{
   res.send('get')
}

module.exports = ctrl;

