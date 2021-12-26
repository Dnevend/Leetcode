function QuickSort(arr: number[], begin: number, end: number)
{
    let left = begin;
    let right = end;
    let base = arr[begin];// 要进行对比的基准值
    while(left < right)
    {// 循环替换，直至Left与Right相遇

        while(left < right && base < arr[right])
        {// 寻找右侧比基准值小的索引
            right--;
        }

        while(left < right && base > arr[left])
        {// 寻找左侧比基准值大的索引
            left++;
        }

        if(arr[left] === arr[right] && left < right)
        {// 两侧索引对应的值相同时，Left或Right任意一侧移动一步
            left++;
        }
        else{// 将索引处的值进行交换
            let tmp = arr[left];
            arr[left] = arr[right];
            arr[right] = tmp;
        }

    }

    if(left - 1 > begin)
    {// 左侧快拍
        QuickSort(arr, begin, left - 1)
    }
    else if(right + 1 < end)
    {// 右侧快排
        QuickSort(arr, right + 1, end);
    }
}

// let arr = [];
// for(let i = 0; i < 100; i++)
// {
//     arr.push(Math.floor((Math.random()*100 + 1)))
// }

let arr = [2,3,1,8,5];

QuickSort(arr, 0, arr.length);

console.log(arr);