const {app} = require('./app')
const config = require('config')

const port = config.get('App.port') || '3001'
/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port)