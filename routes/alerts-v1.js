const express = require('express')
const router = express.Router()

let alertsService = undefined

router.use((req, res, next) => {
  if (!alertsService) {
    res
      .status(500)
      .json({message: 'model not initialised'})
  }
  next()
})

router.post('/', async (req, res) => {
  if(!alertsService.verifyAlertModel(req.body)) {
    res.status(405).send("Invalid input")
    return
  }
  try {
    let alert = await alertsService.createAlert(req.body)
    res.json(alert)
  } catch (err) {
    res.status(405).send()
  }
})

router.get('/search', async (req, res) => {
  let { status } = req.query
  let alerts = await alertsService.findAlerts(status)
  res.status(200).send(alerts)
})

router.get('/:id/', async (req, res) => {
  let { id } = req.params
  if(!alertsService.isValidId(id)) {
    res.status(400).send()
    return
  }
  try {
    let alert = await alertsService.findById(id)
    res.status(200).send(alert)
  } catch(err) {
    res.status(404).json({
      "code": 0,
      "type": "not_found",
      "message": "Alert not found."
    })
  }
})

router.put('/:id', async (req, res) => {
  let { id } = req.params

  if(!alertsService.isValidId(id)) {
    res.status(400).send()
    return
  }
  if(!alertsService.verifyAlertModel(req.body)) {
    res.status(405).send("Invalid input")
    return
  }
  try {
    let alert = await alertsService.updateAlert(id, req.body)
    res.status(200).send(alert)
  } catch(err) {
    res.status(500).send()
  }
})

router.delete('/:id', async (req, res) => {
  let { id } = req.params

  if(!alertsService.isValidId(id)) {
    res.status(400).send()
    return
  }
  try {
    await alertsService.deleteAlert(id, req.body)
    res.status(200).send()
  } catch(err) {
    res.status(404).send()
  }
})

module.exports = (service) => {
  alertsService = service
  return router
}