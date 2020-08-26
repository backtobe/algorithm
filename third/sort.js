function bubbleSort(arr){
  if(!arr || arr && arr.length < 2) return
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1-i;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}

function insertSort(arr){
  if(!arr || arr && arr.length < 2) return
  let res = [arr[0]]
  for(let i=1;i<arr.length;i++){
    // for(let j = 0;j<res.length;j++){
    //   if(arr[i]<=res[j]){// 从前往后 前面的都是小的 找到新值小于当前
    //     res.splice(j,0,arr[i])
    //     break
    //   }
    //   if(j === res.length-1){
    //     res.push(arr[i])
    //     j++
    //   }
    // }
    for(let j = res.length -1;j>=0;j--){
      if(arr[i]>=res[j]){
        res.splice(j+1,0,arr[i])
        break
      }
      if(j===0){
        res.unshift(arr[i])
      }
    }
  }
  return res
}

function quickSort(arr){
  if(!arr || arr && arr.length < 2) return arr
  let mid = parseInt(arr.length / 2)
  let leftArr = []
  let rightArr = []
  for(let i = 0;i<arr.length;i++){
    if(i === mid) continue
    if(arr[i]>= arr[mid]){
      rightArr.push(arr[i])
    }else{
      leftArr.push(arr[i])
    }
  }
  return [...quickSort(leftArr),arr[mid],...quickSort(rightArr)]
}