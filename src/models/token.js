const config = require('./../../config').httpSetting;

module.exports = (sequelize, DataTypes) =>
    sequelize.define('token', {
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true, unique: true },
        valid: {
            type: new DataTypes.VIRTUAL(DataTypes.BOOLEAN, ['createdAt']),
            get: function() {
                return this.get('createdAt') > Date.now() - config.cookieExpires;
            }
        }
        // user: {
        //     type: DataTypes.INTEGER,
        //     reference: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // }
    }, {
        indexes: [
            {
                method: 'HASH',
                fields: ['id']
            }
        ]
    });
