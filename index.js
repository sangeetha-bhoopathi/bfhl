const express = require("express");
const app = express();

app.use(express.json());


app.get("/Bajaj", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});


app.post("/Bajaj", (req, res) => {
  try {
    const data = req.body.data || [];
    const userId = "sangeetha-bhoopathi";  
    const email = "sangeetha.b2021@vitstudent.ac.in.";
    const rollNumber = "21BBS0272";

    const numbers = data.filter(item => !isNaN(item)); 
    const alphabets = data.filter(item => isNaN(item)); 

    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length ? [Math.max(...lowercaseAlphabets)] : [];

    const response = {
      is_success: true,
      user_id: userId,
      email: email,
      roll_number: rollNumber,
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ is_success: false, error: error.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
