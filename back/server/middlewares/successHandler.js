module.exports = (key) => {//send array
  const handlingOutput = {}
  const status =200 
  handlingOutput["status"] = (status)
  if(key ==="delete"){
    handlingOutput["messege"] = "Delete Successful"
  } else if(key === "insert") {
    handlingOutput["messege"] = "Insert Successful"
  } else if(key === "update") {
    handlingOutput["messege"] = "update Successful"
  } else {
    handlingOutput["messege"] = key+" Successful"
  } 
  return handlingOutput;
}