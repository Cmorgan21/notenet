# Table of Contents

1. [Frontend Testing](#frontend-testing)
   - [Code Validator Checks](#code-validator-checks)
     - [W3C HTML Validation Results](#w3c-html-validation-results)
     - [W3C CSS Validation Results](#w3c-css-validation-results)
     - [Jslint](#jslint)
   - [Lighthouse Testing](#lighthouse-testing)
   - [Automated Testing](#automated-testing)
   - [Browser Compatibility](#browser-compatibility)
2. [Backend Testing](#backend-testing)
   - [Unit Testing](#unit-testing)
   - [Pylint](#pylint)
   - [Bugs](#bugs)
3. [Manual Testing](#manual-testing)

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
![Lighthouse testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719951828/Screenshot_2024-07-02_211018_no4bsq.png)

Mobile
![Lighthouse testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719951828/Screenshot_2024-07-02_211018_no4bsq.png)

Profile

Desktop
![Lighthouse testing Profile](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719952956/Screenshot_2024-07-02_214054_irzio8.png)

Mobile
![Lighthouse testing Profile](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719952951/Screenshot_2024-07-02_214150_nfxyp6.png)

Notes

Desktop
![Lighthouse testing Notes](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719952957/Screenshot_2024-07-02_214028_ihyjt9.png)

Mobile
![Lighthouse testing Notes](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719952957/Screenshot_2024-07-02_214001_gnzcj2.png)

Categories

Desktop
![Lighthouse testing Categories](https://res.cloudinary.com/dbjm35bjd/image/upload/v1750221042/Screenshot_2025-06-18_052619_rhlfrj.png)

Mobile
![Lighthouse testing Categories](https://res.cloudinary.com/dbjm35bjd/image/upload/v1750221039/Screenshot_2025-06-18_052908_ogl9in.png)

Sign in

Desktop
![Lighthouse testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719952958/Screenshot_2024-07-02_213853_z6wamc.png)

Mobile
![Lighthouse testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719952958/Screenshot_2024-07-02_213912_gc3gkf.png)

Sign up

Desktop
![Lighthouse testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719953318/Screenshot_2024-07-02_214810_czq2c8.png)

Mobile
![Lighthouse testing Home](https://res.cloudinary.com/dbjm35bjd/image/upload/v1719953318/Screenshot_2024-07-02_214751_wxrtrs.png)

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

## Test Cases Documentation

This document outlines the test cases for the **Notes**, **Profile**, and **Category** models in the application. Each test ensures that the core functionalities are working as expected.

### Test Case: `test_note_creation`

**Description:**  
Tests whether notes are created correctly with their attributes.

**Expected Result:**  
The **Note** model should store the correct title, body, author, and category.

```python
self.assertEqual(self.note1.title, 'Test Note 1')
self.assertEqual(self.note1.body, 'This is the body of test note 1.')
self.assertEqual(self.note1.author.username, 'testuser')
self.assertEqual(self.note1.category.name, 'Work')

self.assertEqual(self.note2.title, 'Test Note 2')
self.assertEqual(self.note2.category, None)
Test Case: test_note_str_method
Description:
Verifies the Note model's string representation.

Expected Result:
The string representation should match "Test Note 1 by testuser".

Copy
Edit
self.assertEqual(str(self.note1), 'Test Note 1 by testuser')
self.assertEqual(str(self.note2), 'Test Note 2 by testuser')
```

**Test Case: test_note_auto_fields**
Description:
Verifies that auto-generated fields like id, created_on, and updated_at are populated.

**Expected Result:**
The Note instance should have non-None values for id, created_on, and updated_at.

```python
python
Copy
Edit
self.assertIsNotNone(self.note1.id)
self.assertIsNotNone(self.note1.created_on)
self.assertIsNotNone(self.note1.updated_at)
self.assertIsNotNone(self.note2.id)
self.assertIsNotNone(self.note2.created_on)
self.assertIsNotNone(self.note2.updated_at)
```

## Profile Model Tests

### Test Case: test_profile_creation

**Description**:
Verifies that a Profile instance is created and reflects changes to the associated User.

**Expected Result**:
The Profile instance should reflect changes made to the User instance.

```python
Copy
Edit
self.assertTrue(Profile.objects.filter(user=self.user).exists())
profile = Profile.objects.get(user=self.user)
profile.name = self.user.username
profile.save()
self.assertEqual(profile.name, self.user.username)
self.assertEqual(profile.email, self.user.email)
Test Case: test_profile_update
Description:
Verifies that the Profile is updated when the User instance is updated.
```

**Expected Result**:
The Profile should update accordingly when the User is updated.

```python
Copy
Edit
self.user.username = 'updated_user'
self.user.email = 'updateduser@example.com'
self.user.save()

profile = Profile.objects.get(user=self.user)
profile.name = self.user.username
profile.email = self.user.email
profile.save()

self.assertEqual(profile.name, 'updated_user')
self.assertEqual(profile.email, 'updateduser@example.com')
```

## Category Model Tests

**Test Case**: test_list_categories_returns_only_user_owned
**Description**:
Verifies that a user can only see their own categories.

**Expected Result**:
The user should only see categories owned by them.

```python
Copy
Edit
response = self.client.get(reverse("category-list-create"))
self.assertEqual(response.status_code, status.HTTP_200_OK)
self.assertEqual(len(response.data), 1)
self.assertEqual(response.data[0]["name"], "Work")
Test Case: test_create_category_successfully
Description:
Verifies that a user can create a new category.
```

**Expected Result**:
The category should be successfully created and the count should increase by 1.

```python
Copy
Edit
data = {
"name": "New Category",
"description": "Test description",
"color": "#123456"
}
response = self.client.post(reverse("category-list-create"), data)
self.assertEqual(response.status_code, status.HTTP_201_CREATED)
self.assertEqual(Category.objects.filter(owner=self.user1).count(), 2)
```

**Test Case**: test_retrieve_category
**Description**:
Verifies that a user can retrieve their category.

**Expected Result**:
The correct category data should be returned.

```python
Copy
Edit
url = reverse("category-detail", args=[self.category1.id])
response = self.client.get(url)
self.assertEqual(response.status_code, status.HTTP_200_OK)
self.assertEqual(response.data["name"], "Work")
```

**Test Case:** test_update_category
**Description:**
Verifies that a user can update their category.

Expected Result:
The category should be successfully updated.

```python
Copy
Edit
url = reverse("category-detail", args=[self.category1.id])
data = {
"name": "Updated Name",
"description": "Updated description",
"color": "#654321"
}
response = self.client.put(url, data)
self.assertEqual(response.status_code, status.HTTP_200_OK)
self.category1.refresh_from_db()
self.assertEqual(self.category1.name, "Updated Name")
**Test Case:** test_delete_category
**Description:**
Verifies that a user can delete their category.
```

**Expected Result**:
The category should be deleted.

```python
Copy
Edit
url = reverse("category-detail", args=[self.category1.id])
response = self.client.delete(url)
self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
self.assertFalse(Category.objects.filter(id=self.category1.id).exists())
**Test Case:** test_unauthenticated_user_denied
**Description:**
Verifies that unauthenticated users cannot access the category endpoints.
```

**Expected Result**:
Unauthorized access should be denied.

```python
Copy
Edit
self.client.logout()
response = self.client.get(reverse("category-list-create"))
self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
```

## Manual Testing

### Test Case 1: Create a Note

**Description:**
Test the functionality of creating a note via the front-end form.

1. Navigate to the **Notes** page.
2. Click on the **Create Note** button.
3. Enter the following data in the form:
   - **Title**: "Test Note"
   - **Body**: "This is a test note."
   - **Category**: "Work"
4. Submit the form by clicking the **Save** button.
5. **Expected Result**:
   - The note should appear in the notes list.
   - The title "Test Note" should be displayed at the top of the notes list.
   - A **success message** should appear confirming the note was created.

---

### Test Case 2: Edit a Note

**Description:**
Test the functionality of editing an existing note.

1. Navigate to the **Notes** page.
2. Click on the **Edit** button for any note in the list.
3. Modify the **Body** of the note to: "Updated content for the test note."
4. Click the **Save** button.
5. **Expected Result**:
   - The note should be updated and show the new body content.
   - A **success message** should appear confirming the note was updated successfully.

---

### Test Case 3: Delete a Note

**Description:**
Test the functionality of deleting a note.

1. Navigate to the **Notes** page.
2. Click on the **Delete** button for a note.
3. Confirm the deletion when prompted.
4. **Expected Result**:
   - The note should be removed from the list of notes.
   - A **success message** should appear confirming the note was deleted.

---

### Test Case 4: Login and Logout

**Description:**
Test the user authentication flow (login and logout).

1. Navigate to the **Sign In** page.
2. Enter valid credentials (e.g., **username** and **password**).
3. Click the **Login** button.
4. **Expected Result**:
   - The user should be logged in and redirected to the main notes page.
   - The **Logout** button should be visible in the navigation bar.
5. Click on the **Logout** button.
6. **Expected Result**:
   - The user should be logged out and redirected to the sign-in page.

---

### Test Case 5: Profile Image Upload

**Description:**
Test the functionality of uploading a profile image.

1. Navigate to the **Profile** page.
2. Click on the **Change Profile Image** button.
3. Upload an image from your device.
4. Click **Save**.
5. **Expected Result**:
   - The uploaded image should appear as the user's profile image.
   - A **success message** should be shown confirming the image upload.

---

### Test Case 6: Validation Messages

**Description:**
Test the form validation when creating/editing a note.

1. Navigate to the **Create Note** or **Edit Note** form.
2. Leave the required fields (title and body) blank and try to submit.
3. **Expected Result**:
   - Appropriate validation error messages should be displayed, such as "Title is required" or "Body is required."
