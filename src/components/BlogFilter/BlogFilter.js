import React, {useState} from 'react';

const BlogFilter = ({postQuery, latest, setSearchParams, }) => {


  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    // setSearchParams({post: query});
    const isLatest = form.latest.checked;
    const params = {};

    if(query.length) params.post = query;
    if(isLatest) params.latest = true;

    setSearchParams(params)
  }




  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete={'off'}>
          <input type={'search'} name={'search'} value={search} onChange={e => setSearch(e.target.value)}/>
          <label style={{padding: '0 1rem'}}> New only
              <input type={'checkbox'} name={'latest'} checked={checked} onChange={e => setChecked(e.target.checked)}/> New only
          </label>
          <input type={'submit'} value={'Search'}/>
      </form>
    </div>
  )
}

export { BlogFilter }