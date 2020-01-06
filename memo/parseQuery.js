/*
rules
"hello world" count as one word 

maches
=hello
=hello world

otion (:)
c: aaaa
option (:=)
c:= aaaa

Returns:
{
    keywords: [
        {value: 'keyword1'},
        {value: 'keyword2', exact: true},
    ]
    options: [
        {key: 'c', value: 'bank', exact: true},
    ]
}
*/

import _ from 'lodash';

const unquote = text => text.replace(/^"(.+)"$/, (m, p)=> p);

const parseQuery = (query, validOptions) => {
    const tokens = query
        .replace(/ /g, ' ')
        .replace(/".+?"/g, m=> m.replace(/ /g, ' '))
        .split(' ')
        .map(token => token.replace(/ /g, ' '));
    const items = tokens.map(token => {
        const option = _.find(validOptions, opt => token.startsWith(opt + ':'));
        const value = option ? token.substr(option.length + 1) : token;
        const exact = value.startsWith('=');
        return {
            option,
            value: unquote(exact ? value.substr(1):value),
            exact,
        };
    });
    return {
        keywords: items
            .filter(item => !item.option)
            .map(({value, exact})=> ({
                value,
                exact,
            })),
    };
};
export default parseQuery;
