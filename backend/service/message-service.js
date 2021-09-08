const wbm = require('wbm');

wbm.start();

module.exports.sendMessage = (data) => {
  const { name, phone, address, info } = data;
    const telephone = ['+996553680761'];
    const message = `Новый заказ:\nИмя: ${name}, \nТелефон: ${phone}, \nАдресс: ${address}, \nТовары: ${info}`;
  wbm.send(telephone, message).then(() => console.log('Success'));
}
