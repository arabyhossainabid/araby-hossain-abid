# EmailJS Setup Guide for Contact Form

This guide will help you configure EmailJS to receive contact form submissions directly to your email.

## Prerequisites

You already have:
- ✅ EmailJS account
- ✅ Service ID: `service_t1g1myr`
- ✅ Public Key: `ZzCef19tcZkULWCsB`

You need to:
- ❌ Create an email template
- ❌ Update the template ID in your code

---

## Step 1: Create Email Template

1. **Go to EmailJS Dashboard**
   - Visit: https://dashboard.emailjs.com/
   - Log in to your account

2. **Navigate to Email Templates**
   - Click on **"Email Templates"** in the left sidebar
   - Click **"Create New Template"** button

3. **Configure Template Settings**
   - **Template Name**: Give it a descriptive name like "Contact Form Submission"
   - **Template ID**: EmailJS will auto-generate this (e.g., `template_abc123`)

4. **Set Up Template Content**

   Copy and paste this template into the **Content** section:

   ```
   Subject: New Contact Form Submission from {{from_name}}

   ---

   You have received a new message from your portfolio contact form.

   FROM: {{from_name}}
   EMAIL: {{from_email}}
   SUBJECT: {{subject}}

   MESSAGE:
   {{message}}

   ---

   This message was sent from your portfolio contact form.
   Reply to: {{from_email}}
   ```

5. **Configure Email Settings**
   - **To Email**: Enter your email address (arabyhossainabid@gmail.com)
   - **From Name**: `{{from_name}}` (this will be replaced with the sender's name)
   - **Reply To**: `{{from_email}}` (so you can reply directly to the sender)
   - **Subject**: `New Contact: {{subject}}`

6. **Test the Template** (Optional but Recommended)
   - Click **"Test It"** button
   - Fill in sample values:
     - `from_name`: John Doe
     - `from_email`: john@example.com
     - `subject`: Test Message
     - `message`: This is a test message
   - Click **"Send Test Email"**
   - Check your inbox to verify the email format

7. **Save the Template**
   - Click **"Save"** button
   - **Copy the Template ID** (you'll need this in the next step)

---

## Step 2: Update Your Code

1. **Open the Contact Form Component**
   - File: `src/components/contact-page-ui/contact-me.tsx`

2. **Find Line 30** (around the `sendEmail` function)
   
   Look for:
   ```typescript
   "template_XXXXXXXXXX",  // Replace with your Template ID
   ```

3. **Replace with Your Template ID**
   
   Change it to your actual template ID from EmailJS:
   ```typescript
   "template_abc123",  // Your actual Template ID from EmailJS
   ```

4. **Save the File**

---

## Step 3: Verify Form Field Names

The form fields in your contact form are already correctly named to match the EmailJS template variables:

| Form Field | EmailJS Variable | Description |
|------------|------------------|-------------|
| `name` | `{{from_name}}` | Sender's name |
| `email` | `{{from_email}}` | Sender's email |
| `subject` | `{{subject}}` | Message subject |
| `message` | `{{message}}` | Message content |

**Note**: EmailJS automatically converts form field names to template variables:
- `name` → `{{from_name}}`
- `email` → `{{from_email}}`
- `subject` → `{{subject}}`
- `message` → `{{message}}`

---

## Step 4: Test the Contact Form

1. **Start Your Development Server** (if not already running)
   ```bash
   npm run dev
   ```

2. **Navigate to Contact Page**
   - Go to: http://localhost:3000/contact

3. **Fill Out the Form**
   - Name: Your Name
   - Email: your-email@example.com
   - Subject: Test Submission
   - Message: This is a test message from my contact form

4. **Submit the Form**
   - Click **"Send Message"** button
   - You should see: "Message sent successfully!"

5. **Check Your Email**
   - Check your inbox (arabyhossainabid@gmail.com)
   - You should receive an email with the form submission
   - Verify all fields are correctly displayed

---

## Troubleshooting

### "Oops! Something went wrong" Error

**Possible causes:**

1. **Incorrect Template ID**
   - Double-check the template ID in your code matches the one in EmailJS dashboard
   - Make sure there are no extra spaces or quotes

2. **Service Not Connected**
   - Go to EmailJS dashboard → Services
   - Verify your email service is connected and active

3. **Template Variables Mismatch**
   - Ensure template uses: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
   - Form fields must be named: `name`, `email`, `subject`, `message`

4. **Public Key Issues**
   - Verify public key in code: `ZzCef19tcZkULWCsB`
   - Check it matches in EmailJS dashboard → Account → API Keys

### Email Not Received

1. **Check Spam Folder**
   - EmailJS emails sometimes go to spam initially

2. **Verify "To Email" in Template**
   - Make sure your email address is correctly set in the template settings

3. **Check EmailJS Dashboard**
   - Go to History tab to see if email was sent successfully

### Form Not Submitting

1. **Check Browser Console**
   - Open Developer Tools (F12)
   - Look for error messages in Console tab

2. **Verify All Required Fields**
   - All form fields (name, email, subject, message) must be filled

---

## Quick Reference

### Your EmailJS Configuration

```typescript
Service ID:   service_t1g1myr
Template ID:  [YOUR_TEMPLATE_ID_HERE]
Public Key:   ZzCef19tcZkULWCsB
```

### Form Field Mapping

```
name    → {{from_name}}
email   → {{from_email}}
subject → {{subject}}
message → {{message}}
```

---

## Need Help?

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **EmailJS Support**: https://www.emailjs.com/support/
- **Dashboard**: https://dashboard.emailjs.com/

---

**That's it!** Once you update the template ID, your contact form will send emails directly to your inbox. 🎉
