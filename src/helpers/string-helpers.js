const humanizedInvestigationStatus = (string) => {
  if (string === "en_cours") {
    return "En cours"
  } else
  if (string === "termine") {
    return "Terminé"
  } else  
  if (string === "en_preparation") {
    return "En préparation"
  }
}

export default {
  humanizedInvestigationStatus
}
