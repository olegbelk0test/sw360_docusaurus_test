---
sidebar_position: 3
sidebar_label: Player Profile Header
---

# Profile Header

## Player Profile Header

Player Profile Header consists of quick information about the player:

![pp_header](https://i.imgur.com/84T4cUj.png)

| # | Field | Description |
|-|-|-|
| 1 | **Back Button** | Click to close the player profile and go back to the [Players Tab](#players-tab). |
| 2 | **First and Last Name** | Player first and last name. |
| 3 | **Status** | Player status on the site:<p>Green &mdash; online</p><p>Red &mdash; offline.</p> |
| 4 | **ID** | The Player Personal Number and Player's ID. Hover on and click the ![copy](https://i.imgur.com/pdcUhnE.png) Copy button to the right to copy the player's ID or the personal number to the clipboard. |
| 5 | **Test Player Tag**<p>*optional*</p> | Tag that this player is for the QA. |
| 6 | **Notes** | Player Notes Section, [more info below](#player-notes). |
| 7 | **🔼 Button** | Click this button to show/hide the player profile header:<p>![header_hide.gif](https://i.imgur.com/pGAI4DF.gif).</p> |
| 8 | **Balance** | Player balances:<p>Total &mdash; player total balance</p><p>Cash &mdash; player real money balance</p><p>Bonus &mdash; player bonus money balance</p><p>Withdrawal &mdash; player balance for withdrawing.</p><p>**8.1** and **8.2** &mdash; click these buttons to put the money to the player balance from the site balance (**Cash in**) or to take the money from the player balance to the site (**Cash out**).</p><p>At the opened pop-up enter the needed amount and the comment and click OK to perform the selected action:</p><p>![cash_in_popup](https://i.imgur.com/1NV6An2.png)</p><p>Another operator must confirm this action at the [Manual Adjustments Section](manual_adjustments.md).</p> |
| 9 | **Info** | Quick Information about the player:<p>**9.1 Status** &mdash; Current Player's [Account Status](#player-statuses).</p><p>Hover on to show the status description.</p><p>Click the **[Change]** button to [change the player's status](#change-status-pop-up).</p><p>**9.2 KYC Status** &mdash; Player verifications statuses: address, age, face, name, and source of funds.<p>KYC 0&mdash;none is verified</p><p>KYC 1&mdash;age, face, and name are verified</p><p>KYC 2&mdash;everything is verified.</p><p>Click the **[Change]** button to open the Change KYS Status Pop-Up and change the status:</p><p>![change_kyc_status_popup](https://i.imgur.com/GQrp8pm.png)</p></p><p>**9.3 Email** &mdash; The player's Email with the current status (*validated*/*non-validated*) and the icon to copy email to the clipboard.</p><p>**9.4 Phone** &mdash; The player's Phone Number with the current status (*validated*/*non-validated*) and the icon to copy email to the clipboard.</p><p>**9.5 Total Deposits** &mdash; The Sum of all player's deposits with the number of the deposits in the brackets.</p><p>**9.6 Total Withdrawals** &mdash; The Sum of all player's withdrawals with the number of the deposits in the brackets.</p><p>**9.7 Net Deposit** &mdash; The difference between the Total Deposits and Total Withdrawals.</p> |
| 10 | **Attributes** | List of Top-5 player attributes, more info at the [Attributes Section](#player-attributes). |

## Player Notes

The Notes are some kind of information regarding the player's account.

To access the notes &mdash; click **Notes** Button at the left upper corner of the player's header:

![open_notes.gif](https://i.imgur.com/EahhWkx.gif)

### Notes Priority

The notes can be of different priority, which is shown by the color of the Notes button:
| Color | Description / Priority | View |
|-|-|-|
| Blue | No Notes | ![0_notes](https://i.imgur.com/Or1UxqV.png) |
| Grey | Low Priority | ![low_notes](https://i.imgur.com/lanLoZ4.png) |
| Green | Medium Priority | ![medium_notes](https://i.imgur.com/T9JmGxa.png) |
| Red | High Priority | ![high_notes](https://i.imgur.com/StnKThl.png) |

### View All Notes

To view all the player's Notes, simply click Notes Button &mdash; the Notes will open in the sidebar:

![open_notes.gif](https://i.imgur.com/EahhWkx.gif)

* Notes sidebar opens with the button to [create a new note](#add-new-note) if the player has no notes:
  ![notes_sidebar_without_notes](https://i.imgur.com/9hcwZ2t.png)
* Notes sidebar opens automatically when the operator opens the player's profile if the player has new high priority notes.

### Notes Sidebar

| Image | Description |
|-|-|
| ![notes_sidebar](https://i.imgur.com/q1iyBDe.png) | 1. **Create Note** &mdash; click this button to [add a new note](#add-new-note).<p>2. **One Note**:</p><p>2.1 [**Note Priority**](#notes-priority),</p><p>2.2 **Created By** &mdash; which operator and when created the note,</p><p>2.3 **Note Text** &mdash; click to [view full note](#view-one-note).</p><p>3. **Recycle Bin** &mdash; hover on to the upper left corner of the note and click to delete the note.</p> |

### View One Note

Click on the Note Text to open the Note in Pop-up Window and see the Note's full text:

![open_one_note.gif](https://i.imgur.com/9DeHJCe.gif)

Click the **[Delete the Note]** Button to delete the opened note.

### Add New Note

Click the **[Create Note]** Button to add the new note to the player. The New Note Pop-up will open:

| Image | Description |
|-|-|
| ![create_note_popup](https://i.imgur.com/aGqSDNp.png) | 1. **Select Priority** &mdash; choose [Note Priority](#notes-priority).<p>2. **Note text** &mdash; enter note text.</p><p>3. **Cancel** &mdash; close pop-up without saving changes.</p><p>4. **Save** &mdash; click to save and create a new note.</p> |

### High Priority Notes Pop-up

![hpnp](https://i.imgur.com/uJv23GB.png)

This pop-up opens one time after the operator opens the player profile and wants to save some changes if the player has High Priority Notes.
It is the "stopper" for the operator with the ability to **Make changes anyway** (1) or **Open Player's Notes** (2) before making any changes.
If the operator opens another player profile and then returns to the player with High Priority Notes and makes changes &mdash; he will see this pop-up again.

## Player Statuses

The player can have 5 different statuses:

* *Active* &mdash; the account is active and the player can normally play on the site.
* *Frozen* &mdash; the account freezes if the player failed login or recover password attempts. <p>The player can reactivate the account if he clicks on the link received by email or it can be reactivated by the operator.</p>
* *Closed / Self-Closed* &mdash; the operator closed the player's account (if *self-closed* &mdash; the player closed his account himself or the operator closed the account by the player's request).<p>Only the operator can reactivate the account from this status.</p>
* *Self-Excluded* &mdash; the account is self-excluded when the player chooses to take a break from gaming. He can choose the reason and the exclusion time period.<p>The operator with certain permissions can reactivate the account in rare cases.</p>
* *Cool-Off* &mdash; similar to the *Self-Excluded* status, but in this case, the account will be reactivated automatically when the time expires and no one can reactivate it manually.

To change the status &mdash; open the needed player profile and click the [**Change**] button to open the [Change Status Pop-Up](#change-status-pop-up):

![change_status.gif](https://i.imgur.com/fl4JPTw.gif)

### Change Status Pop-Up

The operator can change the player status in this pop-up regarding the Status Change Flow:

| Current Status | Pop-up overview | Description | Status Change Flow |
|-|-|-|-|
| **Active** | ![active](https://i.imgur.com/kqvA5Vj.png) | 1. Current Account Status.<p>2. Select New Status. The statuses, to which the operator can change the current player's status, are black. Inactive statuses are grey.</p><p>3. Actions area. Different for different statuses.</p> | Active ➡ Frozen, Closed / Self-Closed, Self-Excluded, Cool-Off. |
| **Frozen** | ![frozen](https://i.imgur.com/ga4g064.png) | 3.1. Enter the reason for freezing the account. Enter at least 2 symbols.<p>3.2. Apply Button &mdash; click to change the status and close the pop-up window.</p> | Frozen ➡ Active. |
| **Closed / Self-Closed** | ![closed](https://i.imgur.com/wEUoNQs.png) | 3.1. Click to select the starting time, from which the player's account will be closed. The format is mm/dd/yyyy.<p>Or click the 📅 icon to select the starting time from the date picker.</p><p>3.2. Click to select who closed the account &mdash; the operator or the player.</p><p>If the player asked the operator to close the account &mdash; select *Player* in this field.</p><p>3.3. Click to choose the reason for closing the account.</p><p>3.4. Enter the message for the player. Enter at least 2 symbols.</p><p>The player will receive it to the registered email.</p><p>3.5. Apply Button &mdash; click to change the status and close the pop-up window.</p> | Closed / Self-Closed ➡ Active. |
| **Self-Excluded** | ![excluded](https://i.imgur.com/zFkWv37.png) | 3.1. Click to select the starting time, from which the player's account will be self-excluded. The format is mm/dd/yyyy.<p>Or click the 📅 icon to select the starting time from the date picker.</p><p>3.2. Click to select who excluded the account &mdash; the operator or the player.</p><p>If the player asked the operator to exclude the account &mdash; select *Player* in this field.</p><p>3.3. Click to select the period of exclusion &mdash; it is different for different sites. Usually, it's 6 Months, 1 Year, or 5 Years.</p><p>3.4. Click to choose the reason for the account exclusion.</p><p>3.5. Select this checkbox to automatically set the player's account status back to *Active* when the exclusion period ends.</p><p>3.6. Apply Button &mdash; click to change the status and close the pop-up window.</p> | Self-Excluded ➡ Active, Closed. |
| **Cool-Off** | ![cool-off](https://i.imgur.com/XQhQciL.png) | 3.1. Click to select starting time, from which the player's account will be on Cool-Off. The format is mm/dd/yyyy.<p>Or click the 📅 icon to select the starting time from the date picker.</p><p>3.2. Click to select who set the account on Cool-Off &mdash; the operator or the player.</p><p>If the player asked the operator to Cool-Off the account &mdash; select *Player* in this field.</p><p>3.3. Click to select the Cool-Off period &mdash; it is different for different sites. Usually, it's 1 Day, 7 Days, 4 Weeks, or 6 Weeks.</p><p>3.4. Click to choose the Cool-Off reason.</p><p>3.5. Apply Button &mdash; click to change the status and close the pop-up window.</p> | Cool-Off ➡ cannot change the status. |