module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Board_tag', {
    board_tag_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    tag_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    board_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    }
  }, {
    sequelize,
      timestamps: false, 
      underscored: true, 
      freezeTableName: true,
      paranoid: true, //soft delete
      charset: 'utf8',
      collate: 'utf8_general_ci',
  })
  };