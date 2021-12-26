(() => {

    var args = [
        {
            name: "folder",
            id: 0,
            pid: null,
        },
        {
            name: "A",
            id: 1,
            pid: 0,
        },
        {
            name: "B-1",
            id: 6,
            pid: 5,
        },
        {
            name: "A-1",
            id: 2,
            pid: 1,
        },
        {
            name: "A-1-1",
            id: 3,
            pid: 2,
        },
        {
            name: "A-2",
            id: 4,
            pid: 1,
        },
        {
            name: "B",
            id: 5,
            pid: 0,
        },
    ];
    
    var treenode = [];
    var nodeList = [];
    var cacheMap = {};

    for (var i = 0; i < args.length; i++) {
        if (args[i].pid == null) {
            treenode.push({
                name: args[i].name,
                id: args[i].id,
                children: []
            })
            nodeList = treenode;
            cacheMap[0] = treenode[0].children;
        }
        else {
            var tmpList = nodeList;
            nodeList = [];

            tmpList.forEach(function(item){

                console.log('parent -->' + item.id);

                args.forEach(function(arg){

                    if(arg.pid == item.id)
                    {

                        console.log('child -->' + arg.id)

                        const data = {
                            name: arg.name,
                            id: arg.id,
                            children: []
                        }
                        cacheMap[arg.pid].push(data);
                        cacheMap[arg.id] = data.children;

                        nodeList.push(data);
                    }
                })
            })
            
        }
    }

    console.log(JSON.stringify(treenode));


})();