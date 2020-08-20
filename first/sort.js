/*
 * @Author: zhanglin
 * @Date: 2020-08-19 09:23:32
 * @LastEditTime: 2020-08-20 11:36:40
 * @LastEditors: zhanglin
 * @Description: 
 * @FilePath: /algorithm/sort.js
 * @Copyright 2020 OBKoro1
 */
function bubbleSort (arr) {
  if (!arr || arr && arr.length < 2) return arr
  // 思想：让数组中的当前项与后一项比较 如果当前项比后一项大 则两个交换位置 大的靠后
  let temp = 0
  for (i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  // 此法优化
  // for(let i = 0;i<arr.length - 1;i++){
  //   for(let j = 0;j<arr.length - 1 -i;j++){
  //     if(arr[j] > arr[j+1]){
  //       temp = arr[j]
  //       arr[j] = arr[j+1]
  //       arr[j+1] = temp
  //     }
  //   }
  // }
}

function insertSort (arr) {
  //  
  if (!arr || arr && arr.length < 2) return arr
  let res = [arr[0]] // 放入第一个数
  for (let i = 1; i < arr.length; i++) { // 遍历原数组 得到每一个元素
    for (let j = res.length - 1; j >= 0; j--) { //遍历结果数组 得到每一个元素
      if (arr[i] > res[j]) { // 如果原数组中的元素大于结果元素 放在结果元素后面
        res.splice(j + 1, 0, arr[i])
        break
      }
      // 比到第0个 放到最前面
      if (j === 0) {
        res.unshift(arr[i])
      }
    }
  }
  return res
}

function quickSort (arr) {
  // 分治思想 拿到中间值以及序号 大于等于中间值 放在右边数组 小鱼中间值放在右边数组 而后递归左右数组
  if (!arr || arr && arr.length < 2) return arr
  let mid = parseInt(arr.length / 2)
  let leftArr = []
  let rightArr = []
  for (let i = 0; i < arr.length; i++) {
    if (i === mid) continue
    if (arr[i] >= arr[mid]) {
      rightArr.push(arr[i])
    } else {
      leftArr.push(arr[i])
    }
  }
  return [...quickSort(leftArr), arr[mid], ...quickSort(rightArr)]
}