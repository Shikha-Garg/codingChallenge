var idNameParentIdDict = [];
idNameParentIdDict.push({id: 1, name : 'Tom', parentId : 5}, {id: 5, name : 'Fred', parentId: 11}, {id: 2, name : 'Augie', parentId: 5}, {id: 3, name : 'Riley', parentId: 6}, {id: 4, name : 'Jacob', parentId: 10}, {id: 6, name : 'Maggie', parentId: 5}, {id: 7, name : 'Allen', parentId: 6}, {id: 8, name : 'Betty', parentId: 9}, {id: 9, name : 'Katie', parentId: 12})
var numFolks = idNameParentIdDict.length;
for (let i = 0; i < numFolks; i++) {
    console.log("Ordered list of Ancestors of " + idNameParentIdDict[i].name + ":" + findAncestors(idNameParentIdDict[i].id))
    console.log("Siblings of " + idNameParentIdDict[i].name + ":" + findSiblings(idNameParentIdDict[i].id));
}

function findAncestors(id) {
    var me = idNameParentIdDict.find(x => x.id === id);
    if (me !== undefined) {
        var parent = idNameParentIdDict.find(x => x.id === me.parentId);
        if (parent !== undefined) {
            return parent.name + "," + findAncestors(me.parentId);
        } else {
            return ""
        }
    } else return [];
}

function findSiblings(id) {
    var me = idNameParentIdDict.find(x => x.id === id);
    var siblings = idNameParentIdDict.filter(x => x.parentId === me.parentId);
    var numSiblings = siblings.length
    var a = []
    for (let i = 0; i < numSiblings; i++) {
        if (siblings !== undefined && siblings[i].id !== me.id) {
            a.push(siblings[i].name)
        }
    }
    return a;
}