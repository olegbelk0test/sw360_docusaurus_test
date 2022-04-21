---
sidebar_position: 3
sidebar_label: Attributes Tab
---

# Attributes Tab

Attributes are the site/player tags which may have different values.
It's some kind of rules how to select players and audiences.

Attributes are used to determine players [attributions](/docs/engagement/attributions) and select audiences when creating the [marketing campaigns](/docs/engagement/campaigns).

The operator can manage Attributes under Attributes sub-menu item at the Site Section:

![attributes](https://i.imgur.com/DQp42JF.png)

| # | Field | Description |
|-|-|-|
| 1 | **Menu Item** | Attributes Tab is a sub-item under the Site tab at the left menu bar. |
| 2 | **Attributes Table** | The table with the list of the site's Attributes, [more info below](#attributes-table). |
| 3 | **[+ Create] Button** | Click this button to [create new Attribute](#create-a-new-attribute). |
| 4 | **![player_edit_menu](https://i.imgur.com/HrALxrY.png)** | Click to open the context menu and select [Edit](#edit-the-attribute) or Delete the attribute from the site. |

## Attributes Table

| Column | Description |
|-|-|
| **☑** | Checkboxes for mass selection &mdash; select different attributes to export or delete (?) them at once. |
| **ID** | The unique Attribute ID. |
| **Name** | The Attribute Name. |
| **Type** | The Attribute Type:<p>One Of &mdash; the Attribute can be one of different values</p><p>Number &mdash; the Attribute can be one of the numbers from the specified range</p><p>Boolean &mdash; the Attribute is True or False.</p> |
| **Default Value** | The Attribute's value by default. |
| **Possible Values** | The list of all the Attribute's possible values. |
| **Order** | The order at the player's profile page header. |
| **☑ Show in player profile** | If Active &mdash; the Attribute shows at the player's profile page header on the right:<p>![attribute_profile_header](https://i.imgur.com/Knj3cXj.png)</p> |

## Create a new Attribute

![create_attribute](https://i.imgur.com/U4nTt00.png)

The operator can create new Attributes, select their types, and add values:

| # | Field | Description |
|-|-|-|
| 1 | **Name** | Enter the Attribute name. |
| 2 | **Type** | Select the Attribute type:<p>One Of &mdash; the Attribute can be one of different values</p><p>Number &mdash; the Attribute can be one of the numbers from the specified range</p><p>Boolean &mdash; the Attribute is True or False.</p><p>More info about types below.</p> |
| 3 | **Show in player profile** | If Active &mdash; the Attribute shows at the player's profile page header. |
| 4 | **Order** | Enter the order for the player's profile: 1 &mdash; top position, 9 &mdash; lower. |

### Create a new Attribute "One Of" type

The operator can add multiple values and select default value for the attribute:

![attribute_one_of_GIF](https://i.imgur.com/AhbFBDv.gif)

It means that the attribute can be on of the added values, and the default value is the selected one.

Example: attribute that determines if the player is 18, 25 or 45+ years old. Default value is 25 y.o.

### Create a new Attribute "Number" type

The operator can set minimum and maximum values and select default value for the attribute:

![number_attr_GIF](https://i.imgur.com/YMGnSQp.gif)

It means that the attribute can be in the interval of the added numbers, and the default value is the entered one.

Example: attribute that determines if the player deposed from 1 to 100 times. Default value is 50 times.

### Create a new Attribute "Boolean" type

The operator can name the attribute and select the *True* or *False* it will be by default:

![boolean_attr_GIF](https://i.imgur.com/TuRkOAI.gif)

Example: attribute that determines the player's gender. Default value is *True* &mdash; the player's gender is male.

Click the **[Save]** Button to create new Attribute or click the **[Cancel]** Button to discard changes.

## Edit the Attribute

The operator can edit all of the Attribute information listed in the [Create new Attribute Section](#create-new-attribute).
Click on the attribute ID at the Attributes Table to enter the Edit mode.