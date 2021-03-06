---
sidebar_position: 3
sidebar_label: Campaigns Tab
---

# Campaigns Tab

The campaign is the sequence of actions to apply bonuses and rewards for the player actions.

The operator can manage campaigns under Campaigns sub-menu item at the Engagement Section:

![campaigns](https://i.imgur.com/y6raKKa.png)

| # | Field | Description |
|-|-|-|
| 1 | **Menu Item** | Campaigns Tab is a sub-item under the Engagement tab at the left menu bar. |
| 2 | **Campaigns Table** | The table with the list of the site's campaigns, [more info below](#campaigns-table). |
| 3 | **[Add Campaign] Button** | Click this button to [create new Campaign](#create-the-campaign). |
| 4 | **![player_edit_menu](https://i.imgur.com/HrALxrY.png)** | Click to open the context menu and select [Edit](#edit-the-campaign), Activate/Disable, Delete, or [Clone](#clone-the-campaign) the campaign. |

## Campaigns Table

| Column | Description |
|-|-|
| **☑** | Checkboxes for mass selection&mdash;select different campaigns to Activate/Deactivate them at once. |
| **ID** | The unique campaign ID. |
| **Name** | The Campaign Name. |
| **Status** | The Campaign Status:<p>Active&mdash;the campaign is currently running on the site</p><p>The campaign can be activated only when the Reward and Schedule are set.</p><p>Draft&mdash;the campaign is in draft status</p><p>Stopped (Inactive)&mdash;the campaign is over or currently stopped on the site.</p> |
| **Product** | The Product to run the campaign to: *Casino* or *Sports*. |
| **Description** | Short Campaign Description. |
| **Hidden** | If enabled&mdash;the campaign is invisible for the player on the site. He will receive notification and the campaign rewards after completing the conditions to get it. |
| **Schedule** | The Campaign Schedule. |

## Create the Campaign

![add_campaign](https://i.imgur.com/Tq04FSJ.png)

The operator can create new Campaigns and select audiences, add different conditions to the selected audiences, schedule the campaign, add campaign rewards, and see the list of the players who triggered the campaign reward.

Click the **[Save]** Button to create a new Campaign or click the **[Cancel]** Button to discard changes.

There are 4 tabs to operate while creating the campaign:

1. [General Tab](#campaign-general-tab)
2. [Schedule Tab](#campaign-schedule-tab)
3. [Rewards Tab](#campaign-rewards-tab)
4. [Granted Players Tab](#campaign-granted-players-tab)

### Campaign General Tab

![campaign_general](https://i.imgur.com/DfnKsNI.png)

The operator can customize general campaign settings in this tab:

| # | Field | Description |
|-|-|-|
| 1 | **Back Button** | Click to go to the previous screen. |
| 2 | **Name** | Enter Campaign Name. |
| 3 | **Description** | Enter Campaign Description. |
| 4 | **Status** | Select Campaign Status.<p>In **Create** Mode only *Draft* Status is available.</p><p>In **Edit** Mode the operator can select *Active, Draft and Inactive* Statuses.</p> |
| 5 | **Type** | Select Campaign Type:<p>Adjustment&mdash;the campaign based on actions with player adjustments</p><p>Campaign Granted&mdash;the campaign based on granted campaigns</p><p>Cancel Withdraw&mdash;the campaign based on actions with cancelling withdrawals</p><p>Change Attribute&mdash;the campaign based on changing the attributes</p><p>Deposit&mdash;the campaign based on actions with player deposits</p><p>External Engagement Tool&mdash;the campaign based on the external engagement tools</p><p>Login&mdash;the campaign based on actions with logging in</p><p>Mini game&mdash;the campaign based on the [mini game with predefined Visibility Condition](#mini-games)</p><p>Registration&mdash;the campaign based on actions with completing the registration on site</p><p>Round&mdash;the campaign based on actions with games</p><p>Schedule&mdash;the campaign based on the player's schedule.</p><p>Update&mdash;the campaign based on actions with updating the player profile</p><p>Withdraw&mdash;the campaign based on actions with withdrawals.</p> |
| 6 | **Product** | Select Product to run the campaign to: *Casino* or *Sports*. |
| 7 | **Visibility Conditions** | If the **Campaign is visible for the player** radiobutton is active&mdash;the campaign is visible for the player on the site Promo Section.<p>If it is not active&mdash;the player will receive notification and the campaign rewards only after completing the conditions to get it.</p><p>Click [+ Add Condition] to add additional visibility conditions for the campaign from the [predefined conditions](#predefined-conditions). Choose the section and different options or enter values for the selected conditions:</p><p>![add_conditions_gif](https://i.imgur.com/rDfWUIW.gif)</p><p>The campaign will be visible if the player suits to selected conditions.</p><p>To delete the condition&mdash;press [x] near the needed row.</p> |
| 8 | **Evaluate players** Button | Click this button to calculate how many players the campaign will be available to. The number of the players will be displayed on the button top right corner. |
| 9 | **Trigger Conditions** | Click [+ Add Condition] to add conditions that will trigger the campaign for the players when they complete these conditions. Choose the section and different options or enter values for the selected players from the [predefined conditions](#predefined-conditions):<p>![add_audience_gif](https://i.imgur.com/86i0BlN.gif)</p><p>To delete the condition&mdash;press [x] near the needed row.</p> |
| 10 | **Cancel** | Click to cancel the changes and return to the Campaigns Tab. |
| 11 | **Save** | Click to save the Campaign. |

#### Mini Games

There are currently 2 types of mini games: *Wheel of Fortune (WoF)* and *Lootbox*.
More info about the mini games mechanics can be found [here](https://confluence.skywindgroup.com/display/sw360/Minigames.+Player+Manual).

If the **Campaign Type** = *Mini Game* is selected the following **Visibility Conditions** will be applied:
![minigame_campaign_settings](https://i.imgur.com/yFRghtl.png)
The operator must select only the mini game type in the Visibility Conditions.
### Campaign Schedule Tab

![campaign_schedule](https://i.imgur.com/qW5tCzS.png)

The operator can view and customize different schedules for the campaign in this tab.

Click ![edit](https://i.imgur.com/1Pphj6e.png) to [edit](#add-schedule-pop-up) the selected schedule, click ![del](https://i.imgur.com/Zyl7T6g.png) to delete the selected schedule.

Click **[+ Add Schedule]** to open [Add Schedule Pop-Up](#add-schedule-pop-up):

#### Add Schedule Pop-Up

![add_schedule_popup](https://i.imgur.com/0HM5RUz.png)

The operator can select Time Zone to run the campaign, Start Date (enter manually or click the 📅 icon to select start date from the date picker), Start and End Time.

If the Campaign needs to run on the specific days&mdash;activate **[In Range]** checkbox ☑ and then select on what days of the week the campaign must be active:

![add_schedule_popup_range](https://i.imgur.com/k6QNFVo.png)

### Campaign Rewards Tab

![campaign_rewards](https://i.imgur.com/UTGwAGi.png)

The operator can view and add Rewards from the [Rewards Tab] to the Campaign in this tab.

Click ![del](https://i.imgur.com/Zyl7T6g.png) to delete the selected reward.

Click **[+ Add Reward]** to open [Add Rewards Pop-Up](#add-rewards-pop-up):

#### Add Rewards Pop-up

![add_rewards](https://i.imgur.com/YNnmuB1.png)

Select needed rewards using checkboxes ☑ to the left and click the **[Add]** Button to add them to the selected Campaign, or click the **[Cancel]** Button to close the pop-up.

#### Campaign Granted Players Tab

![campaign_granted_players](https://i.imgur.com/IVafj1F.png)

The operator can view players who received bonuses from the campaign in this tab.

##### Granted Players Table

| Column | Description |
|-|-|
| **Created Time** | The date and time when the reward was granted. The format is dd/mm/yyyy hh:mm:ss. |
| **Player ID** | The ID of the player who got the reward.<p>Hover on and click the icon to the right to copy the ID to the clipboard.</p>Click to open the [Player Profile General Page](/docs/players/player-profile/profile-general-tab). |
| **Payment ID** | The ID of the payment for the reward.<p>Hover on and click the icon to the right to copy the ID to the clipboard.</p> |
| **Bonus Amount** | The amount of the granted reward. |
| **Promotion Type** | The type of the granted reward. |
| **Promotion Name** | The name of the granted reward. Click to open the reward page. |
| **Status** | The reward status. |
| **Last Error** | The corresponding error, if applicable. |

## Edit the Campaign

The operator can edit all of the campaign information listed in the [Create the Campaign Section](#create-the-campaign).

## Clone the Campaign

Cloning the campaign means copying everything but changing the name.
To clone the campaign&mdash;click ![player_edit_menu](https://i.imgur.com/HrALxrY.png) near needed campaign, select **[Clone]**, and enter the cloned campaign name:

![clone_campaign](https://i.imgur.com/0TT0UiG.gif)
#### Predefined Conditions

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
|  | Granted Campaign | The granted campaign selection. |
|  | Campaign Available | The available campaign selection. |
|  | Total selected campaign trigger counter | How many times the selected campaign was triggered. |
|  | Trigger selected campaign counter | How many times the selected campaign was triggered, calculated by days. |

If some of the conditions are not listed&mdash;contact the support to add new ones.