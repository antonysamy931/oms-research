const Promise = require('bluebird');

module.exports = {
    Insert : function(type){
        return new Promise(function(resolve, reject){
            type.save(function(err, type){
                if(err){
                    reject(err);
                }else{
                    resolve(type);
                }            
            })
        }); 
    },
    FindAll: function(type, query){
        return new Promise(function(resolve, reject){
            type.
            find(query).
            exec(function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            });
        });
    },
    FindOne: function(type, query){
        return new Promise(function(resolve, reject){                
            type.
            findOne(query).
            exec(function(error, result){
                if(error){                    
                    reject(error);
                }else{                                                          
                    resolve(result);
                }
            });
        });
    },
    UpdateOne: function(type, query, setvalue){
        return new Promise(function(resolve, reject){
            type.
            findOneAndUpdate(query, {$set: setvalue}, (error, result) => {
                if(error){
                    reject(error);                    
                }else{
                    resolve(result);
                }
            });
        });
    },
    DeleteOne: function(type, query){
        return new Promise(function(resolve, reject){
            type.
            deleteOne(query,(error, result)=>{
                if(error){
                    reject(error);                    
                }else{
                    resolve(result);
                }
            });
        });
    }
}