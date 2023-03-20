type mapCallBackFunc = (params: string) => string;

function aWeirdMap(params: string[], callBackFunc: mapCallBackFunc): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < params.length; i += 1) {
    newArray.push(callBackFunc(params[i]));
  }

  return newArray;
}

const anArray = ['a', 'b', 'c'];

const aNewArray = aWeirdMap(anArray, ((item) => item.toUpperCase()));

console.log(aNewArray);