const RemoveTask = (e, fncState) => 
{
    const indexDeleted = parseInt(e.currentTarget.getAttribute('value'));

    fncState(oldState => {
        return oldState.filter((item, i) => 
        {
            if(indexDeleted!==i) 
                return item;
        })                
    })
}
export default RemoveTask;