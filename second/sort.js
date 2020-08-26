/*
 * @Author: zhanglin
 * @Date: 2020-08-20 23:34:22
 * @LastEditTime: 2020-08-26 10:26:05
 * @LastEditors: zhanglin
 * @Description: 
 * @FilePath: /algorithm/second/sort.js
 * @Copyright 2020 OBKoro1
 */
function bubbleSort(arr){
  // 一次循环前后两个元素相比较 将最大的放到最后  一次下来就将最大的放到最后
  if(!arr || arr && arr.length<2) return arr
  for(let i = 0;i<arr.length-1;i++){
    for(let j = 0;j<arr.length-1-i;j++){
      if(arr[j] > arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}

function insertSort(arr){
  if(!arr || arr && arr.length<2) return arr
  let res = [arr[0]]
  for(let i = 1;i<arr.length;i++){
    // 从前往后比
    // for(let j=0;j<res.length;j++){
    //   if(arr[i]<=res[j]){
    //     res.splice(j,0,arr[i])
    //     break
    //   }
    //   if(j === res.length-1){
    //     res.push(arr[i])
    //     j++//? 为啥加一想一想哦
    //   }
    // }
    // 从后往前比
    for(let j=res.length - 1;j>=0;j--){
      if(arr[i]>res[j]){
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

  const mid = parseInt(arr.length/2)
  const midValue = arr[mid]

  const leftArr = []
  const rightArr = []
  for(let i = 0;i<arr.length;i++){
    if(i=== mid) continue
    if(arr[i] < midValue){
      leftArr.push(arr[i])
    }else{
      rightArr.push(arr[i])
    }
  }
  return [...quickSort(leftArr),midValue,...quickSort(rightArr)]

}