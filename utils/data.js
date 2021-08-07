exports.sortItems = async(array) => {
  const result = await array.map(item => {
    let obj = {
      id: item.id,
      title: item.title,
    };
    return obj;
  })
  return result;
};