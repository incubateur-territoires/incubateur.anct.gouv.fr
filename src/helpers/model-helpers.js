const collectivitesArray = (item) => {
  const collectivites = [];
  item.communes.forEach(c => collectivites.push(c.communes_id.nom));
  item.departements.forEach(d => collectivites.push(d.departements_id.nom));
  item.regions.forEach(r => collectivites.push(r.regions_id.nom));
  item.epcis.forEach(e => collectivites.push(e.epcis_id.nom));
  return collectivites;
}

const collectivitesTypesArray = (item) => {
  const collectivitesTypes = [];
  if (item.communes.length > 0) { collectivitesTypes.push('communes') }
  if (item.departements.length > 0) { collectivitesTypes.push('departements') }
  if (item.regions.length > 0) { collectivitesTypes.push('regions') }
  if (item.epcis.length > 0) { collectivitesTypes.push('epcis') }
  return collectivitesTypes;
}

export {
  collectivitesArray,
  collectivitesTypesArray
}
