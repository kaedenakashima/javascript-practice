const handlePersonChange = (event) => {
    const id = event.target.value;
    setPerson(id);
    onChange && onChange(id);
}
if (loading) return <p>Loading...</p>;
if (error) return <p>Error:(</p>;

const people = data.people;

return (
        <div classname={styles.buttons_container}>
            <form>
                <label html="another">
                    <div>Select from Historical Authors</div>
                    <select name="author" if="author" onChange={handlePersonChange} value={person}>
                        <option value="">Pick an author from this list</option>
                        {
                            people.map(({id, name}) => (<option value={id} key={id}>{name}</option>))
                        }
                    </select>
                </label>
            </form>
        </div>
)
