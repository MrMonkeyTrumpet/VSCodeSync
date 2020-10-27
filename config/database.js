module.exports = {
    ramsPool: {
      /*user: process.env.RAMS_USER,
      password: process.env.RAMS_PASSWORD,
      connectString: process.env.RAMS_CONNECTIONSTRING,*/
      user: process.env.RAMS_USER || 'rams_api_owner',
      password: process.env.RAMS_PASSWORD || 'rams_api_owner',
      connectString: process.env.RAMS_CONNECTIONSTRING || '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=Monkey-Laptop)(PORT=1522))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=MONKEY12)))',      
      poolMin: 10,
      poolMax: 10,
      poolIncrement: 0,
      poolAlias: 'RAMS'
    }
  };