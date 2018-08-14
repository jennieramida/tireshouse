const Zone = require('../models/ZoneControl');

exports.getZone = (req, res, next) => {
  Zone.getZone()
  .then(getOutput =>{
    res.json(getOutput);
  })
  .catch(next);
}

exports.insertZone = (req, res, next) => {
  const nameZone = req.body.zoneName;
  const latitudeZone = req.body.latitude;
  const logitudeZone = req.body.longitude;
  console.log(req.body)
  Zone.insertZone(nameZone, latitudeZone, logitudeZone)
  .then(insertOutput => {
    res.json("end");
  })
  .catch(next);
}

exports.updateZone = (req, res, next) => {
  const nameZone = req.body.zoneName;
  const latitudeZone = req.body.latitude;
  const logitudeZone = req.body.longitude;
  const idZone = req.body.id;
  Zone.updateZone(nameZone, latitudeZone, logitudeZone, idZone)
  .then(updateOutput => {
    res.json(updateOutput);
  })
}

exports.deleteZone = (req, res, next) => {
  const idZone = req.body.id;
  Zone.deleteZone(idZone)
  .then(deleteOutput => {
    res.json(deleteOutput);
  })
}

exports.getJobByZone = (req, res, next) => {

}
