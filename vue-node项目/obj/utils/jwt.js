let jwt =require('jsonwebtoken');
module.exports={
    sign:({username,_id})=>jwt.sign({username,_id},'qihao',{expiresIn:60*60*24}),

    verify:token=> new Promise((resolve,reject)=>{
        jwt.verify(token,'qihao',(err,decode)=>{
            if(!err){
                resolve(decode)
            }else{
                reject(err.message) //message错误描述
            }
        })
    })
}
 