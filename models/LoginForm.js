"use strict";

// Create schema
app.schema.LoginForm = new SimpleSchema({
  email: {
    type: String,
    label: "Email",
    regEx: SimpleSchema.RegEx.Email
  },
  password: {
    type: String,
    label: "Password",
    max: 200
  }
});