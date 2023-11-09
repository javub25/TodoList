const getDate = () => 
{
    const date = new Date();
    const dateAdded = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
    }
    
    return dateAdded
}

export default getDate;