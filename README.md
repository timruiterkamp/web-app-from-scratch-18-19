# Web App From Scratch @cmda-minor-web 18-19

In this project I build a Web app from scratch using API. The use case of this project is viewing the DATA and getting specific information about the DATA.

## Table of Contents

1. [Live demo](#live-demo)
2. [Installation](#installation)
3. [Description](#description)
4. [Which actors are there in my application](#which-actors-are-there-in-my-application)
5. [What design patterns and best practices did I use](#What-design-patterns-and-best-practices-did-I-use)
6. [What API has been used and what is the limit of the API](#What-API-has-been-used-and-what-is-the-limit-of-the-API.)
7. [How does interaction flow through the application](#How-does-interaction-flow-through-the-application)
8. [What design patterns and best practices did I use](#What-design-patterns-and-best-practices-did-I-use)
9. [What do I want to add to the project](#What-do-I-want-to-add-to-the-project)
10. [Technologies used](#technologies-used)
11. [Data sources](#data-sources)
12. [License](#license)

## Live demo

The live demo can be found at: [https://web-app-from-scratch-tim.netlify.com/](https://web-app-from-scratch-tim.netlify.com/)

|          Landings page          |           Overview page           |
| :-----------------------------: | :-------------------------------: |
| ![](gh-images/landing-page.png) | ![](gh-images/table-overview.png) |

## Installation

Clone the repository through:

```bash
git clone https://github.com/timruiterkamp/web-app-from-scratch-18-19.git
```

Install the dependencies

```bash
  yarn or npm install
```

Run the project

```bash
  npm run start
```

## Description?

My app is a representation of the current premiere league standing with the possibility to get insight to a club and player.

## Which actors are there in my application?

![Actor diagram](gh-images/actor-diagram.jpg)

## What API has been used and what is the limit of the API.

The api that has been used is the [football-data API](https://football-data.org). The football-data API is a very big dataset with over 176 competitions in it, container every information about the clubs in the competitions and the players in the clubs.

Limits:

- Scores delayed by 5 minutes
- 10 calls/minute (600 per hour)

Data that I used:

- Premiere League competition
- Premiere League standing
- Premiere League clubs
- Premiere League players

## How does interaction flow through the application

The user will be landing on the homepage where they can find information about the club in the Premiere League they support, they can see their score, goals made / goals against, standing on the league table and opponents they have to face in the next round of the Premiere League.

If they are interested in their team or in the team they have to face in the next round, they can click on the team name and look through their an overview of their players and details about the players.

> Diagram will be added soon

## What design patterns and best practices did I use

- Functional programming
- Module based developing

> Will be adding more over the weeks.

## What do I want to add to the project?

- [x] Render a list from the data
- [x] Views generated based on route
- [ ] Shadow DOM (If there is time)
- [ ] Player and team overview
- [ ] Multiple competition support
- [ ] Better design
- [ ] Select own competition
- [ ] Fix styling
- [ ] Build out the template engine
- [ ] Loading states

## Techniques used

- ParcelJS
- Fetch
- Hashrouter

## License

This repository is licensed as [MIT](LICENSE) by [Tim Ruiterkamp](https://github.com/timruiterkamp).
