---
sidebar_position: 5
sidebar_label: Users & Roles Management
---

# Users & Roles Management

Users and Roles Tab allows the Superadmin to manage Site Users, Roles and Role Permissions.

The operator can manage Users & Roles under Users & Roles sub-menu item at the Site Section:

![users_roles](https://i.imgur.com/4lKwgg1.png)

| # | Field | Description |
|-|-|-|
| 1 | **Menu Item** | Users and Roles Tab is a sub-item under the Site tab at the left menu bar. |
| 2 | **Users Tab** | The Tab with the list of the site users and their roles, [more info below](#users-tab). |
| 3 | **Roles Tab** | The Tab with the list of the site roles, [more info below](#roles-tab). |

## Users Tab

![users_tab](https://i.imgur.com/4DWmOh1.png)

| # | Field | Description |
|-|-|-|
| 1 | **[+Invite User] Button** | Click this button to [open Invite/Edit User Pop-up](#add-or-edit-the-user). |
| 2 | **Users Table** | The table with the list of the [site users](#users-table). |
| 4 | **![player_edit_menu](https://i.imgur.com/HrALxrY.png)** | Click to open the context menu and select [Edit](#add-or-edit-the-user), Disable/Enable the user, or [Reset 2FA](#reset-2fa).<p>❕ If the user's status is *Pending*&mdash;the options are Edit, Cancel Invitation of Send Invitation Again.</p> |
### Users Table

| Column | Description |
|-|-|
| **☑** | Checkboxes for mass selection&mdash;select different users to Activate/Deactivate them at once. |
| **Name** | User's First and Last name. |
| **Email** | User's Email. |
| **Roles** | User's Roles. The user can have multiple roles. |
| **Account Status** | Current Status:<p>Active&mdash;the user is active and can work in the back office.</p><p>Disabled&mdash;the user is disabled and can't log in and work in the back office.</p><p>Pending&mdash;the Superadmin invited the selected person to be the back office user and sent the verified Email.</p><p>Waiting for 2FA Reset&mdash;the user requested to reset his 2FA.</p> |
| **![player_edit_menu](https://i.imgur.com/HrALxrY.png)** | Click to open the context menu and select [Edit](#add-or-edit-the-user), Disable/Enable the user, [Reset 2FA](#reset-2fa), or Reset the Password for the user on the backoffice.<p>If the user's status is *Pending*&mdash;the options are Edit, Cancel Invitation of Send Invitation Again.</p> |

### Add or Edit the User

Invite/Edit User Pop-up:

![invite_user_roles](https://i.imgur.com/yGZHzvU.png)

The Superadmin can invite new users to be the site users/operators using this Pop-up.

To invite the new user, the Superadmin must fill in First and Last Name, User's Email, and select at least one [User Role](#the-list-of-roles) from the multiselect dropdown to this user.

By clicking the **[Send Invite]** Button, the confirmation email will be sent to the user, and the new row with the new user appears in the Users Table.

Activate "Two-factor authentication" radiobutton to enable the [2FA](/docs/sw360_overview/NEW_UI_BO_login_2fa/#two-factor-authentication-first-login) for the selected user.

### Reset 2FA

Click **[Reset Two-factor authentication]** to reset two-factor authentication for the selected user.

## Roles Tab

![roles_tab](https://i.imgur.com/Pp5MRlp.png)

| # | Field | Description |
|-|-|-|
| 1 | **[+Add Role] Button** | Click this button to [open Add/Edit Role Pop-up](#add-or-edit-the-role). |
| 2 | **Roles Table** | The table with the list of the [site roles](#roles-table). |
| 4 | **![player_edit_menu](https://i.imgur.com/HrALxrY.png)** | Click to open the context menu and select [Edit](#add-or-edit-the-role), or Delete the role. |

### Roles Table

| Column | Description |
|-|-|
| **☑** | Checkboxes for mass selection&mdash;select different users to Activate/Deactivate them at once. |
| **ID** | The unique role ID at the site. |
| **Name** |The name of the role. |
| **Description** | The role description. |
| **![player_edit_menu](https://i.imgur.com/HrALxrY.png)** | Click to open the context menu and select [Edit](#add-or-edit-the-role), or Delete the role |

### Add or Edit the Role

Add/Edit Role Pop-up:

![add_roles](https://i.imgur.com/D5r53Qr.png)

The Superadmin can add new roles to the site using this Pop-up.

To add the new role, the Superadmin must fill in the Name of the Role, its Description, and select permissions from the matrix by enabling or disabling corresponding radiobuttons.

Click [**Save**] button to save changes or click [**Discard Changes**] to discard.

#### The List of the Roles

The List of the Roles is different for every casino's site.

Here is [the list of the roles for the luck.com site](https://confluence.skywindgroup.com/pages/viewpage.action?spaceKey=sw360&title=Back+Office.+Users+and+Roles#BackOffice.UsersandRoles-TheListoftheRoles).