const solution = async (language, code, input) => {
  try {
    const response = await fetch(process.env.REACT_APP_FETCHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language,
        code,
        input,
      }),
    });
    return response.json();
  } catch (e) {
    return { result: e.message };
  }
};
export default solution;
