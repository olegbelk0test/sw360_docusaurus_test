---
sidebar_position: 2
---

# Welcome Screen & 2FA

## Welcome Screen

The Backoffice site is located under the [url](paste_url_here).

You will see the Welcome Screen on open:

![welcome_screen](https://i.imgur.com/eO3MBQO.png)

| # | Field | Description |
|-|-|-|
| 1 | **Email** | Enter the email linked to the backoffice account. |
| 2 | **Password** | Enter your password to the backoffice. |
| 3 | **☑ Remember Me** | Select this checkbox if you want the system to remember your login credentials (email and password). |
| 4 | **Forgot Your Password?** | Click this link if you forgot your password. Follow [these steps](#password-recovery) to get a new one. |
| 5 | **Login Button** | Click to log in to the backoffice.<p>*The system will ask you to set up [the Two-Factor Authentication](#two-factor-authentication-first-login) if the backoffice requires it.</p> |
| 6 | **Signup** | Click this link to [create a new account](#create-an-account). |

:::note
You will see an error if you incorrectly fill in the fields or enter the wrong credentials:

![error_login](https://i.imgur.com/T9JQR12.png)
:::

After clicking Login Button, if the backoffice requires it, the system asks you to enter the code from the Google Authenticator App on your mobile device:

![2fa_login](https://i.imgur.com/kI7FIwx.png)

Open the app, enter the code and click **[Submit]** to complete the login process.

:::note
If you having troubles with the authenticator &mdash; click **No access to the authenticator?** link and send the request to reset 2FA to the admin:

![reset_2fa_request](https://i.imgur.com/qPNlfNF.png)
:::

You will see the **Players Tab** after the successful login:

![players_tab](https://i.imgur.com/73zXVUv.png)

## Password Recovery

Click the **"Forgot Your Password?"** link to open the Password Recovery window:

![pass_recovery](https://i.imgur.com/KcgNPCC.png)

Enter the email linked to your backoffice account and click the **[Send Password]** button to reset the password. Then check the entered email and log in with the new password.

## Create an Account

Click the **"Sign in"** link to open the Create an Account window:

![acc_create](https://i.imgur.com/LgItXDX.png)

| # | Field | Description |
|-|-|-|
| 1 | **Name** | Enter your name for the backoffice. |
| 2 | **Email** | Enter your email. |
| 3 | **Password** | Create your password. The password must be at least 8 symbols, with uppercase/innercase letters, and at least one number. |
| 4 | **Retype Password** | Enter the password again. |
| 5 | **☑ Terms & Conditions** | Select this checkbox if you agree to the Backoffice [Terms & Conditions](link). |
| 6 | **Signup Button** | Click to finish the registration process and create the account. |
| 7 | **Sign In** | Click this link to [log in](#welcome-screen) with existed credentials. |

:::note
You will see an error if you incorrectly fill in the fields or enter the wrong credentials:

![error_signin](https://i.imgur.com/nhdUGL8.png)
:::

### Two-Factor Authentication. First Login

If you log in the first time and the backoffice requires it, after entering the login credentials the system asks you to complete the Two-Factor Authentication (2FA):

![2fa](https://i.imgur.com/2nbX5Ci.png)

To do so, follow these steps:

1. Install Google Authenticator App via [Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=ru&gl=US) or [AppStore](https://apps.apple.com/us/app/google-authenticator/id388497605) on your mobile device
2. Open Google Authenticator App and scan the QR-code
3. You will see the code in the Authenticator App. Enter it in the corresponded field and click **[Submit]**.

### Two-Factor Authentication. Enabling for all users

To enable 2FA for all site users &mdash; open *Security Settings Sub-Menu* under *Admin Tab* and switch the corresponding radiobutton:

![2fa_for_all](https://i.imgur.com/rx3wiDz.png)