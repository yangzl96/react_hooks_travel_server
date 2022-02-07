module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const House = app.model.define('house', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: STRING(50),
    info: STRING(150),
    addres: STRING(200),
    price: INTEGER,
    cityCode: STRING,
    showCount: INTEGER,
    // 时间转化为  时间戳
    // 默认是 2020-08-10T05:37:57.000Z
    publishTime: {
      type: DATE,
      get() {
        return new Date(this.getDataValue('publishTime')).getTime()
      }
    },
    startTime: {
      type: DATE,
      get() {
        return new Date(this.getDataValue('startTime')).getTime()
      }
    },
    endTime: {
      type: DATE,
      get() {
        return new Date(this.getDataValue('endTime')).getTime()
      }
    }
  })
  // 一个房子对应多个图片，hasMany
  House.associate = () => {
    app.model.House.hasMany(app.model.Imgs, {
      foreignKey: 'houseId'
    })
  }
  return House
}