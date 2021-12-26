(() => {
    const list = [
        {
            name: 'folder',
            id: 0,
            pid: null
        },
        {
            name: 'A',
            id: 1,
            pid: 0
        },
        {
            name: 'A-1',
            id: 2,
            pid: 1
        },
        {
            name: 'A-1-1',
            id: 3,
            pid: 2
        },
        {
            name: 'A-2',
            id: 4,
            pid: 1
        },
        {
            name: 'B',
            id: 5,
            pid: 0
        },
    ]

    function List2Tree(list) {
        const tree = []
        const cacheMap = {}

        list.forEach(item => {
            if (item.pid === null) {
                tree.push({
                    id: item.id,
                    name: item.name,
                    children: []
                })

                cacheMap[0] = tree[0].children
            } else {
                const data = {
                    id: item.id,
                    name: item.name,
                    children: []
                }

                cacheMap[item.pid].push(data)

                cacheMap[item.id] = data.children
            }
        })

        return tree
    }

    console.log(List2Tree(list))

    // /**
    //  * 排序
    //  * pid从小到大
    //  * @param list 
    //  */
    // function listSort(list) {
    //     list.sort((a, b) => {

    //     })
    // }
})()