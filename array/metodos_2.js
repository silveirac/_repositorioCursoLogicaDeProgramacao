const num = [1, 2, 3, 4, 5, 6, 8];
console.log(typeof num);
console.log(num);

//METODO [splice] - remove elementos específicos do  array através de um índice de partida e a quantidade de números a serem deletados
//Se não definido número de elementos a serem excluidos, todos os ítens a partir do índice indicado (incluindo ele mesmo) serão deletados
console.log(num.splice(0, 2));
console.log(num);

//METODO [pop] - remove o ÚLTIMO elemento do array
console.log(num.pop()); //se colocado como parâmetrod e um comando console.log() retorna o número que foi excluido.
console.log(num);