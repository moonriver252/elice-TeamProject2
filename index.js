const { app } = require('./src/app.js');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(PORT, '번 포트에서 대기중');
  });
