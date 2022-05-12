---
sidebar_position: 9
sidebar_label: Flows Tab
---

# Flows Tab

Flow is the sequence of actions to create some activity on the casino's site, for example, Withdrawal Flow.

The operators can create different Flow Categories and manage Flows within categories using the back office.

The Flows Tab locates at the site's left menu bar:

![flow_categories](https://i.imgur.com/LS3Jjc4.png)

| # | Field | Description |
|-|-|-|
| 1 | **Flows Tab** | Flows Tab is an item at the site's left menu bar. Click to open Flow Categories Tab. |
| 2 | **Flow Category Tab** | A sub-item to open [One Flow Category](#flow-category-tab) with the list of flows at the site's left menu bar. |
| 3 | **Flow Categories Table** | The list of Flow Categories. Click ✏ to [edit Flow Category](#create-or-edit-flow-category), click the [Recycle Bin] Button to [delete Flow Category](#delete-flow-category). |
| 4 | **[Create Category] Button** | Click to [create new Flow Category](#create-or-edit-flow-category). |

## Create or edit Flow Category

![create_flow_category](https://i.imgur.com/sYexArX.png)

To create/edit Flow Category, the operator must enter the Category name and click **[Create]/[Edit]** Button.

## Delete Flow Category

To delete the Flow Category, click the **[Recycle Bin]** Button at the right of the category name.

❕ If there are any flows in the Category &mdash; you will see Deleting Flow Category Pop-Up:

![delete_flow_category_with_flows](https://i.imgur.com/f8uXhpM.png)

You can choose to Delete Category and move Flows to another Category (1) or to Delete Category with all the Flows (2).

Click **[Cancel]** or close the pop-up to cancel deleting, click **[Delete]** to confirm deleting the Flow Category.

## Flow Category Tab

![flow_category](https://i.imgur.com/ymaFvLh.png)

| # | Field | Description |
|-|-|-|
| 1 | **Flow Category Name** | Flow Category Tab is a sub-item under the site's left menu bar. |
| 2 | **Flows Table** | The list of Flows within opened Category, [more info below](#campaigns-table). |
| 3 | **![player_edit_menu](https://i.imgur.com/HrALxrY.png)** | Click to open the context menu and select [*Edit*](#create-or-edit-flow), [*Clone*](#clone-flow), *Change Status* or *Delete* the selected Flow. |
| 4 | **[Create Flow] Button** | Click to [create a new Flow](#create-or-edit-flow). |

### Flows Table

| Column | Description |
|-|-|
| **☑** | Checkboxes for mass selection &mdash; select different Flows to Activate/Deactivate them at once. |
| **ID** | The unique Flow ID. |
| **Name** | The Flow Name. |
| **Status** | The Flow Status:<p>Active &mdash; the flow is currently running on the site</p><p>Draft &mdash; the flow is in draft status</p><p>Stopped (Inactive) &mdash; the flow is over or currently stopped on the site.</p> |
| **Description** | Short Flow Description. |
| **Schedule** | The Flow Schedule. |

## Create or Edit Flow

![create_flow](https://i.imgur.com/tp63ab9.png)

The operator can create and edit flows, view flow logs, add different visibility conditions to select flow audiences, and schedule the flows.

| # | Field | Description |
|-|-|-|
| 1 | **Name** | Enter the Flow Name. |
| 2 | **Flow** Tab | Flow settings. |
| 3 | **Logs** Tab | <p>Click to view Flow Logs:</p><p>![flow_logs](https://i.imgur.com/xU7Zgq6.png)</p><p>The operator can view the activity of the flow (how many flows were triggered and when) on this tab.</p> |
| 4 | **Flow Scheme** | <p>The scheme of the flow.</p><p>Click **Open Flow Editor** to open the built-in Flow Editor.</p> |
| 5 | **General Tab** | <p>General flow settings:</p><p>**5.1 Category** &mdash; click to select the Flow Category under which the flow will be created</p><p>**5.2 Type** &mdash; Select Flow Type:</p><p>*Deposit* &mdash; the Flow is based on actions with player deposits</p><p>*Round* &mdash; the Flow is based on actions with games</p><p>*Update* &mdash; the Flow is based on actions with updating the player profile</p><p>*Registration* &mdash; the Flow is based on actions with completing the registration on site</p><p>*Login* &mdash; the Flow is based on actions with logging in</p><p>*Withdraw* &mdash; the Flow is based on actions with withdrawals</p><p>*Cancel Withdraw* &mdash; the Flow is based on actions with cancelling withdrawals</p><p>*Schedule* &mdash; the Flow is based on the player's schedule.</p><p>*Campaign Granted* &mdash; the Flow is based on if the campaign was granted to the player.</p>**5.3 Description** &mdash; enter flow description</p><p>**5.4 Trigger Conditions** &mdash; click [+ Add Condition] to add conditions to trigger the flow from the [predefined conditions](#predefined-conditions).</p>|
| 6 | **Schedule Tab** | The operator can view and customize different schedules for the Flows in this tab. [More info below](#flow-schedule-tab). |
| 7 | **Flow Status** | The current status of the flow: *Active* of *Draft* (Inactive). Click the button to the right to activate or deactivate the flow. |
| 8 | **Cancel** | Click to cancel the changes and return to the Flows Tab. |
| 9 | **Save** | Click to save the Flow. |
### Flow Schedule Tab

![flow_schedule](https://i.imgur.com/2MA3tAT.png)

The operator can view and customize different schedules for the Flows in this tab.

Click ![edit](https://i.imgur.com/1Pphj6e.png) to [edit](#add-schedule-pop-up) the selected schedule, click ![del](https://i.imgur.com/Zyl7T6g.png) to delete the selected schedule.

Click **[+ Add Schedule]** or **Edit** to open [Add Schedule Pop-Up](#add-schedule-pop-up):

#### Add Schedule Pop-Up

![add_schedule_popup](https://i.imgur.com/0HM5RUz.png)

The operator can select Time Zone to run the Flow, Start Date (enter manually or click the 📅 icon to select start date from the date picker), Start and End Time.

If the Flow needs to run on the specific days &mdash; select the **[In Range]** checkbox ☑ and then select on what days of the week the Flow must be active:

![add_schedule_popup_range](https://i.imgur.com/k6QNFVo.png)

Click the **[Save]** Button to create a new Flow or click the **[Cancel]** Button to discard changes.

### Adding Test Player to the Flow

The operator can add test player to the selected flow to test how it works.
To do so:

1. The operator must open the built-in Flow Editor and click the **[Test]** button

2. Select test player from the list, click on it

3. There will be a JSON with test player's properties on the next page.
   Click the **[Start]** button to apply the flow to the selected player (to test on the casino's site using the test player's credentials) or click the **[Back]** button to select another test player:

![test_flow_gif](https://i.imgur.com/TQMiwd5.gif)

## Clone Flow

To clone the Flow &mdash; click [Clone] in the Flow context menu. You will see Clone Flow Pop-Up:

![clone_flow_pop-up](https://i.imgur.com/7Rgr51k.png)

The operator needs to change the Flow Name and select the Category of the New Flow or keep selected. Click [Clone] to create the new Flow or close the Pop-Up to cancel.

#### Predefined Conditions

The list of the Conditions to apply to the selected Audiences:

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