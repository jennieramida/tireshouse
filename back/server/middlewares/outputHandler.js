module.exports = (output) => {//send array
  const status = 200;
  const handlingOutput = {"status":status, "data":output}
  return handlingOutput;
}