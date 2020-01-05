import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import DataTable from '../../components/DataTable';
import QueryField from '../../components/QueryField';
import NoteDialog from '../../components/NoteDialog';
import matchesTerm from '../../util/matchesTerm';
import parseQuery from '../../util/parseQuery';
import schema from './schema';
import docsData from '../../data/docs.json';
import NoteContent from './NoteContent';

let data = docsData.records;

const styles = theme => ({
    container: {
        padding: theme.spacing.unit * 4,
    },
    searchField: {
        width: '100%',
        margin: theme.spacing.unit,
    },
});

const filterByKeywords = keywords => record => 
    keywords.every(
        ({ value, exact }) => 
            matchesTerm(value, record.ja, exact) || 
            matchesTerm(value, record.en, exact),
    );

const filterByOptions = options => record => 
        options.every(({key, value, exact }) => {
            switch(key){
                case 'j':
                    return matchesTerm(value, record.ja, exact);
                case 'e':
                    return matchesTerm(value, record.en, exact);
                default:
                    return false;
            }
        });

const JobTitle = ({ classes }) => {
    const [query, setQuery] = useState('');
    const [noteOpen, setNoteOpen] = useState(false);

    const { keywords, options } = parseQuery(query, ['j', 'e']);
    let rows = data
        .filter(filterByKeywords(keywords))
        .filter(filterByOptions(options));

    return (
        <div className={classes.container}>
            <NoteDialog open={noteOpen} setOpen={setNoteOpen}>
                <NoteContent />
            </NoteDialog>
            <QueryField query={query} setQuery={setQuery} />
            <DataTable schema={schema} rows={rows} />
        </div>
    );
};

export default withStyles(styles)(JobTitle);
