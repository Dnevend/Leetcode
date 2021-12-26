(() => {

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
        },
        {
            id: 5,
            text: "节点 2",
            children: []
        }
    ];

    var tranList = [];

    function tree2List(tree) {

        if (typeof tree === "undefined") { return; }

        let _pid = tree.id;

        for (let c of tree.children) {
            tranList.push({
                pid: _pid,
                id: c.id,
                text: c.text
            });

            tree2List(c);
        }
    }

    for(let r of tree)
    {
        tranList.push({
            pid: null,
            id: r.id,
            text: r.text
        });

        tree2List(r);
    }

    console.log(tranList);

})()