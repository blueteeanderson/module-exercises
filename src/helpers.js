const choice = (items) => {
    const ind = Math.floor(Math.random()*items.length);
    return items[ind];
}

const remove = (items,item) => {
    return items.filter(i => {
        return i!==item
    })
}

export {choice,remove}