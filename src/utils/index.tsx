// GroupBy function will segregate the array into same type to key value passed

export const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);

// calculate Mean of array of numbers
export const calculateMean = (arr: Array<number>) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const value = (sum/ arr.length).toFixed(3);
    return value;
  };

//calculate Median of array of numbers
  export const calculateMedian = (arr: Array<number>) => {
    const { length } = arr;
    const sortedArray = arr.sort((a, b) => a - b);
    
    if (length % 2 === 0) {
      return (sortedArray[length / 2 - 1] + sortedArray[length / 2]) / 2;
    }
    
    return sortedArray[(length - 1) / 2];
  };

//calculate Mode of array of numbers
export const calculateMode = (arr: Array<number>) => {
  const mode:any = {};
  let max = 0, count = 0;

  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    
    if(mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }
    
    if(count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
   
  return max;
};