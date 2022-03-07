---
sidebar_position: 13
---

# Audit Tab

## Audit Tab

The Audit Tab consists of the list of the player's actions regarding the login, restoring the password, SMS/Email verification, player status, and actions history:

![bo_player_audit](https://i.imgur.com/F8Vki64.png)

| # | Field | Description |
|-|-|-|
| 1 | **Login Attempts** | The counter of the number of the player attempts to enter wrong credentials (email/username) when logging on. The maximum is 3 attempts.<p>When the player enters wrong credentials 3 times and the counter shows 3/3 &mdash; the player account blocks so only the operator can unblock it and the [**Reset Counter**] button becomes active. Click this button to reset the counter.</p> |
| 2 | **Password Recovery Attempts** | The counter of the number of the player attempts to click the [Forgot Password] button and to restore the password. The maximum is 3 attempts.<p>When the player fails to restore the password 3 times and the counter shows 3/3 &mdash; the player account blocks so only the operator can unblock it and the [**Reset Counter**] button becomes active. Click this button to reset the counter.</p> |
| 3 | **Attempts of Sending Email Code** | The counter of the number of the player attempts to send himself the new verification code via email. The maximum is 3 attempts.<p>When the player fails to verificate email 3 times and the counter shows 3/3 &mdash; the player can not send more verification emails, and the [**Reset Counter**] button becomes active. Click this button to reset the counter.</p> |
| 4 | **Attempts of Sending SMS Code** | The counter of the number of the player attempts to send himself the new verification code via SMS. The maximum is 3 attempts.<p>When the player fails to verificate SMS 3 times and the counter shows 3/3 &mdash; the player can not send more verification SMSes, and the [**Reset Counter**] button becomes active. Click this button to reset the counter.</p> |
| 5 | **[Trigger Password Change] Button** | Click this button to send the email with the link to reset the password to the player. |
| 6 | **[Kill Player Sessions] Button** | Click this button to close all the player's active sessions and kick him off the site. |
| 7 | **Login/Logout Table** | The table with all of the player's logins and logouts actions. More info is [below](#audit-tab-loginlogout-table). |
| 8 | **Status History Table** | The table with all of the player's status change information. More info is [below](#audit-tab-status-history-table). |
| 9 | **Player Audit Table** | The table with all of the player's information about verification and limits actions. More info is [below](#audit-tab-player-audit-table). |
| 10 | **Operation Audit Table** | The table with all of the player's information about the operation with the player profile. More info is [below](#audit-tab-operation-audit-table). |

### Audit Tab. Login/Logout Table

| Field | Description |
|-|-|
| **Created** | The date and time of the action. The format is yyyy-mm-dd hh:mm:ss. |
| **Action** | The type of the action: *Login*, *Logout*. |
| **Status** | The status of the action: *Success*, *Failed*. |
| **Country** | The country code from which the action was performed. |
| **Device** | The Device from which the action was performed. |
| **OS** | The Operating System from which the action was performed. |
| **User Agent** | The Browser from which the action was performed. |
| **IP** | The IP from which the action was performed. |

&ast; &mdash; *n/a* if data is not provided.

### Audit Tab. Status History Table

| Field | Description |
|-|-|
| **Created** | The date and time of the action. The format is yyyy-mm-dd hh:mm:ss. |
| **Status** | The new player status set by action. |
| **Period** | The duration of the new status. |
| **Changed By** | Who set the status: the System (automatically), the Operator, or The Player. |
| **Reason** | The reason for the status change. |

&ast; &mdash; *n/a* if data is not provided.

### Audit Tab. Player Audit Table

The operator can filter the table by Date and Action &mdash; select needed values in the fields and click the [**Search**] button to filter.

| Field | Description |
|-|-|
| **Created** | The date and time of the action. The format is yyyy-mm-dd hh:mm:ss. |
| **Action** | The type of the action: *Self Exclusion*, *Self Close*, *Cool Off*, *Verification*, *Name Verified*, *Address Verified*, *Age Verified*, *User Verified*, *Modify Limit*. |

### Audit Tab. Operation Audit Table

| Field | Description |
|-|-|
| **Created** | The date and time of the action. The format is yyyy-mm-dd hh:mm:ss. |
| **Operator** | The name of the operator who did the action. |
| **Action** | The type of the action:<p>*Update Player*</p><p>*Create Player*</p><p>*Delete Player*</p><p>*Change Language*</p><p>*Verify Player Account*</p><p>*Change Deposit Limit*</p><p>*Change Loss Limit*</p><p>*Change Time Limit*</p><p>*Cool Off Change*</p><p>*Self Exclusion Change*</p><p>*Self Close Change*</p><p>*Update Account Status*</p><p>*Reset Forgot Password*</p><p>*Forgot Password*</p><p>*Change Password*</p><p>*Reset Failed Login*</p><p>*Change Blocks*</p><p>*Update or Create Player Source of Funds*</p><p>*Document Validation Upload*</p><p>*Document Validation Update*</p><p>*Document Source of Funds Upload*</p><p>*Change Verify Age Status*</p><p>*Change Verify Address Status*</p><p>*Change Verify Name Status*</p><p>*Change Verify Source of Funds Status*</p><p>*Change Verify Face Recognition Status*</p><p>*Create Note About Player*</p><p>*Delete Note About Player*</p><p>*Update Note About Player*</p><p>*Player Forgot Password*</p><p>*Social Photo Upload*.</p> |
| **Status Code** | The action status code. |
| **Request** | The request to the action. Hover on and click the 🔽 button to the right to expand the request. |
| **Response** | The action response. Hover on and click the 🔽 button to the right to expand the response. |