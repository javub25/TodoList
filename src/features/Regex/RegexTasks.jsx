const RegexTasks = (task) => 
{
   /*RegExp is used to
   validate a string that consists of one or more words separated by
   spaces.*/
    const expr = new RegExp(/^[A-Za-z]+(\s[A-Za-z]+)*$/, 'g')
    return expr.test(task);
}

export default RegexTasks;
