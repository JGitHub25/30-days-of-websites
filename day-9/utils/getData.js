export async function getData(url) {
  try {
    const { data } = await axios.get(url);
    console.log("Products gotten!");
    return data;
  } catch (error) {
    console.log(error);
  }
}
