---
sidebar_position: 2
sidebar_label: Wallet Transactions Tab
---

# Wallet Transactions Tab

Wallet Transactions reflect all changes made over the player wallet accounts.

The operator can view Wallet Transactions as a single section at the BO:

![wallet_transactions](https://i.imgur.com/wn0Piub.png)

On top of the page, there is the **[+Add Filters]** button.
The operator can filter the table by *Date created* or *Game ID*:

![filter_wallet_transactions](https://i.imgur.com/V2buZp4.png)

Below, there is a Wallet Transaction Table with an infinite scroll that contains all the site wallet transactions sorted by descending *Created Date*.

## Wallet Transactions Table

| Column | Description |
|-|-|
| **Created Date** | Date&Time of the transaction. |
| **Account Name** | The ID of the player for whom the transaction was carried out.<p>Click to open [Wallet Transactions for this player](/docs/players/player-profile/profile-wallet-transactions-tab).</p> |
| **Transaction Type** | The type of the transaction. [More info below](#transaction-types). |
| **Amount** | The Amount of the money in the transaction.<p>If the color of the amount is red&mdash;the money is taken from the player.</p> |
| **Balance Before** | The player balance before the transaction. |
| **Balance After** | The player balance after the transaction. |
| **Account Type** | The type of the account of the transaction:<p>real&mdash;real money account,</p><p>bonus&mdash;bonus money account.</p> |
| **Game ID** | The ID of the game for which the transaction was carried out. |

&ast;&mdash;*n/a* if data is not provided.

### Transaction Types

| Type | Description |
|-|-|
| **Bet** | Bet operation. The amount is negative, contains how much money is subtracted from the account. |
| **commitBet** | Sports bet operation. The amount is negative, contains how much money is subtracted from the account. |
| **cancelBet** | Cancel bet. The amount is positive, contains the opposite value of the bet. |
| **win** | Win operation. The amount is positive, contains how much money the player wins during an ordinary spin (one round). |
| **jackpotWin** | Jackpot win. The amount is positive, contains how much money the player wins as a jackpot. |
| **refund** | Amount is negative, uses to cancel the last win.<p>* Only for sports transactions.</p> |
| **withdraw** | Withdraw cash. The amount is negative, contains how much money is subtracted from the player's account. |
| **withdrawFee** | Withdraw cash fee. The amount is negative, contains how much money is subtracted to the site as a withdrawal fee from the player's account. |
| **deposit** | Deposit cash. The amount is positive, contains how much money is added to the real money player's account as cash. |
| **depositFee** | Deposit cash fee. The amount is negative, contains how much money is subtracted to the site as a deposit fee from the player's account. |
| **cancelWithdraw** | Cancel withdraw. The amount is positive, contains the opposite operation of withdraw. |
| **cancelWithdrawFee** | Cancel withdrawal fee. The amount is the opposite operation of withdrawFee. |
| **createBonus** | Bonus account creation. The amount is positive, contains how much bonus money the site gives to the player. |
| **createFreeSpins** | Free spins account creation. The amount is positive, contains how much bonus money the site gives to the player. |
| **releaseFreeSpinsAsBonus** | Free spins winnings to the player's bonus account. The amount is positive, contains the amount of the bonus money. |
| **releaseFreeSpinsAsReal** | Free spins winnings to the player's real account. The amount is positive, contains the amount of the cash money. |
| **returnMaxCapping** | The total cash amount we give to the player from the bonus he wins. MaxCapping parameter restricts the total cash amount we give to players from the release bonus. |
| **releaseBonus** | The cash amount we give to the player from the bonus he wins:<p>if the **Account Type** field is *bonus*&mdash;the player bonus account is reset to zero,</p><p>if the **Account Type** field is *real*&mdash;the money converts from the player's bonus account to the real one.</p> |
| **voidBonus** | Expire bonus. The amount is negative, contains how much bonus money was revoked after the expiration date. |
| **voidFreeSpins** | Expire free spins. The amount is negative, contains how much Free Spins was revoked after the expiration date. |
| **revokeAccount** | Manual revoke of Free Spins or Bonus account. The amount is negative, contains how much was revoked. |
| **cashIn** | Manual adjustment of cash. The amount is positive, contains how much money the site gives to the player. |
| **cashOut** | Manual adjustment of cash. The amount is negative, contains how much money the site subtracts from the player. |
| **incrementTurnOver** | Contains information if the player's TurnOver was changed. Always zero. |
| **reimbursement** | The amount contains insufficient funds if the player has not enough money to refund one of his winnings. Only for Sport. |
| **revokeWin** | The amount of winning money if:<p>the player has an incomplete round with a bet made from his bonus account,</p><p>the operator revoked this bonus amount,</p><p>the player continues the round and wins from a non-existing bonus account.</p> |
| **refundReleaseFreeSpins** | The amount of refund for the round after the successful win. Only for the Sports games, if this was a transaction for freeBet that was released&mdash;we restore the freeBet account and refund freeBet winning to the bonus account. |
| **refundReleaseFreeSpinsAsReal** | The amount of refund for the round after the successful win. Only for the Sports games, if this was a transaction for freeBet that was released&mdash;we restore the freeBet account and refund freeBet winning to the real money. |