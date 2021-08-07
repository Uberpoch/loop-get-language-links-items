const axios = require('axios');
exports.itemsCall = async(token, url) => {
    return await axios.get(url, {
        headers: { 
            'Authorization': `Bearer ${token}`,
            'User_Agent': `Nathan UF`
        }
    })
    .catch(error => {
        console.log(error);
    })
    .then(res => {
        return res.data;

    })
}

exports.langLinks = async(token, item) => {
  return await axios.get(`https://v2.api.uberflip.com/items/${item.id}/language-links?limit=100`, {
        headers: { 
            'Authorization': `Bearer ${token}`,
            'User_Agent': `Nathan UF`
        }
    })
    .catch(error => {
        console.log(error);
    })
    .then(res => {
        return res.data;

    })
}
