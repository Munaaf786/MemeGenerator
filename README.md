In this project, I've built a **Meme Generator** app by applying the concepts I have learned till now.

### Output is as per the below image:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/meme-generator-output.gif" alt="meme-generator" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/meme-generator-sm-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/meme-generator-lg-output-v0.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality added</summary>
<br/>

The app has the following functionalities

- Initially, values in the inputs elements are empty and the selected value in the select element is the first item in the given fontSizesOptionsList
- When non-empty values are provided for **Image Url**, **Top Text**, **Bottom Text**, and **Font Size** and the **Generate** button is clicked
  - The Image URL that has been provided is applied as a background-image for the generated meme
  - The given Top and Bottom text values are at the top and bottom of the generated meme
  - The selected font size value is applied for both top and bottom text of the generated meme

</details>

<details>

<summary>Implementation Files</summary>
<br/>

Used these files to complete the implementation:

- `src/App.js`
- `src/components/MemeGenerator/index.js`
- `src/components/MemeGenerator/styledComponents.js`

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions were required for the tests to pass**

- The HTML container element for the generated meme should have `data-testid` attribute value as **meme**
- When Styled Components are used, `data-testid` attribute should be used instead of `testid` attribute

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/nature-img.png](https://assets.ccbp.in/frontend/react-js/nature-img.png)

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #35469c; width: 150px; padding: 10px; color: black">Hex: #35469c</div>
<div style="background-color: #7e858e; width: 150px; padding: 10px; color: black">Hex: #7e858e</div>
<div style="background-color: #5a7184; width: 150px; padding: 10px; color: black">Hex: #5a7184</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #d7dfe9; width: 150px; padding: 10px; color: black">Hex: #d7dfe9</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: black">Hex: #1e293b</div>
<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: black">Hex: #0b69ff</div>

</details>

<details>
<summary>Font-families</summary>

- Open Sans

</details>

### Conclusion

Thanks for checking out my Meme Generator! This project showcases my skills in React and Styled Components, with features like dynamic meme creation, text customization, and responsive styling. Feel free to explore, fork, or contribute!

🔗 Check it out here: [https://memeBuilder.ccbp.tech/](https://memeBuilder.ccbp.tech)

Happy coding! 🎉
