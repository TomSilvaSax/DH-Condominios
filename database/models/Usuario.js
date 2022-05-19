module.exports = (sequelize, dataType)=> {

    const Usuario = sequelize.define('Usuario', {
        id_usuario:{
            type:DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        email: {
         type: DataType.STRING,
         allowNll:true
        },
        senha:DataType.STRING,
    },{
        
        tableName:'usuario',
        timestamps:false

    });
    return Usuario
}