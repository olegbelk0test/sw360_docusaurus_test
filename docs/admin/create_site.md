---
sidebar_position: 4
sidebar_label: Site Creation Wizard
---

# Site Creation Wizard

Site Creation Wizard is the back office section to create a new casino site and configure the existing one.

The Superadmin can open Site Creation Wizard under Create Site sub-menu item at the Admin Section:

![create_site](https://i.imgur.com/BHRkRSj.png)

Site Creation Wizard consists of 7 Tabs with different sections:

1. [General Settings](#general-settings) 
2. [Integrity Settings](#integrity-settings)
3. [Regulation Settings](#regulation-settings)
4. [SMS/Email Verification Settings](#smsemail-verification-settings)
5. [Documents Validation Settings](#documents-validation-settings)
6. [Games Management Settings](#games-management-settings)
7. [Providers Management Settings](#providers-management-settings)

## General Settings

This section consists of basic settings:

![general_site_settings](https://i.imgur.com/ILLNYT6.png)

| # | Field | Description |
|-|-|-|
| 1 | **Site Name** | Enter site name, unique value. |
| 2 | **Site Email** | Enter site email, from which the emails will be sent. |
| 3 | **Site Type** | Choose site platform type&mdash;to which the site is connected to. |
| 4 | **Integration Type** | Choose site integration type:<p>**GGIntegration**&mdash;for GGVegas provider</p><p>**Default**&mdash;for other providers.</p> |
| 5 | **Default Product** | Choose the default product for the site&mdash;sports or casino. |
| 6 | **Countries** | Choose countries with access to the site. |
| 7 | **Site Currency** | Enter site currency. |
| 8 | **Site Language** | Enter site language. |
| 9 | **Turnover Calculation** | Choose the method of the calculation of turning the bonus money into real money at the site:<p>**Bonus**&mdash;the calculation is only from the bonus money</p><p>**Real_to_first_bonus**&mdash;the calculation is from the real money and the first bonus</p><p>**Real_split**&mdash;the calculation is the proportion from the real and all bonuses money.</p> |
| 10 | **Time Zone** | Choose site time zone. |
| 11 | **Password Reset Secret** | Enter Password Reset Secret Phrase. |
| 12 | **Password Reset Expire** | Enter the interval of expiring password reset link, hours. |
| 13 | **Password Reset Link** | Enter the URL to reset the password. |
| 14 | **??? Show Residential Info Fields Checkbox** | Select this checkbox the Residential Address information is needed on the site for the players. |
| 15 | **Site Favicon** | Click **[+ Choose File]** to upload site favicon.<p>Click Recycle Bin to delete the favicon.</p> |
| 16 | **Site color (backoffice header)** | Open Color Picker and choose the site's header background:<p>![choose_header_gif](https://i.imgur.com/ZpsKiV6.gif).</p> |
| 17 | **Site Domains** | Click **[+ Add URL]** to enter site domains.<p>Click ??? to delete the URL</p>. |
| 18 | **Whitelist IPs** | Click **[+ Add IP]** to enter IPs with access to the site.<p>Click ??? to delete IP.</p> |
| 19 | **Reports Tab URL** | Enter Site Reports Tab URL. |
| 20 | **Discard Changes** | Click to discard entered changes. |
| 21 | **Save** | Click to apply and save changes. |

## Integrity Settings

This section consists of connection settings:

![integrity_site_settings](https://i.imgur.com/PHtOCo8.png)

| # | Field | Description |
|-|-|-|
| 1 | **CDN URL** | Enter Site Content Delivery Network URL. |
| 2 | **Graphyte radiobutton** | Make active if the site is using Graphyte library, and configure its connection settings:<p>**2.1. API Key**&mdash;enter Graphyte API key</p><p>**2.2. Brand Key**&mdash;enter Graphyte Brand key</p><p>**2.3. ??? Enable AI checkbox** select if AI is enabled for the site</p><p>**2.4. Layout Key**&mdash;enter Graphyte Layout key.</p> |
| 3 | **System Support** | Select support system (Zendesk by default) and configure its connection settings:<p>**3.1. Brand ID**&mdash;enter support system number</p><p>**3.2. Domain**&mdash;enter support system domain URL</p><p>**3.3. Token**&mdash;enter the token of the connection to the support system</p><p>**3.4. Support Email**&mdash;enter the email from which the emails from support will be sent.</p> |
| 4 | **Soprano radiobutton** | Make active if the site is using Soprano SMS Sending Platform, and configure its settings:<p>**4.1. Username**&mdash;enter Soprano username</p><p>**4.2. Password**&mdash;enter Soprano password.</p> |
| 5 | **SendGrid radiobutton** | Make active if the site is using SendGrid Email Sending Platform, and configure its settings:<p>**5.1. API Key**&mdash;enter the API key for the Sendgrid.</p> |
| 6 | **Discard Changes** | Click to discard entered changes. |
| 7 | **Save** | Click to apply and save changes. |

## Regulation Settings

This section consists of regulation settings:

![regulation_site_settings](https://i.imgur.com/4GqAX3P.png)

| # | Field | Description |
|-|-|-|
| 1 | **Reality Check Popup** | Enter the time in seconds when the reality check pop-up appears on the site. |
| 2 | **Number of Login Attempts** | Enter the limit of the player attempts to enter the wrong credentials (email/username/password) when logging on.<p>If the limit is reached&mdash;the player's account blocks automatically (goes to Inactive status).</p> |
| 3 | **Number of Password Recovery Attempts** | Enter the limit of the player attempts to click the "Forgot password" button and restore the password.<p>If the limit is reached&mdash;the player's account blocks automatically (goes to Inactive status).</p> |
| 4 | **Maximum Deposit Limit Amount** | Enter the maximum amount to operate with, supported by the site. |
| 5 | **??? Include Deposit Limits in "Pending/Processing" Statuses checkbox** | Select if include the deposits in "pending and/or processing" statuses in the **Maximum Deposit Limit Amount** option. |
| 6 | **??? Open Self-Excluded Accounts Automatically checkbox** | Select to open Accounts that were in *Self-Excluded* Status automatically after the exclusion period ends. |
| 7 | **Discard Changes** | Click to discard entered changes. |
| 8 | **Save** | Click to apply and save changes. |

## SMS/Email Verification Settings

This section consists of player verification settings:

![sms_email_site_settings](https://i.imgur.com/oPkyByz.png)

| # | Field | Description |
|-|-|-|
| 1 | **Verification Code Length** | Enter the length of the code which is sent to the player to confirm the registration process. |
| 2 | **Number of Code Entering Attempts** | Enter the maximum number of attempts for the player to enter the right code. |
| 3 | **Verification Code Expiration Timeout** | Enter the interval in seconds for the code to expire. |
| 4 | **Block Player Timeout** | Enter the interval in seconds to the player be Deactivated if not validates himself. |
| 5 | **Number of Sending SMS Code Attempts** | Enter the limit of attempts for the player to send himself the new code via email. |
| 6 | **Number of Sending Email Code Attempts** | Enter the limit of attempts for the player to send himself the new code via SMS. |
| 7 | **Discard Changes** | Click to discard entered changes. |
| 8 | **Save** | Click to apply and save changes. |

## Documents Validation Settings

This section consists of player uploaded documents settings:

![docs_site_settings](https://i.imgur.com/fhoXvQ4.png)

| # | Field | Description |
|-|-|-|
| 1 | **Age Proof** | Choose necessary documents to prove the player's Age from the [list](#documents-list). |
| 2 | **Identity Proof** | Choose necessary documents to prove the player's Identity from the [list](#documents-list). |
| 3 | **Address Proof** | Choose necessary documents to prove the player's Address from the [list](#documents-list). |
| 4 | **Source of Funds Proof** | Choose necessary documents to prove the player's Source of Funds from the [list](#documents-list). |
| 5 | **Face Proof** | Choose necessary documents to prove the player's Face from the [list](#documents-list). |
| 6 | **Validation Types to Approve Registration** | Choose necessary documents to approve the player's registration on the site. |
| 7 | **Deposit Limits** | Click **[+ Add Deposit Limit]** to enter the Deposit Limit and select the list if documents to approve each limit.<p>Click ??? to delete the limit.</p> |
| 8 | **Withdrawal Limits** | Click **[+ Add Withdrawal Limit]** to enter the Withdrawal Limits and select the list if documents to approve each limit.<p>Click ??? to delete the limit.</p> |
| 9 | **Discard Changes** | Click to discard entered changes. |
| 10 | **Save** | Click to apply and save changes. |

## Games Management Settings

This section consists of site games settings:

![games_site_settings](https://i.imgur.com/7xxTYJo.png)

There is the universal search bar at the top of the table&mdash;enter at least 2 symbols to begin the search.

| Column | Description |
|-|-|
| **???** | Checkboxes for mass selection&mdash;select different games to Activate/Deactivate them at once. |
| **Game Name** | The Game Name, as displayed on the site. |
| **External Desktop ID** | The Game External ID on desktop.<p>Hover on and click the icon to the right to copy the ID to the clipboard.</p> |
| **Mobile External ID** | The Game External ID on mobile.<p>Hover on and click the icon to the right to copy the ID to the clipboard.</p> |
| **Integration** | The Game Integration System. |
| **Game Provider** | The Game Provider. |
| **Bonus Money radiobutton** | Active/Inactive&mdash;shows if the game is eligible to play using the player's bonus money. |
| **Status** | The Game Status on the site&mdash;Active or Inactive. |
| **Coefficient** | The Game coefficient, used in the turnover calculation.<p>Click to change, then click ??? to the right to apply.</p> |
| **Hide from Search radiobutton** | Active/Inactive&mdash;shows if the game is hidden from the search results. For example, if the game is for testing. |
| **![player_edit_menu](https://i.imgur.com/HrALxrY.png)** | Click to open the context menu and Activate/Deactivate the game on the site. |

### Documents list

The list of the documents the player can upload to the site to validate his/her information:

* Address Card Number
* Annual Salary
* Birth Place
* Company Profit
* Credit Card
* Deposit Agreement
* Driving License Number
* Identification Card
* Identification Number
* Inheritance
* Local Address
* Other Documents
* Passport Number
* Photo
* Proof of Verification
* Residence Permit
* Residential Address
* Sale of Assets
* Savings
* Self Employed
* Source of Funds Proof
* Taxpayer Identification
* eWallet
* iGaming Contract.