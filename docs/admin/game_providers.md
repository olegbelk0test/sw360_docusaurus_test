---
sidebar_position: 3
---

# Game Providers

![game_providers_tab](https://i.imgur.com/dNRGwNt.png)

Game Providers Tab allows the Superadmin to manage SW360 Game Providers.

| # | Field | Description |
|-|-|-|
| 1 | **Menu Item** | Game Providers Settings Tab is a sub-item under the Site Tab at the left menu bar. |
| 2 | **Game Providers Table** | The table with the list of the game providers, [more info below](#game-providers-table). |
| 3 | **[Add Game Provider] Button** | Click this button to open [Add Game Provider window](#add-the-game-provider). |
| 4 | **![player_edit_menu](https://i.imgur.com/HrALxrY.png)** | Click to open the context menu and select [Edit](#edit-the-game-provider) or Disable/Enable the game provider on the back office. |

# Game Providers Table

| Column | Description |
|-|-|
| **ID** | Unique Game Provider ID. |
| **Name** | Game Provider Name. Click to open [Edit Game Provider window](#edit-the-game-provider)|
| **Game Provider Type** | Game Provider Name from the list of the platform supported providers. |
| **Blocked Countries** | The list of the countries in which games from the selected provider are blocked. |
| **# of Games** | The number of game provider games. |

### Add the Game Provider

![add_gp](https://i.imgur.com/LBoPRn2.png)

The Superadmin can add new Game Providers and load the list of games for the provider using preformatted *csv file in this window:

* To add the Game Provider, the Superadmin must fill in all the fields, load games and click [**Save**] Button or click [**Cancel**] to discard changes.
* To add the list of games &mdash; click [**Add CSV file**] Button and select necessary file to upload.
  The *.csv file will be transmitted into the games table.

### Edit the Game Provider

![edit_gp](https://i.imgur.com/DaR9jGw.png)

The Superadmin can edit all game provider info, browse games and upload more games to the provider.
To upload more games &mdash; click [**Add CSV file**] Button and select the necessary file to upload.

    ❕ The existing game info in the table will be replaced by the game info with the same names in the *.csv file.

# Games Management

The operator can manage site games under Games Management tab at the Site Settings Section:

![games_management](https://i.imgur.com/uttN3d8.png)

There is the universal search bar at the top of the table &mdash; enter at least 2 symbols to begin the search.

| Column | Description |
|-|-|
| **☑** | Checkboxes for mass selection &mdash; select different games to Activate/Deactivate them at once. |
| **Game Name** | The Game Name as displayed on the site. |
| **External ID** | The Game External ID. |
| **Game Provider** | The Game Provider. |
| **Status** | The Game Status on the site &mdash; Active or Inactive. |
| **Coefficient** | The Game coefficient used in the turnover calculation. Click to change. |
| **Thumbnail URL** | The relative URL to the game thumbnail at the CDN site. Click to change. |
| **![player_edit_menu](https://i.imgur.com/HrALxrY.png)** | Click to open the context menu and Activate/Deactivate the game on the site. |