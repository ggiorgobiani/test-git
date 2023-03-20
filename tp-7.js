function countLetter(letter, string)
{
    let count = 0;

    for (let i=0; i < string.length; i++)
    {
        if (string.charat(i).toLowerCase() === letter.toLowerCase())
        {
            count++;
        }
    }

    return count;
}

