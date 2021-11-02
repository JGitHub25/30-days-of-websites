const getData = async () => {
  try {
    const { data } = await axios.get(
      "https://restcountries.com/v3.1/alpha/col"
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();

const postData = async (payload) => {
  try {
    const response = await axios.post(
      "https://reqres.in/api/register",
      payload
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
// postData({ email: "eve.holt@reqres.in", password: "pistol" });
