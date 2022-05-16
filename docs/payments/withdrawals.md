---
sidebar_position: 2
sidebar_label: Withdrawals Tab
---

# Withdrawals Tab

Withdrawals Tab consists all info about the Withdrawals on the site.

The operator can manage Withdrawals under Withdrawals sub-menu item at the Payments Section:

![Withdrawals](https://i.imgur.com/uCQTdu8.png)

| # | Field | Description |
|-|-|-|
| 1 | **Menu Item** | Withdrawals Tab is a sub-item under the Payments tab at the left menu bar. |
| 2 | **Filters** |  <p>The page opens with the default filtering by Withdrawals, which were initiated in the past 30 days.</p><p>The operator can filter the table by the following fields:</p><p>![filter_Withdrawals](https://i.imgur.com/BlELZ9B.png)</p> |
| 3 | **Withdrawals Table** | The table with the list of the attributions, [more info below](#withdrawals-table). |
| 4 | **![player_edit_menu](https://i.imgur.com/HrALxrY.png)** | Click to open the context menu and select Approve, Decline or Cancel the Withdrawal.<p>Another operator must confirm the selected action at the [Manual Adjustments Section](/docs/manual_adjustments).</p> |

## Withdrawals Table

| Column | Description |
|-|-|
| **☑** | Checkbox for mass selection &mdash; select several items to Approve, Decline, or Cancel them at once. |
| **Initiated** | The Date and Time of the player payment, the format is yyyy-mm-dd hh:mm:ss. |
| **Trx ID** | The unique ID of the transaction.<p>Hover on and click the icon to the right to copy the personal number to the clipboard.</p>Click to open the [Payment Details Page](/docs/players/player-profile/profile-payments-tab#transaction-details-page). |
| **Player ID** | The Id of the player.<p>Hover on and click the icon to the right to copy the personal number to the clipboard.</p>Click to open the [Player Withdrawals Page](/docs/players/player-profile/profile-payments-tab). |
| **Player Name** | The name of the player who did the Withdrawal. |
| **Validated For Withdraw** | If the player if validated &mdash; *true* or *false*. |
| **Pending Documents** | If the player has Pending Documents &mdash; *true* or *false*. |
| **Status** | The payment Status: Initiated, Error, Processing, Pending, Failed, Successful, Scheduled Approval, Canceled. |
| **Updated At** | The Date and Time when the payment status was updated, the format is yyyy-mm-dd hh:mm:ss. |
| **Total Amount** | Total money amount spent by the player for the payment. |
| **Amount** | The money amount, which is transferred to the player's account. |
| **Payment Method** | The Payment Method through which the player performed the payment: CreditCard, Bank Account, CNP, Visa, MasterCard, Mobile, Android/Google Pay, etc. |
| **Provider** | The payment service provider through which the player performed the payment: TopPay, SafeCharge, PaySafeCard, etc. |
| **Fee Amount** | The amount of Fee (tax to the state and legal fees) taken by the site's provider. |
| **Amount after Tax** | The money amount, which is transferred to the player's account. |
| **Card Number** | The Number of the Card to which the player performed the payment, if applicable. |
| **Name on a Card** | The Name on the Card to which the player performed the payment, if applicable. |
| **Bank Name** | The Name of the Bank to which the player performed the payment, if applicable. |
| **Bank Number** | The Bank Number to  which the player performed the payment, if applicable. |

&ast; &mdash; *n/a* if data is not provided.
❕ If the player makes a withdrawal &mdash; their Bonus balance will be canceled.