---
sidebar_position: 2
sidebar_label: Game Transactions Tab
---

# Game Transactions Tab

Game Transactions Tab is the list of game round actions. Game Transaction is created on each game round request &mdash; one row is for the one game transaction (round). It may contain wallet operations.

The operator can view Game Transactions as a single section at the BO:

![game_transactions](https://i.imgur.com/K5zyOi5.png)

On top of the page, there are Filters Button, Table Settings, and a universal search bar.

The operator can filter the table by every column. Click the **[+Add Filters]** button to select filters.

The operator can search game transactions by Round ID &mdash; type or paste the needed value to the search bar and press **Enter**.

Below, there is a Game Transaction Table that contains all the site game transactions sorted by descending *Finished Time* by default.

## Game Transactions Table

| Column | Description |
|-|-|
| **Started** | Date&Time starting the game round. |
| **Finished** | Date&Time finishing the game round. |
| **Personal Number** |<p>The personal number of the player for whom the transaction was carried out.</p><p>Click to open [Wallet Transactions for this player](/docs/players/player-profile/profile-wallet-transactions-tab).</p>|
| **Round ID** | <p>The ID of the round for which the transaction was carried out.</p><p>Click to open the [Transaction Details page](#transaction-details-page).</p><p>Hover on and click the icon to the right to copy the Round ID to the clipboard.</p>|
| **Game Name** | The name of the game played. |
| **Integration** | The integration/provider of the game played. |
| **Vendor** | The vendor name of the game played. |
| **Total Bet** | The player's total bet. |
| **Total Win** | The player's total win. |
| **Potential Winning** | The player's Potential Winning if the round was lost. |
| **Cash Bet** | The player's cash money bet, if applicable. |
| **Cash Win** | The player's cash money wins, if applicable. |
| **Promo Bet** | The player's bonus money bet, if applicable. |
| **Promo Win** | The player's bonus money wins, if applicable. |
| **FS Bet** | The player's free spins bet, if applicable. |
| **FS Win** | The player's free spins wins, if applicable. |
| **Free Bet Amount** | The player's free bet amount, if applicable. |
| **Free Bet Win** | The player's free bet wins, if applicable. |
| **Status** | The status of the transaction &mdash; *win*, *lost*, or *pending* (if the round is in progress). |
| **Odds** | The odds of the player's bet, if free bet. |
| **Ticket Type** | The type of the ticket, if free bet. |
| **IP** | The IP of the player. |
| **Product** | The Product player played to: *Casino* or *Sports*. |
| **Turnover Amount** | The Turnover amount for the current transaction. |
| **Total Jackpot Contribution** | The player's total jackpot contribution, if applicable. |
| **Total Local Jackpot Contribution** | The player's total local jackpot contribution, if applicable. |
| **Total Global Jackpot Contribution** | The player's total global jackpot contribution, if applicable. |
| **Total Cash Jackpot Contribution** | The player's cash money jackpot contribution, if applicable. |
| **Total Bonus Jackpot Contribution** | The player's bonus money jackpot contribution, if applicable. |
| **Total Jackpot Win** | The player's total jackpot win. |
| **Total Cash Jackpot Win** | The player's bonus money jackpot win. |
| **Total Bonus Jackpot Win** | The player's bonus money jackpot win. |

&ast; &mdash; *n/a* if data is not provided.

## Transaction Details Page

The page with the details of the selected game transaction:

![tr_details_page](https://i.imgur.com/xkxaeWC.png)

The operator can view all the game transaction details in a single page with connected to this transaction wallet operations.

There is a bet ticket preview on the page if this is the Sports transaction:

![tr_details_page_sports](https://i.imgur.com/ZJxTIBb.png)