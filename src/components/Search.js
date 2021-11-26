import React, { useState } from "react";

function Search() {
    const [company, setCompany] = useState("");


    const submitValue = () => {
        const url = formUrl(company)
        console.log(url)
        postData(url, "GET")
        .then(data => {
            console.log(data)
        })
        
    }

    const formUrl = (id) => {
        const url = `http://fahrbecker.carerix.net/cgi-bin/WebObjects/fahrbeckerWeb.woa/wa/view?template=object.xml&entity=CREmployee&id=${id}`
        return url
    }

    async function postData(url = '', method = '') {

        const response = await fetch(url, {
            method: method,
            mode: 'cors',
            headers: {
                'x-cx-pwd': 'naVE4r4C'
            }})

            return response.json();

        }
    
  return (
    <div className="has-text-centered">
      <input
        class="input"
        type="text"
        placeholder="Zoek een bedrijf waarvoor je matches wilt vinden."
        onChange={e => setCompany(e.target.value)}
      />
      <button className="button mt-5" onClick={submitValue}>Zoek</button>
    </div>
  );
}

export default Search;
