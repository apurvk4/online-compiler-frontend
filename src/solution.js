const solution = async (language, code, input) => {
  let b = {
    language,
    code,
  };
  if (input) {
    b["input"] = input;
  }
  try {
    const response = await fetch(
      "https://online-compiler-backend11.herokuapp.com/code",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(b),
      }
    );
    return response.json();
  } catch (e) {
    return { result: e.message };
  }
};
export default solution;
