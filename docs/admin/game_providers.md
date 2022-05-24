---
sidebar_position: 3
sidebar_label: Game Providers Management
---

# Game Providers Management

![game_providers_tab](https://i.imgur.com/0f9fhk4.png)

Game Providers Tab allows the Superadmin to manage SW360 Game Providers.

| # | Field | Description |
|-|-|-|
| 1 | **Menu Item** | Game Providers Settings Tab is a sub-item under the Admin Tab at the left menu bar. |
| 2 | **Game Providers Table** | The table with the list of the game providers, [more info below](#game-providers-table). |
| 3 | **[Add Game Providers] Button** | Click this button to open [Add Game Provider window](#add-the-game-provider). |

# Game Providers Table

| Column | Description |
|-|-|
| **ID** | <p>Unique Game Provider ID.</p><p>Click to open [Edit Game Provider window](#edit-the-game-provider).</p><p>Hover on and click the ![copy](https://i.imgur.com/pdcUhnE.png) Copy button to the right to copy the provider ID to the clipboard.</p> |
| **Name** | Game Provider Name. Click to open [Edit Game Provider window](#edit-the-game-provider). |
| **Blocked Countries** | The list of the country codes for the countries in which games from the selected provider are blocked. |
| **Game Provider Type** | Game Provider Name from the list of the platform supported providers. |
| **# of Games** | The number of game provider games. |
| **Nickname required** | Is the game provider nickname required at the casino site &mdash; true/false. |

### Add the Game Provider

![add_gp](https://i.imgur.com/Go1m4Ak.png)

The Superadmin can add new Game Providers and load the list of games for the provider using preformatted *csv file in this window:

* To add the Game Provider, the Superadmin must fill in all the fields, load games and click [**Save**] Button or click [**Cancel**] to discard changes.
* To add the list of games &mdash; click [**Add CSV file**] Button and select necessary file to upload.
  The *.csv file will be transmitted into the games table.

### Edit the Game Provider

![edit_gp](https://i.imgur.com/onq6gh6.png)

The Superadmin can edit all game provider info, browse games and upload more games to the provider.
To upload more games &mdash; click [**Add CSV file**] Button at the right and select the necessary file to upload.

    ❕ The existing game info in the table will be replaced by the game info with the same names in the *.csv file.