---
sidebar_position: 2
sidebar_label: Site Settings
---

# Site Settings

Site Settings is the back office section to configure the casino site.

The admin can manage Site Settings under Settings sub-menu item at the Site Section:

![site_settings](https://i.imgur.com/vUqjke6.png)

Site Settings consists of 7 Tabs with different sections:

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

![games_site_settings](https://i.imgur.com/7DbqCAE.png)

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
| **Jp Contribution Percent** | The percent to the jackpot from the winnings, if applicable.<p>Click to change, then click ??? to the right to apply.</p> |
| **Local JP Contribution Percent** | The The percent to the local jackpot from the winnings, if applicable.<p>Click to change, then click ??? to the right to apply.</p> |
| **Global JP Contribution Percent** | The percent to the global jackpot from the winnings, if applicable.<p>Click to change, then click ??? to the right to apply.</p> |
| **Hide from Search radiobutton** | Active/Inactive&mdash;shows if the game is hidden from the search results. For example, if the game is for testing. |
| **![player_edit_menu](https://i.imgur.com/HrALxrY.png)** | Click to open the context menu and Activate/Deactivate the game on the site. |

## Providers Management Settings

This section consists of game and payment providers settings:

![providers_site_settings](https://i.imgur.com/CElytoB.png)

Click **[+ Add Game Provider]** (1) to link Game Provider to the site from the list of available Game Providers.
You will see additional information such as *Type*, *Number of games*, and *Blocked countries* while selecting the provider:

![choose_game_provider.gif](https://i.imgur.com/l9g6Hun.gif)

Click ??? to delete the provider. You need to confirm the action at the Confirmation Popup.

Hover on and click on the game provider name to open the provider settings. The list of these settings is taken from the server side and is different for each game provider:

![game_provider_opt.gif](https://i.imgur.com/beXgzcs.gif)

Click **[+ Add Payment Provider]** (2) to link Payment Provider to the site from the list of available Game Providers.
You will see additional information such as *Integration system*, supported *Operation types*, and *Method Type* while selecting the provider:

![choose_payment_provider.gif](https://i.imgur.com/q94UNgQ.gif)

Click ??? to delete the provider.

### Payment Provider Settings

Hover on and click on the payment provider name to open the payment provider settings:

![payment_prov_settings](https://i.imgur.com/nzmheqs.png)

| # | Field | Description |
|-|-|-|
| 1 | **Expire Time** | The time in seconds after which the payments in the *Processing* status will be moved to the *Error* status. |
| 2 | **Status** | The payment provider status:<p>*All*&mdash;the payment provider is available both for the test and real players</p><p>*Normal*&mdash;the payment provider is available only for the real players</p><p>*Suspended*&mdash;the payment provider is not available for the site</p><p>*Test*&mdash;the payment provider is available only for the test players.</p> |
| 3 | **Deposit Settings** | The deposit settings for the selected payment provider:<p>3.1 Min limit&mdash;the minimum limit the player can deposit</p><p>3.2 Max limit&mdash;the maximum limit the player can deposit</p><p>3.3 Deposit Tax Type&mdash;*fixed* or *percent*, what kind of tax is used at the selected payment provider</p><p>3.4 Deposit Tax&mdash;the tax amount (or percent from the deposit)</p><p>3.5 Deposit Fee Type&mdash;*fixed* or *percent*, what kind of fee is used at the selected payment provider</p><p>3.6 Deposit Fee&mdash;the fee amount (or percent from the deposit)</p><p>3.7 Deposit Fee Strategy&mdash;*added* or *included*, is the fee added to the payment or included in the payment</p><p>3.8 Site Deposit Amounts Buttons&mdash;select how many buttons and with what value to display in the Site Deposit Popup.</p> |
| 4 | **Withdraw Settings** | The withdraw settings for the selected payment provider.<p>These setting are the same as Deposit Settings.</p> |
| 5 | **Additional Settings** | <p>5.1 Currency&mdash;the payment prodiver currency</p><p>5.2 Player ID Field&mdash;*CNP* or *Phone Number*, by what field the player is identified, only for the TopPay provider</p><p>5.3 Display Currency&mdash;the displayed at the site currency</p><p>5.4 Amount Multiply Of&mdash;the deposit amount must be a multiple of this number</p><p>5.5 Campaign ID&mdash;campaign ID that will be triggered for all the payment transactions.</p> |
| 6 | **Activation Conditions** | The conditions to activate the provider to the players, only for the Kiparis payment provider.<p>Click [+ Add Condition] to add conditions from the [predefined conditions](#predefined-conditions). Choose the section and different options or enter values for the selected conditions:</p><p>![add_conditions_gif](https://i.imgur.com/Vw2POfF.gif)</p><p>To delete the condition&mdash;press [x] near the needed row.</p> |
| 7 | **Discard Changes** | Click to discard entered changes. |
| 8 | **Save** | Click to apply and save changes. |

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

### Predefined Conditions

The list of the Conditions to apply to the Players:

| Group | Condition | Description |
|-|-|-|
| **Deposits** |  |  |
|  | Deposit count for period | The number of the player deposits, for the period. |
|  | Deposit amount for period | The sum of the player deposits, for the period. |
|  | Total deposit count | The total number of the player deposits. |
|  | Total deposit amount | The total sum of the player deposits. |
|  | Days after last deposit | How many days have passed since the player last deposit (Calculated daily). |
| **Withdrawals** |  |  |
|  | Withdrawal count for period | The number of the player withdrawals, for the period. |
|  | Withdrawal amount for period | The sum of the player withdrawals, for the period. |
|  | Total withdrawal count | The total number of the player withdrawals. |
|  | Total withdrawal amount | The total sum of the player withdrawals. |
| **Games** |  |  |
|  | Bet count for period | The number of the player bets, for the period. |
|  | Bet amount for period | The sum of the player bets, for the period. |
|  | Bet amount (cash) for period | The sum of the player cash bets, for the period. |
|  | Bet amount (bonus) for period | The sum of the player bonus bets, for the period. |
|  | Win count for period | The number of player winnings (win amount greater than zero), for the period. |
|  | Win amount for period | The sum of the player winnings, for the period. |
|  | Win amount (cash) for period | The sum of the player cash winnings, for the period. |
|  | Win amount (bonus) for period | The sum of the player bonus winnings, for the period. |
|  | Total bet count | The number of the player bets. |
|  | Total Bet amount | The total sum of the player bets. |
|  | Total Bet amount (cash) | The total sum of the player cash bets. |
|  | Total Bet amount (bonus) | The total sum of the player bonus bets. |
|  | Total win count | The number of the player winnings (win amount greater than zero). |
|  | Total Win amount | The sum of the player winnings. |
|  | Total Win amount (cash) | The sum of the player cash winnings. |
|  | Total Win amount (bonus) | The sum of the player bonus winnings. |
|  | Loss amount for period | The difference between the player bet and win amounts, for the period. (Always greater or equals than zero). |
|  | Loss amount for period (cash) | The difference between the player cash bet and win amounts, for the period. (Always greater or equals than zero). |
|  | Loss amount for period (bonus) | The difference between the player bonus bet and win amounts, for the period. (Always greater or equals than zero). |
|  | Total loss amount | The total difference between the player bet and win amounts. (Always greater or equals than zero). |
|  | Total loss amount (cash) | The total difference between the player cash bet and win amounts. (Always greater or equals than zero). |
|  | Total loss amount (bonus) | The total difference between the player bonus bet and win amounts. (Always greater or equals than zero). |
|  | Rounds count for period | The number of the player finished rounds, for the period. |
|  | Total rounds count | The total number of the player finished rounds. |
| **Attributes** |  | The list of the [site's attributes](/docs/site/attributes) |
| **Player** |  |  |
|  | Number of days till birthday | How many days left till the player birthday. (This field is calculated every day). |
|  | Number of days passed after login | How many days have passed since the player last login. (This field is calculated every day). |
|  | Is email verified | Is the player email verified. |
|  | Is phone verified | Is the player phone number verified. |
|  | Player currency | The player currency. |
|  | Player gender | The player gender. |
|  | Player registration date | The player registration date. |
|  | Player wants to receive emails | Does the player want to receive emails. |
|  | Player wants to receive SMS | Does the player want to receive SMS. |
|  | Player account status | The player account status. |
|  | Is test player | Is it a test player. |
|  | Player citizenship | The player citizenship. |
|  | Player language | The player language. |
|  | Player deposit is blocked | The player deposit is blocked. |
|  | Player withdrawal is blocked | The player withdrawal is blocked. |
|  | Player account is blocked | The player account is blocked. |
|  | Player gameplay is blocked | The player gameplay is blocked. |
|  | Player traffic source | Where did the player come from. |
| **Event** |  |  |
|  | Current deposit amount | The current deposit amount. |
|  | Current withdraw amount | The current withdraw amount. |
|  | Current canceled withdraw amount | The current canceled withdraw amount. |
|  | Round event total bet | The current round total bet. |
|  | Round event total bet (cash) | The current round cash total bet. |
|  | Round event total bet (bonus) | The current round bonus total bet. |
|  | Round event total win | The current round total win. |
|  | Round event total win (cash) | The current round cash total win. |
|  | Round event total win (bonus) | The current round bonus total win. |
|  | Round event loss | The current round total loss. |
|  | Round event loss (cash) | The current round cash total loss. |
|  | Round event loss (bonus) | The current round bonus total loss. |
| **Statistics** |  |  |
|  | Granted bonus amount | The sum of all granted bonuses for the player. |
|  | Granted bonus amount for the period | The sum of the granted bonuses for the player, for the period. |
|  | Bonus cost | The sum of all the cash released from the player bonuses. |
|  | Bonus cost for the period | The sum of the cash released from the player bonuses, for the period. |
|  | Cash-in amount | The sum of all the money cashed in for the player. |
|  | Cash-in amount for the period | The sum of the money cashed in for the player, for the period. |
|  | Cash-out amount | The sum of all the money cashed out for the player. |
|  | Cash-out amount for the period | The sum of the money cashed out for the player, for the period. |
|  | GGR | The gross gaming revenue. |
|  | GGR for the period | The gross gaming revenue, for the period. |
|  | RTP | RTP (Return to player). |
|  | RTP for the period | RTP (Return to player), for the period. |
|  | RTP (cash) | RTP (Return to player, in cash). |
|  | RTP (cash) for the period | RTP (Return to player, in cash), for the period. |
|  | RTP (bonus) | RTP (Return to player, in bonus). |
|  | RTP (bonus) for the period | RTP (Return to player, in bonus), for the period. |
|  | Revoked bonus amount for the period | The sum of the player revoked bonuses, for the period. |
|  | Total revoked bonus amount | The total sum of all the player revoked bonuses. |
|  | Converted bonus amount for the period | The sum of the player converted bonuses, for the period. |
|  | Total converted bonus amount | The total sum of all the player converted bonuses. |
|  | Free spins converted to cash for the period | The sum of the player converted freespins to cash, for the period. |
|  | Free spins converted to cash | The total sum of all the player converted freespins to cash. |
| **Campaigns** |  |  |
|  | Total Campaign trigger counter | How many times this campaign can be triggered. |
|  | Campaign trigger counter | How many times this campaign can be triggered, for the period. |

If some of the conditions are not listed&mdash;contact the support to add new ones.