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

var insertNode = function(item, tree)
{
    if(item.pid == tree.id)
    {
        var newtree = {
            id : item.id,
            name : item.name,
            children : []
        };
        tree.children.push(newtree);
        return;
    }else{
        // console.log(tree.children);
        tree.children.forEach(function (chil){
            insertNode(item, chil);
        })
    }
}

var list2tree = function(targetList)
{
    let that = this;
    targetList.forEach(item => {

        if (item.pid == null) {
            treenode = {
                id : item.id,
                name : item.name,
                children: []
            }
        } else {
            insertNode(item, that.treenode);
        }
    });
}

list2tree(args);
console.log(treenode);