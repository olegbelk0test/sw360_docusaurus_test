---
sidebar_position: 8
sidebar_label: Payments Tab
---

# Payments Tab

## Payments Tab

The Payments Tab consists of the list of all player's deposits and withdrawals:

![bo_profile_payments_tab](https://i.imgur.com/832ytwc.png)

The tabs on top help to choose what info to show&mdash;*All* payments, *Deposits*, or *Withdrawals*.

| Field | Description |
|-|-|
| **Payment ID** | The unique ID of the payment. Click to open the [Payment Details Page](#transaction-details-page). |
| **Type** | The type of action: *deposit* or *withdraw*. |
| **Payment Method** | The Payment Method through which the player performed the payment: CreditCard, Bank Account, CNP, Visa, MasterCard, Mobile, Android/Google Pay, etc. |
| **Provider** | The payment service provider through which the player performed the payment: TopPay, SafeCharge, PaySafeCard, etc. |
| **Status** | The payment Status: Initiated, Error, Processing, Pending, Failed, Successful, Scheduled Approval, Canceled. |
| **Amount** | The money amount, which is transferred to the player's account. |
| **Total Amount** | Total money amount spent by the player for the payment. |
| **Initiated** | The Date and Time of the player payment, the format is yyyy-mm-dd hh:mm:ss. |
| **Platform** | The payment platform: *mobile*, *desktop*. |
| **Fee Amount** | The amount of Fee (tax to the state and legal fees) taken by the site's provider. |
| **Trx ID** | Transaction ID&mdash;transaction number from payment providers. Click to open the [Payment Details Page](#transaction-details-page). |
| **Campaign Name** | Promo Campaign Name, if applicable. Click to open the selected campaign. |
| **Card Number** | The Number of the Card from which the player performed the payment, if applicable. |
| **Name on a Card** | The Name on the Card from which the player performed the payment, if applicable. |
| **![player_edit_menu](https://i.imgur.com/HrALxrY.png)** | Click to open the context menu and select View to open the [Payment Details Page](#transaction-details-page). |

&ast;&mdash;*n/a* if data is not provided.

❕ The player can only deposit up to 900 RON without [Documents Validation](#verification-tab-player-documents-section).
❕ If the player makes a withdrawal&mdash;their Bonus balance will be canceled.

## Transaction Details Page

Transaction Details Page opens on click on the **Payment ID** or **Trx ID** at the Player Payments Tab or at the [Deposits](/docs/payments/deposits)/[Withdrawals](/docs/payments/withdrawals) Tabs.

The operator can view the player transaction details on this page:

![bo_transaction_page](https://i.imgur.com/BDc9mDw.png)

The Page consists of 3 sections:

1. **[General Transaction Information](#transaction-details-page-general-transaction-information)**.
2. **[Transaction Tracking](#transaction-details-page-transaction-tracking)**&mdash;tracking info of the transaction money.
3. **[Wallet Transactions](#transaction-details-page-wallet-transactions)**&mdash;the player's wallet transactions regarding the viewed transaction.

There is the transaction header on top of the page with the clickable player personal number (click to open [player profile](/docs/players/player-profile/profile-general-tab)), status of the transaction, player information, registration and login data.
### Transaction Details Page. General Transaction Information

The operator can view the transaction detailed attributes on this page:

![bo_transaction_general_tab](https://i.imgur.com/Tibefd9.png)

| # | Field | Description |
|-|-|-|
| 1 | **Initiated** | The date and time of the transaction. The format is dd/mm/yyyy hh:mm:ss. |
| 2 | **Payment ID** | The unique ID of the payment. Click the icon to the right to copy the ID to the clipboard. |
| 3 | **Provider** | The provider of the player payment method (payment technology) based on the site preferences: TopPay, SafeCharge, PaySafeCard, etc. |
| 4 | **Method Type** | Type of the player payment based on the site preferences: Skrill, Visa, MasterCard, iDeal, etc. |
| 5 | **Status** | The payment Status: Initiated, Error, Processing, Pending, Failed, Successful, Schedule Approval, Canceled. |
| 6 | **Trx ID** | The unique transaction ID. Click the icon to the right to copy the ID to the clipboard. |
| 7 | **Payment Country** | The country of the payment. |
| 8 | **Bank Name** | The Name of the Bank to which the player performed the payment, if applicable. |
| 9 | **Bank Number** | The Bank Number to  which the player performed the payment, if applicable. |
| 10 | **Account Type** | The type of the account: *bonus* or *real*. |
| 11 | **Amount** | The amount of money transferred to/from the player account depending on the transaction type (deposit/withdrawal). |
| 12 | **Total Amount** | The total amount of money, which is transferred to/from the player account depending on the transaction type (deposit/withdrawal). |
| 13 | **Fee Amount** | The Fee Amount (tax to the state and legal fees), which is transferred from the player to the site provider. It is the commission for the transaction. |
| 14 | **Tax Amount** | The Tax Amount (fee in %) transferred from the player to the site provider. It is the commission for the transaction. |
| 15 | **Platform** | The transaction platform: *mobile* or *desktop*. |
| 16 | **Type** | The type of the transaction: *deposit* or *withdraw*. |
| 17 | **Card Number** | The number of the transaction card. |
| 18 | **Name on Card** | The name on the transaction card. |
| 19 | **Expiration Date MM/YY** | The expiration date of the transaction card. |
| 20 | **IP** | The IP Number, from which player did the transaction. | IP address where this payment was made |
| 21 | **Email** | The player's email. | Email of the player |
| 22 | **Reference Number** | Transaction number for identifying the transaction in the provider system. | Unique reference number of the payment |
| 23 | **Actions** | <p>On some statuses the operator can approve, decline, retry or cancel the transaction.</p><p>Click on the button to perform the action.</p><p>Click on the 🔽 symbol near the button to add the comment to the action.</p><p></p><p>![decline](https://i.imgur.com/uZWUmsK.gif)</p><p>Click on the 🔽 near the Approve button to schedule the approval of the transaction:</p><p>![trx_schedule_appr](https://i.imgur.com/pFWWQIT.gif)</p> |

### Transaction Details Page. Transaction Tracking

The Operator can see the table with the transaction tracking details on this page:

![bo_transaction_tracking_tab](https://i.imgur.com/7RSLV2A.png)

| # | Field | Description |
|-|-|-|
| 1 | **Initiated** |The Date and Time of the transaction in the format: yyyy-mm-dd hh:mm:ss. |
| 2 | **Status** | Transaction Status: Initiated, Processing, Approved, Successful, Pending, Failed, Error. |
| 3 | **Initiator** | Who initiated the transaction: the player or the system. |
| 4 | **Comment** | JSON of Transaction. |

### Transaction Details Page. Wallet Transactions

The operator can see the table with the player wallet operations regarding the selected transaction on this page:

![bo_transaction_wallet_tab](https://i.imgur.com/Lx812b7.png)

| # | Field | Description |
|-|-|-|
| 1 | **Created Date** | The Date and Time of the transaction in the format: yyyy-mm-dd hh:mm:ss. |
| 2 | **Account Name** | Status of the player account: *real* or *bonus*. Click to open the [Player Payments Tab](/docs/players/player-profile/profile-payments-tab). |
| 3 | **Account Type** | Status of the player account: *real* or *bonus*. |
| 4 | **Transaction Type** | The type of the transaction: deposit, depositFee, withdraw, withdrawFee. |
| 5 | **Amount** | The amount of the transaction. |
| 6 | **Balance Before** | The player balance before the transaction. |
| 7 | **Balance After** | The player balance after the transaction. |