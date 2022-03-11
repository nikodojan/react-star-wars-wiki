export function getPersonId(url){
  let id = url.split('people')[1].replaceAll('/', '');
  return id;
}

export function getMovieId(url){
  let id = url.split('films')[1].replaceAll('/', '');
  return id;
}