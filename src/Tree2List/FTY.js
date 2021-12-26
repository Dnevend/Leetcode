(()=>{
    const tree = [
        {
            id: 1,
            text: '节点 1',
            children: [
                {
                    id: 2,
                    text: '节点 1_1',
                    children: []
                },
                {
                    id: 3,
                    text: '节点 1_2',
                    children: [
                        {
                            id: 4,
                            text: '节点 1_2_1',
                            children: []
                        }
                    ]
                }
            ]
        }
    ];

    function Tree2List(tree)
    {
        let queue = [];
        let res = [];

        tree.forEach(element => {
            queue.push([element, null]);
        });

        while(queue.length > 0)
        {
            let [item, pid] = queue.shift();
            res.push({
                pid: pid,
                id: item.id,
                text: item.text
            })
            
            if(typeof item.children !== "undefined")
            {
                item.children.forEach(element => {
                    queue.push([element, element.id]);
                });
            }

        }

        return res;
    }

    console.log(Tree2List(tree));
})()