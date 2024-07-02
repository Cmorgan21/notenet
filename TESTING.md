# Table of Contents

1. [Frontend Testing](#frontend-testing)

   - [Code Validator Checks](#code-validator-checks)

     - [W3C HTML Validation Results](#w3c-html-validation-results)
     - [W3C CSS Validation Results](#w3c-css-validation-results)
     - [Jslint](#w3c-css-validation-results)

   - [Lighthouse Testing](#lighthouse-testing)
   - [Automated Testing](#automated-testing)
   - [Browser Compatibility](#browser-compatibility)

2. [Backend Testing](#backend-testing)
   - [Unit Testing](#unit-testing)
   - [Pylint](#pylint)
   - [Bugs](#bugs)

---

## Frontend Testing

### Code Validator Checks

#### W3C HTML Validation Results

All pages were tested with a HTML Validator to ensure all css content had no errors. Here are the results

Home
![HTML testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719951828/Screenshot_2024-07-02_211018_no4bsq.png)

Profile
![HTML testing Profile](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719951828/Screenshot_2024-07-02_211044_hh59l0.png)

Notes
![HTML testing Notes](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719951828/Screenshot_2024-07-02_210926_hdn3en.png)

Sign in
![HTML testing Sign in](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719951827/Screenshot_2024-07-02_211031_ggroxb.png)

Sign up![HTML testing Sign up](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719951828/Screenshot_2024-07-02_211004_szfnlx.png)

#### W3C CSS Validation Results

All pages were tested with a CSS Validator to ensure all css content had no errors. Here are the results

Home
![CSS testing home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719951828/Screenshot_2024-07-02_211134_xgke1i.png)

Profile
![CSS testing profile](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719951828/Screenshot_2024-07-02_211204_b4secb.png)

Notes
![CSS testing notes](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719951828/Screenshot_2024-07-02_211154_gitdc1.png)

Sign in
![CSS testing sign in](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719951828/Screenshot_2024-07-02_211216_ffyqqf.png)

Sign up
![CSS testing sign up](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719951828/Screenshot_2024-07-02_211230_lzykch.png)

### Jslint

All react pages were supported by using a Jslinter to ensure all code was high quality and no errors or formatting was incorrect

### Lighthouse Testing

Home

Desktop
![HTML testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719951828/Screenshot_2024-07-02_211018_no4bsq.png)

Mobile
![HTML testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719951828/Screenshot_2024-07-02_211018_no4bsq.png)

Profile

Desktop
![HTML testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719952956/Screenshot_2024-07-02_214054_irzio8.png)

Mobile
![HTML testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719952951/Screenshot_2024-07-02_214150_nfxyp6.png)

Notes

Desktop
![HTML testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719952957/Screenshot_2024-07-02_214028_ihyjt9.png)

Mobile
![HTML testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719952957/Screenshot_2024-07-02_214001_gnzcj2.png)

Sign in

Desktop
![HTML testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719952958/Screenshot_2024-07-02_213853_z6wamc.png)

Mobile
![HTML testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719952958/Screenshot_2024-07-02_213912_gc3gkf.png)

Sign up

Desktop
![HTML testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719953318/Screenshot_2024-07-02_214810_czq2c8.png)

Mobile
![HTML testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719953318/Screenshot_2024-07-02_214751_wxrtrs.png)

All lighthouse testing was tested over all pages and Desktop and Mobile
Overall scores were good especially with Desktop, however the scores were smaller when it came to mobile.

### Browser Compatibility

I used Chrome Developer Tools to ensure responsiveness on all devices and I also tested on all browsers for compatibility:

- Firefox Version
- Safari on macOS
- Chrome Version.

## Backend Testing

### Unit Testing

All pages were tested with Jest Unit testing using dummy data to see if all pages would come back with no errors and all content is passed, send and protected securely

Here are the results below

![Unit Test Results](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719952189/Screenshot_2024-06-25_203921_riumzp.png)

### Pylint

All Pages were structured and created using the guidance of Pylunt to ensure no errors or wrong code was made

### Bugs

#### Development Bugs

**Mapping Error**

- One complicated bug I had experienced throughout this project was an error 'TypeError .map is not a function'. This was an awkward error that would not disappear .
- This was rectified with some research and understanding this was due to the .map function not being able to iterate over an object. After understanding this. I used . notation to call into an array so the results of any notes that had been made could be iterated over

**Post Request Bug**

- Another Development bug I Experienced was uploading and updating the profile picture and sending the correct data for the post request to be sent.

- This was rectified by using POSTMAN to send data to the endpoint and receive what the endpoint was expecting. Ths could them be modified and corrected

#### Current Bugs

There are no current bugs to knowledge.
