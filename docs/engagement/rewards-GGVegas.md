---
sidebar_position: 5
sidebar_label: Rewards Tab for GGVegas
---

# Rewards Tab for GGVegas

The Back Office **Rewards** tab is located under **Engagement** Section. It is a table with the list of all created Rewards: Bonuses, Free Spins, and Free Bets:

![bo_rewards_tab](https://i.imgur.com/BzhBBXB.png)

On top of the page, there is the button to **[Add Reward]**.

There are 4 types of rewards at the SW360 BackOffice:

* [Bonus](#add-bonus-page)&mdash;grant money to the player bonus account
* [Cash Bonus](#add-cash-bonus-page)&mdash;grant money to the player account
* [Free Spins](#add-free-spins-page)&mdash;grant free spins to play games
* [Free Bets](#add-free-bet-page)&mdash;grant free bets to bet on sports.

Click the **[Add Reward]** button and select the needed reward type from the Dropdown Menu.

## Rewards Table

| Column | Description |
|-|-|
| **☑** | Checkboxes for the mass selection. |
| **ID** | Unique Reward Identification Number in the system.<p>Click to edit the Reward. You can edit every field of the reward settings.</p> |
| **Name** | Reward Name. |
| **Type** | Reward Type&mdash;Bonus, Cash Bonus, Free Bet, or Free Spins. |
| **Amount** | Reward Amount&mdash;the amount of Bonus money, Free Spins, or the bet amount for the Free Bet. |
| **Created At** | Created Date&Time. |
| **Updated At** | Updated Date&Time. |
| **![player_edit_menu](https://i.imgur.com/HrALxrY.png)** | Click to open the context menu and select Edit or Delete Reward. |

## Add Bonus Page

Click on the **Bonus** Button at the **Add Reward** Dropdown menu to open the Add Bonus Page:

![bo_add_bonus_page](https://i.imgur.com/WpaNI50.png)

| # | Field | Description |
|-|-|-|
| 1 | **Name** | Enter Bonus Reward Name. |
| 2 | **Description** | Enter Bonus Reward Description. |
| 3 | **General Settings** | Set up general bonus settings:<p>**3.1 Bonus Code**&mdash;choose which Site's Bonus Definition to use to credit the bonus to (from the [Bonus Definition Tab](/docs/site/bonus_definition)).</p><p>**3.2 Expiration Days**&mdash;number of **days** when the Bonus Reward expires if the player has triggered it. Empty field means no expiry date.</p> |
| 4 | **Bonus Grant Settings** | How much of the Bonus is given to the player:<p>**4.1 Amount** (Bonus Grant Amount)&mdash;enter the money amount/percent from the deposit which will be given to the player as bonuses.</p><p>**4.2 Type** (Bonus Grant Amount Type):</p><p>&mdash; fixed&mdash;choose if a fixed money amount is given,</p><p>&mdash; percent&mdash;choose if the percent of the player's deposit money is given.</p><p>**4.3 Max Capping** (Maximum Grant Amount)&mdash;enter the maximum money amount that can be given to the player (if the amount given to the player is larger than this parameter — the player will receive entered amount).</p><p>Max Capping is enabled only when type: percent is selected.</p><p>**4.4 Wagering Type**&mdash;the bet's type which will be used in the turnover calculation: amount (deposit amount) / bonus / both.</p><p>**4.5 Turnover Factor** (Wagering Factor)&mdash;the multiplier for the Bonus Grant Amount. If the player bets the total amount of ("Bonus Grant Amount" * "Wagering Factor")&mdash;he reaches the turnover and can receive Bonus Grant Amount to the cash balance.</p><p>**4.6 Max Wagering Contribution**&mdash;restricts the maximum turnover contribution for the one bet.</p><p>**4.7 Min Amount Threshold**&mdash;when the player lowers his bonus balance to this value during turnover&mdash;his bonus balance will be reset to zero.</p> |
| 6 | **Bonus Receive Settings** | How the Bonus Grant Amount returns to the player's cash balance when the player reaches turnover:<p>**6.1 Amount** (Received Bonus Amount)&mdash;enter the money amount/percent from the player's bonus balance which will be given to the player as a cash balance.</p><p>**6.2 Return Type** (Received Bonus Type):</p><p>&mdash; fixed&mdash;choose if the player will receive a fixed money amount,</p><p>&mdash; percent&mdash;choose if the player will receive a percentage of his bonus balance that would be left after he reaches the turnover.</p><p>**6.3 Max Capping** (Maximum Received Amount)&mdash;enter the maximum money amount the player can receive (if the received bonus amount is larger than this parameter&mdash;the player will receive entered amount).</p><p>Max Capping is enabled only when type: percent is selected.</p> |
| 7 | **Cancel** | Click to discard entered changes. |
| 8 | **Save** | Click to save the Bonus Reward. |

## Add Cash Bonus Page

Click on the **Cash Bonus** Button at the **Add Reward** Dropdown menu to open the Add Cash Bonus Page:

![bo_add_cash_bonus_page](https://i.imgur.com/gjWvzAD.png)

| # | Field | Description |
|-|-|-|
| 1 | **Name** | Enter Bonus Reward Name. |
| 2 | **Description** | Enter Bonus Reward Description. |
| 3 | **Grant Settings** | How much of the Cash Bonus is given to the player:<p>**3.1 Amount** (Bonus Grant Amount)&mdash;enter the money amount/percent from the deposit which will be given to the player as cash bonus.</p><p>**3.2 Type** (Bonus Grant Amount Type):</p><p>&mdash; fixed&mdash;choose if a fixed money amount is given,</p><p>&mdash; percent&mdash;choose if the percent of the player's deposit money is given.</p><p>**3.3 Max Capping** (Maximum Grant Amount)&mdash;enter the maximum money amount that can be given to the player (if the amount given to the player is larger than this parameter — the player will receive entered amount).</p><p>Max Capping is enabled only when type: percent is selected.</p> |
| 4 | **Cancel** | Click to discard entered changes. |
| 5 | **Save** | Click to save the Bonus Reward. |
## Add Free Spins Page

Click on the **Free Spins** Button at the **Add Reward** Dropdown menu to open the Add Free Spins Page:

![bo_add_free_spins_page](https://i.imgur.com/W1qrnl0.png)

| # | Field | Description |
|-|-|-|
| 1 | **Name** | Enter Free Spins Reward Name. |
| 2 | **Description** | Enter Free Spins Reward Description. |
| 3 | **General Settings** | **Expiration Days**&mdash;the number of days when all the free spins expire if the player has received it. |
| 4 | **Grant Settings** | **Free Spins Amount**&mdash;the number of free spins given to the player. |
| 5 | **Free Spins Reward Type** | **5.1 Reward Type:**<p>Cash Reward&mdash;choose if the FS wins amount credits to the player's cash balance,</p><p>Bonus Reward&mdash;choose if the FS wins amount credits to the player's bonus balance.</p><p>**5.2 Select Bonus Reward**&mdash;choose bonus reward from **Rewards Tab**. The player can receive this money to the cash balance from the Bonus Reward selected in the (5.2) field.</p><p>Select Bonus Reward is enabled only when type: bonus is selected.</p> |
| 6 | **Games Settings** | Choose games where FS will work:<p>**6.1 Game Provider**&mdash;Click to choose Game Provider.</p><p>**6.2 Game Name**&mdash;click to choose the selected game provider game.</p><p>**6.3 Coin Value**&mdash;Enter the value of the one coin in the game. It calculates the Bet Amount for the FS = (coin value * number of paylines).</p><p>Click ❌ to delete the game entry.</p><p>Click **[Add Game]** to add another game entry.</p> |
| 7 | **Cancel** | Click to discard entered changes. |
| 8 | **Save** | Click to save the Free Bet Reward. |

## Add Free Bet Page

Click on the **Free Bet** Button at the **Add Reward** Dropdown menu to open the Add Free Bet Page:

![bo_add_free_bet_page](https://i.imgur.com/YEukTYC.png)

| # | Field | Description |
|-|-|-|
| 1 | **Name** | Enter Free Bet Reward Name. |
| 2 | **Description** | Enter Free Bet Reward Description. |
| 3 | **General Settings** | **Expiration Days**&mdash;the number of days when the free bet expires if the player has received it. |
| 4 | **Grant Settings** | How much of the Free Bet amount is given to the player:<p>**4.1 Amount** (Free Bet Grant Amount)&mdash;enter the money amount/percent from the deposit which will be given to the player as free bet.</p><p>**4.2 Type** (Bonus Grant Amount Type):</p><p>&mdash; fixed&mdash;choose if a fixed money amount is given,</p><p>&mdash; percent&mdash;choose if the percent of the player's deposit money is given.</p><p>**4.3 Max Capping** (Maximum Grant Amount)&mdash;enter the maximum money amount that can be given to the player (if the amount given to the player is larger than this parameter — the player will receive entered amount).</p><p>Max Capping is enabled only when type: percent is selected.</p> |
| 5 | **Release Type** | **Release Type:**<p>Full Prize&mdash;the player receives all the winning money,</p><p>FreeBet Classic&mdash;the player receives the winning money minus the bet.</p> |
| 6 | **Bet Settings** | Choose free bet activation settings:<p>**6.1 Min. number of events**&mdash;enter the minimum number of events for which the free bet will be triggered.</p><p>**6.2 Min. odd requested for each event**&mdash;enter the minimum odd for each event.</p><p>**6.3 Min. total odd requested for ticket**&mdash;enter the minimum total odd for each ticket.</p><p>**6.4 ☑ Allow bets before event starts**&mdash;select the checkbox to allow the players to bet before the event starts.</p><p>**6.5 ☑ Allow bets during the event**&mdash;select the checkbox to allow the players to bet during the event.</p><p>**6.6 ☑ Two-way market**&mdash;select the checkbox to allow to stake the Free Bet on the two-way market, for example, on the kickoff team 50/50 or the corners.</p> |
| 7 | **League or Event** | Open Dropdown to choose League or Event to apply free bet to:<p>![league_or_event](https://i.imgur.com/bnHyxaV.png).</p> |
| 8 | **Cancel** | Click to discard entered changes. |
| 9 | **Save** | Click to save the Free Bet Reward. |