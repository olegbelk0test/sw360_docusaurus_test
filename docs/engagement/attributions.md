---
sidebar_position: 1
sidebar_label: Attributions Tab
---

# Attributions Tab

Attributions are the rules by which the [attributes](/docs/site/attributes) are assigned to the players.

The operator can manage Attributions under Attributions sub-menu item at the Engagement Section:

![attributions](https://i.imgur.com/fXuCrXD.png)

| # | Field | Description |
|-|-|-|
| 1 | **Menu Item** | Attributions Tab is a sub-item under the Engagement tab at the left menu bar. |
| 2 | **Attributions Table** | The table with the list of the attributions, [more info below](#attributions-table). |
| 3 | **[+ Create] Button** | Click this button to [create new Attribution](#create-aynew-attribution). |
| 4 | **![player_edit_menu](https://i.imgur.com/HrALxrY.png)** | Click to open the context menu and select [Edit](#edit-the-attribution) or Delete the Attribution from the site. |

## Attributions Table

| Column | Description |
|-|-|
| **☑** | Checkboxes for mass selection&mdash;select different attributions to export or delete (?) them at once. |
| **ID** | The unique Attribution ID. |
| **Attribute Name** | The Name of the Attribute used in the Attribution. |
| **Value** | The Attribution Value. |
| **Condition** | The additional condition for the attribution. |

## Create new Attribution

![create_attribution](https://i.imgur.com/QS1o3G5.png)

The operator can create new Attribution, choose their values, and add different [predefined conditions](#predefined-conditions) to attach them to the players:

| # | Field | Description |
|-|-|-|
| 1 | **Set** | Select Attribute from the list of the [site's attributes](/docs/site/attributes). |
| 2 | **To** | Set a value of the selected Attribute. |
| 3 | **When** | Set an additional [condition(s)](#predefined-conditions) to apply to the attribution. |
| 4 | **Evaluate players** button | Click this button to calculate how many players the campaign will be available to. The number of the players will be displayed on the button top right corner. |

Click the **[Save]** Button to create new Attribution or click the **[Cancel]** Button to discard changes.

Example:
We need to determine the player who have more then 2 deposits. We select the *2nd_depositor* attribute from the list of the site's attributes, set its value to *True* and add the condition "total deposits number" more than 2:

![attribution_example](https://i.imgur.com/Fk95gVc.gif)

When some of the players will deposit more then 2 times&mdash;the attribute *2nd_depositor* will be shown at their profile header on the right:

![attr_in_header](https://i.imgur.com/Knj3cXj.png)

## Edit the Attribution

The operator can edit all of the Attribution information listed in the [Create new Attribution Section](#ccreate-new-attribution).
___
#### Predefined Conditions

The list of the Conditions to apply to the selected Attributions:

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
|  | Current withdraw amount | The current withdrawal amount. |
|  | Current canceled withdraw amount | The current canceled withdrawal amount. |
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