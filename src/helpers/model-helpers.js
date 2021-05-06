const collectivitesArray = (item) => {
  const collectivites = [];
  item.communes.forEach(c => collectivites.push(c.commune.nom));
  item.departements.forEach(d => collectivites.push(d.departement.nom));
  item.regions.forEach(r => collectivites.push(r.region.nom));
  item.epcis.forEach(e => collectivites.push(e.epci.nom));
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
